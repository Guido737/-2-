import mongoose from 'mongoose';

export default async () => {
    if (mongoose.connections[0].readyState) return;
    // Using new database connection
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
};