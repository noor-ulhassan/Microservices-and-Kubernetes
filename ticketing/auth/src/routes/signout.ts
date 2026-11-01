import express from "express";


const router = express.Router();

router.post("/api/usignouttuser", (req, res) => {
    res.send("Hi there");
})

export { router as signoutUserRouter }