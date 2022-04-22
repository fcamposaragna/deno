import { Response, Request, Context, helpers } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const products = [
    {id:1,name:"Guitarra eléctrica", price: 25000, description: "Guitarra eléctrica Fender"},
    {id:2,name: "Guitarra acústica", price: 15000, description: "Guitarra acústica Ibanez"}
];

export const getAllProducts = (context:Context)=>{
    context.response.body={
        payload: products
    }
};
export const getProductById = (context:Context)=>{
    const {id} = helpers.getQuery(context,{mergeParams:true});
    const res = products.find(prod=>prod.id===parseInt(id));
    context.response.body= res
}
export const saveProduct = async ({request, response}:{request:Request, response:Response} )=>{
    const body = await request.body();
    const values = await body.value;
    products.push(values)
    response.body = values;
}