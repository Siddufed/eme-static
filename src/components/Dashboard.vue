<template>
<div class="warpper">
    <sidebar></sidebar>
    
    <div class="main-panel">
        
            <Topbar></Topbar>
             <div class="mini-wrapper">
             <router-view/>
            </div>
      
    </div>

</div>
</template>

<script>
import Sidebar from './Sidebar'
import Topbar from './Topbar'
export default {
    name: 'dashboard',
    components:{
        Sidebar: Sidebar,
        Topbar: Topbar
    },
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

</style>
