import { useState, type FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface TaskInputProps {
  onAddTask: (text: string) => void
}

export const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTask(text.trim())
      setText('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-12 flex-1 rounded-lg border-border bg-card px-4 text-base transition-colors focus-visible:ring-1 focus-visible:ring-ring"
      />
      <Button
        type="submit"
        className="h-12 rounded-lg bg-primary px-6 font-semibold text-primary-foreground transition-transform duration-150 ease-out hover:scale-[1.02] hover:bg-primary/90"
      >
        Adicionar
      </Button>
    </form>
  )
}
