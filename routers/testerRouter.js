const express = require("express");
const router = express.Router();

//tester handlers imports;
const signup = require("../handlers/tester/signup");

const addTest = require("../handlers/tester/addTest");

const signIn = require("../handlers/tester/signin");
// const addTest = require("../handlers/tester/addTest");

const getTests = require("../handlers/tester/getTests");
const getAllExaminees = require("../handlers/tester/getAllExaminees");
const getAllQuestions = require("../handlers/tester/getAllQuestions");
const addQuestions = require("../handlers/tester/addQuestions");
const addExercise = require("../handlers/tester/addExercise");
const getExercises = require("../handlers/tester/getExercises");
const verifyUser = require("../middlewares/auth");
const getTestMiddleware = require("../middlewares/getTestMiddleware");

//routes
router.post("/tester/signup", signup);

router.post("/tester/maketest", addTest);
<<<<<<< HEAD
// router.post("/tester/signin", handleSignIn);
=======
>>>>>>> f5c37b66056a8301f3bdfe7a83cea20dcecb0674

router.post("/tester/signin", signIn);
// router.post("/tester/test", addTest);

router.get("/tester/test", getTests);
// router.post("/tester/questions", getAllQuestions);
router.post("/tester/examinees", getAllExaminees);
router.get("/tester/questions/:exerciseid", getAllQuestions);
router.post("/tester/addExercise", addQuestions, addExercise);
router.get("/tester/getExercises", getExercises);
router.post("/tester/tests", verifyUser("tester"), getTestMiddleware);

module.exports = router;
