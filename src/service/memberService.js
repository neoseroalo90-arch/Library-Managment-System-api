const Member = require('../models/Member');

const getAllMembers = async () => {
  return await Member.find();
};

const getMemberById = async (id) => {
  return await Member.findById(id);
};

const createMember = async (memberData) => {
  return await Member.create(memberData);
};

const updateMember = async (id, memberData) => {
  return await Member.findByIdAndUpdate(
    id,
    memberData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteMember = async (id) => {
  return await Member.findByIdAndDelete(id);
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};