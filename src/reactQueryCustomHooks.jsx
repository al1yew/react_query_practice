import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

export const useAxiosTasks = () => {
    const { isLoading, data, error, isError } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const { data } = await customFetch.get("/");
            return data;
        },
    });

    return { isLoading, isError, data };
};

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
        mutationFn: async (title) => {
            const res = await customFetch.post("/", { title });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
            toast.success("task added!");
        },
        onError: (error) => {
            toast.error(error.response.data.msg);
        },
    });

    return { createTask, createTaskLoading };
};

export const useEditTask = () => {
    const queryClient = useQueryClient();

    const { mutate: editTask, isLoading: editTaskLoading } = useMutation({
        mutationFn: async ({ taskId, isDone }) => {
            const res = await customFetch.patch(`/${taskId}`, { isDone });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });

    return { editTask, editTaskLoading };
};

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
        mutationFn: async (id) => {
            const res = await customFetch.delete(`/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });

    return { deleteTask, deleteTaskLoading };
};
