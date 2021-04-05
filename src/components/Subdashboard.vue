<template>
<div class="">
    <div v-if="!addForm">
        <div class="d-flex justify-content-between">
            <h3 class="text-left text-blue ">Dashboard</h3>
            <el-button icon="el-icon-plus" type="danger" @click="hideshow">Add New</el-button>
        </div>
        <div class="mt-5"></div>
        <div class="dashboard-cards">
            <div class="row">
                <div class="col-md-4 pr-1 pl-1">
                    <el-card shadow="hover" class="padd-0">
                        <div class="card-gradient">
                            <img src="../assets/img/card-top.svg" alt="" class="top">
                            <!-- card gradient  -->
                            <div class="card mb-4 custom-cards-forusers" style="background-color:#00CC75">
                                <div class="d-flex">
                                    <div class="col-6">
                                        <img src="../assets/img/MaskGroup11.svg" alt="" height="150">
                                    </div>
                                    <div class="col-6 pr-4">
                                        <div class="text-right">
                                            <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">2,554</p>
                                            <p class="text-white text-uppercase">Total Clients</p>
                                        </div>
                                        <!-- <div class=" d-flex">
                                    <div>Today</div>
                                     <div>+15%</div>
                               </div> -->
                                        <div class="box text-white d-flex ml-auto">
                                            <div class="text-center">Today</div>
                                            <div class="d-flex align-items-center" style="background: white;color: #6fce76; font-weight: bold;text-align:center;"><span class="el-icon-top"></span> <span>+15%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col ">
                                    <p class="left-clr" style="color:#7BA1BB;">Client Name</p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr" style="color:#7BA1BB;">Client Type</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Keven Hello</p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Commercial</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Jhon </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Thomas </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Thomas </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="text-center mb-3">
                                <span class="text-danger" style="text-decoration: underline; cursor:pointer">View All</span>
                            </div>

                        </div>
                    </el-card>
                </div>
                <div class="col-md-4 pr-1 pl-1">
                    <el-card shadow="hover" class="padd-0">
                        <div class="card-gradient">
                            <img src="../assets/img/card-top.svg" alt="" class="top">
                            <!-- card gradient  -->
                            <div class="card mb-4 custom-cards-forusers" style="background-color:#E7523A">
                                <div class="d-flex">
                                    <div class="col-6">
                                        <img src="../assets/img/customer-2(1).svg" alt="" height="150">
                                    </div>
                                    <div class="col-6 pr-4">
                                        <div class="text-right">
                                            <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">2,554</p>
                                            <p class="text-white text-uppercase">Total Vendors</p>
                                        </div>
                                        <div class="box text-white d-flex ml-auto">
                                            <div class="text-center">Today</div>
                                            <div class="d-flex align-items-center" style="background: white;color: #e7523a;font-weight: bold;text-align:center;"><span class="el-icon-top"></span> <span>+15%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr" style="color:#7BA1BB;">Client Name</p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr" style="color:#7BA1BB;">Client Type</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Keven Hello</p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Commercial</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Jhon </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Thomas </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Nandy </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="text-center mb-3">
                                <span class="text-danger" style="text-decoration: underline; cursor:pointer">View All</span>
                            </div>

                        </div>
                    </el-card>
                </div>
                <div class="col-md-4 pr-1 pl-1">
                    <el-card shadow="hover" class="padd-0">
                        <div class="card-gradient">
                            <img src="../assets/img/card-top.svg" alt="" class="top">
                            <!-- card gradient  -->
                            <div class="card mb-4 custom-cards-forusers" style="background-color:#229BE5">
                                <div class="d-flex">
                                    <div class="col-6">
                                        <img src="../assets/img/user-hard-hat-light.svg" alt="" height="150">
                                    </div>
                                    <div class="col-6 pr-4 mt-4">
                                        <div class="text-right">
                                            <p style="font-size: 30px;margin: 0px; color: #2121218c;font-weight: bold;">20</p>
                                            <p class="text-white text-uppercase">Total Employees</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr" style="color:#7BA1BB;">Client Name</p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr" style="color:#7BA1BB;">Client Type</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Keven Hello</p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Commercial</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Amrona </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Alexa </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="dash-list d-flex justify-content-between">
                                <div class="col  ">
                                    <p class="left-clr">Thomas </p>
                                </div>
                                <div class="col   text-right">
                                    <p class="right-clr">Consumer</p>
                                </div>
                            </div>
                            <div class="text-center mb-3">
                                <span class="text-danger" style="text-decoration: underline; cursor:pointer">View All</span>
                            </div>

                        </div>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="d-flex align-items-center">
            <div class="circle" @click="initialView">
                <span class="el-icon-back text-danger"></span>
            </div>
            <h5 class="text-left text-blue m-0">Add New</h5>

        </div>
        <div class="mt-5"></div>
        <div class="row m-0">
            <div class="col-6 pl-0">
                <label class="">Select Type</label>
                <el-select v-model="type" placeholder="Select Type">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

            </div>
            <div class="col-6 pr-0">
                <label class="">Role</label>
                <el-select v-model="role" placeholder="Role">
                    <el-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="mt-4 row "></div>
        <hr>
        <div>
            <p class="text-blue">Client Details</p>
        </div>
        <div class="row client-inps">
            <div class="col-6 row">
                <div class="col-6">
                    <label class="">First Name</label>
                    <el-input placeholder="First Name" v-model="firstname"></el-input>
                </div>
                <div class="col-6">
                    <label class="">Last Name</label>
                    <el-input placeholder="Last Name" v-model="lastname"></el-input>
                </div>
                <div class="col-6 mt-4">
                    <label class="">Phone Number</label>
                    <el-input placeholder="First Name" type="number" v-model="phone"></el-input>
                </div>
                <div class="col-6 mt-4">
                    <label class="">Email</label>
                    <el-input placeholder="Last Name" type="email" v-model="email"></el-input>
                </div>
                <div class="col-6 mt-4">
                    <label class="">Client Name</label>
                    <el-input placeholder="First Name" type="text" v-model="name"></el-input>
                </div>
                <div class="col-6 mt-4">
                    <label class="">ABN Number</label>
                    <el-input placeholder="Last Name" type="text" v-model="abn"></el-input>
                </div>
                <div class="col-6 mt-4 block">
                    <label class="">Date Of Birth     </label>
                    <el-date-picker v-model="dob" type="date" placeholder="Date of Birth">
                    </el-date-picker>
                </div>
                <div class="col-6 mt-4 block">
                    <label class="">Anniversary Date</label>
                    <el-date-picker v-model="adob" type="date" placeholder="Anniversary Date">
                    </el-date-picker>
                </div>
                 <div class="col-12 mt-4">
                    <label class="">Client Address</label>
                   <el-input placeholder="Client Address" type="textarea" v-model="address"></el-input>
                </div>
                <div class="col mt-4">
                     <label class="">Subrub</label>
                    <el-input placeholder="Subrub" type="text" v-model="subrub"></el-input>
                </div>
                 <div class="col mt-4">
                     <label class="">Postal Code</label>
                    <el-input placeholder="Code" type="text" v-model="postal"></el-input>
                </div>
                <div class="col mt-4">
                     <label class="">City</label>
                    <el-input placeholder="City" type="text" v-model="city"></el-input>
                </div>
                <div class="col mt-4">
                     <label class="">State</label>
                    <el-input placeholder="State" type="text" v-model="state"></el-input>
                </div>
                <div class="col mt-4">
                     <label class="">Country</label>
                    <el-input placeholder="Country" type="text" v-model="country"></el-input>
                </div>
            </div>
          
        </div>
 <el-button  type="danger" @click="initialView" class="mt-4">Save</el-button>
    </div>
</div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
            addForm: false,
            options: [{
                value: 'Client',
                label: 'Client'
            }, {
                value: 'Vendor',
                label: 'Vendor'
            }, {
                value: 'Contractors',
                label: 'Contractors'
            }],
            roles: [{
                    value: 'Client',
                    label: 'Client'
                }, {
                    value: 'Purchaser',
                    label: 'Purchaser'
                }, {
                    value: 'Quotation',
                    label: 'Quotation'
                }, {
                    value: 'Scheduler',
                    label: 'Scheduler'
                }, {
                    value: 'Supervisor',
                    label: 'Supervisor'
                },
                {
                    value: 'Accounts',
                    label: 'Accounts'
                },
                {
                    value: 'Admin',
                    label: 'Admin'
                },
            ],
            type: '',
            role: '',
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            name: '',
            abn: '',
            dob:'',
            adob:'',
            address:'',
            state:'',
            counrty:'',
            city:'',
            postal:'',
            suburb:''
        }
    },
    methods: {
        hideshow() {
            this.addForm = true
        },
        initialView() {
            this.addForm = false
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
.block .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
}
</style>
