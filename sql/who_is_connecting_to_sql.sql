select login_name, host_name, program_name, count(1) from sys.dm_exec_sessions where host_name is not null
group by login_name, host_name, program_name
order by login_name, host_name, program_name