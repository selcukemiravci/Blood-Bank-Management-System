-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bloodybank
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `donate`
--

DROP TABLE IF EXISTS `donate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donate` (
  `healthcard` int DEFAULT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `age` int NOT NULL,
  `address` text NOT NULL,
  `bloodtype` text NOT NULL,
  `gender` text NOT NULL,
  `phone` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donate`
--

LOCK TABLES `donate` WRITE;
/*!40000 ALTER TABLE `donate` DISABLE KEYS */;
INSERT INTO `donate` VALUES (234524052,'Rei','Tsunemi',21,'abc def Ave','B-','male','+1 403 345 4343'),(430590489,'Amirreza','Pazira',22,'hello Ave','O+','female','+1 403 835 1654'),(928452934,'Emir','Avci',20,'Test Test Test','O-','male','+1 403 874 5465'),(252354908,'Hello','World',100,'Hello World ','A+','female','+65 48644546464'),(265252542,'Test','Test',1,'Test TEST','AB-','male','+31 40 918 4939');
/*!40000 ALTER TABLE `donate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'abc@gmail.com','12345'),(2,'a@a.s','123'),(3,'a@a.s','123'),(4,'a@gmail.com','1234'),(5,'b@b','abc'),(6,'bvjhh','oioioi'),(7,'Hello@gmail.com','12345');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `healthcard` int DEFAULT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `age` int NOT NULL,
  `address` text NOT NULL,
  `bloodtype` text NOT NULL,
  `gender` text NOT NULL,
  `reason` text NOT NULL,
  `phone` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (134341341,'rei','tsunemi',21,'1234 24 Ave','B-','male','I need for surgery','+1 403 333 1111'),(134341341,'rei','tsunemi',21,'1234 24 Ave','B-','male','I need for surgery','+1 403 333 1111'),(134341341,'rei','tsunemi',21,'1234 24 Ave','B-','male','I need for surgery','+1 403 333 1111'),(526254254,'emir','Avci',20,'1234 24 Ave','AB+','female','I need to become healthy','+1 403 123 4567'),(835672457,'Amirreza','Pazira',22,'1234 24 Ave','A+','male','I need it for friend','+1 403 865 2222'),(835672457,'Amirreza','Pazira',22,'1234 24 Ave','A+','male','I need it for friend','+1 403 865 2222'),(398134718,'Hello','World',100,'Hello World Ave','AB-','female','Hello World I need Blood!','+1 403 555 1111'),(245028459,'abcd','efsdf',535,'adf ge afe a','AB+','male','adfaf dfadf test test test test','+1 403 645 1654');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-07 22:22:15
