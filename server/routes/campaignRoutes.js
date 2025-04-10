import express from 'express';
import Campaign from '../models/Campaign.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

// CREATE CAMPAIGN
router.post('/', verifyToken, async (req, res) => {
  const { subject, recipients, personalization } = req.body;

  const campaign = new Campaign({
    subject,
    recipients,
    personalization,
    createdBy: req.user.userId,
  });

  await campaign.save();
  res.status(201).json({ message: 'Campaign created successfully' });
});

// GET USER CAMPAIGNS
router.get('/', verifyToken, async (req, res) => {
  const campaigns = await Campaign.find({ createdBy: req.user.userId });
  res.json(campaigns);
});

export default router;



