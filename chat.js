function talk(){
    const know = {
        "Hi" : "Hello, How are you?",
        "Hello" : "Hello, How are you?",
        "How are you?": "Good :) and you?",
        "I'm fine": "lol <3",
        "Whats your name?": "My name is Robboott, and you?",
        "Bye": "Good Bye"
    }
const user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if(user in know ){
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
    document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
}
}