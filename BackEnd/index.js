const app = require('./Requires');
const connection = require('./connection');
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})