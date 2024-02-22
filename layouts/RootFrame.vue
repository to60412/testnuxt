<template>
  <v-app>
    <v-layout>
      <v-app-bar color="#e7e7e7" height="38">
        <template v-slot:prepend> </template>
        <v-breadcrumbs :items="items"></v-breadcrumbs>

        <v-btn @click="home">
          <v-icon icon="mdi-home"></v-icon>{{ $t("首頁") }}
        </v-btn>

        <v-btn @click="planLevel">
          <v-icon icon="mdi-package-variant"></v-icon>{{ $t("方案") }}
        </v-btn>

        <v-btn @click="casepage">
          <v-icon icon="mdi-file-document"></v-icon>{{ $t("首次使用") }}
        </v-btn>

        <v-btn @click="contactUs">
          <v-icon icon="mdi-file-document"></v-icon>{{ $t("聯絡我們") }}
        </v-btn>

        <v-btn @click="specification">
          <v-icon icon="mdi-file-document"></v-icon>{{ $t("產品規格") }}
        </v-btn>


        <!-- <v-btn @click="register">
                    <v-icon icon="mdi-information"></v-icon>{{ $t('註冊') }}
                </v-btn> -->
        <v-btn v-show="computedIsMemberLoggedIn" @click="memberCentre">
          <v-icon icon="mdi-account"></v-icon>{{ $t("會員專區") }}
        </v-btn>

        <div class="spacer"></div>
        <!--            
                  <v-btn @click="logout">
                      <v-icon icon="mdi-logout"></v-icon>{{ $t('登入/出') }}
                  </v-btn> -->
        <v-btn v-if="computedIsMemberLoggedIn" @click="logout">
          <v-icon icon="mdi-logout"></v-icon>{{ $t("登出") }}
        </v-btn>

        <v-btn v-else @click="login">
          <v-icon icon="mdi-login"></v-icon>{{ $t("登入") }}
        </v-btn>
      </v-app-bar>

      <v-main color="#FFF">
        <div id="pageContent">
          <div id="t">
            <slot></slot>
          </div>
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import Swal from 'sweetalert2';
import { usePathStore } from "@/stores/path";

export default {
  data() {},
  name: "RootFrame",
  data: () => ({
    rail: false,
    drawer: true,
    items: [],
    isMemberLoggedIn: false,
    navList: [
      {
        id: 123,
        name: "home",
        icon: "mdi-clipboard-list",
        child: [],
        to: "/home",
      },
      {
        id: 99,
        name: "聯絡我們",
        icon: "mdi-clipboard-list",
        child: [],
        to: "/contactUs",
      },
      {
        id: 66,
        name: "方案頁面",
        icon: "mdi-clipboard-list",
        child: [],
        to: "/casepage",
      },
      {
        id: 95,
        name: "登入頁面",
        icon: "mdi-clipboard-list",
        child: [],
        to: "/newLogIn",
      },
      {
        id: 94,
        name: "註冊頁面",
        icon: "mdi-clipboard-list",
        child: [],
        to: "/register",
      },
      {
        id: 77,
        name: "產品規格",
        icon: "mdi-clipboard-list",
        child: [],
        to: "/Specification",
      },
    ],
  }),
  computed: {
    computedIsMemberLoggedIn() {
      if (typeof sessionStorage !== "undefined") {
        return sessionStorage.getItem("Token") !== null;
      }
      return false;
    },
  },

  methods: {
    checkMemberLoginStatus() {
      if (typeof sessionStorage !== "undefined") {
        const memberId = sessionStorage.getItem("memberId");
        return memberId !== null && memberId !== undefined;
      }
      return false;
    },

    
    logout() {
  Swal.fire({
    title: '確認登出',
    text: "您確定要登出嗎？",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '是的，我要登出',
    cancelButtonText: '取消',
    allowOutsideClick: false // 鎖定對話框
  }).then((result) => {
    if (result.isConfirmed) {

      sessionStorage.removeItem("Token");
      this.$router.push("/newLogIn").then(() => {
        setTimeout(() => {
          location.reload();
        }, 10);
      });
    }
  });
}
,


    login() {
      this.isLoggedIn = false;
      this.$router.push("/newLogIn");
    },
    setPath(it) {
      console.log(it);
      this.items[1] = {
        title: this.$t(it.name),
        disabled: false,
        to: it.to,
      };
      pathStore.setData(this.items);
    },
    home() {
      this.$router.push("/home");
    },
    register() {
      this.$router.push("/register");
    },
    planLevel() {
      if (this.$route.path !== "/planLevel") {
        this.$router.push("/planLevel");
      } else {
        this.$router.go(0);
      }
    },
    memberCentre() {
      this.$router.push("/memberCentre");
    },
    casepage() {
      this.$router.push("/casepage");
    },
    contactUs() {
      this.$router.push("/contactUs");
    },

    specification() {
      this.$router.push("/specification");
    },

    updateItem() {
      this.items = [
        {
          title: this.$t("home"),
          disabled: false,
          href: "/home",
        },
        {
          title: this.$t(getTitleByRoute(this.$route.path)),
          disabled: false,
          to: this.$route.path,
        },
      ];
      pathStore.setData(this.items);
    },
  },
  created() {
    this.isMemberLoggedIn = this.checkMemberLoginStatus();
  },
  mounted() {},
};
</script>

<style>
html {
  height: 100%;
  overflow: hidden !important;
}

body,
#app {
  height: 100%;
}

footer {
  margin-right: 10px;
  height: 50px;
}

#footer {
  width: 100%;
}

main {
  height: 100%;
  overflow: hidden;
}

main[color="#FFF"] {
  margin-top: 38px;
  --v-layout-top: 0px !important;
}

#pageContent {
  overflow-y: scroll !important;
  height: 100%;
}

.v-list-item-title {
  font-size: 14px;
}

#__nuxt {
  height: 100%;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.red {
  color: red;
}

.subVuetifyNavItem {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px !important;
}

.selectTr {
  background: rgba(255, 228, 228, 0.74) !important;
}

.v-messages {
  min-height: 0px !important;
}

.v-input__details {
  min-height: 0px !important;
  padding-top: 0px !important;
}

.v-btn__content {
  font-weight: bold;
}

.v-table.mTable thead {
  background-color: #cfe2ff;
}

.v-table.mTable thead tr th {
  font-weight: bold;
  font-size: 1rem !important;
}

.v-table.mTable tbody tr td {
  font-size: 1rem !important;
}

.v-table.userTable thead {
  background-color: #fdf8d9;
}

.v-table.userTable thead tr th {
  font-weight: bold;
  font-size: 1.2rem !important;
}

.v-table.userTable tbody tr td {
  font-size: 1rem !important;
}

button.v-btn {
  font-size: 1rem !important;
}

a.v-btn {
  font-size: 1rem !important;
}

.v-toolbar__content .v-breadcrumbs {
  margin-bottom: 0px;
}

@media (max-width: 778px) {
  .v-overlay__content[style="width: 50%;"] {
    width: 90% !important;
  }

  .mTable thead {
    display: none;
  }

  .v-card.elevation-3 {
    box-shadow: none !important;
  }

  .mTable tbody tr {
    display: flow-root;
    margin-bottom: 15px;
    border: 3px solid rgb(118, 207, 155);
  }

  .mTable tbody td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(204, 204, 204);
  }

  .mTable tbody td.description {
    vertical-align: middle !important;
  }

  .mTable tbody td:before {
    content: attr(data-title);
    font-weight: bold;
  }
}

@media (max-width: 470px) {
  footer {
    height: 100px;
  }

  #pageContent {
    margin-bottom: -130px;
  }
}
.spacer {
  margin: 30px;
}
</style>
