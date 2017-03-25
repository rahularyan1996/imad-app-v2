var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
'article-one' : {
    title:'Article One',
    heading:'My first Blog Article.',
    date: '25-03-2017',
    content:` 
                <p>There was once a time when the Indian Cricket Team was simply filled with the city kids. Due to excellent infrastructure and good scope for the game in cities, many small town boys would not succeed defeating them in the Ranji Trophy. But this man proved it all wrong. MSD had seen a dream, which many feared to see.
                    
                </p>
                <p>Hailing from a very small town of Ranchi, Dhoni dared to dream and with courage and guts make that dream a reality. Since a very young age, he idolized Sachin Tendulkar who is known as the God of Cricket and Bollywood actor Amitabh Bachchan. He started his career as a Ticket Collector in Indian Railways. His hard work and never-give-up spirit finally landed him in International Cricket in 2003.
                    
                </p>
                <p>Dhoni started making rounds for his cool attitude – something we all most aspire to emulate. We would find him with a smile even in the toughest of games. This calm attitude of his landed him as the Captain of the team. He had not only made his dream of playing alongside his idol Sachin a reality but had become his captain.
                    
                </p>`
    
    
},
'article-two' :{
    title:'Article Two',
    heading:'My Second Blog Article.',
    date: '26-03-2017',
    content:` 
                <p>We all have come across one person who has this amazing ability to know and understand you well. These people leave you with a lot of warmth and every interaction with them makes you feel more comfortable. They are positive and since they themselves are sensitive they communicate with care and are able to consider others feelings – they are what we call highly sensitive people.
            </p>
            <p>They are able to manage conflicts between people effectively. Why? Because they have a keen eye for observation and details, and their involved behavior helps them to diffuse the tensions quickly.
            </p>
            <p>Dhoni started making rounds for his cool attitude – something we all most aspire to emulate. We would find him with a smile even in the toughest of games. This calm attitude of his landed him as the Captain of the team. He had not only made his dream of playing alongside his idol Sachin a reality but had become his captain.
                
            </p>`
    
    
},
'article-three':{
     title:'Article Three',
    heading:'My Third Blog Article.',
    date: '27-03-2017',
    content:` 
                <p>A lot of philanthropy and humanitarian work is a result of efforts made by highly sensitive individuals.These people have a sense of purpose and want to make a difference in others lives and are able to give up their comforts for the achieving the same.        
            </p>
            <p>They are intense people – they feel deeply for things and they do things with involvement and are passionate about what they want to do. They are perceptive and active and want to find ways to deal with the challenges.   
            </p>
           <p>They like to involve others and help them develop and grow in work. If you have made a mistake, instead of flaring up at you, they will actually try to help you understand your mistakes and instill confidence back in you.   
            </p>`
    
    
}
};
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate= `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <h2>
                ${heading}
            </h2>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>



`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
