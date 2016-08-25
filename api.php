<?php

require './config.php';
require BASEDIR . '/vendor/autoload.php';


$server = new JsonRPC\Server();
$procedureHandler = $server->getProcedureHandler();

$api = new Tanrend\TanrendRpc();
$api->register($procedureHandler);

echo $server->execute();
