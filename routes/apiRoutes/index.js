const router = require("express").Router();
// const { route } = require("./notesRoutes");
const notesRoutes = require("./notesRoutes");

router.use(notesRoutes);

module.exports = router