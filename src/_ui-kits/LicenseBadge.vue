<template>
  <ion-badge :class="`license-badge-color--${licenceTypeColor}`">{{ type }}</ion-badge>
</template>

<script>
import {defineComponent} from "vue";
import {IonBadge} from "@ionic/vue";

export default defineComponent({
  name: "LicenseBadge",
  components: {IonBadge},
  props: ['type'],
  computed: {
    licenceTypeColor() {
      return ({
        LPN: 'green',
      })[this.type] || 'default';
    },
  }
})
</script>

<style lang="scss">
ion-badge {
  &.license-badge-color {
    &--green {
      background: rgb(29, 129, 146);
      color: rgb(255, 255, 255);
    }
    &--default {
      background: rgb(223, 203, 255);
      color: var(--ion-color-primary);
    }
  }
}
</style>
