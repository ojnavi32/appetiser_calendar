<?php

namespace App\Http\Controllers\API;

use App\Repositories\EventRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EventController extends Controller
{
    private $repo;

    public function __construct()
    {
        $this->repo = new EventRepository;
    }

    public function list()
    {
        try {
            $lists = $this->repo->listByMonth();
            return $this->success(compact('lists'));
        }
        catch (\Exception $e) {
            \Log::error($e);
            return $this->error();
        }
    }

    public function create(Request $request)
    {
        $dates = $request->input('dates');
        $name = $request->input('name');
        $from = strtotime($request->input('from'));
        $to = strtotime($request->input('to'));

        sort($dates);
        $first = $dates[0];

        rsort($dates);
        $last = $dates[0];

        try {
            $this->repo->deleteNotBetween($first, $last);

            if ($dates) {
                foreach ($dates as $date) {
                    $d = strtotime($date);
                    $this->repo->updateOrInsert(
                        ['date' => $d],
                        ['name' => $name]
                    );
                }
            }

            $lists = $this->repo->listByMonth();
            return $this->success(compact('lists'));
        }
        catch (\Exception $e) {
            \Log::error($e);
            return $this->error();
        }
    }
}
