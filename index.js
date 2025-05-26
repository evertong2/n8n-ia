process.env.N8N_BASIC_AUTH_ACTIVE = process.env.N8N_BASIC_AUTH_ACTIVE || "true";
process.env.N8N_BASIC_AUTH_USER = process.env.N8N_BASIC_AUTH_USER || "admin";
process.env.N8N_BASIC_AUTH_PASSWORD = process.env.N8N_BASIC_AUTH_PASSWORD || "admin123";
process.env.N8N_PORT = process.env.N8N_PORT || 10000;
process.env.N8N_HOST = process.env.N8N_HOST || "0.0.0.0";

const { start } = require("n8n");
start();
