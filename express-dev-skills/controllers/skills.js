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
  Todo.updateOne(skillId, updatedskill)
  res.redirect("/skill")
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
