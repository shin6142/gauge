# src/api/v1/stamp/update.php
## Happy path
* Send POST request to "http://localhost:8000/src/api/v2/stamp/update.php" with "requests/api/v1/stamp/update.json"
* Responced status equals to "200"
* Execute query "query/api/v1/stamp/count_attendance.sql" then get "expects/api/v1/stamp/attendance_count.json"
* Execute query "query/api/v1/stamp/delete_attendance.sql"
