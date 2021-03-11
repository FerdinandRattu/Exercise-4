//Rattu, Ferdinand B M
//Exercise - 2
//Mobile Programming - A

//>>>>>> Callback <<<<<<<<

//a. 
function mandi(){
    console.log("Mandi");
}

//b.
function sarapan(Callback)
{
    setTimeout
    (
        function() 
        {
         console.log('Sarapan tertunda 3 detik')
         Callback()
        },3000
    )
}

//c.
function berangkatSekolah(){
    console.log("Berangkat Sekolah")
}

mandi();
sarapan(berangkatSekolah);

//>>>>>>>>>>>>>>>>>> PROMISE <<<<<<<<<<<<<<<<<<<<

//a,
function helloWorld(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello World");
        },2000);
    });
};

//b

const messages = async ()=>{
    const msg= await helloWorld();
    console.log(msg);
}

//c
messages();

//>>>>>>>>>>>>>>>>>> FECTH <<<<<<<<<<<<<<<<

function ambilDataUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ((response)=>response.json())
    .then ((users)=>console.log(users))
}

ambilDataUser();