export type ButtonState = "ready" | "loading" | "success";

export interface Option {
	key: string;
	text: string;
	selected: boolean;
}

interface Evidence {
	content: string;
	page_number: number;
	pdf_name: string;
	event_datetime: string | null;
}

export interface Step {
	key: string;
	question: string;
	options: Option[];
	reasoning: string;
	decision: string;
	next_step: string;
	is_met: boolean;
	is_final: boolean;
	evidence: Evidence[];
	logic?: { text: string; selected: boolean }[];
}

export interface CaseDetail {
	case_id: string;
	created_at: string;
	status: 'submitted' | 'in_progress' | 'completed';
	procedure_name: string;
	cpt_codes: string[];
	summary?: string;
	is_met: boolean;
	is_complete: boolean;
	steps: Step[];
}
