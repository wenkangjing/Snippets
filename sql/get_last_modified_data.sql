-- Last modified table
SELECT * FROM sys.tables 
ORDER BY modify_date DESC

-- Last modified sp
SELECT name, create_date, modify_date 
FROM sys.objects
WHERE TYPE = 'P' 
ORDER BY modify_date DESC

-- Last modified function
SELECT name, create_date, modify_date 
FROM sys.objects
WHERE TYPE = 'FN' 
ORDER BY modify_date DESC