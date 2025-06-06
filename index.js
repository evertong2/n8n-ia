const { spawn } = require("child_process");

const env = {
  ...process.env,
  N8N_BASIC_AUTH_ACTIVE: "true",
  N8N_BASIC_AUTH_USER: process.env.N8N_BASIC_AUTH_USER || "admin",
  N8N_BASIC_AUTH_PASSWORD: process.env.N8N_BASIC_AUTH_PASSWORD || "admin123",
  N8N_HOST: "0.0.0.0",
  N8N_PORT: "10000",
  PORT: "10000",
};

const child = spawn("n8n", ["start"], {
  env,
  stdio: "inherit",
  shell: true
});

child.on("error", (err) => {
  console.error("[n8n error]", err);
});
