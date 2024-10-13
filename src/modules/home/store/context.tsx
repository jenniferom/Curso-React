import { Dispatch, createContext } from 'react'
import { TAction } from './actions'
import initialState, { HomeStateType } from './initialState'

interface IContextProps {
  state: HomeStateType
  dispatch: Dispatch<TAction>
}
const TodoContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {}
})
export default TodoContext