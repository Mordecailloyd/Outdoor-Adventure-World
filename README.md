
# Outdoor Adventure World


[Outdoor Adventure World live][heroku]

[heroku]: https://outdoor-adventure-world.herokuapp.com/#/signup





Outdoor-Adventure-World is a web application inspired by MooseJaw. In contrast to the Moosejaw website, Outdoor-Adventure-World is a single page application that runs off a static page. My site only re-renders individual components as needed due to changes in slices of the state.
Outdoor-Adventure-World is built on a PostgreSQL database, with a Ruby on Rails back-end. The front end is written in Javascript using React and Redux to maintain the single page application.


![homepage screenshot](docs/screenshots/)


# Features & Implementation


### User Authentication
Outdoor-Adventure-World tracks a user with a session cookie which persists while refreshing or closing the window. I have implemented this with code that exists in both the front-end and back-end of the application. Upon log in or sign up the back-end resets a users session token, and creates a new cookie to hold a unique session token. This is then stored in the user's browser and in the PostgreSQL database. When the browser receives a successful server response the user's name and id are stored in the window's local storage.
The password is never saved anywhere. The back-end encrypts the password using a base-64 encoded hash string(A bcrypt hash). This is also salted with a 128-bit salt to protect against attacks with a rainbow table.
Upon logging out the session token in the database is reset. The cookies value is set to nil.

As long as the user allows the cookie to persist in local storage, refreshing and closing the window will not cause the user to lose access to their cart or credentials. If a user is present on page load React will retrieve the user's additional information. So long as the users session token is in the database the back-end will return all relevant information. As a result users who do not log out will not need to log in again upon refreshing or re-opening the page.
Malicious users attempting to impersonate others by filling their own window's local storage with a user object will not be able to gain authorization from the back-end.
