from fastapi import APIRouter

from cases.case_controller import CaseController


def get_case_routes(case_controller: CaseController):
    api_router = APIRouter(prefix="/api")
    api_router.add_api_route("/cases", case_controller.create_case, methods=["POST"])
    api_router.add_api_route("/cases", case_controller.get_cases, methods=["GET"])
    api_router.add_api_route("/cases/{id}", case_controller.get_case, methods=["GET"])
    return api_router
