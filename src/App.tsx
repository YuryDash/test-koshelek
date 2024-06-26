import './App.css'
import {TextField} from "./components/text-field/text-field.tsx";

function App() {

const onChangeHandler = (value: string) => {

}

  return (
    <>
      <TextField value={'321'} title={'dollar'} onChange={onChangeHandler}/>
      <TextField value={'123'} title={'eur'} onChange={onChangeHandler}/>
    </>
  )
}

export default App
