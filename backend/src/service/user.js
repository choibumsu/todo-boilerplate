const { selectOneUser } = require('../model/user')

const getUserById = async (userId) => {
  const user = await selectOneUser(userId)

  return user
}

const getUserIntroduce = (user) => {
  return `${user.id}번 유저 ${user.name}입니다.`
}

module.exports = { getUserById, getUserIntroduce }
