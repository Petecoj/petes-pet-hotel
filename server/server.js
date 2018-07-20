const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const hotelRouter = require('./routes/hotel.router.js');
const ownerRouter = require('./routes/owner.router.js')


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/pets', hotelRouter)
app.use('/owners', ownerRouter)

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
});