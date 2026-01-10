type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
};

function makeChai(order: {type: string; sugar: number; strong: boolean;}) {
    console.log(order);
}

function serveChai(order: {type: string; sugar: number; strong: boolean;}) {
    console.log(order);
}

function makeChai1(order: ChaiOrder) {
    console.log(order);
}

function serveChai1(order: ChaiOrder) {
    console.log(order);
}

// intro to interface 
type TeaRecipe = {
    water: number;
    milk: number
};

// no problem with types 
class MasalaChai implements TeaRecipe {
    water = 34;
    milk = 34; 
}

type CupSize = "small" | "large"; 
// error : can't work with customize member 
class Chai implements CupSize {

}




interface TeaRecipe1 {
    water: number;
    milk: number;
}


// converting hardcoaded values 

interface CupSize1 {

    size: "small" | "large"
}

class Chai1 implements CupSize1 {
    size: "small" | "large" = "large";
}


type TEatype = "masala" | "ginger" | "lemon"

function orderChai(t: TEatype){
    console.log(t);
}


// intersection 

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaCha = BaseChai & Extra;

const cup: MasalaCha = {
    teaLeaves: 2,
    masala:1
}

// optional value 

type User = {
    username: string;
    bio?: string
}

const u1: User = {
    username: "harish"
 } 

 const u2: User = {
    username: "hx",
    bio: "hx.ai"
 }


