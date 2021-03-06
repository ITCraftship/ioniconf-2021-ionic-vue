declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module 'v-calendar/*';
declare module 'vue-ellipse-progress';

declare const cordova;