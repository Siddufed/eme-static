<template>
<div class="">
    <div v-if="formType==''">
    <div class="d-flex align-items-center"  >
        <div class="circle" @click="toggleUser">
            <span class="el-icon-back text-danger"></span>
        </div>
        <h5 class="text-left text-blue m-0">Users</h5>

    </div>
    <div class="mt-3"></div>
    <div class="user-wrp">
    <div class="row ">
        <div class="col-md-6">
            <el-button type="danger">Recent</el-button>
            <el-button>All</el-button>
            <el-button>By Status</el-button>
            <el-button>By Role</el-button>

        </div>
        <div class="col-md-6 text-right">
            <el-button icon="el-icon-s-operation">Filters</el-button>
            <el-button type="danger" icon="el-icon-plus" plain @click="toggleForm">Add New Role</el-button>
            <el-button type="danger" icon="el-icon-plus" @click="toggleUser">Add New User</el-button>
        </div>
    </div>
    <div class="user-table-outer mt-3" >
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="text-uppercase">Name</th>
                    <th scope="col" class="text-uppercase">Email</th>
                    <th scope="col" class="text-uppercase">Phone</th>
                    <th scope="col" class="text-uppercase">Role</th>
                    <th scope="col" class="text-uppercase">Registered On</th>
                    <th scope="col" class="text-uppercase">Status</th>
                    <th scope="col" class="text-uppercase"></th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>Mark</td>
                    <td>mark@gmail.com</td>
                    <td>+7383920305</td>
                    <td>Entity</td>
                    <td>20/Mar/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Jhon</td>
                    <td>jhon@gmail.com</td>
                    <td>+7733920205</td>
                    <td>Entity</td>
                    <td>21/Mar/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Nandy</td>
                    <td>nandy@gmail.com</td>
                    <td>+3483920205</td>
                    <td>Entity</td>
                    <td>13/Feb/2020</td>
                    <td><span class="inactive">In Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Mark123</td>
                    <td>mark123@gmail.com</td>
                    <td>+7383980205</td>
                    <td>Entity</td>
                    <td>20/Mar/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Mark halo</td>
                    <td>markhalo@gmail.com</td>
                    <td>+7673920205</td>
                    <td>Non Entity</td>
                    <td>20/Mar/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Jimmy</td>
                    <td>jimmy@gmail.com</td>
                    <td>+7381920205</td>
                    <td>EME Employee</td>
                    <td>21/Dec/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Sachin</td>
                    <td>sachin@gmail.com</td>
                    <td>+7383980205</td>
                    <td>Entity</td>
                    <td>10/Jan/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Mark halo</td>
                    <td>markhalo@gmail.com</td>
                    <td>+7673920205</td>
                    <td>EME Employee</td>
                    <td>24/Mar/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                <tr>

                    <td>Jimmy</td>
                    <td>jimmy@gmail.com</td>
                    <td>+7383920205</td>
                    <td>EME Employee</td>
                    <td>21/Dec/2020</td>
                    <td><span class="active">Active</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>

            </tbody>
        </table>
        <div class="col-12 text-right">
            <el-pagination background layout="prev, pager, next" :total="100">
            </el-pagination>
        </div>
    </div>
    </div>
    </div>

    <div class="adduser-outer-form" v-if="formType =='userform'" >
        <div class="d-flex align-items-center"  >
        <div class="circle" @click="toggleTable">
            <span class="el-icon-back text-danger"></span>
        </div>
        <h5 class="text-left text-blue m-0">Create New User</h5>

    </div>
        <div class="row bg-white-users mt-3">

            <h4 class="title-r col-md-12">Roles</h4>
            <div class="col-md-4">
                <p class="d-block">Team</p>
                <el-select v-model="value" placeholder="Select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="col-md-4">
                <p class="d-block"> Role</p>
                <el-select v-model="value" placeholder="Select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>

        </div>
        <div class="bg-white-users mb-2">
            <div class="row ">

                <h4 class="title-r col-md-12">Primary Contact</h4>
                <div class="col-md-4">
                    <p class="d-block">Client Type</p>
                    <div class="d-flex">

                        <el-button>Non Entity</el-button>

                        <el-button type="primary" class="btn-bg ">Entity</el-button>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <p class="d-block"> Company Name</p>
                    <el-input placeholder="Please input" v-model="input"></el-input>
                </div>
                <div class="col-md-4">
                    <p class="d-block"> ABN Number</p>
                    <el-input placeholder="Please input" v-model="input"></el-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <p class="d-block"> First Name</p>
                    <el-input placeholder="Please input" v-model="input"></el-input>
                </div>
                <div class="col-md-5">
                    <p class="d-block"> Last Name</p>
                    <el-input placeholder="Please input" v-model="input"></el-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <p class="d-block"> Phone Number <font color="red">(Mark this number for SMS notifications &
                            alerts)</font>
                    </p>
                    <el-input placeholder="Please input" v-model="input"></el-input>
                </div>
                <div class="col-md-5">
                    <p class="d-block"> Mail ID</p>
                    <el-input placeholder="Please input" v-model="input"></el-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <p class="d-block"> Suburb
                    </p>
                     <el-input placeholder="Suburb" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> Postal Code
                    </p>
                     <el-input placeholder="Postal Code" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> City
                    </p>
                    <el-input placeholder="City" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> State
                    </p>
                    <el-input placeholder="State" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> Country
                    </p>
                    <el-input placeholder="Country" v-model="input"></el-input>
                </div>
            </div>
            <div class="row justify-content-end mt-3 pr-3">

                <el-button>+ Add New Contact</el-button>

                <el-button>+ Alternate Phone</el-button>

                <el-button>+ Alternate Email</el-button>

            </div>
        </div>
        <div class="row bg-white-users">

            <h4 class="title-r col-md-12">Billing Address</h4>
            <div class="col-md-4">
                <p class="d-block"> Person Name</p>
                <el-input placeholder="Person Name" v-model="input"></el-input>
            </div>
            <div class="col-md-4">
                <p class="d-block"> Business Name</p>
                <el-input placeholder="Business Name" v-model="input"></el-input>
            </div>

            <div class="col-md-3"></div>
            <div class="col-md-6">
                <p class="d-block"> Billing Address</p>
                <el-input placeholder="Billing Address" v-model="input"></el-input>
            </div>

            <div class="row">
                <div class="col-md-2">
                    <p class="d-block"> Suburb
                    </p>
                    <el-input placeholder="Subrub" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> Postal Code
                    </p>
                    <el-input placeholder="Postal Code" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> City
                    </p>
                    <el-input placeholder="City" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> State
                    </p>
                    <el-input placeholder="State" v-model="input"></el-input>
                </div>
                <div class="col-md-2">
                    <p class="d-block"> Country
                    </p>
                    <el-input placeholder="Country" v-model="input"></el-input>
                </div>
            </div>
        </div>
        <div class="bg-white-users p-4">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Notes" name="first"> <span slot="label">
                        <font-awesome-icon :icon="['fa', 'file']" class="mr-1"></font-awesome-icon> Notes
                    </span>

                    <div class="bg-grey-box ">
                        <div class="row justify-content-between">
                            <div>
                                <h4>Re Roofing</h4>
                                <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                            </div>
                            <div>
                                <p class="mb-1">22/Mar/2021</p>
                                <el-button type="danger" plain>COMPLETED</el-button>
                            </div>
                        </div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="Team Notes" name="second">
                    <span slot="label">
                        <font-awesome-icon :icon="['fa', 'file-alt']" class="mr-1"></font-awesome-icon> Team Notes
                    </span>
                    <div class="bg-grey-box ">
                        <div class="row justify-content-between">
                            <div>
                                <h4>Re Roofing</h4>
                                <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                            </div>
                            <div>
                                <p class="mb-1">22/Mar/2021</p>
                                <el-button type="danger" plain>COMPLETED</el-button>
                            </div>
                        </div>

                    </div>

                </el-tab-pane>
                <el-tab-pane label="Files" name="third"> <span slot="label">
                        <font-awesome-icon :icon="['fa', 'folder']" class="mr-1"></font-awesome-icon>Files
                    </span>
                    <div>
                        <div class="row">
                            <div class="col-md-3">
                                <p style="opacity:.6">Floor plan</p>
                                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" multiple>
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>

                                </el-upload>
                                <div class="text-right">
                                    <el-button type="info" icon="el-icon-plus">Add New</el-button>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <p style="opacity:.6">Upload Images</p>
                                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" multiple>
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>

                                </el-upload>
                                <div class="text-right">
                                    <el-button type="info" icon="el-icon-plus">Add New</el-button>
                                </div>
                            </div>
                        </div>
                    </div>

                </el-tab-pane>
                <el-tab-pane label="Contract" name="fourth"><span slot="label">
                        <font-awesome-icon :icon="['fa', 'user']" class="mr-1"></font-awesome-icon>Contract
                    </span>
                    <div>
                        <div class="row">
                            <div class="col-md-4 p-0">
                                <div class="contract-card">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="lef" style="opacity: .7">
                                            <p class="m-0">
                                                <font-awesome-icon :icon="['fa', 'credit-card']" class="mr-1"></font-awesome-icon>Contract Card Form
                                            </p>
                                        </div>
                                        <div class="right">
                                            <el-button type="primary btn-bg" icon="el-icon-edit">Edit</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div class="contract-card">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="lef" style="opacity: .7">
                                            <p class="m-0">
                                                <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>Signature Form
                                            </p>
                                        </div>
                                        <div class="right">
                                            <el-button type="primary btn-bg" icon="el-icon-edit">Edit</el-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <div class="col-12 text-right">
                <el-button type="danger" @click="toggleTable">Save User</el-button>
            </div>
        </div>
    </div>
    <div v-if="formType =='role'">
        <div class="d-flex align-items-center"  >
        <div class="circle" @click="toggleTable">
            <span class="el-icon-back text-danger"></span>
        </div>
        <h5 class="text-left text-blue m-0">Create New Role</h5>

    </div>
     <div class="bg-white-users p-4 mt-4">
          <h5 class="title-r">Create Team & Role</h5>
          <div class="d-flex mt-4">
               <el-button type="primary" class="btn-bg">Internal Team</el-button>
                <el-button type="plain">External Team</el-button>
                 <el-button type="plain">Customer</el-button>
          </div>
         
     </div>
     <div class="bg-white-users p-4">
           <h5 class="title-r col-12 p-0">Create Team </h5>
           <div class="col-md-4 p-0">
                <p class="d-block">Create Team</p>
                <el-input placeholder="Sales" v-model="input"></el-input>
           </div>
            <div class="col-md-4 p-0">
                <p class="d-block">Create Role</p>
                <el-input placeholder="Sales Manager" v-model="input"></el-input>
           </div>
            <div class="col-md-4 p-0 text-right mt-3">
               
                <el-button type="danger" @click="toggleTable">Save</el-button>
           </div>
     </div>
     <div class="user-table-outer mt-3" >
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="text-uppercase">Team</th>
                    <th scope="col" class="text-uppercase">Role</th>
                    <th scope="col" class="text-uppercase">Type</th>
                    <th scope="col" class="text-uppercase"></th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>Sales</td>
                    <td>Sales Manager</td>
                    <td><span class="active">Internal</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
               <tr>

                    <td>Contractor</td>
                    <td>-</td>
                    <td><span class="external">External</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                 <tr>

                    <td>Contractor</td>
                    <td>-</td>
                    <td><span class="builder">Builder</span></td>
                    <td class="text-center" style="opacity: .7">
                        <font-awesome-icon :icon="['fa', 'pen']" class="mr-1"></font-awesome-icon>
                    </td>
                </tr>
                

            </tbody>
        </table>
       
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'user',
    data() {
        return {
            activeName: "first",
            formType:'',
            // showNewUserForm: true,
            // showNewRoleForm : false
        }
    },
    methods: {
        toggleUser(){
            this.formType = 'userform'
            //   this.showNewUserForm = !this.showNewUserForm
        },
        toggleForm(){
            this.formType = 'role'
            // this.showNewUserForm = false;
            
            // this.showNewRoleForm = !this.showNewRoleForm
        },
        toggleTable(){
             this.formType = ''
        },
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
.user-table-outer td>span.active {
    padding: 5px 10px;
    font-size: 12px;
    background: #00cc7529;
    color: #00CC75;
    text-transform: uppercase;
}

.user-table-outer td>span.inactive {
    color: #DF6267;
    font-size: 12px;
    background: #FFE9E9;
    padding: 5px 10px;
    font-size: 12px;
}
.user-table-outer td>span{
    font-size: 12px;
    padding: 5px 10px;
}

.user-table-outer td>span.external{
    color:#EDAC28;
    background: #FFF7E8;
}
.user-table-outer td>span.builder{
    color: #DF62D1;
    background: #FFEFFD;
}
.user-table-outer table th {
    background: #F7F7F7;
    border-top: 0px;
    border-bottom: 0px;
    color: #7BA1BB;
}

.user-table-outer table td {
    border-top: 0px;
    background: white;
    font-weight: 400;
    border-bottom: 1.5px solid #edededb3;
    padding: 0.95rem 0.75rem;
}

.circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE9E9;
    margin-right: 10px;
}

.bg-white-users {
    background-color: white;
    padding: 20px 0px;
    border-radius: 10px;
    margin-bottom: 10px !important;
}

.bg-grey-box {
    background-color: #ffffff;

    padding: 10px;
    border-radius: 10px;
    border: 1px solid #C3C3C3;
    margin-bottom: 10px;
}

.bg-grey-box h4 {
    color: #004A79;
}

.d-block {
    opacity: .7;
    padding-top: 10px;
}

.el-select {
    display: block;
}

.title-r {
    color: #1B6592;
}

p.d-block {
    margin-bottom: 5px;
}

.btn-bg.el-button {
    background-color: #004A79;
}

.el-button--danger.is-plain {
    background: transparent;
}

.circle-back-arrow {
    color: #DF6267;
    background: #df626726;
    padding: 3px;
    border-radius: 50%;
}

.circle-alpha {
    color: #fff;
    background: #5D6F88 0% 0% no-repeat padding-box;
    padding: 5px;
    font-size: 18px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-bottom: 5px;
    margin-right: 5px;
}

.circle-alpha span {
    font-size: 17px;
    position: relative;
    left: 4px;
    top: -2px;
}

.dt-clr {
    color: #A7A7A7;
}

.row {
    margin: 0px;
}

.app-wrapper {}

.el-tabs__item {
    height: 55px;
    font-size: 20px;
}

.el-tabs__item.is-active {
    color: #1B6592;
}

.el-tabs__active-bar {
    background-color: #1B6592;
}

.el-tabs__item:hover {
    color: #1B6592;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

/* .avatar {
    width: 178px;
    height: 178px;
    display: block;
} */
.el-upload-dragger {
    width: 340px;
}

.contract-card {
    border: 1px solid #C3C3C3;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 10px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
    background: #1B6592;
}
</style>
