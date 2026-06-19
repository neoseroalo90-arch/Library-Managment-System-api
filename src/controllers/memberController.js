const memberService = require('../service/memberService');

const getMembers = async (req, res, next) => {
  try {
    const members =
      await memberService.getAllMembers();

    res.json(members);
  } catch (error) {
    next(error);
  }
};

const getMemberById = async (
  req,
  res,
  next
) => {
  try {
    const member =
      await memberService.getMemberById(
        req.params.id
      );

    if (!member) {
      return res.status(404).json({
        message: 'Member not found'
      });
    }

    res.json(member);
  } catch (error) {
    next(error);
  }
};

const createMember = async (
  req,
  res,
  next
) => {
  try {
    const member =
      await memberService.createMember(
        req.body
      );

    res.status(201).json(member);
  } catch (error) {
    next(error);
  }
};

const updateMember = async (
  req,
  res,
  next
) => {
  try {
    const member =
      await memberService.updateMember(
        req.params.id,
        req.body
      );

    if (!member) {
      return res.status(404).json({
        message: 'Member not found'
      });
    }

    res.json(member);
  } catch (error) {
    next(error);
  }
};

const deleteMember = async (
  req,
  res,
  next
) => {
  try {
    const deleted =
      await memberService.deleteMember(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        message: 'Member not found'
      });
    }

    res.json({
      message: 'Member deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};