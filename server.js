var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// ✅ Use dynamic port
const PORT = process.env.PORT || 3000;

// ✅ Bind to 0.0.0.0 (required in cloud)
app.listen(PORT, '0.0.0.0', function () {
  console.log(`Woww! App listening on port ${PORT}`);
});
