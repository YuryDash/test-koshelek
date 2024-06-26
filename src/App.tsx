import './App.css'
import {TextField} from "./components";
import {useAppDispatch, useAppSelector} from "./store/store.ts";
import {changeDollar, changeEuro} from "./store/reducers/exchanger-reducer.ts";

function App() {

  const {euro, dollar} = useAppSelector()
  const dispatch = useAppDispatch()

  const onChangeDollarHandler = (value: string) => {
      dispatch(changeDollar(value))
  }

  const onChangeEuroHandler = (value: string) => {
    dispatch(changeEuro(value))
  }

  return (
    <>
      <TextField value={dollar} title={'dollar'} onChange={onChangeDollarHandler}/>
      <TextField value={euro} title={'euro'} onChange={onChangeEuroHandler}/>
    </>
  )
}

export default App
