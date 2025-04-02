import { useState, useEffect } from 'react'
import catLogo from '../assets/cat.png'
import { ref, push, onValue, remove } from "firebase/database"


export default function ShoppingList({database}) {
    const shoppingListInDB = ref(database, "shoppingList")
    const [shoppingListEl, setShoppingListEl] = useState([])

    useEffect(() => {    
        return onValue(shoppingListInDB, function(snapshot) {
                if (snapshot.exists()) {
                    let itemsArray = Object.entries(snapshot.val())
                
                    clearShoppingListEl()
                    
                    for (let i = 0; i < itemsArray.length; i++) {                
                        appendItemToShoppingListEl(itemsArray[i])
                    }    
                }
            })
      }, []);

    function addToList(formData) {
        const newItem = formData.get("newItem")
        if(newItem === "")
        {
            return;
        }
        
        push(shoppingListInDB, newItem)
    }
    
    function clearShoppingListEl() {
        setShoppingListEl([])
    }
    
    function appendItemToShoppingListEl(item) {
        let itemID = item[0]
        let itemValue = item[1]
        
        let newEl = <li key={itemID} onDoubleClick={() => {remove(ref(database, `shoppingList/${itemID}`))}}>
            {itemValue}
        </li>
        
        setShoppingListEl(prevShoppingListEl => [...prevShoppingListEl, newEl])
    }

    return (
        <main className='shoppingListContainer'>
            <img src={catLogo} />
            <form action={addToList} id='shoppingListAddItemForm'>
                <label htmlFor='newItem'></label>
                <input 
                    type="text" 
                    id="input-field" 
                    placeholder="Breakfast"
                    name="newItem"
                />
                <button 
                    id="add-button"
                >
                    Add to Shopping List
                </button>
            </form>
            <ul id="shopping-list">
                {shoppingListEl}
            </ul>
        </main>
    )
}