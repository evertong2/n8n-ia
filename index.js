const { exec } = require("child_process");

const env = {
  ...process.env,
  N8N_BASIC_AUTH_ACTIVE: process.env.N8N_BASIC_AUTH_ACTIVE || "true",
  N8N_BASIC_AUTH_USER: process.env.N8N_BASIC_AUTH_USER || "admin",
  N8N_BASIC_AUTH_PASSWORD: process.env.N8N_BASIC_AUTH_PASSWORD || "admin123",
  N8N_HOST: "0.0.0.0",
  N8N_PORT: "10000",
  PORT: "10000"
};

exec("n8n start", { env }, (error, stdout, stderr) => {
  if (error) {
    console.error(`[n8n error]`, error);
    process.exit(1);
  }
  console.log(stdout);
  console.error(stderr);
});
