import { ReactElement, ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function SubHeading({
  title = "My Sub heading",
  children,
}: Props): ReactElement {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <h2 className="text-2xl">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
