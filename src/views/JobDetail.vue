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

    <ion-content :fullscreen="true">
      <div v-if="fetching" class="ion-text-center" ><ion-spinner /></div>
      <template v-else>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card class="primary-layout job-meta">
                <ion-card-content>
                  <ion-grid class="ion-no-padding">
                    <ion-row>
                      <ion-col size="4">
                        <ion-label>Shift Date</ion-label>
                        <ion-label>{{ $filters.shiftStartDate(job.job_start_date) }}</ion-label>
                      </ion-col>
                      <ion-col size="4">
                        <ion-label>Shift Time</ion-label>
                        <ion-label>{{ job.job_shift }}</ion-label>
                      </ion-col>
                      <ion-col size="4">
                        <ion-label>License Type</ion-label>
                        <ion-label><license-badge :type="job.licenseType" /></ion-label>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <job-detail-item :job="job" />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-card class="primary-layout job-status">
                <ion-card-header>
                  <ion-card-title>Job status</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-badge>Viewed</ion-badge>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-card class="primary-layout job-properties">
                <ion-card-content>
                  <ion-row>
                    <ion-col>
                      <ion-label>Speciality</ion-label>
                      <ion-label><ion-badge color="warning">Long Term Care</ion-badge></ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <ion-label>Type of Job</ion-label>
                      <ion-label>{{ $filters.jobTypeLabel(job.job_type) }}</ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <ion-label>License Type</ion-label>
                      <ion-label>CNA | CNA</ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <ion-label>Number of beds</ion-label>
                      <ion-label>124</ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <ion-label>Job Instructions</ion-label>
                      <ion-label>{{ job.job_description }}</ion-label>
                    </ion-col>
                  </ion-row>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-card class="primary-layout job-shifts">
                <ion-card-header class="ion-text-center">
                  <ion-card-title>Shifts in this job</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <calendar />
                  <div class="ion-text-center">
                     <h4>Shifts (1)</h4>
                    <app-icon :name="$filters.shiftIconName(job.shift_time)" size="medium" /><br />
                    <span>1x{{ $filters.shiftHoursCount(job.job_shift)}} hours</span>
                  </div>
                  <hr />
                  <ion-grid>
                    <ion-row>
                      <ion-col size="3" class="ion-text-center"><app-icon :name="$filters.shiftIconName(job.shift_time)" size="medium" /></ion-col>
                      <ion-col><span>06:00 - 14:00</span></ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="3" class="ion-text-center"><span>Shift 1</span></ion-col>
                      <ion-col><span>Jun 17, 2021</span></ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-card class="primary-layout job-qualification">
          <ion-card-content>
            <ion-row>
              <ion-col size="3">
<!--                TODO: replace with a component that doesn't break SSR-->
<!--                <ve-progress :progress="17" legend="17" :size="60" :legend-formatter="legendFormatter" color="rgb(89,36,176)">-->
<!--                  <span slot="legend">%</span>-->
<!--                </ve-progress>-->
              </ion-col>
              <ion-col size="9">
                <ion-row>
                  <ion-col size="10">Oops! You need to add credentials</ion-col>
                  <ion-col size="2" class="ion-align-self-center"><app-icon name="add-circle" size="medium" /></ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
            <ion-row>
              <app-progress-bar :progress="17"></app-progress-bar>
            </ion-row>

            <ion-grid>
              <ion-row>
                <ion-col size="2"><app-icon name="not-allowed-pink" size="medium" /></ion-col>
                <ion-col><ion-badge color="warning">Long Term Care</ion-badge></ion-col>
                <ion-col size="2"><app-icon name="add-purple" size="medium" /></ion-col>
              </ion-row>
              <ion-row v-for="_ in 5" :key="_">
                <ion-col size="2"><app-icon name="not-allowed-pink" size="medium" /></ion-col>
                <ion-col>Resume</ion-col>
                <ion-col size="2"><app-icon name="add-purple" size="medium" /></ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="2"><app-icon name="verification-check-blue" size="medium" /></ion-col>
                <ion-col>CNA Certificate</ion-col>
                <ion-col size="2"><app-icon name="chevron-right-purple" size="medium" /></ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
      </ion-card>
      </template>
    </ion-content>

    <ion-footer>
      <ion-row>
        <ion-col class="ion-no-padding">
          <ion-button fill="clear" expand="full">
            <span>
              <app-icon name="share-purple" size="medium" />
            <span>ShiftShare<sup>TM</sup></span>
            </span>
          </ion-button>
        </ion-col>
        <ion-col class="ion-no-padding">
          <ion-button fill="clear" expand="full">
            <span>
              <app-icon name="send-purple" size="medium" />
              <span>Request Job</span>
            </span>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonFooter } from '@ionic/vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonBadge, IonSpinner } from '@ionic/vue';
import {defineComponent, ref, reactive} from 'vue';
// import { VeProgress } from "vue-ellipse-progress";
import {AppIcon, JobDetailItem, Calendar, AppProgressBar, LicenseBadge} from "@/_ui-kits";
import axios from "axios";
import {useRoute} from "vue-router";
// import {format, parse} from 'date-fns'


export default defineComponent({
  name: 'JobDetail',
  components: {
    LicenseBadge,
    IonContent,
    IonHeader,
    IonPage,
    IonFooter,
    IonTitle,
    IonLabel,
    IonToolbar,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonButton,
    IonSpinner,
    JobDetailItem,
    AppIcon,
    Calendar,
    AppProgressBar,
    // VeProgress,
  },
  setup() {
    const route = useRoute();
    const fetching = ref(true);
    const jobResult = reactive({
      error: null,
      data: null,
    });
    const getJob = () => {
      axios.get(`https://ioniconf-2021-jobs.herokuapp.com/jobs/${route.params.slug}/details`).then(({data}) => {
        jobResult.data = data;
      }).finally(() => fetching.value = false);
    }
    return {
      getJob,
      fetching,
      jobResult,
    }
  },
  created() {
    this.getJob();
  },
  computed: {
    job() {
      return this.jobResult.data;
    },
  },
  methods: {
    legendFormatter({ currentValue }) {
      return `<img src="/assets/icons/uops.svg" width="20" height="20" /><br />${currentValue}%`
    }
  }
});
</script>

<style lang="scss" scoped>
.job {
  &-meta {
    ion-card-content ion-row {
      position: relative;
      ion-col {
        &:not(:last-child):after {
          content: "";
          position: absolute;
          height: 35px;
          width: 100%;
          border-right: 1px solid rgba(0, 0, 0, .05);
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        ion-label {
          display: block;
          white-space: nowrap;
          text-align: center;

          &:nth-child(1) {
            color: var(--app-color-purple);
          }

          &:nth-child(2) {
            font-weight: bold;
          }
        }
      }
    }
  }

  &-status {

  }

  &-properties {
    ion-row {
      margin-bottom: .5rem;
      ion-col {
        ion-label {
          display: block;
          color: var(--ion-color-dark);
          &:nth-child(1) {
            color: var(--app-color-purple);
            line-height: 2em;
          }
          &:nth-child(2) {
            font-size: 20px;
            line-height: 1.3em;
          }
        }
      }
    }
  }

  &-shifts {
    font-size: 16px;
    hr {
      height: 1px;
      width: 100%;
      display: block;
      margin: .5em;
      border-style: inset;
      border-width: .5px;
      color: #a5a5a5;
      background: #a5a5a5;
      opacity: .2;
    }

    h4 {
      font-size: 18px;
      font-weight: 500;
      color: #000;
    }

    ion-grid {
      color: var(--ion-color-dark);
    }
  }

  &-qualification {
    margin: 0 0 16px;

    ion-grid {
      color: var(--ion-color-dark);

      ion-row {
        min-height: 70px;
        &:not(:last-child) {
          border-bottom: 1px solid #cbc6c6;;
        }

        ion-col {
          align-items: center;
          display: flex;
        }
      }
    }
  }
}

ion-footer {
  background: #ddf5ff;
  ion-col:not(:last-child):after {
    content: "";
    position: absolute;
    height: 70%;
    width: 2px;
    border-right: 1px solid var(--app-color-purple);
    left: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(-1px);
  }

  ion-button {
    height: 70px;
    text-transform: none;
    font-weight: normal;
    letter-spacing: 1.2px;

    > span > ion-icon {
      margin-bottom: 5px;
    }
    span {
      display: block;
      width: 100%;
    }
  }
}
</style>
