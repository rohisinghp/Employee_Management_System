import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskContext from './context/TaskContext.jsx'
import AuthConetext from './context/AuthConetext.jsx'

createRoot(document.getElementById('root')).render(

  <AuthConetext>
    <TaskContext>
      <App />
      </TaskContext>
  </AuthConetext>


)
