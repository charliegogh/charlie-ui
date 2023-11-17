<template>
  <xDialog
    :visible="visible"
    :xtitle="title"
    class="x-shipping-address"
    @close="handleClose"
  >
    <div v-show="action === 'add'" class="x-shipping-address__add">
      <p class="p-tip">
        注意：请在<span class="text-tag">一个月内</span>填写收货信息，若超过时间未填写则不再补寄赠品。
      </p>
    </div>
    <div v-show="action === 'preview'" class="x-shipping-address__preview">
      <p class="p-tip">赠品预计一周内由厂家发货，并由其负责售后。<span class="text-tag">一经发出概不退货</span>，如有问题请详询客服。</p>
    </div>
    <Form
      ref="Form"
      :key="key"
      :form-fields="formFields"
      :data-form="dataForm"
      :rules="rules"
    />
    <div v-show="action === 'add'" class="x-shipping-address__preview">
      <p class="p-tip p-label">说明：</p>
      <div>
        <p class="p-tip">1. 收货信息填写后不可修改，填写后可至<a href="javascript:;" @click="targetLink">【个人中心-我的消费记录】</a>进行查看。</p>
        <p class="p-tip">2. 赠品预计一周内由厂家发货，并由其负责售后。<span class="text-tag">一经发出概不退货</span>，如有问题请详询客服。</p>
      </div>
    </div>
    <div v-if="action === 'add'" class="x-shipping-address__handle">
      <x-button class="btn-blue" @click="handleSubmit">
        确定
      </x-button>
      <x-button class="btn-line-blue" @click="handleClose">
        取消
      </x-button>
    </div>
  </xDialog>
</template>
<script>
import xDialog from './components/dialog/index.vue'
import Form from './components/Form.vue'
import xButton from './components/button.vue'
// import { desensitizationPhone, desensitizationUserName } from './utils'
const domain = document.domain.split('.')[0]
const link = {
  'xtest': 'https://xtest.cnki.net/account/app.html',
  '192': 'https://xtest.cnki.net/account/app.html',
  'localhost': 'https://xtest.cnki.net/account/app.html',
  'x': 'https://x.cnki.net/account/app.html'
}[domain]
export default {
  name: 'ShippingAddress',
  components: {
    xDialog,
    Form,
    xButton
  },
  data() {
    return {
      link,
      title: '填写收货地址',
      visible: true,
      action: 'add',
      key: 0,
      dataForm: {
      },
      confirmLoading: false,
      formFields: [
        {
          prop: 'orderName', label: '已选赠品', component: 'text'
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
        orderName: [{ required: false, message: '请输入收件人', trigger: 'blur' },
          {
            pattern: /^.{1,80}$/,
            message: '输入长度最多80个字符',
            trigger: 'blur'
          }
        ],
        name: [{ required: true, message: '请输入收件人', trigger: 'blur' }],
        Mobile: [{ required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^(1[3456789]\d{9}|((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?)$/, message: '请输入正确的电话信息', trigger: 'blur' }
        ],
        FullAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' },
          {
            pattern: /^.{3,80}$/,
            message: '输入长度必须在3到80之间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    targetLink() {
      const orderName = this.dataForm?.orderName || '未获取到赠品信息'
      window.location.href = link + '?orderName=' + orderName + '#/myConsumptionRecord'
    },
    handleSubmit() {
      const status = this.$refs.Form.validate()
      if (status) {
        this.confirmLoading = true
        this.$emit('handleSubmit', this.dataForm)
      }
    },
    hide() {
      this.visible = false
      this.$emit('close')
    },
    handleClose() {
      this.visible = false
      this.$emit('close')
    },
    add(record) {
      this.title = '填写收货信息'
      this.action = 'add'
      this.dataForm = Object.assign({}, record)
      this.visible = true
      this.$nextTick(() => {
        this.$refs.Form.clearValidate()
      })
    },
    preview(record) {
      this.title = '查看收货信息'
      this.action = 'preview'
      this.dataForm = Object.assign({}, record)
      this.formFields.forEach(i => (i.component = 'text'))
      this.rules = {}
      this.key++
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
