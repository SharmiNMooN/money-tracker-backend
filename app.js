const express = require('express');
const categoryRouter = require('./modules/category/category.route');
const incomeRouter = require('./modules/income/income.route');
const expenseRouter = require('./modules/expense/expense.route');
const authRouter = require('./modules/auth/auth.route');
const { connectDB } = require('./config/db');

const app = express();
const port = 4000;
connectDB()
    .then(() => {
        console.log('database connect successfully');
    })
    .catch((err) => {
        console.log('An error occur while connected databse', err);
    });

app.use(express.json());

app.get('/', (req, res) => {
    return res.send({
        success: true,
        message: 'welcome to money tracker service',
    });
});
app.use('/',authRouter);
app.use('/', categoryRouter);
app.use('/', incomeRouter);
app.use('/', expenseRouter);
app.listen(port, () => {
    console.log(`server is running in port ${port}`);
});
