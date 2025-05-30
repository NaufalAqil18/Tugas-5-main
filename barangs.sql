-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2025 at 05:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `barangs`
--

CREATE TABLE IF NOT EXISTS `barangs` (
  `id` int(10) UNSIGNED NOT NULL PRIMARY KEY,
  `nama` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `stok` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ;

--
-- Dumping data for table `barangs`
--

INSERT INTO `barangs` (`id`, `nama`, `harga`, `stok`, `created_at`, `updated_at`) VALUES
(1, 'Beras 5kg', 75000, 10, '2025-03-25 11:23:53', '2025-03-25 11:23:53'),
(2, 'Minyak Goreng 1L', 18000, 20, '2025-03-25 11:27:17', '2025-03-25 11:27:17'),
(3, 'Gula Pasir 1kg', 15000, 15, '2025-03-25 11:32:14', '2025-03-25 11:32:14'),
(4, 'Kecap Bango', 17500, 8, '2025-03-25 11:32:31', '2025-03-25 11:32:31'),
(5, 'Susu', 50000, 1, '2025-03-25 11:32:54', '2025-03-25 11:32:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barangs`
--

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barangs`
--
ALTER TABLE `barangs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
