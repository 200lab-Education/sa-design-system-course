interface IOrderBusiness {
    updateOrderStatus(ordID: string): boolean
}

class OrderBusiness implements IOrderBusiness {
    pmtRPC: IPaymentRPC
    ordRepo: IOrderRepository

    constructor(pmtRPC: IPaymentRPC, ordRepo: IOrderRepository) {
        this.pmtRPC = pmtRPC
        this.ordRepo = ordRepo
    }

    updateOrderStatus(ordID: string): boolean {
        let  order = this.ordRepo.GetOrder(ordID)

        // do some business logics...

        let status = this.pmtRPC.GetOrderStatus(ordID)

        // do something

        return this.ordRepo.UpdateOrderStatus(ordID, status)
    }
}

interface IPaymentRPC {
    GetOrderStatus(ordID: string) : string
}

interface IOrderRepository {
    GetOrder(ordID: string) : Order
    UpdateOrderStatus(ordID: string, status: string) : boolean
}

class Order {}