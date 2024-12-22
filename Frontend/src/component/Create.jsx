import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/create', { name, email, phone })
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err));
  }
 
  return (
    <div className='d-flex align-items-center justify-content-center vw-100 vh-100 bg-primary'>
      <div className="bg-white rounded p-4 text-start">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' className='form-control' placeholder='Name' onChange={e => setName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="email" name='email' id='email' className='form-control' placeholder='Email' onChange={e => setEmail(e.target.value)}  required/>
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone</label>
            <input type="tele" name='phone' id='phone' className='form-control' placeholder='Phone' onChange={e => setPhone(e.target.value)}  required/>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
