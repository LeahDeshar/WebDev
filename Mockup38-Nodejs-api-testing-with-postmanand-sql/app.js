const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');

const app = express();


const PORT = process.nextTick.PORT || 5000;
app.use(bodyParser.urlencoded({extended : false }));


app.use(bodyParser.json());
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

// MYSQL Connection

const db = mysql.createPool({
    // connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password: 'password',
    port: 3306,
    database: 'nodejsApi',

})


app.get("/users",(req,res) => 
{
    db.getConnection((err,conn) =>
    {
        if(err) throw err;
        console.log(`Connected as id ${conn.threadId}`);
        conn.query("SELECT * FROM test",(err,rows)=>
        {
            conn.release()

            if(!err)
            {
                res.send(rows);
            }
            else 
            {
                console.log(err);
            }
        })
    })
})


// get specific users

app.get("/users/:id",(req,res) => 
{
    db.getConnection((err,conn) =>
    {
        if(err) throw err;
        // console.log(`Connected as id ${conn.threadId}`);
        let qry = "select * from test where id=?"
        conn.query(qry,[req.params.id],(err,rows)=>
        {
            conn.release()

            if(!err)
            {
                res.send(rows);
            }
            else 
            {
                console.log(err);
            }
        })
    })
})


// delete specific users

app.delete("/users/:id",(req,res) => 
{
    db.getConnection((err,conn) =>
    {
        if(err) throw err;
        let qry = "delete from test where id=?"
        conn.query(qry,[req.params.id],(err,rows)=>
        {
            conn.release()

            if(!err)
            {
                res.send(`User with ${req.params.id} has been removed`);
            }
            else 
            {
                console.log(err);
            }
        })
    })
})

// ADD USERS

app.post("/users",(req,res) => 
{
    db.getConnection((err,conn) =>
    {
        if(err) throw err;
        const params = req.body;
        // console.log(`Connected as id ${conn.threadId}`);
        let qry = "Insert into test values(?,?,?,?)";
        conn.query(qry,[params.id,params.name,params.tag,params.age],(err,rows)=>
        {
            conn.release()

            if(!err)
            {
                res.send(`User with name ${params.name} has been added`);
            }
            else 
            {
                console.log(err);
            }
        })
    })
})

