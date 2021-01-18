import { mount } from '@vue/test-utils';
import AppButton from '../../src/components/button/AppButton.vue';

describe('Test props component', () => {
  const wrapper = mount(AppButton, {
    propsData: {
      label: 'Primary',
    },
  });

  test('label', () => {
    expect(wrapper.props().label).toBe('Primary');
  });

  test('variant', () => {
    wrapper.setProps({ variant: 'primary' });
    expect(wrapper.props().variant).toBe('primary');
  });

  test('disabled', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.props().disabled).toBe(true);
  });

  test('icon name', () => {
    wrapper.setProps({ iconName: 'home' });
    expect(wrapper.props().iconName).toBe('home');
  });
});

describe('Methods', () => {
  const wrapper = mount(AppButton);
  test('click at the button', () => {
    wrapper.find('button').trigger('click');
  });
});

describe('View button', () => {
  const wrapper = mount(AppButton);
  test('Default button', () => {
    expect(wrapper.vm.buttonClass).toBe('button-config');
  });
  test('Primary button', () => {
    wrapper.setProps({ variant: 'primary' });
    expect(wrapper.vm.buttonClass).toBe('button-config primary');
  });
  test('Secondary button', () => {
    wrapper.setProps({ variant: 'secondary' });
    expect(wrapper.vm.buttonClass).toBe('button-config secondary');
  });
  test('Disabled button', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.vm.buttonClass).toBe('button-config disabled');
  });
  test('Icon button', () => {
    wrapper.setProps({ iconName: 'home', disabled: false, variant: '' });
    expect(wrapper.vm.buttonClass).toBe('button-icon-config');
    expect(wrapper.vm.icon).toBe(`fa fa-${wrapper.vm.iconName}`);
  });
});
