// Mock AI-generated email content
module.exports = async function generateEmail(personalization) {
    return `Hi ${personalization.name},\n\nWe have a special offer for you! 🎉\n\nUse code ${personalization.offerCode} to get 20% off.\n\nCheers,\nZithara.ai`;
  };
  