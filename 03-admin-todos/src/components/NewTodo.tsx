'use client'

import { addTodo, deleteTodos } from "@/app/todos/actions/todo-actions"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { IoTrashOutline } from "react-icons/io5"

// import * as todosApi from '@/app/todos/helpers/todos'



export const NewTodo = () => {

    const router = useRouter()

    const [description, setDescription] = useState<string>('')

    const onSubmit = async(e: FormEvent) => {
        e.preventDefault()

        if( description.trim().length == 0 ) return
        await addTodo(description)
        setDescription('')
    }

    const deleteTodosCompleted = async() => {
        await deleteTodos()
    }

  return (
    <form onSubmit={onSubmit} className='flex w-full'>
      <input type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 bg-white border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 px-2 text-white hover:bg-sky-700 transition-all hover:cursor-pointer">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        //TODO: onClick={ () => deleteCompleted() }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        <span className="ml-2" onClick={() => deleteTodosCompleted()}>Borrar Completados</span>
      </button>


    </form>
  )
}