var express          =  require('express');
var morgan			 = 	require('morgan');
var bodyparser       =  require('body-parser');
var app              =  express();
var ejs              =  require('ejs');
var port             =  process.env.PORT || 7000;

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.render('index.ejs');
});



app.listen(port, function(){
	console.log('app listening on port 7000');
});