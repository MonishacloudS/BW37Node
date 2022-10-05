
import express, { request, response } from "express";
import { deleteMovieById } from "../helper.js";
import { getMovieById } from "../helper.js";
import { getAllMovies } from "../helper.js";
import { addMovies } from "../helper.js";
import { updateMovieById } from "../helper.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

//delete a movie id


router.delete("/:id", async (request, response) => {
    const { id } = request.params;
    console.log(id)
    const movie = await deleteMovieById(id);
    response.send(movie)
});



//if we want to get a deleted movie it should show a msg called "no movie found" and a 404 error. 
//and this code is also responsible for getting movie by id also


router.get("/:id", async (request, response) => {
    const { id } = request.params;
    console.log(id)
    const movie = await getMovieById(id)

    console.log(movie)  //totally optional
    movie
        ? response.send(movie)
        : response.status(404).send({ message: "No movie found" });
});



//along with the movies we need to get language and rating too

router.get("/", async (request, response) => {
    if (request.query.rating) {
        request.query.rating = +request.query.rating;
    }
    console.log(request.query)
    const movie = await getAllMovies(request);
    response.send(movie);
});



//Post method => isnert data into db

router.post("/", async (request, response) => {
    const newMovies = request.body;
    console.log(newMovies);    //totally optional
    const result = await addMovies(newMovies)
    response.send(result);
});


//update a movie id

router.put("/:id", async (request, response) =>{
    const { id } = request.params;
    const updateMovie = request.body;
    const result = await updateMovieById(id, updateMovie)
    response.send(result)
});

 export const moviesRouter = router;