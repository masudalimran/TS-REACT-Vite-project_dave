import { MouseEvent, ReactElement, ReactNode, useCallback } from "react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

export default function Counter({
  count,
  setCount,
  children,
}: Props): ReactElement {
  const increment = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void =>
      setCount((prev: number) => prev + 1),
    []
  );
  const decrement = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void =>
      setCount((prev: number) => prev - 1),
    []
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 border border-black rounded p-4">
        {children}
        <p className="text-3xl border border-black rounded-full px-5 my-4 bg-white uppercase">
          Count is {count}
        </p>
        <div className="flex justify-evenly items-center gap-4 w-full">
          <button
            className="border border-green-400 px-2 w-full text-3xl bg-green-400 hover:scale-95 duration-200 rounded-full cursor-pointer"
            onClick={increment}
          >
            +
          </button>
          <button
            className={`border  border-red-400 px-2 w-full text-3xl bg-red-400 ${
              count > 0
                ? "hover:scale-95 cursor-pointer"
                : "border-neutral-300 bg-neutral-300 text-white cursor-default"
            } duration-200 rounded-full `}
            onClick={decrement}
            disabled={count === 0}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}
