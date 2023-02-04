
let productos = [
    {id:'1' , categoria: 'juguetes' , nombre:"Pelota1" , precio: 25 , foto: 'https://s.alicdn.com/@sc04/kf/H90ecfd4301534fa5a153fde4fc503603P.jpg_280x280.jpg' },
    {id:'2' , categoria: 'juguetes' , nombre:"Pelota2" , precio: 27 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    {id:'3' , categoria: 'juguetes' , nombre:"Pelota3" , precio: 30 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    {id:'4' , categoria: 'alimentos' , nombre:"Pelota4" , precio: 35 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    {id:'5' , categoria: 'alimentos' , nombre:"Pelota5" , precio: 15 , foto: 'https://dojiw2m9tvv09.cloudfront.net/64646/product/M_124de65d-029c-4cb6-9956-6ee540640204-photoroom4847.png?69&time=1674330997' },
    ] 
    
    export const gFetch = (id)=>{
       return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(id ? productos.find(prod => prod.id == id): productos)
            }, 1000)
    })
    
    }