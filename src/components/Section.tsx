import { createContext, type ParentComponent, useContext, onMount, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";

import './Section.css';

const useTooltipPositions: (() => void) & { applied?: boolean } = isServer ? () => {} : () => {
  if (useTooltipPositions.applied) {
    return;
  }
  useTooltipPositions.applied = true;
  const handler = () => {
    const midHeight = globalThis.window.innerHeight >> 1;
    const midWidth = globalThis.window.innerWidth >> 1;
    const tooltips = Array.from(globalThis.document?.querySelectorAll('.cheat-sheet [role="tooltip"]'));
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
    useTooltipPositions.applied = false;
  });
}


export const Section = (props) => {
  useTooltipPositions();
  return (<section class="cheat-sheet">
    <dl class={props.class}>
      {props.children}
    </dl>
  </section>);
}

const SectionItemContext = createContext<string>('');

export const SectionItem: ParentComponent<{ id: string }> = (props) => {
  return (
    <SectionItemContext.Provider value={props.id}>
      {props.children}
    </SectionItemContext.Provider>
  )
};

export const SectionItemHead = (props) => {
  const id = useContext(SectionItemContext);
  return <dt tabIndex="0" aria-describedby={id}>{props.children}</dt>
}

export const SectionItemText = (props) => {
  const [id] = useContext(SectionItemContext);
  return <dd role="tooltip" id={id}>{props.children}</dd>
}
