import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
];
const rest = new REST({ version: "10" }).setToken(
  "MTE1NDc3NzkwNDUwNTQyNTkyMA.Gb06rI.vqg0eT-TjUAecHLVPdm5_4OX3moBinh1vssERk"
);
try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1154777904505425920"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
