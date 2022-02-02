let cards = document.querySelector('#cards')
let template_poke = document.querySelector('#template_poke').content
let fragmentPoke = document.createDocumentFragment() 


let boton = document.querySelector("#boton")

   
 



 

document.addEventListener("DOMContentLoaded", () =>{  
    //let random = getRamdonInt(1,501)
    dataFech()
})

//FUNCION QUE GENERA UN NUMERO ALEATORIO
const getRamdonInt = ( min , max ) =>{
    return Math.floor(Math.random() * (max - min)) + min
}


const dataFech = async () =>{
    try{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await res.json()
        pintarPoke(data)
      
    }catch(error){
        console.log("error")
    }
}




const pintarPoke = (data) =>{
    //console.log(data)
    //console.log(data.next)
    let pokemones_veinUno_cuarenta = data.next   //obtengo url pok 21-40

    data.results.forEach(element => {
        //console.log(element.name) 
        //console.log(element.url) 
            
          
           const dataFech2 = async () =>{
               try{
                   //LLAMADA AL JSON URL
                   const res_2 = await fetch(element.url)
                   const data_2 = await res_2.json()
                   //console.log(data_2)
                   pokemonesPintados(data_2)

               }catch(error){
                   console.log("error2")
               }
           }
           dataFech2()

           const pokemonesPintados = (data_2) =>{
                console.log(data_2)
                
                let clone = template_poke.cloneNode(true)
                clone.querySelector("#name").textContent = data_2.name
                clone.querySelector("img").setAttribute("src",data_2.sprites.other.dream_world.front_default)
                clone.querySelector("#ID").textContent = data_2.id
                clone.querySelector("#tipo").textContent = data_2.types[0].type.name
                clone.querySelector("#mov1").textContent = data_2.moves[0].move.name
                clone.querySelector("#mov2").textContent = data_2.moves[1].move.name
              

                fragmentPoke.appendChild(clone)
                cards.appendChild(fragmentPoke)
           }
           //let random = getRamdonInt(1,601)
         
    }); 

}



