import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  subject: String,
  recipients: [String],
  personalization: {
    name: String,
    offerCode: String,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

const Campaign = mongoose.model('Campaign', campaignSchema);
export default Campaign;

