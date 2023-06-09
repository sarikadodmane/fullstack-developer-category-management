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