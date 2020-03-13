const client = require("./client");

async function quickReplies(recipient, replies, text) {
  try {
    await client.sendQuickReplies(recipient, replies, text);
  } catch (err) {
    console.error(err);
  }
}

async function template(recipient, template) {
  try {
    await client.sendTemplate(recipient, template);
  } catch (err) {
    console.error(err);
  }
}

async function text(recipient, text) {
  try {
    await client.sendText(recipient, text);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  quickReplies,
  template,
  text
};
