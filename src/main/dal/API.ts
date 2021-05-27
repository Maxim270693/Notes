import {TasksType} from "../bll/reducers";

export const Api = {
    getTasks: () => {
        return new Promise<Array<TasksType>>((resolve, reject) => setTimeout(() => {
            const serializedState = localStorage.getItem('app-state');
            if (serializedState === null) {
                resolve([]);
            } else {
                const result = JSON.parse(serializedState).notes.tasks;
                resolve(result)
            }
        }, 1000))
    },
    postTask: <T>(data: T) => {
        return new Promise<string>((resolve, reject) => setTimeout(() => {
            const serializedState = localStorage.getItem('app-state');
            if (serializedState === null) {
                reject('error');
            } else {
                const state = JSON.parse(serializedState);

                state.notes.tasks = [...state.notes.tasks, data]

                localStorage.setItem('app-state', JSON.stringify(state));

                resolve('ok')
            }
        }, 1000))
    },
    putTask: (data: TasksType) => {
        return new Promise((resolve, reject) => setTimeout(() => {
            const serializedState = localStorage.getItem('app-state');
            if (serializedState === null) {
                reject('error');
            } else {
                const state = JSON.parse(serializedState);

                state.notes.tasks = state.notes.tasks.map((t: TasksType) => t.id === data.id ? {
                    ...t,
                    title: data.title
                } : t)

                resolve('ok')
            }
        }, 1000))
    },
    deleteTask: (id: string) => {
        return new Promise((resolve, reject) => setTimeout(() => {
            const serializedState = localStorage.getItem('app-state');
            if (serializedState === null) {
                reject('error');
            } else {
                const state = JSON.parse(serializedState);

                state.notes.tasks = state.notes.tasks.filter((task: TasksType) => task.id !== id)

                resolve('ok')
            }
        }, 1000))
    }
}
