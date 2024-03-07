const User = require('../models/User')
const Note = require('../models/Note')
const bcrypt = require('bcrypt')

//@desc GET all users
//@route GET /users
//@access Private
const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password').lean()
  if (!users) {
    return res.status(400).json({
      message: 'No users found',
    })
  }
  res.json(users)
}

//@desc Create all users
//@route POST /users
//@access Private
const createNewUser = async (req, res) => {
  const { username, password, roles } = req.body
  // confirming data
  if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // check for duplicates
  const duplicate = await User.findOne({ username })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec()
  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate Username' })
  }

  // hash password
  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds
  const userObject =
    !Array.isArray(roles) || !roles.length
      ? { username, password: hashedPwd }
      : { username, password: hashedPwd, roles }

  // create and store new user
  const user = await User.create(userObject)

  if (user) {
    // created
    res.status(201).json({ message: `New user ${username} created` })
  } else {
    res.status(400).json({ message: `Invalid user data received` })
  }
}

//@desc Update all users
//@route PATCH /users
//@access Private
const updateUser = async (req, res) => {
  const { id, username, roles, active, password } = req.body

  // confirm data
  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== 'boolean'
  ) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'No user found' })
  }
  // check for duplicate
  const duplicate = await User.findOne({ username })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec()
  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate Username' })
  }

  user.username = username
  user.roles = roles
  user.active = active

  if (password) {
    // hash password
    user.password = await bcrypt.hash(password, 10) // salt rounds
  }

  const updatedUser = await user.save()

  res.json({ message: `${updatedUser.username} updated` })
}

//@desc Delete all users
//@route DELETE /users
//@access Private
const deleteUser = async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({ message: `User ID Required` })
  }

  const note = await Note.findOne({ user: id }).lean().exec()
  if (note) {
    return res.status(400).json({ message: 'User has assigned notes' })
  }

  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'No user found' })
  }

  const result = await user.deleteOne()

  const reply = `Username ${user.username} with ID ${user.id} deleted`
  res.json(reply)
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }
