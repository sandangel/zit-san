<template>
    <div class="message">
        <img
            height="64px"
            src="../assets/failure.svg"
            alt="Failure"
        >
            <h2>uh-oh..</h2>
            <p>Looks like something went wrong...</p>
            <OutlineButton
                @click="$emit('click')"
                color="#d65e6a"
            >TRY AGAIN</OutlineButton>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import OutlineButton from './OutlineButton.vue';
export default Vue.extend({
  name: 'FailureMessage',
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

