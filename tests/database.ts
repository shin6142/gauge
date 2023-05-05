import * as mysql2 from 'mysql2/promise'

const host = 'localhost'
const user = 'user'
const password = 'password'
const port = 4306
const database = 'db'
const sql = "select * from attendance where base_date = '2023-04-30'";
const data = ['2023-04-30'];

export const connect = async () => {
    return mysql2.createConnection({host, port, database, user, password, charset:'utf8mb4'})
}
