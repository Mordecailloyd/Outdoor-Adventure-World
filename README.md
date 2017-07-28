
# Outdoor Adventure World


[Outdoor Adventure World live][heroku]

[heroku]: https://outdoor-adventure-world.herokuapp.com/#/signup





Outdoor-Adventure-World is a web application inspired by MooseJaw. In contrast to the Moosejaw website, Outdoor-Adventure-World is a single page application that runs off a static page using the React-Redux cycle. My site only re-renders individual components as needed due to changes in slices of the state.
Outdoor-Adventure-World is built on a PostgreSQL database, with a Ruby on Rails back-end. I use Jbuilder to generate JSON objects for the front-end, which is written in Javascript using React and Redux to maintain the single page application.


![homepage screenshot](docs/screenshots/)


# Features & Implementation


### User Authentication
Outdoor-Adventure-World tracks a user with a session cookie which persists while refreshing or closing the window. I have implemented this with code that exists in both the front-end and back-end of the application. Upon log in or sign up the back-end resets a users session token, and creates a new cookie to hold a unique session token. This is then stored in the user's browser and in the PostgreSQL database. When the browser receives a successful server response the user's name and id are stored in the window's local storage.

The password is never saved anywhere. The back-end encrypts the password using a base-64 encoded hash string(A bcrypt hash). This is also salted with a 128-bit salt to protect against attacks using a rainbow table.
Upon logging out the session token in the database is reset. The cookies value is set to nil.

As long as the user allows the cookie to persist in local storage, refreshing and closing the window will not cause the user to lose access to their cart or credentials. If a user is present on page load React will retrieve the user's additional information. So long as the users session token is in the database the back-end will return all relevant information. As a result users who do not log out will not need to log in again upon refreshing or re-opening the page.
Malicious users attempting to impersonate others by filling their own window's local storage with a user object will not be able to gain authorization from the back-end.



### Persistent Shopping Cart

Items added to the shopping cart are maintained in a join table on the back-end. By storing a cart for each user on the back-end, tying a users id with a products id. I am able to maintain a users checkout cart even if they leave the website and return hours later, even on a different machine with a different browser.

When a user logs in, any products previously added to their cart are pulled from the back-end and merged with the front-end state allowing the information to be displayed in the navigation bar(header) and the checkout page. I built a custom route and action in the controller to remove all cart products a user has when they complete an action, to reduce the number of Ajax requests to my Rack middleware and back-end controllers.



### Floating Navigation Bar on Product Page
When viewing a single product, additional information is found in 3 sections: details, specifications, and reviews. A navigation bar with links to these 3 sections can be found midway down the page.  Upon scrolling past the Details section, the navigation bar detaches from its static position and become fixed at the top of the window.  This logic is handled in the product details component.

When rendering the component, refs are used to store reference to the DOM nodes representing the Details, Specs, and Reviews sections.  Using these references, the state is populated with locations of these sections on the page, as well as with booleans representing which section is current active / being focused on.  When the component mounts, an on-scroll listener is added to the document, checking the current position of the user's window.  When the user moves past each section, the on-scroll event changes a boolean in the state representing which link in the navigation bar should be active. The state is then passed to the React Classnames library, which uses the boolean values and class name keys to appropriately adjust element class names, thus manipulating their styling by adding and removing active classes.

### Search Bar Utilizing Query Strings
The search bar feature at the top of the page allows a user to enter their own search terms.  Upon dispatching the request, the search terms are stripped of excess spaces / special characters, and a query string is constructed.  The search terms are then passed via an API call to the server, where the server returns all products whose search_keywords column contains matches to all the search terms.  Sending the search results URL to another person or refreshing the window yields the same reproducible results, due to an on-enter hook in the search route that grabs the query string from the URL and passes it to the server.


# Screenshots

## Search Results
![results screenshot](docs/screenshots/)


## Product Display Page
![product screenshot](docs/screenshots/)


## Shopping Cart
![cart screenshot](docs/screenshots/)


# Future Directions for the Project

### Search Bar and Filters
Search bar could use an auto-complete feature.  A sidebar filter for results would be nice to implement.

### More Seeds
Seed more categories and more items per category.

## Refactoring
Reduce number of controlled components, learn how to use refs to access child components and their methods from their parents.  Eliminate unnecessary item from component states that are already being passed in via props.

## Fix Dropdowns in Firefox
Initial naive implementation of opening/closing dropdowns throws errors in Firefox and does not function properly.  Refactor to use onFocus and onBlur.

## Database Changes
Look into storing hashes in a database column as opposed to arrays or strings for product search keywords.  Look into polymorphic associations for the Products table.

### Add Past Purchases
Current upon checking out, the user's shopping cart is simply dumped out. Ideally there would be a mock payment screen and a table to handle past purchases so that they can viewed in the account details.
