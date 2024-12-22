import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(res => setStudent(res.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = async(id) => {
    try {
      await axios.delete('http://localhost:3000/student/' + id)
      alert("Confirm Delete");
      window.location.reload()
    }catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='d-flex align-items-center justify-content-center vw-100 bg-primary'>
      <div className="bg-white rounded p-4 m-4">
        <Link to='/create' className='btn btn-success mb-2'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
           </thead>
          <tbody>
            {student.map((data, i) => {
              return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Phone}</td>
                <td><Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link></td>
                <td><button className='btn btn-danger' onClick={()=> handleDelete(data.id) }>Delete</button></td>
              </tr>
              )
            })}
           </tbody>
        </table>
      
        
        {/* Pagination */}
        
      </div>
    </div>
  )
}

export default Student













// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Student = () => {
//   const [students, setStudents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // Track the current page
//   const [totalPages, setTotalPages] = useState(1); // Total number of pages
//   const [loading, setLoading] = useState(false);

//   const itemsPerPage = 3; // Number of items to show per page

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Fetch students for the current page
//         const res = await axios.get(`http://localhost:3000/?page=${currentPage}&limit=${itemsPerPage}`);
//         setStudents(res.data);

//         // Fetch total number of records to calculate total pages
//         const totalRes = await axios.get('http://localhost:3000/total-count');
//         const totalRecords = totalRes.data;
//         setTotalPages(Math.ceil(totalRecords / itemsPerPage));
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currentPage]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete('http://localhost:3000/student/' + id);
//       alert("Confirm Delete");
//       // Refresh the current page after delete
//       setCurrentPage(currentPage);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(prevPage => prevPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   return (
//     <div className='d-flex align-items-center justify-content-center vw-100 bg-primary'>
//       <div className="bg-white rounded p-4 m-4">
//         <Link to='/create' className='btn btn-success mb-2'>Add +</Link>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((data, i) => (
//               <tr key={i}>
//                 <td>{data.id}</td>
//                 <td>{data.Name}</td>
//                 <td>{data.Email}</td>
//                 <td>{data.Phone}</td>
//                 <td><Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link></td>
//                 <td><button className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination Controls */}
//         <div className="pagination">
//           <button 
//             onClick={handlePreviousPage} 
//             disabled={currentPage === 1} 
//             className="btn btn-secondary"
//           >
//             Previous
//           </button>
//           <span>{currentPage} / {totalPages}</span>
//           <button 
//             onClick={handleNextPage} 
//             disabled={currentPage === totalPages} 
//             className="btn btn-secondary"
//           >
//             Next
//           </button>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Student;
