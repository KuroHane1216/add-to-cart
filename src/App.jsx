
import ShoppingList from './components/ShoppingList'
import './App.css'
import cong from "./configuration"
import { getDatabase } from "firebase/database";
//import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

function App() {
  const database = getDatabase(cong)

  return (
    <>
      <ShoppingList database={database}/>
    </>
  )
}

export default App
