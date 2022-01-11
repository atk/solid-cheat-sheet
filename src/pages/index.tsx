import "./index.css";

import { Title } from 'solid-meta';
import { onCleanup, onMount } from 'solid-js';
import { isServer } from "solid-js/web";

export default function Home() {
  if (!isServer) {
    const handler = () => {
      const midHeight = globalThis.window.innerHeight >> 1;
      const midWidth = globalThis.window.innerWidth >> 1;
      const tooltips = Array.from(globalThis.document.querySelectorAll('[role="tooltip"]'));
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
</code></pre><br/>
            <code><span class="func">fetcher</span>()</code> is a function that receives the output of <code><span class="func">source()</span></code>, if given, and returns a Promise that resolves to the value of the <code><span class="var">resource</span>()</code>, which also contains the properties <code><span class="key">loading</span><span class="comment"> (boolean)</span></code> and <code><span class="key">error</span><span class="comment"> (Error | undefined)</span></code>. <code><span class="var">mutate</span>(<span class="var">value</span>)</code> allows overwriting the value and <code><span class="var">refetch</span>()</code> will re-run the last call of <code><span class="func">fetcher</span>()</code>.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createresource">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createStore-desc"><code>createStore</code> - state objects</dt>
          <dd role="tooltip" id="createStore-desc">
            <pre><code>const [<span class="var">store</span>, <span class="var">setStore</span>] = <span class="func">createStore</span>(<span class="var">initialValue</span>{')\n'}
<span class="var">store</span>.<span class="key">nested</span>.<span class="key">prop</span>
<span class="comment"> // is a getter that will be tracked</span>{'\n'}
<span class="func">setStore</span>(<span class="lit">'nested'</span>, <span class="lit">'prop'</span>, <span class="var">value</span>{')\n'}
<span class="func">setStore</span>(<span class="lit">'list'</span>, [<span class="lit">2</span>], <span class="var">value</span>{')\n'}</code></pre>
            Creates a reactive <em>store</em>, an object that tracks read access to all (sub-)properties and a versatile setter function to allow fine-grained manipulation.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createStore">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="produce-desc"><code>produce</code> - local store mutation</dt>
          <dd role="tooltip" id="produce-desc">
            <pre><code><span class="func">setStore</span>(<span class="func">produce</span>(<span class="var">store</span> =&gt; <span class="var">store</span>.<span class="key">list</span>.<span class="func">push</span>(<span class="lit">'new item'</span>))</code></pre>
            Allows direct manipulation of the store object like in <a href="https://immerjs.github.io/immer/">Immer</a>.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#produce">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="reconcile-desc"><code>reconcile</code> - store diffing</dt>
          <dd role="tooltip" id="reconcile-desc">
            <pre><code><span class="func">setStore</span>(<span class="lit">'todos'</span>, <span class="func">reconcile</span>(<span class="var">todos</span>))</code></pre>
            Diffs store with another immutable version, e.g. from a large API response<br/>
            <a href="https://www.solidjs.com/docs/latest/api#reconcile">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="unwrap-desc"><code>unwrap</code> - returns data without the store</dt>
          <dd role="tooltip" id="unwrap-desc">
            Gets the data out of a store so it is no longer reactive or connected to the setter.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#unwrap">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createMutable-desc"><code>createMutable</code> - store with setters</dt>
          <dd role="tooltip" id="createMutable-desc">
            Wraps a store into a proxy with reactive setters, so you can use it like in <a href="https://mobx.js.org">MobX</a>/<a href="https://vuejs.org/">Vue</a>.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createMutable">Docs</a>
          </dd>
        </dl>
      </section>
      <section>
        <h2>Effects</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="createEffect-desc"><code>createEffect</code> - run side effect</dt>
          <dd role="tooltip" id="createEffect-desc">
            <pre><code><span class="func">createEffect</span>{'((previous) => {\n  '}<span class="key">return</span> <span class="func">setValue</span>(<span class="func">otherValue</span>{'())\n'}
&#125;)</code></pre>
            Runs a reactive side effect initially and then whenever a tracked state changes after rendering.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createeffect">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="onMount-desc"><code>onMount</code> - run side effect on mount</dt>
          <dd role="tooltip" id="onMount-desc">
            <pre><code><span class="func">onMount</span>{'(() => '}<span class="var">ref</span>.<span class="func">setAttribute</span>(<span class="func">value</span>{'()))'}</code></pre>
            Runs a side effect only on mount, regardless of signals used, like an untracked createEffect.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#onmount">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="onCleanup-desc"><code>onCleanup</code> - run side effect on unmount</dt>
          <dd role="tooltip" id="onCleanup-desc">
            <pre><code><span class="func">onCleanup</span>{'(() => '}<span class="var">connection</span>.<span class="func">close</span>())</code></pre>
            Runs a side effect on unmount (or <code><span class="func">dispose</span>()</code> call of a reactive root created through <code><span class="func">createRoot</span>()</code>).<br/>
            <a href="https://www.solidjs.com/docs/latest/api#oncleanup">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="onError-desc"><code>onError</code> - run side effect on error</dt>
          <dd role="tooltip" id="onError-desc">
            <pre><code><span class="func">onError</span>{'(() => '}<span class="var">connection</span>.<span class="func">retry</span>())</code></pre>
            Runs a side effect on any error thrown within the reactive root.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#onerror">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createDeferred-desc"><code>createDeferred</code> - defer signal when idle</dt>
          <dd role="tooltip" id="createDeferred-desc">
            Creates a new signal from an input signal that is deferred until all other side effects are run or an optional timeout is reached.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createdeferred">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createComputed-desc"><code>createComputed</code> - effect immediately before render</dt>
          <dd role="tooltip" id="createComputed-desc">
            Runs a side effect like <code><span class="func">createEffect</span>()</code>, but before instead of after rendering.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createcomputed">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createRenderEffect-desc"><code>createRenderEffect</code> - effect during rendering</dt>
          <dd role="tooltip" id="createRenderEffect-desc">
            Like <code><span class="func">createEffect</span>()</code>, but is called while rendering.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createrendereffect">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createReaction-desc"><code>createReaction</code> - effect with external tracking</dt>
          <dd role="tooltip" id="createReaction-desc">
            <pre><code><span class="key">const </span><span class="var">track</span> = <span class="func">createReaction</span>{'(() => { ... })\n'}
            <span class="func">track</span>(() =&gt; <span class="func">signal</span>())</code></pre>
            Creates an effect that has an external tracking part.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createreaction">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createSelector-desc"><code>createSelector</code> - signal only when selected</dt>
          <dd role="tooltip" id="createSelector-desc">
            <pre><code><span class="keyword">const </span><span class="var">isSelected</span> = <span class="func">createSelector</span>(<span class="var">selectedId</span>)</code></pre>
            Creates a conditional signal that only notifies subscribers when entering or exiting their key matching the value.<br/>
            <a href="https://www.solidjs.com/docs/latest/api#createselector">Docs</a>
          </dd>
        </dl>
      </section>
      <section>
        <h2>Reactive Tracking</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="untrack-desc"><code>untrack</code> - reads without tracking updates</dt>
          <dd role="tooltip" id="untrack-desc">
            <pre><code><span class="func">createEffect</span>(() =&gt; <span class="var">console</span>.<span class="func">log</span>(<span class="func">untrack</span>(<span class="func">a</span>()))</code></pre>
            Reads the signal <code><span class="func">a</span>()</code> without the effect being subscribed to changes, while still tracking everything else.<br/>
            <a href="https://www.solidjs.com/docs/api#untrack">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="batch-desc"><code>batch</code> - synchronous updates</dt>
          <dd role="tooltip" id="batch-desc">
            <pre><code><span class="func">createEffect</span>(() =&gt; <span class="func">batch</span>(() =&gt;<span class="func">setB</span>(<span class="func">setA</span>(<span class="var">value</span>))))</code></pre>
            Without <code><span class="func">batch</span>()</code>, the signal <code><span class="func">a</span>()</code> would have been updated and only then the signal <code><span class="func">b</span>()</code>, but using it ensures, that the notification of tracking effects are deferred until both are ready<br/>
            <a href="https://www.solidjs.com/docs/api#batch">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="on-desc"><code>on</code> - explicitly tracks updates</dt>
          <dd role="tooltip" id="on-desc">
            <pre><code><span class="func">createEffect</span>(<span class="func">on</span>(<span class="func">a</span>, (<span class="var">a</span>) =&gt; <span class="var">console</span>.<span class="func">log</span>(<span class="var">a</span>, <span class="func">b</span>()))</code></pre>
            The first argument is either an array of signal accessors or a single signal accessor to be tracked, the second is a function that receives the value(s) of these tracked signals and won't track any signal inside. It's basically the opposite of <code><span class="func">untrack</span>()</code>.<br/>
            <a href="https://www.solidjs.com/docs/api#on">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="useTransition-desc"><code>useTransition</code> - batch asynchronous updates</dt>
          <dd role="tooltip" id="useTransition-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#usetransition">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="startTransition-desc"><code>startTransition</code> - batch asynchronous updates</dt>
          <dd role="tooltip" id="startTransition-desc">
            Convenience shorthand for <code><span class="func">useTransition</span>()[<span class="lit">1</span>](...)</code> to directly start the transition without checking if it is pending.<br/>
            <a href="https://www.solidjs.com/docs/api#starttransition">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="observable-desc"><code>observable</code> - signal to rxjs observable</dt>
          <dd role="tooltip" id="observable-desc">
            <pre><code><span class="key">import &#123; </span><span class="var">from</span> &#125; <span class="key">from </span><span class="lit">"rxjs"</span>{'\n'}<span class="key">const</span> [<span class="var">value</span>, <span class="var">setValue</span>] = <span class="func">createSignal</span>(<span class="lit">0</span>{')\n'}<span class="func">from</span>(<span class="func">observable</span>(<span class="func">value</span>)).<span class="func">subscribe</span>(...)</code></pre>
            Creates an observable from a signal to be consumed by any observable library like rxjs.<br/>
            <a href="https://www.solidjs.com/docs/api#observable">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="from-desc"><code>from</code> - rxjs observable to signal</dt>
          <dd role="tooltip" id="from-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#from">Docs</a>
          </dd>
        </dl>
      </section>
      <section>
        <h2>Reactive scope</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="createRoot-desc"><code>createRoot</code> - creates tracking context</dt>
          <dd role="tooltip" id="createRoot-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#createroot">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="getOwner-desc"><code>getOwner</code> - get the current tracking context</dt>
          <dd role="tooltip" id="getOwner-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#getowner">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="runWithOwner-desc"><code>runWithOwner</code> - runs in tracking context</dt>
          <dd role="tooltip" id="runWithOwner-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#runwithowner">Docs</a>
          </dd>          
        </dl>
      </section>
      <section>
        <h2>Reactive Data</h2>
        <dl>          
          <dt tabIndex="0" aria-describedby="mergeProps-desc"><code>mergeProps</code> - reactive object merge</dt>
          <dd role="tooltip" id="mergeProps-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#mergeprops">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="splitProps-desc"><code>splitProps</code> - reactive object splitting</dt>
          <dd role="tooltip" id="splitProps-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#splitprops">Docs</a>
          </dd>          
          <dt tabIndex="0" aria-describedby="mapArray-desc"><code>mapArray</code> - reactively maps fixed length array</dt>
          <dd role="tooltip" id="mapArray-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#maparray">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="indexArray-desc"><code>indexArray</code> - reactively maps varying length array</dt>
          <dd role="tooltip" id="indexArray-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#indexarray">Docs</a>
          </dd>
        </dl>
      </section>
      <section>
        <h2>Component APIs</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="createContext-desc"><code>createContext</code> - state bound to component tree</dt>
          <dd role="tooltip" id="createContext-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#createcontext">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="useContext-desc"><code>useContext</code> - use bound state</dt>
          <dd role="tooltip" id="useContext-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#usecontext">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="children-desc"><code>children</code> - reactively unwrap children</dt>
          <dd role="tooltip" id="children-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#children">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="lazy-desc"><code>lazy</code> - component from promise</dt>
          <dd role="tooltip" id="lazy-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#lazy">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="createUniqueId-desc"><code>createUniqueId</code> - unique ID for components</dt>
          <dd role="tooltip" id="createUniqueId-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#createuniqueid">Docs</a>
          </dd>
        </dl>
      </section>
      <section>
        <h2>Rendering</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="render-desc"><code>render</code> - applies component to mount point</dt>
          <dd role="tooltip" id="render-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#render">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="hydrate-desc"><code>hydrate</code> - render, but with hydration</dt>
          <dd role="tooltip" id="hydrate-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#hydrate">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="renderToString-desc"><code>renderToString</code> - html string from component</dt>
          <dd role="tooltip" id="renderToString-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#rendertostring">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="renderToStringAsync-desc"><code>renderToStringAsync</code> - async renderToString</dt>
          <dd role="tooltip" id="renderToStringAsync-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#rendertostringasync">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="renderToStream-desc"><code>renderToStream</code> - render to (node/web) stream</dt>
          <dd role="tooltip" id="renderToStream-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#rendertostream">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="isServer-desc"><code>isServer</code> - true if run in ssr mode</dt>
          <dd role="tooltip" id="isServer-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#isserver">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="generateHydrationScript-desc"><code>generateHydrationScript</code> - hydrate SSR components</dt>
          <dd role="tooltip" id="generateHydrationScript-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#generatehydrationscript">Docs</a>
          </dd>
        </dl>
      </section>
      <section>
        <h2>&lt;JSX prop=&#123;value&#125;</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="ref-desc"><code>ref</code> - access DOM element</dt>
          <dd role="tooltip" id="ref-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#ref">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="classList-desc"><code>classList</code> - class names from object</dt>
          <dd role="tooltip" id="classList-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#classlist">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="style-desc"><code>style</code> - inline styles (string or object)</dt>
          <dd role="tooltip" id="style-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#style">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="innerHTML-desc"><code>innerHTML</code> - directly inject HTML</dt>
          <dd role="tooltip" id="innerHTML-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#innerhtml">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="textContent-desc"><code>textContent</code> - directly inject Text</dt>
          <dd role="tooltip" id="textContent-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#textcontent">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="on__-desc"><code>on[event]</code> - delegated dom events</dt>
          <dd role="tooltip" id="on__-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#on__">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="on_event-desc"><code>on:[event]</code> - direct dom events</dt>
          <dd role="tooltip" id="on_event-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#on%3A___%2Foncapture%3A___">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="oncapture-desc"><code>oncapture:[event]</code> - capturing dom events</dt>
          <dd role="tooltip" id="oncapture-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#on%3A___%2Foncapture%3A___">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="use-desc"><code>use:[directive]</code> - use custom directive</dt>
          <dd role="tooltip" id="use-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#use%3A___">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="prop-desc"><code>prop:[property]</code> - direct dom property access</dt>
          <dd role="tooltip" id="prop-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#prop%3A___">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="attr-desc"><code>attr:[attribute]</code> - direct dom attribute 
          access</dt>
          <dd role="tooltip" id="attr-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#attr%3A___">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="once-desc"><code>/*@once*/</code> - untrack for properties</dt>
          <dd role="tooltip" id="once-desc">
            <pre><code>&lt;<span class="func">Component</span> <span class="key">prop</span>=&#123;<span class="comment">/*@once*/</span><span class="var">prop</span>.<span class="key">foo</span>&#125; /&gt;</code></pre>
            Will make sure <code>prop.foo</code> will not be tracked<br/>
            <a href="https://www.solidjs.com/docs/latest/api#%2F*-%40once-*%2F">Docs</a>
          </dd>
        </dl>
        <h2>/&gt;&#123;props.children&#125;&lt;/JSX&gt;</h2>
      </section>
      <section>
        <h2>JSX Control Flow</h2>
        <dl>
          <dt tabIndex="0" aria-describedby="Show-desc"><code>&lt;Show&gt;</code> - conditionally show content</dt>
          <dd role="tooltip" id="Show-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<show>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="For-desc"><code>&lt;For&gt;</code> - map fixed length array</dt>
          <dd role="tooltip" id="For-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<for>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="Index-desc"><code>&lt;Index&gt;</code> - map varying length array</dt>
          <dd role="tooltip" id="Index-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<index>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="Switch-desc"><code>&lt;Switch&gt;/&lt;Match&gt;</code> - multiple conditions</dt>
          <dd role="tooltip" id="Switch-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<switch>%2F<match>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="Dynamic-desc"><code>&lt;Dynamic&gt;</code> - variable component</dt>
          <dd role="tooltip" id="Dynamic-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<dynamic>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="Portal-desc"><code>&lt;Portal&gt;</code> - render elsewhere</dt>
          <dd role="tooltip" id="Portal-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<portal>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="ErrorBoundary-desc"><code>&lt;ErrorBoundary&gt;</code> - map fixed length array</dt>
          <dd role="tooltip" id="ErrorBoundary-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<errorboundary>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="Suspense-desc"><code>&lt;Suspense&gt;</code> - fallback for async state</dt>
          <dd role="tooltip" id="Suspense-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<suspense>">Docs</a>
          </dd>
          <dt tabIndex="0" aria-describedby="SuspenseList-desc"><code>&lt;<em>SuspenseList</em>&gt;</code> - organize async fallback</dt>
          <dd role="tooltip" id="SuspenseList-desc">
            TODO<br/>
            <a href="https://www.solidjs.com/docs/api#<suspenselist>">Docs</a>
          </dd>
        </dl>
      </section>
    </main>
  );
}
