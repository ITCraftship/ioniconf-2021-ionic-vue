<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>Jobs</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div v-if="fetching" class="ion-text-center"><ion-spinner  /></div>
      <ion-grid v-else>
        <ion-row>
          <ion-col v-for="job in jobs" :key="job.job_id" size="12">
            <job-list-item :job="job" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonSpinner } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ref, reactive } from '@vue/reactivity';
import JobListItem from '../_ui-kits/JobListItem.vue';
import axios from 'axios';

export default defineComponent({
  name: 'Jobs',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    JobListItem,
    IonGrid,
    IonRow,
    IonCol,
    IonSpinner
  },
  setup() {
    const canLoadMore = ref(true);
    const fetching = ref(true);
    const jobs = reactive([]);
    const getJobs = (page = 1, fresh = false) => {
      axios.get(`https://ioniconf-2021-jobs.herokuapp.com/jobs/?page=${page}`).then(({data}) => {
        if (fresh) {
          jobs.concat(data);
        } else jobs.splice(0, jobs.length - 1, ...data);
      }).finally(() => fetching.value = false)
    }
    return {
      getJobs,
      fetching,
      jobs,
    }
  },
  created() {
    this.getJobs()
  }
});
</script>

<style scoped>

</style>
