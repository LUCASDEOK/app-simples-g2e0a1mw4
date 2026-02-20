import type { Task } from '@/types'
import { TaskItem } from '@/components/TaskItem'

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export const TaskList = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg bg-card p-4">
        <p className="italic text-muted-foreground">
          Nenhuma tarefa por enquanto. Adicione uma!
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}
