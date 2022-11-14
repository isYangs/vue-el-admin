<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Plus, Search, Delete } from '@element-plus/icons-vue';
import { idata } from '@/api';
import { useAuthStore } from '@/store';

const searchVal = ref('');
const authStore = useAuthStore();

const tableData = ref([]);
const getTableData = async () => {
    const res = await idata.getUserList({
        token: authStore.getToken,
        total: 10,
    });
    tableData.value = await res.data.data.list;
};

onMounted(() => {
    getTableData();
});
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
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="100"
                    align="center"
                />
                <el-table-column prop="email" label="邮箱" align="center" />
                <el-table-column prop="address" label="地址" align="center" />
                <el-table-column prop="date" label="注册时间" align="center" />
                <el-table-column label="状态" align="center" />
                <el-table-column label="操作" align="center" />
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
