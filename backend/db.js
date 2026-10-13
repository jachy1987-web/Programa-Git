const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "31247luz*****",
    database: "doctor_wilson"
});

conexion.connect((error) => {

    if (error) {
        console.error("Error al conectar con MySQL:", error);
        return;
    }

    console.log("Conexión exitosa con la base de datos Doctor Wilson");
});

module.exports = conexion;