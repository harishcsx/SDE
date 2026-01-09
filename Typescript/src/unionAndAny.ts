let subs: number | string = "1M";

// case insensitive 
let apiRequestStatus: "pending" | "sucess" | "error" = "pending";

const orders = ["10", "20", "28", "42"]

let currentOrder: string | any;

for(let order of orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
}

// any : means i don't care for the type 