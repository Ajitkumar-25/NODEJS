//connect node to mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'try123'
});
connection.connect(function (err) {
    if (err) {
        console.warn('error connecting');
    }
    else
    {
        console.warn("connected");
    }
}
);

connection.query("select * from customer",(err,result)=>{
    console.log("result",result);
})



