module.exports = {
    name: "cubezixpatientAPI",
    api_key: "cubezixpatient",
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || "http://localhost:3000",
    database: process.env.MYSQLDB || 'cubezix',
    // db: {
    //     host: process.env.DB_HOST || 'localhost',
    //     user: process.env.DB_USER || 'root',
    //     password: process.env.DB_PSW || '',
    //     port: process.env.DB_PORT || 3306, //port mysql
    //     database: process.env.DB_NAME || 'localdb'
    
    // },
    // db: {
    //     host: process.env.DB_HOST || 'db4free.net',
    //     user: process.env.DB_USER || 'test_cubezix',
    //     password: process.env.DB_PSW || 'test@1234',
    //     port: process.env.DB_PORT || 3306, //port mysql
    //     database: process.env.MYSQLDB || 'cubezix'
       
    //  },
    
    mysqlConn:process.env.MYSQLCONN || "mysql://test_cubezix:test@1234@db4free.net:3306/cubezix"
 
}