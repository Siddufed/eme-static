<template>
<div class="">
    <div class="d-flex">
       <div class="d-flex align-items-center">
        <div class="circle" @click="goback">
            <span class="el-icon-back text-danger"></span>
        </div>
        <h5 class="text-left text-blue m-0">Calander</h5>

    </div>
        <div class="mt-5"></div>
       

    </div>
    <div>
         <el-calendar v-model="value" >
        </el-calendar>
    </div>

</div>
</template>

<script>
export default {
    name: 'calander',
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
</style>
