import http from 'http';

const PORT = 8000;

const server = http.createServer((req,res) => {
    // res.setHeader('Content-Type', 'text/html')

    // res.write('<h1>Hello World</h1>');
    // res.statusCode = 404;    // res.write('<h1>Hello World</h1>');
    // res.statusCode = 404;
    // res.statusMessage = "Fuck You";
    // res.statusMessage = "Fuck You";

    res.writeHead(500, "fuckkkk!!!", {'Content-Type': 'application/json'})


    res.end(JSON.stringify({message: 'Server Error'}));
})

server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});