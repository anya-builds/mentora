const app = express();
import express, { Request, Response } from "express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest";


const PORT = 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/api/chat",(req: Request, res:Response)=>{
  res.send("Hi, how may I help yu today")
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on ${PORT}`);
});
