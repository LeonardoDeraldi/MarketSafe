-- insert.sql:

insert into endereco (cep, bairro, rua, numero, complemento) values
  ("123-45678", "bairro", "rua", 0, "complemento"),
  ("234-56789", "bairro 2", "avenida", 10, "prédio 1"),
  ("345-67890", "bairro 3", "travessa", 20, NULL),
  ("456-78901", "bairro 4", "estrada", 30, "casa 2"),
  ("567-89012", "bairro 5", "rodovia", 40, "bloco 3");

insert into empresa (razao_social, nome_fantasia, cnpj, email, telefone, fk_endereco) values
  ("Empresa Alfa Ltda", "Alfa Tech", "12.345.678/9012-34", "contato@alfa.com", "+12 (34) 56789-1234", 1),
  ("Empresa Beta Ltda", "Beta Soluções", "98.765.432/1098-76", "contato@beta.com", "+12 (34) 56789-5678", 2);

insert into funcionario (data_hora, nome, cpf, cargo, email, senha, telefone, fk_empresa) values
  ("2024-10-02 00:00:00","Gisele", "123.456.789-01", "gerente", "gisele@gmail.com", "123456789", "+12 (34) 56789-0123", 1),
  ("2024-10-02 00:00:00","Nagasse", "123.456.789-02", "analista", "nagasse@gmail.com", "123456789", "+12 (34) 56789-0456", 1),
  ("2024-10-02 00:00:00","Vitor", "153.456.789-01", "gerente", "vitor@gmail.com", "123456789", "+12 (34) 55789-0123", 1);

insert into filial (nome, fk_empresa, fk_endereco) values
  ("Filial 1", 1, 3),
  ("Filial 2", 1, 4),
  ("Filial 3", 1, 5),
  ("Filial 4", 1, 2),
  ("Filial 5", 1, 1);

insert into totem (mac_address, fk_filial) values
  ("873c66420d5f", 1),
  ("200000000002", 2),
  ("300000000003", 3),
  ("300000000004", 3),
  ("400000000005", 4),
  ("500000000006", 4);

insert into promocao (nome, fk_filial) values
  ('Carnes', 1),
  ('Frutas', 1),
  ('Bebidas', 1),
  ('Laticínios', 1),
  ('Padaria', 1),
  ('Enlatados', 1),
  ('Higiene', 2),
  ('Limpeza', 3),
  ('Cereais', 4),
  ('Doces', 5),
  ('Massas', 1),
  ('Temperos', 2),
  ('Congelados', 3),
  ('Produtos Naturais', 4),
  ('Mercearia', 5),
  ('Bebidas Alcoólicas', 1),
  ('Refrigerantes', 2),
  ('Sucos', 3),
  ('Produtos para Pets', 4),
  ('Frios', 5),
  ('Hortifruti', 1),
  ('Produtos Orgânicos', 2);

insert into alerta (cpu_porcentagem, ram_porcentagem, fk_totem, fk_promocao) values
  (85.50, 70.30, 1, 1),
  (90.20, 80.10, 2, 2),
  (88.00, 85.00, 3, 3),
  (95.60, 78.90, 1, 2),
  (87.40, 82.50, 2, 2),
  (92.30, 77.80, 3, 1),
  (84.00, 75.20, 1, 2),
  (89.50, 81.00, 2, 3),
  (91.70, 79.60, 3, 1),
  (86.40, 73.90, 1, 1),
  (83.20, 74.50, 1, 1),
  (87.90, 76.30, 1, 2),
  (90.50, 80.00, 2, 3),
  (88.80, 82.40, 3, 1),
  (85.00, 78.20, 2, 1),
  (92.70, 81.90, 2, 1),
  (94.50, 83.60, 1, 1),
  (89.00, 77.00, 3, 1),
  (86.80, 79.50, 3, 2),
  (91.20, 80.80, 2, 2),
  (88.40, 76.70, 2, 3),
  (84.60, 74.00, 2, 3),
  (85.50, 75.00, 1, 4),
  (90.10, 80.00, 2, 5),
  (92.20, 77.50, 3, 6),
  (89.00, 78.80, 1, 7),
  (88.40, 77.20, 2, 8); 

INSERT INTO alerta (data_hora, cpu_porcentagem, ram_porcentagem, fk_totem, fk_promocao) VALUES
("2024-11-01 08:00:00", 85.20, 70.40, 1, 1),
("2024-11-01 10:30:00", 87.50, 75.00, 2, 2),
("2024-11-01 14:15:00", 90.10, 80.30, 3, 3),
("2024-11-01 17:45:00", 88.00, 72.50, 4, 4),
("2024-11-02 09:10:00", 85.60, 74.20, 1, 5),
("2024-11-02 11:40:00", 89.20, 78.50, 2, 1),
("2024-11-02 16:00:00", 91.80, 82.40, 3, 2),
("2024-11-02 19:30:00", 87.90, 73.50, 4, 3),
("2024-11-03 07:45:00", 86.50, 70.10, 1, 4),
("2024-11-03 12:15:00", 90.60, 75.80, 2, 5),
("2024-11-03 18:20:00", 88.70, 78.30, 3, 1),
("2024-11-03 22:00:00", 92.10, 80.90, 4, 2),
("2024-11-04 08:30:00", 85.40, 71.20, 1, 3),
("2024-11-04 10:50:00", 89.80, 76.50, 2, 4),
("2024-11-04 15:00:00", 91.20, 79.00, 3, 5),
("2024-11-04 18:30:00", 88.50, 74.10, 4, 1),
("2024-11-05 09:00:00", 86.00, 73.40, 1, 2),
("2024-11-05 13:20:00", 90.00, 78.60, 2, 3),
("2024-11-05 17:45:00", 88.30, 80.20, 3, 4),
("2024-11-05 21:30:00", 92.50, 82.90, 4, 5),
("2024-11-06 08:15:00", 85.90, 70.80, 1, 1),
("2024-11-06 11:30:00", 88.40, 75.40, 2, 2),
("2024-11-06 16:10:00", 90.70, 78.90, 3, 3),
("2024-11-06 19:50:00", 87.10, 74.60, 4, 4),
("2024-11-07 07:20:00", 85.30, 71.10, 1, 5),
("2024-11-07 12:00:00", 89.50, 76.70, 2, 1),
("2024-11-07 17:15:00", 91.40, 81.20, 3, 2),
("2024-11-07 21:40:00", 88.60, 79.10, 4, 3),
("2024-11-08 08:45:00", 86.80, 70.30, 1, 4),
("2024-11-08 14:00:00", 90.90, 76.40, 2, 5),
("2024-11-08 18:15:00", 88.20, 78.50, 3, 1),
("2024-11-08 22:30:00", 92.70, 80.70, 4, 2),
("2024-11-09 07:30:00", 85.50, 71.50, 1, 3),
("2024-11-09 11:45:00", 88.60, 74.20, 2, 4),
("2024-11-09 16:30:00", 90.80, 77.60, 3, 5),
("2024-11-09 20:10:00", 87.40, 72.80, 4, 1),
("2024-11-10 09:00:00", 86.20, 70.90, 1, 2),
("2024-11-10 13:15:00", 89.70, 75.30, 2, 3),
("2024-11-10 18:25:00", 91.50, 78.10, 3, 4),
("2024-11-10 22:50:00", 88.00, 73.50, 4, 5),
("2024-11-11 08:10:00", 85.60, 72.00, 1, 1),
("2024-11-11 12:40:00", 89.20, 76.80, 2, 2),
("2024-11-11 17:50:00", 90.30, 79.50, 3, 3),
("2024-11-11 21:20:00", 87.70, 74.10, 4, 4),
("2024-11-12 07:50:00", 86.10, 71.90, 1, 5),
("2024-11-12 11:30:00", 89.90, 77.20, 2, 1),
("2024-11-12 15:45:00", 91.80, 81.00, 3, 2),
("2024-11-12 20:15:00", 88.90, 79.40, 4, 3),
("2024-11-13 09:20:00", 86.40, 73.10, 1, 4),
("2024-11-13 13:00:00", 90.70, 76.30, 2, 5),
("2024-11-13 17:30:00", 88.10, 78.20, 3, 1),
("2024-11-13 21:40:00", 92.40, 80.80, 4, 2),
("2024-11-14 08:10:00", 85.80, 70.70, 1, 3),
("2024-11-14 12:30:00", 88.80, 75.10, 2, 4),
("2024-11-14 17:15:00", 90.90, 78.60, 3, 5),
("2024-11-14 22:20:00", 87.60, 74.30, 4, 1),
("2024-11-15 07:45:00", 85.70, 71.20, 1, 2),
("2024-11-15 13:15:00", 89.60, 76.40, 2, 3),
("2024-11-15 17:50:00", 91.70, 79.90, 3, 4),
("2024-11-15 21:10:00", 88.40, 73.90, 4, 5),
("2024-11-16 08:20:00", 86.30, 72.50, 1, 1),
("2024-11-16 12:40:00", 90.50, 77.10, 2, 2),
("2024-11-16 16:10:00", 88.60, 79.20, 3, 3),
("2024-11-16 19:40:00", 92.20, 80.50, 4, 4),
("2024-11-17 09:00:00", 86.70, 70.60, 1, 5),
("2024-11-17 13:30:00", 90.20, 75.80, 2, 1),
("2024-11-17 17:15:00", 88.80, 78.50, 3, 2),
("2024-11-17 22:00:00", 92.10, 80.00, 4, 3),
("2024-11-18 08:00:00", 85.60, 71.40, 1, 4),
("2024-11-18 12:45:00", 89.40, 76.30, 2, 5),
("2024-11-18 17:20:00", 91.50, 78.80, 3, 1),
("2024-11-18 21:30:00", 88.70, 73.40, 4, 2),
("2024-11-19 07:50:00", 86.20, 70.80, 1, 3),
("2024-11-19 11:30:00", 90.10, 75.90, 2, 4),
("2024-11-19 15:45:00", 88.40, 78.20, 3, 5),
("2024-11-19 19:40:00", 92.50, 81.00, 4, 1),
("2024-11-20 08:30:00", 86.50, 73.30, 1, 2),
("2024-11-20 12:20:00", 89.80, 76.50, 2, 3),
("2024-11-20 17:10:00", 91.70, 79.40, 3, 4),
("2024-11-20 21:50:00", 88.10, 74.20, 4, 5),
("2024-11-21 07:30:00", 85.90, 72.00, 1, 1),
("2024-11-21 11:10:00", 89.50, 75.70, 2, 2),
("2024-11-21 16:25:00", 90.60, 78.30, 3, 3),
("2024-11-21 20:50:00", 87.90, 73.60, 4, 4),
("2024-11-22 09:15:00", 86.30, 71.50, 1, 5),
("2024-11-22 13:10:00", 90.40, 76.90, 2, 1),
("2024-11-22 18:00:00", 88.80, 80.10, 3, 2),
("2024-11-22 22:40:00", 92.30, 82.40, 4, 3),
("2024-11-23 08:45:00", 85.80, 70.60, 1, 4),
("2024-11-23 12:30:00", 89.20, 75.30, 2, 5),
("2024-11-23 16:50:00", 91.20, 78.90, 3, 1),
("2024-11-23 21:15:00", 87.70, 74.80, 4, 2),
("2024-11-24 07:40:00", 85.40, 72.10, 1, 3),
("2024-11-24 11:50:00", 89.90, 76.40, 2, 4),
("2024-11-24 16:20:00", 88.60, 79.50, 3, 5),
("2024-11-24 20:45:00", 92.80, 80.60, 4, 1),
("2024-11-25 09:10:00", 86.10, 71.70, 1, 2),
("2024-11-25 13:50:00", 90.50, 77.10, 2, 3),
("2024-11-25 18:40:00", 88.30, 79.80, 3, 4),
("2024-11-25 22:30:00", 92.00, 82.10, 4, 5),
("2024-11-26 08:20:00", 85.70, 70.40, 1, 1),
("2024-11-26 11:40:00", 89.60, 75.10, 2, 2),
("2024-11-26 16:15:00", 90.70, 78.70, 3, 3),
("2024-11-26 20:50:00", 87.50, 73.50, 4, 4),
("2024-11-27 07:55:00", 85.30, 72.50, 1, 5),
("2024-11-27 12:10:00", 89.80, 76.90, 2, 1),
("2024-11-27 17:00:00", 91.40, 80.00, 3, 2),
("2024-11-27 21:35:00", 88.90, 78.20, 4, 3),
("2024-11-28 09:00:00", 86.70, 73.10, 1, 4),
("2024-11-28 13:40:00", 90.30, 76.80, 2, 5),
("2024-11-28 17:30:00", 88.10, 79.50, 3, 1),
("2024-11-28 21:45:00", 92.60, 81.20, 4, 2),
("2024-11-29 08:30:00", 85.50, 70.80, 1, 3),
("2024-11-29 12:15:00", 89.70, 76.20, 2, 4),
("2024-11-29 17:20:00", 90.90, 79.10, 3, 5),
("2024-11-29 21:50:00", 87.90, 74.70, 4, 1),
("2024-11-30 09:30:00", 86.00, 72.00, 1, 2),
("2024-11-30 13:50:00", 90.60, 77.50, 2, 3),
("2024-11-30 18:20:00", 88.50, 80.00, 3, 4),
("2024-01-05 22:40:00", 92.70, 81.90, 4, 5),
("2024-02-05 21:35:00", 88.90, 78.20, 4, 3),
("2024-03-05 09:00:00", 86.70, 73.10, 1, 4),
("2024-04-05 13:40:00", 90.30, 76.80, 2, 5),
("2024-05-05 17:30:00", 88.10, 79.50, 3, 1),
("2024-06-05 21:45:00", 92.60, 81.20, 4, 2),
("2024-07-05 08:30:00", 85.50, 70.80, 1, 3),
("2024-08-05 12:15:00", 89.70, 76.20, 2, 4),
("2024-09-05 17:20:00", 90.90, 79.10, 3, 5),
("2024-10-05 21:50:00", 87.90, 74.70, 4, 1),
("2024-12-05 13:50:00", 90.60, 77.50, 2, 3)
("2024-07-05 22:40:00", 85.50, 70.80, 1, 1),
("2024-07-05 21:35:00", 90.50, 78.80, 1, 1),
("2024-07-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-07-05 09:00:00", 92.60, 81.20, 1, 1),
("2024-07-05 13:40:00", 85.50, 70.80, 1, 1),
("2024-07-05 08:30:00", 88.90, 78.20, 1, 1),
("2024-07-05 22:40:00", 85.50, 70.80, 1, 1),
("2024-07-05 08:30:00", 85.95, 70.80, 1, 1),
("2024-07-05 13:50:00", 95.50, 70.80, 1, 1),
("2024-07-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-07-05 17:20:00", 85.00, 70.80, 1, 1),
("2024-07-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-07-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-07-05 08:30:00", 85.50, 71.80, 1, 1),
("2024-07-05 21:50:00", 87.50, 79.94, 1, 1),
("2024-07-05 08:30:00", 85.35, 71.82, 1, 1)
("2024-03-05 22:40:00", 85.50, 70.80, 1, 1),
("2024-03-05 21:35:00", 90.50, 78.80, 1, 1),
("2024-03-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-03-05 09:00:00", 92.60, 81.20, 1, 1),
("2024-03-05 13:40:00", 85.50, 70.80, 1, 1),
("2024-03-05 08:30:00", 88.90, 78.20, 1, 1),
("2024-03-05 22:40:00", 85.50, 70.80, 1, 1),
("2024-03-05 08:30:00", 85.95, 70.80, 1, 1),
("2024-03-05 13:50:00", 95.50, 70.80, 1, 1),
("2024-03-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-03-05 15:20:00", 85.00, 70.80, 1, 1),
("2024-03-05 19:37:00", 85.95, 70.80, 1, 1),
("2024-03-05 21:00:00", 87.50, 79.94, 1, 1),
("2024-03-05 09:20:00", 85.35, 71.82, 1, 1),
("2024-03-05 18:35:00", 85.00, 70.80, 1, 1),
("2024-03-05 17:20:00", 85.00, 70.80, 1, 1),
("2024-03-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-03-05 08:30:00", 85.50, 70.80, 1, 1),
("2024-03-05 08:30:00", 85.50, 71.80, 1, 1),
("2024-03-05 21:50:00", 87.50, 79.94, 1, 1),
("2024-03-05 08:30:00", 85.35, 71.82, 1, 1);
