import "./index.css";

import { Title } from 'solid-meta';
import { onCleanup, onMount } from 'solid-js';
import { isServer } from "solid-js/web";

export default function Home() {
  if (!isServer) {
    const handler = () => {
      const midHeight = window.innerHeight >> 1;
      const midWidth = window.innerWidth >> 1;
      const tooltips = Array.from(document.querySelectorAll('[role="tooltip"]'));
      tooltips.forEach((tooltip) => {
        const opener = tooltip.previousSibling as HTMLDataElement;
        if (opener) {
          const pos = opener.getBoundingClientRect()
          if (pos) {
            tooltip.classList.toggle('bottom', pos.bottom - (pos.height >> 1) > midHeight);
            tooltip.classList.toggle('right', pos.right - (pos.width >> 1) > midWidth);
          }
        }
      })
    };
    globalThis.window.addEventListener('resize', handler);
    globalThis.window.addEventListener('scroll', handler);
    onMount(handler);
    onCleanup(() => {
      globalThis.window.removeEventListener('resize', handler);
      globalThis.window.removeEventListener('scroll', handler);
    });
  }
  return (
    <main>
      <Title>Solid Cheat Sheet</Title>
      <h1>Solid Cheat Sheet</h1>
      <section>
        <dl>
          <dt tabIndex="0" aria-describedby="reactiveState-desc"><h2>Reactive state</h2></dt>
          <dd role="tooltip" id="reactiveState-desc">
            In Solid.js, state is tracked inside a reactive root, which registers function calls (even if through a store getter). Effects and memos are later re-evaluated when state is updated. This allows a very precise control of reactivity.<br/><br/>
            It also means that evaluating reactive state outside of the reactive root, i.e. by destructuring store objects, will result in a loss of reactivity.<br/>
            <a href="https://www.solidjs.com/guides/reactivity">Guide</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createSignal-desc"><code>createSignal</code> - simple state</dt>
          <dd role="tooltip" id="createSignal-desc">
            <pre><code>const [<span class="var">getter</span>, <span class="var">setter</span>] = <span class="func">createSignal</span>(<span class="var">initialValue</span>)</code></pre>
            <code><span class="func">getter</span>()</code> reads and tracks the value if inside reactive root<br/>
            <code><span class="func">setter</span>(<span class="var">value</span>)</code> overwrites the value and triggers state updates<br/><br/>
            The initial value is optional, createSignal can be typed in TypeScript with a generic.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createsignal">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createMemo-desc"><code>createMemo</code> - derived state</dt>
          <dd role="tooltip" id="createMemo-desc">
            <pre><code>const <span class="var">getter</span> = <span class="func">createMemo</span>((<span class="var">lastValue</span>) =&gt; <span class="var">memoizedValue</span>)</code></pre>
            <code><span class="func">getter</span>()</code> reads and tracks the derived value if inside reactive root<br/>
            <a href="https://www.solidjs.com/docs/latest/api#creatememo">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createResource-desc"><code>createResource</code> - async state</dt>
          <dd role="tooltip" id="createResource-desc">
            <pre><code>const [<span class="var">resource</span>, &#123; <span class="var">mutate</span>, <span class="var">refetch</span> &#125;] ={'\n  '}
<span class="func">createResource</span>(<span class="var">fetcher</span>, <span class="var">options</span>){'\n'}
<span class="comment">// or</span>{'\n'}
const [<span class="var">resource</span>, &#123; <span class="var">mutate</span>, <span class="var">refetch</span> &#125;] ={'\n  '}
<span class="func">createResource</span>(<span class="var">source</span>, <span class="var">fetcher</span>, <span class="var">options</span>)
</code></pre>
            TODO
          </dd>
          <dt tabIndex="0" aria-describedby="createStore-desc"><code>createStore</code> - state objects</dt>
          <dd role="tooltip" id="createStore-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="produce-desc"><code>produce</code> - local store mutation</dt>
          <dd role="tooltip" id="produce-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="reconcile-desc"><code>reconcile</code> - store diffing</dt>
          <dd role="tooltip" id="reconcile-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="createMutable-desc"><code>createMutable</code> - store with setters</dt>
          <dd role="tooltip" id="createMutable-desc">TODO</dd>
        </dl>
      </section>
      <section>
        <h2>Effects</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="createEffect-desc"><code>createEffect</code> - run side effect</dt>
          <dd role="tooltip" id="createEffect-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="createDeferred-desc"><code>createDeferred</code> - defer signal when idle</dt>
          <dd role="tooltip" id="createDeferred-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="createComputed-desc"><code>createComputed</code> - effect immediately before render</dt>
          <dd role="tooltip" id="createComputed-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="createRenderEffect-desc"><code>createRenderEffect</code> - effect during rendering</dt>
          <dd role="tooltip" id="createRenderEffect-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="createSelector-desc"><code>createSelector</code> - signal only when selected</dt>
          <dd role="tooltip" id="createSelector-desc">TODO</dd>
        </dl>
      </section>
      <section>
        <h2>Reactive utilities</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="untrack-desc"><code>untrack</code> - reads without tracking updates</dt>
          <dd role="tooltip" id="untrack-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="batch-desc"><code>batch</code> - synchronous updates</dt>
          <dd role="tooltip" id="batch-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="on-desc"><code>on</code> - tracks updates without reading</dt>
          <dd role="tooltip" id="on-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="createRoot-desc"><code>createRoot</code> - creates tracking context</dt>
          <dd role="tooltip" id="createRoot-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="mergeProps-desc"><code>mergeProps</code> - reactive object merge</dt>
          <dd role="tooltip" id="mergeProps-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="splitProps-desc"><code>splitProps</code> - reactive object splitting</dt>
          <dd role="tooltip" id="splitProps-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="useTransition-desc"><code>useTransition</code> - batch asynchronous updates</dt>
          <dd role="tooltip" id="useTransition-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="observable-desc"><code>observable</code> - signal to rxjs observable</dt>
          <dd role="tooltip" id="observable-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="mapArray-desc"><code>mapArray</code> - reactively maps fixed length array</dt>
          <dd role="tooltip" id="mapArray-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="indexArray-desc"><code>indexArray</code> - reactively maps varying length array</dt>
          <dd role="tooltip" id="indexArray-desc">TODO</dd>
        </dl>
      </section>
      <section>
        <h2>Component APIs</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="createContext-desc"><code>createContext</code> - state bound to component tree</dt>
          <dd role="tooltip" id="createContext-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="useContext-desc"><code>useContext</code> - use bound state</dt>
          <dd role="tooltip" id="useContext-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="children-desc"><code>children</code> - reactively unwrap children</dt>
          <dd role="tooltip" id="children-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="lazy-desc"><code>lazy</code> - component from promise</dt>
          <dd role="tooltip" id="lazy-desc">TODO</dd>
        </dl>
      </section>
      <section>
        <h2>Rendering</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="render-desc"><code>render</code> - applies component to mount point</dt>
          <dd role="tooltip" id="render-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="hydrate-desc"><code>hydrate</code> - render, but with hydration</dt>
          <dd role="tooltip" id="hydrate-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="renderToString-desc"><code>renderToString</code> - html string from component</dt>
          <dd role="tooltip" id="renderToString-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="renderToStringAsync-desc"><code>renderToStringAsync</code> - async renderToString</dt>
          <dd role="tooltip" id="renderToStringAsync-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="pipeToNodeWritable-desc"><code>pipeToNodeWritable</code> - render to node stream</dt>
          <dd role="tooltip" id="pipeToNodeWritable-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="pipeToWritable-desc"><code>pipeToWritable</code> - render to web stream</dt>
          <dd role="tooltip" id="pipeToWritable-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="isServer-desc"><code>isServer</code> - true if run in ssr mode</dt>
          <dd role="tooltip" id="isServer-desc">TODO</dd>
        </dl>
      </section>
      <section>
        <h2>&lt;JSX prop=&#123;value&#125;</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="ref-desc"><code>ref</code> - access DOM element</dt>
          <dd role="tooltip" id="ref-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="classList-desc"><code>classList</code> - class names from object</dt>
          <dd role="tooltip" id="classList-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="style-desc"><code>style</code> - inline styles (string or object)</dt>
          <dd role="tooltip" id="style-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="innerHTML-desc"><code>innerHTML</code> - directly inject HTML</dt>
          <dd role="tooltip" id="innerHTML-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="textContent-desc"><code>textContent</code> - directly inject Text</dt>
          <dd role="tooltip" id="textContent-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="on-desc"><code>on[event]</code> - delegated dom events</dt>
          <dd role="tooltip" id="on-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="ondirect-desc"><code>on:[event]</code> - direct dom events</dt>
          <dd role="tooltip" id="ondirect-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="oncapture-desc"><code>oncapture:[event]</code> - capturing dom events</dt>
          <dd role="tooltip" id="oncapture-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="use-desc"><code>use:[directive]</code> - use custom directive</dt>
          <dd role="tooltip" id="use-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="prop-desc"><code>prop:[property]</code> - direct dom property access</dt>
          <dd role="tooltip" id="prop-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="attr-desc"><code>attr:[attribute]</code> - direct dom attribute access</dt>
          <dd role="tooltip" id="attr-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="once-desc"><code>/*@once*/</code> - untrack for properties</dt>
          <dd role="tooltip" id="once-desc">
            <pre><code>&lt;Component prop=&#123;/*@once*/prop.foo&#125; /&gt;</code></pre>
            Will make sure <code>prop.foo</code> will not be tracked
          </dd>
        </dl>
        <h2>/&gt;&#123;props.children&#125;&lt;/JSX&gt;</h2>
      </section>
      <section>
        <h2>JSX Control Flow</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="Show-desc"><code>&lt;Show&gt;</code> - conditionally show content</dt>
          <dd role="tooltip" id="Show-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="For-desc"><code>&lt;For&gt;</code> - map fixed length array</dt>
          <dd role="tooltip" id="For-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="Index-desc"><code>&lt;Index&gt;</code> - map varying length array</dt>
          <dd role="tooltip" id="Index-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="Switch-desc"><code>&lt;Switch&gt;/&lt;Match&gt;</code> - multiple conditions</dt>
          <dd role="tooltip" id="Switch-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="Dynamic-desc"><code>&lt;Dynamic&gt;</code> - variable component</dt>
          <dd role="tooltip" id="Dynamic-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="Portal-desc"><code>&lt;Portal&gt;</code> - render elsewhere</dt>
          <dd role="tooltip" id="Portal-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="ErrorBoundary-desc"><code>&lt;ErrorBoundary&gt;</code> - map fixed length array</dt>
          <dd role="tooltip" id="ErrorBoundary-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="Suspense-desc"><code>&lt;Suspense&gt;</code> - fallback for async state</dt>
          <dd role="tooltip" id="Suspense-desc">TODO</dd>
          <dt tabIndex="0" aria-describedby="SuspenseList-desc"><code>&lt;<em>SuspenseList</em>&gt;</code> - organize async fallback</dt>
          <dd role="tooltip" id="SuspenseList-desc">TODO</dd>
        </dl>
      </section>
    </main>
  );
}
