import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";

import Student from './component/Student';
import Create from './component/Create';
import Update from './component/Update';

function App() {

  return (
    <>

      {/* <div className="container mt-5">
        <h2 className="text-center mb-4">User Information</h2>

        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
