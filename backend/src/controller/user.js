const { getUserById, getUserIntroduce } = require('../service/user')

const getUser = async (req, res, next) => {
  const user = await getUserById(1)

  user.introduce = getUserIntroduce(user)

  res.json(user)
}

module.exports = { getUser }
