from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from cases.case_background_runner import CaseBackgroundRunner
from cases.case_controller import CaseController
from cases.case_factory import CaseFactory
from cases.case_repository import CaseRepository
from cases.case_router import get_case_routes


def create_container():
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    case_factory = CaseFactory()
    case_repository = CaseRepository(case_factory)
    case_controller = CaseController(case_repository)
    case_router = get_case_routes(case_controller)

    case_runner = CaseBackgroundRunner(case_repository)

    app.include_router(case_router)

    return {
        "app": app,
        "case_repository": case_repository,
        "case_controller": case_controller,
        "case_runner": case_runner,
    }
