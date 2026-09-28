import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // AGENTS.md is course-authored. Stop `next dev` from appending its own
  // agent-rules block to it whenever an AI agent starts the dev server.
  agentRules: false,
};
export default nextConfig;
