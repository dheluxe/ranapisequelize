module.exports = {
    "development": {
        "databases": {
            "DB1": {
                "database": process.env.RDS_DATABASE1,
                "username": process.env.RDS_USERNAME1,
                "password": process.env.RDS_PASSWORD1,
                "host": process.env.RDS_HOSTNAME1,
                "port": process.env.RDS_PORT1,
                "dialect": "mssql"
            },
            "DB2": {
                "database": process.env.RDS_DATABASE2,
                "username": process.env.RDS_USERNAME2,
                "password": process.env.RDS_PASSWORD2,
                "host": process.env.RDS_HOSTNAME2,
                "port": process.env.RDS_PORT2,
                "dialect": "mssql"
            },
            "DB3": {
                "database": process.env.RDS_DATABASE3,
                "username": process.env.RDS_USERNAME3,
                "password": process.env.RDS_PASSWORD3,
                "host": process.env.RDS_HOSTNAME3,
                "port": process.env.RDS_PORT3,
                "dialect": "mssql"
            },
            "DB4": {
                "database": process.env.RDS_DATABASE4,
                "username": process.env.RDS_USERNAME4,
                "password": process.env.RDS_PASSWORD4,
                "host": process.env.RDS_HOSTNAME4,
                "port": process.env.RDS_PORT4,
                "dialect": "mssql"
            },
            "DB5": {
                "database": process.env.RDS_DATABASE5,
                "username": process.env.RDS_USERNAME5,
                "password": process.env.RDS_PASSWORD5,
                "host": process.env.RDS_HOSTNAME5,
                "port": process.env.RDS_PORT5,
                "dialect": "mssql"
            },
        },
    }
}