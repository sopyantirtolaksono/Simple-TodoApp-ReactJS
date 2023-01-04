import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import EditTask from "../modals/EditTask";

export default function CardTask({taskList, index, deleteTask, updateArrayList}) {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateArrayList(obj, index);
        setModal(false);
    }

    const handleDelete = () => {
        console.log("Sign in method handleDelete with id = " + index);
        deleteTask(index);
    }

    return (
        <Card className="shadow">
            <CardBody>
                <CardTitle className="mb-4" tag="h5">
                    {taskList.taskName}
                </CardTitle>
                <CardText>
                    {taskList.description}
                </CardText>
                <Button style={{marginRight: "0.5rem"}} color="outline-secondary" className="btn-sm" onClick={() => setModal(true)}>
                    Edit
                </Button>
                <Button color='outline-danger' className="btn-sm" onClick={handleDelete}>
                    Delete
                </Button>
            </CardBody>

            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskList={taskList} />
        </Card>
    )
}