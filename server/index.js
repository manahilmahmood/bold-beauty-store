import {app} from './app.js'
import { config } from 'dotenv'
import { database } from './config/database.js'

config()
database()


app.listen(7000, () => console.log("Server running at http://localhost:7000"))
