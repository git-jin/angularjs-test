"use strict";

class Foo{
    constructor(first,second){
        this.first= first;
        this.second=second;

    }

    get total(){
        return this.first+this.second;

    }

}
let foo =new Foo(5,7);

console.log(foo.total);
