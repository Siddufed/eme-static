<template>
<div class="warpper">
    <sidebar></sidebar>
    
    <div class="main-panel">
        
            <Topbar></Topbar>
             <div class="mini-wrapper">
             <router-view/>
            </div>
      
    </div>
     <section class="ict-logo-footer">
        <img src="../assets/img/ict-logo.svg" alt="">
    </section>
  <div class="chat-icon">
      <img src="../assets/img/chat.svg" alt="" width="75" height="75">
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
.chat-icon{
   position: fixed;
    bottom: 100px;
    /* width: 100px; */
    bottom: 19px;
    right: 25px;
}
</style>
