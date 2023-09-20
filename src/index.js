import { Client, GatewayIntentBits } from "discord.js";
import { setClientEvents } from "./events/index.js";
import { setClientCommands } from "./commands/index.js";

const token = process.env.OAUTH2_TOKEN;

// Create a new client instance
const client = new Client({ intents : [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.MessageContent
]});

// Set the events and commands respectively to this client
setClientEvents(client);
setClientCommands(client);

// Log in to Discord with your client's token
client.login(token);