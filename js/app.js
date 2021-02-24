'usestrict';
let hours = ['6 AM', '7 AM', '7 AM', '7 AM', '10 AM', '11 AM', '12 PM' ,'1 PM' ,'2 PM','3 PM','4 PM','5 PM', '6 PM', '7 PM'];

function sSHOP  (name, minCust, maxCust, avgCookie, custPerHour, SalesOfCookies, totalSales){
  this.name= name ,
  this.minCust= minCust ,
  this.maxCust= maxCust ,
  this.avgCookie= avgCookie,
  this.custPerHour=[],
  this.rCustPerHour =  function()// this function calculates no. of customers per hour 
  {for (let a =0;a<hours.length; a++){
    this.custPerHour.push( getRandomIntInclusive( this.minCust,this.maxCust ) );}
  } ,

  this.SalesOfCookies= function(){         //this function calculates no. of saled cookies
    for ( let i = 0; i < hours.length; i++ ) 
    { let cookies = Math.ceil( getRandomIntInclusive( this.minCust,this.maxCust ) * this.avgCookie ); 
      this.SalesOfCookies.push( cookies );
      this.totalSales += cookies;   
    }
  },
  this.totalSales=  function ()
  {for (let j = 0; j< hours.length; j++){
    const liElement = document.createElement('li');
    list.appendChild(liElement);
    // this.SalesOfCookies ;
    liElement.textContent= `${hours[j]}: ${this.SalesOfCookies[j]} cookies .`;
  
  // this.SalesOfCookies = 0;
  }
  const liElement = document.createElement( 'li' );
  list.appendChild ( liElement );
  liElement.textContent = `Total : ${this.totalSales} cookies .`;
 
  
  /*custmer : function()
  {
    this.custPerHour.push( getRandomIntInclusive( this.minCust,this.maxCust ) );
  },*/

  /*CookiesPerHour: function( ){   
    for ( let i = 0; i < hours.length; i++ ) 
    { let cookies = Math.ceil( getRandomIntInclusive( this.minCust,this.maxCust ) * this.avgCookie ); 
      this.SalesOfCookies.push( cookies );
      this.totalSales += cookies;   
    }},*/

  list : function ( ) //method
  {
    const list = document.getElementById( 'list' );
    const h1Element = document.createElement( 'h1' );
    list.appendChild( h1Element );
    h1Element.textContent = this.name; 


    const ulElement = document.createElement('ul');
    list.appendChild (ulElement);

   
  }
};

sSHOP.custPerHour;
sSHOP.SalesOfCookies;
sSHOP.list()
/*function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}




// TOKYO
/*
const tokyo = {
  name: 'Tokyo' ,
  minCust: 3 ,
  maxCust: 24 ,
  avgCookie: 1.2,
  custPerHour: [] ,
  SalesOfCookies:[] ,
  totalSales: 0,
  custmer : function()
  {
    this.custPerHour.push( getRandomIntInclusive( this.minCust,this.maxCust ) );
  },

  CookiesPerHour: function( ){   
    for ( let i = 0; i < hours.length; i++ ) 
    { let cookies = Math.ceil( getRandomIntInclusive( this.minCust,this.maxCust ) * this.avgCookie ); 
      this.SalesOfCookies.push( cookies );
      this.totalSales += cookies;   
    }},

  list : function() //method
  {
    const list = document.getElementById( 'list' );
    const h1Element = document.createElement( 'h1' );
    list.appendChild( h1Element );
    h1Element.textContent = this.name; 


    const ulElement = document.createElement('ul');
    list.appendChild (ulElement);

    for (let j = 0; j< hours.length; j++){
      const liElement = document.createElement('li');
      list.appendChild(liElement);
      // this.SalesOfCookies ;
      liElement.textContent= `${hours[j]}: ${this.SalesOfCookies[j]} cookies .`;
    
    // this.SalesOfCookies = 0;
    }
    const liElement = document.createElement( 'li' );
    list.appendChild ( liElement );
    liElement.textContent = `Total : ${this.totalSales} cookies .`;
  }
};

tokyo.custmer();
tokyo.CookiesPerHour();
tokyo.list()
function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}







//DUBAI



const dubai = {
  name: 'Dubai' ,
  minCust: 11 ,
  maxCust: 38 ,
  avgCookie: 3.7,
  custPerHour: [] ,
  SalesOfCookies:[] ,
  totalSales: 0,
  custmer : function()
  {
    this.custPerHour.push( getRandomIntInclusive( this.minCust,this.maxCust ) );
  },

  CookiesPerHour: function( ){   
    for ( let i = 0; i < hours.length; i++ ) 
    { let cookies = Math.ceil( getRandomIntInclusive( this.minCust,this.maxCust ) * this.avgCookie ); 
      this.SalesOfCookies.push( cookies );
      this.totalSales += cookies;   
    }},

  list : function() //method
  {
    const list = document.getElementById( 'list' );
    const h1Element = document.createElement( 'h1' );
    list.appendChild( h1Element );
    h1Element.textContent = this.name; 


    const ulElement = document.createElement('ul');
    list.appendChild (ulElement);

    for (let j = 0; j< hours.length; j++){
      const liElement = document.createElement('li');
      list.appendChild(liElement);
      // this.SalesOfCookies ;
      liElement.textContent= `${hours[j]}: ${this.SalesOfCookies[j]} cookies .`;
    
    // this.SalesOfCookies = 0;
    }
    const liElement = document.createElement( 'li' );
    list.appendChild ( liElement );
    liElement.textContent = `Total : ${this.totalSales} cookies .`;
  }
};

dubai.custmer();
dubai.CookiesPerHour();
dubai.list()
function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}







//PARIS






const paris = {
  name: 'Paris' ,
  minCust: 20 ,
  maxCust: 38 ,
  avgCookie: 2.3,
  custPerHour: [] ,
  SalesOfCookies:[] ,
  totalSales: 0,
  custmer : function()
  {
    this.custPerHour.push( getRandomIntInclusive( this.minCust,this.maxCust ) );
  },

  CookiesPerHour: function( ){   
    for ( let i = 0; i < hours.length; i++ ) 
    { let cookies = Math.ceil( getRandomIntInclusive( this.minCust,this.maxCust ) * this.avgCookie ); 
      this.SalesOfCookies.push( cookies );
      this.totalSales += cookies;   
    }},

  list : function() //method
  {
    const list = document.getElementById( 'list' );
    const h1Element = document.createElement( 'h1' );
    list.appendChild( h1Element );
    h1Element.textContent = this.name; 


    const ulElement = document.createElement('ul');
    list.appendChild (ulElement);

    for (let j = 0; j< hours.length; j++){
      const liElement = document.createElement('li');
      list.appendChild(liElement);
      // this.SalesOfCookies ;
      liElement.textContent= `${hours[j]}: ${this.SalesOfCookies[j]} cookies .`;
    
    // this.SalesOfCookies = 0;
    }
    const liElement = document.createElement( 'li' );
    list.appendChild ( liElement );
    liElement.textContent = `Total : ${this.totalSales} cookies .`;
  }
};

paris.custmer();
paris.CookiesPerHour();
paris.list()
function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}




//LIMA





const lima = {
  name: 'Lima' ,
  minCust: 2 ,
  maxCust: 16 ,
  avgCookie: 4.6,
  custPerHour: [] ,
  SalesOfCookies:[] ,
  totalSales: 0,
  custmer : function()
  {
    this.custPerHour.push( getRandomIntInclusive( this.minCust,this.maxCust ) );
  },

  CookiesPerHour: function( ){   
    for ( let i = 0; i < hours.length; i++ ) 
    { let cookies = Math.ceil( getRandomIntInclusive( this.minCust,this.maxCust ) * this.avgCookie ); 
      this.SalesOfCookies.push( cookies );
      this.totalSales += cookies;   
    }},

  list : function() //method
  {
    const list = document.getElementById( 'list' );
    const h1Element = document.createElement( 'h1' );
    list.appendChild( h1Element );
    h1Element.textContent = this.name; 


    const ulElement = document.createElement('ul');
    list.appendChild (ulElement);

    for (let j = 0; j< hours.length; j++){
      const liElement = document.createElement('li');
      list.appendChild(liElement);
      // this.SalesOfCookies ;
      liElement.textContent= `${hours[j]}: ${this.SalesOfCookies[j]} cookies .`;
    
    // this.SalesOfCookies = 0;
    }
    const liElement = document.createElement( 'li' );
    list.appendChild ( liElement );
    liElement.textContent = `Total : ${this.totalSales} cookies .`;
  }
};

lima.custmer();
lima.CookiesPerHour();
lima.list()
function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}











