<?php

namespace Tanrend;


class RecommendedSemester
{

    private $recommendedSemesters;

    function __construct()
    {
        $fileContent = file_get_contents(BASEDIR . "/resources/kurzusok.json");
        $this->recommendedSemesters = json_decode($fileContent, true);
    }

    private function getSubDepartmentRecommendedSemesters($subDepartment)
    {
        foreach ($this->recommendedSemesters as $elem) {
            if ($elem["subdepartment"] == $subDepartment) {
                return $elem["courses"];
            }
        }
        return null;
    }

    public function getRecommendedSemesterByCourseAndSubDep(
        $courseCode,
        $subDepartment
    )
    {
        $recommendedSemesters = $this->getSubDepartmentRecommendedSemesters(
            $subDepartment
        );

        foreach ($recommendedSemesters as $elem) {
            if ($elem["kurzuskod"] == $courseCode) {
                return $elem;
            }
        }
        return null;
    }
}
