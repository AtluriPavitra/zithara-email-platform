const Campaign = require('../models/Campaign');
const generateEmail = require('../utils/aiEmailGenerator');

exports.createCampaign = async (req, res) => {
  try {
    const { subject, recipients, personalization } = req.body;
    const content = await generateEmail(personalization);

    const campaign = await Campaign.create({
      user: req.user._id,
      subject,
      recipients,
      content,
    });

    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
