import { createContext, type ParentComponent, useContext } from "solid-js";

import './Section.css';

export const Section = (props) => (
  <section class="cheat-sheet">
    <dl class={props.class}>
      {props.children}
    </dl>
  </section>
);

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
