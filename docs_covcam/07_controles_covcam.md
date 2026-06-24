# Implementación de Controles de Seguridad (Mitigación)

Controles técnicos asignados para reducir el riesgo en la Municipalidad:

1. **Control SQLi:** Implementación obligatoria de Consultas Parametrizadas (Prepared Statements) en el código de backend.
2. **Control XSS:** Aplicación de codificación contextual de salida (Output Encoding) y activación de cabeceras de respuesta `HttpOnly` en las cookies.
3. **Control Command Injection:** Prohibir el uso de funciones de ejecución nativas (`system`, `exec`). Validación estricta por lista blanca de caracteres permitidos.