import classNames from "classnames";
import { ButtonState } from "@/types";

export function ProgressButton({ state, children, onClick, stateClasses }: {
	state: ButtonState,
	children: React.ReactNode,
	onClick: () => void,
	stateClasses?: Partial<Record<ButtonState, string>>
}) {
    const defaultClasses: Record<ButtonState, string> = {
        ready: "bg-blue-500 border-blue-500 text-white",
        success: "border-transparent text-green-600",
        uploading: "border-transparent text-gray-800"
    };

    stateClasses = Object.assign({}, defaultClasses, stateClasses);

    const baseClassName="font-medium py-2 px-4 rounded border border-2"

    return <button
        className={classNames(baseClassName, stateClasses[state])}
        onClick={onClick}
    >
        {children}
    </button>;
}
