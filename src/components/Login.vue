<template>
<div class="hello">

    <section class="login-section">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-4 position-relative">
                    <div class="left-outer d-flex justify-content-center align-items-center">

                        <div>
                            <div class="login-signup-logo text-center">
                                <img src="../assets/img/eme-logo.png" alt="" width="200">
                            </div>
                            <h5 class="text-center text-uppercase mb-1 text-white font-weight-bold">Welcome to </h5>
                            <h5 class="text-center text-uppercase text-white font-weight-bold">EME roofing since 1998</h5>
                            <!-- <div class="text-center">
                                <button class="btn btn-secondary">SIGNUP</button>
                            </div> -->

                        </div>

                    </div>
                </div>
                <div class="col-md-8 col-lg-8">

                    <div class="right-outer d-flex align-items-center justify-content-center">
                        <div class="col-12 text-center">
                            <div class="row">
                                <div class="col-3"></div>
                                <div class="col-7 text-left ">
                                    <div class="text-left">
                                        <h4 class="font-bold text-white mb-4" style="font-weight: bold">Login</h4>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-white">Email</label>
                                        <!-- <el-select v-model="value" placeholder="Email">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                            </el-option>
                                        </el-select> -->
                                         <el-input v-model="password" type="email" placeholder="Email"></el-input>
                                    </div>
                                    <div>
                                        <label class="text-white">Password</label>
                                        <!-- <el-input v-model="password" type="password" placeholder="Password"  suffix-icon="el-icon-date"></el-input> -->
                                        <div class="custom-inp-pass">

                                            <input :type="passwordFieldType" placeholder="Password">
                                            <div class="toggle-eye" @click="toggleEye">
                                                <font-awesome-icon :icon="['fa', eyetoggleclass]" class="mr-1"></font-awesome-icon>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="d-flex justify-content-between mt-4">
                                        <a href="">Forgot Password? </a>
                                        <el-button class="custom-login-btn" @click="goDashboard">Login</el-button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="ict-logo-footer">
        <img src="../assets/img/ict-logo.svg" alt="">
    </section>
    <section class="footer-logo">
        <img src="img/ict-logo.svg" alt="" width="">
    </section>

</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            eyetoggleclass: 'eye-slash',
            options: [{
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
            value: "",
            password: '',
            showPassword: false,
            passwordFieldType: "password"
        }
    },
    methods: {
        toggleEye() {
            this.switchVisibility();
            if (!this.showPassword) {
                this.eyetoggleclass = "eye"
            } else {
                this.eyetoggleclass = "eye-slash"
            }
            this.showPassword = !this.showPassword
        },
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },
        goDashboard() {
            // switch (this.value) {
            //     case "Client":
            //         this.$router.push({
            //             path: 'client'
            //         })
            //         console.log("value", this.value);
            //         break;

            //     case "Purchaser":
            //         this.$router.push({
            //             path: 'purchaser'
            //         })
            //         console.log("value", this.value);
            //         break;

            //     case "Quotation":
            //         this.$router.push({
            //             path: 'quotation'
            //         })
            //         console.log("value", this.value);
            //         break;

            //     case "Scheduler":
            //         this.$router.push({
            //             path: 'scheduler'
            //         })
            //         console.log("value", this.value);
            //         break;

            //     case "Supervisor":
            //         this.$router.push({
            //             path: 'supervisor'
            //         })
            //         console.log("value", this.value);
            //         break;

            //     case "Accounts":
            //         this.$router.push({
            //             path: 'account'
            //         })
            //         console.log("value", this.value);
            //         break;

            //     case "Admin":
            //         this.$router.push({
            //             path: 'dashboard'
            //         })
            //         console.log("value", this.value);
            //         break;

            // }
            this.$router.push({ path: 'dashboard' })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.text-white {
    color: white;
}

a {
    color: white;
}

a:hover {
    color: white;
    text-decoration: none;
}

.custom-login-btn {
    width: 45%;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
}

.el-input__inner {
    background: transparent;
    color: white;
    height: 50px !important;
}

.el-select .el-input.is-focus .el-input__inner {
    border-color: white;
}

.el-select .el-input__inner:focus {
    border-color: white;
}
</style>
