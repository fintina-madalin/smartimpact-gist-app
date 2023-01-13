## Single page application that displays the gists of a Github user

To run the project locally either have node installed or docker. The project has a list of small utility commands in a Makefile. If you have make installed and docker you can use them to make your life easier.

### Running the project locally
#### Node: [How to install node](https://nodejs.org/en/)
 - run `npm start` this will run the app in development mode
 - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Docker: [How to install docker](https://docs.docker.com/get-docker/)
- run `docker-compose build && docker-compose up -d` this will create a docker container and  run the app in development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Make utilities:
`make build` - will run `docker-compose build`

`make up` - will run `make build` and `docker-compose up -d`

`make shell` - this will open a ssh connection for the application container. Use this to run various `npm` commands into the application container 


#### Project requirements:


Create a single page application (a web page) using your preferred frontend framework (React, Vue, Angular, etc), that will use the Github Gists API to display the gists for a Github user (https://docs.github.com/en/rest/gists/gists#list-gists-for-a-user).

1. There will be an input for the username of the Github user.
2. You will load some info about this username (image, name, description) and also their public gists.
3. Their gists will be loaded with 1) their title, date of creation; 2) their programming language as a colored badge; 3) a list of their forks and the users that forked them.
4. On click, the gist will be loaded in a syntax-highlighted code viewer.
5. Optimize the page for performance.

Other features are also nice to have, but the focus should be on the items above.

The project will be delivered in a github repo (please make the repo public). Add a readme to the project, describing how to install and start the project. Also add to the readme file:
- what has been done, what technical decisions have been taken
- what optimizations have been done and what would be the next steps.

#### Current state of the project:

 - Currently, the project features a form(where the username can be inserted), a small preview of the user details(name, image, bio) and a list of public gists for the user.
Each  gist contains the name of the file, date of creation, the content(displayed with a sintax highlighter), the language badge and a hide show button for the content
 - To optimize the requests to the github api the react-query package was  used

### To implement in the future:
- add pagination for gists
- add a github token to increase the hourly requests limit
- improve error handling and error messages for various scenarios(user not found, request limit exceeded)