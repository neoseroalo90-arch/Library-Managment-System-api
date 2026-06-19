const express = require('express');
const router = express.Router();

const validateMember =
  require('../middleware/validateMember');

const validateMemberUpdate =
  require('../middleware/validateMemberUpdate');

const {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
} = require('../controllers/memberController');

router.get('/', getMembers);

router.get('/:id', getMemberById);

router.post(
  '/',
  validateMember,
  createMember
);

router.put(
  '/:id',
  validateMemberUpdate,
  updateMember
);

router.delete('/:id', deleteMember);

module.exports = router;