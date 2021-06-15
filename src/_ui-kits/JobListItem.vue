<template>
  <ion-card class="primary-layout">
    <div class="img-container">
      <img :src="cardImageUrl" />
      <div class="job-amount">
        <p>Estimated total amount</p>
        <h3>$264.82</h3>
      </div>
    </div>

    <ion-card-header>
      <ion-card-title class="facility__name">Rocky Mountain Care | Rocky Mtn. Care of Logan </ion-card-title>
      <ion-card-subtitle class="facility__address">1480 N 400 E, Logan, UT, 84341 </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
        <ion-row class="card-meta">
          <ion-col class="ion-no-padding"><app-icon name="per-diem-grey" size="medium" /><br /> Per Diem</ion-col>
          <ion-col class="ion-no-padding"><app-icon name="date-grey" size="medium" /><br /> Jun 1st 2021</ion-col>
          <ion-col class="ion-no-padding"><app-icon name="day-shift-grey" size="medium" /><br /> 06:00 - 14:00</ion-col>
        </ion-row>
    </ion-card-content>
    <hr />
    <ion-row class="card-footer">
      <ion-col class="ion-no-padding">
        <router-link custom :to="{name: 'jobs.detail', params: {slug: 'nice-job'}}" v-slot="{href}">
          <ion-button fill="clear" expand="full" :router-link="href">
          More Details
          </ion-button>
        </router-link>
      </ion-col>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { cardImage } from '@/views/_jobs/data';

export default defineComponent({
  name: "JobListItem",
  // eslint-disable-next-line vue/no-unused-components
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonButton },
  computed: {
    cardImageUrl() {
      return cardImage
    }
  }
});

</script>

<style lang="scss" scoped>
ion-card-content {
  padding-bottom: 0;
}
img {
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit:cover
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
    padding-top: 4px;
  }

  &__address {
    font-weight: 300 !important;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: .38px;
    color: #9f9f9f;
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
