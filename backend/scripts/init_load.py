import time
from sqlalchemy.exc import OperationalError
from sqlalchemy import text
from scripts.cargar_datos import cargar_application_train_csv
from conexion import engine

MAX_RETRIES = 10

def esperar_mysql():
    for i in range(MAX_RETRIES):
        try:
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            print("Conexión exitosa a MySQL")
            return
        except OperationalError as e:
            print(f"Esperando MySQL... intento {i+1}/{MAX_RETRIES}")
            time.sleep(5)
    print("No se pudo conectar a MySQL después de varios intentos.")
    exit(1)

if __name__ == "__main__":
    print("Iniciando carga automática de application_train.csv...")
    esperar_mysql()
    cargar_application_train_csv()
    print("Carga completa.")
