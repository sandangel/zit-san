<template>
    <button
        @click="$emit('click')"
        type="button"
        :style="{color: color, borderColor: color}"
    >
        <span>
            <slot></slot>
        </span>
        </button>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'OutlineButton',
  props: {
    color: String,
  },
});
</script>

<style scoped>
button {
  padding: 6px 12px;
  border: 2px solid;
  border-radius: 3px;
  outline: none;
}
</style>

