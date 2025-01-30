create database ush;

create table address (
    id serial primary key,
    street text not null,
    number integer not null,
    complement text,
    neighborhood text not null,
    city text not null,
    state text not null,
    zip_code varchar(50) not null,
    observations text
);

create table departments (
    id serial primary key,
    name text not null
);

create table users (
    id serial primary key,
    name text not null,
    email varchar(50) unique not null,
    password text not null,
    department_id integer references departments (id),
    permission varchar(50) default '0',
    cell_phone varchar(50) not null,
    photo text
);

create table collaborators (
    id serial primary key,
    name text not null,
    cpf varchar(50) unique not null,
    email varchar(50),
    password text not null,
    cell_phone varchar(50) not null,
    photo text,
    description text,
    areas_of_operation text[]
);

create table persons (
    id serial primary key,
    name text not null,
    cpf varchar(50) unique not null,
    email varchar(50),
    birth_date date not null,
    gender varchar(50) not null,
    cell_phone varchar(50),
    photo text,
    description text,
    attachments text[], -- Adicionada a vírgula faltante
    address_id integer references address (id)
);

create table tickets (
    id serial primary key,
    created_at timestamp default now(),
    person_id integer references persons (id),
    type text not null,
    description text not null,
    attachments text[],
    status varchar(50) default 'open',
    priority varchar(50) default 'low',
    collaborators_id integer references collaborators (id),
    users_id integer references users (id),
    updated_at timestamp[],
    department_id integer references departments (id)
);

create table department_users (
    department_id integer references departments (id),
    user_id integer references users (id),
    primary key (department_id, user_id)
);

create table collaborator_departments (
    collaborator_id integer references collaborators (id),
    department_id integer references departments (id),
    primary key (collaborator_id, department_id)
);

create table user_collaborators (
    user_id integer references users (id),
    collaborator_id integer references collaborators (id),
    primary key (user_id, collaborator_id)
);