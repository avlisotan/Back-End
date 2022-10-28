USE hr;
DELIMITER $$

CREATE FUNCTION `buscar_quantidade_de_empregos_por_funcionario`(email VARCHAR(50)) 
RETURNS int READS SQL DATA
BEGIN
DECLARE total INT;
SELECT COUNT(hr.employees.EMAIL) 
FROM hr.employees
JOIN hr.job_history
ON employees.EMPLOYEE_ID = job_history.EMPLOYEE_ID
WHERE hr.employees.EMAIL = email INTO total;
RETURN total;
END $$

DELIMITER ;
