export type Project = {
  slug: string; name: string; category: string; image: string; description: string;
  href: string; className: string; headline: string; introduction: string;
  problem: string; features: { title: string; text: string }[];
  workflow: { title: string; text: string }[]; notes: string[];
  facts: { label: string; value: string }[]; sources: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'give-ai-what-it-needs', name: 'Give-AI-what-it-needs', category: 'Better questions. Better builds.',
    image: '/images/requirements.webp', className: 'requirements',
    description: 'Clarify an image or video idea, answer the missing questions, and compile a prompt for your generation tool.',
    href: 'https://giveai.shipuntildead.com',
    headline: 'Ask first. Generate with intent.',
    introduction: 'A requirement elicitation engine for image and video generation. It takes an idea apart, helps pin down what matters, and turns the answers into platform-specific prompts.',
    problem: 'A generation can look impressive and still miss the brief. The wrong format, an unspecified camera movement, or a forgotten detail means another paid attempt. This project puts a short clarification loop before generation, so the tool receives a more complete description of what you actually want.',
    facts: [{ label: 'Focus', value: 'Image & video prompts' }, { label: 'Access', value: 'Web app source + MCP tools' }, { label: 'AI setup', value: 'Bring your own provider key' }],
    features: [
      { title: 'Questions grounded in your idea', text: 'The AI identifies the subjects and setting in your description, then asks focused questions about each. An idea about a barista pouring a latte can become separate questions about the barista, drink, café, and scene. Multi-select answers allow compatible details to coexist.' },
      { title: 'One prompt for each platform', text: 'Answers become a coherent description, then deterministic compilers add the platform-specific structure. Image targets include Midjourney, DALL·E, and Higgsfield; video targets include Higgsfield, Veo 3, and Runway.' },
      { title: 'Visible gaps before you spend', text: 'A completeness meter counts unanswered required fields. You can fill them in or explicitly choose to compile anyway. Technical choices such as aspect ratio and duration remain direct controls.' },
      { title: 'A way to test the idea itself', text: 'After copying a prompt, you can record whether the result worked first time, needed more attempts, or was abandoned. Local statistics compare complete and incomplete specs. Reduced regeneration is a hypothesis being measured, not a promised result.' },
    ],
    workflow: [
      { title: 'Describe the idea', text: 'Choose image or video and enter what you want to make. Set the practical constraints and any non-negotiable details.' },
      { title: 'Fill in what matters', text: 'Use the fixed form, or connect your provider and let the question engine break down the subjects. Answer the questions that help define the result.' },
      { title: 'Compile and take it with you', text: 'Review missing requirements, then copy a prompt into your generation platform. Return afterward to record the outcome.' },
    ],
    notes: [
      'The app prepares prompts; it does not generate the final images or videos. The current implemented domains are image and video. Coding and broader requirement graphs remain future work.',
      'The Next.js app lives in spec-compiler-mvp. Install its dependencies and run npm run dev to use it locally. MCP integrations expose elicit_spec and compile_spec for compatible assistants.',
      'Specs and outcomes persist in the browser. Provider keys are stored locally; Anthropic requests are browser-direct, while other supported providers use a same-origin pass-through proxy that does not store the key. AI questions require a key; the fixed form remains available without one.',
    ],
    sources: [{ label: 'Project repository', href: 'https://github.com/Ashish-ReddyA/Give-AI-what-it-needs' }, { label: 'App documentation', href: 'https://github.com/Ashish-ReddyA/Give-AI-what-it-needs/blob/main/spec-compiler-mvp/README.md' }, { label: 'Roadmap', href: 'https://github.com/Ashish-ReddyA/Give-AI-what-it-needs/blob/main/ROADMAP.md' }],
  },
  {
    slug: 'agent-arena', name: 'Agent Arena', category: 'Different minds. Same arena.',
    image: '/images/arena.webp', className: 'arena',
    description: 'A controlled playground for autonomous agents: duels, solo experiments, builder challenges, and miniature societies.',
    href: 'https://github.com/Ashish-ReddyA/Agent-Arena',
    headline: 'Same world. Different minds.',
    introduction: 'A Gamemaster dashboard for studying autonomous agents under different conditions. Set the world, choose the participants, and observe how their behavior changes with the rules.',
    problem: 'An agent solving a task alone tells one story. Put two agents in competition, give a group scarce resources, or remove the objective entirely, and different questions emerge. Agent Arena makes those conditions explicit so each experiment has its own mechanics and observable outcomes.',
    facts: [{ label: 'Focus', value: 'Autonomous agent experiments' }, { label: 'Execution', value: 'Local Windows bridge + Docker' }, { label: 'Worlds', value: 'Four distinct arena modes' }],
    features: [
      { title: 'Duel · 2 agents', text: 'Two agents receive the same objective and a public score. An evidence threshold determines when a winner can be declared, making the comparison about verifiable results.' },
      { title: 'Solo Sandbox · 1 agent', text: 'One agent operates without a goal, opponent, or score. This is the observation baseline: what happens when an agent is given an environment and unstructured time?' },
      { title: 'Builder · 1–3 agents', text: 'Agents work toward a verifiable objective in a real workspace. Code and builds provide feedback, and the run ends when the goal check passes or the budget is exhausted.' },
      { title: 'Society · 3–8 agents', text: 'Several agents inhabit a shared world with scarce resources. Their exchanges, agreements, and emerging institutions become the subject of the experiment.' },
    ],
    workflow: [
      { title: 'Start the local environment', text: 'Run Docker Desktop, then use START_AGENT_ARENA.cmd from the repository to launch the dashboard and local bridge.' },
      { title: 'Set up the experiment', text: 'Choose an arena and agent count. Give each participant a provider, model, and its own credentials. Set the objective, evidence markers, and action permissions.' },
      { title: 'Observe and intervene', text: 'Follow activity and outcomes, respond to approval requests, or pause and terminate the run. Simulation mode offers a dashboard rehearsal without model calls or shell and browser actions.' },
    ],
    notes: [
      'The hosted dashboard is a control room; real execution happens on the operator’s Windows computer. Docker workspaces, provider keys, and signed-in browser profiles remain local. The local dashboard is recommended for live runs because browsers may block a hosted page from reaching localhost.',
      'Each agent has its own credentials and isolated Docker workspace. The cloud dashboard receives redacted summaries rather than raw shell output or browser contents. Keys remain in bridge memory during the session and are cleared when it ends.',
      'Configured policies govern which actions can execute, require approval, or are denied. Network and publishing permissions can be revoked during a run, and the kill switch removes an agent container. The interface reports actions and outcomes rather than private chain-of-thought.',
    ],
    sources: [{ label: 'Repository & run instructions', href: 'https://github.com/Ashish-ReddyA/Agent-Arena' }, { label: 'Architecture', href: 'https://github.com/Ashish-ReddyA/Agent-Arena/blob/main/docs/ARCHITECTURE.md' }],
  },
  {
    slug: 'agnys', name: 'Agnys', category: 'Every action leaves a trace.',
    image: '/images/agnys.webp', className: 'agnys',
    description: 'The flight recorder for AI agents. Capture activity, replay sessions, and turn agent actions into reviewable evidence.',
    href: 'https://agnys.net',
    headline: 'A record of what really happened.',
    introduction: 'Agnys captures the activity around AI agents and turns it into a searchable, replayable record. It gives developers and governance teams a way to inspect what an agent did after it was set in motion.',
    problem: 'A finished output rarely explains the whole run. Model calls, tool use, file changes, and shell commands can be scattered across systems. When something goes wrong, reconstructing the sequence becomes its own project. Agnys brings those events into one reviewable history.',
    facts: [{ label: 'Focus', value: 'Agent observability & evidence' }, { label: 'Access', value: 'Hosted product at agnys.net' }, { label: 'Record', value: 'Events, replay & exports' }],
    features: [
      { title: 'Capture the activity', text: 'A forwarder collects model calls, tool actions, file edits, and shell commands into an action feed. Supported capture paths include Claude, LangChain, LangGraph, VS Code, AutoGen Studio, LM Studio, Ollama, and Antigravity.' },
      { title: 'Reconstruct the session', text: 'Session replay follows a run from its trigger through the recorded actions to the outcome. AQL Search Lab adds queries, sequence searches, saved searches, and alerts across the history.' },
      { title: 'Look for behavioral changes', text: 'The product’s Behavioral DNA feature establishes normal patterns and flags deviations such as scope creep or suspicious activity for review.' },
      { title: 'Take the evidence with you', text: 'Hash-chained events make the audit history tamper-evident. PDF, CSV, and JSON exports support human review and machine verification. Governance checks map recorded evidence to supported frameworks.' },
    ],
    workflow: [
      { title: 'Connect the capture path', text: 'Start on the Agnys website and follow the setup for the tools you use. Supported automatic integrations can capture activity without changing application code.' },
      { title: 'Run and review', text: 'Let the agent work, then inspect the action feed, search the recorded events, or replay a session to understand its sequence.' },
      { title: 'Export a reviewable record', text: 'Package the relevant history for debugging, investigation, or governance review in the format your team needs.' },
    ],
    notes: [
      'Agnys is a separate hosted product. Visit its website for current onboarding, integration requirements, and product availability.',
      'The site describes mappings to the EU AI Act, GDPR, ISO 42001, and NIST AI RMF. These organize evidence for review; they do not make every deployment automatically compliant. Recording must be in place when the activity happens—missing historical events cannot be reconstructed as an original audit trail.',
    ],
    sources: [{ label: 'Agnys product website', href: 'https://agnys.net' }],
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
