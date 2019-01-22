-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 22 jan. 2019 à 19:00
-- Version du serveur :  10.1.32-MariaDB
-- Version de PHP :  5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

CREATE TABLE `actualite` (
  `id` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `datee` varchar(255) NOT NULL,
  `contenu` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`id`, `titre`, `datee`, `contenu`) VALUES
('1', 'sqdfg', '1/1/1', 'gdhfhjkhkhfhgd'),
('', 'fghjk', 'dfghjklm', 'gfhjkl'),
('', 'dfgh', 'sdf', 'sdfghj'),
('6', 'gfhjklm', 'fhgjklml', 'hgjklm'),
('5', 'hkjl', 'ghjkj', 'gjhkl'),
('4', 'hello1', 'ghjkl', 'ghjk'),
('7', 'fghjklmm', 'fhgjklml', 'gjhklm'),
('8', 'fgkjlm', 'gfhjklm', 'hgjklm'),
('9', 'fghjkl', 'fghjklm', 'ghjklm'),
('10', 'fghjkl', 'dfghjk', 'ghjkl'),
('11', 'sdfhgjkl', 'fghjk', 'dgfhj');

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`username`, `password`, `email`) VALUES
('chayma', 'root', 'chayma@root');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
