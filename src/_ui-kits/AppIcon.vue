<template>
  <ion-icon :src="src" :class="sizeClass" />
</template>

<script>
import { IonIcon } from '@ionic/vue';

const icons = {
  'day-shift-grey': require('../assets/icons/day-shift-grey.svg'),
  'per-diem-grey': require('../assets/icons/per-diem-grey.svg'),
  'date-grey': require('../assets/icons/date-grey.svg'),
  'share-purple': require('../assets/icons/share-purple.svg'),
  'send-purple': require('../assets/icons/send-purple.svg'),
  'sun-light': require('../assets/icons/sun-light.svg'),
  'add-purple': require('../assets/icons/add-purple.svg'),
  'not-allowed-pink': require('../assets/icons/not-allowed-pink.svg'),
  'chevron-right-purple': require('../assets/icons/chevron-right-purple.svg'),
  'verification-check-blue': require('../assets/icons/verification-check-blue.svg'),
  'add-circle': require('../assets/icons/add-circle.svg'),
}

export default {
  name: "AppIcon",
  components: {IonIcon},
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
    }
  },
  setup() {
    return {

    }
  },
  computed: {
    src() {
      // return `../assets/icons/day-shift-grey.svg`;
      return icons[this.name] || this.name;
    },
    sizeClass() {
      const sizes = ['medium'];
      if (this.size && sizes.includes(this.size)) {
        return `icon--${this.size}`;
      }
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
ion-icon {
  vertical-align: middle;

  &.icon--medium {
    font-size: 21px;
  }
}
</style>
