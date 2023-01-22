
let productos = [
    {id:'1' , categoria: 'juguete' , nombre:"Pelota1" , precio: 25 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    {id:'2' , categoria: 'juguete' , nombre:"Pelota2" , precio: 27 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    {id:'3' , categoria: 'juguete' , nombre:"Pelota3" , precio: 30 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    {id:'4' , categoria: 'juguete' , nombre:"Pelota4" , precio: 35 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    {id:'5' , categoria: 'juguete' , nombre:"Pelota5" , precio: 15 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    ] 
    
    export const gFetch = ()=>{
       return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(productos)
            }, 3000)
    })
    
    }