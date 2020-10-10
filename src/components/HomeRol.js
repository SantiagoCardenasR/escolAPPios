import React from 'react'
import StudentRol from './StudentRol';
import AdminRol from './AdminRol';

function HomeRol({rol}) {

    return (
        <div className="homeRol">
            {rol === "Estudiante"? <StudentRol />: rol === "Administrativo" ? <AdminRol />:""}
        </div>
    )
}

export default HomeRol
