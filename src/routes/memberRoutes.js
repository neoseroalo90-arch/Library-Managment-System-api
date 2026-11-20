const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const validateMember = require('../middleware/validateMember');

const {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
} = require('../controllers/memberController');

// Public routes
router.get('/', getMembers);
router.get('/:id', getMemberById);

// Protected routes
router.post(
  '/',
  authMiddleware,
  validateMember,
  createMember
);

router.put(
  '/:id',
  authMiddleware,
  updateMember
);

router.delete(
  '/:id',
  authMiddleware,
  deleteMember
);

module.exports = router;