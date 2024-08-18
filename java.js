//let age = 18;

//result = age >18 ? console.log("you are adult") :console.log("your are not adult");

//console.log(result);

//switch statement-------
 

const user_name= prompt("Enter name that is currntly using browser console:");

console.log("hello",user_name);

const ques = prompt("now tell what u want? Enter search_bar for searching :youtube for searching on youtube ")

switch(ques){
    case "search_bar":
        console.log("open a new tab and search in the search bar:")
        break;
    case "youtube":
        console.log("open a new tab and search utube in the search bar:");
        break;
    default:
        console.log("you enter wrong query sorry!")
}




/*const fruit_price = Number(prompt("tell me price of fruit that is 70,60 or 90$"));

console.log("price of fruit is",fruit_price,"$:");



switch(fruit_price){
case 70:
    console.log("mangoes are under 70 $");
    break;
case 60:
case 90:
console.log("strawberries are under 90 $ and banana are under 60 $");
break;

default:
    console.log("sorry!")

}*/