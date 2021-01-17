import AppButton from './AppButton.vue';

export default {
  title: 'Components/Button',
};

export const Simple = () => ({
  render() {
    return <AppButton label="Simple"/>;
  },
});

export const Primary = () => ({
  components: { AppButton },
  template: '<AppButton  label="Primary" button-variant="primary"/>',
});

export const Secondary = () => ({
  components: { AppButton },
  template: '<AppButton  label="Secondary" button-variant="secondary"/>',
});

export const Disabled = () => ({
  components: { AppButton },
  template: '<AppButton  label="Disabled" :disable="true" />',
});
export const Icon = () => ({
  components: { AppButton },
  template: '<AppButton iconName="home"/>',
});
