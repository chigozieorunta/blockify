<?php
/**
 * Plugin class.
 *
 * @package Blockify
 */

namespace Blockify;

/**
 * Plugin Interface
 */
class Plugin {

	/**
	 * Plugin's singleton instance
	 *
	 * @var object
	 */
	private static $instance;

	/**
	 * Setup the Constructor
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'init', 'register_blockify' );
	}

	/**
	 * Plugin Entry point based on Singleton
	 *
	 * @return Plugin $plugin Instance of the plugin abstraction.
	 */
	public static function init() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Register Blockify
	 *
	 * @return void
	 */
	public function register_blockify() {
		register_block_type( 'blockify/blurb', array() );
	}
}
