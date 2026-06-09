const members = require('../data/members');

const getMembers = (req, res) => {
  res.json(members);
};

const getMemberById = (req, res) => {
  const member = members.find(
    m => m.id === parseInt(req.params.id)
  );

  if (!member) {
    return res.status(404).json({
      message: 'Member not found'
    });
  }

  res.json(member);
};

const createMember = (req, res) => {
  const newMember = {
    id: members.length + 1,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  members.push(newMember);

  res.status(201).json(newMember);
};

const updateMember = (req, res) => {
  const member = members.find(
    m => m.id === parseInt(req.params.id)
  );

  if (!member) {
    return res.status(404).json({
      message: 'Member not found'
    });
  }

  member.name = req.body.name || member.name;
  member.email = req.body.email || member.email;
  member.phone = req.body.phone || member.phone;

  res.json(member);
};

const deleteMember = (req, res) => {
  const index = members.findIndex(
    m => m.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Member not found'
    });
  }

  members.splice(index, 1);

  res.json({
    message: 'Member deleted successfully'
  });
};

module.exports = {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};