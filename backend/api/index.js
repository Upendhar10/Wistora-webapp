import serverless from "serverless-http";
import app from "../src/app.js";

console.log("API INDEX LOADED");

const handler = serverless(app);

// export default async function(req,res){

//   console.log("FUNCTION INVOKED");

//   return handler(req,res);
// }

export default function(req,res){
   return res.status(200).send("VERCEL FUNCTION WORKS");
}