<template>
  <div class="home">
    <div>{{ sampleData }}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ContainerHelper } from '@/helpers/ContainerHelper';
import { SampleService1, ServiceResponse } from '@/services/SampleService1';

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  private sampleService1: SampleService1;
  private sampleData: ServiceResponse;

  constructor() {
    super();

    this.sampleService1 = ContainerHelper.get<SampleService1>('SampleService1');
    this.sampleData = this.sampleService1.getServiceResponse();
  }
}
</script>
