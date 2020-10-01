<template>
  <div class="app">
    <nav>
      <router-link to="/">
        <div class="navigation-logo">
          Twooter
        </div>
      </router-link>
      <div class="navigation-user">
        {{ state.user.username }}
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",

  setup() {
    const state = reactive({
      user: {
        username: "Mike",
      },
    });
    return {
      state,
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
