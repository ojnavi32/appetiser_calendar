<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CalendarEvent extends Model
{
    protected $fillable = [
        'name', 'date'
    ];

    public function setDateAttribute($value)
    {
        $this->attributes['date'] = strtotime($value);
    }

    public function getDateAttribute($value)
    {
        return date('Y-m-d', $value);
    }
}
