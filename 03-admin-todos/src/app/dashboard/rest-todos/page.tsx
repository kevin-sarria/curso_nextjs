export const dynamic = 'force-dynamic'
export const revaldiate = 0

import { TodosGrid } from "@/app/todos"
import { NewTodo } from "@/components"
import prisma from "@/lib/prisma"

export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title'
}

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      {/* Formulario para agregar nuevos todos */}
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  )
}
