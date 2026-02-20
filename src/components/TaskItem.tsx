import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Task } from '@/types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

interface TaskItemProps {
  task: Task
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export const TaskItem = ({
  task,
  onToggleTask,
  onDeleteTask,
}: TaskItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
  }

  const handleAnimationEnd = () => {
    if (isDeleting) {
      onDeleteTask(task.id)
    }
  }

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={cn(
        'flex animate-fade-in-down items-center gap-3 rounded-lg bg-card p-3 shadow-light transition-all duration-300',
        isDeleting && 'animate-fade-out-right',
      )}
    >
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={() => onToggleTask(task.id)}
        className="h-5 w-5 rounded-full border-2 border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary"
      />
      <label
        htmlFor={`task-${task.id}`}
        className={cn(
          'flex-1 cursor-pointer text-foreground transition-colors duration-200 ease-in-out',
          task.completed && 'text-muted-foreground line-through',
        )}
      >
        {task.text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        className="h-8 w-8 rounded-full text-destructive/70 transition-all duration-150 ease-out hover:scale-110 hover:bg-destructive/10 hover:text-destructive"
        aria-label="Deletar tarefa"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
