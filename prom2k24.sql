-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 20 juin 2024 à 19:21
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `prom2k24`
--

-- --------------------------------------------------------

--
-- Structure de la table `tables_list`
--

CREATE TABLE `tables_list` (
  `id` int(11) NOT NULL,
  `numero` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tables_list`
--

INSERT INTO `tables_list` (`id`, `numero`) VALUES
(1, '778889'),
(2, '545557'),
(3, '983319'),
(4, '791577'),
(5, '227873'),
(6, '239010'),
(7, '286506'),
(8, '887598'),
(9, '460975'),
(10, '582451'),
(11, '363061'),
(12, '919478'),
(13, '558393'),
(14, '248764'),
(15, '380100'),
(16, '527047'),
(17, '403401'),
(18, '592985'),
(19, '635872'),
(20, '755809'),
(21, '890082'),
(22, '965992'),
(23, '603769'),
(24, '117885');

-- --------------------------------------------------------

--
-- Structure de la table `votes`
--

CREATE TABLE `votes` (
  `id` int(11) NOT NULL,
  `userAgent` varchar(200) NOT NULL,
  `roi` varchar(200) NOT NULL,
  `reine` varchar(200) NOT NULL,
  `costume` varchar(200) NOT NULL,
  `robe` varchar(200) DEFAULT NULL,
  `nTable` varchar(60) DEFAULT NULL,
  `timestamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `tables_list`
--
ALTER TABLE `tables_list`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `tables_list`
--
ALTER TABLE `tables_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
