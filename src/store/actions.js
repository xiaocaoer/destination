import http from "@/http"
import {GETINDEXDATA,GETINDEXNAV} from './mutation_types'

const ok=0
export default {
  async [GETINDEXDATA]({commit}){ //获取主页信息
    const {code,data} = await http.wangi.getIndexData();
    if(code===ok){
      commit(GETINDEXDATA,data)
    }
  },
  async [GETINDEXNAV]({commit}){ //获取主页导航
    const {code,data} = await http.wangi.getIndexCateModule();
    if(code===ok){
      commit(GETINDEXNAV,data)
    }
  },
}