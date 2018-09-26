const router = require("express").Router();
const articleRoutes = require("./articles");

router.use("/api", articleRoutes);
console.log("hello");
module.exports = router;
