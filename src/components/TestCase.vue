<template>
  <div class="hello">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="caseId" label="用例ID" width="64"></el-table-column>
      <el-table-column prop="caseDesc" label="用例名称" width="120"></el-table-column>
      <el-table-column prop="requestType" label="请求类型" width="78"></el-table-column>
      <el-table-column prop="URi" label="请求地址" width="200"></el-table-column>
      <el-table-column prop="header" label="header参数" width="150"></el-table-column>
      <el-table-column prop="param" label="json参数" width="200"></el-table-column>
      <el-table-column prop="date" label="更新日期" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" width="90">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },

  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          caseId: 'tc01',
          caseDesc: '这是测试用例描述',
          requestType: 'http',
          URi: '/test/docker',
          header: '{auth: accessToken}',
          param: '{"key" : "string"}'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
