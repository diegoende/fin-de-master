from backend.scripts.modelo import comparar_modelos, predecir
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from scripts.conexion import  obtener_datos, vista_tasa_incumplimiento, vista_incumplimiento_por_contrato,vista_distribucion_ingreso,vista_incumplimiento_por_genero,vista_distribucion_credito,vista_incumplimiento_por_tipo_ingreso
import pandas as pd
import numpy as np
import os
# from scripts.modelo import predecir_precio


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Visualizaciones
@app.get("/datos")
def get_datos():
    try:
        df = obtener_datos()
        return JSONResponse(content=df.to_dict(orient="records"), media_type="application/json")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/tasa_incumplimiento")
def get_tasa_incumplimiento():
    try:
        df = vista_tasa_incumplimiento()
        return JSONResponse(content=df.to_dict(orient="records"), media_type="application/json")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/incumplimiento_por_contrato")
def get_incumplimiento_por_contrato():
    try:
        df = vista_incumplimiento_por_contrato()
        return JSONResponse(content=df.to_dict(orient="records"), media_type="application/json")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/distribucion_ingreso")
def get_distribucion_ingreso():
    try:
        df = vista_distribucion_ingreso()
        return JSONResponse(content=df.to_dict(orient="records"), media_type="application/json")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


@app.get("/incumplimiento_por_genero(")
def get_incumplimiento_por_genero():
    try:
        df = vista_incumplimiento_por_genero()
        return JSONResponse(content=df.to_dict(orient="records"), media_type="application/json")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/distribucion_credito")
def get_distribucion_credito():
    try:
        df = vista_distribucion_credito()
        return JSONResponse(content=df.to_dict(orient="records"), media_type="application/json")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/incumplimiento_por_tipo_ingreso")
def get_incumplimiento_por_tipo_ingreso():
    try:
        df = vista_incumplimiento_por_tipo_ingreso()
        return JSONResponse(content=df.to_dict(orient="records"), media_type="application/json")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


# # Modelos predictivos
# @app.get("/predecir")
# def predecir(cantidad: int = Query(..., ge=1, description="Cantidad mayor o igual a 1")):
#     try:
#         resultado = predecir_precio(cantidad)
#         if resultado is not None:
#             return {"cantidad": cantidad, "precio_estimado": resultado}
#         else:
#             return JSONResponse(status_code=404, content={"error": "No se pudo entrenar el modelo o no hay datos."})
#     except Exception as e:
#         return JSONResponse(status_code=500, content={"error": f"Error al predecir: {str(e)}"})


@app.post("/api/prediccion")
def obtener_prediccion(entrada: dict):
    resultado = predecir(entrada)
    return resultado


@app.get("/api/comparacion_modelos")
def comparacion_modelos():
    return comparar_modelos()


@app.get("/api/mejor_modelo")
def obtener_mejor_modelo():
    mejor_modelo_path = os.path.join(os.path.dirname(__file__), "mejor_modelo.txt")
    if os.path.exists(mejor_modelo_path):
        with open(mejor_modelo_path, "r") as f:
            nombre = f.read()
    else:
        nombre = "Modelo no disponible"
    return {"mejor_modelo": nombre} 