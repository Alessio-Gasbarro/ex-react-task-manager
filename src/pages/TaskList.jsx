import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log('Tasks:', tasks);

    return (
        <div>
            <h1>Lista delle Task</h1>
            <p>Qui stanno le tasks</p>
        </div>
    )
}