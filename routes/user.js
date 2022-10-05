import express from "express";

import { genPassword, createUser, getUserByName } from "../helper.js"


const router = express.Router();



//Post method => isnert data into db

router.post("/signup", async (request, response) => {
    const { username, password} = request.body;
    console.log(username, password)   //totally optional
    const isUserExist = await getUserByName(username)
    console.log(isUserExist);
    
    if (isUserExist){
        response.status(400).send({ message: "Username already taken" });
        return;
    }
    
    const hashedPassword = await genPassword(password);
    const result = await createUser(username, hashedPassword)
    response.send(result);
});


export const userRouter = router;