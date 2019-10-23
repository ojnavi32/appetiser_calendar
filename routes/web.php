<?php
use App\Models\CalendarEvent;
Route::get('tez', function () {
    $data = [
        [
            'date' => strtotime('2019-10-22'),
            'name' => 'web'
        ],
        [
            'date' => strtotime('2019-10-23'),
            'name' => 'web'
        ],
    ];
    $d = [
        strtotime('2019-10-29'),
        strtotime('2019-10-23'),
        strtotime('2019-10-24')
    ];
    sort($d);
    // return $d[0];
    return date('Y-m-d', 1569888000);
    CalendarEvent::whereNotBetween('date', [strtotime('2019-10-01'), strtotime('2019-10-05')])->delete();
    // return date('Y-m-d')
    $d = CalendarEvent::whereBetween('date', [strtotime('2019-10-01'), strtotime('2019-10-31')])->pluck('date')->toArray();
    // return in_array('2019-10-01', $d) ? 'yes' : 'no';
    return CalendarEvent::where(['date' => '1570233600'])->get();
});

Route::get('/{any?}', function () {
    return view('index');
})->where('any', '.*');