<template>
  <div id="app">
    <div>
      <AppButton label="Primary" variant="primary"/>
    </div>
    <div>
      <AppButton label="Secondary" variant="secondary"/>
    </div>
    <div>
      <AppButton label="disabled" :disabled="true"/>
    </div>
    <div>
      <AppButton iconName="home"/>
    </div>
    <div>
      <AppButton>
        <i class="fa fa-video-camera" style="margin-right: 2px"/>
        <span>Slot</span>
      </AppButton>
    </div>
    <div>
      <AppButton label="Both" icon-name="home" variant="primary"/>
    </div>
  </div>
</template>

<script>

import AppButton from './components/button/AppButton.vue';

export default {
  name: 'App',
  components: { AppButton },
};
</script>
<style scoped>
div {
  margin-bottom: 5px;
}
</style>
