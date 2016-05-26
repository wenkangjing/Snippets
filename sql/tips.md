## Normalization



## De normalization



## TIPS

- SELECT * from Table WITH (NOLOCK) or read uncommitted 
- just query one row, select top 1 * from vIMCMachines with (nolock) 
- build index for searching keywords (where)
- build index for searching keywords (join)
- always avoid select *
- unsigned int as ID for every table
- don't use GUID as primary key
- use NOT NULL
- fixed length column, easy to cache but waste space
- split to chunks
  + delete and insert
  + e.g. sleep every 1000 rows


## trouble shooting

- enable Client Statistics





