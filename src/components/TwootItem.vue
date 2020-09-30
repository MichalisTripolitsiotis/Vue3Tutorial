<template>
  <div class="twoot-item" @click="favouriteTwoot(twoot.id)">
    <div class="user-profile-twoots-wrapper">
      <div class="user-profile-twoot">
        <div class="twoot-item-user">@{{ username }}</div>
        <div class="twoot-item-content">{{ twoot.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwootItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favouriteTwoot(id) {
      this.$emit("favourite", id);
    },
  },
};
</script>
<style lang="scss" scoped>
.twoot-item {
  padding: 28px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 80%;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  .twoot-item-user {
    font-size: 20px;
    font-weight: 800;
  }
}
</style>
