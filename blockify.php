<?php
/**
 * Plugin Name: Blockify
 * Plugin URI:  https://github.com/chigozieorunta/blockify
 * Description: A custom Gutenberg block plugin suite.
 * Version:     0.1.0
 * Author:      Chigozie Orunta
 * Author URI:  https://github.com/chigozieorunta
 * License:     GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: blockify
 * Domain Path: /languages
 *
 * @package Blockify
 */

// Support for site-level autoloading.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

\Blockify\Plugin::init();