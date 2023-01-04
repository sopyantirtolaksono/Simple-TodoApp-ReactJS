import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Container } from 'reactstrap'
import CreateTask from '../modals/CreateTask'
import CardTask from './CardTask'

export default function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [loadTask, setLoadTask] = useState(false);

    useEffect(() => {
        let data = localStorage.getItem("tasklist");
        if(data) {
            setTaskList(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        if(loadTask) {
            let data = localStorage.getItem("tasklist");
            if(data) {
                setTaskList(JSON.parse(data));
                setLoadTask(false);
            }
        }
    }, [loadTask])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("tasklist", JSON.stringify(tempList));
        setModal(false);
    }

    const deleteTask = (index) => {
        console.log("Sign in method deleteTask with index = " + index);

        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("tasklist", JSON.stringify(tempList));
        setTaskList(tempList);
        setLoadTask(true);
    }

    const updateArrayList = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("tasklist", JSON.stringify(tempList));
        setTaskList(tempList);
        setLoadTask(true);
    }

  return (
    <>
        <Row style={{backgroundColor: "#eeeeee"}}>
            <Col className="text-center mt-5 mb-5">
                <h3>MY TODO</h3>
                <Button color='primary' onClick={() => setModal(true)}>New Todo</Button>
            </Col>
        </Row>

        <Container fluid className="mt-4">
            <Row>
                <Col>
                    <h4 className="mb-3">Todo List</h4>
                </Col>
            </Row>
            <Row>
                {taskList && taskList.map((task, index) => (
                    <Col sm={3} className="mt-3" key={index}>
                        <CardTask taskList={task} index={index} deleteTask={deleteTask} updateArrayList={updateArrayList} />
                    </Col>
                ))}
            </Row>
        </Container>

        <CreateTask toggle={toggle} modal={modal} saveTask={saveTask}/>
    </>
  )
}
