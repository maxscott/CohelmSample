import json

from fastapi import Body, Response

from cases.case_repository import CaseRepository


class CaseController:
    def __init__(self, case_repository: CaseRepository):
        self.case_repository = case_repository

    @staticmethod
    def _response(content: str, status_code: int = 200):
        return Response(content=content, status_code=status_code, media_type="application/json")

    async def create_case(self, status: str = Body(..., embed=True)):
        case = self.case_repository.create_case(status)
        return self._response(json.dumps(case))

    async def get_case(self, id: str):
        case = self.case_repository.get_case(id)
        return self._response(json.dumps(case))

    async def get_cases(self):
        cases = self.case_repository.get_cases()
        return self._response(json.dumps(cases))
