import { useEditTask, useDeleteTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
    const { editTaskLoading, editTask } = useEditTask();
    const { deleteTaskLoading, deleteTask } = useDeleteTask();

    return (
        <div className="single-item">
            <input
                type="checkbox"
                checked={item.isDone}
                onChange={() =>
                    editTask({ taskId: item.id, isDone: !item.IsDone })
                }
                disabled={deleteTaskLoading}
            />
            <p
                style={{
                    textTransform: "capitalize",
                    textDecoration: item.isDone && "line-through",
                }}
            >
                {item.title}
            </p>
            <button
                className="btn remove-btn"
                type="button"
                onClick={() => deleteTask(item.id)}
                disabled={editTaskLoading}
            >
                delete
            </button>
        </div>
    );
};
export default SingleItem;
