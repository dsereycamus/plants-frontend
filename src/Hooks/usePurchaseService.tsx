import { TPurchase } from '@models/index'
import { TPurchaseRequest } from '@models/Requests/PurchaseRequest'
import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { purchaseService } from 'src/Services/purchaseService'

export const useMakePurchase = (): UseMutationResult<
    TPurchase,
    Error,
    TPurchaseRequest
> =>
    useMutation({
        mutationFn: async (data: TPurchaseRequest) => {
            const request = await purchaseService.makeNewPurchase(data)

            return request.data
        },
    })
