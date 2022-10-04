const app = require('./Requires');
const connection = require('./connection');
const port = process.env.PORT || 3000;
const host = 'localhost';
app.listen(port,host,()=>{
    console.log('listening on port ',port);
});