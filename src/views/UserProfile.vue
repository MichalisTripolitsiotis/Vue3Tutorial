<template>
  <div class="user-profile">
    <div class="user-panel">
      <h1 class="user-name">@{{ state.user.username }}</h1>
      <h2>{{ userId }}</h2>
      <div class="user-badge" v-if="state.user.isAdmin">
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
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>
<!--********COMPOSITION API**********-->
<script>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { users } from "../assets/users";
import TwootItem from "../components/TwootItem";
import CreateTwootPane from "../components/CreateTwootPane";
export default {
  name: "UserProfile",
  components: { CreateTwootPane, TwootItem },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);
    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    });
    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
      });
    }
    return {
      state,
      addTwoot,
      userId,
    };
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
<!-- 
****************DEFAULT WAY*****************************
<script>
import TwootItem from "../components/TwootItem";
import { useRoute } from "vue-router";
import CreateTwootPane from "../components/CreateTwootPane";
import { users } from "../assets/users";
export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPane },

  data() {
    return {
      route: useRoute(),
      followers: 0,
      user: users[this.userId - 1] || users[0], does not work properly
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

    userId() {
      return `${this.route.params.userId}`;
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
</script> -->
