Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}
const greeting = ["Hello!", "Hi!", "How are you!", "Welcome to my website", "Good  morning"];

document.getElementById("rand").innerHTML = greeting.sample();