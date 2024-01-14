var j;
j = 10.5;
console.log(j);
var myFunction = function () {
    return 10;
};
function myFunction2() {
}
var function1 = myFunction();
var function2 = myFunction2();
// class=>function
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    //any 
    ProductService.prototype.getall = function () {
        return true;
    };
    ProductService.prototype.getById = function (id) {
    };
    return ProductService;
}());
