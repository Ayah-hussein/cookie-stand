'usestrict';
let hours = ['6 AM', '7 AM', '7 AM', '7 AM', '10 AM', '11 AM', '12 PM' ,'1 PM' ,'2 PM','3 PM','4 PM','5 PM', '6 PM', '7 PM'];

const seattle = {
  name: 'Seattle' ,
  minCust: 23 ,
  maxCust: 65 ,
  avgCookie: 6.3,
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

seattle.custmer();
seattle.CookiesPerHour();
seattle.list()
function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

    



