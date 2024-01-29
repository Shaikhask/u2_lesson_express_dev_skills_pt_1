const Skill = require("../models/skill")
const index = (req, res) => {
  const skills = Skill.getAll()
  const title = "title"
  res.render("skills/index", {
    skills,
    title,
  })
}

const show = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render("skills/show", { Skill })
}

module.exports = {
  index,
  show,
}
