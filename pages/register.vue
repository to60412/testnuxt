<template>

  <div class="loginBack">
    <v-form class="login-form" ref="form">
      <v-row justify="center">
        <v-col lg="3">
          <v-card class="login-card">
            <v-img src=""></v-img>
            <v-text-field v-model="email" :rules="emailRules" required :label="$t('Email')"
              prepend-inner-icon="mdi-account" class="mb-3" ref="emailField" autocomplete="email"></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" required :label="$t('密碼')"
              prepend-inner-icon="mdi-lock" class="mb-3" type="password" autocomplete="new-password"></v-text-field>
            <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" required :label="$t('確認密碼')"
              prepend-inner-icon="mdi-lock" class="mb-3" type="password" autocomplete="new-password"></v-text-field>
            <v-text-field v-model="phone" :rules="phoneRules" required :label="$t('手機號碼')"
              prepend-inner-icon="mdi-phone" class="mb-3" autocomplete="tel"></v-text-field>

            <v-btn color="yellow" block @click="registermember">{{ $t('註冊') }}</v-btn>
            <br>

            <input type="checkbox" id="checkbox3">
            <label for="checkbox3">我希望收到析數行銷郵件…</label>

            <br>
            <input type="checkbox" id="checkbox2" v-model="acceptedTerms">
            <label for="checkbox2">我已閱讀並接受…的條款和條件…</label>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>


<script>
  import Swal from 'sweetalert2';

  export default {

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        emailRules: [
          (v) => !!v || '請輸入郵箱地址',
          (v) => /.+@.+\..+/.test(v) || '郵箱格式不正確',
        ],
        passwordRules: [
          (v) => !!v || '請輸入密碼',
          (v) => /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(v) || '密碼必須包含英文和數字，且大於等於6個字符',
        ],
        confirmPasswordRules: [
          (v) => !!v || '請再次輸入密碼',
          (v) => v === this.password || '兩次輸入的密碼不一致',
        ],
        phoneRules: [
          (v) => !!v || '請輸入手機號碼',
          (v) => /^\d{10}$/.test(v) || '手機號碼格式不正確',
        ],
      };
    },
    
    methods: {
      registermember() {
        // 檢查表單是否填寫完整
        this.$refs.form.validate().then(async (isValid) => {
          if (!isValid) {
            return;
          }
          if (!this.acceptedTerms) {
       Swal.fire({
          title: '錯誤',
          text: '請先接受條款和條件',
          icon: 'error',
          confirmButtonText: '確定',
          allowOutsideClick: false
        });
        return;
      }

          // 執行註冊
          sendPost(
            '/WeatherForecast/Insertmember',
            {
              email: this.email,
              pwd: this.password,
              confirm_pwd: this.confirmPassword,
              phone: this.phone,
            },
            {},
            (res) => {
              console.log(res.data);

              if (res.data === -2) {
                // 電子郵件地址一樣
                this.$refs.form.resetValidation();
                this.$refs.form.email = [this.$t('電子郵件地址已存在')];
                Swal.fire({
              title: '錯誤',
              text: '電子郵件地址已存在',
              icon: 'error',
              confirmButtonText: '確定',
              allowOutsideClick: false
            });
              } else if (res.data === -3) {
                // 手機號碼已存在
                this.$refs.form.resetValidation();
                this.$refs.form.phone = [this.$t('手機號碼已存在')];
                Swal.fire({
              title: '錯誤',
              text: '手機號碼已存在',
              icon: 'error',
              confirmButtonText: '確定',
              allowOutsideClick: false
            });
              } else if (res.data === 1) {
                // 註冊成功
                this.$router.push('/newLogin');
                Swal.fire({
              title: '成功',
              text: '註冊成功',
              icon: 'success',
              confirmButtonText: '確定',
              allowOutsideClick: false
            });
              }  else if (res.data === -4) {
                // 手機號碼已存在
                this.$refs.form.resetValidation();
                this.$refs.form.phone = [this.$t('郵箱格式不正確')];
                Swal.fire({
              title: '錯誤',
              text: '郵箱格式不正確',
              icon: 'error',
              confirmButtonText: '確定',
              allowOutsideClick: false
            });
              }  else if (res.data === -5) {
                // 手機號碼已存在
                this.$refs.form.resetValidation();
                this.$refs.form.phone = [this.$t('手機號碼格式不正確')];
                Swal.fire({
              title: '錯誤',
              text: '手機號碼格式不正確',
              icon: 'error',
              confirmButtonText: '確定',
              allowOutsideClick: false
            });
              } else {
                // 其他情況，可能是密碼不符合要求等
                console.error('註冊失敗：');
                Swal.fire({
              title: '錯誤',
              text: '註冊失敗：請確認資料填寫',
              icon: 'error',
              confirmButtonText: '確定',
              allowOutsideClick: false
            });
              }
            },

          );
        });
      },
    },
  };
</script>

<style scoped>
  .loginBack {

    min-height: 100vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../signin-background.jpg');
    background-size: cover;

  }

  .login-form {
    width: 100%;
  }

  .login-card {
    width: 100%;
    padding: 36px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  v-img {
    height: 100%;
  }

  .mb-3 {
    margin-bottom: 5rem;
    margin-top: 2rem;
  }

  .mx-0 {
    margin-top: 1rem;
  }



</style>