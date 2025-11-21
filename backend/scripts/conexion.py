from sqlalchemy import create_engine
import pandas as pd
import numpy as np
import datetime

# Configuración de conexión mysql
engine = create_engine("mysql+pymysql://admin:july2021@db:3306/tfm")

def limpiar_dataframe(df):
    """Limpia un DataFrame para exportarlo a JSON de forma segura."""
    # Convertir infinitos a NaN
    df = df.replace([np.inf, -np.inf], np.nan)

    # Forzar columnas numéricas a números válidos o None
    for col in df.select_dtypes(include=['float', 'float64', 'int']):
        df[col] = df[col].apply(lambda x: (
            None if pd.isnull(x) or not np.isfinite(x) or (isinstance(x, float) and abs(x) > 1e308)
            else float(x)
        ))

    # Procesar columnas categóricas y de texto
    for col in df.select_dtypes(include=['object']):
        df[col] = df[col].apply(lambda x: (
            None if x in ['', ' ', 'nan', 'NaN', None] else str(x)
        ))

    # Convertir fechas a string
    for col in df.select_dtypes(include=['datetime64[ns]', 'datetime64']):
        df[col] = df[col].apply(lambda x: x.isoformat() if pd.notnull(x) else None)

    # Última conversión global
    df = df.astype(object).where(pd.notnull(df), None)

    return df

    

def obtener_datos():
    query = "SELECT * FROM vista_clientes_resumen"
    df = pd.read_sql(query, con=engine)
    return limpiar_dataframe(df)

def vista_tasa_incumplimiento():
    query = "SELECT * FROM vista_tasa_incumplimiento"
    df = pd.read_sql(query, con=engine)
    return limpiar_dataframe(df)

def vista_incumplimiento_por_contrato():
    query = "SELECT * FROM vista_incumplimiento_por_contrato"
    df = pd.read_sql(query, con=engine)
    return limpiar_dataframe(df)    

def vista_distribucion_ingreso():
    query = "SELECT * FROM vista_distribucion_ingreso"
    df = pd.read_sql(query, con=engine)
    return limpiar_dataframe(df)    

def vista_incumplimiento_por_genero():
    query = "SELECT * FROM vista_incumplimiento_por_genero"
    df = pd.read_sql(query, con=engine)
    return limpiar_dataframe(df)  

def vista_distribucion_credito():
    query = "SELECT * FROM vista_distribucion_credito"
    df = pd.read_sql(query, con=engine)
    return limpiar_dataframe(df)  

def vista_incumplimiento_por_tipo_ingreso():
    query = "SELECT * FROM vista_incumplimiento_por_tipo_ingreso"
    df = pd.read_sql(query, con=engine)
    return limpiar_dataframe(df)  