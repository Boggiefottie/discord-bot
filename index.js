import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generting Short ID for " + url,
    });
  }
  message.reply({
    content: "Hi from Bhavya bot",
  });
});
client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong!!");
});

client.login(
  "MTE1NDc3NzkwNDUwNTQyNTkyMA.Gb06rI.vqg0eT-TjUAecHLVPdm5_4OX3moBinh1vssERk"
);
