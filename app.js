const express = require('express');

const AppError = require('./utils/appError');
const taskRouter = require('./Routes/taskRoutes')



const app = express();

//middleware
app.use(express.json());


//Routes
app.use('/api/v1/tasks' , taskRouter);


app.all('*', (req, res, next) => {                              
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));         
  });     
      

module.exports=app;
