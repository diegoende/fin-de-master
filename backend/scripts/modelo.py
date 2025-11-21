import pandas as pd
from backend.scripts.cargar_datos import leer_application_train_db
import joblib
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score
from sklearn.model_selection import train_test_split

# Ruta segura del CSV y modelo
csv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'datos', 'application_train.csv'))
modelo_path = os.path.join(os.path.dirname(__file__), 'modelo_entrenado.pkl')

def entrenar_modelo():
    print("---> Leyendo datos para entrenamiento...")
    df = leer_application_train_db()
    df = df.select_dtypes(include='number').fillna(0)

    X = df.drop(['TARGET', 'SK_ID_CURR'], axis=1)
    y = df['TARGET']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

    modelos = {
        "DecisionTree": DecisionTreeClassifier(),
        "RandomForest": RandomForestClassifier(),
        "XGBoost": XGBClassifier(use_label_encoder=False, eval_metric='logloss')
    }

    mejor_modelo = None
    mejor_score = 0
    nombre_mejor_modelo = ""

    for nombre, modelo in modelos.items():
        modelo.fit(X_train, y_train)
        probas = modelo.predict_proba(X_test)[:, 1]
        score = roc_auc_score(y_test, probas)
        print(f" {nombre} AUC: {score:.4f}")
        if score > mejor_score:
            mejor_modelo = modelo
            mejor_score = score
            nombre_mejor_modelo = nombre

    print(f"---> Mejor modelo: {nombre_mejor_modelo} con AUC: {mejor_score:.4f}")
    joblib.dump(mejor_modelo, modelo_path)

    # Guardar nombre del mejor modelo en archivo para luego leer
    mejor_modelo_path = os.path.join(os.path.dirname(__file__), "mejor_modelo.txt")
    with open(mejor_modelo_path, "w") as f:
        f.write(nombre_mejor_modelo)

    return mejor_modelo

def cargar_o_entrenar_modelo():
    if not os.path.exists(modelo_path):
        print("--->//!!error! Modelo no encontrado. Entrenando automáticamente...")
        return entrenar_modelo()
    print("Modelo encontrado. Cargando modelo...")
    return joblib.load(modelo_path)

def predecir(datos_dict):
    model = cargar_o_entrenar_modelo()

    # Leer las columnas esperadas
    df_entrenamiento = leer_application_train_db()
    columnas_esperadas = df_entrenamiento.drop(['TARGET', 'SK_ID_CURR'], axis=1).select_dtypes(include='number').columns.tolist()

    # Crear dataframe con datos recibidos
    df_entrada = pd.DataFrame([datos_dict])

    # Rellenar las columnas faltantes
    for col in columnas_esperadas:
        if col not in df_entrada.columns:
            df_entrada[col] = 0

    # Ordenar columnas
    df_entrada = df_entrada[columnas_esperadas]

    # Predicción
    prediccion = model.predict(df_entrada)[0]
    probabilidad = model.predict_proba(df_entrada)[0][1]

    return {
        "prediccion": int(prediccion),
        "probabilidad_incumplimiento": round(probabilidad, 4)
    }


# entrena y compara los modelos
# Dividir los datos en entrenamiento y prueba
#Usa train_test_split() para evaluar correctamente los modelos:

def comparar_modelos():
    df = leer_application_train_db()
    df.columns = [col.strip() for col in df.columns]
    X = df.drop(['TARGET', 'SK_ID_CURR'], axis=1).select_dtypes(include='number').fillna(0)
    y = df['TARGET']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    modelos = {
        "Decision Tree": DecisionTreeClassifier(),
        "Random Forest": RandomForestClassifier(),
        "XGBoost": XGBClassifier(use_label_encoder=False, eval_metric="logloss"),
    }

    resultados = []

    for nombre, modelo in modelos.items():
        modelo.fit(X_train, y_train)
        y_pred = modelo.predict(X_test)
        probas = modelo.predict_proba(X_test)[:, 1]
        resultados.append({
            "modelo": nombre,
            "accuracy": round(accuracy_score(y_test, y_pred), 4),
            "f1_score": round(f1_score(y_test, y_pred), 4),
            "roc_auc": round(roc_auc_score(y_test, probas), 4)
        })

    return resultados
