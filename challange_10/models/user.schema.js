const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // User email used for login (unique identifier)
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  // Hashed password (NEVER store plain text password)
  passwordHash: {
    type: String,
    required: true
  },

  // User role for authorization (RBAC)
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },

  // Indicates whether the account is active
  isActive: {
    type: Boolean,
    default: true
  },

  // Account lock status (e.g. too many failed login attempts)
  isLocked: {
    type: Boolean,
    default: false
  },

  // Number of consecutive failed login attempts
  failedLoginCount: {
    type: Number,
    default: 0
  },

  // Last successful login timestamp
  lastLoginAt: {
    type: Date
  },

  // Account creation timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
