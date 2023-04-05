import process from 'node:process'

/** @type {import('@enhance/types').EnhanceElemFn} */
export default function Index({ html, state }) {
  const { count } = state.store

  return html`
<style>
:host {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 65ch;
  padding: 3rem 1rem;
  margin: auto;
}
</style>

<h1>
  🫠 count:
  <mark style="background-color: lightcoral; padding: 0 .5rem">
    ${count.val}
  </mark>
</h1>

<p>Changing the start command to <code>begin dev</code> is fine, but keeping Sandbox in dev deps solves AWS SDK split between Node versions.</p>

<hr>

<h2><code>node -v</code> for this Node, right now</h2>
<pre>
${process.versions.node}
</pre>

<h2>on dev machine: <code>npm ls -g</code> with Node 18</h2>
<pre>
/[...]/fnm/node-versions/v18.15.0/installation/lib
├── corepack@0.15.3
└── npm@9.5.0
</pre>
<h3>and with Node 16</h3>
<pre>
├── corepack@0.17.0
└── npm@8.19.4
</pre>

<h2><code>npm ls</code> in project</h2>
<pre>
myproject@0.0.1 /[...]/myproject
├── @architect/functions@5.4.0
├── <mark>@architect/sandbox@5.5.4</mark>
├── @enhance/arc-plugin-enhance@5.0.5
├── @enhance/types@0.6.0
└── eslint@8.37.0
</pre>

<h2>this <code>.arc</code> manifest</h2>
<pre>
@app
myproject

@events
reckoning
  src jobs/events/apocalypse

  @tables
things
  key *String

  @plugins
enhance/arc-plugin-enhance

@aws
  runtime nodejs18.x
</pre>
`
}
