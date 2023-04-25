import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI)
        .then(() => {
            console.log('Database CONNECTED')
        })
        .catch(err => console.log('Database ERROR', err))
}

export default connectDatabase
