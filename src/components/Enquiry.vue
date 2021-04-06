<template>
<div class="">
    <div v-if="formType==''">
        <div class="d-flex align-items-center">
            <div class="circle" @click="toggleUser">
                <span class="el-icon-back text-danger"></span>
            </div>
            <h5 class="text-left text-blue m-0">Enquiry</h5>

        </div>
        <div class="mt-3"></div>
        <div class="user-wrp">
            <div class="row ">
                <div class="col-md-6">

                </div>
                <div class="col-md-6 text-right">
                    <el-button icon="el-icon-s-operation">Filters</el-button>

                    <el-button type="danger" icon="el-icon-plus" @click="toggleUser">Create New Enquiry</el-button>
                </div>
            </div>
            <div class="user-table-outer mt-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" class="text-uppercase">Enquiry id</th>
                            <th scope="col" class="text-uppercase">Client Name</th>
                            <th scope="col" class="text-uppercase">Client type</th>
                            <th scope="col" class="text-uppercase">Status</th>
                            <th scope="col" class="text-uppercase text-center">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>EN-001</td>
                            <td>mark </td>
                            <td>Agent</td>

                            <td><span class="active">Accepted</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>
                        <tr>

                            <td>EN-002</td>
                            <td>Nandy </td>
                            <td>Agent</td>

                            <td><span class="forward">Forwarded</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>
                        <tr>

                            <td>EN-003</td>
                            <td>Sachin </td>
                            <td>Agent</td>

                            <td><span class="approval text-uppercase">Sent For approval</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>
                        <tr>

                            <td>EN-004</td>
                            <td>Pruthvi </td>
                            <td>Agent</td>

                            <td><span class="inactive text-uppercase">Rejected</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>

                        <tr>

                            <td>EN-005</td>
                            <td>Thomas </td>
                            <td>Sales Manager</td>

                            <td><span class="active">Accepted</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>
                        <tr>

                            <td>EN-006</td>
                            <td>Henry </td>
                            <td>Sales Manager</td>

                            <td><span class="active">Accepted</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>
                        <tr>

                            <td>EN-007</td>
                            <td>Dustan </td>
                            <td>Agent</td>

                            <td><span class="active">Accepted</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>

                        <tr>

                            <td>EN-008</td>
                            <td>Charlie </td>
                            <td>Agent</td>

                            <td><span class="active">Accepted</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
                            </td>
                        </tr>
                        <tr>

                            <td>EN-009</td>
                            <td>Lamie </td>
                            <td>Employee </td>

                            <td><span class="approval">Sent For Approval</span></td>
                            <td class="text-center" style="opacity: .7">
                                <font-awesome-icon :icon="['fa', 'th']" class="mr-1"></font-awesome-icon>
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

    <div class="adduser-outer-form" v-if="formType =='userform'">
        <div class="d-flex align-items-center">
            <div class="circle" @click="toggleTable">
                <span class="el-icon-back text-danger"></span>
            </div>
            <h5 class="text-left text-blue m-0">Create New Enquiry</h5>

        </div>
        <div class="row bg-white-users mt-3">

            <div class="col-md-6">
                <p class="d-block">Customer</p>
                <el-input placeholder="Customer name" v-model="name"></el-input>
            </div>
            <div class="col-md-6">
                <p class="d-block"> Enquiry title</p>
                <el-input placeholder="Enquiry Title" v-model="title"></el-input>
            </div>
            <div class="col-md-6">
                <p class="d-block">link Job</p>
                <el-input placeholder="Type Job Name" v-model="linkjob" prefix-icon="el-icon-search"></el-input>
            </div>
            <div class="col-md-6">
                <p class="d-block"> Link Client</p>
                <el-input placeholder="Please input" v-model="linkclient" prefix-icon="el-icon-search"></el-input>
            </div>
            <div class="col-md-6">
                <p class="d-block"> Expiry Date</p>
                <el-date-picker v-model="experiydate" type="date" placeholder="Expiry Date">
                </el-date-picker>
            </div>

        </div>
        <div class="bg-white-users mb-2">

            <div class="row">
                <div class="col-md-5">
                    <p class="d-block"> Item</p>
                    <el-input placeholder="Type Item Name" v-model="item"></el-input>
                    <p></p>
                    <el-input placeholder="Description" v-model="description" type="textarea" rows=6></el-input>
                </div>
                <div class="col-md-5">

                </div>
            </div>

            <div class="row justify-content-end mt-3 pr-3">

                <el-button>+ Add New Item</el-button>

                <el-button @click="insertenquiry = true">+ Add Enquiry</el-button>

                <el-button @click="inserttemplate = true">+ Insert Template</el-button>

            </div>
        </div>
        <div class="row">
            <div class="col-md-7 pl-0">
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
                                    <div class="col-md-6 p-0">
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

                </div>
            </div>
            <div class="col-md-5">
                <p class="title-r"><a href="" style="text-decoration: underline">Add Discount</a></p>
                <div class="bg-white-users p-5 position-relative" style="overflow:hidden;height: 250px">
                    <div class="d-flex justify-content-between" style="opacity:.7">
                        <p>Sub Total</p>
                        <p>(AU $ ) 0.00</p>
                    </div>
                    <div class="d-flex justify-content-between" style="opacity:.7">
                        <p>GST</p>
                        <p>(AU $ ) 0.00</p>
                    </div>
                    <div class="total">
                        <div class="d-flex justify-content-between">
                            <p>Total</p>
                            <p>(AU $ ) 0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 text-right">
            <el-button type="danger" @click="toggleTable">Save Enquiry</el-button>
        </div>
        <div class="row">
            <h3 class="title-r">Timeline</h3>
            <div class="col-md-12 d-flex mb-3 p-0">
                <div class="circle-alpha"><span>A</span></div>
                | Alex updated the invoice - <span class="dt-clr"> 2:26PM, 22 Mar, 21</span>
            </div>
            <div class="col-md-12 d-flex  mb-3 p-0">
                <div class="circle-alpha"><span>A</span></div>
                | Alex updated the invoice - <span class="dt-clr"> 2:26PM, 22 Mar, 21</span>
            </div>
            <div class="col-md-12 d-flex  mb-3 p-0">
                <div class="circle-alpha"><span>A</span></div>
                | Alex updated the invoice - <span class="dt-clr"> 2:26PM, 22 Mar, 21</span>
            </div>

        </div>
        <el-dialog :visible.sync="inserttemplate" class="custom-modal">
            <p class="d-block"> Search for Bundle <span class="text-danger"> *</span></p>
            <el-input placeholder="Type something" v-model="searchbundle">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div class="d-flex justify-content-between align-items-center mt-4">
                <p style="opacity:0.7" class="m-0">Place items in grouping</p>
                <el-switch v-model="value1">
                </el-switch>
            </div>
            <div class=" mt-5 text-right">
             <el-button plain type="danger">Save</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="insertenquiry" class="custom-modal">
            <p class=""> Enquiry <span class="text-danger"> *</span></p>
            <el-input placeholder="Enter Enquiry Title" v-model="searchbundle">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div class="justify-content-between align-items-center mt-4">
                <p style="opacity:0.7" >Description</p>
                <el-input type="textarea" rows=6 placeholder="Enter Description" v-model="description"></el-input>
            </div>
            <div class=" mt-5 text-right">
                 <el-button plain >CANCEL</el-button>
             <el-button plain>SAVE</el-button>
            </div>
        </el-dialog>
    </div>

</div>
</template>

<script>
export default {
    name: 'enquiry',
    data() {
        return {
            activeName: "first",
            formType: '',
            name: '',
            title: '',
            linkjob: '',
            linkclient: '',
            experiydate: '',
            item: '',
            description: '',
            inserttemplate: false,
            searchbundle: '',
            value1: false,
            insertenquiry:false
            // showNewUserForm: true,
            // showNewRoleForm : false
        }
    },
    methods: {
        toggleUser() {
            this.formType = 'userform'
            //   this.showNewUserForm = !this.showNewUserForm
        },
        toggleForm() {
            this.formType = 'role'
            // this.showNewUserForm = false;

            // this.showNewRoleForm = !this.showNewRoleForm
        },
        toggleTable() {
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
