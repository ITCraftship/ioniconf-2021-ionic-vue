<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>Jobs</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div v-if="error" class="ion-text-center">
        {{ error }}
      </div>
      <suspense v-else>
        <template #default>
          <jobs-list/>
        </template>
        <template #fallback>
          <div class="spinner-container ion-text-center">
            <ion-spinner/>
          </div>
        </template>
      </suspense>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import {IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar} from '@ionic/vue';
import {defineAsyncComponent, defineComponent, onErrorCaptured} from 'vue';
import {ref} from "@vue/reactivity";

export default defineComponent({
  name: 'JobsPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    JobsList: defineAsyncComponent(() => import('./components/JobsList')),
    IonSpinner
  },
  setup() {
    const error = ref(null);
    onErrorCaptured(e => {
      error.value = e
      return true
    });

    return {
      error
    }
  }
});
</script>

<style scoped>
.spinner-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
