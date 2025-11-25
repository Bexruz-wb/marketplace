import {connect} from 'mongoose';
import {config} from  "dotenv";
config();

export async function  connectDB() {
    try {
        await connect(process.env.MONGO_URL);
        console.log('MongoDB ga muvaffaqiyatli ulandi');
    } catch (error) {
        console.error('MongoDB ga ulanishda xatolik:', error);
        process.exit(1);
    }
    
}


 