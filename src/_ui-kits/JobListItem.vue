<template>
  <ion-card class="primary-layout">
    <div class="img-container">
      <img :src="cardImageUrl"/>
      <div class="job-amount">
        <p>Estimated total amount</p>
        <h3>${{ $filters.jobAmount(job) }}</h3>
      </div>
    </div>

    <ion-card-header>
      <ion-badge color="success">Open</ion-badge> <license-badge :type="job.licenseType" />
      <ion-card-title class="facility__name">{{ job.facility.fac_name }}</ion-card-title>
      <ion-card-subtitle class="facility__address">{{ $filters.jobFacilityLocation(job) }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <ion-row>
        <ion-col>
          <ion-badge
              v-for="js in job.jobSpecialties"
              :key="js.specialty.specialty_acronym"
              :style="`background: ${js.specialty.specialty_color}`"
          >{{ job.jobSpecialties.length > 1 ? js.specialty.specialty_acronym : js.specialty.specialty_title }}</ion-badge>
        </ion-col>
      </ion-row>
      <ion-row class="card-meta">
        <ion-col class="ion-no-padding">
          <app-icon name="per-diem-grey" size="medium"/>
          <br/> {{ $filters.jobTypeLabel(job.job_type) }}
        </ion-col>
        <ion-col class="ion-no-padding">
          <app-icon name="date-grey" size="medium"/>
          <br/> {{ $filters.shiftStartDate(job.job_start_date) }}
        </ion-col>
        <ion-col class="ion-no-padding">
          <app-icon name="day-shift-grey" size="medium"/>
          <br/> {{ job.job_shift }}
        </ion-col>
      </ion-row>
    </ion-card-content>
    <hr/>
    <ion-row class="card-footer">
      <ion-col class="ion-no-padding">
        <router-link custom :to="{name: 'jobs.detail', params: {slug: job.job_id}}" v-slot="{href}">
          <ion-button fill="clear" expand="full" :router-link="href">
            More Details
          </ion-button>
        </router-link>
      </ion-col>
    </ion-row>
  </ion-card>
</template>

<script>
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonRow,
  IonBadge
} from '@ionic/vue';
import {defineComponent} from 'vue';
import {LicenseBadge} from "@/_ui-kits/index";

export default defineComponent({
  name: "JobListItem",
  components: {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonButton, IonBadge, LicenseBadge},
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    cardImageUrl() {
      return this.job.facility.image_url;
    }
  }
});

</script>

<style lang="scss" scoped>
ion-card-header {
  padding-top: 8px;
}
ion-card-content {
  padding-bottom: 0;
}
ion-badge {
  margin-bottom: 15px;
  + ion-badge {
    margin-left: 8px;
  }
}

img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover
}

.img-container {
  position: relative;
  height: 100px;
  overflow: hidden;

  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: var(--app-color-purple);
    opacity: .45;
  }
}

.job-amount {
  left: .75rem;
  top: .75rem;
  position: absolute;
  z-index: 1;
  color: #fff;

  h3 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: .66px;
    font-weight: 700;
    margin: 0;
  }

  p {
    margin: 0;
  }
}

.facility {
  &__name {
    font-weight: 400 !important;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: .5px;
    color: rgba(0, 0, 0, .87);
    margin-top: 0;
  }

  &__address {
    font-weight: 400 !important;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: .38px;
    color: #5f5f5f;
    padding-top: 4px;
  }
}

.card-footer {
  border-top: 1px solid #cbc6c6;
}

.card-meta ion-col {
  text-align: center;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: .38px;
  color: #212121;
  font-weight: 300;
}

ion-button {
  text-transform: none;
}
</style>
