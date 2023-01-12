const userDB = require("./mongo.db.models/user.db.model");

const DEFAULT_USER_ID = 1;

async function _getLatestUserId() {
  const latestUser = await userDB.findOne().sort("-id");
  if (!latestUser) {
    return +DEFAULT_USER_ID;
  }
  return +latestUser.id + 1;
}
