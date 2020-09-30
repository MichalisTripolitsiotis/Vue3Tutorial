<template>
  <div class="user-profile">
    <div class="user-panel">
      <h1 class="user-name">@{{ user.username }} - {{ fullName }}</h1>
      <div class="user-badge" v-if="user.isAdmin">
        <!--another example: v-if="user.followers > 10"-->
        Admin
      </div>
      <!-- <div class="user-isAdmin" v-else>
        another example: v-if="user.followers > 10"
        User
      </div>-->

      <div class="user-followers">
        <strong>Followers:</strong> {{ followers }}
        <!-- <button @click="followUser">Follow</button>-->
      </div>
      <CreateTwootPane @add-twoot="addTwoot" />
    </div>
    <div class="user-profile-twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";
import CreateTwootPane from "./CreateTwootPane";
export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPane },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "MichaelTripuname",
        fname: "Michael",
        lname: "Trip",
        email: "michalitr@gmail.com",
        isAdmin: true,
        twoots: [
          { id: 1, content: "Twooter is amazing" },
          { id: 2, content: "My second twoot!" },
        ],
      },
    };
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.fname} ${this.user.lname}`; //string literal
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
      console.log(`Favourite #${id}`);
    },
    addTwoot(twoot) {
      this.user.twoots.unshift({
        id: this.user.twoots.length + 1,
        content: twoot,
      });
    },
  },
  mounted() {
    this.followUser();
  },
};
</script>
<!--every class that will be changed only for this component -->
<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px, 5%;

  .user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px sold #dfe3ef;
    h1 {
      margin: 0;
    }
    .user-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }
}
.user-profile-wrapper {
  display: grid;
  grid-gap: 10px;
}
</style>
