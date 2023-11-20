# Flex Business Solutions Tech Test - Notes app

In Flex Business Solutions, we aim to provide excellence and efficiency on all our lines of code in order to support the day-to-day activities of the company using our software solutions. In this task, you will be provided with a simple design of an app, fetching a list of products from an external source and allowing the user to search or filter among the list.

### Tech Test Overview

We have provided below the Figma link of this task. On the main page,

[FIGMA] [https://www.figma.com/file/T6hUVUDh5ihoYwQILcJDcf/React-Home-Test?type=design&node-id=0%3A1&mode=design&t=lOTjaPb3chxGqXkY-1]

We love to see:

- Functional code
- Good design
- Unit testing

### Notes

All of you work should take place inside this repository.

You are free to use any packages that would help with this task

You do not need to add additional security measures as part of this exercise.
We're interested in how you break down the work and build your solution in a clean, easy-to-use, reusable and testable manner.

## Deliverables

You must follow the Figma design and need to add the functionality of:
a) Create new notes
c) Show all notes
b) Search notes

**Create a folder inside the repository and include finished screenshots of the app.**
**Please make sure to update the readme with**:

- How to run your app with all the necessary details
- Relating to the task please add answers to the following questions;
  1. How might you make this app more secure?
  2. How would you make this solution scale to millions of records?

### How to run;

- To launch the backend navigate to /backend/server and run the command ** nodemon server.js **
- To launch the frontend navigate to /frontend and run ** npm start **

Press - click here to go to your notes - on the UI and you will see the application

1.To make the app more secure I would have to take care of Authentication and Authorization e.g "Implement robust user authentication (using JWT, OAuth, or similar) and authorization to ensure that users can only access and modify their own notes.
Use role-based access control for different levels of user privileges.", Data Validation ,
Optimize the database schema and queries for performance. Code-wise I would have to use TypeScript, take care of Dependency Management, Environment
Variables.

2.Data Optimization e.g "Using indexing in the database to speed up query execution, especially for frequently accessed data like note titles or categories, Pagination and Lazy Loading e.g " I would implement pagination in the API to limit the number of records sent in a single response,
and I'd use lazy loading in the UI to load data as needed rather than all at once.", Code Optimization e.g "I would optimize the application code for performance. Avoid unnecessary computations and minimize complexity."
