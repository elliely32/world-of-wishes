const router = require('express').Router()
const { models: { Wish }} = require('../db')
module.exports = router

//Getting all wishes that have been approved
router.get('/', async (req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: [wishMessage],
        where:{
            approved:true
        }
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  })