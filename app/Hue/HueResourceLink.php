<?php

namespace App\Http\Hue;

use App\Http\Hue\Resources\BaseHueResource;
use Illuminate\Http\JsonResponse;

class HueResourceLink extends HueClient
{
    /**
     * Returns all the $resources in your bridge
     *
     * @return JsonResponse
     */
    public function all()
    {
        $all = $this->send('/bridge/' . $this->baseUser . '/resourcelinks');
        $resources = array();

        foreach($all as $key => $value){
            $value->id = (int)$key;

            array_push($resources, new BaseHueResource($value));
        }

        return response()->json($resources, 200);
    }

    /**
     * Returns all sensors
     *
     * @return JsonResponse
     */
    public function get()
    {
        $response = $this->send('/bridge/' . $this->baseUser . '/resourcelinks');

        if ($response->name)
            return response()->json($response, 200);

        else
            return response()->json(['error' => $response], 400);
    }

    /**
     * Returns a new sensor object
     *
     * @return JsonResponse
     */
    public function store()
    {
        return response()->json(['error' => 'function not provided'], 400);
    }
}
