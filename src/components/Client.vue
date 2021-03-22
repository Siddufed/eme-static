<template>
<div class="">
   <div class="d-flex align-items-center">
       <div class="circle" @click="goback">
           <span class="el-icon-back text-danger"></span>
       </div>
        <h5 class="text-left text-blue m-0">Client Dashboard</h5>
        
    </div>
    <div class="mt-4"></div>
     <div class="dashboard-cards">
        <div class="row">
            <div class="col-md-4 pr-1 pl-1">
                
                   <div class="card-gradient">
                         <img src="../assets/img/card-top.svg" alt="" class="top">
                        <!-- card gradient  -->
                       <div class="card mb-4 custom-cards-forusers" style="background-color:#F794A4">
                           <div class="d-flex align-items-center">
                           <div class="col-6">
                                <img src="../assets/img/question.svg" alt="" height="150">
                           </div>
                           <div class="col-6 pr-4">
                               <div class="text-right">
                                   <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">2,554</p>
                                   <p class="text-white text-uppercase">Total Enquiry</p>
                               </div>
                               
                           </div>
                           </div>
                       </div>
             
                   </div>
                
            </div>
            <div class="col-md-4 pr-1 pl-1">
                
                   <div class="card-gradient">
                         <img src="../assets/img/card-top.svg" alt="" class="top">
                        <!-- card gradient  -->
                       <div class="card mb-4 custom-cards-forusers" style="background-color:#F7CE68">
                           <div class="d-flex align-items-center">
                           <div class="col-6">
                                <img src="../assets/img/inprogress.svg" alt="" height="150">
                           </div>
                           <div class="col-6 pr-4">
                               <div class="text-right">
                                   <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">24</p>
                                   <p class="text-white text-uppercase">in progress</p>
                               </div>
                               
                           </div>
                           </div>
                       </div>
             
                   </div>
                
            </div>
            <div class="col-md-4 pr-1 pl-1">
               
                   <div class="card-gradient">
                         <img src="../assets/img/card-top.svg" alt="" class="top">
                        <!-- card gradient  -->
                       <div class="card mb-4 custom-cards-forusers" style="background-color:#9795F0">
                           <div class="d-flex align-items-center">
                           <div class="col-6">
                                <img src="../assets/img/quotation.svg" alt="" height="150">
                           </div>
                           <div class="col-6 pr-4">
                               <div class="text-right">
                                   <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">1,211</p>
                                   <p class="text-white text-uppercase">Total Quotation</p>
                               </div>
                               
                           </div>
                           </div>
                       </div>
             
                   </div>
                
            </div>
             <div class="col-md-4 pr-1 pl-1">
                
                   <div class="card-gradient">
                         <img src="../assets/img/card-top.svg" alt="" class="top">
                        <!-- card gradient  -->
                       <div class="card mb-4 custom-cards-forusers" style="background-color:#00B8BA">
                           <div class="d-flex align-items-center" >
                           <div class="col-6">
                                <img src="../assets/img/report.svg" alt="" height="150">
                           </div>
                           <div class="col-6 pr-4">
                               <div class="text-right">
                                   <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;"></p>
                                   <p class="text-white text-uppercase">Reports</p>
                               </div>
                               
                           </div>
                           </div>
                       </div>
             
                   </div>
                
            </div>
            <div class="col-md-4 pr-1 pl-1">
                
                   <div class="card-gradient">
                         <img src="../assets/img/card-top.svg" alt="" class="top">
                        <!-- card gradient  -->
                       <div class="card mb-4 custom-cards-forusers" style="background-color:#36D1DC">
                           <div class="d-flex align-items-center" >
                           <div class="col-6">
                                <img src="../assets/img/payment.svg" alt="" height="150">
                           </div>
                           <div class="col-6 pr-4">
                               <div class="text-right">
                                   <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">$ 1,24,346</p>
                                   <p class="text-white text-uppercase">Payments Recived</p>
                               </div>
                               
                           </div>
                           </div>
                       </div>
             
                   </div>
                
            </div>
            <div class="col-md-4 pr-1 pl-1">
               
                   <div class="card-gradient">
                         <img src="../assets/img/card-top.svg" alt="" class="top">
                        <!-- card gradient  -->
                       <div class="card mb-4 custom-cards-forusers" style="background-color:#6858EA">
                           <div class="d-flex align-items-center">
                           <div class="col-6">
                                <img src="../assets/img/calendar.svg" alt="" height="150">
                           </div>
                           <div class="col-6 pr-4">
                               <div class="text-right">
                                   <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">244</p>
                                   <p class="text-white text-uppercase">Calendar</p>
                               </div>
                               
                           </div>
                           </div>
                       </div>
             
                   </div>
              
            </div>
             
           
            
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'client',
    data() {
        return {

        }
    },
    methods:{
        goback(){
             this.$router.push({ path: '/' })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

</style>
