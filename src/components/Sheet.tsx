import { onMount, onCleanup } from "solid-js";
import { isServer, NoHydration } from "solid-js/web";

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

export const Sheet = (props) => {
  useTooltipPositions();
  return <main><NoHydration>{props.children}</NoHydration></main>
}