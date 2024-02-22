<template>
  <div class="content-container">
    <section class="step-section">
      <h3>步驟 1：註冊帳戶</h3>
      <p>
        欲使用 IPASP SPC EXCEL 提供的服務，請先進行
        <router-link v-if="!isLoggedIn" @click.prevent="handleRegistrationClick" :to="{ path: '/register' }">註冊</router-link>
        <span v-else>註冊</span>
        ，填寫必要的個人資訊，然後點擊 "確認註冊" 完成帳戶設立。
      </p>
    </section>

    <section class="step-section">
      <h3>步驟 2：選擇方案</h3>
      <p>
        登入您的帳戶後，請根據您的使用需求選擇適合的
        <router-link to="/planLevel">方案</router-link>。我們提供了多種服務方案，請仔細閱讀每個方案的功能以及價格，然後選擇最符合您需求的方案。
      </p>
    </section>

    <section class="step-section">
      <h3>步驟 3：購買服務</h3>
      <p>
        在選擇完方案後，請按照網頁上的指引完成購買流程。您可以使用信用卡、PayPal等不同支付方式進行支付。
      </p>
    </section>

    <section class="step-section">
      <h3>步驟 4：下載 IPASP SPC EXCEL</h3>
      <p>
        您可以在本頁點擊 "<router-link to="#">下載 IPASP SPC EXCEL</router-link> " 按鈕，將 IPASP SPC EXCEL 安裝檔下載至您的電腦。
      </p>
    </section>

    <section class="step-section">
      <h3>步驟 5：安裝 IPASP SPC EXCEL</h3>
      <p>
        打開下載好的 IPASP SPC EXCEL 安裝檔，按照安裝精靈的指引完成安裝。安裝完成後，軟體即可啟動。
      </p>
    </section>

    <section class="step-section">
      <h3>步驟 6：開始使用</h3>
      <p>
        成功啟動 IPASP SPC EXCEL 後，您可以根據您的需求使用其功能。如果您在使用過程中遇到任何問題，請參考
        <router-link to="#">軟體手冊</router-link>或
        <router-link to="/contactUs">聯繫我們</router-link>的客戶服務。
        祝您使用 IPASP SPC EXCEL 愉快！如果您有任何疑問，請隨時聯繫我們的客戶服務團隊。
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoggedIn: false,
      };
    },
    created() {
      // 檢查 sessionStorage 是否可用
      this.isLoggedIn = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('Token') !== null;
    },
    methods: {
      handleRegistrationClick() {
        if (!this.isLoggedIn) {
          this.$router.push("/register");
        } else {
          console.log("已登入，無法跳轉到註冊頁面");
        }
      },
      // 其他方法...
    },
  };
  </script>

<style scoped>
.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.step-section {
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}


router-link {
  color: #1976d2;
  cursor: pointer;
}


</style>
