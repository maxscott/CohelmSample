export default class CaseService {
	private baseUrl = 'http://localhost:8000/api';

	async createCase(status: string): Promise<{ case_id: string }> {
		const response = await fetch(`${this.baseUrl}/cases`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ status }),
		});

		if (!response.ok) {
			throw new Error('Failed to create case');
		}

		return response.json();
	}

	async getCaseById(id: string): Promise<{ case_id: string }> {
		const response = await fetch(`${this.baseUrl}/cases/${id}`);

		if (!response.ok) {
			throw new Error('Failed to get case');
		}

		return response.json();
	}

	async getCases(): Promise<Array<{ case_id: string }>> {
		const response = await fetch(`${this.baseUrl}/cases`);

		if (!response.ok) {
			throw new Error('Failed to get cases');
		}

		return response.json();
	}
}
