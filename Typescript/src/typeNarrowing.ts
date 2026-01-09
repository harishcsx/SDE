// type guarding 

// unknown type , well let us know the type in future 


function getChai(kind: string | number){
    if(typeof kind === "string"){
        return `making ${kind} chai...`;
    }
    return `chai order: ${kind}`;
}

function serveChai(msg?: string){
    if(msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

// exaustive check 
function orderChai(size: "small" | "medium" | "large" | number) {
    if(size === "small"){
        return `small cutting chai...`;
    }
    if(size === "medium" || size === "large"){
        return `make extra chai`;
    } 

    return `chai order #${size}`
}

// type checker in js like , instanceof , typeof (called type gueard )

class KulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving cutting chai`
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

// creating custom types in ts 

type chaiOrder = {
    type: string 
    sugar: number
}

function isChaiOrder(obj:any): obj is chaiOrder{
    return (
        typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.sugar === "number"
    )
}

function serveOrder(item:chaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

// need ; for wraping everything in single line 
type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};

type chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: chai){
    switch(order.type) {
        case "masala":
            return `masala chai`
            break;
        case "elaichi":
            return `elaichi chai`;
            break;
        case "ginger":
            return `ginger chai`;
            break;
    }
}

function brew(order: MasalaChai | GingerChai) {
    // checking property 
    if("spicelevel" in order) {
        //
    }
}

function isStingArray(arr: unknown | string[]): arr is string[]{
    if(typeof arr[0] === "string"){
        return arr;
    }
    return ["hi"];
}   