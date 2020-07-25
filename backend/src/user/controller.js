const getMain = (req, res, next) => {
  res.json({
    user: 'user',
  })
}

module.exports = { getMain }
