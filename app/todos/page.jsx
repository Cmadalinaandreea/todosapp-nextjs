import DeleteTodo from "@/components/DeleteTodo";

async function Todospage() {
  const response = await fetch("http://localhost:3000/api/todos", 
  {
    cache : "no-store"
  })
  
  const data = await response.json()

  console.log(data);
  
  return (
    <section className="mt-24 w-full h-full flex justify-center">
      <table className="min-w-max bg-white border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100 text-gray-900 uppercase text-sm leading-normal">
      <tr className="bg-gray-100 text-gray-900 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">ID</th>
        <th className="py-3 px-6 text-left">Name</th>
        <th className="py-3 px-6 text-left">Action</th>
      </tr>
      </thead>
      <tbody className="text-gray-900 text-sm font-light">
        {data.todos.map((todo)=>(
          <tr key={todo.id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-6 py-3">
              {todo.id}
            </td>
            <td className="px-6 py-3">
              {todo.name}
            </td>
            <td className="px-6 py-3">
              <DeleteTodo id={todo.id}/>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </section>
  )
}

export default Todospage