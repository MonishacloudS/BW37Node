import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

import { genPassword, createUser, getUserByName } from "../helper.js"


const router = express.Router();



//Post method => isnert data into db

router.post("/signup", async (request, response) => {
    const { username, password } = request.body;
    console.log(username, password)   //totally optional
    const isUserExist = await getUserByName(username)
    console.log(isUserExist);

    if (isUserExist) {
        response.status(400).send({ message: "Username already taken" });
        return;
    }
    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%$]).{8,}$/g.test(password)) {
        response.status(400).send({ message: "Password pattern does not match" })
        return;
    }


    const hashedPassword = await genPassword(password);
    const result = await createUser(username, hashedPassword)
    response.send(result);
});


//Login 

router.post("/login", async (request, response) => {
    const { username, password } = request.body;
    console.log(username, password);
    //db.movies.insertMany(movies) 
    const userFromDB = await getUserByName(username)
    console.log(userFromDB);
    //username already exist
    if (!userFromDB) {
        response.status(400).send({ message: "Invalid credentials" });
        return;
    }
    const storedPassword = userFromDB.password;

    const isPasswordMatch = await bcrypt.compare(password, storedPassword)
    if (!isPasswordMatch) {
        response.status(400).send({ message: "Invalid credentials" });
        return;
    }
    //issues token
    const token = jwt.sign({ id: userFromDB, _id }, process.env.SECRET_KEY);
    response.send({ message: "successfull login", token: token});
    // response.send(isPasswordMatch);
});


export const userRouter = router;