import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '@/router/routes'
import { CommandMenu } from '@/components/CommandMenu'
import { Toaster } from '@/components/ui/sonner'
import { BGPattern } from '@/components/ui/bg-pattern'

function App() {
  return (
    <div className="dark relative min-h-screen bg-background text-foreground">
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        size={80} 
        fill="rgba(139, 92, 246, 0.03)" 
        className="fixed inset-0 z-[-20]" 
      />
      <Router>
        <CommandMenu />
        <AppRoutes />
        <Toaster />
      </Router>
    </div>
  )
}

export default App
