<template>
<div class="">

    <div class="d-flex align-items-center">
        <div class="circle" @click="goback">
            <span class="el-icon-back text-danger"></span>
        </div>
        <h5 class="text-left text-blue m-0">Tasks</h5>

    </div>
    <div class="mt-5"></div>
    <div class="row m-0 justify-content-end">
        <el-button icon="el-icon-s-operation">Filters</el-button>
        <el-button icon="el-icon-plus" type="danger">Add New</el-button>
    </div>
    <div class="row m-0 mt-4">
        <div class="col-12">
            <table class="table task">
                <thead>
                    <tr>
                        <th scope="col"  class="text-blue" style="opacity: .5">Name</th>
                        <th scope="col" class="text-blue" style="opacity: .5">Job Type</th>
                        <th scope="col" class="text-blue" style="opacity: .5">Job ID</th>
                        <th scope="col" class="text-blue" style="opacity: .5">Email ID</th>
                        <th scope="col" class="text-blue" style="opacity: .5">Phone Number</th>
                        <th scope="col" class="text-blue" style="opacity: .5">Assessments Status</th>
                        <th scope="col" class="text-blue" style="opacity: .5">Delivery Status</th>
                         <th scope="col" class="text-blue text-center" style="opacity: .5">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>Terry </td>
                        <td>Roofing</td>
                        <td>#2345</td>
                        <td>Skeven@gmail.com</td>
                        <td>+5678937279</td>
                        <td> <span class="pending text-uppercase text-success">Credited</span></td>
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                    <tr>
                        <td>jhon </td>
                        <td>Roofing</td>
                        <td>#2335</td>
                        <td>jhon@gmail.com</td>
                        <td>+5678937277</td>
                        <td> <span class="pending text-uppercase text-success">Pending</span></td>
                      
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                    <tr>
                        <td>jamie </td>
                        <td>Re-Roofing</td>
                        <td>#2395</td>
                        <td>jamie@gmail.com</td>
                        <td>+5678937347</td>
                        <td> <span class="pending text-uppercase text-success">Credited</span></td>
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                    <tr>
                        
                        <td>Terry </td>
                        <td>Roofing</td>
                        <td>#2345</td>
                        <td>Skeven@gmail.com</td>
                        <td>+56789372756</td>
                        <td> <span class="pending text-uppercase text-success">Credited</span></td>
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                    <tr>
                        <td>jhon </td>
                        <td>Roofing</td>
                        <td>#2335</td>
                        <td>jhon@gmail.com</td>
                        <td>+5678937212</td>
                        <td> <span class="pending text-uppercase text-success">Pending</span></td>
                      
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                    <tr>
                        <td>jamie </td>
                        <td>Re-Roofing</td>
                        <td>#2395</td>
                        <td>jamie@gmail.com</td>
                        <td>+56789372774</td>
                        <td> <span class="pending text-uppercase text-success">Credited</span></td>
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                    <tr>
                        
                        <td>Terry </td>
                        <td>Roofing</td>
                        <td>#2345</td>
                        <td>Skeven@gmail.com</td>
                        <td>+5678837277</td>
                        <td> <span class="pending text-uppercase text-success">Credited</span></td>
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                    <tr>
                        <td>jhon </td>
                        <td>Roofing</td>
                        <td>#2335</td>
                        <td>jhon@gmail.com</td>
                        <td>+56789356277</td>
                        <td> <span class="pending text-uppercase text-success">Pending</span></td>
                      
                        <td> <span class="Assigned text-danger text-uppercase">Not assigned</span></td>
                        <td class="text-center cusrsor-pointer"><span class="el-icon-s-grid"></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'task',
    data() {
        return {
            value: new Date()
        }
    },
    methods: {
        goback() {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.el-input__inner {
    height: 50px;
    border-radius: 10px;
}

hr {
    border-top: 1px solid #cccccc69;
}

.client-inps label {
    opacity: .6;
}

.block .el-date-editor.el-input,
.el-date-editor.el-input__inner {
    width: 100%;
}
.pending.text-success{
    padding: 5px 10px;
    font-size: 12px;
    background: #00cc752e;
    color: #00CC75;
}
.Assigned.text-danger{
    color:#DF6267;
    background: #DF62672e;
    font-size: 12px;
    padding: 5px 10px;
}
.task th{
 background: #F7F7F7;
 border-bottom: 0px;
 border-top: 0px;
}
</style>
