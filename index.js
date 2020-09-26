const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('I know to how to open Node yeaaahoooo')
})

app.listen(4000, () => console.log('listening port to 4000'))