<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
  >
    <i v-if="iconName" :class="icon"></i>
    <span v-if="label" v-html="label" />
    <slot></slot>
  </button>
</template>

<script type="text/javascript">
export default {
  name: 'AppButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
    },
    disabled: {
      default: false,
    },
    iconName: {
      type: String,
    },
  },
  computed: {
    icon() {
      return `fa fa-${this.iconName}`;
    },
    buttonClass() {
      if (this.disabled) {
        if (this.iconName) {
          return 'button-icon-config disabled';
        }
        return 'button-config disabled';
      }
      if (this.variant) {
        return `button-config ${this.variant}`;
      }
      if (this.iconName && !this.label) {
        return 'button-icon-config';
      }
      return 'button-config';
    },
  },
};
</script>

<style scoped>
.button-icon-config {
  width: 34px;
  height: 34px;
  background: #39363E 0 0 no-repeat padding-box;
  opacity: 1;
  color: white;
  border-radius: 50%;
  border: 0;
}
.button-icon-config:hover {
  background: #56525E;
}

.button-config {
  width: 130px;
  height: 40px;
  border-radius: 2px;
  opacity: 1;
  border: 0;
}
.button-config:focus {
  border: 0;
}
.primary {
  background: #FFEF33 0 0 no-repeat padding-box;
}
.primary:hover {
  background: #FFF68D 0 0 no-repeat padding-box;
}
.primary:active {
  background: #F4CE00 0 0 no-repeat padding-box;
}
.primary span {
  font: normal normal bold 12px/17px Open Sans;
  letter-spacing: 0;
  color: #131215;
  text-transform: uppercase;
  opacity: 1;
}
.primary:hover span {
  color: #131215;
}

.secondary {
  background: #56525E 0 0 no-repeat padding-box;
}
.secondary:hover {
  background: #AEA9B8 0 0 no-repeat padding-box;
}
.secondary:active {
  background: #56525E 0 0 no-repeat padding-box;
}

.secondary span {
  font: normal normal bold 12px/17px Open Sans;
  letter-spacing: 0;
  color: #AEA9B8;
  text-transform: uppercase;
  opacity: 1;
}
.secondary:hover span {
  color: #E9E5EF;
}
.secondary:active span {
  color: #AEA9B8;
}

.disabled {
  background: #39363E 0 0 no-repeat padding-box;
  border: 1px solid #57535F;
  border-radius: 2px;
  opacity: 1;
}
.disabled span {
  font: normal normal bold 12px/17px Open Sans;
  letter-spacing: 0;
  color: #57535F;
  text-transform: uppercase;
  opacity: 1;
}
.disabled i {
  color: #57535F;
  opacity: 1;
}
</style>
