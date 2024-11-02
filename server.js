import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

console.log(`${__dirname}, ${__filename}`);


const server = http.createServer(async (req,res) => {
    // res.setHeader('Content-Type', 'text/html')

    // res.write('<h1>Hello World</h1>');
    // res.statusCode = 404;    // res.write('<h1>Hello World</h1>');
    // res.statusCode = 404;
    // res.statusMessage = "Fuck You";
    // res.statusMessage = "Fuck You";

    // console.log(req.url);
    // console.log(req.method)
    // console.log(req)


    // res.writeHead(200, "Yesaaaaaaaaaa!!!", {'Content-Type': 'text/html'})

    // res.end('<h1>Hello World</h1>')


    // res.end(JSON.stringify({message: 'Server Error'}));

    try {
        // Check if GET request
        
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/'){
                console.log("One superstar visited the home page")
                filePath = path.join(__dirname,'public','index.html')
                
            }else if(req.url === '/about'){
                console.log("One big head visited the about page");
                filePath = path.join(__dirname,'public','about.html')
            }else{
                throw new Error("Not Found");
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();


        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Server Error')
    }

    // if (req.url === '/'){
    //     console.log("One superstar visited the about page")
    //     res.writeHead(200, 'yay, you made it to the homepage', {'Content-Type': 'text/html'})
    //     res.end('<h1>Homepage</h1>')
        
    // }else if(req.url === '/about'){
    //     console.log("One big head visited the about page");
    //     res.writeHead(200, 'yay, you made it to the About page', {'Content-Type': 'text/html'})
    //     res.end('<h1>About</h1>')
    // }else{
    //     console.log(`${req.url} Not Found`)
    //     res.writeHead(404, 'This page was not found', {'Content-Type': 'text/html'})
    //     res.end('<h1>Not Found</h1>')
    // }
})

server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});