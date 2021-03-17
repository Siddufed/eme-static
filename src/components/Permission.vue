<template>
<div class="">
    <div class="d-flex align-items-center">
        <div class="circle" @click="goback">
            <span class="el-icon-back text-danger"></span>
        </div>
        <h5 class="text-left text-blue m-0">Permission</h5>

    </div>
    <div class="mt-5"></div>
    <div class="col-12">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="text-uppercase visiblity-hidden"></th>
                    <th scope="col" class="text-uppercase">Client</th>
                    <th scope="col" class="text-uppercase">Purchaser</th>
                    <th scope="col" class="text-uppercase">Quotation</th>
                    <th scope="col" class="text-uppercase">Scheduler</th>
                    <th scope="col" class="text-uppercase">Supervisor</th>
                    <th scope="col" class="text-uppercase">Accounts</th>
                    <th scope="col" class="text-uppercase">Admin</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td class="text-blue" style="font-weight: bold">Client and vendor creation</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>

                    <td style="opacity: .6">Create new client</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <tr>

                    <td style="opacity: .6">Create new Vendor</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <tr>
                    <td style="opacity: .6">Edit / Delete Client</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <tr>

                    <td style="opacity: .6">Edit / Delete Vendor</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>


  <!-- reports -->

                <tr>

                    <td class="text-blue" style="font-weight: bold">Reports</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>

                    <td style="opacity: .6">Extract reports</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <tr>

                    <td style="opacity: .6">Extract client, vendor listing</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>


                <!-- change password  -->

                <tr>

                    <td class="text-blue" style="font-weight: bold">Change Password</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>

                    <td style="opacity: .6">Send Link</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <tr>

                    <td style="opacity: .6">Change Password</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>

                <!-- item material -->

                <tr>

                    <td class="text-blue" style="font-weight: bold">Item / Material Details</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>

                    <td style="opacity: .6">Add Items</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <tr>

                    <td style="opacity: .6">Clients</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <!-- create task -->

                <tr>

                    <td class="text-blue" style="font-weight: bold">Create Task</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>

                    <td style="opacity: .6">New Task</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
                <tr>

                    <td style="opacity: .6">Edit Task</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>

                </tr>
            </tbody>
        </table>
        <div class="col-12 text-right">
            <el-button type="danger" plain>Cancel</el-button>
                 <el-button type="danger">Save</el-button>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    name: 'permission',
    data() {
        return {
            value2: true
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

.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: rgb(0, 74, 121)
}

input:focus+.slider {
    box-shadow: 0 0 1px rgb(0, 74, 121)
}

input:checked+.slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
<style scoped>
td {
    font-weight: 500;
}

th {
    opacity: .7;
}
.table thead th{
    border-bottom: 0px;
}
th.text-uppercase{
    border-bottom: 0px;
    background: #F7F7F7;
}
.table th, .table td{
    border-bottom: 1px solid #dee2e6;
}
</style>
