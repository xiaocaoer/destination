import {
  GETINDEXDATA,
  GETINDEXNAV,
  GETCATENAV,
  GETCATEDATA,
  GETNAVWRAP,
  GETRECMANUAL,
} from './mutation_types'

export default{
  [GETINDEXDATA](state,indexData){
    state.indexData=indexData
  },
  [GETINDEXNAV](state,indexNav){
    state.indexNav=indexNav
  },
  [GETCATENAV](state,cateNav){
    state.cateNav=cateNav
  },
  [GETCATEDATA](state,cateData){
    state.cateData=cateData
  },
  //值得买页面
  [GETNAVWRAP](state,navWrap){
    console.log(navWrap,'####')
    state.navWrap=navWrap
  },
  [GETRECMANUAL](state,recManual){
    state.recManual=recManual
  },

}