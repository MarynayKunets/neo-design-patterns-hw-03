import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  constructor(private factory: PaymentProviderFactory) {}

  processPayment(amount: number): void {
    const provider = this.factory.createPaymentProvider();

    const transactionId = Math.random().toString(36).substring(2, 8);

    provider.authorize(amount);
    provider.capture(transactionId);
    provider.refund(transactionId);
  }
}
