<template>
  <div class="progress-bar"><div class="progress-bar__inner" :style="`--width: ${width}%`"></div></div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppProgressBar",
  setup(props) {
    return {
      width: props.progress
    }
  },
})
</script>

<style lang="scss" scoped>
.progress-bar {
  position: relative;
  width: 100%;
  height: 3px;
  background: #e8dff3;
  &__inner {
    width: var(--width, 1%);
    position: absolute;
    left: 0;
    top: -1px;
    height: 5px;
    background: #5924b0;
  }
}
</style>
