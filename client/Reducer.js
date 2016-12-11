import {LOAD_PINTEREST_IMAGES, LOADED_PINTEREST_IMAGES} from './Action.js'
const Reducer=(state = {}, action={})=> {
    switch (action.type) {
        case LOADED_PINTEREST_IMAGES:
            return Object.assign({}, state, {loadedPinterestImages:action.results});
        default:
            return state
    }
}
export default Reducer
