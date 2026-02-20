import { useState } from 'react'
import type { Task } from '@/types'
import { TaskInput } from '@/components/TaskInput'
import { TaskList } from '@/components/TaskList'

const initialTasks: Task[] = [
  {
    id: '1',
    text: 'Configurar o ambiente de desenvolvimento',
    completed: true,
  },
  { id: '2', text: 'Criar os componentes da UI', completed: false },
  { id: '3', text: 'Implementar a lógica de estado', completed: false },
]

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
    setTasks((prevTasks) => [newTask, ...prevTasks])
  }

  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <div className="flex flex-col gap-8">
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  )
}

export default Index
