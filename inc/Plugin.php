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
		add_action( 'init', [ $this, 'register_blockify' ] );
	}

	/**
	 * Register Blockify
	 *
	 * @return void
	 */
	public function register_blockify() {
		wp_enqueue_style( 'bootstrap', plugin_dir_url( __FILE__ ) . '../assets/css/bootstrap.min.css' );

		wp_register_script( 'blockify-blurb', plugin_dir_url( __FILE__ ) . '../build/index.js', array( 'wp-blocks', 'wp-editor' ) );

		register_block_type( 'blockify/blurb', array(
			'editor_script' => 'blockify-blurb',
		) );
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
}
