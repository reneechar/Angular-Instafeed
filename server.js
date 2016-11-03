const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./public'));


// app.config(['$httpProvider', function($httpProvider) {
//     $httpProvider.defaults.useXDomain = true;
//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
//   }
// ]);

app.listen(PORT);
