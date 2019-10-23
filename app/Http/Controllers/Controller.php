<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success($items, $status = 200)
    {
        if ($items instanceof Arrayable) {
            $items = $items->toArray();
        }

        if ($items) {
            $items['status'] = 'success';

            foreach($items as $key => $item) {
                $data[$key] = $item;
            }
        }

        return response()->json($data, $status);
    }

    public function error($errors = null, $status = 422)
    {
        $response['status'] = 'error';
        $response['message'] = 'Something went wrong';

        if (!is_null($errors)) {
            if (array_key_exists('message', $errors)) {
                $response['message'] = $errors['message'];
            }
            else {
                $response['validation_errors'] = $errors;
            }
        }

        return response()->json($response, $status);
    }
}
