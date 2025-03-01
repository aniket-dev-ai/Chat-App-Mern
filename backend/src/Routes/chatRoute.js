const express = require("express");
const router = express.Router();
const AuthUser = require("../middleware/AuthUser.jsx");
 
// router.post("/",AuthUser,accessChat)
// router.get("/",AuthUser,fetchChats)

// router.post("/group",AuthUser,createGroupchat)
// router.get("/group",AuthUser,fetchGroupChats)


// router.post("/private",AuthUser,createPrivatechat)
// router.get("/private",AuthUser,fetchPrivateChats)

router.put("/rename",AuthUser,renamegroup)
router.delete("/groupdelete",AuthUser,deletegroup)
router.put("/addmember",AuthUser,addmembertogroup)


module.exports = router;
