import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { users } from "../assets/users";
import UserProfile from "../views/UserProfile.vue";
import Admin from "../views/Admin.vue";
import store from "../store";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userId",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;
  //when app loads the default value is null!!
  //if no user then add one

  if (!user) {
    //dispatch is function to run actions
    //             name of action, the js file
    //if you change from 0 to 2 then the name on the nav will change
    await store.dispatch("User/setUser", users[0]);
  }
  const isAdmin = false;
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  if (requiresAdmin && !isAdmin) next({ name: "Home" });
  else next();
});
export default router;
