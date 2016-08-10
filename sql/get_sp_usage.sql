declare @dbname varchar(256);
declare @sprocname varchar(256);

set @dbname='<dbname>';
set @sprocname='<spname>';

select st.text, qp.query_plan, pr.cached_time, pr.execution_count, pr.last_execution_time,
pr.last_elapsed_time, pr.last_logical_reads, pr.last_logical_writes from sys.dm_exec_procedure_stats pr
outer apply sys.dm_exec_query_plan(plan_handle) qp
outer apply sys.dm_exec_sql_text(sql_handle) st
where database_id=DB_ID(@dbname)
and text like ('%'+ @sprocname+ '%');
