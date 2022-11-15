<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Plus, Search, Delete } from '@element-plus/icons-vue';
import { idata } from '@/api';
import { useAuthStore } from '@/store';

const searchVal = ref('');
const authStore = useAuthStore();
const total = ref(0);
const tableData = ref([]);
const tabLoading = ref(false);
const currentPage = ref(1);
const getTableData = async () => {
    tabLoading.value = true;
    const res = await idata.getUserList({
        token: authStore.getToken,
        total: 20,
        pageSize: 10,
    });
    total.value = res.data.data.total;
    tableData.value = await res.data.data.list;
    tabLoading.value = false;
};

const handleSizeChange = (val: number) => {
    console.log(`每页 ${val} 条`);
};

const handleCurrentChange = (val: number) => {
    currentPage.value = val;
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
            <el-table
                :data="tableData"
                v-loading="tabLoading"
                border
                style="width: 100%"
            >
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
            <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
            />
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

        & > .el-pagination {
            margin-top: 20px;
        }
    }
}
</style>
