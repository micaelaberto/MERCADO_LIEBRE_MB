const express = require ('express')
const path = require ('path')
const app = express ()


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.post('/registro', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/users', (req, res) => {
    res.send(users);
});

const port = process.env.PORT || 3001;
app.listen(port, () => 
    console.log(`Servere started on http://localhost:${port}`)
)
