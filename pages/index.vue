<template>
    <!-- <h1>{{ $t('home')}}</h1> -->
    <!-- <br> -->
    <!-- <v-row>
        <v-col cols="12" md="4">
            <strong> {{ $t('runcardNo') }}</strong>
            {{ runcardInfo.runcardNo }}
        </v-col>

        <v-col cols="12" md="4">
            <strong> {{ $t('erpNo') }}</strong>
            {{ runcardInfo.erpNo }}
        </v-col>

        <v-col cols="12" md="4">
            <strong> {{ $t('opItem') }}</strong>
            {{ `(${runcardInfo.opNo}) ${runcardInfo.opName}` }}
        </v-col>

    </v-row>

    <br>

    <v-row>
        <v-col cols="12" md="8">

            <v-table>
                <thead>
                    <tr>
                        <th>檢驗序</th>
                        <th>檢驗項</th>
                        <th>檢驗值</th>
                        <th>備註</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in runcardInfo.measure"
                        :key="i"
                    >
                        <td>{{ i.seq }}</td>
                        <td>{{ i.measureName }}</td>
                        <td>{{ i.measureValue }}</td>
                        <td>{{ i.remark }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
        <v-col>
            <v-carousel hide-delimiters>
                <v-carousel-item v-for="i in imageSrc"
                    :key="i"
                    :src="i"
                ></v-carousel-item>

               
            </v-carousel>
            <v-file-input @change="selectFile" label="File input" variant="solo" density="compact" accept="image/png, image/jpeg, image/bmp, image/jfif"></v-file-input>
            <br>
            <v-btn @click="uploadFile">u</v-btn> 
            <v-btn @click="downloadImg">d</v-btn>
        </v-col>
    </v-row> -->



</template>

<script>
import axios from 'axios';

export default {
    
    data: ()=> ({
        imageSrc: [],
        runcardInfo: {},
        selectF: null
    }),
//     methods: {
//         getRuncard(runcardId){
//             sendPost('/GetRuncardMeasure', {
//                 runcard_id: runcardId
//             }, {}, (res)=> {
//                 this.runcardInfo = res.data
//                 this.runcardInfo.images.forEach(str => {
//                     this.getImg(str)
//                 })
//                 this.runcardInfo.measure.sort()

                

//             }, (err)=> {
//                 console.log(err)
//             } )
//         },
//         getImg(fsId){
//             axios({
//                 method: 'get',
//                 baseURL: 'http://172.40.12.45:8080/api/fs/',
//                 url: '/download',
//                 headers: {
//                     'API-KEY': '@@@API-KEY@@@',
                   
//                 },
//                 responseType: "blob",
//                 params: {
//                     fs_id: fsId
//                 },
                
//             }).then(async (response)=>{
//                 blobToData(response.data).then((img)=> {
//                     this.imageSrc.push(img)
//                 });
                
//                 //const base64data = await blobToData(response.data);
                
//             }).catch((err)=>{
//                 console.log(err)
//             })
//         },
//         downloadOriginImg(fsId){
//             axios({
//                 method: 'get',
//                 baseURL: 'http://172.40.12.45:8080/api/fs/',
//                 url: '/download',
//                 headers: {
//                     'API-KEY': '@@@API-KEY@@@',
                   
//                 },
//                 responseType: "blob",
//                 params: {
//                     fs_id: fsId
//                 },
                
//             }).then(async (response)=>{
//                 download(response.data)
                
//             }).catch((err)=>{
//                 console.log(err)
//             })
//         },

//         selectFile(e) {
//             this.selectF = e.target.files || e.dataTransfer.files
//         },  
//         clickBtn() {
//             const arr = [
//             "2966959f-9b96-42d6-9230-6e6377ebcac7"
// ,"540e425d-535d-487e-843d-ba58f3c2b5ab"
// ,"8ddc10ad-ea5e-4ee9-900c-26394411d029"
// ,"17ac1034-1a9e-40b0-8222-ae4f14818a37"
// ,"d94a1bb1-e5b4-4672-96d5-b5d4c3426f37"
// ,"01adb3dc-b473-4045-b01e-dee9c9487ff4"
// ,"0e4344e8-1aab-4be0-9f6b-f3344b3f02a5"
// ,"ede35d4b-bb48-4647-8279-b828b1cfc871"
// ,"63e11c6c-a4a0-4107-9ea2-03b9c22c97f0"
// ,"c54749fc-9eac-47aa-8740-b1800682b607"
// ,"1ff2c22a-f7dd-441e-b323-f6b76ea48a35"
// ,"5ea4f587-d69d-4bc6-af8b-e0e2d1878171"
// ,"0edce750-d888-4f6b-baae-9a02314e8d5c"
// ,"15b70123-998b-49e8-afe2-cdc8190b31b3"
// ,"3b9d3bf6-ffe4-4c29-925e-4162ae07c41c"
// ,"c913591e-1123-4bc4-9a4c-45174386ab52"
// ,"62aaab31-6837-4996-936d-22c483aa0bbb"
// ,"4b238d13-59cd-4b9c-85fc-436f045fa46a"
// ,"e94b7a9a-f7f9-465b-9490-60ef17667100"
// ,"74b91a89-0f22-42c8-ab17-8a291c6bf290"
// ,"756d5194-33ac-4cf2-b211-36dbf5b14bbe"
// ,"48f665a1-be0f-4742-90df-5a827015071f"
// ,"61be2492-2f72-4220-a617-37adb74da8c8"
// ,"6d85e041-f55d-4415-9328-a36dc175d240"
// ,"bd28ac5b-510d-4f3a-aee0-01cd5048f4dc"
// ,"b11e2c33-c4c0-4606-a664-b611f191e60f"
// ,"2244742e-f35a-4be3-96d6-54b92677047a"
// ,"5f43eb81-4f71-4401-a300-729602dae34f"
// ,"ec6ccaf6-2805-4551-b54d-3e49b2e5a4f0"

//             ]

//             arr.forEach(id => {
//                 this.getImg(id)
//             })

//         }, 

//         downloadImg() {
//             this.runcardInfo.images.forEach(str => {
//                     this.downloadOriginImg(str)
//                 })
//         },
//         uploadFile() {
//             console.log(this.selectF)
//             const fileData = new FormData()
//             fileData.append("runcardNo", this.runcardInfo.runcardNo)
//             fileData.append(this.selectF[0].name, this.selectF[0])
//             fileData.append("runcardId", 1)
//             fileData.append("runtaskId", 23370)
//             sendPost('/UploadImage', fileData, {}, (_)=> {
//                 alert('success')
//                 this.getRuncard(1)
//             }, (err)=> {
//                 console.log(err)
//             })
//         }
//     },
//     created() {
//         this.getRuncard(1)
        
//     }
}


const blobToData = (blob) => {
    const image = new Image();
    const canvas = document.createElement('canvas');

    const resize = () => {
        var maxSize = 300
        let { width, height } = image;

        if (width > height) {
        if (width > maxSize) {
            height *= maxSize / width;
            width = maxSize;
        }
        } else if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
        }

        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(image, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg');

        return dataUrl;
    };


    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => {
            image.src = reader.result
            image.onload = () => resolve(resize()) 
        }
        reader.readAsDataURL(blob)
    })
}


const download = (blob) => {
    let da = document.createElement('a')
    da.href = URL.createObjectURL(blob);
    da.setAttribute("download", "1.png");
    da.click();
    URL.revokeObjectURL(da.href);
}

</script>

