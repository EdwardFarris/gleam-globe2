module.exports=
{
 
    "development": {
 
        "username": process.env.MYSQL_USER,
 
        "password": process.env.MYSQL_KEY,
 
        "database": process.env.MYSQL_DBNAME,
 
        "host": process.env.MYSQL_HOST,
 
        "dialect": "mysql"
 
    },
 
    "test": {
 
        "username": "",
 
        "password": null,
 
        "database": "",
 
        "host": "",
 
        "dialect": "mysql"
 
    },
 
    "production": {
 
        "username": "",
 
        "password": null,
 
        "database": "",
 
        "host": "127.0.0.1",
 
        "dialect": "mysql"
 
    }
 
}