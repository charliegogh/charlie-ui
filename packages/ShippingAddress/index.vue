<template>
  <xDialog :visible="visible" class="x-shipping-address" @close="visible = false">
    <div v-show="action === 'add'" class="x-shipping-address__add">
      <p class="p-tip">收货地址<span class="text-tag">填写后不可修改</span>，请确认无误后点击确定</p>
    </div>
    <div v-show="action === 'preview'" class="x-shipping-address__preview">
      <p class="p-tip">赠品预计一周内由厂家发货，并由其负责售后。<span class="text-tag">一经发出概不退货</span>，如有问题请详询客服。</p>
    </div>
    <Form
      ref="Form"
      :form-fields="formFields"
      :data-form="dataForm"
      :rules="rules"
    />
    <div v-show="action === 'add'" class="x-shipping-address__preview"><p class="p-tip">赠品预计一周内由厂家发货，并由其负责售后。<span class="text-tag">一经发出概不退货</span>，如有问题请详询客服。</p></div>
    <div v-if="action === 'add'" class="x-shipping-address__handle">
      <x-button class="btn-blue" @click="handleSubmit">
        确定
      </x-button>
      <x-button class="btn-line-blue" @click="visible = false">
        取消
      </x-button>
    </div>
  </xDialog>
</template>
<script>
import xDialog from './components/dialog'
import Form from './components/Form'
import xButton from './components/button'
export default {
  name: 'ShippingAddress',
  components: {
    xDialog,
    Form,
    xButton
  },
  data() {
    return {
      title: '填写收获地址',
      visible: false,
      action: 'add',
      dataForm: {
      },
      confirmLoading: false,
      formFields: [
        {
          prop: 'orderName', label: '已选商品', component: 'text'
        },
        {
          prop: 'name', label: '收件人', component: 'input'
        },
        {
          prop: 'Mobile', label: '联系电话', component: 'input'
        },
        {
          prop: 'FullAddress', label: '详细地址', component: 'input'
        }
      ],
      rules: {
        orderName: [{ required: false, message: '请输入收件人', trigger: 'blur' }],
        name: [{ required: true, message: '请输入收件人', trigger: 'blur' }],
        Mobile: [{ required: true, message: '请输入联系电话', trigger: 'change' }],
        FullAddress: [{ required: true, message: '请输入详细地址', trigger: 'change' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      const status = this.$refs.Form.validate()
      if (status) {
        this.confirmLoading = true
        this.$emit('handleSubmit', this.dataForm)
      }
    },
    hide() {
      this.visible = false
    },
    add(record) {
      this.title = '添加收货地址'
      this.action = 'add'
      this.dataForm = Object.assign({}, record)
      this.visible = true
      this.$nextTick(() => {
        this.$refs.Form.clearValidate()
      })
    },
    preview(record) {
      this.title = '查看收货地址'
      this.action = 'preview'
      this.dataForm = Object.assign({}, record)
      this.formFields.forEach(i => (i.component = 'text'))
      this.rules = {}
      this.visible = true
      this.$nextTick(() => {
        this.$refs.Form.clearValidate()
      })
    }
  }
}
</script>
<style lang="less">
@import "./styles.less";
</style>
