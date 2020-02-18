import Vue from 'vue';
import Vuex from 'vuex';

import services from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loadingUsers: false,
    users: [],
    userRepos: [],
    userActivities: [],
    userStars: [],
    selectedUser: null,
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingUsers = status;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SELECTED_USER(state, user) {
      state.selectedUser = user;
    },
    ADD_USER_ACTIVITY(state, activities) {
      state.userActivities = activities;
    },
    ADD_USER_REPOS(state, repos) {
      state.userRepos = repos;
    },
    ADD_USER_STARS(state, stars) {
      state.userStars = stars;
    },
  },
  actions: {
    searchUsers(context, searchTerm) {
      context.commit('SET_LOADING_STATUS', true);
      services.searchUsers(searchTerm)
        .then(result => {
          if (result) {
            context.commit('SET_USERS', result.items);
          }
          context.commit('SET_LOADING_STATUS', false);
        })
        .catch(() => {
          context.commit('SET_LOADING_STATUS', false);
        });
    },
    getUserProfile(context, userName) {
      context.commit('SET_LOADING_STATUS', true);
      services.getUser(userName)
        .then(user => {
          if (user) {
            context.commit('SET_SELECTED_USER', user);
          }
          context.commit('SET_LOADING_STATUS', false);
        })
        .catch(() => {
          context.commit('SET_LOADING_STATUS', false);
        });
    },
    getUserLastestActivities(context, userName) {
      services.getUserLatestActivity(userName)
        .then(activities => {
          if (activities) {
            context.commit('ADD_USER_ACTIVITY', activities);
          }
        });
    },
    getUserRepos(context, userName) {
      services.getUserRepos(userName)
        .then(repos => {
          if (repos) {
            context.commit('ADD_USER_REPOS', repos);
          }
        });
    },
    getUserStarred(context, userName) {
      services.getUserStarred(userName)
        .then(stars => {
          if (stars) {
            context.commit('ADD_USER_STARS', stars);
          }
        });
    },
  },
});
