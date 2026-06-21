# Hallazgo 03: Inyección de Comandos (Command Injection)

### 1. Evidencia del Ataque
![Inyección de Comandos](img_reycam/comandos_reycam.png)
*Payload utilizado:* `127.0.0.1; cat /etc/passwd`

### 2. Análisis Técnico
Este fallo crítico ocurre cuando la plataforma ejecuta funciones del sistema operativo subyacente interactuando con parámetros provistos por el usuario sin validación estricta. El uso de caracteres de concatenación de terminales (como `;`) permite saltar la instrucción original y ejecutar comandos arbitrarios con los permisos del servicio web.

### 3. Impacto en la Municipalidad de Cerro Verde
A través de este vector, un criminal informático puede comprometer el servidor web por completo. En el entorno de la municipalidad, esto se traduciría en la capacidad de plantar un Ransomware para encriptar los sistemas de pago de multas y patentes, deteniendo la operación pública e institucional, o borrar registros históricos de contribuyentes.

### 4. Gravedad CVSS 3.1
*   **Puntaje:** 9.8 (Critical)
*   **Vector:** CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

### 5. Controles y Defensas
*   **Prevención:** Evitar llamadas directas a funciones del sistema operativo desde la interfaz web. Utilizar APIs internas y nativas del lenguaje de programación.
*   **Mitigación:** Validar las entradas por medio de una lista blanca de caracteres permitidos (ej: expresiones regulares para IPs) y aislar el servicio en contenedores con permisos restringidos.