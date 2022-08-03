import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, CloseButton  } from 'react-bootstrap'
import '../../App.css'
import './PopUp.css'

export default function PopUp(props) {

    const initialFormState = {
      task1: '',
      task2: '',
      task3: '',
    }

    const [formData, setFormData] = useState({...initialFormState})

    const handleChange = ({ target }) => {
      setFormData({ ...formData, [target.name]: target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.setModalShow(false)
      const values = Object.values(formData)
      props.setTasks(values)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-gray">
          <Modal.Title id="contained-modal-title-vcenter" className="text">
            Add Tasks
          </Modal.Title>
          <CloseButton onClick={() => props.setModalShow(false)}/>
        </Modal.Header>
        <Modal.Body className="styled-background">
          <form className='text-center text'>
            <label htmlFor='task1'>
                Task 1
                <input type='text' id='task1' name='task1' className='m-2' onChange={handleChange} />
            </label>
            <label htmlFor='task2'>
                Task 2
                <input type='text' id='task2' name='task2' className='m-2' onChange={handleChange} />
            </label>
            <label htmlFor='task3'>
                Task 3
                <input type='text' id='task3' name='task3' className='m-2' onChange={handleChange} />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer className="d-flex bg-gray">
          <Button type='button' onClick={handleSubmit} className="btn-secondary metalfont col btn p-0"><span>submit</span></Button>
        </Modal.Footer>
      </Modal>
    );
}