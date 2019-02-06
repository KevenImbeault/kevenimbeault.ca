let sqlite3 = require('sqlite3').verbose();

$("#login").click(function() {
    let username = $("#exampleInputEmail1").val();
    let password = $("#exampleInputPassword1").val();

    alert(username);



    let db = new sqlite3.Database('./public/db/login.db', (err) => {
        if (err) {
            console.error(err.message);
        }
        alert('Connected to the login database.');
    });

    let sql = 'SELECT Username username, Password password FROM users';

    db.each(sql, function(err, row) {
        if(err){
            console.log(err);
        } else {
            alert(`username : ${row.username} - password : ${row.password}`);
        }
    });

    db.close();
});

//TODO On click of the login button in the login page, print something in the console
//TODO On click of the login button in the login page, print the username and password entered
//TODO On click of the login button, compare the entered values to the db's values, print something depending on the results