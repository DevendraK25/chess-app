const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// Load User model
const User = require('../models/User');


// @route GET api/users
// @description Get all users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

// @route GET api/users/:id
// @description Get single user by id
// @access Private
const getUser = asyncHandler(async (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user)) 
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
})


// @route POST api/users
// @description add/register user
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const {username, password} = req.body
  // Check for user email
  const user = await User.findOne({username})

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @route GET /api/users/me
// @description Get user data
// @access Private
const getMe = asyncHandler(async(req, res) => {
  const {_id, username} = await User.findById(req.user.id)
  res.status(200).json({
    id: _id,
    username
  })
})

// @route POST api/users
// @description add/register user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, confirm_password } = req.body

  if (!username || !password || password != confirm_password) {
    res.status(400)
    throw new Error('Either username or password missing, or password does not match')
  }
  //Check if user exists
  const userExists = await User.findOne({username})
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create user
  const user = await User.create({
    username,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @route PUT api/users/:id
// @description Update id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json(updatedUser)
})

// @route DELETE api/users/:id
// @description Delete user by id
// @access Public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }
  await User.findByIdAndRemove(req.params.id);
  res.status(200).json({id: req.params.id })
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
  getMe
}