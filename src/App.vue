<template>
  <div class="app">
    <nav>
      <router-link to="/">
        <div class="navigation-logo">
          Twooter
        </div>
      </router-link>
      <div class="navigation-user" v-if="user">
        {{ user.username }}
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  //show the name from Global State Management in /store and from route
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-align: center;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5%;
  background-color: deeppink;
  color: white;
  .navigation-logo {
    font-weight: bold;
    font-size: 24px;
  }
  .navigation-user {
    font-weight: bold;
  }
}
</style>
