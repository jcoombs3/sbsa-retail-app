import { Provider } from "@angular/core";
import {
  ContentType,
  ImageContentItem,
  StructuredContentItem
} from "@backbase/foundation-ang/web-sdk";
import { TemplateRegistry } from "@backbase/foundation-ang/core";
import {
  createMocks,
  createMocksInterceptor
} from "@backbase/foundation-ang/data-http";
import { ContactsHttpServiceMocksProvider } from "@backbase/data-ang/contact-manager";
import { PaymentOrdersHttpServiceMocksProvider } from "@backbase/data-ang/payment-order";
import { A2aClientHttpServiceMocksProvider } from "@backbase/data-ang/payment-order-a2a";
import {
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  TurnoversHttpServiceMocksProvider
} from "@backbase/data-ang/transactions";
import { PlacesHttpServiceMocksProvider } from "@backbase/data-ang/places";
import { CampaignSpaceHttpMocksProvider } from "@backbase/campaign-space-ang";
import { NotificationsMocksProvider } from "@backbase/retail-ang/notifications";
import { ActionsMocksProvider } from "@backbase/retail-ang/actions";
import { MessagecenterHttpServiceMocksProvider } from "@backbase/data-ang/messages";
import {
  CardsHttpServiceMocksProvider,
  TravelNoticesHttpServiceMocksProvider
} from "@backbase/data-ang/cards";
import {
  IdentityManagementServiceMocksProvider,
  UserManagementServiceMocksProvider,
  UserProfileManagementServiceMocksProvider
} from "@backbase/data-ang/user";
import {
  ManageMyDevicesServiceMocksProvider,
  ManageOtherUsersDevicesServiceMocksProvider
} from "@backbase/data-ang/device";
import {
  ConsentsHttpServiceMocksProvider,
  PaymentRequestsHttpServiceMocksProvider,
  ConsentRequestsHttpServiceMocksProvider
} from "@backbase/data-ang/consent";
import { SavinggoalsHttpServiceMocksProvider } from "@backbase/data-ang/saving-goals";
import { SelfEnrollmentServiceMocksProvider } from "@backbase/data-ang/self-enrollment";
import { AccountStatementHttpServiceMocksProvider } from "@backbase/data-ang/account-statements";
import { BudgetsHttpServiceMocksProvider } from "@backbase/data-ang/budgeting";
import { CategoriesHttpServiceMocksProvider } from "@backbase/data-ang/categories-management";
import {
  AccountsHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  BalancesHttpServiceMocksProvider,
  ProductKindsHttpServiceMocksProvider
} from "@backbase/data-ang/arrangements";
import {
  BillPayAccountsServiceMocksProvider,
  BillPayAutopayServiceMocksProvider,
  BillPayEbillsServiceMocksProvider,
  BillPayEnrolmentServiceMocksProvider,
  BillPayPayeesServiceMocksProvider,
  BillPayPayeesSummaryServiceMocksProvider,
  BillPayPaymentsServiceMocksProvider,
  BillPayPayverisServiceMocksProvider,
  BillPaySearchServiceMocksProvider
} from "@backbase/data-ang/billpay";
import {
  ActionRecipesHttpServiceMocksProvider,
  ActionRecipeSpecificationsHttpServiceMocksProvider
} from "@backbase/data-ang/actions";
import { StopChecksHttpServiceMocksProvider } from "@backbase/data-ang/stop-checks";
import { NotificationsHttpServiceMocksProvider } from "@backbase/data-ang/notifications";
import { AuthorizedUserServiceMocksProvider } from "@backbase/data-ang/authorized-users";
import {
  ServiceAgreementHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
  UsersHttpServiceMocksProvider
} from "@backbase/data-ang/accesscontrol";
import { PaymentTemplatesHttpServiceMocksProvider } from "@backbase/data-ang/payment-template";

const productSummaryArrangementsMocks = {
  aggregatedBalance: {
    value: "353499.11",
    currency: "ZAR"
  },
  currentAccounts: {
    name: "Current Accounts",
    products: [
      {
        id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4691",
        name: "Mr and Mrs J. Smith",
        displayName: "Our joined account",
        externalTransferAllowed: true,
        crossCurrencyAllowed: true,
        productKindName: "Current Account",
        productTypeName: "Main Current Account",
        bankAlias: "Our joined account",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        bookedBalance: "1000.00",
        availableBalance: "1500.00",
        creditLimit: "442.12",
        IBAN: "•••••••••••••••••••••••AA36",
        BBAN: "•••••••••••••••••••••••YD56",
        currency: "ZAR",
        urgentTransferAllowed: true,
        BIC: "BIC1",
        bankBranchCode: "bankBranchCode",
        reservedAmount: "1000.00",
        remainingPeriodicTransfers: "1000.00",
        nextClosingDate: "2021-01-10",
        overdueSince: "2021-01-10",
        bankBranchCode2: "bankBranchCode2",
        accountInterestRate: 800.5,
        valueDateBalance: 100.1,
        creditLimitUsage: 100.3,
        creditLimitInterestRate: 100.4,
        creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
        accruedInterest: 0.54,
        debitCardsItems: [
          {
            number: "6455",
            expiryDate: "2020-08-22",
            cardId: "id2",
            cardholderName: "John Doe",
            cardType: "Visa Electron",
            cardStatus: "Active"
          },
          {
            number: "9808",
            expiryDate: "2019-01-14",
            cardId: "id1",
            cardholderName: "John Doe",
            cardType: "Visa",
            cardStatus: "Active"
          }
        ],
        cardDetails: {
          cardProvider: "Provider 3",
          secured: true,
          availableCashCredit: 4300.3,
          cashCreditLimit: 4300.32,
          lastPaymentDate: "2021-01-11",
          lastPaymentAmount: 20.23,
          latePaymentFee: "0.3%",
          previousStatementDate: "2021-01-10",
          previousStatementBalance: -43.37,
          statementBalance: 43.37,
          additions: {
            prop0: "value03",
            prop1: "value13"
          }
        },
        interestDetails: {
          lastYearAccruedInterest: 35.3,
          dividendWithheldYTD: "0.3%",
          annualPercentageYield: 20.2,
          cashAdvanceInterestRate: 20.2,
          penaltyInterestRate: 20.2,
          additions: {
            prop0: "value04",
            prop1: "value14"
          }
        },
        accountHolderNames: "Jason Smith,Danthe Mohr",
        startDate: "2016-02-28T16:41:41.090Z",
        minimumRequiredBalance: 80.4,
        accountHolderAddressLine1: "accountHolderAddressLine11",
        accountHolderAddressLine2: "accountHolderAddressLine12",
        accountHolderStreetName: "accountHolderStreetName1",
        town: "Skopje",
        postCode: "2000",
        countrySubDivision: "countrySubDivision1",
        creditAccount: true,
        debitAccount: true,
        accountHolderCountry: "MK",
        userPreferences: {
          alias: "Our joined account",
          visible: true,
          favorite: false
        },
        parentId: "externalParentId100",
        state: {
          externalStateId: "Inactive",
          state: "Inactive"
        },
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: "7045",
                expiryDate: "2020-08-22"
              },
              {
                number: "9185",
                expiryDate: "2019-01-14"
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames: "Jason Smith",
            accountHolderCountry: "MK",
            number: "•••2466",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            state: {
              externalStateId: "Active",
              state: "Active"
            },
            unmaskableAttributes: ["number"]
          }
        ],
        financialInstitutionId: 1,
        lastSyncDate: "2020-09-28T16:41:41.090Z",
        unmaskableAttributes: ["BBAN", "IBAN"]
      },
      {
        id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4692",
        name: "Howlin Wolf",
        displayName: "Royalties account",
        externalTransferAllowed: true,
        crossCurrencyAllowed: true,
        productKindName: "Current Account",
        productTypeName: "Secondary Current Account",
        bankAlias: "Royalties account",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        bookedBalance: "15000.00",
        availableBalance: "21500.00",
        creditLimit: "3442.12",
        IBAN: "•••••••••••••••••••••••AA36",
        BBAN: "•••••••••••••••••••••••YD56",
        currency: "ZAR",
        urgentTransferAllowed: true,
        BIC: "BIC1",
        bankBranchCode: "bankBranchCode",
        bankBranchCode2: "bankBranchCode2",
        accountInterestRate: 5000,
        valueDateBalance: 100.1,
        creditLimitUsage: 15000,
        creditLimitInterestRate: 100.4,
        creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
        accruedInterest: 0.54,
        debitCardsItems: [
          {
            number: 831.0,
            expiryDate: "2020-08-22",
            cardId: "id2",
            cardholderName: "John Doe",
            cardType: "Visa Electron",
            cardStatus: "Active"
          },
          {
            number: "4859",
            expiryDate: "2019-01-14",
            cardId: "id1",
            cardholderName: "John Doe",
            cardType: "Visa",
            cardStatus: "Active"
          }
        ],
        interestDetails: {
          lastYearAccruedInterest: 35.3,
          dividendWithheldYTD: "0.3%",
          annualPercentageYield: 20.2,
          cashAdvanceInterestRate: 20.2,
          penaltyInterestRate: 20.2,
          additions: {
            prop0: "value04",
            prop1: "value14"
          }
        },
        accountHolderNames: "Toso Malerot,Jason Smith",
        startDate: "2016-02-28T16:41:41.090Z",
        minimumRequiredBalance: 80.4,
        accountHolderAddressLine1: "accountHolderAddressLine11",
        accountHolderAddressLine2: "accountHolderAddressLine12",
        accountHolderStreetName: "accountHolderStreetName1",
        town: "Skopje",
        postCode: "2000",
        countrySubDivision: "countrySubDivision1",
        creditAccount: true,
        debitAccount: true,
        accountHolderCountry: "MK",
        userPreferences: {
          alias: "Royalties account",
          visible: true,
          favorite: false
        },
        parentId: "externalParentId100",
        state: {
          externalStateId: "Active",
          state: "Active"
        },
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: "•••0798",
                expiryDate: "2020-08-22",
                unmaskableAttributes: []
              },
              {
                number: "•••1300",
                expiryDate: "2019-01-14",
                unmaskableAttributes: ["number"]
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames: "Toso Malerot,Jason Smith",
            accountHolderCountry: "MK",
            number: "•••6833",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            state: {
              externalStateId: "Active",
              state: "Active"
            },
            unmaskableAttributes: []
          }
        ],
        unmaskableAttributes: ["BBAN", "IBAN"]
      }
    ],
    aggregatedBalance: {
      value: "16000.00",
      currency: "ZAR"
    }
  },
  savingsAccounts: {
    name: "Savings Accounts",
    products: [
      {
        id: "3cdb2224-8926-4b4d-a99f-1c9dfbbb4600",
        name: "Smith Bonus Savings",
        displayName: "Langosh, Okuneva and Spencer",
        externalTransferAllowed: false,
        crossCurrencyAllowed: true,
        productKindName: "Savings Account",
        productTypeName: "Simple Saving Account",
        bankAlias: "Langosh, Okuneva and Spencer",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        bookedBalance: "5500.00",
        availableBalance: "1500.00",
        accruedInterest: 36.16,
        BBAN: "•••••••••1556",
        IBAN: "••••••••••••••1066",
        currency: "ZAR",
        urgentTransferAllowed: true,
        BIC: "AABAFI22",
        bankBranchCode: "bankBranchCode",
        reservedAmount: "1000.00",
        remainingPeriodicTransfers: "1000.00",
        nextClosingDate: "2021-01-10",
        overdueSince: "2021-01-10",
        bankBranchCode2: "bankBranchCode2",
        accountInterestRate: 100.2,
        minimumRequiredBalance: 80.4,
        startDate: "2016-02-28T16:41:41.090Z",
        termUnit: "Y",
        termNumber: 50,
        maturityDate: "2017-02-28T16:41:41.090Z",
        maturityAmount: 99.5,
        autoRenewalIndicator: true,
        interestPaymentFrequencyUnit: "M",
        interestPaymentFrequencyNumber: 15,
        principalAmount: 620.54,
        interestSettlementAccount: "interestSettlementAccount1",
        accountHolderNames: "Okuneva Spencer,Jason Smith",
        valueDateBalance: 100.1,
        accountHolderAddressLine1: "accountHolderAddressLine11",
        accountHolderAddressLine2: "accountHolderAddressLine12",
        accountHolderStreetName: "accountHolderStreetName1",
        town: "Skopje",
        postCode: "2000",
        countrySubDivision: "countrySubDivision1",
        accountHolderCountry: "MK",
        creditAccount: true,
        debitAccount: true,
        userPreferences: {
          alias: "Langosh, Okuneva and Spencer",
          visible: true,
          favorite: false
        },
        parentId: "externalParentId100",
        state: {
          externalStateId: "Closed",
          state: "Closed"
        },
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: "2954",
                expiryDate: "2020-08-22"
              },
              {
                number: "7293",
                expiryDate: "2019-01-14"
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames: "Toso Malerot,Jason Smith",
            accountHolderCountry: "MK",
            number: "•••9297",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            state: {
              externalStateId: "Active",
              state: "Active"
            },
            unmaskableAttributes: ["number"]
          }
        ],
        financialInstitutionId: 1,
        lastSyncDate: "2020-09-28T16:41:41.090Z",
        unmaskableAttributes: ["BBAN", "IBAN"]
      }
    ],
    aggregatedBalance: {
      value: "5500.00",
      currency: "ZAR"
    }
  },
  termDeposits: {
    name: "Term Deposits",
    products: [
      {
        id: "4cdb2224-8926-4b4d-a99f-1c9dfbbb4697",
        name: "3 Month Deposit",
        displayName: "My Term Deposit",
        externalTransferAllowed: false,
        crossCurrencyAllowed: false,
        productKindName: "Term Deposit",
        productTypeName: "Interest Term Deposit",
        bankAlias: "My Term Deposit",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        bookedBalance: "13210.11",
        principalAmount: 13210.11,
        accruedInterest: 12.32,
        IBAN: "••••••••••••••1066",
        BBAN: "••••••••••••••1066",
        currency: "ZAR",
        urgentTransferAllowed: true,
        productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
        accountInterestRate: 132.2,
        startDate: "2016-02-28T16:41:41.090Z",
        termUnit: "Y",
        termNumber: 50,
        maturityDate: "2017-02-28T16:41:41.090Z",
        maturityAmount: 99.5,
        autoRenewalIndicator: true,
        interestPaymentFrequencyUnit: "M",
        interestPaymentFrequencyNumber: 15,
        interestSettlementAccount: "interestSettlementAccount1",
        valueDateBalance: 100.1,
        accountHolderNames: "Toso Malerot,Okuneva Spencer",
        outstandingPrincipalAmount: 100.2,
        creditAccount: true,
        debitAccount: false,
        parentId: "externalParentId100",
        userPreferences: {
          alias: "My Term Deposit",
          visible: true,
          favorite: false
        },
        state: {
          externalStateId: "Closed",
          state: "Closed"
        },
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: 349.0,
                expiryDate: "2020-08-22"
              },
              {
                number: "3961",
                expiryDate: "2019-01-14"
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames: "Toso Malerot,Okuneva Spencer",
            accountHolderCountry: "MK",
            number: "•••4974",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            state: {
              externalStateId: "Active",
              state: "Active"
            },
            unmaskableAttributes: []
          }
        ],
        financialInstitutionId: 1,
        lastSyncDate: "2020-09-28T16:41:41.090Z",
        unmaskableAttributes: ["BBAN", "IBAN"]
      }
    ],
    aggregatedBalance: {
      value: "10000.00",
      currency: "ZAR"
    }
  },
  loans: {
    name: "Loans",
    products: [
      {
        id: "5cdb2224-8926-4b4d-a99f-1c9dfbbb4696",
        name: "House Loan",
        displayName: "Our home loan",
        externalTransferAllowed: false,
        crossCurrencyAllowed: false,
        productKindName: "Loan",
        productTypeName: "Real Estate Loan",
        bankAlias: "Our home loan",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        bookedBalance: "150000.00",
        principalAmount: 200000,
        currency: "ZAR",
        urgentTransferAllowed: true,
        productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
        accountInterestRate: 100.2,
        termUnit: "Y",
        termNumber: 50,
        outstandingPrincipalAmount: 100.2,
        monthlyInstalmentAmount: 100.1,
        amountInArrear: 100.3,
        interestSettlementAccount: "interestSettlementAccount1",
        accruedInterest: 0.54,
        accountHolderNames: "Jason Smith,Okuneva Spencer",
        maturityDate: "2017-02-28T16:41:41.090Z",
        valueDateBalance: 100.1,
        creditAccount: true,
        debitAccount: true,
        parentId: "externalParentId100",
        userPreferences: {
          alias: "Our home loan",
          visible: true,
          favorite: false
        },
        state: {
          externalStateId: "Active",
          state: "Active"
        },
        financialInstitutionId: 1,
        lastSyncDate: "2020-09-28T16:41:41.090Z"
      }
    ],
    aggregatedBalance: {
      value: "150000.00",
      currency: "ZAR"
    }
  },
  creditCards: {
    name: "Credit Cards",
    products: [
      {
        id: "2d94d333-471d-4cd7-84d2-24e822d5ca68",
        name: "Jason Smith Credit Card",
        displayName: "JS Credit Card",
        externalTransferAllowed: true,
        crossCurrencyAllowed: true,
        productKindName: "Credit Card",
        productTypeName: "Student Credit Card",
        bankAlias: "JS Credit Card",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        bookedBalance: "1250.00",
        availableBalance: "750.00",
        creditLimit: "5000.00",
        number: "•••7331",
        currency: "ZAR",
        urgentTransferAllowed: true,
        cardNumber: 1234,
        creditCardAccountNumber: "••3456",
        validThru: "2019-02-28T16:41:41.090Z",
        applicableInterestRate: 101.2,
        remainingCredit: 50,
        outstandingPayment: 105.5,
        minimumPayment: 51.1,
        minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
        accountInterestRate: 100.2,
        accountHolderNames: "Toso Malerot,Okuneva Spencer",
        creditLimitUsage: 100.3,
        creditLimitInterestRate: 100.4,
        accruedInterest: 0.54,
        parentId: "externalParentId100",
        userPreferences: {
          alias: "JS Credit Card",
          visible: true,
          favorite: false
        },
        state: {
          externalStateId: "Inactive",
          state: "Inactive"
        },
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: "7816",
                expiryDate: "2020-08-22"
              },
              {
                number: "2712",
                expiryDate: "2019-01-14"
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames:
              "Terence McCullough,Toso Malerot,Okuneva Spencer",
            accountHolderCountry: "MK",
            number: "•••0842",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            state: {
              externalStateId: "Active",
              state: "Active"
            },
            unmaskableAttributes: ["BBAN", "IBAN"]
          }
        ],
        financialInstitutionId: 1,
        lastSyncDate: "2020-09-28T16:41:41.090Z",
        unmaskableAttributes: ["number"]
      }
    ],
    aggregatedBalance: {
      value: "1250.00",
      currency: "ZAR"
    }
  },
  debitCards: {
    name: "Debit Cards",
    products: [
      {
        id: "7cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
        name: "Mr J. Smith",
        displayName: "My debit card",
        externalTransferAllowed: false,
        crossCurrencyAllowed: false,
        productKindName: "Debit Card",
        productTypeName: "Golden Debit Card",
        bankAlias: "My debit card",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        number: "•••8488",
        urgentTransferAllowed: true,
        cardNumber: 1234,
        accountInterestRate: 100.2,
        accountHolderNames: "Mr J. Smith,Okuneva Spencer",
        debitCardsItems: [
          {
            number: "2132",
            expiryDate: "2020-08-22",
            cardId: "id2",
            cardholderName: "John Doe",
            cardType: "Visa Electron",
            cardStatus: "Active"
          },
          {
            number: "3741",
            expiryDate: "2019-01-14",
            cardId: "id1",
            cardholderName: "John Doe",
            cardType: "Visa",
            cardStatus: "Active"
          }
        ],
        startDate: "2016-02-28T16:41:41.090Z",
        validThru: "2019-02-28T16:41:41.090Z",
        userPreferences: {
          alias: "My debit card",
          visible: true,
          favorite: false
        },
        state: {
          externalStateId: "externalStateId4",
          state: "Open"
        },
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: "5796",
                expiryDate: "2020-08-22"
              },
              {
                number: "4441",
                expiryDate: "2019-01-14"
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames: "Terence McCullough,Toso Malerot",
            accountHolderCountry: "MK",
            number: "•••5219",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            parentId: "externalParentId100",
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            state: {
              externalStateId: "Active",
              state: "Active"
            },
            unmaskableAttributes: []
          }
        ],
        unmaskableAttributes: ["number"]
      }
    ],
    aggregatedBalance: {
      value: "1250.00",
      currency: "ZAR"
    }
  },
  investmentAccounts: {
    name: "Investment Accounts",
    products: [
      {
        id: "8cdb2224-8926-4b4d-a99f-1c9dfbbb4695",
        name: "Mr J. Smith Execution only portfolio",
        displayName: "Mr J. Investment Account",
        externalTransferAllowed: false,
        crossCurrencyAllowed: false,
        productKindName: "Investment Account",
        productTypeName: "Stock Investment Account",
        bankAlias: "Mr J. Investment Account",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        currentInvestmentValue: "75789.00",
        currency: "ZAR",
        urgentTransferAllowed: true,
        productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
        userPreferences: {
          alias: "Mr J. Investment Account",
          visible: true,
          favorite: false
        },
        state: {
          externalStateId: "Active",
          state: "Active"
        },
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: "3113",
                expiryDate: "2020-08-22"
              },
              {
                number: "9981",
                expiryDate: "2019-01-14"
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames: "Mile Panika,Toso Malerot",
            accountHolderCountry: "MK",
            number: "•••1271",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            parentId: "externalParentId300",
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            unmaskableAttributes: ["number", "BBAN", "IBAN"]
          }
        ],
        financialInstitutionId: 1,
        lastSyncDate: "2020-09-28T16:41:41.090Z"
      },
      {
        id: "6c1261e8-7b6b-4c14-9bb4-e976d834c730",
        name: "3 Month Investment",
        displayName: "3 Month Investment",
        externalTransferAllowed: false,
        crossCurrencyAllowed: false,
        productKindName: "Investment Account",
        productTypeName: "Investment Account",
        bankAlias: "3 Month Investment",
        sourceId: "LJBASI2XXXX",
        visible: true,
        accountOpeningDate: "2016-01-28T16:41:41.090Z",
        lastUpdateDate: "2016-01-28T16:41:41.090Z",
        currentInvestmentValue: "88500.00",
        currency: "ZAR",
        urgentTransferAllowed: true,
        productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
        userPreferences: {
          alias: "3 Month Investment",
          visible: true,
          favorite: false
        },
        state: {
          externalStateId: "Inactive",
          state: "Inactive"
        },
        parentId: "externalParentId100",
        subArrangements: [
          {
            id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
            name: "Mr and Mrs J. Smith",
            externalTransferAllowed: true,
            crossCurrencyAllowed: true,
            productKindName: "My Custom Product Kind",
            productTypeName: "My Custom Product Kind Type1",
            bankAlias: "firstAccountAlias",
            sourceId: "LJBASI2XXXX",
            visible: true,
            accountOpeningDate: "2016-01-28T16:41:41.090Z",
            lastUpdateDate: "2016-01-28T16:41:41.090Z",
            bookedBalance: "1000.00",
            availableBalance: "1500.00",
            creditLimit: "442.12",
            IBAN: "•••••••••••••••••••••••AA36",
            BBAN: "•••••••••••••••••••••••YD56",
            currency: "ZAR",
            urgentTransferAllowed: true,
            BIC: "BIC1",
            bankBranchCode: "bankBranchCode",
            accountInterestRate: 100.2,
            valueDateBalance: 100.1,
            creditLimitUsage: 100.3,
            creditLimitInterestRate: 100.4,
            creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
            accruedInterest: 0.54,
            debitCardsItems: [
              {
                number: "0553",
                expiryDate: "2020-08-22"
              },
              {
                number: "6245",
                expiryDate: "2019-01-14"
              }
            ],
            startDate: "2016-02-28T16:41:41.090Z",
            minimumRequiredBalance: 80.4,
            accountHolderAddressLine1: "accountHolderAddressLine11",
            accountHolderAddressLine2: "accountHolderAddressLine12",
            accountHolderStreetName: "accountHolderStreetName1",
            town: "Skopje",
            postCode: "2000",
            countrySubDivision: "countrySubDivision1",
            accountHolderNames: "Mile Panika,Okuneva Spencer",
            accountHolderCountry: "MK",
            number: "•••6743",
            cardNumber: 1234,
            creditCardAccountNumber: "••3456",
            validThru: "2019-02-28T16:41:41.090Z",
            applicableInterestRate: 101.2,
            remainingCredit: 50,
            outstandingPayment: 100.6,
            minimumPayment: 55.2,
            minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
            currentInvestmentValue: "75789.00",
            productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
            principalAmount: 200000,
            termUnit: "Y",
            termNumber: 50,
            outstandingPrincipalAmount: 100.2,
            monthlyInstalmentAmount: 100.1,
            amountInArrear: 100.3,
            interestSettlementAccount: "interestSettlementAccount1",
            maturityDate: "2017-02-28T16:41:41.090Z",
            maturityAmount: 99.5,
            autoRenewalIndicator: true,
            interestPaymentFrequencyUnit: "M",
            interestPaymentFrequencyNumber: 15,
            creditAccount: true,
            debitAccount: true,
            parentId: "externalParentId400",
            userPreferences: {
              alias: "My Fancy Account",
              visible: true,
              favorite: false
            },
            state: {
              externalStateId: "Active",
              state: "Active"
            },
            unmaskableAttributes: []
          }
        ],
        financialInstitutionId: 1,
        lastSyncDate: "2020-09-28T16:41:41.090Z"
      }
    ],
    aggregatedBalance: {
      value: "164289",
      currency: "ZAR"
    }
  },
  customProductKinds: [
    {
      name: "Life Insurance",
      id: 8,
      products: [
        {
          id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
          name: "Mr and Mrs J. Smith",
          displayName: "Custom Product Kind Type 1",
          externalTransferAllowed: true,
          crossCurrencyAllowed: true,
          productKindName: "Life Insurance",
          productTypeName: "Annual Life insurance",
          bankAlias: "Custom Product Kind Type 1",
          sourceId: "LJBASI2XXXX",
          visible: true,
          accountOpeningDate: "2016-01-28T16:41:41.090Z",
          lastUpdateDate: "2016-01-28T16:41:41.090Z",
          bookedBalance: "1000.00",
          availableBalance: "1500.00",
          creditLimit: "442.12",
          IBAN: "•••••••••••••••••••••••AA36",
          BBAN: "•••••••••••••••••••••••YD56",
          currency: "ZAR",
          urgentTransferAllowed: true,
          BIC: "BIC1",
          bankBranchCode: "bankBranchCode",
          accountInterestRate: 100.2,
          valueDateBalance: 100.1,
          creditLimitUsage: 100.3,
          creditLimitInterestRate: 100.4,
          creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
          accruedInterest: 0.54,
          debitCardsItems: [
            {
              number: "5732",
              expiryDate: "2020-08-22"
            },
            {
              number: 191.0,
              expiryDate: "2019-01-14"
            }
          ],
          startDate: "2016-02-28T16:41:41.090Z",
          minimumRequiredBalance: 80.4,
          accountHolderAddressLine1: "accountHolderAddressLine11",
          accountHolderAddressLine2: "accountHolderAddressLine12",
          accountHolderStreetName: "accountHolderStreetName1",
          town: "Skopje",
          postCode: "2000",
          countrySubDivision: "countrySubDivision1",
          accountHolderNames: "Mile Panika,Jason Smith",
          accountHolderCountry: "MK",
          number: "•••4974",
          cardNumber: 1234,
          creditCardAccountNumber: "••3456",
          validThru: "2019-02-28T16:41:41.090Z",
          applicableInterestRate: 101.2,
          remainingCredit: 50,
          outstandingPayment: 100.6,
          minimumPayment: 55.2,
          minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
          currentInvestmentValue: "75789.00",
          productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
          principalAmount: 200000,
          termUnit: "Y",
          termNumber: 50,
          outstandingPrincipalAmount: 100.2,
          monthlyInstalmentAmount: 100.1,
          amountInArrear: 100.3,
          interestSettlementAccount: "interestSettlementAccount1",
          maturityDate: "2017-02-28T16:41:41.090Z",
          maturityAmount: 99.5,
          autoRenewalIndicator: true,
          interestPaymentFrequencyUnit: "M",
          interestPaymentFrequencyNumber: 15,
          creditAccount: true,
          debitAccount: true,
          userPreferences: {
            alias: "Custom Product Kind Type 1",
            visible: true,
            favorite: false
          },
          parentId: "externalParentId100",
          state: {
            externalStateId: "externalStateId5",
            state: "Not Active"
          },
          subArrangements: [
            {
              id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
              name: "Mr and Mrs J. Smith",
              externalTransferAllowed: true,
              crossCurrencyAllowed: true,
              productKindName: "My Custom Product Kind",
              productTypeName: "My Custom Product Kind Type2",
              bankAlias: "Custom Product Kind Type 2",
              sourceId: "LJBASI2XXXX",
              visible: true,
              accountOpeningDate: "2016-01-28T16:41:41.090Z",
              lastUpdateDate: "2016-01-28T16:41:41.090Z",
              bookedBalance: "1000.00",
              availableBalance: "1500.00",
              creditLimit: "442.12",
              IBAN: "•••••••••••••••••••••••AA36",
              BBAN: "•••••••••••••••••••••••YD56",
              currency: "ZAR",
              urgentTransferAllowed: true,
              BIC: "BIC1",
              bankBranchCode: "bankBranchCode",
              accountInterestRate: 100.2,
              valueDateBalance: 100.1,
              creditLimitUsage: 100.3,
              creditLimitInterestRate: 100.4,
              creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
              accruedInterest: 0.54,
              debitCardsItems: [
                {
                  number: "3169",
                  expiryDate: "2020-08-22"
                },
                {
                  number: "1100",
                  expiryDate: "2019-01-14"
                }
              ],
              startDate: "2016-02-28T16:41:41.090Z",
              minimumRequiredBalance: 80.4,
              accountHolderAddressLine1: "accountHolderAddressLine11",
              accountHolderAddressLine2: "accountHolderAddressLine12",
              accountHolderStreetName: "accountHolderStreetName1",
              town: "Skopje",
              postCode: "2000",
              countrySubDivision: "countrySubDivision1",
              accountHolderNames: "Okuneva Spencer,Jason Smith",
              accountHolderCountry: "MK",
              number: "•••8884",
              cardNumber: 1234,
              creditCardAccountNumber: "••3456",
              validThru: "2019-02-28T16:41:41.090Z",
              applicableInterestRate: 101.2,
              remainingCredit: 50,
              outstandingPayment: 100.6,
              minimumPayment: 55.2,
              minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
              currentInvestmentValue: "75789.00",
              productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
              principalAmount: 200000,
              termUnit: "Y",
              termNumber: 50,
              outstandingPrincipalAmount: 100.2,
              monthlyInstalmentAmount: 100.1,
              amountInArrear: 100.3,
              interestSettlementAccount: "interestSettlementAccount1",
              maturityDate: "2017-02-28T16:41:41.090Z",
              maturityAmount: 99.5,
              autoRenewalIndicator: true,
              interestPaymentFrequencyUnit: "M",
              interestPaymentFrequencyNumber: 15,
              creditAccount: true,
              debitAccount: true,
              userPreferences: {
                alias: "Custom Product Kind Type 2",
                visible: true,
                favorite: false
              },
              parentId: "externalParentId500",
              unmaskableAttributes: []
            }
          ],
          financialInstitutionId: 1,
          lastSyncDate: "2020-09-28T16:41:41.090Z",
          unmaskableAttributes: ["number", "BBAN", "IBAN"]
        },
        {
          id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4611",
          name: "Mr and Mrs J. Smith",
          displayName: "My Super Fancy Account",
          externalTransferAllowed: true,
          crossCurrencyAllowed: true,
          productKindName: "Life Insurance",
          productTypeName: "Annual Life insurance",
          bankAlias: "secondAccountAlias",
          visible: true,
          accountOpeningDate: "2016-01-28T16:41:41.090Z",
          lastUpdateDate: "2016-01-28T16:41:41.090Z",
          bookedBalance: "1000.00",
          availableBalance: "1500.00",
          creditLimit: "442.12",
          IBAN: "•••••••••••••••••••••••AA36",
          BBAN: "•••••••••••••••••••••••YD56",
          currency: "ZAR",
          urgentTransferAllowed: true,
          BIC: "BIC1",
          bankBranchCode: "bankBranchCode",
          accountInterestRate: 100.2,
          valueDateBalance: 100.1,
          creditLimitUsage: 100.3,
          creditLimitInterestRate: 100.4,
          creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
          accruedInterest: 0.54,
          debitCardsItems: [
            {
              number: "4042",
              expiryDate: "2020-08-22"
            },
            {
              number: "2482",
              expiryDate: "2019-01-14"
            }
          ],
          startDate: "2016-02-28T16:41:41.090Z",
          minimumRequiredBalance: 80.4,
          accountHolderAddressLine1: "accountHolderAddressLine11",
          accountHolderAddressLine2: "accountHolderAddressLine12",
          accountHolderStreetName: "accountHolderStreetName1",
          town: "Skopje",
          postCode: "2000",
          countrySubDivision: "countrySubDivision1",
          accountHolderNames: "Okuneva Spencer,Mile Panika",
          accountHolderCountry: "MK",
          number: "•••1262",
          cardNumber: 1234,
          creditCardAccountNumber: "••3456",
          validThru: "2019-02-28T16:41:41.090Z",
          applicableInterestRate: 101.2,
          remainingCredit: 50,
          outstandingPayment: 100.6,
          minimumPayment: 55.2,
          minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
          currentInvestmentValue: "75789.00",
          productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
          principalAmount: 200000,
          termUnit: "Y",
          termNumber: 50,
          outstandingPrincipalAmount: 100.2,
          monthlyInstalmentAmount: 100.1,
          amountInArrear: 100.3,
          interestSettlementAccount: "interestSettlementAccount1",
          maturityDate: "2017-02-28T16:41:41.090Z",
          maturityAmount: 99.5,
          autoRenewalIndicator: true,
          interestPaymentFrequencyUnit: "M",
          interestPaymentFrequencyNumber: 15,
          creditAccount: true,
          debitAccount: true,
          userPreferences: {
            alias: "My Super Fancy Account",
            visible: true,
            favorite: true
          },
          parentId: "externalParentId100",
          state: {
            externalStateId: "Active",
            state: "Active"
          },
          subArrangements: [
            {
              id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4622",
              name: "Mr and Mrs J. Smith",
              externalTransferAllowed: true,
              crossCurrencyAllowed: true,
              productKindName: "My Custom Product Kind",
              productTypeName: "My Custom Product Kind Type1",
              bankAlias: "firstAccountAlias",
              visible: true,
              accountOpeningDate: "2016-01-28T16:41:41.090Z",
              lastUpdateDate: "2016-01-28T16:41:41.090Z",
              bookedBalance: "1000.00",
              availableBalance: "1500.00",
              creditLimit: "442.12",
              IBAN: "•••••••••••••••••••••••AA36",
              BBAN: "•••••••••••••••••••••••YD56",
              currency: "ZAR",
              urgentTransferAllowed: true,
              BIC: "BIC1",
              bankBranchCode: "bankBranchCode",
              accountInterestRate: 100.2,
              valueDateBalance: 100.1,
              creditLimitUsage: 100.3,
              creditLimitInterestRate: 100.4,
              creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
              accruedInterest: 0.54,
              debitCardsItems: [
                {
                  number: "2414",
                  expiryDate: "2020-08-22"
                },
                {
                  number: "8295",
                  expiryDate: "2019-01-14"
                }
              ],
              startDate: "2016-02-28T16:41:41.090Z",
              minimumRequiredBalance: 80.4,
              accountHolderAddressLine1: "accountHolderAddressLine11",
              accountHolderAddressLine2: "accountHolderAddressLine12",
              accountHolderStreetName: "accountHolderStreetName1",
              town: "Skopje",
              postCode: "2000",
              countrySubDivision: "countrySubDivision1",
              accountHolderNames: "Mile Panika,Jason Smith",
              accountHolderCountry: "MK",
              number: "•••6513",
              cardNumber: 1234,
              creditCardAccountNumber: "••3456",
              validThru: "2019-02-28T16:41:41.090Z",
              applicableInterestRate: 101.2,
              remainingCredit: 50,
              outstandingPayment: 100.6,
              minimumPayment: 55.2,
              minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
              currentInvestmentValue: "75789.00",
              productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
              principalAmount: 200000,
              termUnit: "Y",
              termNumber: 50,
              outstandingPrincipalAmount: 100.2,
              monthlyInstalmentAmount: 100.1,
              amountInArrear: 100.3,
              interestSettlementAccount: "interestSettlementAccount1",
              maturityDate: "2017-02-28T16:41:41.090Z",
              maturityAmount: 99.5,
              autoRenewalIndicator: true,
              interestPaymentFrequencyUnit: "M",
              interestPaymentFrequencyNumber: 15,
              creditAccount: true,
              debitAccount: true,
              userPreferences: {
                alias: "My Fancy Account",
                visible: true,
                favorite: false
              },
              unmaskableAttributes: []
            }
          ],
          unmaskableAttributes: ["number", "BBAN", "IBAN"]
        }
      ],
      aggregatedBalance: {
        value: "2000.00",
        currency: "ZAR"
      }
    }
  ]
};
const productSummaryContextArrangementsMocks = [
  {
    id: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
    externalArrangementId: "bcf10f4d-4b2f-4413-9bab-31ff693608b5",
    externalLegalEntityId: "c7a382786d514262b75ab9531b749a2b",
    externalProductId: "fade7867-533e-465e-90cb-e41675c54400",
    name: "Mr and Mrs J. Smith",
    productKindName: "Current Account",
    alias: "Our joined account",
    bookedBalance: 1000.0,
    availableBalance: 1500.0,
    creditLimit: 442.12,
    currency: "ZAR",
    externalTransferAllowed: true,
    accruedInterest: 0.54,
    number: "PANS",
    principalAmount: 620.54,
    currentInvestmentValue: 0.16,
    legalEntityId: "257da57a-11e4-4553-9175-54baf755069b",
    legalEntitiesIds: [
      "257da57a-11e4-4553-9175-54baf755069b",
      "cd83683b-13f2-43d8-882b-39c9ab27d499"
    ],
    productId: "36c8fc42-ec97-4f83-8a7c-d622625007f3",
    productTypeName: "Current Account",
    BIC: "AABAFI22",
    bankBranchCode: "bankBranchCode",
    visible: false,
    accountOpeningDate: "2016-01-28T16:41:41.090Z",
    accountInterestRate: 100.2,
    valueDateBalance: 100.1,
    creditLimitUsage: 100.3,
    creditLimitInterestRate: 100.4,
    creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
    debitCards: [
      {
        number: "2935",
        expiryDate: "10-2019"
      },
      {
        number: "1714",
        expiryDate: "02-2019"
      }
    ],
    startDate: "2016-02-28T16:41:41.090Z",
    termUnit: "Y",
    termNumber: 50,
    maturityDate: "2017-02-28T16:41:41.090Z",
    maturityAmount: 99.5,
    autoRenewalIndicator: true,
    interestPaymentFrequencyUnit: "M",
    interestPaymentFrequencyNumber: 15,
    interestSettlementAccount: "interestSettlementAccount1",
    outstandingPrincipalAmount: 100.2,
    monthlyInstalmentAmount: 100.1,
    amountInArrear: 100.3,
    minimumRequiredBalance: 80.4,
    creditCardAccountNumber: "123456",
    validThru: "2019-02-28T16:41:41.090Z",
    applicableInterestRate: 101.2,
    remainingCredit: 50,
    outstandingPayment: 105.5,
    minimumPayment: 51.1,
    minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
    totalInvestmentValue: 110.2,
    accountHolderAddressLine1: "accountHolderAddressLine11",
    accountHolderAddressLine2: "accountHolderAddressLine12",
    accountHolderAddressLine3: "accountHolderAddressLine13",
    accountHolderAddressLine4: "accountHolderAddressLine14",
    accountHolderStreetName: "accountHolderStreetName1",
    town: "Skopje",
    postCode: "2000",
    countrySubDivision: "countrySubDivision1",
    accountHolderName: "accountHolderName_1",
    creditAccount: true,
    debitAccount: true,
    IBAN: "FR188388353832IH3CAWFYXAA36",
    BBAN: "FR596129172765GE6UQ2U8TYD56",
    lastUpdateDate: "2016-01-28T16:41:41.090Z",
    favorite: true
  },
  {
    id: "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
    externalArrangementId: "a3f8defe-f447-4475-b5c1-d3971ec7a273",
    externalLegalEntityId: "c7a382786d514262b75ab9531b749a2b",
    externalProductId: "df40193b-22a9-4dd6-ae25-db68cd5bbd47",
    name: "Smith Bonus Savings",
    productKindName: "Savings Account",
    alias: "Langosh, Okuneva and Spencer",
    bookedBalance: 5500.0,
    creditLimit: 267.41,
    currency: "ZAR",
    externalTransferAllowed: false,
    accruedInterest: 36.16,
    principalAmount: 375.73,
    currentInvestmentValue: 0.06,
    legalEntityId: "257da57a-11e4-4553-9175-54baf755069b",
    legalEntitiesIds: [
      "257da57a-11e4-4553-9175-54baf755069b",
      "cd83683b-13f2-43d8-882b-39c9ab27d499"
    ],
    productId: "ffb7b827-33b2-4c93-83ad-41511f788a56",
    productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e7",
    productTypeName: "productTypeName",
    BIC: "OKOYFIHH",
    bankBranchCode: "bankBranchCode",
    visible: true,
    accountOpeningDate: "2016-01-28T16:41:41.090Z",
    accountInterestRate: 100.2,
    valueDateBalance: 100.1,
    creditLimitUsage: 100.3,
    creditLimitInterestRate: 100.4,
    creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
    debitCards: [
      {
        number: "2455",
        expiryDate: "10-2020"
      },
      {
        number: "9990",
        expiryDate: "12-2017"
      }
    ],
    startDate: "2016-02-28T16:41:41.090Z",
    termUnit: "Y",
    termNumber: 50,
    maturityDate: "2017-02-28T16:41:41.090Z",
    maturityAmount: 99.5,
    autoRenewalIndicator: true,
    interestPaymentFrequencyUnit: "M",
    interestPaymentFrequencyNumber: 15,
    interestSettlementAccount: "interestSettlementAccount1",
    outstandingPrincipalAmount: 100.2,
    monthlyInstalmentAmount: 100.1,
    amountInArrear: 100.3,
    minimumRequiredBalance: 80.4,
    creditCardAccountNumber: "123456",
    validThru: "2019-02-28T16:41:41.090Z",
    applicableInterestRate: 101.2,
    remainingCredit: 50,
    outstandingPayment: 105.5,
    minimumPayment: 51.1,
    minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
    totalInvestmentValue: 110.2,
    accountHolderAddressLine1: "accountHolderAddressLine11",
    accountHolderAddressLine2: "accountHolderAddressLine12",
    accountHolderAddressLine3: "accountHolderAddressLine13",
    accountHolderAddressLine4: "accountHolderAddressLine14",
    accountHolderName: "accountHolderName_2",
    creditAccount: true,
    debitAccount: true,
    BBAN: "22-44-33-1556",
    IBAN: "NL81TRIO0212471066",
    crossCurrencyAllowed: true,
    lastUpdateDate: "2016-01-28T16:41:41.090Z",
    favorite: false
  },
  {
    id: "6c1261e8-7b6b-4c14-9bb4-e976d834c730",
    externalArrangementId: "bf0ad157-96e6-4d92-8cdb-a642d74f5ea5",
    externalLegalEntityId: "c7a382786d514262b75ab9531b749a2b",
    externalProductId: "19d57714-52c5-4c3c-8172-a70a2f13779d",
    name: "3 Month Deposit Investment",
    productKindName: "Investment Account",
    alias: "Schaefer, Reichert and Pollich",
    bookedBalance: 631.37,
    creditLimit: 177.37,
    currency: "ZAR",
    externalTransferAllowed: false,
    accruedInterest: 12.32,
    principalAmount: 10000.0,
    currentInvestmentValue: 0.88,
    legalEntityId: "257da57a-11e4-4553-9175-54baf755069b",
    legalEntitiesIds: [
      "257da57a-11e4-4553-9175-54baf755069b",
      "cd83683b-13f2-43d8-882b-39c9ab27d499"
    ],
    productId: "89d58325-9cc4-4012-bf5e-7cb1110eb746",
    productNumber: "5fbd5aec-5e37-4ceb-95e0-7787ca42886f",
    productTypeName: "Investment Account",
    BIC: "HANDFIHH",
    bankBranchCode: "bankBranchCode",
    visible: true,
    accountOpeningDate: "2016-01-28T16:41:41.090Z",
    accountInterestRate: 100.2,
    valueDateBalance: 100.1,
    creditLimitUsage: 100.3,
    creditLimitInterestRate: 100.4,
    creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
    debitCards: [
      {
        number: "8182",
        expiryDate: "05-2022"
      },
      {
        number: "4996",
        expiryDate: "11-2018"
      }
    ],
    startDate: "2016-02-28T16:41:41.090Z",
    termUnit: "Y",
    termNumber: 50,
    maturityDate: "2017-02-28T16:41:41.090Z",
    maturityAmount: 99.5,
    autoRenewalIndicator: true,
    interestPaymentFrequencyUnit: "M",
    interestPaymentFrequencyNumber: 15,
    interestSettlementAccount: "interestSettlementAccount1",
    outstandingPrincipalAmount: 100.2,
    monthlyInstalmentAmount: 100.1,
    amountInArrear: 100.3,
    minimumRequiredBalance: 80.4,
    creditCardAccountNumber: "123456",
    validThru: "2019-02-28T16:41:41.090Z",
    applicableInterestRate: 101.2,
    remainingCredit: 50,
    outstandingPayment: 105.5,
    minimumPayment: 51.1,
    minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
    totalInvestmentValue: 110.2,
    accountHolderAddressLine1: "accountHolderAddressLine11",
    accountHolderAddressLine2: "accountHolderAddressLine12",
    accountHolderAddressLine3: "accountHolderAddressLine13",
    accountHolderAddressLine4: "accountHolderAddressLine14",
    accountHolderName: "accountHolderName_3",
    creditAccount: true,
    debitAccount: true,
    crossCurrencyAllowed: false,
    lastUpdateDate: "2016-01-28T16:41:41.090Z",
    favorite: true
  },
  {
    id: "5cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
    externalArrangementId: "828ea599-d4e1-42c1-a64b-e91d58291017",
    externalLegalEntityId: "89a382786d514262b75ab9531b749a2b",
    externalProductId: "e526eabc-a616-4842-af79-7d93570a5815",
    name: "Short term variable interest",
    productKindName: "Loan",
    alias: "BoehmCronin",
    bookedBalance: 150000.0,
    creditLimit: 414.66,
    IBAN: "MK12 680B CNMX VMFA Y60",
    currency: "ZAR",
    externalTransferAllowed: false,
    accruedInterest: 0.61,
    principalAmount: 200000.0,
    currentInvestmentValue: 0.79,
    legalEntityId: "257da57a-11e4-4553-9175-54baf755069b",
    legalEntitiesIds: [
      "257da57a-11e4-4553-9175-54baf755069b",
      "cd83683b-13f2-43d8-882b-39c9ab27d499"
    ],
    productId: "717d27e1-2002-4ac3-aa74-1e2df4038c2d",
    productTypeName: "Loan",
    BIC: "OKOYFIHH",
    bankBranchCode: "bankBranchCode",
    visible: true,
    accountOpeningDate: "2016-01-28T16:41:41.090Z",
    accountInterestRate: 100.2,
    valueDateBalance: 100.1,
    creditLimitUsage: 100.3,
    creditLimitInterestRate: 100.4,
    creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
    debitCards: [
      {
        number: "1890",
        expiryDate: "05-2020"
      },
      {
        number: "2113",
        expiryDate: "11-2018"
      }
    ],
    startDate: "2016-02-28T16:41:41.090Z",
    termUnit: "Y",
    termNumber: 50,
    maturityDate: "2017-02-28T16:41:41.090Z",
    maturityAmount: 99.5,
    autoRenewalIndicator: true,
    interestPaymentFrequencyUnit: "M",
    interestPaymentFrequencyNumber: 15,
    interestSettlementAccount: "interestSettlementAccount1",
    outstandingPrincipalAmount: 100.2,
    monthlyInstalmentAmount: 100.1,
    amountInArrear: 100.3,
    minimumRequiredBalance: 80.4,
    creditCardAccountNumber: "123456",
    validThru: "2019-02-28T16:41:41.090Z",
    applicableInterestRate: 101.2,
    remainingCredit: 50,
    outstandingPayment: 105.5,
    minimumPayment: 51.1,
    minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
    totalInvestmentValue: 110.2,
    accountHolderAddressLine1: "accountHolderAddressLine11",
    accountHolderAddressLine2: "accountHolderAddressLine12",
    accountHolderAddressLine3: "accountHolderAddressLine13",
    accountHolderAddressLine4: "accountHolderAddressLine14",
    accountHolderName: "accountHolderName_4",
    creditAccount: true,
    debitAccount: true,
    productNumber: "79f5a3ac-e505-41d7-88e9-7568fe4c13c3",
    lastUpdateDate: "2016-01-28T16:41:41.090Z",
    favorite: true
  },
  {
    id: "6cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
    externalArrangementId: "72ab334c-9a5f-4864-a476-f3250d606e5e",
    externalLegalEntityId: "89a382786d514262b75ab9531b749a2b",
    externalProductId: "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
    name: "Jason Smith",
    productKindName: "Current Account",
    alias: "Morissette Inc",
    bookedBalance: 1250.0,
    availableBalance: 0.0,
    creditLimit: 5000.0,
    IBAN: "PK76FBGRHWSUBJF4QBMQ9FV0",
    BBAN: "ME62 7594 8447 2463 0782 04",
    currency: "ZAR",
    externalTransferAllowed: false,
    accruedInterest: 0.69,
    principalAmount: 466.83,
    currentInvestmentValue: 0.33,
    legalEntityId: "257da57a-11e4-4553-9175-54baf755069b",
    legalEntitiesIds: [
      "257da57a-11e4-4553-9175-54baf755069b",
      "cd83683b-13f2-43d8-882b-39c9ab27d499"
    ],
    productId: "2cf3c2c0-8ad7-482b-9cb1-a0cf9224a5dd",
    productTypeName: "Current Account",
    BIC: "AABAFI22",
    bankBranchCode: "bankBranchCode",
    visible: true,
    accountOpeningDate: "2016-01-28T16:41:41.090Z",
    accountInterestRate: 100.2,
    valueDateBalance: 100.1,
    creditLimitUsage: 100.3,
    creditLimitInterestRate: 100.4,
    creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
    debitCards: [
      {
        number: "8517",
        expiryDate: "03-2019"
      },
      {
        number: "7376",
        expiryDate: "07-2018"
      }
    ],
    startDate: "2016-02-28T16:41:41.090Z",
    termUnit: "Y",
    termNumber: 50,
    maturityDate: "2017-02-28T16:41:41.090Z",
    maturityAmount: 99.5,
    autoRenewalIndicator: true,
    interestPaymentFrequencyUnit: "M",
    interestPaymentFrequencyNumber: 15,
    interestSettlementAccount: "interestSettlementAccount1",
    outstandingPrincipalAmount: 100.2,
    monthlyInstalmentAmount: 100.1,
    amountInArrear: 100.3,
    minimumRequiredBalance: 80.4,
    creditCardAccountNumber: "123456",
    validThru: "2019-02-28T16:41:41.090Z",
    applicableInterestRate: 101.2,
    remainingCredit: 50,
    outstandingPayment: 105.5,
    minimumPayment: 51.1,
    minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
    totalInvestmentValue: 110.2,
    accountHolderAddressLine1: "accountHolderAddressLine11",
    accountHolderAddressLine2: "accountHolderAddressLine12",
    accountHolderAddressLine3: "accountHolderAddressLine13",
    accountHolderAddressLine4: "accountHolderAddressLine14",
    accountHolderName: "accountHolderName_5",
    creditAccount: true,
    debitAccount: true,
    lastUpdateDate: "2016-01-28T16:41:41.090Z",
    favorite: true
  },
  {
    id: "7cdb2224-8926-4b4d-a99f-1c9dfbbb4611",
    externalArrangementId: "72ab334c-9a5f-4864-a476-f3250d606e5e",
    externalLegalEntityId: "89a382786d514262b75ab9531b749a2b",
    externalProductId: "a5bf8a16-118e-4bd3-9d57-f20e23677d00",
    name: "Mr J. Smith",
    productKindName: "Debit Card",
    bookedBalance: 1350.0,
    availableBalance: 1350.0,
    productNumber: "ffdd939c-ac4a-4441-ae47-70a7259899e8",
    number: "1234",
    BIC: "AABAFI23",
    currency: "ZAR",
    validThru: "2021-02-28T16:41:41.090Z",
    startDate: "2017-02-28T16:41:41.090Z",
    accountHolderName: "Jason Smith",
    favorite: false
  },
  {
    id: "07642680-2b6f-11e8-b467-0ed5f89f718b",
    externalArrangementId: "07642c8e-2b6f-11e8-b467-0ed5f89f718b",
    externalLegalEntityId: "c7a382786d514262b75ab9531b749a2b",
    externalProductId: "07642e00-2b6f-11e8-b467-0ed5f89f718b",
    name: "Mr John Usmith",
    productKindName: "Current Account",
    alias: "Our joined account",
    bookedBalance: 1000.0,
    availableBalance: 1666.0,
    creditLimit: 442.12,
    currency: "ZAR",
    externalTransferAllowed: true,
    accruedInterest: 0.54,
    number: "PANS",
    principalAmount: 620.54,
    currentInvestmentValue: 0.16,
    legalEntityId: "257da57a-11e4-4553-9175-54baf755069b",
    legalEntitiesIds: [
      "257da57a-11e4-4553-9175-54baf755069b",
      "cd83683b-13f2-43d8-882b-39c9ab27d499"
    ],
    productId: "36c8fc42-ec97-4f83-8a7c-d622625007f3",
    productTypeName: "Current Account",
    bankBranchCode: "026009593",
    visible: false,
    accountOpeningDate: "2016-01-28T16:41:41.090Z",
    accountInterestRate: 100.2,
    valueDateBalance: 100.1,
    creditLimitUsage: 100.3,
    creditLimitInterestRate: 100.4,
    creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
    debitCards: [
      {
        number: "2935",
        expiryDate: "10-2019"
      },
      {
        number: "1714",
        expiryDate: "02-2019"
      }
    ],
    startDate: "2016-02-28T16:41:41.090Z",
    termUnit: "Y",
    termNumber: 50,
    maturityDate: "2017-02-28T16:41:41.090Z",
    maturityAmount: 99.5,
    autoRenewalIndicator: true,
    interestPaymentFrequencyUnit: "M",
    interestPaymentFrequencyNumber: 15,
    interestSettlementAccount: "interestSettlementAccount1",
    outstandingPrincipalAmount: 100.2,
    monthlyInstalmentAmount: 100.1,
    amountInArrear: 100.3,
    minimumRequiredBalance: 80.4,
    creditCardAccountNumber: "123456",
    validThru: "2019-02-28T16:41:41.090Z",
    applicableInterestRate: 101.2,
    remainingCredit: 50,
    outstandingPayment: 105.5,
    minimumPayment: 51.1,
    minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
    totalInvestmentValue: 110.2,
    accountHolderAddressLine1: "accountHolderAddressLine11",
    accountHolderAddressLine2: "accountHolderAddressLine12",
    accountHolderAddressLine3: "accountHolderAddressLine13",
    accountHolderAddressLine4: "accountHolderAddressLine14",
    accountHolderStreetName: "accountHolderStreetName1",
    accountHolderCountry: "US",
    town: "Los Angeles",
    postCode: "2000",
    countrySubDivision: "countrySubDivision1",
    accountHolderName: "accountHolderName_1",
    creditAccount: true,
    debitAccount: true,
    BBAN: "00400440116243",
    lastUpdateDate: "2016-01-28T16:41:41.090Z",
    favorite: true
  },
  {
    id: "ccde2c90-2dad-11e8-b467-0ed5f89f718b",
    externalArrangementId: "ccde2a24-2dad-11e8-b467-0ed5f89f718b",
    externalLegalEntityId: "c7a382756d514262b75ab9531b749a2b",
    externalProductId: "0ed95692-2dae-11e8-b467-0ed5f89f718b",
    name: "Mrs Amanda Usmith",
    productKindName: "Current Account",
    alias: "Our joined account",
    bookedBalance: 1000.0,
    availableBalance: 7777.0,
    creditLimit: 442.12,
    currency: "ZAR",
    externalTransferAllowed: true,
    accruedInterest: 0.54,
    number: "PANS",
    principalAmount: 620.54,
    currentInvestmentValue: 0.16,
    legalEntityId: "257da57a-11e4-4553-9175-54baf755069b",
    legalEntitiesIds: [
      "257da57a-11e4-4553-9175-54baf755069b",
      "cd83683b-13f2-43d8-882b-39c9ab27d499"
    ],
    productId: "36c8fc42-ec97-4f83-8a7c-d622625007f3",
    productTypeName: "Current Account",
    bankBranchCode: "026008573",
    visible: false,
    accountOpeningDate: "2016-01-28T16:41:41.090Z",
    accountInterestRate: 100.2,
    valueDateBalance: 100.1,
    creditLimitUsage: 100.3,
    creditLimitInterestRate: 100.4,
    creditLimitExpiryDate: "2019-09-28T16:41:41.090Z",
    debitCards: [
      {
        number: "2935",
        expiryDate: "10-2019"
      },
      {
        number: "1714",
        expiryDate: "02-2019"
      }
    ],
    startDate: "2016-02-28T16:41:41.090Z",
    termUnit: "Y",
    termNumber: 50,
    maturityDate: "2017-02-28T16:41:41.090Z",
    maturityAmount: 99.5,
    autoRenewalIndicator: true,
    interestPaymentFrequencyUnit: "M",
    interestPaymentFrequencyNumber: 15,
    interestSettlementAccount: "interestSettlementAccount1",
    outstandingPrincipalAmount: 100.2,
    monthlyInstalmentAmount: 100.1,
    amountInArrear: 100.3,
    minimumRequiredBalance: 80.4,
    creditCardAccountNumber: "123456",
    validThru: "2019-02-28T16:41:41.090Z",
    applicableInterestRate: 101.2,
    remainingCredit: 50,
    outstandingPayment: 105.5,
    minimumPayment: 51.1,
    minimumPaymentDueDate: "2018-02-28T16:41:41.090Z",
    totalInvestmentValue: 110.2,
    accountHolderAddressLine1: "accountHolderAddressLine11",
    accountHolderAddressLine2: "accountHolderAddressLine12",
    accountHolderAddressLine3: "accountHolderAddressLine13",
    accountHolderAddressLine4: "accountHolderAddressLine14",
    accountHolderStreetName: "accountHolderStreetName1",
    accountHolderCountry: "US",
    town: "New York",
    postCode: "2000",
    countrySubDivision: "countrySubDivision1",
    accountHolderName: "accountHolderName_1",
    creditAccount: true,
    debitAccount: true,
    BBAN: "08000000192000145399",
    lastUpdateDate: "2016-01-28T16:41:41.090Z"
  }
];

const ProductSummaryArrangementsMockProvider = createMocks([
  {
    urlPattern: "{version}/productsummary",
    method: "GET",
    responses: [
      {
        status: 200,
        body: productSummaryArrangementsMocks
      }
    ]
  }
]);
const ProductSummaryContextArrangementsMockProvider = createMocks([
  {
    urlPattern: "{version}/productsummary/context/arrangements",
    method: "GET",
    responses: [
      {
        status: 200,
        body: productSummaryContextArrangementsMocks
      }
    ]
  }
]);

// Mock provider for PortalContentService, which is responsble of getting the content from content services.
export const PortalContentServiceMockProvider = {
  get: (contentRef: string) => {
    // Here can be placed different contentItems by contentRefId. The contentRef Ids are references to content stored in ContentServices.
    const contentRefs: {
      [key: string]: ImageContentItem | StructuredContentItem;
    } = {
      // BB logo, referenced as content
      '{"kind":"content","path":"assets/creatives/logo-sml.svg"}': {
        id: "11c4cc8d-3e69-44d3-a93c-d7771255e4f5",
        type: ContentType.IMAGE,
        // for images, put here the path to it
        contentRef: "/../../assets/creatives/logo-sml.svg" // two levels up because of gateway/api.
      },
      '{"kind":"content","path":"loginHeader.json"}': {
        id: "03926904-9a4f-40c9-ad60-dc21f707b589",
        // for structured content, place here the html text
        content: "<h2>Log in to Retail App</h2>\n",
        type: ContentType.STRUCTURED_CONTENT
      }
    };
    return Promise.resolve(contentRefs[contentRef]);
  }
};

export const mockProviders: Array<Provider> = [
  createMocksInterceptor(),
  NotificationsMocksProvider,
  ProductSummaryArrangementsMockProvider,
  ProductSummaryContextArrangementsMockProvider,
  AccountsHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  BalancesHttpServiceMocksProvider,
  ProductKindsHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  PaymentOrdersHttpServiceMocksProvider,
  A2aClientHttpServiceMocksProvider,
  ContactsHttpServiceMocksProvider,
  PlacesHttpServiceMocksProvider,
  CampaignSpaceHttpMocksProvider,
  TemplateRegistry,
  ActionsMocksProvider,
  AccountsHttpServiceMocksProvider,
  MessagecenterHttpServiceMocksProvider,
  CardsHttpServiceMocksProvider,
  IdentityManagementServiceMocksProvider,
  UserManagementServiceMocksProvider,
  UserProfileManagementServiceMocksProvider,
  ManageMyDevicesServiceMocksProvider,
  ManageOtherUsersDevicesServiceMocksProvider,
  ConsentsHttpServiceMocksProvider,
  SavinggoalsHttpServiceMocksProvider,
  SelfEnrollmentServiceMocksProvider,
  AccountStatementHttpServiceMocksProvider,
  BudgetsHttpServiceMocksProvider,
  CategoriesHttpServiceMocksProvider,
  BillPayAccountsServiceMocksProvider,
  BillPayAutopayServiceMocksProvider,
  BillPayEbillsServiceMocksProvider,
  BillPayEnrolmentServiceMocksProvider,
  BillPayPayeesServiceMocksProvider,
  BillPayPayeesSummaryServiceMocksProvider,
  BillPayPaymentsServiceMocksProvider,
  BillPayPayverisServiceMocksProvider,
  BillPaySearchServiceMocksProvider,
  ActionRecipesHttpServiceMocksProvider,
  ActionRecipeSpecificationsHttpServiceMocksProvider,
  StopChecksHttpServiceMocksProvider,
  NotificationsHttpServiceMocksProvider,
  AuthorizedUserServiceMocksProvider,
  ServiceAgreementHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
  TurnoversHttpServiceMocksProvider,
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TravelNoticesHttpServiceMocksProvider,
  PaymentRequestsHttpServiceMocksProvider,
  ConsentRequestsHttpServiceMocksProvider,
  UsersHttpServiceMocksProvider,
  PaymentTemplatesHttpServiceMocksProvider
];
