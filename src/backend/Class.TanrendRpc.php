<?php

namespace Tanrend;

use \PDO;

class TanrendRpc
{
    private $db;
    private $recommendedSemesters;

    function __construct()
    {
        $this->db = new PDO(
            "mysql:host=" . DB_HOST . ";charset=utf8",
            DB_USER,
            DB_PASS
        );
        $fileContent = file_get_contents(BASEDIR . "/resources/kurzusok.json");
        $this->recommendedSemesters = json_decode($fileContent, true);
    }

    private function getSubDepartmentRecommendedSemesters($subDepartment) {
        foreach ($this->recommendedSemesters as $elem) {
            if ($elem["subdepartment"] == $subDepartment) {
                return $elem["courses"];
            }
        }
        return null;
    }

    private function getRecommendedSemesterByCourseAndSubDep(
        $courseCode,
        $subDepartment
    ) {
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

    private function getCourseByCode($courseCode) {
        $query = "SELECT * FROM teszt.kurzusok
            WHERE tanev_felev='2016-2017-1' and kurzuskod=:courseCode";
        $sth = $this->db->prepare($query);
        $sth->bindValue(':courseCode', $courseCode, PDO::PARAM_STR);
        $sth->execute();
        $result = $sth->fetch(PDO::FETCH_ASSOC);

        return $result;
    }

    public function getCourseByCodeAndSubDep($courseCode, $subDepartment) {
        $recSem = $this->getRecommendedSemesterByCourseAndSubDep($courseCode, $subDepartment);
        $course = $this->getCourseByCode($courseCode);
        if (!is_null($course)) {
            $course["ajanlott_felev"] = $recSem["felev"];
        }
        return $course;
    }

    public function register($ph) {
        $ph->withClassAndMethod('getCourseByCodeAndSubDep', $this);
    }
}
