class Order {
    constructor (
        readonly id: string, 
        readonly name:string,
        readonly status: string
    ) {}
}

interface IOrderUseCase {
    updateOrderStatus(ordID: string): string
}

interface IOrderRepository {
    getOrder(ordID: string): Order
    updateOrderStatus(ordID: string, status: String): boolean
}

interface IPaymentRPC {
    getOrderStatus(ordID: string): string
}

class OrderService implements IOrderUseCase {
    constructor(readonly orderRepository: IOrderRepository, 
        readonly paymentRPC: IPaymentRPC
    ) {}

    updateOrderStatus(ordID: string): string {
        const order = this.orderRepository.getOrder(ordID)

        if (order.status === 'paid') {
            return "ok"
        }

        const status = this.paymentRPC.getOrderStatus(ordID)

        if (this.orderRepository.updateOrderStatus(ordID, status)) {
            return "ok"
        }

        return "error cannot update order to db"
    }
}

class MySQLRepo implements IOrderRepository {
    getOrder(ordID: string): Order {
        if (ordID === "2") {
            return new Order("2", "Viet's order", "paid")
        }

        return new Order("1", "Viet's order", "waiting_payment")
    }

    updateOrderStatus(ordID: string, status: String): boolean {
        return true
    }

}

class NganLuongRPC implements IPaymentRPC {
    getOrderStatus(ordID: string): string {
        return "paid"
    }
}

class HTTPOrderService {
    constructor(readonly orderUseCase: IOrderUseCase) {}

    updateOrderStatus(request: Request, res: Response) {
        ///
        const orderId = "1"
        this.orderUseCase.updateOrderStatus(orderId)

        //
    }
}

// setup dependencies
const mySQLRepo = new MySQLRepo()
const nganluongRPC = new NganLuongRPC()
const orderService = new OrderService(mySQLRepo, nganluongRPC)
const httpOrder = new HTTPOrderService(orderService)
