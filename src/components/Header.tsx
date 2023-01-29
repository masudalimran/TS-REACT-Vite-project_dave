import React, { ReactElement } from "react";

type Props = {
  title: string;
};

export default function Header({ title }: Props): ReactElement {
  return (
    <div>
      <h1 className="underline text-3xl">{title}</h1>
    </div>
  );
}
