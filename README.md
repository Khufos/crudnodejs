"# crudnodejs" 
```
modelo do banco no mysql 

create table pessoas(
id int not null primary key auto_increment,
nome varchar(50),
email varchar(50),
id_cargo int
);

create table cargo(
 id int not null primary key auto_increment,
 descricao varchar(50),
 cpf varchar(18),
 id_documentos int 
);

create table documentos(
id int not null primary key auto_increment,
rg varchar(7)
);
alter table pessoas add constraint foreign key (id_cargo) references cargo(id);
alter table cargo add constraint foreign key (id_documentos) references documentos(id);
```
