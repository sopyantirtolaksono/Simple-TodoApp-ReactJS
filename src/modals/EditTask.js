import React, { useEffect, useState } from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

export default function EditTask({toggle, modal, updateTask, taskList}) {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setTaskName(taskList.taskName);
        setDescription(taskList.description);
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();

        let tempList = {};
        tempList["taskName"] = taskName;
        tempList["description"] = description;

        updateTask(tempList);
    }

  return (
    <>
        <div>
            <Modal
                toggle={toggle} isOpen={modal}
            >
                <ModalHeader>
                    Edit Task
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
                    onClick={handleUpdate}
                >
                   Update
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
