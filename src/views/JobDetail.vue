<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <router-link custom :to="{name: 'jobs'}" v-slot="{href}">
          <ion-back-button slot="start" :defaultHref="href" icon="chevron-back"></ion-back-button>
        </router-link>
        <ion-title>Job Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Job Details</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card class="primary-layout job-meta">
              <ion-card-content>
                <ion-grid class="ion-no-padding">
                  <ion-row>
                    <ion-col size="4">
                      <ion-label>Shift Date</ion-label>
                      <ion-label>Jun 15, 2021</ion-label>
                    </ion-col>
                    <ion-col size="4">
                      <ion-label>Shift Time</ion-label>
                      <ion-label>06:00 - 14:00</ion-label>
                    </ion-col>
                    <ion-col size="4">
                      <ion-label>License Type</ion-label>
                      <ion-label><ion-badge>CNA</ion-badge></ion-label>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <job-detail-item />
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
                    <ion-label>Per Diem</ion-label>
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
                    <ion-label>Come fill this shift! Please sign in and out of the quick base system when you arrive and leave the facility</ion-label>
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
              <ion-card-content>job shifts card</ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-card class="primary-layout">
          <ion-card-content>job qualification card</ion-card-content>
      </ion-card>
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

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonFooter } from '@ionic/vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonBadge } from '@ionic/vue';
import { defineComponent } from 'vue';
import {AppIcon, JobDetailItem} from "@/_ui-kits";

export default defineComponent({
  name: 'JobDetail',
  components: {
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
    JobDetailItem,
    AppIcon,
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
