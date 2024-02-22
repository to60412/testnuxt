<template>
  <div class="member-area">
    <v-container class="mt-5">
      <v-row>
        <v-col>
          <v-btn-toggle v-model="activeTab" class="mb-4" style="width: 100%; border: transparent;">
            <v-btn @click="toggleTab(1)" :class="{ 'custom-btn-active': activeTab === 1 }" style="margin-right: 10px;">{{ $t('訂單資訊') }}</v-btn>
            <v-btn @click="toggleTab(2)" :class="{ 'custom-btn-active': activeTab === 2 }" style="margin-right: 10px;">{{ $t('使用量') }}</v-btn>
          </v-btn-toggle>
          
        </v-col>
      </v-row>
      <v-container>

        <v-window v-model="activeTab">
          <v-window-item :value="1">
            <!-- 第一個表格 -->
            <v-card elevation="3">
              <v-table class="mTable" hover outlined>
                <thead>
                  <tr>
                    <th>{{$t('編號')}}</th>
                    <th>{{$t('訂購日期')}}</th>
                    <th>{{$t('方案')}}</th>
                    <th>{{$t('付款日期')}}</th>
                    <th>{{$t('狀態')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in warehouseeList" :key="index" @click="selectOrderDetail(item)">
                    <td :data-title="$t('編號')">{{ item.merchantNo }}</td>
                    <td :data-title="$t('訂購日期')">{{ formatDateRange(item.tradeDate) }}</td>
                    <td :data-title="$t('方案')">{{ item.customField1 }}</td>
                    <td :data-title="$t('付款日期')">{{item.tradeDate }}</td>
                    <td :data-title="$t('狀態')">{{ item.order_status_des }}</td>
                  </tr>
                </tbody>
                <pagination
                  :colspan="5"
                  :page="page"
                  :totalPage="totalPage"
                  :getListFn="Selectorber"
                  v-model:search="search"
                ></pagination>
              </v-table>
            </v-card>
          </v-window-item>

          <v-window-item :value="2">
            <!-- 第二個表格  -->
            <v-card elevation="3">
              <v-table class="mTable" hover outlined>
                <thead>
                  <tr>
                    <th>{{$t('編號')}}</th>
                    <th>{{$t('訂購日期')}}</th>
                    <th>{{$t('方案')}}</th>
                    <th>{{$t('付款日期')}}</th>
                    <th>{{$t('使用次數')}}</th>
                    <th>{{$t('剩餘次數')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in warehouseeList" :key="index" @click="selectOrderDetail(item)">
                    <td :data-title="$t('編號')">{{ item.merchantNo }}</td>
                    <td :data-title="$t('訂購日期')">{{ formatDateRange(item.tradeDate) }}</td>
                    <td :data-title="$t('方案')">{{ item.customField1 }}</td>
                    <td :data-title="$t('付款日期')">{{ item.tradeDate }}</td>
                    <td :data-title="$t('使用次數')">
                      {{ item.usage_time === '-1' ? $t('不限次數') : item.usage_time }}
                    </td>
                    <td :data-title="$t('剩餘次數')">
                      {{ item.usage_time === '-1' ? $t('不限次數') : item.left_usage_time }}
                    </td>
                  </tr>
                </tbody>
                <pagination
                  :colspan="6"
                  :page="page"
                  :totalPage="totalPage"
                  :getListFn="Selectorber"
                  v-model="search"
                ></pagination>
              </v-table>
            </v-card>
            <!-- 第二個表格結束 -->
          </v-window-item>
        </v-window>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import pagination from '~/components/pagination.vue';
import { ref } from 'vue';
import { usePageShowStore } from '@/stores/pageShow';
const pageShowStore = usePageShowStore();
import moment from 'moment';
const activeTab = ref(1);
const toggleTab = (tab) => {

  if (activeTab.value !== tab) {
    activeTab.value = tab;
  }
};


</script>

<script>
export default {
  name: "workCenterList",
  data() {
    return {
      warehouseeList: [],
      orderDetailsList: [],
      page: 1,
      totalPage: 1,
      selectOrderDetail: null,
      memberId: null,
      token: "",
      search: {
        option: 0,
        value: ""
      },
    };
  },
  methods: {
    Selectorber(page) {
      const token = sessionStorage.getItem("Token");
      sendGet('/WeatherForecast/Selectorber', {}, { 
        member_id: this.memberId,
        pageIndex: page,
        pageSize: 10,
        option: this.search.option,
        value: this.search.value == null ? null : this.search.value
      }, (res) => {
        this.warehouseeList = res.data.warehouseeList; 
        this.totalPage = res.data.totalPage;
        this.page = page;
        console.log('Warehouse List:', this.warehouseeList);
      }, (err) => {
        console.log(err);
      });
    },

    selectOrderDetail(orderDetail) {
      // Handle the logic for selecting order details
    },
 
    formatDateRange(tradeDate) {
      const dueDate = this.calculateDueDate(tradeDate);
      return `${tradeDate} ~ ${dueDate}`;
    },

    calculateDueDate(dateString) {
      const momentDate = moment(dateString, 'YYYY/M/D A hh:mm:ss');
      const dueDate = momentDate.add(30, 'days');
      return dueDate.format('YYYY-MM-DD');
    },
  },

  mounted() {
    this.Selectorber(1);
  },
};
</script>

<style scoped>
.member-area {
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.mb-4 {
  margin-bottom: 4px;
  border: 1px solid #ddd;
}

.mTable {
  width: 100%;
  margin-top: 20px;
}

.v-table {
  /* background-color: #f0f0f0; */
  background-color: #f8f8f8;
}

.v-table th, .v-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.v-card {
  background-color: #fff;
  border: 1px solid #ddd;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.v-window {
  margin-top: 20px;
}

.custom-card {

  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}



.custom-btn-active {
  background-color: rgb(0, 121, 255); 
  color: #ffffff;
  font-weight: bold; 
}


</style>
