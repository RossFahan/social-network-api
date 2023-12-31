# Social Network API

## Technology Used 

| Technology Used         | Resource URL           | 
| ----------------------- |:----------------------:| 
| Node.js                 | [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/) | 
| Express                 | [https://expressjs.com/](https://expressjs.com/)      |   
| MongoDB                 | [https://docs.mongodb.com/](https://docs.mongodb.com/)     |    
| Mongoose                | [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/) |

## Description 

The Social Network API is a backend application built with the MERN stack. It allows you to create, read, update, and delete Users and Thoughts in a social network. It is designed to offer an API for a potential frontend application that would let users interact with each other, share thoughts, and much more. 

## Demo
[Video Demo Link](https://drive.google.com/file/d/1L_r5PFSK0O0KXQrHuxb8-WtZWq2Ln9yH/view?usp=sharing)

## How to Use

### Setup

1. Clone the repository.
2. Navigate to the root directory and run `npm install` to install dependencies.
3. Start the server using `npm start`.

### API Endpoints

1. User CRUD Operations
   - `GET /api/users`: Fetches all users.
   - `GET /api/users/:id`: Fetches a single user by ID.
   - `POST /api/users`: Creates a new user.
   - `PUT /api/users/:id`: Updates a user by ID.
   - `DELETE /api/users/:id`: Deletes a user by ID.

2. Thought CRUD Operations
   - `GET /api/thoughts`: Fetches all thoughts.
   - `GET /api/thoughts/:id`: Fetches a single thought by ID.
   - `POST /api/thoughts`: Creates a new thought.
   - `PUT /api/thoughts/:id`: Updates a thought by ID.
   - `DELETE /api/thoughts/:id`: Deletes a thought by ID.

 3. Friend Operations
   - `POST /api/users/:userId/friends/:friendId`: Adds a friend to a user's friend list.
   - `DELETE /api/users/:userId/friends/:friendId`: Removes a friend from a user's friend list.

4. Reaction Operations
- `POST /api/thoughts/:thoughtId/reactions`: Adds a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Removes a reaction from a thought.

## Author Info
### Links

```md
* [LinkedIn](https://www.linkedin.com/in/rossfahan)
* [Github](https://github.com/RossFahan)
```


## Credits

Referenced the following:
* [W3schools](https://www.w3schools.com/)
* [Mozilla Developer Network (MDN)](https://developer.mozilla.org/)
* [StackOverflow](https://stackoverflow.com)

## License

MIT License

Copyright (c) [2023] [Ross Fahan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.