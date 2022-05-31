const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema(
    {
        amount: { type: mongoose.Schema.Types.Number, required: true },
        userId: { type: mongoose.Schema.Types.String, trim: true, required: true },
        discription: { type: mongoose.Schema.Types.String },
        date: { type: mongoose.Schema.Types.Date, required: true },
        categoryId: { type: mongoose.Schema.Types.String, required: true },
    },
    { timestamps: true, versionKey: false },
);
const expenseModel = mongoose.model('expense', expenseSchema);

module.exports = expenseModel;
