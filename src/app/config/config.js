var sequelize = new sequelize("testdb",
"root",
"Sqladmin_1",
{
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    define: {
        schema: "core"
}
});