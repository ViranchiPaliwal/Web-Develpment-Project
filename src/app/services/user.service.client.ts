export class UserServiceClient {
    URL = 'https://web-dev-project-client-node.herokuapp.com/api/';

    findUserById(userId) {
        return fetch(this.URL + 'user/' + userId)
            .then(response => response.json());
    }

  findAllUsers(){
    return fetch(this.URL + 'user')
      .then(response => response.json());
  }

    login(username, password) {
        const credentials = {
            username: username,
            password: password
        };
        return fetch(this.URL + 'login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

  deleteProfile(user){
      return fetch(this.URL + 'profile', {
        body: JSON.stringify(user),
        method: 'delete',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());
    }

    logout() {
        return fetch(this.URL + 'logout', {
            method: 'post',
            credentials: 'include'
        });
    }

    profile() {
        return fetch(this.URL + 'profile',
            {
                credentials: 'include', // include, same-origin, *omit
            })
            .then(response => response.json());
    }

    updateProfile(user) {
        return fetch(this.URL + 'profile', {
            body: JSON.stringify(user),
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json());
    }

    findUserByUserName(username) {
        return fetch(this.URL + 'user/username/' + username)
            .then(response => response.json());
    }

    createUser(user) {
        return fetch(this.URL + 'register', {
            body: JSON.stringify(user),
            credentials: 'include', // include, same-origin, *omit
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

  createUserAdmin(user) {
    return fetch(this.URL + 'create', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
