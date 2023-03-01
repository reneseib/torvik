import psycopg2
from typing import Union
from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse

from typing import Optional
from datetime import datetime
from pydantic import BaseModel

app = FastAPI()

# Define database connection parameters
DATABASE = "your_database_name"
USER = "your_username"
PASSWORD = "your_password"
HOST = "your_host"
PORT = "your_port"

# Define the database table
class FormEntry(BaseModel):
    id: int
    timestamp: datetime
    ip_address: str
    position: str
    mietflaeche: int
    tafel_yesno: str
    tgtg_yesno: str
    zgfdt_yesno: str
    regu_yesno: str
    wmnw_yesno: str
    zuto_yesno: str
    opnv_yesno: str
    nahe_yesno: str
    port_yesno: str
    gesch_yesno: str
    pfand_yesno: str
    emob_yesno: str
    lebensmittel: int
    stromverbrauch: int
    wenigerstrom: float
    erneuerbar: float


# Connect to the database
conn = psycopg2.connect(
    database=DATABASE, user=USER, password=PASSWORD, host=HOST, port=PORT
)


@app.on_event("shutdown")
def shutdown_event():
    conn.close()


class Gastro(BaseModel):
    position: str
    mietflaeche: int
    tafel_yesno: Union[str, None] = None
    tgtg_yesno: Union[str, None] = None
    zgfdt_yesno: Union[str, None] = None
    regu_yesno: Union[str, None] = None
    wmnw_yesno: Union[str, None] = None
    zuto_yesno: Union[str, None] = None
    opnv_yesno: Union[str, None] = None
    nahe_yesno: Union[str, None] = None
    port_yesno: Union[str, None] = None
    gesch_yesno: Union[str, None] = None
    pfand_yesno: Union[str, None] = None
    emob_yesno: Union[str, None] = None
    lebensmittel: int
    stromverbrauch: int
    wenigerstrom: Union[float, None] = None
    erneuerbar: Union[float, None] = None


@app.post("/gastro")
async def result(request: Request):
    # Get the IP address of the client
    # ip_address = request.client.host
    data = await request.json()

    co2_savings = 0
    co2_savings_pqm = 0

    if data["tafel_yesno"] == "yes":
        co2_savings += 6

    if data["tgtg_yesno"] == "yes":
        co2_savings += 6

    if data["zgfdt_yesno"] == "yes":
        co2_savings += 6

    if data["regu_yesno"] == "yes":
        co2_savings += 6

    if data["wmnw_yesno"] == "yes":
        co2_savings += 6

    if data["zuto_yesno"] == "yes":
        co2_savings += 6

    if data["opnv_yesno"] == "yes":
        co2_savings += 6

    if data["nahe_yesno"] == "yes":
        co2_savings += 6

    if data["port_yesno"] == "yes":
        co2_savings += 6

    if data["gesch_yesno"] == "yes":
        co2_savings += 6

    if data["pfand_yesno"] == "yes":
        co2_savings += 6

    if data["emob_yesno"] == "yes":
        co2_savings += 180

    if data["lebensmittel"] is not None:
        co2_savings += data["lebensmittel"] * 13 * 12 / 1000

    if data["wenigerstrom"] is not None:
        co2_savings += (
            (data["stromverbrauch"] * data["wenigerstrom"] / 100) * 0.0004 * 12
        )

    if data["erneuerbar"] is not None:
        co2_savings += (
            (
                (
                    data["stromverbrauch"]
                    - (data["stromverbrauch"] * data["wenigerstrom"] / 100)
                )
                * data["erneuerbar"]
                / 100
            )
            * 0.0004
            * 0.9
            * 12
        )

    if data["mietflaeche"] > 0:
        co2_savings_pqm = co2_savings / data["mietflaeche"]

    # Insert the form entry into the database
    with conn:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO form_entries (timestamp, ip_address, position, mietflaeche, tafel_yesno, tgtg_yesno, zgfdt_yesno, regu_yesno, wmnw_yesno, zuto_yesno, opnv_yesno, nahe_yesno, port_yesno, gesch_yesno, pfand_yesno, emob_yesno, lebensmittel, stromverbrauch, wenigerstrom, erneuerbar) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                (
                    datetime.now(),
                    data["ip_address"],
                    data["position"],
                    data["mietflaeche"],
                    data["tafel_yesno"],
                    data["tgtg_yesno"],
                    data["zgfdt_yesno"],
                    data["regu_yesno"],
                    data["wmnw_yesno"],
                    data["zuto_yesno"],
                    data["opnv_yesno"],
                    data["nahe_yesno"],
                    data["port_yesno"],
                    data["gesch_yesno"],
                    data["pfand_yesno"],
                    data["emob_yesno"],
                    data["lebensmittel"],
                    data["stromverbrauch"],
                    data["wenigerstrom"],
                    data["erneuerbar"],
                ),
            )

    return {"savings": co2_savings, "savings_sqm": co2_savings_pqm}
