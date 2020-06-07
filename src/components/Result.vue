<template>
  <div class="gis">
    <el-table :data="tableData" border style="width: 83%">
        <el-table-column prop="caseId" label="数据源-用户地址" width="200"></el-table-column>
        <el-table-column prop="caseDesc" label="数据源-站点定位" width="150"></el-table-column>
        <el-table-column prop="requestType" label="接口服务返回" width="150"></el-table-column>
        <el-table-column prop="URi" label="比对结果" width="200"></el-table-column>
        <el-table-column prop="date" label="比对时间" width="150"></el-table-column>
        <!-- <el-table-column fixed="right" label="操作" width="90" aria-disabled="true">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>