SELECT CONCAT(e.FirstName, ' ', e.LastName) AS `Nome completo`,
COUNT(o.OrderID) AS `Total de pedidos` 
FROM w3schools.employees AS e
JOIN w3schools.orders As o
ON e.EmployeeID = o.EmployeeID
GROUP BY 1
ORDER BY 2;
