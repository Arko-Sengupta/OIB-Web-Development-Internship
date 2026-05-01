import React from 'react'
import Button from './Button'
import '../Styles/Keypad.css'

const BUTTONS = [
  { label: 'sin', val: 'Math.sin(',   cls: 'btn-fn'              },
  { label: 'cos', val: 'Math.cos(',   cls: 'btn-fn'              },
  { label: 'tan', val: 'Math.tan(',   cls: 'btn-fn'              },
  { label: 'π',   val: 'Math.PI',     cls: 'btn-const'           },
  { label: 'ln',  val: 'Math.log(',   cls: 'btn-fn'              },
  { label: 'log', val: 'Math.log10(', cls: 'btn-fn'              },
  { label: '√',   val: 'Math.sqrt(',  cls: 'btn-fn'              },
  { label: 'e',   val: 'Math.E',      cls: 'btn-const'           },
  { label: 'x!',  val: 'factorial(',  cls: 'btn-fn'              },
  { label: '^',   val: '**',          cls: 'btn-op'              },
  { label: '(',   val: '(',           cls: 'btn-op'              },
  { label: ')',   val: ')',           cls: 'btn-op'              },
  { label: 'C',   val: '__clear',     cls: 'btn-danger'          },
  { label: '⌫',  val: '__back',      cls: 'btn-danger'          },
  { label: '/',   val: '/',           cls: 'btn-op'              },
  { label: '×',   val: '*',           cls: 'btn-op'              },
  { label: '7',   val: '7',           cls: 'btn-num'             },
  { label: '8',   val: '8',           cls: 'btn-num'             },
  { label: '9',   val: '9',           cls: 'btn-num'             },
  { label: '−',   val: '-',           cls: 'btn-op'              },
  { label: '4',   val: '4',           cls: 'btn-num'             },
  { label: '5',   val: '5',           cls: 'btn-num'             },
  { label: '6',   val: '6',           cls: 'btn-num'             },
  { label: '+',   val: '+',           cls: 'btn-op'              },
  { label: '1',   val: '1',           cls: 'btn-num'             },
  { label: '2',   val: '2',           cls: 'btn-num'             },
  { label: '3',   val: '3',           cls: 'btn-num'             },
  { label: '=',   val: '__eq',        cls: 'btn-eq'              },
  { label: '0',   val: '0',           cls: 'btn-num btn-zero'    },
  { label: '.',   val: '.',           cls: 'btn-num'             },
]

const Keypad = ({ onInput, onClear, onCalculate, onBack }) => {
  const Handle = (val) => {
    if (val === '__clear') return onClear()
    if (val === '__back')  return onBack()
    if (val === '__eq')    return onCalculate()
    onInput(val)
  }

  return (
    <div className="keypad">
      {BUTTONS.map((btn, i) => (
        <Button
          key={i}
          label={btn.label}
          className={btn.cls}
          onClick={() => Handle(btn.val)}
        />
      ))}
    </div>
  )
}

export default Keypad