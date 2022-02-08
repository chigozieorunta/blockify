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
		add_action( 'enqueue_block_editor_assets', [ $this, 'register_blockify_scripts' ] );
	}

	/**
	 * Register Blockify
	 *
	 * @return void
	 */
	public function register_blockify() {
		register_block_type( 'blockify/blurb', array() );
	}

	/**
	 * Register Gutenbergify Script
	 *
	 * @return void
	 */
	public function register_blockify_scripts() {
		wp_enqueue_script( 'blockify-blurb', plugins_dir_url() . '/blocks/Blurb/build/index.js', array( 'wp-blocks' ) );
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
