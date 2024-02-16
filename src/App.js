import { Fragment, useState } from 'react';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";


function App() {

  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuidv4());
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      item: item,
      id: id
    }

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setItem("");
    setId(uuidv4());
    setEditItem(false);
  }

  const handleClearList = () => {
    setItems([]);
    console.log("clicked")
  }

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id)
    setItems(filteredItems);
  }

  const handleEdit = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    const editItem = items.find((item) => item.id === id);
    setEditItem(true);
    setItems(filteredItems);
    setItem(editItem.item);
  }



  return (

    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'>to do input</h3>
          <TodoInput item={item} handleChange={handleChange} handleSubmit={handleSubmit} editItem={editItem} />
          <TodoList items={items} handleClearList={handleClearList} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
