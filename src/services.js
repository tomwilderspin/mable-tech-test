import axois from 'axios';

const client = axois.create({
  baseURL: 'https://api.github.com',
});

function getUser(userName) {
  return client.get(`/users/${userName}`)
    .then(result => result.data)
    .catch(error => {
      console.error('failed to fetch user', error);
      return null;
    });
}

function searchUsers(searchTerm) {
  return client.get(`/search/users?q=${searchTerm}`)
    .then(result => result.data)
    .catch(error => {
      console.error('failed to search for users', error);
      return null;
    });
}

export default { searchUsers, getUser };
