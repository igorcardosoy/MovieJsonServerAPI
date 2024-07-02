# Movie API

For [MoviesNextJS](https://github.com/igorcardosoy/MoviesNextJS)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Starting the Server

Start the server:

```bash
npm start
```

## API Endpoints

### /users

- **GET**: View all users.
- **POST**: Add a new user.

#### Example:

```javascript
const options = {
    method: 'POST',
    body: JSON.stringify({ "email": "example@example.com", "password": "yourpassword" }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};
```

### /login

- **POST**: Get the accessToken for verification.

#### Example:

```javascript
const options = {
    method: 'POST',
    body: JSON.stringify({ "email": "example@example.com", "password": "yourpassword" }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};
```

### /660/users

- **GET**: Verify with accessToken.

#### Example:

```javascript
const options = {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${accessToken}`
    }
};
```

### /movies and /tv

- **GET**: View all movies or TV shows.
- **POST**: Add a new movie or TV show.

#### Example:

```javascript
const options = {
    method: 'POST',
    body: JSON.stringify({ "title": "Movie Title", "tmdb_id": "12345", "tmdb_type": "movie", "filter": "genre", "link": "http://example.com" }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};
```

### /movies/:id and /tv/:id

- **GET**: View a specific movie or TV show by ID.
- **PUT**: Update a specific movie or TV show by ID.
- **DELETE**: Delete a specific movie or TV show by ID.

#### Example for PUT:

```javascript
const options = {
    method: 'PUT',
    body: JSON.stringify({ "title": "Updated Movie Title", "tmdb_id": "12345", "tmdb_type": "movie", "filter": "updated genre" }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};
```

#### Example for DELETE:

```javascript
const options = {
    method: 'DELETE',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};
```
