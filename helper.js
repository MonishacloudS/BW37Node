import { client } from "./index.js";

export async function getAllMovies(request) {
    return await client.db("b37wd").collection("movies").find(request.query).toArray();
}
export async function getMovieById(id) {
    return await client
        .db("b37wd")
        .collection("movies")
        .findOne({ id: id });
}
export async function deleteMovieById(id) {
    return await client.db("b37wd").collection("movies").deleteOne({ id: id });
}
export async function addMovies(newMovies) {
    return await client.db("b37wd").collection("movies").insertMany(newMovies);
}

export async function updateMovieById(id, updateMovie){
    return await client.db("b37wd").collection("movies").updateOne({ id: id }, { $set: updateMovie });
}



