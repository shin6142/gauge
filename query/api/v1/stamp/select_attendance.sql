SELECT base_date, company_id, DATE_FORMAT(datetime, '%Y-%m-%d %T') datetime, employee_id, type  FROM attendance WHERE base_date = '2023-04-30';
