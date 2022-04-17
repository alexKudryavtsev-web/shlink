const { Router } = require("express");
const Link = require("../models/Link.js");

const router = new Router();

router.get("/:code", async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code });

    if (!link) {
      return res.status(404).json({ message: "Ссылка не найдена" });
    }

    link.clicks++;
    await link.save();

    return res.redirect(link.from);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так - попробуйте снова" });
  }
});

module.exports = router;
