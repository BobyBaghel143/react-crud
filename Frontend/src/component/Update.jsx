import axios from 'axios';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();

  const { id } = useParams();           // use for update data 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/update/`+id, {name, email, phone})
    .then((res) => {
      console.log(res)
      alert("Confirm Update")
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className='d-flex align-items-center justify-content-center vw-100 vh-100 bg-primary'>
      <div className="bg-white rounded p-4 text-start">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' className='form-control' placeholder='Name' onChange={e => setName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="text" name='email' id='email' className='form-control' placeholder='Email' onChange={e => setEmail(e.target.value)}  required/>
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone</label>
            <input type="text" name='phone' id='phone' className='form-control' placeholder='Phone' onChange={e => setPhone(e.target.value)}  required/>
          </div>
          <button className='btn btn-success'>Update Done</button>
        </form>
      </div>
    </div>
  )
}

export default Update
