import { combineReducers } from 'redux'
import { reducer as projetos } from './projetos'
import { reducer as skill } from './skill'
import { reducer as formulario } from './formulario'


export default combineReducers({
    projetos,skill,formulario
})