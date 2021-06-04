import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'video-type-react',
    MONGO_USER: process.env.MONGO_USER || 'pipegoods',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD ||'andres123',
    MONGO_HOST: process.env.MONGO_HOST ||'cluster0.ye6ov.mongodb.net',
    PORT: process.env.PORT || 3001
}