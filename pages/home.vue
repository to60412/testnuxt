<template> 
    <div class="member-area">
    <v-container >
        <h1 class="h1">
          <div style="text-align: center;">
            <v-img style="display: flex; margin: 0 auto;" width="200" src="/aa-logo.png"></v-img>
            <v-row>
              <v-col cols="4" md="4" offset="4">
                <hr class="gradient-line">
              </v-col>
            </v-row>
            <span class="slogan">{{ $t('homeSlogan') }}</span>
          </div>
        </h1>
        <br/>
    
        <!-- 公告欄 -->
        <v-row>
            <v-col cols="12">
              <v-card class="announcement-card">
                <v-card-title class="text-h5">
                  {{ $t('公告欄') }}
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li>
                        <div class="announcement-item">
                            <span class="category">系統</span>
                            <span class="content">日常維護</span>
                            <span class="date">2024/1/12</span>
                        </div>
                    </li>
                    <li>
                        <div class="announcement-item">
                            <span class="category">活動</span>
                            <span class="content">SPC EXCEL 講座</span>
                            <span class="date">2024/1/12</span>
                        </div>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
        </v-row>
    </v-container>
    <br/>
</div>
</template>

<script> 
import { usePathStore } from '@/stores/path'
const pathStore = usePathStore()

var originTab = [] 
export default {
    
    data: ()=> ({
        grid: []
    }),
    beforeRouteEnter(to, from, next) {

        next();
    },
    methods: {
        setPath(it){ 
            const items = pathStore.items
            items[1] = {
                title: this.$t(it.text),
                disabled: false,
                to: it.to,
            }

            pathStore.setData(items)
            this.$router.push(it.to)
        },  
        getImgUrl(pet) {
            
            return require(pet)
        }
    },created(){
        originTab = [
            [ 
                {
                    id: 1,
                    img: 'runcardInfo.png',
                    text: 'runcardInfo',
                    to: '/runcardInfo',
                    color: '#005BA1'
                },
                {
                    id: 5,
                    img: 'invList.png',
                    text: 'invList',
                    to: '/InvList',
                    color: '#575F65'
                },
                {
                    id: 8,
                    img: 'partList.png',
                    text: 'partMangt',
                    to: '/partList',
                    color: '#005BA1'
                },
                {
                    id: 12,
                    img: 'routingMangt.png',
                    text: 'routingMangt',
                    to: '/routingMangt',
                    color: '#575F65'
                }
            ],
            [ 
                {
                    id: 16,
                    img: 'machineList.png',
                    text: 'machineMangt',
                    to: '/machine/machineList',
                    color: '#575F65'
                },
                {
                    id: 19,
                    img: 'history.png',
                    text: '報表記錄',
                    to: '/logs/erpRuntask',
                    color: '#005BA1'
                },
                {
                    id: 20,
                    img: 'userList.png',
                    text: 'userMangt',
                    to: '/user/userList',
                    color: '#575F65'
                },
                {
                    id: 21,
                    img: 'department.png',
                    text: 'departMangt',
                    to: '/department',
                    color: '#005BA1'
                }
            ]
        ]
        

        sendGet('/Permission/GetPagePermission', {}, {}, (res)=> {
            originTab.forEach(it => {
                const data = []
                it.forEach( i => {
                    if(res.data.includes(i.id)){
                        data.push(i)
                    }
                })
                this.grid.push(data)
            })

        }, (err) => {
            console.log(err)
        })
    }
}



</script>

 
<style>
    .gradient-line {
        border: none; 
        height: 5px; 
        background: linear-gradient(to right, transparent, #FF0000, transparent); 
        opacity: 1;
    }
    
    .h1 {
        font-size: 2rem; 
        font-weight: bold;
    }
    
    .slogan {
        font-size: 1.25rem;
        color: #555;
    }
    
    .announcement-card {
        border: 1px solid #ddd;
        border-radius: 8px; 
        background-color: #f8f8f8; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px; 
    }
    
    .text-h5 {
        font-size: 1.5rem; 
        font-weight: bold; 
        color: #333;
    }
    
    .announcement-item {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    
    .category, .content, .date {
        flex: 1;
        padding: 5px;
    }
    
    .category {
        color: #005BA1;
    }
    
    .content {
        color: #333;
    }
    
    .date {
        color: #888;
    }

    .member-area {
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
}
    </style>