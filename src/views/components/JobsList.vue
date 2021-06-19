<template>
  <ion-grid>
    <ion-row>
      <ion-col v-for="job in jobs" :key="job.job_id" size="12" size-md="6" size-sm="6" size-lg="4">
        <job-list-item :job="job"/>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="js">
import {IonCol, IonGrid, IonRow} from '@ionic/vue';
import {defineComponent} from 'vue';
import axios from 'axios';

import {JobListItem} from "../../_ui-kits";

export default defineComponent({
  name: 'JobsList',
  components: {
    JobListItem,
    IonGrid,
    IonRow,
    IonCol,
  },
  async setup() {
    const response = await axios.get(`https://ioniconf-2021-jobs.herokuapp.com/jobs/?page=${1}`);
    const jobs = response.data;
    return {
      jobs,
    }
  },
});
</script>

<style scoped>

</style>
