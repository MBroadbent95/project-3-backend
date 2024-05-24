Bootcamp Buddy

Description:

Project 3 - Bootcamp-Buddy: For our 3rd project we were placed in teams of 2-3 and tasked to create a full stack MERN (Mongodb, Express, React, Node) app with CRUD (Create, Read, Update, Delete) functionality.
Our idea was “Bootcamp-Buddy”, an online platform where you can read relevant advice from students about anything and everything software engineering.
For deployment, we used a combination of Netlify for the front and back end, and then Mongo Atlas for the database.

Deployment link

https://bootcamp-buddy.netlify.app/


Getting Started/Code Installation:

Feel free to access my code from my GitHub repository
Front end - https://github.com/MBroadbent95/project-3-frontend
Back end - https://github.com/MBroadbent95/project-3-backend
Necessary Front end installations for this code are as follows:
React
Axios
TailwindCSS
TypeScript

Back end:
- Express
- Node
- Axios
- Bcrypt
- Jsonwebtoken
- Mongoose
- TypeScript
I have included snippets of what your package file should look like in. The first image is back end, and the second is front end:

![Back End package.lock](https://i.imgur.com/VfgSUg0.png)
![Front End package.lock](https://i.imgur.com/Y7OyTsK.png)


You will likely need to have your own mongodb database up and running, and then to seed the data in order to get this working as intended.
Once you have installed all necessary dependencies & mongodb is live, you will need to:
Back end, run seed. Then once seeded, run dev.
Front end, run dev.
If you have successfully completed my steps, you should have a working preview by this point.


Timeframe & Working Team (Solo/Pair/Group):

The timeframe for this project was just under 8 days if you include the weekend. I was in a 3 person group consisting of 2 ambitious and hard working teammates Conor Hamilton and Catherine Brett.Every morning we would have a meeting to discuss the plan of action for the day and who would do each task.



Technologies Used:

Back end:
TypeScript
Express
Node
Axios
Bcrypt
JsonWebToken
Mongoose
Mongoose-Hidden
Mongoose-Unique-Validator

Front end:
HTML
TailwindCSS
Vite
Font Awesome
Ionicons
Axios
React
React-dom
React-feather
React-router-dom
React-scripts
TypeScript


Development tools:
MongoDB
Netlify
Mongo Atlas
Google Chrome Dev Tools





Brief
Instructions:

* Work in a team, using **git to code collaboratively**.
* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API with mongoose** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.


Planning:

Planning is essential in order to complete a task as potentially complex as this one.
We knew from the outset that the more time we spent in the beginning chiseling out exactly what we wanted, the path to achieving it would be more clear and easier to travel.
We devised comprehensive wire-frames for both the front and back end of the project using an app called Excalidraw, below is the FE wireframe preview:

![Front End WireFrame](https://i.imgur.com/FyznxnK.png)
Here is the backend wireframe preview:


![Back End WireFrame](https://i.imgur.com/wEzdFqZ.png)


Build/Code Process:

It was apparent that the best place to start for our full stack project would be the back end. Once everything is functional in the back end, the front end should be far easier to build when the data is visible.

Back End:
The basic formatting of backend into components, controllers and router was very useful for us. We started to divvy out who would be writing which components. This was an effective practice as we would avoid potential merge conflicts by staying clear of each other's files. Should we need to make adjustments, we would notify our team in slack with full details of the changes we made.
Once we had assembled our components, testing was necessary to make sure it all fit together correctly, firstly the dev in the driver’s seat would seed the mongodb database. It is unnecessary for all 3 of us to test independently at this point despite the fortified testing it would provide. 
We used an app called insomnia to test all possible requests to our back end including tips (our main dataset) and users.

![Back End Router](https://i.imgur.com/gRFFVa9.png)

Insomnia proved to be a very useful tool, after testing was complete and we were satisfied with the functional back end, we then pressed on to the front end.

Front end:
For the front end, we decided to use a new CSS framework technology TailwindCSS. This was an ambitious move chosen to display the ability to learn a new and industry recommended technology. Previously we had been using an alternative CSS framework - BulmaCSS.
TailwindCSS proved to be a far more useful tool in its application by the precision and multitude of options it provided when compared to BulmaCSS, we could simply do a whole lot more with TailwindCSS.
The only real downside to TailwindCSS besides the evident learning curve was how messy it would make your HTML look… a worthy sacrifice.

We knew what we wanted to achieve in the frontend thanks to our planning stage.
This would require a smooth user experience with each page presenting a defined purpose for the user and their interaction with the data and other users.
For this we would need a clean distinction between visitor and user.
The core of our website, Tips for fellow software travelers, would fail if we denied access to visitors.
So in essence visitors could:
View Advice
Search for advice based on their search criteria.
Connect with other user’s via their posted LinkedIn and GitHub links

Users can:
Do everything a visitor can
Post New Advice
Edit their posted advice
Delete their posted advice
Edit their account information

![Logged in Example](https://i.imgur.com/xTwfKIX.png)

Only when logged in does the option to give advice present itself.

Feel free to sign in via the live site using the following details and see the user/ visitor distinction yourself:
Email: a.user@bootcampbuddy.com
Password: M@tb0okbike

Should you choose to sign up a new account, please feel free to do so.

If you navigate to the log-in page, much like other popular social media apps Instagram & Facebook, you can navigate to a new page to sign up if you don’t already have an account.
I am particularly proud of the error handling here because it is dynamic and responds with specific error messages in the commonly expected format. 
If you missed a required field or needed to adjust your password to contain particular characters, you would be prompted to do so.
Only when you have met the requirements would it let you sign up.

![Sign Up Error Handling](https://i.imgur.com/WgnViOc.png)

![User Controller](https://i.imgur.com/Ty1DX0q.png)

![Sign Up Front End](https://i.imgur.com/pWaKxhH.png)


The advice page is clean with a soothing color scheme:

![Advice Page Visual](https://i.imgur.com/LjjsDaZ.png)

A search bar is also available should you wish to filter the results, it can include any words mentioned throughout the advice from name to the advice content.

Should you click through to one specific advice card you will be taken to a dedicated page with details about the advice poster and links to their GitHub & LinkedIn if they provided them.
We wanted this experience to include the opportunity to connect and network for all users and visitors.



Challenges:

We encountered a handful of challenges throughout our project development.
Coordination/ Project Management
In the beginning we were using a new way of managing our group operations - Trello. 
We were recommended Trello from our instructors as a straightforward method of project management, you could create cards which could be freely moved to indicate which stage your task was at - testing/ code review/ done. 
This worked for a brief period when development was in its early build stages as what needed to be done was much more clear and easier to divvy out.
But it became cumbersome to organize tasks via Trello when it was a faster and more dynamic system via Slack and merge parties . 
We would reconvene after agreed upon blocks of time, discuss our progress, merge our work and then issue new tasks.
This new system worked much better for us when it came to debugging and adjusting features as required when a bug would appear or not work as intended.


Throughout the project we would debug as we went along. The strength of this is that the context of the bug would be apparent far more quicker and usually could be resolved much faster.
The con of such a method is that it took us longer than expected to achieve our MVP which caused some frustration among the group, that we were falling behind and would end up with a sub-par app.  
Project management and team cohesion aside, I probably would recommend the more steadfast approach as very few of our features encountered any meaningful bugs which weren’t debugged that same day.





Wins:

I am usually a stickler for effective team cohesion through a rigid roadmap, but from this project I understood that it is possible to have greater task flexibility if it’s combined with good communication and reactivity between the team.

Sections of the code in which I am proud of include error handling as mentioned above. 
Another Win of mine has been the ability to read another teammate of mine’s code and figure out which adjustments I needed to make to code which was not my own in order to get my GitHub & LinkedIn buttons to work (they were unavailable when I encountered my problem).
Legible code is just as important as the ability to figure out what needs to be done.  
I am happy that I am able to contribute and work effectively as part of a team.



Key Learnings/Takeaways:

I feel far more confident using the new CSS framework TailwindCSS. In the future I can imagine learning new technologies and utilizing them effectively will be a part of my job. It is great to know that I am adaptable in this regard.

In my last project, it was mostly pair programming when we were both online simultaneously. For this project I needed to understand the dynamics of working in a team, in which we would be developing separate working parts of the project and how best to integrate my work.
From my experience on this project I can confidently assert that I have gained valuable practice working as a cohesive team to effectively develop a smooth, clean and functional app.



Bugs:

A bug we encountered and couldn’t find a fix for in time was related to the browser url bar.
More specifically, if you are specific with what you enter into the url bar, you can successfully navigate to the edit page of a specified piece of advice.
The way in which the edit function was crafted, was to navigate to a new page and edit the advice based on its id. Whilst we couldn’t figure out a way to block everyone except the creator of the advice from finding their way to the page if they really wanted to, they still cannot edit the advice unless their id matches the one registered on the tip.


Future Improvements:

We had a handful of improvements we would make had we more time to implement them, these include:
A comments/ likes system. This would be beneficial to encourage more active engagement between users on the website and would provide more means by which to filter the data based on direct user feedback.
A favorites list. You would need to be logged in, but a means of favoriting advice and storing it so that you can revisit it on a later date would encourage further positive UX stories.
Expanded user profile. Most social websites feature far more depth in their user profiles. We could only program the ability to edit your profile data but there is a minimum experience users expect these days including features like profile picture, cookie/ data management, delete profile/ account. The possibilities are endless and we only scratched the surface here.
