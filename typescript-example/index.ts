let j: number;
j=10.5;
console.log(j);

const myFunction = ():number =>{
return 10;
};

function myFunction2(): void {

}

let function1= myFunction();
let function2= myFunction2();

class ProductService {
    //any 
     getall():any {
 return true;
     }
    
    getById (id:number):Product {
        return {id:1, name:"phone",price:10};
    }
}
//modelleme
interface Product {
    id:number
    name:string
    price : number
}

let productService= new ProductService();
let product=productService.getById(1);
console.log (product.price);