<p align="center">
 How to run?
</p>

<ul>
<li>Run npm i</li>
<li>Run docker-compose up</li>
<li>Run npx typeorm migration:run</li>
<li>Enter docker container(docker exec -it container_id_here /bin/bash)</li>
<li>Run to import /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Adm_passwd1! -d nestjs -i "./host/dump.sql"</li>
</ul>
