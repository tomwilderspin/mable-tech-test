import axois from 'axios';

const client = axois.create({
  baseURL: 'https://api.github.com',
});

function getUser(userName) {
  return client.get(`/users/${userName}`)
    .then(result => result.data)
    .catch(() => null);
}

function searchUsers(searchTerm) {
  return client.get(`/search/users?q=${searchTerm}`)
    .then(result => result.data)
    .catch(() => null);
}

function getUserLatestActivity(userName) {
  return client.get(`/users/${userName}/received_events`)
    .then(result => result.data)
    .catch(() => null);
}

export default { searchUsers, getUser, getUserLatestActivity };
