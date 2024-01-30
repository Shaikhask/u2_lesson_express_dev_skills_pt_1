const skills = [
  { id: 115353, skill: "Travel", done: true },
  { id: 135351, skill: "Online shopping", done: false },
  { id: 135135, skill: "Getting my nails done", done: false },
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}

const create = (skill) => {
  skill.id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
}

const deleteOne = (id) => {
  const index = skills.findIndex((skill) => {
    return skill.id === parseInt(id)
  })
  skills.splice(index, 1)
}

const updateOne = (id, updatedskill) => {
  const skillToUpdate = skills.find((skill) => skill.id === parseInt(id))
  skillToUpdate.skill = updatedSkill
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne,
}
