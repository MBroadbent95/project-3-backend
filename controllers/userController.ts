import { Request, Response } from 'express'
import Users, { validatePassword } from '../models/users'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config/environment'

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await Users.find()
        res.send(users)
    } catch (e) {
        res.send({ message: "There was a problem getting the users." })
    }
}

export async function signUp(req: Request, res: Response) {
    try {
        console.log('Posting', req.body)

        const { userName, email, password, passwordConfirmation } = req.body // the userName is not currently used, we could add a username unique req function?

        if (password !== passwordConfirmation) {
            return res.status(400).send('Password and password confirmation do not match')
        }


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!passwordRegex.test(password)) {
            return res.status(400).send('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).send('Invalid email format')
        }

        const existingUser = await Users.findOne({ email: req.body.email })

        if (existingUser) {
            return res.status(400).send('Email already exists')
        }
        const user = await Users.create(req.body)
        if (user) {
            res.send(`Successfully posted ${user}`)
            console.log(user)
        } else {
            res.status(404).send(`User not posted, did you complete all required fields?`)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal server error, did you complete all necessary fields")
    }
}

export async function deleteUser(req: Request, res: Response) {
    const userId = req.params.userId

    try {
        const deletedUser = await Users.findOneAndDelete({ _id: userId })
        if (deletedUser) {
            res.send(`User with ID ${userId} successfully deleted`)
        } else {
            res.status(404).send(`User with Id ${userId} not found`)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
}

export async function putUser(req: Request, res: Response) {
    const id = req.params.userId
    try {
        const update = req.body
        const updatedUser = await Users.findByIdAndUpdate(id, update, { new: true })

        if (updatedUser) {
            res.send(updatedUser)
        } else {
            res.status(404).send(`User with Id ${id} not found`)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
}

export async function logIn(req: Request, res: Response) {
    try {
        const password = req.body.password
        const user = await Users.findOne({ email: req.body.email })
        if (!user) return res.status(401).send({ message: "Login failed" })

        interface UserDocument {
            _id: string,
            email: string,
            password: string
        }
        const typedUser = user as unknown as UserDocument

        const isValidPw = validatePassword(password, typedUser.password)

        if (isValidPw) {

            const token = jwt.sign(
                { userId: typedUser._id },
                SECRET,
                { expiresIn: '24h' }
            )
            res.send({ message: "Login successful", token })
        } else {
            res.status(401).send({ message: "Login failed" })
        }
        // res.send(req.body)
    } catch (e) {
        res.status(500).send({ message: "There was an error; please try again later" })
    }
}

export async function getCurrentUser(req: Request, res: Response) {
    try {
        res.status(200).send(res.locals.currentUser)
    } catch (e) {
        res.status(500).send({ message: "There was an error; please try again later" })
    }
}