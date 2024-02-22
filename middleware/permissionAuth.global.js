
import {usePageShowStore} from '@/stores/pageShow'


export default defineNuxtRouteMiddleware(async(to, form) => {


    if (to.path === '/home')
    return;
    if (to.path == '/' ||to.path == ''  )
    return navigateTo('/home')
    
})   
