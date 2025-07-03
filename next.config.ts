// next.config.js
const isGithubPages = process.env.NODE_ENV === 'production';

const repo = 'portfolio'; // your repo name

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};
