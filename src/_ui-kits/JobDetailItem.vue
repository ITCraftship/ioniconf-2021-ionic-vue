<template>
  <ion-card class="primary-layout">
    <div class="img-container">
      <img :src="cardImageUrl" />
      <div class="job-amount">
        <p>Estimated total amount</p>
        <h3>${{ $filters.jobAmount(job) }}</h3>
      </div>
      <div class="nurse-amount">
        <p>Nurse pay</p>
        <b>$26.18/Hr</b>
      </div>
    </div>

    <ion-card-header class="ion-text-center">
      <ion-card-title class="facility__name">Rocky Mountain Care | Rocky Mtn. Care of Logan </ion-card-title>
      <ion-card-subtitle class="facility__address">
        <ion-row>
          <ion-col>{{ $filters.jobFacilityLocation(job) }}</ion-col>
          <ion-col size="auto"><app-icon name="marker-purple" size="medium" /> </ion-col>
        </ion-row>
      </ion-card-subtitle>
    </ion-card-header>
    <ion-row class="card-footer">
      <ion-col class="ion-no-padding">
        <ion-button fill="clear" expand="full">
        See on the Map
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import AppIcon from "@/_ui-kits/AppIcon";

export default defineComponent({
  name: "JobDetailItem",
  props: ['job'],
  // eslint-disable-next-line vue/no-unused-components
  components: {AppIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonButton },
  computed: {
    cardImageUrl() {
      return this.job.facility.image_url
    },
  }
});

</script>

<style lang="scss" scoped>
@import "../theme/intro";/* cann be configured to auto-load into scss scripts */

ion-card {
  @include media-breakpoint-up(md) {
    box-shadow: unset;
    border-radius: 0;
  }

  > ion-card-header, > ion-row {
    @include media-breakpoint-up(md) {
      display: none;
    }
  }
}
img {
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit:cover;
  @include media-breakpoint-up(md) {
    -o-object-fit: unset;
    object-fit: unset;
    height: auto;
  }
}
.img-container {
  position: relative;
  height: auto;
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
    @include media-breakpoint-up(md) {
      display: none;
    }
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

.nurse-amount {
  left: .75rem;
  bottom: .75rem;
  position: absolute;
  z-index: 1;
  color: #fff;
  b {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: .66px;
    margin: 0;
  }

  p {
    margin: 0;
    font-weight: 700;
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
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: .38px;
    color: var(--app-color-purple);
    padding-top: 4px;
  }
}
.card-footer {
  border-top: 1px solid #cbc6c6;
}
ion-button {
  text-transform: none;
}
</style>
