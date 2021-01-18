import AppButton from './AppButton.vue';

export default {
  title: 'Components/Button',
};

export const Simple = (args, { argTypes }) => ({
  components: { AppButton },
  template: '<AppButton  label="Simple" :variant="variant" :disabled="disabled"/>',
  props: Object.keys(argTypes),
  data() {
    return args;
  },
});
Simple.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: [
        'primary',
        'secondary',
      ],
    },
  },
  disabled: {
    control: {
      type: 'select',
      options: [
        true,
        false,
      ],
    },
  },
};

export const Primary = () => ({
  components: { AppButton },
  template: '<AppButton  label="Primary" variant="primary"/>',
});

export const Secondary = () => ({
  components: { AppButton },
  template: '<AppButton  label="Secondary" variant="secondary"/>',
});

export const Disabled = () => ({
  components: { AppButton },
  template: '<AppButton  label="Disabled" :disabled="true" />',
});
export const Icon = () => ({
  components: { AppButton },
  template: '<AppButton iconName="home"/>',
});
