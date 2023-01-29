import { ReactElement, ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export default function List<T>({ items, render }: ListProps<T>): ReactElement {
  return (
    <ul className="mt-6">
      {items.map((x, i) => (
        <li key={i} className="list-decimal font-bold tracking-[5px]">
          {" "}
          {render(x)}
        </li>
      ))}
    </ul>
  );
}
