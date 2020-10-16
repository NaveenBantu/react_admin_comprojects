import React from 'react'
import {List, Datagrid, TextField, Edit} from 'react-admin'

const ProjectList = (props) => {
    console.log("props in project list ",props);
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'></TextField>
                <TextField source='Project Name'></TextField>
            </Datagrid>
        </List>
    )
}

export default ProjectList
