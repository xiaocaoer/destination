import http from "@/http"
import {
  GETINDEXDATA,
  GETINDEXNAV,
  GETCATENAV,
  GETCATEDATA,
  GETNAVWRAP,
  GETRECMANUAL,
} from './mutation_types'

const ok=200
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
  // 注意:网易云请求回来的数据中code是个字符串,要转为number才可以和ok相等存入仓库
  async [GETNAVWRAP]({commit}){ //获取值得买宫格导航
    const {code,data} = await http.wangi.getNavWap();
    console.log(code,data)
    if((code*1)===ok){
      commit(GETNAVWRAP,data)
    }
  },
  async [GETRECMANUAL]({commit}){ //获取瀑布流数据
    const {code,data} = await http.wangi.getRecManual();
    if((code*1)===ok){
      commit(GETRECMANUAL,data)
    }
  },
}