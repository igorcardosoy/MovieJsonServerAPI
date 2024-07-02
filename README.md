# movie-api

## /users - GET to view users and POST to add users.

### POST for add new users.
    options = {
        method: 'POST',
        body: JSON.stringify({ "email": ..., "password": ... }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }

## /login - POST to get the accessToken for verification
    options = {
        method: 'POST',
        body: JSON.stringify({ "email": ..., "password": ... }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }


## /660/users - GET for verify with accessToken

    options = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${accessToken}`
        },
    }

## /movies and /tv - GET to view, POST to add.

    const options = {
        method: 'POST',
        body: JSON.stringify({ "title": title, "tmdb_id": tmdb_id, "tmdb_type": tmdb_type, "filter": filter, "link": link }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

## /movies/id and /tv/id - GET to view, PUT to update, DELETE to delete.

    const options = {
        method: 'PUT',
        body: JSON.stringify({ "title": title, "tmdb_id": tmdb_id, "tmdb_type": tmdb_type, "filter": filter }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

###

    const options = {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
# MovieJsonServer
# MovieJsonServerAPI
