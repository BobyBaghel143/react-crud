const express = require('express')
const cors = require('cors')
const mysql = require('mysql');

const app = express();
app.use(express.json());   // pass our data to json payload.
app.use(cors())

const port = 3000



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});


app.get('/', (req, res) => {
  // res.send('Hello World! Backend Boby')
  const sql = "SELECT * FROM `mydb1`";
  connection.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})


// // set for pagination
// app.get('/', (req, res) => {
//   const page = parseInt(req.query.page) || 1; // Default to page 1 if no page is provided
//   const limit = parseInt(req.query.limit) || 5; // Default to 5 items per page if no limit is provided
//   const offset = (page - 1) * limit; // Calculate offset for pagination

//   const sql = `SELECT * FROM mydb1 LIMIT ${limit} OFFSET ${offset}`;
//   connection.query(sql, (err, data) => {
//     if (err) return res.json("Error");
//     return res.json(data);
//   });
// });

// // You can also add a query to get the total number of records to calculate total pages.
// app.get('/total-count', (req, res) => {
//   const sql = "SELECT COUNT(*) AS total FROM mydb1";
//   connection.query(sql, (err, result) => {
//     if (err) return res.json("Error");
//     return res.json(result[0].total); // Returning the total number of records
//   });
// });



app.post('/create', (req, res) => {
  const sql = "INSERT INTO `mydb1`(`Name`, `Email`, `Phone`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.phone];

  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})


app.put('/update/:id', (req, res) => {
  const sql = "UPDATE `mydb1` SET `Name` = ?, `Email` = ?, `Phone` = ?  WHERE ID = ?";
  const values = [ req.body.name,  req.body.email, req.body.phone ]
  const id = req.params.id;

  connection.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})


app.delete('/student/:id', (req, res) => {
  const sql = 'DELETE FROM `mydb1` WHERE ID = ?'
  const id = req.params.id;

  connection.query(sql, [id], (err, data) => {
    if (err) res.json("Error");
    return res.json(data);
  })
})




// connection.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// connection.end();



// Queries
// SELECT * FROM `mydb1` WHERE 1
// SELECT `id`, `Name`, `Email`, `Phone` FROM `mydb1` WHERE 1
// INSERT INTO `mydb1`(`id`, `Name`, `Email`, `Phone`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')
// UPDATE `mydb1` SET `id`='[value-1]',`Name`='[value-2]',`Email`='[value-3]',`Phone`='[value-4]' WHERE 1
// DELETE FROM `mydb1` WHERE 0
