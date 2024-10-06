export const useStorage = <T>(name: string) => {
    const getData = (): T | undefined => {
        if (typeof window === 'undefined') return undefined

        const value = window.localStorage.getItem(name)

        return value ? JSON.parse(value) : undefined
    }

    const setData = (data: T): boolean => {
        const parsedData = JSON.stringify(data)

        window.localStorage.setItem(name, parsedData)

        return true
    }

    const removeData = (): boolean => {
        window.localStorage.removeItem(name)

        return true
    }

    return { getData, setData, removeData }
}
