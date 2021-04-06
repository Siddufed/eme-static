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

</style>
