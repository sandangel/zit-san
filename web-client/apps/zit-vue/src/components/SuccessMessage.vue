<template>
    <div class="message">
        <img
            height="64px"
            src="../assets/success.svg"
            alt="Success"
        >
            <h2>yay!</h2>
            <p>You did it!</p>
            <OutlineButton
                @click="$emit('click')"
                color="#72b970"
            >CONTINUE</OutlineButton>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import OutlineButton from './OutlineButton.vue';
export default Vue.extend({
  name: 'SuccessMessage',
  components: { OutlineButton },
});
</script>
<style lang="scss" scoped>
h2 {
  margin: 10px 0;
  font-size: 2rem;
}
p {
  font-size: 0.9rem;
}
.message {
  display: flex;
  flex-flow: column;
  flex: 1 100%;
  justify-content: space-evenly;
  align-items: center;
}
</style>

