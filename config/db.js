const mongoose = require('mongoose');
module.exports.connectDB = () => {
    const url =
        'mongodb+srv://sharmin:12345@cluster0.2jy8q.mongodb.net/money_tracker_db?retryWrites=true&w=majority';

    return mongoose.connect(url, {
        UseNewUrlParser: true,
    });
};
