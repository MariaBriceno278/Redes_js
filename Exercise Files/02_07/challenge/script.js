var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};


  
          var facebook = document.createElement("IMG");
          facebook.setAttribute("src", "images/facebook.png");
          facebook.setAttribute("alt", "facebook");
          
          facebook.id=('facebook');
         
          $("#facebook").wrap($("<a>").attr("href", "http://facebook.com/viewsource"));
       


 
          var twitter = document.createElement("IMG");
          twitter.setAttribute("src", "images/twitter.png");
          twitter.setAttribute("alt", "twitter");

          var flickr = document.createElement("IMG");
          flickr.setAttribute("src", "images/flickr.png");
          flickr.setAttribute("alt", "flickr");
          
          var youtube = document.createElement("IMG");
          youtube.setAttribute("src", "images/youtube.png");
          youtube.setAttribute("alt", "youtube");
          
  var nav = document.createElement("NAV");
  nav.className=('socialmediaicons');
  document.body.appendChild(nav);

  var ul = document.createElement("UL");
  
  document.querySelector('nav').appendChild(ul); 
  
  
  var li1 = document.createElement("LI");
  li1.id=('li1');
  document.querySelector('ul').appendChild(li1); 

  var li2 = document.createElement("LI");
  li2.id=('li2');
  document.querySelector('ul').appendChild(li2); 

  var li3 = document.createElement("LI");
  li3.id=('li3');
  document.querySelector('ul').appendChild(li3); 


  var li4 = document.createElement("LI");
  li4.id=('li4');
  document.querySelector('ul').appendChild(li4); 

     var f1=document.getElementById("li1");

     var t2=document.getElementById("li2");

     var f3=document.getElementById("li3");

     var y4=document.getElementById("li4")

            f1.appendChild(facebook); 


            t2.appendChild(twitter); 

            f3.appendChild(flickr); 

            y4.appendChild(youtube); 

