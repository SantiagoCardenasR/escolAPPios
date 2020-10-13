import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Calendario.css";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import usePortal from "react-cool-portal";
/* import FormCalendario from "./FormCalendario"; */
import Chart from "react-google-charts";

function Calendario() {
    return (
        <div className="calendario">
            <Chart
                width={"100%"}
                height={300}
                chartType="Calendar"
                loader={<div>Loading Chart</div>}
                data={[
                  [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
                  [new Date(2020, 2, 4), "Jornada de limpieza"],
                  [new Date(2020, 2, 5), 3],
                  [new Date(2020, 2, 7), -1],
                  [new Date(2020, 2, 8), 2],
                  [new Date(2020, 2, 12), -1],
                  [new Date(2020, 1, 15), 1],
                  [new Date(2020, 1, 16), -4],
                ]}
                options={{
                  title: 'Red Sox Attendance',
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}
export default Calendario;