CREATE TABLE application_train (
    SK_ID_CURR INT PRIMARY KEY COMMENT 'Identificador único del cliente',
    TARGET TINYINT COMMENT '1 = moroso, 0 = pagó correctamente',
    NAME_CONTRACT_TYPE VARCHAR(32) COMMENT 'Tipo de préstamo: Cash loans o Revolving loans',
    CODE_GENDER CHAR(1) COMMENT 'Género del cliente: M o F',
    FLAG_OWN_CAR CHAR(1) COMMENT '¿Posee auto? Y/N',
    FLAG_OWN_REALTY CHAR(1) COMMENT '¿Posee inmueble? Y/N',
    CNT_CHILDREN INT COMMENT 'Número de hijos',
    AMT_INCOME_TOTAL DECIMAL(15,2) COMMENT 'Ingreso total del cliente',
    AMT_CREDIT DECIMAL(15,2) COMMENT 'Monto del crédito solicitado',
    AMT_ANNUITY DECIMAL(15,2) COMMENT 'Monto anualizado del préstamo',
    AMT_GOODS_PRICE DECIMAL(15,2) COMMENT 'Precio del bien adquirido',
    NAME_TYPE_SUITE VARCHAR(32) COMMENT 'Acompañante en la solicitud del préstamo',
    NAME_INCOME_TYPE VARCHAR(64) COMMENT 'Fuente de ingreso del cliente',
    NAME_EDUCATION_TYPE VARCHAR(64) COMMENT 'Nivel educativo del cliente',
    NAME_FAMILY_STATUS VARCHAR(32) COMMENT 'Estado civil del cliente',
    NAME_HOUSING_TYPE VARCHAR(32) COMMENT 'Tipo de vivienda del cliente',
    REGION_POPULATION_RELATIVE FLOAT COMMENT 'Proporción de población en la región del cliente',
    DAYS_BIRTH INT COMMENT 'Edad del cliente en días (negativo)',
    DAYS_EMPLOYED INT COMMENT 'Antigüedad laboral en días (negativo)',
    DAYS_REGISTRATION FLOAT COMMENT 'Días desde que se registró',
    DAYS_ID_PUBLISH INT COMMENT 'Días desde emisión del documento de identidad',
    OWN_CAR_AGE INT COMMENT 'Edad del auto si tiene uno',
    FLAG_MOBIL TINYINT COMMENT '¿Tiene móvil?',
    FLAG_EMP_PHONE TINYINT COMMENT '¿Proporcionó teléfono laboral?',
    FLAG_WORK_PHONE TINYINT COMMENT '¿Tiene teléfono fijo?',
    FLAG_CONT_MOBILE TINYINT COMMENT '¿Móvil confirmado?',
    FLAG_PHONE TINYINT COMMENT '¿Proporcionó teléfono?',
    FLAG_EMAIL TINYINT COMMENT '¿Proporcionó email?',
    OCCUPATION_TYPE VARCHAR(64) COMMENT 'Ocupación del cliente',
    CNT_FAM_MEMBERS FLOAT COMMENT 'Número de miembros de la familia',
    REGION_RATING_CLIENT TINYINT COMMENT 'Calificación de la región del cliente',
    REGION_RATING_CLIENT_W_CITY TINYINT COMMENT 'Calificación incluyendo ciudad',
    WEEKDAY_APPR_PROCESS_START VARCHAR(16) COMMENT 'Día de la semana en que se inició la solicitud',
    HOUR_APPR_PROCESS_START TINYINT COMMENT 'Hora en la que se inició la solicitud',
    REG_REGION_NOT_LIVE_REGION TINYINT COMMENT '¿Región registrada difiere de la de residencia?',
    REG_REGION_NOT_WORK_REGION TINYINT COMMENT '¿Región registrada difiere de la de trabajo?',
    LIVE_REGION_NOT_WORK_REGION TINYINT COMMENT '¿Región de residencia difiere de la de trabajo?',
    REG_CITY_NOT_LIVE_CITY TINYINT COMMENT '¿Ciudad registrada difiere de la de residencia?',
    REG_CITY_NOT_WORK_CITY TINYINT COMMENT '¿Ciudad registrada difiere de la de trabajo?',
    LIVE_CITY_NOT_WORK_CITY TINYINT COMMENT '¿Ciudad de residencia difiere de la de trabajo?',
    ORGANIZATION_TYPE VARCHAR(64) COMMENT 'Tipo de organización del empleo',
    EXT_SOURCE_1 FLOAT COMMENT 'Puntaje de riesgo externo fuente 1',
    EXT_SOURCE_2 FLOAT COMMENT 'Puntaje de riesgo externo fuente 2',
    EXT_SOURCE_3 FLOAT COMMENT 'Puntaje de riesgo externo fuente 3',
    APARTMENTS_AVG FLOAT COMMENT 'Apartments (avg)',
    BASEMENTAREA_AVG FLOAT COMMENT 'Basementarea (avg)',
    YEARS_BEGINEXPLUATATION_AVG FLOAT COMMENT 'Years beginexpluatation (avg)',
    YEARS_BUILD_AVG FLOAT COMMENT 'Years build (avg)',
    COMMONAREA_AVG FLOAT COMMENT 'Commonarea (avg)',
    ELEVATORS_AVG FLOAT COMMENT 'Elevators (avg)',
    ENTRANCES_AVG FLOAT COMMENT 'Entrances (avg)',
    FLOORSMAX_AVG FLOAT COMMENT 'Floorsmax (avg)',
    FLOORSMIN_AVG FLOAT COMMENT 'Floorsmin (avg)',
    LANDAREA_AVG FLOAT COMMENT 'Landarea (avg)',
    LIVINGAPARTMENTS_AVG FLOAT COMMENT 'Livingapartments (avg)',
    LIVINGAREA_AVG FLOAT COMMENT 'Livingarea (avg)',
    NONLIVINGAPARTMENTS_AVG FLOAT COMMENT 'Nonlivingapartments (avg)',
    NONLIVINGAREA_AVG FLOAT COMMENT 'Nonlivingarea (avg)',
    APARTMENTS_MODE FLOAT COMMENT 'Apartments (mode)',
    BASEMENTAREA_MODE FLOAT COMMENT 'Basementarea (mode)',
    YEARS_BEGINEXPLUATATION_MODE FLOAT COMMENT 'Years beginexpluatation (mode)',
    YEARS_BUILD_MODE FLOAT COMMENT 'Years build (mode)',
    COMMONAREA_MODE FLOAT COMMENT 'Commonarea (mode)',
    ELEVATORS_MODE FLOAT COMMENT 'Elevators (mode)',
    ENTRANCES_MODE FLOAT COMMENT 'Entrances (mode)',
    FLOORSMAX_MODE FLOAT COMMENT 'Floorsmax (mode)',
    FLOORSMIN_MODE FLOAT COMMENT 'Floorsmin (mode)',
    LANDAREA_MODE FLOAT COMMENT 'Landarea (mode)',
    LIVINGAPARTMENTS_MODE FLOAT COMMENT 'Livingapartments (mode)',
    LIVINGAREA_MODE FLOAT COMMENT 'Livingarea (mode)',
    NONLIVINGAPARTMENTS_MODE FLOAT COMMENT 'Nonlivingapartments (mode)',
    NONLIVINGAREA_MODE FLOAT COMMENT 'Nonlivingarea (mode)',
    APARTMENTS_MEDI FLOAT COMMENT 'Apartments (medi)',
    BASEMENTAREA_MEDI FLOAT COMMENT 'Basementarea (medi)',
    YEARS_BEGINEXPLUATATION_MEDI FLOAT COMMENT 'Years beginexpluatation (medi)',
    YEARS_BUILD_MEDI FLOAT COMMENT 'Years build (medi)',
    COMMONAREA_MEDI FLOAT COMMENT 'Commonarea (medi)',
    ELEVATORS_MEDI FLOAT COMMENT 'Elevators (medi)',
    ENTRANCES_MEDI FLOAT COMMENT 'Entrances (medi)',
    FLOORSMAX_MEDI FLOAT COMMENT 'Floorsmax (medi)',
    FLOORSMIN_MEDI FLOAT COMMENT 'Floorsmin (medi)',
    LANDAREA_MEDI FLOAT COMMENT 'Landarea (medi)',
    LIVINGAPARTMENTS_MEDI FLOAT COMMENT 'Livingapartments (medi)',
    LIVINGAREA_MEDI FLOAT COMMENT 'Livingarea (medi)',
    NONLIVINGAPARTMENTS_MEDI FLOAT COMMENT 'Nonlivingapartments (medi)',
    NONLIVINGAREA_MEDI FLOAT COMMENT 'Nonlivingarea (medi)',
    FONDKAPREMONT_MODE VARCHAR(32) COMMENT 'Fondo de mantenimiento del edificio',
    HOUSETYPE_MODE VARCHAR(32) COMMENT 'Tipo de edificio donde vive',
    TOTALAREA_MODE FLOAT COMMENT 'Área total de la vivienda',
    WALLSMATERIAL_MODE VARCHAR(32) COMMENT 'Material de construcción del edificio',
    EMERGENCYSTATE_MODE VARCHAR(16) COMMENT 'Estado de emergencia reportado',
    OBS_30_CNT_SOCIAL_CIRCLE FLOAT COMMENT 'Observaciones en círculo social en últimos 30 días',
    DEF_30_CNT_SOCIAL_CIRCLE FLOAT COMMENT 'Defectos en círculo social en últimos 30 días',
    OBS_60_CNT_SOCIAL_CIRCLE FLOAT COMMENT 'Observaciones en círculo social en últimos 60 días',
    DEF_60_CNT_SOCIAL_CIRCLE FLOAT COMMENT 'Defectos en círculo social en últimos 60 días',
    DAYS_LAST_PHONE_CHANGE FLOAT COMMENT 'Días desde el último cambio de teléfono',
    FLAG_DOCUMENT_2 TINYINT COMMENT 'Indicador de documento 2 entregado',
    FLAG_DOCUMENT_3 TINYINT COMMENT 'Indicador de documento 3 entregado',
    FLAG_DOCUMENT_4 TINYINT COMMENT 'Indicador de documento 4 entregado',
    FLAG_DOCUMENT_5 TINYINT COMMENT 'Indicador de documento 5 entregado',
    FLAG_DOCUMENT_6 TINYINT COMMENT 'Indicador de documento 6 entregado',
    FLAG_DOCUMENT_7 TINYINT COMMENT 'Indicador de documento 7 entregado',
    FLAG_DOCUMENT_8 TINYINT COMMENT 'Indicador de documento 8 entregado',
    FLAG_DOCUMENT_9 TINYINT COMMENT 'Indicador de documento 9 entregado',
    FLAG_DOCUMENT_10 TINYINT COMMENT 'Indicador de documento 10 entregado',
    FLAG_DOCUMENT_11 TINYINT COMMENT 'Indicador de documento 11 entregado',
    FLAG_DOCUMENT_12 TINYINT COMMENT 'Indicador de documento 12 entregado',
    FLAG_DOCUMENT_13 TINYINT COMMENT 'Indicador de documento 13 entregado',
    FLAG_DOCUMENT_14 TINYINT COMMENT 'Indicador de documento 14 entregado',
    FLAG_DOCUMENT_15 TINYINT COMMENT 'Indicador de documento 15 entregado',
    FLAG_DOCUMENT_16 TINYINT COMMENT 'Indicador de documento 16 entregado',
    FLAG_DOCUMENT_17 TINYINT COMMENT 'Indicador de documento 17 entregado',
    FLAG_DOCUMENT_18 TINYINT COMMENT 'Indicador de documento 18 entregado',
    FLAG_DOCUMENT_19 TINYINT COMMENT 'Indicador de documento 19 entregado',
    FLAG_DOCUMENT_20 TINYINT COMMENT 'Indicador de documento 20 entregado',
    FLAG_DOCUMENT_21 TINYINT COMMENT 'Indicador de documento 21 entregado',
    AMT_REQ_CREDIT_BUREAU_HOUR FLOAT COMMENT 'Consultas a buró de crédito en la última hora',
    AMT_REQ_CREDIT_BUREAU_DAY FLOAT COMMENT 'Consultas a buró de crédito en el último día',
    AMT_REQ_CREDIT_BUREAU_WEEK FLOAT COMMENT 'Consultas a buró de crédito en la última semana',
    AMT_REQ_CREDIT_BUREAU_MON FLOAT COMMENT 'Consultas a buró de crédito en el último mes',
    AMT_REQ_CREDIT_BUREAU_QRT FLOAT COMMENT 'Consultas a buró de crédito en el último trimestre',
    AMT_REQ_CREDIT_BUREAU_YEAR FLOAT COMMENT 'Consultas a buró de crédito en el último año'
);



##TFM
CREATE OR REPLACE VIEW vista_clientes_resumen AS
SELECT
    SK_ID_CURR AS id_cliente,
    TARGET AS incumplimiento,  -- 1 = Incumplió, 0 = Cumplió
    NAME_CONTRACT_TYPE AS tipo_contrato,
    CODE_GENDER AS genero,
    FLAG_OWN_CAR AS tiene_auto,
    FLAG_OWN_REALTY AS tiene_propiedad,
    CNT_CHILDREN AS num_hijos,
    AMT_INCOME_TOTAL AS ingreso_anual,
    AMT_CREDIT AS monto_credito,
    AMT_ANNUITY AS monto_cuota,
    AMT_GOODS_PRICE AS precio_bienes,
    NAME_INCOME_TYPE AS tipo_ingreso,
    NAME_EDUCATION_TYPE AS nivel_educacion,
    NAME_FAMILY_STATUS AS estado_familiar,
    NAME_HOUSING_TYPE AS tipo_vivienda,
    ROUND(ABS(DAYS_BIRTH) / 365, 1) AS edad_anios,
    ROUND(ABS(DAYS_EMPLOYED) / 365, 1) AS antiguedad_laboral_anios,
    ORGANIZATION_TYPE AS organizacion
FROM
    application_train;



##########################################################333
##########################################################333

##Vista: Porcentaje de incumplimiento (TARGET)
##Gráfico de dona o torta – % de clientes que incumplen vs no incumplen.
CREATE OR REPLACE VIEW vista_tasa_incumplimiento AS
SELECT
    TARGET AS incumplimiento,
    COUNT(*) AS total_clientes,
    ROUND(COUNT(*) / (SELECT COUNT(*) FROM application_train) * 100, 2) AS porcentaje
FROM
    application_train
GROUP BY
    TARGET;


##Vista: Incumplimiento según tipo de contrato
##Barras horizontales – Comparativa entre tipos de contrato.


CREATE OR REPLACE VIEW vista_incumplimiento_por_contrato AS
SELECT
    NAME_CONTRACT_TYPE AS tipo_contrato,
    COUNT(*) AS total_clientes,
    SUM(TARGET) AS total_incumplen,
    ROUND(SUM(TARGET) / COUNT(*) * 100, 2) AS porcentaje_incumplen
FROM
    application_train
GROUP BY
    NAME_CONTRACT_TYPE;


## 3. Vista: Distribución de ingreso anual
##  Gráfico de barras verticales – Total clientes por rango de ingresos.

CREATE OR REPLACE VIEW vista_distribucion_ingreso AS
SELECT
    CASE
        WHEN AMT_INCOME_TOTAL < 50000 THEN 'Menos de $50k'
        WHEN AMT_INCOME_TOTAL BETWEEN 50000 AND 100000 THEN '$50k - $100k'
        WHEN AMT_INCOME_TOTAL BETWEEN 100001 AND 200000 THEN '$100k - $200k'
        WHEN AMT_INCOME_TOTAL BETWEEN 200001 AND 500000 THEN '$200k - $500k'
        ELSE 'Más de $500k'
    END AS rango_ingresos,
    COUNT(*) AS total_clientes
FROM
    application_train
GROUP BY
    rango_ingresos
ORDER BY
    FIELD(rango_ingresos, 'Menos de $50k', '$50k - $100k', '$100k - $200k', '$200k - $500k', 'Más de $500k');


## Vista: Incumplimiento según género
## Gráfico de columnas – Incumplimiento según género.

CREATE OR REPLACE VIEW vista_incumplimiento_por_genero AS
SELECT
    CODE_GENDER AS genero,
    COUNT(*) AS total_clientes,
    SUM(TARGET) AS total_incumplen,
    ROUND(SUM(TARGET) / COUNT(*) * 100, 2) AS porcentaje_incumplen
FROM
    application_train
GROUP BY
    CODE_GENDER;

###5. Vista: Distribución de créditos otorgados
##Histograma o barras verticales – Número de créditos según monto.

CREATE OR REPLACE VIEW vista_distribucion_credito AS
SELECT
    CASE
        WHEN AMT_CREDIT < 50000 THEN 'Menos de $50k'
        WHEN AMT_CREDIT BETWEEN 50000 AND 150000 THEN '$50k - $150k'
        WHEN AMT_CREDIT BETWEEN 150001 AND 300000 THEN '$150k - $300k'
        WHEN AMT_CREDIT BETWEEN 300001 AND 500000 THEN '$300k - $500k'
        ELSE 'Más de $500k'
    END AS rango_credito,
    COUNT(*) AS total_creditos
FROM
    application_train
GROUP BY
    rango_credito
ORDER BY
    FIELD(rango_credito, 'Menos de $50k', '$50k - $150k', '$150k - $300k', '$300k - $500k', 'Más de $500k');


##6. Vista: Incumplimiento según tipo de ingreso
##Gráfico de barras horizontales – Riesgo según fuente de ingresos.

CREATE OR REPLACE VIEW vista_incumplimiento_por_tipo_ingreso AS
SELECT
    NAME_INCOME_TYPE AS tipo_ingreso,
    COUNT(*) AS total_clientes,
    SUM(TARGET) AS total_incumplen,
    ROUND(SUM(TARGET) / COUNT(*) * 100, 2) AS porcentaje_incumplen
FROM
    application_train
GROUP BY
    NAME_INCOME_TYPE;