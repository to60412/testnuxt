<template>

      <!-- 手刻畫面，因為要改字串顏色/排版以及因為後續提出修改畫面所以新增此手刻
        ，但button功能使用div class="member-area" 那段隱藏的buttom -->
  <div class="test">
    <v-row v-if="!showDialog" id="plan">
      <table >
<thead>
  <tr >
    <th style="border: none;"></th>
    <th style="text-align: center; border: none;">FREE方案</th>
    <th style="text-align: center; border: none;">VIP方案</th>
    <th style="text-align: center; border: none;">VVIP方案</th>
  </tr>
  <tr>
    <th style="border: none;"></th>
    <th style="text-align: center; border: none;"><button class="button" @click="freePlanButtonClick">申請</button></th>
    <th style="text-align: center; border: none;"><button class="button" @click="planButtonClick(plans[1])">{{ plans[1].buttonText }}</button></th>
    <th style="text-align: center; border: none;"><button class="button" @click="planButtonClick(plans[2])">{{ plans[2].buttonText }}</button></th>
  </tr>
  
  
</thead>
<tbody>
  <tr>
    <th class="name-cell" style="border: none;"></th>
    <td style="text-align: center; border: none;">免費</td>
    <td style="text-align: center; border: none;">999元/月</td>
    <td style="text-align: center; border: none;">1499元/月</td>
  </tr>

        
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">每月計算次數</td>
            <td>50</td>
            <td>無限制</td>
            <td>無限制</td>
          </tr>
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">每次最大製圖量</td>
            <td>5</td>
            <td>30</td>
            <td>30</td>
          </tr>
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">計量管制圖</td>
            <td>IX-MR</td>
            <td>IX-MR, <span style="color: red;">X-R, X-S</span></td>
            <td>IX-MR, <span style="color: red;">X-R, X-S</span></td>
          </tr>
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">計數管制圖</td>
            <td><span>nP</span></td>
            <td>nP</td>
            <td>nP,<span style="color: red;"> P, C</span></td>
          </tr>
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">調整標準差</td>
            <td><span class="fa fa-times" :style="{ color: 'red' }"></span></td>
            <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
            <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">可用指標</td>
            <td>Ca, Cp, Cpk</td>
            <td>Ca, Cp, Cpk, <span style="color: red;">Pp, Ppk, Ppm</span></td>
            <td>Ca, Cp, Cpk, <span style="color: red;">Pp, Ppk, Ppm</span></td>
          </tr>


          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell" @click="toggleRowVisibility" style="cursor: pointer;">管制規則</td>
            <td @click="toggleRowVisibility" style="cursor: pointer;"></td>
            <td @click="toggleRowVisibility" style="cursor: pointer;">詳細規則▼</td>
            <td @click="toggleRowVisibility" style="cursor: pointer;"></td>
        </tr>
        



          <tr v-if="!isRowHidden" class="QQ">
            <td style="font-size: 14px;">超過3倍標準差</td>
            <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
            <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
            <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>

                 <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續3點中有2點落在同側的A區</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                   <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續5點有4點落在同側B區</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                   <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續7個點以上落在CL同側</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                   <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續7個點上升</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                   <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續7個點下降</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                   <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續8個點落在CL兩側無一點再C區</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                   <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續5相鄰點上下交替變化</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                   <tr v-if="!isRowHidden" class="QQ">
                    <td style="font-size: 14px;" >連續7個點落在CL上下的C區中</td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
                  <tr  v-if="!isRowHidden" style="border-bottom: 1px solid black; " class="QQ">
                     <td style="font-size: 14px;" >規則管理</td>
                    <td></td>
                    <td></td>
                       <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
                  </tr>
             
            


        
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">管制規則管理</td>
            <td><span class="fa fa-times" :style="{ color: 'red' }"></span></td>
            <td><span class="fa fa-times" :style="{ color: 'red' }"></span></td>
            <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr style="border-bottom: 1px solid black;">
            <td class="name-cell">雲端資料庫</td>
            <td><span class="fa fa-times" :style="{ color: 'red' }"></span></td>
            <td><span class="fa fa-times" :style="{ color: 'red' }"></span></td>
            <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
        </tbody>
      </table>
      



    </v-row> 
  </div>


   <!--此區塊始終隱藏，此為修改前模板，但如須改button規則則需要改此區塊，包含轉跳後的規格也為此 須改plans:[19]為價格-->
  <div class="member-area">
    <!-- 選擇方案的卡片 -->
    <div v-if="false">
    <v-row v-if="!showDialog" id="plan">
      <v-col v-for="plan in plans" :key="plan.title" cols="12" md="4">
        <v-card v-if="!plan.selected" class="plan">
          <v-card-title>
            <h2 class="plan-title">{{ plan.title }}</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <table class="custom-table larger-table">
                  <tbody>
                    <tr v-for="(item, i) in plan.items" :key="i">
                      <td v-if="i !== 10">
                        <span v-if="i === 9" style="display: none;">{{ item }}</span>
                        <span v-else>
                          <i v-if="item === 'X'" class="fa fa-times"></i>
                          <i v-else-if="item === 'V'" class="fa fa-check"></i>
                          <span v-else>{{ item.split('    ')[0] }}</span>

                        </span>
                      </td>
                      <td v-if="i !== 10">
                        <span v-if="i === 4 || i === 7 || i === 8">
                          <i v-if="item.includes('X')" class="fa fa-times" :style="{ color: 'red' }"></i>
                          
                          <i v-else-if="item.includes('V')" class="fa fa-check" :style="{ color: 'green' }"></i>
                          <span v-else>{{ item }}</span>
                        </span>
                        <span v-else>{{ item.split('    ')[1] }}</span>
                      </td>
                      
                    </tr>
                    
                  </tbody>
                  
                </table>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="v-btn-center">
            <!-- 將 'FREE方案' 按鈕綁定到新的方法 -->
            <v-btn v-if="plan.title === 'FREE方案'" @click="freePlanButtonClick" color="primary" class="custom-btn">{{ plan.buttonText }}</v-btn>
            <!-- 其他方案按鈕... -->
            <v-btn v-else @click="planButtonClick(plan)" color="primary" class="custom-btn">{{ plan.buttonText }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>



<!-- 修改合在手刻表格中，此先整段隱藏 -->
    <!-- <div v-if="!showDialog">
    <div>
      <table class="custom-table-1">
        <thead>
          <tr>
            <th>規則</th>
            <th>Free</th>
            <th>VIP</th>
            <th>VVIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>超過3倍標準差</td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續3點中有2點落在同側的A區</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續5點有4點落在同側B區</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續7個點以上落在CL同側</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續7個點上升</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續7個點下降</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續8個點落在CL兩側無一點再C區</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續5相鄰點上下交替變化</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>連續7個點落在CL上下的C區中</td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td>規則管理</td>
            <td></td>
            <td></td>
               <td><span class="fa fa-check" :style="{ color: 'green' }"></span></td>
          </tr>
          <tr>
            <td colspan="4" style="text-align: left;">*規則管理：可對規則參數進行調整</td>
          </tr>
      
        </tbody>
      </table>
    </div>
  </div> -->

<!-- 顯示表格和付款信息表單 -->
<v-row v-if="showDialog" class="custom-table-container">
  <v-container>
    <h2 class="text-center mb-4">{{ selectedPlan.title }} - 購買項目確認</h2>
    <br>
 
    <v-row justify="center">
      <v-col>
        <!-- 表格 -->
        <table class="custom-table-dialog">
          <thead>
            <tr>
              <th>項目</th>
              <th>選項</th>
            </tr>
          </thead>

          <tbody>
            <!-- 使用v-for創建表格行 -->
            <tr v-for="(item, i) in selectedPlan.items"
                :key="i"
                v-show="i !== 19 && (i < 7 || i > 16 || showItems8to17)"
                @click="i === 6 ? toggleItems8to17() : null"
                :class="{ 
                  'no-border': (i >= 7 && i <= 16 && !showItems8to17), 
                  'independent-item': (i >= 7 && i <= 15),
                  'special-table-row': (i >= 7 && i <= 16) // 應用於特定行的樣式
                }"
                :style="{ cursor: i === 6 ? 'pointer' : '' }"> 
                <!-- 第一列 -->
                <td v-if="i !== 19" class="text-center">
                    <span v-if="i === 19">{{ item }}</span>
                    <span v-else>
                        <i v-if="item === 'X'" class="fa fa-times"></i>
                        <i v-else-if="item === 'V'" class="fa fa-check"></i>
                        <span v-else>{{ item.split('    ')[0] }}</span>
                    </span>
                </td>
                <!-- 第二列 -->
                <td v-if="i !== 19" class="text-center">
                    <span v-if="i === 4 || i === 7 || (i >= 8 && i <= 17)">
                        <i v-if="item.includes('X')" class="fa fa-times" :style="{ color: 'red' }"></i>
                        <i v-else-if="item.includes('V')" class="fa fa-check" :style="{ color: 'green' }"></i>
                    </span>
                    <span v-else>{{ item.split('    ')[1] }}</span>
                </td>
            </tr>
          </tbody>
        </table>
        <br><br>
        <h2>付款方式</h2>
        <input type="checkbox" id="checkbox1" v-model="acceptedTerms" >
        <label for="checkbox1" style="font-size: 30px;">信用卡付款</label>
        <br>
        <v-btn color="primary" @click="initializeECPaySDK" style="margin-right: 20px;">確認購買</v-btn>
        <v-btn @click="closeDialog">取消</v-btn>
      </v-col>
    </v-row>
  </v-container>
</v-row>

  </div>

</template>




<script>
import 'font-awesome/css/font-awesome.min.css';
import Swal from 'sweetalert2';

  export default {
    data() {

      return {
        isRowHidden: true ,
        showItems8to17: false ,

        features: [
    { name: '', free: '免費', vip: '999元/次', vvip: '1499元/次' },
    { name: '每月計算次數', free: '50', vip: '無限制', vvip: '無限制' },
    { name: '每次最大製圖量', free: '5', vip: '30', vvip: '30' },
    { name: '計量管制圖', free: 'IX-MR', vip: 'IX-MR, X-R, X-S', vvip: 'IX-MR, X-R, X-S' },
    { name: '計數管制圖', free: 'nP', vip: 'nP', vvip: 'nP, P, C' },
    { name: '調整標準差', free: 'X', vip: 'V', vvip: 'V' },
    { 
      name: '可用指標', 
      free: 'Ca, Cp, Cpk', 
      vip: 'Ca, Cp, Cpk,Pp, Ppk, Ppm', 
      vvip: 'Ca, Cp, Cpk, Pp, Ppk, Ppm' 
    },
    { name: '管制規則', free: '僅部分', vip: '所有規則', vvip: '所有規則' },
    { name: '管制規則管理', free: 'X', vip: 'X', vvip: 'V' },
    { name: '雲端資料庫', free: 'X', vip: 'X', vvip: 'V' }
  ],

        rules: [
 
        { rule: '超過3倍標準差', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續3點中有2點落在同側的A區', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續5點有4點落在同側B區', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續7個點以上落在CL同側', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續7個點上升', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續7個點下降', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續8個點落在CL兩側無一點再C區', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續5相鄰點上下交替變化', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '連續7個點落在CL上下的C區中', free: 'O', vip: 'O', vvip: 'O' },
        { rule: '規則管理', free: '', vip: '', vvip: 'O' },
        { rule: '*規則管理：可對規則參數進行調整', free: '', vip: '', vvip: '' },
      ],
      
      headers: [
        { text: '規則', value: 'rule' },
        { text: 'Free', value: 'free' },
        { text: 'VIP', value: 'vip' },
        { text: 'VVIP', value: 'vvip' },
      ],
        plans: [
        { title: 'FREE方案',
         items: [
          '每月計算次數    50',
          '每次最大製圖量    5',
          '計量管制圖     IX-MR',
          '計數管制圖     nP',
          '調整標準差     X',
          '可用指標     Ca,Cp,Cpk',
          '管制規則     僅部分',
          '管制規則管理    X',
          '雲端資料庫     X',
          ], buttonText: '申請', selected: false },

          { title: 'VIP方案', items: [
            '每月計算次數      無限制',
            '每次最大製圖量     30',
            '計量管制圖      IX-MR, X-R, X-S',
            '計數管制圖      nP',
            '調整標準差      V',
            '可用指標      Ca,Cp,Cpk,Pp,Ppk,Ppm',
            '管制規則      詳細規則▼',
            '超過3倍標準差      V',
            '連續3點中有2點落在同側的A區      V',
            '連續5點有4點落在同側B區      V',
            '連續7個點以上落在CL同側      V',
            '連續7個點上升      V',
            '連續7個點下降      V',
            '連續8個點落在CL兩側無一點再C區      V',
            '連續5相鄰點上下交替變化      V',
            '連續7個點落在CL上下的C區中      V',
            '管制規則管理     X',
            '雲端資料庫      X',
            '金額     999/月',
            '999'
              ], buttonText: '申請', selected: false },

          { title: 'VVIP方案', items: [
            '每月計算次數     無限制',
            '每次最大製圖量    30',
            '計量管制圖      IX-MR, X-R, X-S',
            '計數管制圖      nP,P,C,U',
            '調整標準差      V',
            '可用指標      Ca,Cp,Cpk,Pp,Ppk,Ppm',
            '管制規則      詳細規則▼',
            '超過3倍標準差      V',
            '連續3點中有2點落在同側的A區      V',
            '連續5點有4點落在同側B區      V',
            '連續7個點以上落在CL同側      V',
            '連續7個點上升      V',
            '連續7個點下降      V',
            '連續8個點落在CL兩側無一點再C區      V',
            '連續5相鄰點上下交替變化      V',
            '連續7個點落在CL上下的C區中      V',
            '管制規則管理    V',
            '雲端資料庫     V',
            '金額     1499/月',
            '1499 '
              ], buttonText: '申請', selected: false },
        ],
        showDialog: false,
        selectedPlan: {},
        paymentInfo: {
          name: '',
          phone: '',
          cardNumber: '',
          expiryMonth: '',
          expiryDay: '',
          cvv: '',
        },
      };
    },

    methods: {



      initializeECPaySDK() {
        if (!this.acceptedTerms) {
  Swal.fire({
    icon: 'error',
    title: '請選擇付款方式',
    text: '',
    allowOutsideClick: false
  });
  return;
}

        this.generateAndStoreRandomNumber();
        const value = this.selectedPlan.title;
        const value1 = this.selectedPlan.items[19]; /// 價格
        const value2 = sessionStorage.getItem("randomNumber");

        this.InsertPaymentInfoMemberID();

        const url = `https://172.40.12.53:444/AioCheckOut.aspx?2=${encodeURIComponent(value1)}&3=${encodeURIComponent(value2)}&1=${encodeURIComponent(value)}`;
        // const url = `http://localhost:5854/AioCheckOut.aspx?2=${encodeURIComponent(value1)}&3=${encodeURIComponent(value2)}&1=${encodeURIComponent(value)}`;
        window.location.href = url;
      },
    
      planButtonClick(plan) {
        const memberId = sessionStorage.getItem('Token');

        if (memberId) {
          console.log(`memberId：${memberId}`);
        } else {
          this.$router.push('/newLogIn');
          console.log(`没有找到memberId`);
        }

        this.plans.forEach(p => (p.selected = p === plan));

        if (plan.title === 'FREE方案' || plan.title === 'VIP方案' || plan.title === 'VVIP方案') {
          this.showDialog = true;
          this.selectedPlan = plan;
        }
      },

      handleButtonClick(type) {





        
      alert(`You clicked on the button for ${type}`);
    },
  

      //forfreeplan
      freePlanButtonClick() {
  const memberId = sessionStorage.getItem('Token');

  if (memberId) {
    console.log(`memberId：${memberId}`);
    console.log("FREE方案按鈕被點擊");

    this.generateAndStoreRandomNumber();
    this.InsertFreePaymentInfoMemberID();
    this.$router.push('/memberCentre');
  } else {
    this.$router.push('/newLogIn');
    console.log(`没有找到memberId`);
  }
},


      InsertFreePaymentInfoMemberID() {
        const token = sessionStorage.getItem("Token");
        const randomNumber = sessionStorage.getItem("randomNumber");
        const newMerchantNo = 'ECPay' + randomNumber;
        console.log(token);
   
        sendPost(
          "/WeatherForecast/Insert_FreePaymentInfo_MemberID",
          {
            Token: token,
            MerchantNo: newMerchantNo,
          },
          {},
          (res) => {
            console.log(res);

          },
          true
        );
      },

      closeDialog() {
        this.showDialog = false;
        this.plans.forEach(p => (p.selected = false));
        this.$router.push("/planLevel")
      },

      generateAndStoreRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 9999999999);
        sessionStorage.setItem('randomNumber', randomNumber);
        console.log('Random Number:', randomNumber);
      },

      InsertPaymentInfoMemberID() {
        const token = sessionStorage.getItem("Token");
        const randomNumber = sessionStorage.getItem("randomNumber");

        const newMerchantNo = 'ECPay' + randomNumber;
        console.log(token);
      
        sendPost(
          "/WeatherForecast/InsertPaymentInfoMemberID",
          {
            Token: token,
            MerchantNo: newMerchantNo,
          },
          {},
          (res) => {
            console.log(res);
          },
          true
        );

        
      },
      toggleItems8to17() {
      this.showItems8to17 = !this.showItems8to17; 
    },
      toggleRowVisibility() {
      this.isRowHidden = !this.isRowHidden;
    },
    },
  };
</script>

<style>



.hidden {
  display: none;
  border-bottom: none; 
}
  .custom-table-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 180vh; 

  }

  

  .custom-table {
    width: 100%;
    max-width: none;
    border-collapse: collapse;
    margin-top: 20px;
    
  }

  .custom-table th,
  .custom-table td {
    padding: 20px;
    text-align: left;
    border-bottom: 1px solid #ddd; 
  }

  .table-header {
    background-color: #1565c0;
    color: white;
  }

  ul,
  ol {
    list-style-type: none;
  }

  .plan {
    border: 5px dashed #ccc;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .plan-title {
    color: #1565c0;
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 40px;
  }

  .with-space {
    white-space: pre;
    font-size: 20px;
    line-height: 3;
    font-style: italic;
  }

  .v-btn-center {
    display: flex;
    justify-content: center;
  }

  .custom-btn {
    background-color: #1565c0;
    color: #f2f2f2 !important;
    font-weight: bold;
  }

  .no-border {
    border: none !important;

  }

  .border {
    border: 1px solid #ccc;
    padding: 12px;
  }

  .text-left {
    text-align: left;
  }

  .larger-table {
    font-size: 50px;
  }

  .custom-table.larger-table th,
.custom-table.larger-table td {
  font-size: 20px; 
  
}


.custom-table-1 {
    width: 70%;
    max-width: none;
    border-collapse: collapse;
    margin-top: 80px;
    margin:  auto; 
    padding: 20px;
    align-items: center;
    margin-bottom: 50px; 
  }

  .custom-table-2 {
    width: 70%;
    max-width: none;
    border-collapse: collapse;
    margin-top: 80px;
    margin:  auto; 
    padding: 20px;
    align-items: center;
    margin-bottom: 50px; 
    
  }

  .custom-table-1 th,
  .custom-table-1 td {
    padding: 20px;
    text-align: left;
    border: 3px solid #ddd;
    
  }

  .custom-table-1 th {
    background-color: #0b7b4c;
    color: white;
    text-align: center;
    
  }
  .custom-table-1 td {
    text-align: center;
  }

  .separator {
    height: 2px; 
    background-color: #ccc; 
    margin: 50px 0; 
  }

  .member-area {
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100%;

}






#checkbox1 {
  transform: scale(2); 
  margin-right: 10px;
  vertical-align: text-top; 
}



table {
  width: 100%;
  border-collapse: collapse;
}

td{
  border-bottom: none;
  text-align: left;
  padding: 8px;
}




th {
  font-size: 26px;
  border-bottom: none;
  text-align: left;
  padding: 8px;
}

.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
}

.button:hover {
  background-color: #45a049;
}

.name-cell, tr, td {
  padding: 10px 24px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  
  
}


/* .name-cell {

  margin-left: 30px;
} */

.test{ 
  padding: 50px 80px;
  background-color: #f5f5f5;
  
}

.QQ{
  background-color: #e9e1e1;
  
}

/* 8-16顏色 */
.special-table-row{
  background-color: #e9e1e1;
  text-decoration: none; 
}


.custom-table-dialog tbody tr td {
  border-bottom: 1px solid #010101;
  padding: 20px;
  font-size: 20px;
}

.custom-table-dialog tbody tr td.independent-item {
  border-bottom: none !important;
  
}

.custom-table-dialog tbody tr.independent-item td {
  border-bottom: none !important;
  
}


.custom-table-dialog th {
  background-color: #1565c0;
  color: white;
  border-right: none;
  font-size: 16px;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  border-bottom: 1px solid #010101;
}

</style>
