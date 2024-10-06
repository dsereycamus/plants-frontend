/* eslint-disable react-hooks/exhaustive-deps */
import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { TProduct, TProductData } from '../Models'
import { useStorage } from 'src/Hooks/useStorage'

type CartContextData = {
    items: TProductData[]
    total: number
    setItems: Dispatch<SetStateAction<TProductData[]>>
    addItem: (item: TProduct) => void
    removeItem: (item: TProduct) => void
    modifyAmount: (item: TProduct, amount: number) => void
    clearCart: () => void
}

export const CartContext = createContext<CartContextData>({
    items: [],
    total: 0,
    setItems: () => {},
    addItem: () => {},
    removeItem: () => {},
    modifyAmount: () => {},
    clearCart: () => {},
})

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const { setData, getData, removeData } = useStorage<TProductData[]>('cart')
    const [items, setItems] = useState<TProductData[]>([])

    const addItem = (item: TProduct) => {
        setItems((items) => {
            const newArray = [...items]
            if (items.find((it) => it.product._id === item._id)) {
                setData(newArray)
                return newArray
            } else {
                newArray.push({ product: item, amount: 1 })
                setData(newArray)
                return newArray
            }
        })
    }
    const removeItem = (item: TProduct) => {
        setItems((items) => {
            const newArray = [...items]
            const result = newArray.filter((it) => it.product._id !== item._id)
            setData(result)
            return result
        })
    }

    const modifyAmount = (item: TProduct, amount: number) => {
        setItems((items) => {
            const newArray = [...items]
            const index = items.findIndex((it) => it.product._id === item._id)
            if (index !== -1) {
                newArray[index].amount = amount
                setData(newArray)
                return newArray
            } else {
                setData(newArray)
                return newArray
            }
        })
    }

    const clearCart = () => {
        console.log('Removed Data')
        removeData()
        setItems([])
    }

    const total = useMemo(() => {
        if (items.length > 0) {
            let counter = 0
            items.forEach(
                (item) => (counter += item.amount * item.product.price)
            )
            return counter
        }
        return 0
    }, [items])

    useEffect(() => {
        const getCartData = getData()
        if (items.length === 0 && !!getCartData) {
            setItems(getCartData)
        }
    }, [])

    const values = useMemo(
        () => ({
            items,
            setItems,
            addItem,
            removeItem,
            modifyAmount,
            clearCart,
            total,
        }),
        [items]
    )

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)
