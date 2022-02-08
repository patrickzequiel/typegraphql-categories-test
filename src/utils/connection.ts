import mongoose, { ConnectOptions } from 'mongoose';

mongoose.connect(
    'mongodb+srv://patrickcruz:TXym41SRwCctcNzq@cluster0.57a3n.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, // Para que o mongoose entenda o mongodb+srv
        useUnifiedTopology: true,
    } as ConnectOptions,
);

