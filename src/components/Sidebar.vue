<template>
<div class="sidebar">
    <div class="sidebar-logo">
        <img src="../assets/img/eme-sidebar-logo.png" alt="" width="80">
    </div>
    <div class="side-barlist">
        <ul class="list-style-none ">
            <li class="d-flex align-items-center">
                <img src="../assets/img/dashboard.svg" alt="" class="mr-3">
                Dashboard</li>
            <li class="d-flex align-items-center"> <img src="../assets/img/residentail.svg" alt="" class="mr-3">Residential</li>
            <li class="d-flex align-items-center"> <img src="../assets/img/customer-2.svg" alt="" class="mr-3">Business Customers</li>
            <li class="d-flex align-items-center"> <img src="../assets/img/contractor.svg" alt="" class="mr-3">Contractor</li>
            <li class="d-flex align-items-center"> <img src="../assets/img/folder.svg" alt="" class="mr-3">Permission</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'sidebar',

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

.side-barlist li {
    padding: 7px 5px 7px 40px;
    border-top-right-radius: 20px;
    background: white;
    margin-bottom: 20px;
    border-bottom-right-radius: 20px;
    color: #004A79;
}

.side-barlist li img {
    width: 22px;
}
</style>
