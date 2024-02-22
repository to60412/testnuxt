<template>
    <tfoot>    
        <tr>
            <td :colspan="colspan">
                <v-sheet class="d-flex  align-center">   
                <v-pagination :length="totalPage" :total-visible="6" @update:model-value="getListFn"
                    first-icon="mdi-skip-previous" prev-icon="mdi-menu-left" next-icon="mdi-menu-right" last-icon="mdi-skip-next"
                    density="compact" show-first-last-page="1"  >
                </v-pagination>
                <v-spacer></v-spacer>
                <label >{{ 1 + 10 * (page - 1) }}-{{ page * 10 }} of {{ totalPage * 10 }} items</label>
                </v-sheet>
            </td>
        </tr>
    </tfoot>
</template>
<script>




export default {
    name: "pagination", 
    components: true,
    data() {
        return {
            page: this.page,
            totalPage: this.totalPage
        };
    },
    methods: {  
    },
    props: {
        colspan: {type: Number, default:1, required: true}, 
        page: {type: Number, default:1, required: true}, 
        totalPage: {type: Number, default:1, required: true},
        getListFn: {type: String, default:"", required: true},
    },
}
</script>