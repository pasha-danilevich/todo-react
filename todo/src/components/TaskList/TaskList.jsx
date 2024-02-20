import "./TaskList.css";
import { fetchTasks } from "../../fetch";

import Task from "./Task/Task";

import { useState, useEffect } from "react";

export default function TaskList() {
    const [listTasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchTasks(setTasks, setLoading);
    }, []);

    return (
        <div className="wrapper">
            {loading && <p>Loading...</p>}

            {!loading &&
                listTasks.map(function (task, index) {
                    return (
                        // Передать key прям в сомпонент Task
                        // Убрать div
                        <div key={index}>
                            <Task task={task} />
                        </div>
                    );
                })}
        </div>
    );
}
