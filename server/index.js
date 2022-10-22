const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
