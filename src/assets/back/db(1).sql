-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 30 jan. 2019 à 13:06
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

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

DROP TABLE IF EXISTS `actualite`;
CREATE TABLE IF NOT EXISTS `actualite` (
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

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`username`, `password`, `email`) VALUES
('chayma', 'root', 'chayma@root');

-- --------------------------------------------------------

--
-- Structure de la table `contact_form`
--

DROP TABLE IF EXISTS `contact_form`;
CREATE TABLE IF NOT EXISTS `contact_form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `sujet` varchar(200) NOT NULL,
  `messagee` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `contact_form`
--

INSERT INTO `contact_form` (`id`, `nom`, `prenom`, `telephone`, `email`, `sujet`, `messagee`) VALUES
(1, 'h', 'hiy', 'fghj', 'li@hj.g', 'ghj', 'message'),
(2, 'lina', 'a', '4512', 'lina.dridi.97@gmail.com', 'a', 'fghjklm'),
(3, 'a', 'a', 'a', 'lina.dridi.97@gmail.com', 'a', 'aaa'),
(4, 'a', 'a', 'a', 'lina.dridi.97@gmail.com', 'a', 'aaa'),
(5, 'a', 'a', 'a', 'lina.dridi.97@gmail.com', 'a', 'aaa'),
(6, 'a', 'a', 'a', 'lina.dridi.97@gmail.com', 'a', 'aaaa'),
(7, 'a', 'a', 'a', 'lin@hj.c', 'aaa', 'aaaaaaaaaaaaab'),
(8, 'a', 'a', 'bhjk', 'lina.dridi.97@gmail.com', 'b', 'dsfqc'),
(9, 'lina', 'dridi', '+21656300344', 'lina.dridi.97@gmail.com', 'hello', 'bonjouuur');

-- --------------------------------------------------------

--
-- Structure de la table `newsletter_form`
--

DROP TABLE IF EXISTS `newsletter_form`;
CREATE TABLE IF NOT EXISTS `newsletter_form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `newsletter_form`
--

INSERT INTO `newsletter_form` (`id`, `email`) VALUES
(1, 'lina.dridi.97@gmail.com'),
(2, 'Lina.dridi.97@gmail.com'),
(3, 'ghjk'),
(4, 'Lina.d'),
(5, 'h'),
(6, 'h'),
(7, 'hj@h.h'),
(8, 'lin@hj.c'),
(9, 'hola@hey.com');

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

DROP TABLE IF EXISTS `publication`;
CREATE TABLE IF NOT EXISTS `publication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `titre` varchar(250) NOT NULL,
  `lien` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `publication`
--

INSERT INTO `publication` (`id`, `date`, `titre`, `lien`) VALUES
(1, '0001-01-01', 'pub1', 'PDF1.pdf'),
(2, '0001-01-01', 'pub2', 'gfhjkl'),
(3, '0001-01-01', 'pub3', 'gfhjkl'),
(4, '0001-01-01', 'pub4', 'gfhjkl'),
(5, '0001-01-01', 'pub5', 'gfhjkl'),
(6, '0001-01-01', 'pub6', 'hgjklm'),
(7, '0001-01-01', 'pub7', 'gjhklm'),
(8, '0001-01-01', 'pub8', 'hgjklm'),
(9, '0001-01-01', 'pub9', 'ghjklm'),
(10, '0001-01-01', 'pub10', 'ghjkl'),
(11, '0001-01-01', 'pub11', 'dgfhj');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
