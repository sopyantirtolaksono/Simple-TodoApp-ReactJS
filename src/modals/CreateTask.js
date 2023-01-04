import React, { useState } from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

export default function CreateTask({toggle, modal, saveTask}) {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    // const handleChange = (e) => {
    //     const {name, value} = e.terget;
    //     if(name === "task_name") {
    //         setTaskName(value);
    //     } else {
    //         setDescription(value);
    //     }
    // }

    const handleSave = () => {
        let dataLocal = localStorage.getItem("tasklist");
        let lenDataLocal;

        if(!dataLocal) {
            lenDataLocal = 1;
        } else {
            dataLocal = JSON.parse(dataLocal);
            lenDataLocal = dataLocal.length+1;
        }

        let taskObj = {};
        taskObj["taskName"] = taskName;
        taskObj["description"] = description;
        taskObj["id"] = lenDataLocal;
        saveTask(taskObj);
        setTaskName("");
        setDescription("");
    }

  return (
    <>
        <div>
            <Modal
                toggle={toggle} isOpen={modal}
            >
                <ModalHeader>
                    Create New Task
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>
                                Task name
                            </Label>
                            <Input
                                name="task_name"
                                placeholder="Task name"
                                type="text"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Description
                            </Label>
                            <Input
                            name="description"
                            placeholder="Description"
                            type="textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button
                    color="primary"
                    onClick={handleSave}
                >
                   Create
                </Button>
                {' '}
                <Button onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    </>
  )
}
