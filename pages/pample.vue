<template>
  <div class="order-info">
    <div class="oi-lan-box">
      <div class="oi-lan" style="text-align: right;">
        <select v-model="selectedLanguage" @change="changeLanguage">
          <option value="zh-TW">繁體中文</option>
          <option value="en-US">English</option>
        </select>
      </div>
    </div>
    <div id="ECPayPayment"></div><br />

    <form action="" id="PayProcess" method="post">
      <div style="text-align: center;">
        <input id="PaymentType" name="PaymentType" type="hidden" value="" />
        <button @click.prevent="handlePayment" class="btn single btn-gray-dark">確認付款</button>
      </div>
      <br />
      <div style="text-align: center;">
        消費者選擇付款方式取得的PayToken : 
        <input id="PayToken" name="PayToken" type="text" size="50" v-model="payToken" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      selectedLanguage: 'zh-TW',
      payToken: '',
      token: '9cbf8fac271b475bae42cbe6aea8a9cc',
    };
  },
  methods: {
    changeLanguage() {
      this.initializeECPaySDK();
    },
    initializeECPaySDK() {
      const environment = this.getEnvironment('STAGE');
      ECPay.initialize(environment, 1, (errMsg) => {
        if (errMsg) {
          this.handleErrorMessage(errMsg);
        } else {
          console.log('初始化成功，可以進行接下來的付款畫面功能');
          this.createPayment();
        }
      });
    },
    createPayment() {
      try {
        ECPay.createPayment(this.token, this.selectedLanguage, (errMsg) => {
          if (errMsg != null) {
            this.handleErrorMessage(errMsg);
          }
        }, 'V2');
      } catch (err) {
        this.handleErrorMessage(err);
      }
    },
    getEnvironment(env) {
      switch (env) {
        case 'STAGE':
          return 'Stage';
        case 'PROD':
          return 'Prod';
        default:
          return 'STAGE';
      }
    },
    handleErrorMessage(strErr) {
      if (strErr != null) {
        console.log(strErr);
      } else {
        console.log('Wrong');
      }
    },
    handlePayment() {
      try {
        ECPay.getPayToken((paymentInfo, errMsg) => {
          if (errMsg != null) {
            this.handleErrorMessage(errMsg);
            return;
          }
          this.payToken = paymentInfo.PayToken;
        });
      } catch (err) {
        this.handleErrorMessage(err);
      }
    },
  },
};
</script>
