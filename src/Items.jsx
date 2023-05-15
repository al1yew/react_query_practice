import SingleItem from "./SingleItem";
import { useAxiosTasks } from "./reactQueryCustomHooks";

const Items = () => {
    const { data, isLoading, isError } = useAxiosTasks();

    //iserror toje da tipa error toast qaytarir

    return isLoading ? (
        <div className="loading"></div>
    ) : (
        <div className="items">
            {data.taskList.map((item) => {
                return <SingleItem key={item.id} item={item} />;
            })}
        </div>
    );
};
export default Items;
