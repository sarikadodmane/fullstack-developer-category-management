-- -----------------------------------------------------
-- Schema `shophouse`
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `shophouse`;
USE `shophouse` ;

-- -----------------------------------------------------
-- Table `shophouse`.`category`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `shophouse`.`user_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(20) NULL DEFAULT NULL,
  `alias` VARCHAR(10) NULL DEFAULT NULL,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `created_date` TIMESTAMP NULL DEFAULT NULL,
  `last_modified` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `user_category` ADD INDEX `alias_idx` (`alias`);

-- -----------------------------------------------------
-- Table `shophouse`.`cloth`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `shophouse`.`cloth` (
  `id` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NULL DEFAULT NULL,
  `user_category` VARCHAR(20) NULL DEFAULT NULL,
  `instock` INT NULL DEFAULT 0,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `created_date` TIMESTAMP NULL DEFAULT NULL,
  `last_modified` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_category) REFERENCES user_category(alias) ON DELETE CASCADE);
  
  ALTER TABLE `cloth` ADD COLUMN `sub_category` TEXT NULL DEFAULT NULL;

-- -----------------------------------------------------
-- Table `shophouse`.`footwear`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `shophouse`.`footwear` (
  `id` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NULL DEFAULT NULL,
  `user_category` VARCHAR(20) NULL DEFAULT NULL,
  `instock` INT NULL DEFAULT 0,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `created_date` TIMESTAMP NULL DEFAULT NULL,
  `last_modified` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_category) REFERENCES user_category(alias) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `shophouse`.`categories`
-- -----------------------------------------------------

  CREATE TABLE categories (
  category_id INT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL,
  parent_id INT,
  FOREIGN KEY (parent_id) REFERENCES categories(category_id)
);

-- -----------------------------------------------------
-- Table `shophouse`.`categories` insert statement
-- -----------------------------------------------------

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (1, 'Root', NULL);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (2, 'Women', 1);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (3, 'Clothing', 2);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (4, 'Dresses', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (5, 'Causal Dresses', 4);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (6, 'Party Dresses', 4);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (7, 'T-Shirts', 2);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (8, 'Printed T-shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (9, 'Causal T-shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (10, 'Plain T-shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (11, 'Men', 1);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (12, 'Footwear', 2);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (13, 'Branded', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (14, 'Non Branded', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (15, 'T-Shirts', 2);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (16, 'Printed T-shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (17, 'Causal T-shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (18, 'Plain T-shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (19, 'Shirts', 2);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (20, 'Party Shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (21, 'Causal Shirts', 3);

INSERT INTO categories (category_id, category_name, parent_id)
VALUES (22, 'Plain Shirts', 3);