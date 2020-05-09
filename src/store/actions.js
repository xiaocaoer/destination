import http from "@/http"
import {
  GETINDEXDATA,
  GETINDEXNAV,
  GETCATENAV,
  GETCATEDATA,
  GETNAVWRAP,
  GETRECMANUAL,
} from './mutation_types'

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
  async [GETCATENAV]({commit}){ //获取分类页导航
    const {code,data} = await http.wangi.getCateNavDatas();
    if(code===ok){
      commit(GETCATENAV,data)
    }
  },
  async [GETCATEDATA]({commit}){ //获取分类页数据
    const {code,data} = await http.wangi.getCateLists();
    if(code===ok){
      commit(GETCATEDATA,data)
    }
  },
  async [GETNAVWRAP]({commit}){ //获取值得买宫格导航
    const {code,data} = await http.wangi.getNavWap();
    if(code===ok){
      commit(GETNAVWRAP,data)
    }
  },
  async [GETRECMANUAL]({commit}){ //获取瀑布流数据
    const {code,data} = await http.wangi.getRecManual();
    if(code===ok){
      commit(GETRECMANUAL,data)
    }
  },
}