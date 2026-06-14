const members = require('../data/members');

const getAllMembers = () => members;

const getMemberById = (id) => {
  return members.find(
    member => member.id === parseInt(id)
  );
};

const createMember = (memberData) => {
  const newMember = {
    id: members.length + 1,
    name: memberData.name,
    email: memberData.email
  };

  members.push(newMember);

  return newMember;
};

const updateMember = (id, memberData) => {
  const member = members.find(
    member => member.id === parseInt(id)
  );

  if (!member) {
    return null;
  }

  member.name =
    memberData.name || member.name;

  member.email =
    memberData.email || member.email;

  return member;
};

const deleteMember = (id) => {
  const index = members.findIndex(
    member => member.id === parseInt(id)
  );

  if (index === -1) {
    return false;
  }

  members.splice(index, 1);

  return true;
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};