<?php 

class config {

	private static $server;
	private static $database;
	private static $username;
	private static $password;

	public static function getServer(){
		return self::$server;
	}
	
	public static function getDatabase(){
		return self::$database;
	}
	
	public static function getUsername(){
		return self::$username;
	}

	public static function getPassword(){
		return self::$password;
	}

	public static function getMysqlConnectionString(){
		return"mysql:host=".config::getServer().
		";dbname=".config::getDatabase();
	}

	public static function init(){
		self::$server="localhost";
		self::$database="estagio";
		self::$username="root";
		self::$password="";
	}
	/*
	$host='mysql:host=localhost;dbname=estagio';
		$usuario='root';
		$senha='';

		try
		{
			$pdo= new PDO($host,$usuario,$senha); 
		}
		catch(PDOException $ex){
			echo 'ERROR'.$ex->getMessage();
		}*/

}
	
?>