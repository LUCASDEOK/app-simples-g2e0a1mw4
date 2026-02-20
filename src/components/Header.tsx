import { memo } from 'react'

export const Header = memo(() => {
  return (
    <header className="sticky top-0 z-10 h-16 w-full border-b bg-background/80 px-4 backdrop-blur-sm md:h-16 md:px-6">
      <div className="flex h-full items-center justify-center">
        <h1 className="text-xl font-bold md:text-2xl">Minhas Tarefas</h1>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
