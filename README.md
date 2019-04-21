# API - IsCool!

***
<p align="center">
<img src="https://raw.githubusercontent.com/wiki/IsCoolTech/tis3/img/iscool.png" width="300">
</p>

***

## :ledger: Notes before installing
- This is just an API, you can get the full GUI on [this repository](https://github.com/Wodam/iscool-web).
- By default, this project use [YARN](https://yarnpkg.com) as depedency/package management.
## :fire: Installation
1. Install dependencies: `yarn`
2. Create an Docker Container for database: 
```bash
docker run -p 3306:3306 -p 33060:33060 --name iscool_db -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=$ROOT_PASSWORD -e MYSQL_DATABASE=iscool -d mysql:5.7.25 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```
3. Migrate/update database: `yarn migrate`
4. Run:
   - Development: `yarn dev`
   - Production: `yarn start`
## :busts_in_silhouette: Authors
[Arthur Rochat](https://github.com/arthurrochat)

[Bruno Marini](https://github.com/TheMarini)

[Guilherme Willer](https://github.com/guigawiller)

[Victor Seara](https://github.com/victorseara)
