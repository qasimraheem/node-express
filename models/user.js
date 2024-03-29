const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  userName: {
    type: String,
    unique: true
  },
  email: String,
  password: String,
  confirmed: {
    type: Boolean,
    default: false
  },
  resetPasswordToken: String,
  isBlocked: {
    type: Boolean,
    default: false
  },
  emailConfirmToken: String,
  avatar: {
    type: String,
    default: "http://localhost:4000/user.png"
  },
  location: String,
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  twoFactorSecret: {
    type: String,
    default: ""
  },
  twoFactorCode: {
    type: String,
    default: ""
  },
  notificationToken: {
    type: String,
    default: null,
  },
  haveNotificationToken: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
  },
  kyc: {
    mobile: {
      type: String,
      default: ""
    },
    gender: {
      type: String,
      default: ""
    },
    birthDate: {
      type: String,
      default: ""
    },
    nationality: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    },
    postalCode: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    street: {
      type: String,
      default: ""
    },
    building: {
      type: String,
      default: ""
    },
    //TODO use enums
    kycStatus: {
      type: String,
    }
  },
  shops: [{
    type: Schema.Types.ObjectId,
    ref: 'shops',
  }],
  brands: [{
    type: Schema.Types.ObjectId,
    ref: 'brands',
  }],
  favorites:{
    type: Schema.Types.ObjectId,
    ref: 'favorites',
  },
  pins:{
    type: Schema.Types.ObjectId,
    ref: 'pins',
  },
  subscriptions:{
    type: Schema.Types.ObjectId,
    ref: 'subscriptions',
  },
  roleBasedAccess:{
    type: Schema.Types.ObjectId,
    ref: 'role_base_accesses',
  }
}, {
  timestamps: true
});

const User = mongoose.model('users', userSchema);
module.exports = User


