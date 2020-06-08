<template>
    <div>
        <el-button @click='showList' type="primary" icon="el-icon-search" style="display: flex; justify-content: right;">一键对比</el-button>
    
        <el-table
      :data="tableData"
      border
      style="width: 100%">

      <el-table-column
        prop="sourceAddr"
        label="源地址"
        width="400">
      </el-table-column>

      <el-table-column
        prop="sourceLocation"
        label="源站点"
        width="300">
      </el-table-column>

      <el-table-column
        prop="sourceXy"
        label="实际站点"
        width="200">
      </el-table-column>
      
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="updateSql(scope.row)" type="text" size="small">一键更新</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class = "pager" style="display: flex; justify-content: center;">
        <!-- <el-pagination
            background
            layout="prev, pager, next"
            :total="count">
        </el-pagination> -->
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-sizes=[10,20,50,100]
      layout="total, prev, pager, next"
      :total="count">
    </el-pagination>
    </div>

    </div>
</template>
  
  <script>
    export default {
      methods: {
        updateSql(row) {
        //   console.log(row); 这里写操作update sql的操作
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },

        showList(){
            this.$axios.get("http://localhost:8080/gis/compare/1/12").then(res=>{
                this.count = res.data.data.count
                this.tableData = res.data.data.results
            })
        }
      },
  
      data() {
        return {
          tableData: [],
          count: 0
        }
      }
    }
  </script>