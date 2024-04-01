"use client";

import classNames from "classnames";
import { useDashboard } from "@/context/dashboard-context";
import { useRouter } from "next/navigation";

export default function ContinueButton() {
	const router = useRouter();
	const { guidelinesProgress, medicalProgress } = useDashboard();

	const canContinue = 
		guidelinesProgress === "success" &&
		medicalProgress === "success";

	const handleContinue = () => {
		if (!canContinue) return;

		const caseBody = { case_id: "123" };

		router.push(`/dashboard/case/${caseBody.case_id}`);
	}

	const conditionalStyles = canContinue ?
		"bg-green-600 text-white" :
		"bg-gray-300 text-gray-500";

	return <button
		disabled={!canContinue}
		className={classNames("font-medium py-2 px-4 rounded", conditionalStyles)}
		onClick={handleContinue}
	>
		{canContinue ? "Continue" : "Complete all steps to continue"}
	</button>;
}
