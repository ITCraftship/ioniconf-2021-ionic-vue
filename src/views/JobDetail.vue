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
                      <ion-label>Shift Date</ion-label>
                      <ion-label>Jun 15, 2021</ion-label>
                    </ion-col>
                    <ion-col size="4">
                      <ion-label>Shift Date</ion-label>
                      <ion-label>Jun 15, 2021</ion-label>
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
            <ion-card class="primary-layout">
              <ion-card-content>job properties card</ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-card class="primary-layout">
              <ion-card-content>job shifts card</ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-card class="primary-layout">
          <ion-card-content>job qualification card</ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonBadge } from '@ionic/vue';
import { defineComponent } from 'vue';
import JobDetailItem from '../_ui-kits/JobDetailItem.vue';

export default defineComponent({
  name: 'JobDetail',
  components: {
    IonContent,
    IonHeader,
    IonPage,
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
    JobDetailItem,
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
}
</style>
