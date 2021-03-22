<template>
<div class="topbar">
    <div class="row m-0">
        <div class="col-7">
            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback">
                    <img src="../assets/img/search.svg" alt="" width="18">
                </span>
                <input type="text" class="form-control" placeholder="Search here">
            </div>
        </div>
        <div class="col-5 text-right">
            <div class="d-flex d-flex justify-content-end mr-5">
                <div class="circle-top">
                    <img src="../assets/img/refresh.svg" alt="" width="20">
                </div>
                <div class="circle-top">
                    <img src="../assets/img/bell.svg" alt="" width="20">
                </div>

                <div class="dropdown-custom d-flex align-items-center">
                    <div class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="avatar avatar-online"><img src="../assets/img/user.jpg" alt="avatar" class="mr-3" width="30" height="30" style="border-radius: 50%"></span>
                        <span class="mr-2">John Doe</span>

                    </div>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">
                            <font-awesome-icon :icon="['fa', 'user']" class="mr-1"/> My Profile</a>
                        <a class="dropdown-item" href="#"> <font-awesome-icon :icon="['fa', 'cog']" class="mr-1"/> Settings </a>
                        <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fa', 'sign-out-alt']" class="mr-1" />  Logout </a>
                        <a class="dropdown-item" href="#">Switch to ERP <span>
                                <el-switch v-model="value2" active-color="#004a79" inactive-color="" width="32" height="23">
                                </el-switch>
                            </span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Actual search box -->


</template>

<script>
export default {
    name: 'topbar',
    data(){
        return{
            
        }
        
    },
    computed: {
    // currentRouteName() {
    //     return this.$route.path;
    // }
}

}
</script>

<style>
.topbar {
    margin: 20px 0px;
}

/* Styles for wrapping the search box */

.main {
    width: 50%;
    margin: 50px auto;
}

/* Bootstrap 4 text input with search icon */

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

.circle-top {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    /* line-height: 35px; */
    background: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
}

.user-card {
    border: 1px solid #a8abb0b0;
    padding: 5px;
    font-size: 14px;
}
</style>
<style scoped>
.form-control {
    height: calc(1.7em + 0.75rem + 2px);
    border-radius: 0.5rem;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #004A79;
    opacity: 0.5;
    /* Firefox */
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #004A79;
    opacity: 0.5;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #004A79;
    opacity: 0.5;
}

.dropdown-custom {
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
}

.dropdown-menu.show {
    display: block;
    width: 145px;
    left: -8px !important;
    top: 8px !important;
    border-radius: 7px;
}
</style>
<style scoped>
    .dropdown-item{
        font-size: 12px;
    }
    .dropdown-item svg{
        opacity: .7;
    }
</style>