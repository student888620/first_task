
let game_no = 18;

console.log('lets play a game!')

user_no = Number(prompt("enter your guess:"))

while (user_no > 20 )
{
    console.log('please enter bw 0 & 20 your number is exceding the limit')
    user_no = Number(prompt("enter your guess:"))
}

while(user_no != game_no){
    
   user_no = Number(prompt(" you guess a wrong number! guess again!"))
    
}


console.log('congratulation! you guess correct.')