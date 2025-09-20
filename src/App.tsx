import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '@/router/routes'
import { CommandMenu } from '@/components/CommandMenu'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <div className="dark">
      <Router>
        <CommandMenu />
        <AppRoutes />
        <Toaster />
      </Router>
    </div>
  )
}

export default App
