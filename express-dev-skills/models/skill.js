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

module.exports = {
  getAll,
  getOne,
}
