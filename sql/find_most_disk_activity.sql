select distinct s.session_id, r.logical_reads, r.wait_time, r.writes, wt.blocking_session_id, case when wt.blocking_session_id is null and wt.session_id is not null then 1 else 0 end [HeadBlock], r.wait_type,
case when t.objectid is null then cast(text as varchar(4000)) else upper(db_name(t.dbid)) + '.dbo.' + object_name(t.objectid, t.dbid) end, s.program_name, s.host_name from sys.dm_exec_requests r 
inner join sys.dm_exec_sessions s on s.session_id=r.session_id 
left JOIN sys.dm_os_waiting_tasks wt ON s.session_id= wt.session_id
outer apply sys.dm_exec_sql_text(sql_handle) t
where s.session_id > 50 
order by logical_reads desc




