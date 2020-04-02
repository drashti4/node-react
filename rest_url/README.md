A REST API must support CRUD operations (create, read, update, delete) for the following entities

    User: (Represents a user)

    Profile: (Represents a user profile and each user can have multiple profiles)

    Product: (Represents a product and a user can add several products to their shopping cart)

    Cart: (Represents a shopping cart and each user can have only one cart)

Instructions

    Create the file 06-node-express/exercise-rest-url/rest-url.http
    Express the list of URLs with the necessary HTTP methods
    You do not need to have a valid server or perfect answers, just imagine what it would look like for the requests

Example answer:

GET /users
GET /users/:id
POST /users
PUT /users (the unique identifier is contained in the payload)
DELETE /users/:id 