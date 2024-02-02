# Module9

### Exercise 1

Review your Calculator application from Module 5 to make sure that it uses a proper MVC structure.

---

### Exercise 2

Create an Express back-end application for a Blog website using MongoDB. You should refer to your database model from Module 8 for this, ensuring that your app matches the model.

**Requirements:**

- Your system should have a proper MVC Structure.
- The system should be able to create users.
- Users should be able to create multiple posts (posts should include title, description, and image).
- Other users should be able to like the posts and comment on the posts.

---

### Exercise 3

Create an Express back-end application for a Blog website using MySQL. You should refer to your database model from Module 8 for this, ensuring that your app matches the model.

**Requirements:**

- Your system should have a proper MVC Structure.
- The system should be able to create users.
- Users should be able to create multiple posts (posts should include title, description, and image).
- Other users should be able to like the posts and comment on the posts.

---

### Exercise 4

Choose a third-party microservice (see the list of free JSON APIs) and connect it to your current Express application (or a new one) with its own routes, controller, and model to add new functionality to your application.

Try to include support for either or both types of request parameters:

- via the query - e.g., GET http://localhost:8080/api/users?page=1
- via the params - e.g., PUT http://localhost:8080/api/users/1234

### Exercise 5

Using the guide at [https://socket.io/get-started/chat](https://socket.io/get-started/chat) as a helper, try to implement a basic chat app that includes one of their suggested extensions (or come up with your own!):

- Broadcast a message to connected users when someone connects or disconnects.
- Add support for nicknames.
- Don't send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
- Add "{user} is typing" functionality.
- Show who's online.
