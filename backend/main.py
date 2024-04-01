from app import create_container

container = create_container()

app = container["app"]
case_runner = container["case_runner"]


@app.on_event("startup")
async def on_startup():
    case_runner.start()
