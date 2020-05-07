import {GETINDEXDATA,GETINDEXNAV} from './mutation_types'

export default{
  [GETINDEXDATA](state,indexData){
    state.indexData=indexData
  },
  [GETINDEXNAV](state,indexNav){
    state.indexNav=indexNav
  }
}