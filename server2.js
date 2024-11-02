import { createServer } from 'http';
const PORT = process.env.PORT;

const user = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Fuck Doe'},
]

const server = createServer((req,res) =>{
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user))
        res.end()
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message : "route not found"}))
        res.end()
    }

});


server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});