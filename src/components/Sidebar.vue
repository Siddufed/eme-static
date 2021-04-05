<template>
<div class="sidebar">
    <div class="sidebar-logo">
        <img src="../assets/img/eme-sidebar-logo.png" alt="" width="80">
    </div>
    <div class="side-barlist">
        <div class="list-style-none ">

            <!-- <router-link to="/dashboard" tag="li"  class-active="active" class="mb-4 d-flex align-items-center list-side">
                <div class="sidebaractive"></div>
                    <img src="../assets/img/dashboard.svg" alt="" class="mr-3"/>
                Dashboard
                </router-link>
              
               
                <router-link to="/residential" tag="li"  class-active="active" class="mb-4 d-flex align-items-center list-side">
                 <div class="sidebaractive"></div>
                   <img src="../assets/img/residentail.svg" alt="" class="mr-3"/>
                Residential
                </router-link>
              
             
                <router-link to="/business" tag="li"  class-active="active" class="mb-4 d-flex align-items-center list-side">
                 <div class="sidebaractive"></div>
                    <img src="../assets/img/customer-2.svg" alt="" class="mr-3"/>
                Business Customers
                </router-link>
              
              
                <router-link to="/contractor" tag="li"  class-active="active" class="mb-4 d-flex align-items-center list-side">
                 <div class="sidebaractive"></div>
                    <img src="../assets/img/contractor.svg" alt="" class="mr-3"/>
                Contractor
                </router-link>
               
                
                <router-link to="/permission"   tag="li"  class-active="active" class="mb-4 d-flex align-items-center list-side">
                 <div class="sidebaractive"></div>
                    <img src="../assets/img/folder.svg" alt="" class="mr-3"/>
                Permission
                </router-link> -->

            <!-- client nav bar starts -->

            <router-link to="/client" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/client'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/client'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-enqury.svg" alt="" class="mr-3" style="width: 18px" />
                Enquiry
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/client'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-inprogress.svg" alt="" class="mr-3" />
                In Progress
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/client'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-qutation.svg" alt="" class="mr-3" />
                Quotation
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/client'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-dollor.svg" alt="" class="mr-3" />
                Payments
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/client'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/client'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/calendar.svg" alt="" class="mr-3" style="width: 18px" />
                Calendar
            </router-link>

            <!-- client nav bar ends -->

            <!-- Purchaser nav bar starts -->
            <router-link to="/purchaser" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/purchaser'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>

            <router-link to="/per" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/purchaser'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-task.svg" alt="" class="mr-3" style="width: 18px" />
                Tasks
            </router-link>

            <router-link to="/per" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/purchaser'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/purchaser'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Calendar
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/purchaser'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Purchaser Order
            </router-link>

            <!-- Purchaser nav bar ends -->

            <!-- Qutation nav bar starts -->
            <router-link to="/quotation" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/quotation'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/quotation'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-enqury.svg" alt="" class="mr-3" style="width: 18px" />
                Enquiry
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/quotation'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-qutation.svg" alt="" class="mr-3" />
                Quotation
            </router-link>

            <router-link to="/per" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/quotation'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-task.svg" alt="" class="mr-3" style="width: 18px" />
                Tasks
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/quotation'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Scheduling
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/quotation'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/quotation'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Calander
            </router-link>

            <!-- Qutation nav bar ends -->

            <!-- Schedular nav bar starts -->

            <router-link to="/scheduler" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/scheduler'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>

            <router-link to="/per" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/scheduler'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-task.svg" alt="" class="mr-3" style="width: 18px" />
                Tasks
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/scheduler'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/scheduler'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Calander
            </router-link>

            <!-- Schedular nav bar ends -->

            <!-- Supervisor nav bar starts -->
            <router-link to="/supervisor" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/supervisor'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/supervisor'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-enqury.svg" alt="" class="mr-3" style="width: 18px" />
                Enquiry
            </router-link>

            <router-link to="/per" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/supervisor'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-task.svg" alt="" class="mr-3" style="width: 18px" />
                Tasks
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/supervisor'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/supervisor'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Calander
            </router-link>
            <!-- Supervisor nav bar ends -->

            <!-- Accounts nav bar starts -->
            <router-link to="/account" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/account'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/account'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-qutation.svg" alt="" class="mr-3" />
                Quotation
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/account'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-users.svg" alt="" class="mr-3" />
                Clients
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/account'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-dollor.svg" alt="" class="mr-3" />
                Payments
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/account'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>

            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/account'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Calander
            </router-link>

            <!-- Accounts nav bar ends -->

            <!-- Admin nav bar starts -->
            <router-link to="/dashboard" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/dashboard' || currentRouteName ==='/permission'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>
            <router-link to="/p" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/dashboard' || currentRouteName ==='/permission'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-residential.svg" alt="" class="mr-3" style="width: 18px" />
                Residential
            </router-link>
            <router-link to="/p" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/dashboard' || currentRouteName ==='/permission'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-businness.svg" alt="" class="mr-3" style="width: 18px" />
                Business Customers
            </router-link>
            <router-link to="/p" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/dashboard' || currentRouteName ==='/permission' ">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-contract.svg" alt="" class="mr-3" style="width: 18px" />
                Contractor
            </router-link>
            <router-link to="/permission" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/dashboard' || currentRouteName ==='/permission'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-permission.svg" alt="" class="mr-3" style="width: 18px" />
                Permissions
            </router-link>

            <!-- Admin nav bar Ends -->

            <!-- calander nav bar starts  -->

            <router-link to="/dashboard" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/calander'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>
            <router-link to="/dashboard" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/calander'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-task.svg" alt="" class="mr-3" style="width: 18px" />
                Tasks
            </router-link>
            <router-link to="/dashboard" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/calander'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>

            <router-link to="/calander" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/calander'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Calander
            </router-link>
            <router-link to="/dashboard" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/calander'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Purchase Order
            </router-link>
            
            <!-- calander nav bar ends  -->
            

            <!-- tasks nav bar starts  -->
            <router-link to="/dashboard" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/task'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3" style="width: 18px" />
                Dashboard
            </router-link>
             <router-link to="/s" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/task'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-report.svg" alt="" class="mr-3" style="width: 18px" />
                Reports
            </router-link>
            <router-link to="/s" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/task'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-calander.svg" alt="" class="mr-3" style="width: 18px" />
                Calander
            </router-link>
             <router-link to="/task" tag="li" class-active="active" class="mb-4 d-flex align-items-center list-side" v-if="currentRouteName ==='/task'">
                <div class="sidebaractive"></div>
                <img src="../assets/img/nav-icon/left-task.svg" alt="" class="mr-3" style="width: 18px" />
                Tasks
            </router-link>

            <!-- tasks nav bar ends  -->

            <!-- <div v-if="currentRouteName === '/permission'"></div> -->

            <!-- <li class="d-flex align-items-center"> 
                <img src="../assets/img/residentail.svg" alt="" class="mr-3">Residential</li>
            <li class="d-flex align-items-center"> <img src="../assets/img/customer-2.svg" alt="" class="mr-3">Business Customers</li>
            <li class="d-flex align-items-center"> <img src="../assets/img/contractor.svg" alt="" class="mr-3">Contractor</li> -->
            <!-- <li class="d-flex align-items-center">
                <router-link to="/permission" tag="li"  class-active="active">
                    <img src="../assets/img/folder.svg" alt="" class="mr-3">
                  Permission
                </router-link>
                </li> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return {

        }

    },
    computed: {
        currentRouteName() {
            return this.$route.path;
        }
    }

}
</script>

<style>

</style>
<style>
.sidebar-logo {
    margin-top: 20px;
    margin-left: 35px;
}

.list-style-none {
    margin-right: 10px;
    margin-top: 40px;
}

.side-barlist .list-side {
    padding: 7px 5px 7px 40px;
    border-top-right-radius: 20px;
    background: white;
    margin-bottom: 20px;
    border-bottom-right-radius: 20px;
    color: #004A79;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.list-side li {
    list-style-type: none;
    position: relative;
    overflow: hidden;
}

.side-barlist li:before {}

.side-barlist .list-side.router-link-active .sidebaractive {
    width: 5px;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background: red;
    content: '';
}

.side-barlist li img {
    width: 22px;
}
</style>
