import { Description, Dialog, DialogPanel, DialogTitle,DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'
import Form from '../Form/Form'
import EmiCalculator from '../EmiCalculator/EmiCalculator'
import './Modal.css'
function Modal() {
  const handelSubmit=(e)=>{
    e.preventDefault();
    setIsOpen(false);
  }
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="emi-btn" onClick={() => setIsOpen(true)}>
            BMI Calculator
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
            
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            
            <EmiCalculator/>
            <button className='emi-cal-btn' onClick={(e)=>handelSubmit(e)}>Done</button>
          </DialogPanel>
          
        </div>
      </Dialog>
    </>
  )
}

export default Modal;