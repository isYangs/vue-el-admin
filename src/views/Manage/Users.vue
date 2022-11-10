<script setup lang="ts">
import { ref } from 'vue';
import { Plus, Search, Delete } from '@element-plus/icons-vue';

const searchVal = ref('');

const tableData = [
    {
        id: 1,
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 2,
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 3,
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 4,
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
];
</script>

<template>
    <div class="user">
        <div class="user-header">
            <el-input
                v-model="searchVal"
                placeholder="请输入用户名"
                clearable
            />
            <el-button type="primary" :icon="Search">搜索</el-button>
            <el-button type="primary" :icon="Plus">添加用户</el-button>
            <el-button type="danger" :icon="Delete">删除用户</el-button>
        </div>
        <div class="user-main">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column
                    prop="id"
                    label="ID"
                    width="55"
                    align="center"
                />
                <el-table-column prop="name" label="用户名" />
                <el-table-column prop="" label="头像" />
                <el-table-column prop="address" label="地址" />
                <el-table-column prop="" label="注册时间" />
                <el-table-column label="状态" />
                <el-table-column label="操作" />
            </el-table>
        </div>
    </div>
</template>

<style scoped lang="less">
.user {
    padding: 20px;

    &-header {
        & > .el-input {
            width: 230px;
            height: 34px;
            margin-right: 10px;
        }

        & > .el-button {
            height: 36px;
        }
    }

    &-main {
        margin-top: 20px;
    }
}
</style>
