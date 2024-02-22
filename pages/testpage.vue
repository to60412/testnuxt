<template>
    showNewPartshowEdit
    <div class="text-center" v-if="!pageShowStore.showData">
        <v-progress-linear color="primary" indeterminate :height="5"></v-progress-linear>
    </div>
    <div v-if="pageShowStore.showData">
        <h1>{{ $t('testpage') }}</h1>
        <v-theme-provider theme="light">
            <v-row no-gutters>
                <v-col v-if="pageShowStore.hasAct" cols="12" md="4" align-self="center">
                    <div class="d-flex  flex-column flex-sm-row mb-5 justify-start" style="gap: 1rem">
                        <v-btn color="green-lighten-1" @click="showNewPart">{{ $t('new') }}</v-btn>

                    </div>
                </v-col>
                <v-col></v-col>

                <!-- <v-col cols="12" md="2" align-self="center">
                    <v-select class="mb-5 mr-2" :label="$t('field')" :items="fields" v-model="search.option"
                        item-title="name" item-value="option" variant="solo" density="compact"></v-select>
    
                </v-col> -->

                <!-- V-model 改成輸入的變數/////////////////////////////////////////////////////////////////////// -->
                <v-col cols="12" md="2" align-self="center">
                    <v-text-field class="mb-5 mr-2" :label="$t('searchText')" v-model="search.value" variant="solo"
                        density="compact" @keydown.enter="getProcessList()"></v-text-field>
                </v-col>

            </v-row>
        </v-theme-provider>
        <!-- table -->

        <!-- /////////////////////////////////////////////////////////////////////////////////////////// -->
        <v-card elevation="3">
            <v-table class="mTable" hover>
                <thead>
                    <tr>
                        <th>{{ $t('au_id') }}</th>
                        <th>{{ $t('au_lname') }}</th>
                        <th>{{ $t('au_fname') }}</th>
                        <th>{{ $t('phone') }}</th>
                        <th>{{ $t('address') }}</th>
                        <th>{{ $t('city') }}</th>
                        <th>{{ $t('state') }}</th>
                        <th>{{ $t('zip') }}</th>
                        <th>{{ $t('contract') }}</th>
                        <th>{{ $t('Delete') }}</th>
                        <th>{{ $t('Edit') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="operation in processList" :key="operation">

                        <td :data-title="$t('P')">{{ operation.au_id }}</td>
                        <td :data-title="$t('e')">{{ operation.au_lname }}</td>
                        <td :data-title="$t('t')">{{ operation.au_fname }}</td>
                        <td :data-title="$t('e')">{{ operation.phone }}</td>
                        <td :data-title="$t('r')">{{ operation.address }}</td>
                        <td :data-title="$t('是')">{{ operation.city }}</td>
                        <td :data-title="$t('狗')">{{ operation.state }}</td>
                        <td :data-title="$t('汪')">{{ operation.zip }}</td>
                        <td :data-title="$t('汪')">{{ operation.contract }}</td>
                        <td><v-btn color="red" @click="deleteOperation(operation)">刪除</v-btn></td>
                        <td><v-btn color="red" @click="showEdit(operation)">修改</v-btn></td>
                    </tr>

                    <!-- /////////////////////////////////////////////////////////////////////////////////////////// -->
                </tbody>

            </v-table>
        </v-card>




        <!-- 分頁方法可以寫在這，然後接收我API結果做分頁 -->
        <br>
        <div class="text-center">
            <v-pagination v-model="page" :length="totalPage" :total-visible="6"
                @update:model-value="getOperationList"></v-pagination>
        </div>
    </div>

    <!-- ///////////////////////////////////////////////////// -->



    <v-dialog v-model="isNewShow" max-width="600px">
        <v-form ref="form">
            <v-card>
                <v-card-title>{{ $t('newAuthor') }}</v-card-title>
                <v-card-text>
                    <v-text-field v-model="newAuthorInfo.au_id" label="Author ID* " required :rules="A"  oninput="value=value.replace(/[^0-9]/g, '')"></v-text-field>
                    <v-text-field v-model="newAuthorInfo.au_lname" label="Last Name*"  @input="handleInput" ></v-text-field>
                    <v-text-field v-model="newAuthorInfo.au_fname" label="First Name*" :rules="A" oninput = "value=value.replace(/[^\d]/g,'')" ></v-text-field>
                    <v-text-field v-model="newAuthorInfo.phone" label="Phone*" oninput = "value=value.replace( /[^a-zA-Z]/g, '')"></v-text-field>
                    <v-text-field v-model="newAuthorInfo.address" label="Address"></v-text-field>
                    <v-text-field v-model="newAuthorInfo.city" label="City"></v-text-field>
                    <v-text-field v-model="newAuthorInfo.state" label="State"></v-text-field>
                    <v-text-field v-model="newAuthorInfo.zip" label="ZIP"></v-text-field>
                    <v-text-field v-model="newAuthorInfo.contract" label="Contract*"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="saveAuthor()">{{ $t('save') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>






    <v-dialog v-model="isEditShow" max-width="600px">
        <v-card>
            <v-card-title>{{ $t('editAuthor') }}</v-card-title>
            <v-card-text>
                <v-text-field v-model="selectPartInfo.au_id" label="Author ID"></v-text-field>
                <v-text-field v-model="selectPartInfo.au_lname" label="Last Name"></v-text-field>
                <v-text-field v-model="selectPartInfo.au_fname" label="First Name"></v-text-field>
                <v-text-field v-model="selectPartInfo.phone" label="Phone"></v-text-field>
                <v-text-field v-model="selectPartInfo.address" label="Address"></v-text-field>
                <v-text-field v-model="selectPartInfo.city" label="City"></v-text-field>
                <v-text-field v-model="selectPartInfo.state" label="State"></v-text-field>
                <v-text-field v-model="selectPartInfo.zip" label="ZIP"></v-text-field>
                <v-checkbox v-model="selectPartInfo.contract" label="Contract"></v-checkbox>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="UpdateAuthor()">{{ $t('save') }}</v-btn>

            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
    
<script setup>
import { usePageShowStore } from '@/stores/pageShow';
// import { ref } from 'vue';

const pageShowStore = usePageShowStore();


const A = [
    (v) => !!v || '必填',
    (v) => (v && v.length <= 2) || '只能<=2',
    //   (v) => (v && /^[a-z]+$/.test(v)) || '只能小寫字母',
    //   (v) => (v && /^[A-Z]+$/.test(v)) || '只能大寫字母',
    //   (v) => (v && /^[a-zA-Z]+$/.test(v)) || '只能包含大小寫字母',
    //   (v) => (v && /^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/.test(v)) || '需大小寫字母和特殊字符',
    //   (v) => (v && /^\d+$/.test(v)) || '只能包含数字',
];




</script>
    
<script>
export default {
    name: "OperationList",
    data: () => ({
        fields: [],
        search: {
            option: 0,
            value: "",
            check: ''
        },

        
        operationList: [],
        totalPage: 1,
        page: 1,
        newTitle: '',
        selectOperation: null,

        newAuthorInfo: {
            au_id: '',
            au_lname: '',
            au_fname: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            contract: false,
        },

        selectPartInfo: {},
        selectPart: {},

        // dialog
        isMsgShow: false,
        isQuestionShow: false,
        qTitle: '',
        qMessage: '',
        text: 'test string hello world',
        isNewShow: false,
        isEditShow: false,
        isDescShow: false,
        // selectPart: null,

        newPartInfo: {},
        //
        processList: [],
        newOperationInfo: {},
        operationDesc: '',
        addType: 0, // 0 -> add， 1 -> edit

        auLnameFromProcessList: '',
        isValid: true,


        isNewShow: false,
        //規則
        A: [
            (v) => !!v || '必填',
            (v) => (v && v.length <= 2) || '只能<=2',

        ],


    }),
    computed: {
    },
    methods: {


        handleInput() {
      if (this.newAuthorInfo.au_fname.length > 10) {
        this.newAuthorInfo.au_fname = this.newAuthorInfo.au_fname.slice(0, 10);
      }
    },
        // showEdit() {
        //     Object.keys(this.selectPart).forEach((key) => {
        //         this.newPartInfo[key].value = null
        //     })
        //     this.isNewShow = true
        //     this.addType = 0
        // },


        
        showEdit(operation) {
            this.selectPartInfo = operation


            this.isEditShow = true;
            this.addType = 1;
        },





        UpdateAuthor() {
            sendPut('WeatherForecast/Update', this.selectPartInfo, {}, (res) => {

                alert('成功');

                this.getOperationList(1);
                this.getProcessList();
            }, (err) => {

                console.log(err);

            });
        },



        showNewPart() {
            Object.keys(this.newPartInfo).forEach((key) => {
                this.newPartInfo[key].value = null
            })
            this.isNewShow = true
            this.addType = 0
        },


        async saveAuthor() {

            const isValid = await this.$refs.form.validate();
            console.log('Validation Result:', isValid);
            

            if (isValid) {
                this.insertNewAuthor();
                console.log('Validation Errors:', this.$refs.form.errors);
            } else {

                alert('請檢查');
            }
        },
        insertNewAuthor() {
            sendPost('WeatherForecast/Insert', this.newAuthorInfo, {}, () => {
                this.getOperationList(1);
                this.getProcessList();
                alert('成功');
            }, (err) => {
                console.error(err);
            });
        },



        getOperationList(page) {
            sendPost('Routing/GetProcessOpList', {
                pageIndex: page,
                pageSize: 10,
                option: this.search.option,
                value: this.search.value
            }, {}, (res) => {

                this.operationList = res.data.operationList.map(item => ({
                    au_id: item.au_id,
                    au_lname: item.au_lname,
                    au_fname: item.au_fname,
                    phone: item.phone,
                    address: item.address,
                    city: item.city,
                    state: item.state,
                    zip: item.zip,
                    contract: item.contract,

                }));
                this.totalPage = res.data.totalPage;
                this.page = page;
            }, (err) => {
                console.log(err);
            });
        },

        ////////////////////////////////////////////////////////////////////////////
        getProcessList() {

            sendGet('WeatherForecast/Select', {}, { au_lname: this.search.value }, (res) => {
                this.processList = res.data
                this.auLnameFromProcessList = this.search.value;

                console.log('auLnameFromProcessList:', this.auLnameFromProcessList);
                console.log(res)
            }, (err) => {
                console.log(err)
            })

        },


        /////////////////////////////////////////////////////////////////////////////////


        deleteOperation(operation) {
            console.log('auLnameFromProcessList:', this.auLnameFromProcessList);
            console.log(operation)
            const au_lname = this.auLnameFromProcessList;

            if (au_lname) {
                const requestData = { au_lname: au_lname };
                sendDelete('WeatherForecast/Delete', {}, requestData, (res) => {
                    alert(this.$t('deleteSuccess'));
                    this.isQuestionShow = false;
                    this.getOperationList(1);
                    this.getProcessList();
                    console.log(res);
                }, (err) => {
                    console.log(err);
                });
            } else {
                this.text = '請選擇要刪除的作業';
                this.isMsgShow = true;
            }
        }

    },
    /////////////////////////////////////////////////////


    selectTr(operation) {
        if (operation != this.selectOperation)
            this.selectOperation = operation
        else
            this.selectOperation = null
    },
    // showNewOperation() {
    //     Object.keys(this.newOperationInfo).forEach((key) => {
    //         this.newOperationInfo[key].value = null
    //     })
    //     this.isNewShow = true
    //     this.addType = 0
    // },
    // showIsDelete() {
    //     if (this.selectOperation != null) {
    //         this.qTitle = '注意'
    //         this.qMessage = '你確定要刪除選擇作業嗎?'
    //         this.isQuestionShow = true
    //     } else {
    //         this.text = '請選擇要刪除的作業'
    //         this.isMsgShow = true
    //     }
    // },
    // showEditOperation() {
    //     if (this.selectOperation != null) {
    //         this.newOperationInfo.op_no.value = this.selectOperation.op_no
    //         this.newOperationInfo.op_name.value = this.selectOperation.op_name
    //         let processItem = this.processList.find(x=> x.process_id == this.selectOperation.process_id)
    //         this.newOperationInfo.process_id.value = processItem
    //         this.newOperationInfo.process_name.value = this.selectOperation.process_name
    //         this.newOperationInfo.op_desc.value = this.selectOperation.desc
    //         this.addType = 1
    //         this.isNewShow = true
    //         console.log(this.newOperationInfo);
    //     } else {
    //         this.text = '請選擇要修改的作業'
    //         this.isMsgShow = true
    //     }
    // },

    // newOrEditOperation是左邊列表
    newOrEditOperation() {
        console.log('aa');
        if (this.newOperationInfo.op_no.value == null || this.newOperationInfo.op_no.value == '') {
            this.text = '作業編號不能為空'
            this.isMsgShow = true
        } else if (this.newOperationInfo.op_name.value == null || this.newOperationInfo.op_name.value == '') {
            this.text = '作業名稱不能為空'
            this.isMsgShow = true
        } else {
            var path = '/db/process/sp_web_process_op_act'
            var data = {
                type: this.addType,
                op_id: this.addType == 1 ? Number(this.selectOperation.op_id) : null,
                op_no: this.newOperationInfo.op_no.value,
                op_name: this.newOperationInfo.op_name.value,
                op_desc: this.newOperationInfo.op_desc.value,
                user_id: null,
                process_id: this.newOperationInfo.process_id.value.process_id,
            }
            sendPost(path, data, {}, (_) => {
                alert(`${this.newTitle}成功`)
                this.isNewShow = false
                this.getOperationList(1)
            }, (err) => {
                console.log(err)
            })
        }
    },


    created() {
        this.getProcessList();
        this.getOperationList(1);
        this.fields = [
            { name: this.$t('au_id'), option: 0 },
            { name: this.$t('au_lname'), option: 1 },
            { name: this.$t('au_fname'), option: 2 },
            { name: this.$t('phone'), option: 3 },
            { name: this.$t('address'), option: 4 },
            { name: this.$t('city'), option: 5 },
            { name: this.$t('state'), option: 6 },
            { name: this.$t('zip'), option: 7 },
            { name: this.$t('contract'), option: 8 },
        ];

        // this.newPartInfo = { // 0 input ， 1 select, 2 textarea
        //     part_no: { title: this.$t('au_id'), type: 0, value: null },
        //     part_name: { title: this.$t('au_lname'), type: 0, value: null },
        //     part_name: { title: this.$t('au_fname'), type: 0, value: null },
        //     part_name: { title: this.$t('phone'), type: 0, value: null },
        //     part_name: { title: this.$t('address'), type: 0, value: null },
        //     part_name: { title: this.$t('city'), type: 0, value: null },
        //     part_name: { title: this.$t('state'), type: 0, value: null },
        //     part_name: { title: this.$t('zip'), type: 0, value: null },
        //     part_name: { title: this.$t('contract'), type: 0, value: null },
        //     part_type: { title: this.$t('partType'), type: 1, value: null },

        // }
        // this.selectPartInfo = { // 0 input ， 1 select, 2 textarea
        //     part_no: null ,
        //     part_lname: null ,
        //     part_fname: null ,
        //     part_phone: null ,
        //     part_address: null ,
        //     part_city: null ,
        //     part_state: null ,
        //     part_zip: null ,
        //     part_contract: null ,
        // }



    },
    watch: {
        addType(newType) {
            this.newTitle = newType == 0 ? this.$t('newOperation') : this.$t('editOperation')
        }
    }
}
</script>