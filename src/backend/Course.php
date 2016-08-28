<?php

namespace Tanrend;

use \PDO;


class Course
{
    private $db;

    function __construct()
    {
        $this->db = new PDO(
            "mysql:host=" . DB_HOST . ";charset=utf8",
            DB_USER,
            DB_PASS
        );
    }

    public function getCourseByCode($courseCode) {
        $query = "SELECT * FROM teszt.kurzusok
            WHERE tanev_felev='2016-2017-1' and kurzuskod=:courseCode";
        $sth = $this->db->prepare($query);
        $sth->bindValue(':courseCode', $courseCode, PDO::PARAM_STR);
        $sth->execute();
        $result = $sth->fetch(PDO::FETCH_ASSOC);

        return $result;
    }
}
