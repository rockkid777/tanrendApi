<?php

namespace Tanrend;
use Tanrend\Course;
use Tanrend\RecommendedSemester;

class TanrendRpc
{
    private $db;
    private $recommendedSemesterFao;

    function __construct()
    {
        $this->recommendedSemesterFao = new RecommendedSemester();
        $this->courseDao = new Course();
    }

    public function getCourseByCodeAndSubDep($courseCode, $subDepartment) {
        $recSem = $this->recommendedSemesterFao->
            getRecommendedSemesterByCourseAndSubDep($courseCode, $subDepartment);
        $course = $this->courseDao->getCourseByCode($courseCode);
        if (!$course) {
            return array('errorCode' => 404);
        }
        $course["ajanlott_felev"] = $recSem["felev"];
        return $course;
    }

    public function register($ph) {
        $ph->withClassAndMethod('getCourseByCodeAndSubDep', $this);
    }
}
