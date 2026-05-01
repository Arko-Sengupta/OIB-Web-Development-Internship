import React, { useState } from 'react'
import './Styles/App.css'
import TributeVault from './Pages/TributeVault/TributeVault'
import ScientificCalculator from './Pages/Calculator/ScientificCalculator'
import TodoApp from './Pages/ToDo/TodoApp'

const TASKS = [
  { id: 'tribute',    label: 'Tribute Vault' },
  { id: 'calculator', label: 'Calculator'    },
  { id: 'todo',       label: 'ToDo'          },
]

const App = () => {
  const [active, setActive] = useState('tribute')

  return (
    <>
      <nav className="app-nav">
        <span className="app-nav__brand">OIB Internship</span>
        <div className="app-nav__tabs">
          {TASKS.map((t) => (
            <button
              key={t.id}
              className={`app-nav__tab${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="app-content">
        {active === 'tribute'    && <div className="task-view"><TributeVault /></div>}
        {active === 'calculator' && <div className="task-view"><ScientificCalculator /></div>}
        {active === 'todo'       && <div className="task-view"><TodoApp /></div>}
      </main>
    </>
  )
}

export default App
