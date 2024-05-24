<?php

                    $connection = new mysqli("webcourse.cs.nuim.ie", "u230045", "aeTh2ohliw3pie0j", "cs230_u230045");

                    if($con)
                    {
                        echo "Connection made"
                    }
                    else
                    {
                        die(mysqli_error($con));
                    }
?>