# Plan de Continuidad y Recuperación ante Incidentes

Estrategias para garantizar la resiliencia institucional en Cerro Verde:

* **Respaldos (Backups):** Configuración de snapshots automáticos e incrementales de la base de datos `BD-VECINOS` cada 24 horas, almacenados en un servidor aislado (Air-gapped).
* **Aislamiento:** En caso de compromiso del `SERV-WEB`, se activará un playbook de aislamiento de red para evitar movimientos laterales hacia la red interna municipal.
* **Restauración:** RTO (Objetivo de Tiempo de Recuperación) estimado en menos de 4 horas utilizando infraestructura automatizada preconfigurada.