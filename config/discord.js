var env = require('env-var');

module.exports = {
  botToken: env(BOT_TOKEN).required().asString(),
  commandTrigger: "!",
  demoMode: env(DEMO_BOOL).required().asBool(),

  Bot:{
    admin_id: env(BOT_ADMIN_ID).required().asString(),
    

  }
}
