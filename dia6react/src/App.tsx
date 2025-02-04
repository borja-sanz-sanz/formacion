import { Counter } from "./components/CustomHooks/Counter"
import { FetchPosts } from "./components/CustomHooks/FetchPosts"
import { Users } from "./components/CustomHooks/Users"
import { Callback } from "./components/MemoCallback/Callback"
import { Memo } from "./components/MemoCallback/Memo"
import { SumMemo } from "./components/MemoCallback/SumMemo"
import { PersonApp } from "./components/PersonContextReducer/PersonApp"


function App() {

  return (
    <>
     <PersonApp/>
     <Counter/>
     {/* <Users/> */}
     {/* <FetchPosts /> */}
     {/* <Memo/> */}
     <SumMemo/>
     <Callback />
    </>
  )
}

export default App
