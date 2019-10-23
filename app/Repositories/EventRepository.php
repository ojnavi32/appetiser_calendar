<?php

namespace App\Repositories;

use App\Models\CalendarEvent;
use App\Repositories\CrudInterface;
use App\Traits\CommonRepoMethod;

class EventRepository implements CrudInterface
{
    use CommonRepoMethod;

    public $storeSuccess = 'Event successfully saved';

    protected $model;

    public function __construct()
    {
        $this->model = new CalendarEvent;
    }

    public function updateOrInsert(array $args, array $data)
    {
        return $this->model->updateOrInsert($args, $data);
    }

    public function deleteNotBetween($from, $to)
    {
        return $this->model->whereNotBetween('date', [$from, $to])->delete();
    }

    public function findUpdate($date, $name)
    {
        return $this->findyBy(['date' => $date])->update(['name' => $name]);
    }

    public function updateInBetween($from, $to, $name)
    {
        return $this->model->whereBetween('date', [$from, $to])->update(['name' => $name]);
    }

    public function listByMonth($first = null, $last = null, $pluck = false)
    {
        if (is_null($first)) {
            $first = strtotime(date('Y-m-01'));
        }

        if (is_null($last)) {
            $last = strtotime(date('Y-m-t'));
        }
        $data = $this->model->whereBetween('date', [$first, $last]);

        if ($pluck) {
            return $data->pluck('date')->toArray();
        }

        return $data->get();
    }
}