<template>
  <x-form
    ref="dataForm"
    :model="dataForm"
    :rules="rules"
  >
    <x-form-item
      v-for="formField in formFields"
      :key="formField.prop"
      class="x-form-item"
      :label="formField.label+'：'"
      :prop="formField.prop"
    >
      <x-input
        v-if="formField.component === 'input'"
        v-model="dataForm[formField.prop]"
        :placeholder="
          formField.placeholder || `请输入${formField.label}`
        "
      />
      <span
        v-if="formField.component === 'text'"
      >
        {{ dataForm[formField.prop] }}
      </span>
    </x-form-item>
    <slot />
  </x-form>
</template>
<script>
import xForm from './form/form.vue'
import xFormItem from './form/form-item.vue'
import xInput from './input/input.vue'
export default {
  components: {
    xForm,
    xFormItem,
    xInput
  },
  props: {
    dataForm: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    },
    formFields: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      submitLoading: false
    }
  },
  methods: {
    validate(status = false) {
      this.$refs.dataForm.validate(vaild => (status = vaild))
      return status
    },
    clearValidate(props) {
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate(props || '')
      })
    }
  }
}
</script>
