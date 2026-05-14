# Домашнє завдання №3

## Породжувальні патерни: Factory Method та Abstract Factory

## Опис проєкту

Цей проєкт реалізує імітаційну платіжну систему на TypeScript з підтримкою кількох платіжних провайдерів:

- Stripe
- PayPal
- ApplePay

Кожен провайдер підтримує однаковий набір операцій:

- authorize
- capture
- refund

Створення об’єктів реалізовано через фабрики, що дозволяє легко розширювати систему новими платіжними провайдерами.

---

## Структура проєкту

```txt
src/
  core/
    PaymentProvider.ts
    PaymentProviderFactory.ts

  providers/
    stripe/
      StripePaymentProvider.ts
      StripeFactory.ts

    paypal/
      PaypalPaymentProvider.ts
      PaypalFactory.ts

    apple/
      ApplePaymentProvider.ts
      AppleFactory.ts

  app/
    PaymentContext.ts

  main.ts
```
