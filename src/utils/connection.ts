import mongoose, { ConnectOptions } from 'mongoose';

mongoose.connect(
    //link server
    {
        useNewUrlParser: true, // Para que o mongoose entenda o mongodb+srv
        useUnifiedTopology: true,
    } as ConnectOptions,
);

