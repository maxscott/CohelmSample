"use client";

import { useParams } from "next/navigation";
import ProgressSpinner from "@/components/progress-spinner";
import useCaseDetail from "@/hooks/use-case-detail";
import { Option, Step } from "@/types";
import { FaCheckSquare, FaMagic } from "react-icons/fa";


function ProgressBadge({ is_met, is_complete }: {
	is_met: boolean,
	is_complete: boolean
}) {
	return <span className={`px-3 py-1 ml-2 align-middle text-sm font-semibold rounded-full text-white ${is_complete ? (is_met ? "bg-green-500" : "bg-red-500") : "bg-gray-500"}`}>
		{is_complete ? (is_met ? "Met" : "Not Met") : "Incomplete"}
	</span>
}

function CptCode({ index, code }: { index: number, code: string }) {
	return <a key={index} target="_blank" href={`https://www.aapc.com/codes/cpt-codes/${code}`} className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 hover:underline hover:bg-blue-100 hover:text-blue-500">{code}</a>
}

function StepContent({ index, step, last }: { index: number, step: Step, last?: boolean }) {
	return <li key={index} className="mb-4 list-none border-2 rounded-xl px-6 py-3 relative">
		{!last && <hr className="w-[2px] h-full bg-gray-200 absolute top-12 left-[-27px]" />}

		<span className="bg-gray-600 absolute p-[6px] rounded-full top-6 left-[-40px]">
			<FaMagic className="text-gray-200 text-sm" />
		</span>

		<small className="text-gray-400 font-semibold">Instructions</small>
		<h3 className="text-lg font-semibold mb-3">{step.question}</h3>

		{/* Display options with green for selected, vertically, like a multiple choice */}
		<div className="mb-4 relative">
			<span className="absolute top-[-10px] left-5 uppercase p-1 px-3 bg-green-500 text-white rounded-sm text-xs">selected options</span>

			{step.options.filter((o: Option) => o.selected).map((option: Option, index: number) => {
				const opt = option;
				const optKey = `${step.key}-${opt.key}`;
				const optClass = opt.selected ? "bg-gray-100 border border-4 border-green-500 rounded-md" : "";
				return <div key={opt.key} className={`flex items-center mb-2 p-2 py-4 ${optClass}`}>
					<label htmlFor={optKey}><FaCheckSquare className="inline text-lg align-middle text-green-600"/> {opt.text}</label>
				</div>
			})}
		</div>
		<div className="mb-1 text-sm">
			{step.reasoning.split('\n').map((a: string, i: number) => <p key={i}>{a}<br /></p>)}
		</div>
	</li>
}

export default function CaseDetail() {
	const params = useParams<{ case_id: string }>();
	const { caseDetail, caseError } = useCaseDetail(params.case_id);

	return <>
		{caseError && <div className="bg-red-500 text-white rounded-lg p-4 m-4">{caseError}</div>}
		{!caseError && !caseDetail && <div>Loading Component Data...</div>}
		{caseDetail && (
			<div className="bg-white rounded-lg shadow-lg p-6">
				<h1 className="text-3xl font-semibold mb-4">{caseDetail.procedure_name}
					<ProgressBadge {...caseDetail} />
				</h1>
				<h2 className="text-lg mb-2">Created: {new Date(caseDetail.created_at).toLocaleDateString()}</h2>

				{/* CPT Codes */}
				<div className="mb-4">
					<div className="flex flex-wrap max-w-xs">
						{caseDetail.cpt_codes.map((code, index) => <CptCode key={index} index={index} code={code} />)}
					</div>
				</div>

				{/* Summary */}
				<div className="mb-4">
					<h2 className="text-lg mb-2">Summary</h2>
					{caseDetail.summary ? <p>{caseDetail.summary}</p> : <p><ProgressSpinner /><br /></p>}
				</div>

				{/* Steps */}
				<div className="mb-4">
					{caseDetail.steps.length ? <ol className="list-disc pl-6">
						{caseDetail.steps.map((step, index) => (
							<StepContent key={index} index={index} step={step} last={index===caseDetail.steps.length-1}/>
						))}
					</ol> : <p><ProgressSpinner /><br /></p>}
				</div>

			</div>
		)}
	</>;
}

