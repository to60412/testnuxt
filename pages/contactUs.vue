<template>
    <div>
        <h1 class="h1">
            <div style="text-align: center;">
              <v-img style="display: flex; margin: 0 auto;" width="200" src="/iPASP-logo.png"></v-img>
              <v-row>
                <v-col cols="4" md="4" offset="4">
                  <hr class="gradient-line">
                </v-col>
              </v-row>
              <span class="slogan">{{ $t('homeSlogan') }}</span>
            </div>
          </h1>
          <div class="contact-info">
            <div>
              <p>114台北市內湖路一段356號5樓</p>
              <p>[Google Map]</p>
            </div>
        
            <div>
              <p>5F, No. 356, Sec. 1, Neihu Rd., Neihu Dist., Taipei City 11493, Taiwan (R.O.C.)</p>
            </div>
        
            <div>
              <p>TEL：+886 2 7728 7958</p>
              <p>FAX: +886 2 2627 0667</p>
            </div>
        
            <div>
              <p>e-mail：service@aatactics.com</p>
            </div>
          </div>
        </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
       
      };
    },
    methods: {
 
    },
  };
  </script>
  
  <style scoped>

    div {
      margin-bottom: 10px; 
    }
  
    p {
      margin: 0;
    }

    .contact-info {
  text-align: center;
}

.contact-info > div {
  margin-bottom: 20px;
}
  </style>