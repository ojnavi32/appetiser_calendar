<?php

$version = env('API_VERSION');

Route::group(['prefix' => $version, 'namespace' => 'API'], function () {
    Route::group(['prefix' => 'events'], function () {
        Route::get('list', 'EventController@list');
        Route::post('create', 'EventController@create');
    });
});