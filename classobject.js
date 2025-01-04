//using new keyword
function rectangle(height,width)
{
    this.height=height;
    this.width=width;
} 
let m=new rectangle(12,30);
console.log(m);

//using constructor
class rectangle1 {
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
     
}
let r=new rectangle1(20,30);
console.log(r);

//object literal
let s={
    height:'20',
    width:'30'
};
console.log(s);