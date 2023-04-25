const express = require("express");


const app = express();
const port = 3000;
const mysql =require("./connection").con;


app.set("view engine","hbs");
app.set("views","./views")
app.use(express.static(__dirname + "/public"))


// app.use(express.urlencoded())
// app.use(express.json()) 


// configuration

// Routing
app.get("/",(req,res) => 
{ 
    // res.send("Hello you'r running server:3000");

    // render() is used to covert the hbs to the html file
    res.render("index");
});

app.get("/add",(req,res) => 
{ 
    res.render("add");
});
app.get("/delete",(req,res) => 
{ 
    res.render("delete");
});
app.get("/update",(req,res) => 
{ 
    res.render("update");
});
app.get("/display",(req,res) => 
{ 
    let qry = "select * from test";
    mysql.query(qry,(err,results)=>
    {
        if(err) throw err;
        else 
        {
            res.render("display",{data:results});
        }
    });
});
app.get("/search",(req,res) => 
{ 
    res.render("search");
});
app.get("/addstudent",(req,res)=>
{
    const {name,phone,email,gender} = req.query
    // res.send(`${name}  ${phone}  ${email}  ${gender}`);

    // Sanitization to prevent xss..
    let qry = "select * from test where emailid=? or phoneno=?";
    mysql.query(qry,[email,phone],(err,results)=>
    {
        if(err) throw err;
        else 
        {
            if(results.length > 0)
            {
                res.render("add",{checkmesg: true})

            }
            else 
            {
                let qry2 = "insert into test values(?,?,?,?)";
                mysql.query(qry2,[name,phone,email,gender],(err,results) =>
                {
                    if(results.affectedRows > 0)
                    {
                        res.render("add",{mesg:true})
                    }
                    // res.send(results)
                })
            }
        }
        
    })

})


app.get("/searchstudent",(req,res) =>
{
    // fetch data 
    const {phone} =req.query;

    let qry = "select * from test where phoneno=?";
    mysql.query(qry,[phone],(err,results)=>
    {
        if(err)throw err;
        else 
        {
            if(results.length > 0)
            {
                res.render("search",{mesg1: true,mesg2:false})
            }
            else 
            {
                res.render("search",{mesg1: false,mesg2:true})

            }
        }
    })
})

app.get("/updatesearch",(req,res) =>
{
    const {phone} =req.query;

    let qry = "select * from test where phoneno=?";
    mysql.query(qry,[phone],(err,results)=>
    {
        if(err)throw err;
        else 
        {
            if(results.length > 0)
            {
                res.render("update",{mesg1: true,mesg2:false,data: results})
            }
            else 
            {
                res.render("update",{mesg1: false,mesg2:true})

            }
        }
    })
})

app.get("/updatestudent",(req,res) =>
{
     const {phone,name,gender} = req.query;
     let qry ="update test set username=?,gender=? where phoneno=?";

     mysql.query(qry,[name,gender,phone],(err,results) =>
     {
        if(err) throw err;
        else 
        {
            if(results.affectedRows > 0)
            {
                res.render("update",{umesg: true})
            }
        }
     })
})


app.get("/remove",(req,res) =>
{
    const {phone} =req.query;

    let qry = "delete from test where phoneno=?";
    mysql.query(qry,[phone],(err,results)=>
    {
        if(err)throw err;
        else 
        {
            if(results.affectedRows > 0)
            {
                res.render("delete",{mesg1: true,mesg2:false})
            }
            else 
            {
                res.render("delete",{mesg1: false,mesg2:true})

            }
        }
    })
})


app.listen(port,(err) =>
{
    if(err)throw err;

    console.log("Server running ...");
})