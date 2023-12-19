import { getProdByParams } from "./query";
import { getProdByPopular } from "./query";
import { getProdByDiscount } from "./query";
import { getProdByID } from "./query";

getProdByParams().then(data=> console.log(data))