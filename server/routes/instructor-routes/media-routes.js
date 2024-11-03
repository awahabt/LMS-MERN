const express = require("express");
const multer = require("multer");
const {
  uploadMediaToCLoudinary,
  deleteMediFromCloudinary,
} = require("../../helpers/cloudinary");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await uploadMediaToCLoudinary(req.file.path);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const {id } = req.params;
    if(!id){
        return res.status(400).json({
            success: false,
            message: "Assest ID is Required"
        })
    }
    await deleteMediFromCloudinary(id)
    res.status(200).json({
        success: true,
        message: "Assest delelted Successfully from Cloudinary",
      });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Error of delete file",
    });
  }
});


module.exports = router;