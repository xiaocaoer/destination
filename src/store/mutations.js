import {
  GETINDEXDATA,
  GETINDEXNAV,
  GETCATENAV,
  GETCATEDATA,
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

}