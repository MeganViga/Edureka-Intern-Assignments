class restaurantManager
{   
    constructor() {
        this.restaurantlist = [{
            name:"Foodie",
            address:"No:1,1st street,Bailwan Nagar",
            city:"Mumbai"
        },
        {
            name:"Juicie",
            address:"No:2,2nd street,Fruit Nagar",
            city:"Chandigarh"
        },
        {
            name:"Chicken_Soup",
            address:"No:3,3rd street,Veg Nagar",
            city:"Chennai"
        },
        {
            name:"Veg_Soup",
            address:"No:4,4th street,Non-veg Nagar",
            city:"Chennai"
        }];
      }
    printAllRestaurantsNames()
    {
        console.log("Restaurant List")
        console.log("---------------")
        for(var i = 0; i < this.restaurantlist.length; i++)
        {
            console.log(this.restaurantlist[i].name);
        }
    }
    filterRestaurantByCity(cityname)
    {   console.log();
        console.log("/////////////////////////////////////////////");
        console.log();
        console.log(`Restaurant list in ${cityname}` );
        console.log("--------------------------");
        this.filteredrestlist = this.restaurantlist.filter((data) => {return data.city == cityname});
        for(var i = 0; i < this.filteredrestlist.length; i++)
        {
            
            console.log(`Name   : ${this.filteredrestlist[i].name}`);
            console.log(`Address: ${this.filteredrestlist[i].address}`);
            console.log(`City   : ${this.filteredrestlist[i].city}`);
            console.log("");
        }
       console.log("/////////////////////////////////////////////");

    }
    
}
// if you want to check it using node 
restmanagerobj = new restaurantManager();
restmanagerobj.printAllRestaurantsNames();
restmanagerobj.filterRestaurantByCity("Chandigarh");


// if you want to check it using  browser console
// restmanagerobj = new restaurantManager();
// restmanagerobj.printAllRestaurantsNames();
// cityname = prompt("Enter city name");
// cityname = cityname.charAt(0).toUpperCase() + cityname.slice(1).toLowerCase();
// restmanagerobj.filterRestaurantByCity(cityname);


