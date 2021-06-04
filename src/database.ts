import mongoose, {ConnectOptions} from 'mongoose';
import config from './config';

(async () => {

    try {
        const mongooseOptions: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
    
        console.log('DB CONECTADA a: ', db.connection.name);
    } catch (error) {
        console.error(error);
    }
    
})();