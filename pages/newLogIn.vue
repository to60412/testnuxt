<template>
  <div class="loginBack">
    <v-form class="login-form" ref="loginForm">
      <v-row justify="center">
        <v-col lg="3">
          <v-card class="login-card">
            <v-img src=""></v-img>
            <v-text-field required :label="$t('Email/手機號碼')" prepend-inner-icon="mdi-account" class="mb-3"
              v-model="login_identifier" :rules="loginRules"></v-text-field>

            <v-text-field required :label="$t('密碼')" prepend-inner-icon="mdi-lock" class="mb-3" type="password"
              v-model="password" :rules="passwordRules"></v-text-field>

            <v-btn color="green" block @click="LoginAndFetchMember">{{
              $t("登入")
              }}</v-btn>

            <v-btn @click="register()" class="mx-0" block>{{
              $t("立即註冊")
              }}</v-btn>
            <v-btn @click="forgotPassword" class="mx-0" block>{{
              $t("找回密碼")
              }}</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-form>

    <v-dialog v-model="phoneVerificationDialog" max-width="300">
      <v-card>
        <v-card-title class="headline">首次登入請輸入手機驗證碼</v-card-title>
        <v-row>
          <v-col cols="15" style="padding: 36px">
            <v-text-field v-model="verificationCode" label="請輸入驗證碼"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn color="primary" @click="phoneVerificationDialog = false">取消</v-btn>
          <v-btn color="primary" @click="submitPhoneVerification">確定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
  import Swal from 'sweetalert2';

  export default {
    data() {
      return {
        login_identifier: "",
        password: "",
        isAuthorized: "",
        member_id: "",
        phoneVerificationDialog: false,
        verificationCode: "",
        token: "",

        loginRules: [
          (v) => !!v || "帳號不能為空",
          (v) => (v && v.length >= 6) || "帳號長度不能小於 6 個字元",
        ],
        passwordRules: [
          (v) => !!v || "密碼不能為空",
          (v) =>
            (v && v.length >= 6) || "密碼必須包含英文和數字，且大於等於6個字符",
        ],
      };
    },
    methods: {
      LoginAndFetchMember() {
        this.$refs.loginForm.validate().then((success) => {
          if (success) {
            sendPost(
              "/WeatherForecast/LoginAndFetchMember",
              {
                login_identifier: this.login_identifier,
                password: this.password,
              },
              {},
              (res) => {
                const result = res.data;
                console.log(res.data);

                //存sessionStorage
                sessionStorage.setItem("Token", result.token);

                if (result.memberId === -1) {
            sessionStorage.removeItem("memberId");
            Swal.fire({
              title: '登入失敗',
              text: '請確認帳號密碼是否正確',
              icon: 'error',
              confirmButtonText: '確定',
              allowOutsideClick: false
            });
          }else {
                  if (result.isAuthorized) {
                    Swal.fire({
                title: '歡迎登入',
                icon: 'success',
                confirmButtonText: '確定',
                allowOutsideClick: false 
              }).then(() => { 
                this.$router.push("/planLevel")
                  .then(() => {
                    setTimeout(() => {
                      location.reload();
                    }, 10);
                  });
              });
            } else {
              this.phoneVerificationDialog = true;
                  }
                }
              }
            );
          } else {
      Swal.fire({
        title: '輸入資料錯誤',
        text: '請確認輸入的資料是否正確',
        icon: 'error',
        confirmButtonText: '確定',
        allowOutsideClick: false
      });
    }
  });
},

      submitPhoneVerification() {
        // const memberId = sessionStorage.getItem("memberId");
        const token = sessionStorage.getItem("Token");
        console.log(token)
        sendPost(
          "/WeatherForecast/UpdateAuthorization",
          {          },
          { verification_code: this.verificationCode,          },
          (res) => {
            console.log("res.data:", res.data);
            if (res.data === "True") {
        Swal.fire({
          title: '歡迎登入',
          icon: 'success',
          confirmButtonText: '確定'
        }).then(() => {
          this.$router.push("/planLevel")
            .then(() => {
              setTimeout(() => {
                location.reload();
              }, 10);
            });
        });
      } else {
        Swal.fire({
          title: '錯誤',
          text: '輸入的驗證碼不正確',
          icon: 'error',
          confirmButtonText: '確定'
        });
      }
    }
  );
},

      register() {
        this.$router.push("/register");
      },

      forgotPassword() { },
    },
  };
</script>

<style scoped>
  .loginBack {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../signin-background.jpg");
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