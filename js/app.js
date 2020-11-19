console.log("who am i?");
// declare a variable
let name= "Alex Kaasik";
let age = 17;
let survived =true;
let city ="Tallin";
let drivingLicense ="";
let commentary="";
//console.log("Character", name, ". Age:", age, ". City:", city);
console.log(`character:${name}. Age:${age}. City:${city}`);

if(survived){
    commentary= "survived school";
}else{
    commentary=  "died in school" 
}
console.log(`character: ${name}. ${commentary}.`)

if(age < 18){
    drivingLicense=(`${name} no driving lisence for you`)
}else{
    drivingLicense=(`${name} ok you can have driving license`)
}
console.log(drivingLicense)

const html=`
<ul>
    <li>Name:${name}</li>
    <li>Age:${age}</li>
    <li>City:${city}</li>
    <li>He:${commentary}</li>
    <li>Name:${drivingLicense}</li>
</ul>`

;
document.body.innerHTML =html;