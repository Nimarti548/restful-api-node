const router = require("express").Router();

router.get("/", (req,res) => {
    console.log("we have been hit")
    res.json({
        msg: "Success",
        status: 200,
        data: {user: "Nicolas", title: "Student"},
    });
});

router.get("/isActive", (req,res) => {
    console.log("we have been hit")
    res.json({
        msg: "Success",
        status: 200,
        data: {active : true},
    });
});

router.put("/putExample", (req,res) => {
    console.log(req.body)
    const id = req.body.id
    res.json({
        msg: "Success",
        status: 200,
        data: {id: id},
    });
});

router.post("/queryString", (req,res) => {
    console.log(req.query)
    res.json(req.query);
});

router.patch("/parameter/:id/:name", (req,res) => {
    console.log(req.params)
    res.json({ msg: "success" });
});

module.exports = router;