const { Octokit } = require('@octokit/core');
const { createTokenAuth } = require('@octokit/auth-token');

const auth = createTokenAuth(process.env.GITHUB_TOKEN);
await auth();

const octokit = new Octokit({
  auth: auth.token,
});

await octokit.request('POST /repos/YgorMendes/cypress/actions/workflows/ci.yaml/dispatches', {
  ref: 'master',  // Branch alvo da execução
});

console.log('Pipeline Cypress disparada com sucesso.');
