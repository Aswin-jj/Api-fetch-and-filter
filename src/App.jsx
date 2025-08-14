import { greasemonkey } from "globals";
import { useEffect,useState } from "react";
const Todos =() => {
const [todos, setTodos] = useState([]);
const[filteredTodos,setFilteredTodos]=useState([])

async function fetchData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await  response.json()
  setTodos(data);
  setFilteredTodos(data);
}
useEffect(() => {
  fetchData();
}, []);
return(
  <div>
    

<button  style={{background:"black",color:"white",borderRadius: "5px",cursor:"pointer"}}onClick={() => setFilteredTodos(todos.filter(todo => todo.userId === 1))}>user 1</button>
<button style={{background:"black",color:"white",borderRadius: "5px",cursor:"pointer"}}onClick={() => setFilteredTodos(todos.filter(todo => todo.userId === 2))}>user 2</button>
<button style={{background:"black",color:"white",borderRadius: "5px",cursor:"pointer"}}onClick={() => setFilteredTodos(todos.filter(todo => todo.userId === 3))}>user 3</button>
<button style={{background:"black",color:"white",borderRadius: "5px",cursor:"pointer"}}onClick={() => setFilteredTodos(todos.filter(todo => todo.userId === 4))}>user 4</button>
<button style={{background:"black",color:"white",borderRadius: "5px",cursor:"pointer"}}onClick={() => setFilteredTodos(todos)}>ALL Todos</button>


{filteredTodos.map(todo =>
<div key={todo.id}>
  <p> <input type="checkbox" checked={todo.completed}/>{todo.title}</p>
  

</div>
)}
</div>
)
}
export default Todos;