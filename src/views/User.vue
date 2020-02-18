<template>
  <b-container v-if="user" class="mt-2">
    <b-row>
      <b-col>
        <b-img
              :alt="`${user.name} avatar`"
              :src="user.avatar_url"
              fluid
              class="p-2 rounded-circle image-container"
            >
          </b-img>
          <div>
            <h1 class="mt-2 mb-0">{{ user.name }}</h1>
            <p class="mt-0">{{ user.login }}</p>
          </div>
        </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <div class="d-flex justify-content-between mt-3 w-100 px-3 row-items">
        <div class="text-center">
          <p class="mb-0">{{ user.followers }}</p>
          <p><b>followers</b></p>
        </div>
        <div class="text-center">
          <p class="mb-0">{{ user.following }}</p>
          <p><b>following</b></p>
        </div>
        <div class="text-center">
          <p class="mb-0">{{ user.public_repos }}</p>
          <p><b>Repositories</b></p>
        </div>
      </div>
    </b-row>
    <b-row class="details-row justify-content-center">
      <div class="d-flex justify-content-center w-100 px-1 row-items">
        <span
          v-for="option in options"
          :key="option.id"
          class="text-center px-1 pt-2"
          v-bind:class="{active:option.id == selectedOption}"
          @click="changeOption(option.id)"
        >{{ option.label }}</span>
      </div>
    </b-row>
    <b-row class="mt-3">
      <keep-alive>
        <component v-bind:is="currentListComponent" v-bind="currentListComponentProps"></component>
      </keep-alive>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

import ActivitiesList from '../components/user/ActivitiesList.vue';
import RepoList from '../components/user/RepoList.vue';
import StarredList from '../components/user/StarredList.vue';

export default {
  name: 'User',
  components: {
    ActivitiesList,
    RepoList,
    StarredList,
  },
  data() {
    return {
      selectedOption: null,
      options: [
        { id: 'activities', label: 'Activities' },
        { id: 'repos', label: 'Repositories' },
        { id: 'stars', label: 'Favourites' },
      ],
    };
  },
  watch: {
    selectedOption(option) {
      const { id = '' } = this.$route.params;
      if (option === 'activities') {
        this.$store.dispatch('getUserLastestActivities', id);
      }
      if (option === 'repos') {
        this.$store.dispatch('getUserRepos', id);
      }
      if (option === 'stars') {
        this.$store.dispatch('getUserStarred', id);
      }
    },
  },
  computed: {
    ...mapState({
      user: state => state.selectedUser,
      usersActivities: state => state.userActivities,
      usersRepos: state => state.userRepos,
      usersStars: state => state.userStars,
    }),
    currentListComponentProps() {
      if (this.selectedOption === 'activities') {
        return {
          activityList: this.usersActivities,
        };
      }
      if (this.selectedOption === 'repos') {
        return {
          repoList: this.usersRepos,
        };
      }
      if (this.selectedOption === 'stars') {
        return {
          starsList: this.usersStars,
        };
      }
      return {};
    },
    currentListComponent() {
      if (this.selectedOption === 'activities') {
        return 'ActivitiesList';
      }
      if (this.selectedOption === 'repos') {
        return 'RepoList';
      }
      if (this.selectedOption === 'stars') {
        return 'StarredList';
      }
      return 'ActivitiesList';
    },
  },
  mounted() {
    const { id = '' } = this.$route.params;
    this.$store.dispatch('getUserProfile', id);
    this.$store.dispatch('getUserLastestActivities', id);
    this.selectedOption = 'activities';
  },
  methods: {
    changeOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  max-width: 240px;
}
.details-row {
  border-top: .5px solid rgb(216, 214, 214);
  text-transform: uppercase;
  font-weight: 600;
}
.row-items {
  max-width: 400px;
  cursor: pointer;
}
.active {
  border-bottom: .5px solid rgb(182, 180, 180);
}
</style>
