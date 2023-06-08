-- -----------------------------------------------------
-- Schema `shophouse`
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `shophouse`;
USE `shophouse` ;

-- -----------------------------------------------------
-- Table `shophouse`.`category`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `shophouse`.`user_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;
  `category` VARCHAR(20) NULL DEFAULT NULL,
  `alias` varchar(10) NULL DEFAULT NULL,
  `created_date` TIMESTAMP NULL DEFAULT NULL,
  `last_modified` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `shophouse`.`clothing`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `shophouse`.`clothing` (
  `id` UUID NOT NULL;
  `category` TEXT NULL DEFAULT NULL,
  `user_category` varchar(10) NULL DEFAULT NULL,
  `instock` INT(10) NULL DEFAULT 0,
  `created_date` TIMESTAMP NULL DEFAULT NULL,
  `last_modified` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_category) REFERENCES user_category(alias));

-- -----------------------------------------------------
-- Table `shophouse`.`footwear`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `shophouse`.`footwear` (
  `id` UUID NOT NULL;
  `category` VARCHAR(20) NULL DEFAULT NULL,
  `user_category` varchar(10) NULL DEFAULT NULL,
  `instock` INT(10) NULL DEFAULT 0,
  `created_date` TIMESTAMP NULL DEFAULT NULL,
  `last_modified` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
  FOREIGN KEY (user_category) REFERENCES user_category(alias);
);