import {Sequelize} from "sequelize";

const db = new Sequelize('logres','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;