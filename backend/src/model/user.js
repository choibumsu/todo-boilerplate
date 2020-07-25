const users = [
  {
    id: 1,
    name: 'bumsu',
  },
  {
    id: 2,
    name: 'temp',
  },
]

function tempSelectUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId)

      if (user) {
        resolve(user)
      } else {
        reject(false)
      }
    }, 200)
  })
}

const selectOneUser = async (userId) => {
  try {
    const user = await tempSelectUser(userId)
    return user
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = { selectOneUser }
