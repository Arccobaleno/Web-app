const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
