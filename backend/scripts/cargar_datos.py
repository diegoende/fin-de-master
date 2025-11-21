import pandas as pd
from scripts.conexion import engine
import os

def cargar_application_train_csv(ruta_csv: str = "backend/datos/application_train.csv"):
    df = pd.read_csv(ruta_csv)

    # Asegúrate de limpiar las columnas
    df.columns = [col.strip() for col in df.columns]

    # Cargar a la base
    df.to_sql(
        name="application_train",
        con=engine,
        if_exists="replace",
        index=False,
        chunksize=1000,
        method="multi"
    )

    print(f"Datos cargados: {len(df)} filas")


def leer_application_train_db():
    ruta = os.path.join(os.path.dirname(__file__), '..', 'datos', 'application_train.csv')
    ruta = os.path.abspath(ruta)
    print(f"Leyendo CSV desde: {ruta}")

    df = pd.read_csv(ruta)
    df.columns = [col.strip() for col in df.columns]
    print(f"Datos leídos desde CSV: {len(df)} filas")

    return df