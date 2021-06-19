<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <router-link custom :to="{name: 'jobs'}" v-slot="{href}">
          <ion-back-button slot="start" :defaultHref="href" icon="chevron-back"></ion-back-button>
        </router-link>
        <ion-title>Job Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <div v-if="error" class="ion-text-center">
      <ion-content>
        {{ error }}
      </ion-content>
    </div>
    <suspense v-else>
      <template #default>
        <job-details/>
      </template>
      <template #fallback>
        <ion-content>
          <div class="spinner-container ion-text-center">
            <ion-spinner/>
          </div>
        </ion-content>
      </template>
    </suspense>
  </ion-page>
</template>

<script>
import {IonBackButton, IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar,} from '@ionic/vue';
import {defineAsyncComponent, defineComponent, onErrorCaptured, ref} from 'vue';

export default defineComponent({
  name: 'JobDetailsPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonSpinner,
    JobDetails: defineAsyncComponent(() => import('./components/JobDetails.vue')),
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

<style lang="scss" scoped>
.spinner-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
