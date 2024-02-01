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
  const skills = Skill.getOne(req.params.id)
  res.render("skills/show", { skills })
}

const newSkill = (req, res) => {
  res.render("skills/new")
}

const create = (req, res) => {
  Skill.create(req.body)
  res.redirect("/skills")
}

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id)
  res.redirect("/skills")
}

const editSkill = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render("skills/edit", { skill })
}

const update = (req, res) => {
  skillId = req.params.id
  updateSkill = req.body.skill
  Skill.updateOne(skillId, updateSkill)
  res.redirect("/skills")
}

module.exports = {
  index,
  show,
  newSkill,
  create,
  deleteSkill,
  editSkill,
  update,
}
