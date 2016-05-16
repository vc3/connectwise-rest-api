export interface ActivityReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Addition {
    "id"?: number;
    "product": IvItemReference;
    "quantity"?: number;
    "lessIncluded"?: number;
    "unitPrice"?: number;
    "unitCost"?: number;
    "billCustomer": BillCustomerEnum;
    "effectiveDate"?: Date;
    "cancelledDate"?: Date;
    "taxableFlag"?: boolean;
    "serialNumber"?: string;
    "invoiceDescription"?: string;
    "purchaseItemFlag"?: boolean;
    "specialOrderFlag"?: boolean;
    "agreementId"?: number;
    "description"?: string;
    "billedQuantity"?: number;
    "uom"?: string;
    "extPrice"?: number;
    "extCost"?: number;
    "margin"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum BillCustomerEnum {
    Billable,
    DoNotBill,
    NoCharge,
}
export interface Adjustment {
    "id"?: number;
    "amount"?: number;
    "description"?: string;
    "effectiveDate"?: Date;
    "agreementId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Agreement {
    "id"?: number;
    "name": string;
    "type": AgreementTypeReference;
    "company": CompanyReference;
    "contact": ContactReference;
    "subContractCompany"?: CompanyReference;
    "subContractContact"?: ContactReference;
    "parentAgreementId"?: number;
    "customerPO"?: string;
    "locationId"?: number;
    "businessUnitId"?: number;
    "restrictLocationFlag"?: boolean;
    "restrictDepartmentFlag"?: boolean;
    "startDate"?: Date;
    "endDate"?: Date;
    "noEndingDateFlag"?: boolean;
    "opportunity"?: OpportunityReference;
    "cancelledFlag"?: boolean;
    "dateCancelled"?: Date;
    "reasonCancelled"?: string;
    "slaId"?: number;
    "workOrder"?: string;
    "internalNotes"?: string;
    "applicationUnits"?: ApplicationUnitsEnum;
    "applicationLimit"?: number;
    "applicationCycle"?: ApplicationCycleEnum;
    "applicationUnlimitedFlag"?: boolean;
    "oneTimeFlag"?: boolean;
    "coverAgreementTime"?: boolean;
    "coverAgreementProduct"?: boolean;
    "coverAgreementExpense"?: boolean;
    "coverSalesTax"?: boolean;
    "carryOverUnused"?: boolean;
    "allowOverruns"?: boolean;
    "expiredDays"?: number;
    "limit"?: number;
    "expireWhenZero"?: boolean;
    "chargeToFirm"?: boolean;
    "employeeCompRate"?: EmployeeCompRateEnum;
    "employeeCompNotExceed"?: EmployeeCompNotExceedEnum;
    "compHourlyRate"?: number;
    "compLimitAmount"?: number;
    "billCycleId"?: number;
    "billOneTimeFlag"?: boolean;
    "billTermsId"?: number;
    "invoicingCycle"?: InvoicingCycleEnum;
    "billToCompany"?: CompanyReference;
    "billToSite"?: SiteReference;
    "billAmount"?: number;
    "taxable"?: boolean;
    "prorateFirstBill"?: number;
    "billStartDate"?: Date;
    "taxCodeId"?: number;
    "restrictDownPayment"?: boolean;
    "invoiceDescription"?: string;
    "topComment"?: boolean;
    "bottomComment"?: boolean;
    "workRole"?: WorkRoleReference;
    "workType"?: WorkTypeReference;
    "projectTypeId"?: number;
    "invoiceTemplateSetupId"?: number;
    "billTime"?: BillTimeEnum;
    "billExpenses"?: BillExpensesEnum;
    "billProducts"?: BillProductsEnum;
    "billableTimeInvoice"?: boolean;
    "billableExpenseInvoice"?: boolean;
    "billableProductInvoice"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "periodType"?: PeriodTypeEnum;
}
export declare enum ApplicationUnitsEnum {
    Amount,
    Hours,
    Incidents,
}
export declare enum ApplicationCycleEnum {
    Contract2Weeks,
    Contract4Weeks,
    ContractYear,
    CalendarMonth,
    CalendarQuarter,
    CalendarWeek,
    ContractQuarter,
    CalendarYear,
}
export declare enum EmployeeCompRateEnum {
    Actual,
    Hourly,
}
export declare enum EmployeeCompNotExceedEnum {
    Billing,
    Percent,
    Amount,
}
export declare enum InvoicingCycleEnum {
    CalendarYear,
    ContractYear,
}
export declare enum BillTimeEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillExpensesEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillProductsEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum PeriodTypeEnum {
    Current,
    Future,
    Both,
    Undefined,
}
export interface AgreementReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface AgreementSite {
    "id"?: number;
    "company": CompanyReference;
    "site"?: SiteReference;
    "agreementId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface AgreementType {
    "id"?: number;
    "name": string;
    "prefixSuffixOption": PrefixSuffixOptionEnum;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "prePaymentFlag"?: boolean;
    "invoicePreSuffix"?: string;
    "locationId"?: number;
    "businessUnitId"?: number;
    "restrictLocationFlag"?: boolean;
    "restrictDepartmentFlag"?: boolean;
    "slaId"?: number;
    "applicationUnits"?: ApplicationUnitsEnum;
    "applicationLimit"?: number;
    "applicationCycle"?: ApplicationCycleEnum;
    "applicationUnlimitedFlag"?: boolean;
    "oneTimeFlag"?: boolean;
    "coverAgreementTimeFlag"?: boolean;
    "coverAgreementProductFlag"?: boolean;
    "coverAgreementExpenseFlag"?: boolean;
    "coverSalesTaxFlag"?: boolean;
    "carryOverUnusedFlag"?: boolean;
    "allowOverrunsFlag"?: boolean;
    "expiredDays"?: number;
    "limit"?: number;
    "expireWhenZero"?: boolean;
    "chargeToFirmFlag"?: boolean;
    "employeeCompRate": EmployeeCompRateEnum;
    "employeeCompNotExceed": EmployeeCompNotExceedEnum;
    "compHourlyRate"?: number;
    "compLimitAmount"?: number;
    "billCycleId"?: number;
    "billOneTimeFlag"?: boolean;
    "billTermsId"?: number;
    "invoicingCycle": InvoicingCycleEnum;
    "billAmount"?: number;
    "taxableFlag"?: boolean;
    "restrictDownPaymentFlag"?: boolean;
    "invoiceDescription"?: string;
    "topCommentFlag"?: boolean;
    "bottomCommentFlag"?: boolean;
    "workRole"?: WorkRoleReference;
    "workType"?: WorkTypeReference;
    "projectTypeId"?: number;
    "invoiceTemplateSetupId"?: number;
    "billTime": BillTimeEnum;
    "billExpenses": BillExpensesEnum;
    "billProducts": BillProductsEnum;
    "billableTimeInvoiceFlag"?: boolean;
    "billableExpenseInvoiceFlag"?: boolean;
    "billableProductInvoiceFlag"?: boolean;
    "copyWorkRolesFlag"?: boolean;
    "copyWorkTypesFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum PrefixSuffixOptionEnum {
    Prefix,
    Suffix,
}
export declare enum ApplicationUnitsEnum {
    Amount,
    Hours,
    Incidents,
}
export declare enum ApplicationCycleEnum {
    Contract2Weeks,
    Contract4Weeks,
    ContractYear,
    CalendarMonth,
    CalendarQuarter,
    CalendarWeek,
    ContractQuarter,
    CalendarYear,
}
export declare enum EmployeeCompRateEnum {
    Actual,
    Hourly,
}
export declare enum EmployeeCompNotExceedEnum {
    Billing,
    Percent,
    Amount,
}
export declare enum InvoicingCycleEnum {
    CalendarYear,
    ContractYear,
}
export declare enum BillTimeEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillExpensesEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillProductsEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export interface AgreementTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface AgreementWorkRole {
    "id"?: number;
    "workRole"?: WorkRoleReference;
    "locationId"?: number;
    "rateType": RateTypeEnum;
    "rate"?: number;
    "limitTo"?: number;
    "effectiveDate"?: Date;
    "endingDate"?: Date;
    "agreementId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum RateTypeEnum {
    AdjAmount,
    Custom,
    Multiplier,
}
export interface AgreementWorkRoleExclusion {
    "id"?: number;
    "workRole": WorkRoleReference;
    "agreementId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface AgreementWorkType {
    "id"?: number;
    "workType"?: WorkTypeReference;
    "locationId"?: number;
    "rateType": RateTypeEnum;
    "billTime": BillTimeEnum;
    "rate"?: number;
    "hoursMax"?: number;
    "hoursMin"?: number;
    "roundBillHours"?: number;
    "overageRate"?: number;
    "overageRateType"?: OverageRateTypeEnum;
    "agreementLimit"?: number;
    "site"?: SiteReference;
    "effectiveDate"?: Date;
    "endingDate"?: Date;
    "agreementId"?: number;
    "company"?: CompanyReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum RateTypeEnum {
    AdjAmount,
    Custom,
    Multiplier,
}
export declare enum BillTimeEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum OverageRateTypeEnum {
    AdjAmount,
    Custom,
    Multiplier,
}
export interface AgreementWorkTypeExclusion {
    "id"?: number;
    "workType": WorkTypeReference;
    "agreementId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Batch {
    "thruDate"?: Date;
    "locationId"?: number;
    "summarizeInvoices"?: number;
    "excludedInvoiceIds"?: Array<number>;
    "excludedExpenseIds"?: Array<number>;
    "excludedProductIds"?: Array<number>;
    "id"?: number;
    "batchIdentifier": string;
    "exportInvoicesFlag"?: boolean;
    "exportExpensesFlag"?: boolean;
    "exportProductsFlag"?: boolean;
    "closedFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface BatchReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface BillingStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface BillingTermsReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface BoardDefault {
    "id"?: number;
    "board": BoardReference;
    "serviceType"?: ServiceTypeReference;
    "defaultFlag"?: boolean;
    "agreementId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface BoardReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ChargeCodeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CompanyReference {
    "id"?: number;
    "identifier"?: string;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ConfigurationReference {
    "id"?: number;
    "deviceIdentifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ContactReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Count {
    "count"?: number;
}
export interface Currency {
    "id"?: number;
    "currencyIdentifier": string;
    "name"?: string;
    "symbol"?: string;
    "displayIdFlag"?: boolean;
    "displaySymbolFlag"?: boolean;
    "isoCode"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CurrencyReference {
    "id"?: number;
    "identifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}
export interface ExpenseTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Invoice {
    "id"?: number;
    "invoiceNumber"?: string;
    "type": TypeEnum;
    "status"?: BillingStatusReference;
    "company": CompanyReference;
    "billToCompany"?: CompanyReference;
    "shipToCompany"?: CompanyReference;
    "applyToType"?: ApplyToTypeEnum;
    "applyToId"?: number;
    "attention"?: string;
    "billingSite"?: SiteReference;
    "shippingSite"?: SiteReference;
    "billingTerms"?: BillingTermsReference;
    "reference"?: string;
    "customerPO"?: string;
    /**
     * Can be obtained via InvoiceTemplate report
     */
    "templateSetupId"?: number;
    /**
     * Can be obtained via InvoiceEmailTemplate report
     */
    "emailTemplateId"?: number;
    "addToBatchEmailList"?: boolean;
    "date"?: Date;
    "restrictDownpaymentFlag"?: boolean;
    "locationId"?: number;
    "departmentId"?: number;
    "territoryId"?: number;
    "topComment"?: string;
    "bottomComment"?: string;
    "taxableFlag"?: boolean;
    "taxCode"?: TaxCodeReference;
    "internalNotes"?: string;
    "downpaymentPreviouslyTaxedFlag"?: boolean;
    "serviceTotal"?: number;
    "dueDate"?: Date;
    "expenseTotal"?: number;
    "productTotal"?: number;
    "previousProgressApplied"?: number;
    "serviceAdjustmentAmount"?: number;
    "agreementAmount"?: number;
    "downpaymentApplied"?: number;
    "subtotal"?: number;
    "total"?: number;
    "remainingDownpayment"?: number;
    "salesTax"?: number;
    "adjustmentReason"?: string;
    "adjustedBy"?: string;
    "payments"?: number;
    "credits"?: number;
    "balance"?: number;
    "specialInvoiceFlag"?: boolean;
}
export declare enum TypeEnum {
    Agreement,
    CreditMemo,
    DownPayment,
    Miscellaneous,
    Progress,
    Standard,
}
export declare enum ApplyToTypeEnum {
    All,
    Agreement,
    Project,
    ProjectPhase,
    SalesOrder,
    Ticket,
}
export interface InvoiceReference {
    "id"?: number;
    "identifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface IvItemReference {
    "id"?: number;
    "identifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface MemberReference {
    "id"?: number;
    "identifier"?: string;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
/**
 * Metadata of the entity
 */
export interface Metadata {
}
export interface OpportunityReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}
export interface Payment {
    "id"?: number;
    "type"?: string;
    "invoice"?: InvoiceReference;
    "amount": number;
    "paymentDate"?: Date;
    "appliedBy"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface PaymentMethodReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProductReference {
    "id"?: number;
    "description"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectPhaseReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface PurchaseOrderReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ShipmentMethodReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface SiteReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface TaxCodeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface TicketReference {
    "id"?: number;
    "summary"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface TimeEntryReference {
    "id"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Transaction {
    "id"?: number;
    "batch"?: BatchReference;
    "billingLogId"?: number;
    "invoiceNumber"?: string;
    "type"?: TypeEnum;
    "description"?: string;
    "cost"?: number;
    "item"?: string;
    "inventory"?: string;
    "salesCode"?: string;
    "cogs"?: string;
    "glAccount"?: string;
    "currency"?: CurrencyReference;
    "debitAmount"?: number;
    "creditAmount"?: number;
    "balance"?: string;
    "product"?: ProductReference;
    "quantity"?: number;
    "unitOfMeasure"?: UnitOfMeasureReference;
    "serializedFlag"?: boolean;
    "serialNumber"?: string;
    "shipmentMethod"?: ShipmentMethodReference;
    "packingSlip"?: string;
    "ticket"?: TicketReference;
    "project"?: ProjectReference;
    "phase"?: ProjectPhaseReference;
    "expenseClass"?: ExpenseClassEnum;
    "expenseType"?: ExpenseTypeReference;
    "timeEntry"?: TimeEntryReference;
    "activity"?: ActivityReference;
    "segment1"?: string;
    "segment2"?: string;
    "segment3"?: string;
    "segment4"?: string;
    "segment5"?: string;
    "segment6"?: string;
    "segment7"?: string;
    "segment8"?: string;
    "segment9"?: string;
    "segment10"?: string;
    "avalaraTaxFlag"?: boolean;
    "stateTaxAmount"?: number;
    "countyTaxAmount"?: number;
    "cityTaxAmount"?: number;
    "countryTaxAmount"?: number;
    "compositeTaxAmount"?: number;
    "taxTotal"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum TypeEnum {
    AP,
    AR,
    EE,
    EI,
    EO,
    IA,
    IT,
    P,
    PF,
    R,
    RA,
    RD,
    RE,
    RP,
    ST,
    SD,
    ET,
    RM,
    FT,
    PT,
}
export declare enum ExpenseClassEnum {
    NonReimbursable,
    Reimbursable,
    Personal,
}
export interface UnitOfMeasureReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface UnpostedExpense {
    "id"?: number;
    "locationId"?: number;
    "departmentId"?: number;
    "company"?: CompanyReference;
    "accountNumber"?: string;
    "creditAccount"?: string;
    "expenseDetailId"?: number;
    "expenseType"?: ExpenseTypeReference;
    "classification"?: ClassificationEnum;
    "glType"?: GlTypeEnum;
    "member"?: MemberReference;
    "dateExpense"?: Date;
    "chargeCode"?: ChargeCodeReference;
    "chargeDescription"?: string;
    "inPolicy"?: boolean;
    "paymentMethod"?: PaymentMethodReference;
    "currency"?: CurrencyReference;
    "total"?: number;
    "billableAmount"?: number;
    "nonBillableAmount"?: number;
    "agreement"?: AgreementReference;
    "agreementAmountCovered"?: number;
    "ticket"?: TicketReference;
    "project"?: ProjectReference;
    "projectPhase"?: ProjectPhaseReference;
    "taxCode"?: TaxCodeReference;
    "avalaraTaxFlag"?: boolean;
    "salesTaxAmount"?: number;
    "stateTaxAmount"?: number;
    "countyTaxAmount"?: number;
    "cityTaxAmount"?: number;
    "countryTaxAmount"?: number;
    "compositeTaxAmount"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum ClassificationEnum {
    NonReimbursable,
    Reimbursable,
    Personal,
}
export declare enum GlTypeEnum {
    AP,
    AR,
    EE,
    EI,
    EO,
    IA,
    IT,
    P,
    PF,
    R,
    RA,
    RD,
    RE,
    RP,
    ST,
    SD,
    ET,
    RM,
    FT,
    PT,
}
export interface UnpostedInvoice {
    "id"?: number;
    "billingLogId"?: number;
    "locationId"?: number;
    "departmentId"?: number;
    "company"?: CompanyReference;
    "accountNumber"?: string;
    "billToCompany"?: CompanyReference;
    "billToSite"?: SiteReference;
    "shipToCompany"?: CompanyReference;
    "shipToSite"?: SiteReference;
    "invoiceNumber"?: string;
    "invoiceDate"?: Date;
    "invoiceType"?: InvoiceTypeEnum;
    "description"?: string;
    "billingTerms"?: BillingTermsReference;
    "dueDays"?: string;
    "dueDate"?: Date;
    "currency"?: CurrencyReference;
    "subTotal"?: number;
    "total"?: number;
    "invoiceTaxableFlag"?: boolean;
    "taxCode"?: TaxCodeReference;
    "avalaraTaxFlag"?: boolean;
    "salesTaxAmount"?: number;
    "stateTaxAmount"?: number;
    "countyTaxAmount"?: number;
    "cityTaxAmount"?: number;
    "countryTaxAmount"?: number;
    "compositeTaxAmount"?: number;
    "createdBy"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum InvoiceTypeEnum {
    Agreement,
    CreditMemo,
    DownPayment,
    Miscellaneous,
    Progress,
    Standard,
}
export interface UnpostedProcurement {
    "id"?: number;
    "description"?: string;
    "locationId"?: number;
    "departmentId"?: number;
    "procurementType"?: ProcurementTypeEnum;
    "purchaseOrder"?: PurchaseOrderReference;
    "purchaseDate"?: Date;
    "billingTerms"?: BillingTermsReference;
    "currency"?: CurrencyReference;
    "total"?: number;
    "taxCode"?: TaxCodeReference;
    "avalaraTaxFlag"?: boolean;
    "stateTaxAmount"?: number;
    "countyTaxAmount"?: number;
    "cityTaxAmount"?: number;
    "countryTaxAmount"?: number;
    "compositeTaxAmount"?: number;
    "taxTotal"?: number;
    "customer"?: CompanyReference;
    "vendor"?: CompanyReference;
    "vendorAccountNumber"?: string;
    "vendorInvoiceNumber"?: string;
    "vendorInvoiceDate"?: Date;
    "taxFreightFlag"?: boolean;
    "freightTaxTotal"?: number;
    "freightCost"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum ProcurementTypeEnum {
    Purchase,
    Adjustment,
    Transfer,
}
export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}
export interface WorkRoleReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface WorkTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare class AccountingBatchTransactionsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Transactions Count
     * @param id
     * @param conditions
     */
    financeAccountingBatchesIdTransactionsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Transactions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAccountingBatchesIdTransactionsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Transaction>>;
    /**
     *
     * Get Transaction By Id
     * @param id
     * @param transactionId
     */
    financeAccountingBatchesIdTransactionsTransactionIdGet(params: {
        id: number;
        transactionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Transaction>;
}
export declare class AccountingBatchesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Batches Count
     * @param conditions
     */
    financeAccountingBatchesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Batches
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAccountingBatchesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Batch>>;
    /**
     *
     * Delete Batch By Id
     * @param id
     */
    financeAccountingBatchesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Batch By Id
     * @param id
     */
    financeAccountingBatchesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Batch>;
    /**
     *
     * Create Batch
     * @param batch
     */
    financeAccountingBatchesPost(params: {
        batch: Batch;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Batch>;
}
export declare class AccountingUnpostedExpensesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Unposted Expenses Count
     * @param conditions
     */
    financeAccountingUnpostedexpensesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Unposted Expenses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAccountingUnpostedexpensesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<UnpostedExpense>>;
    /**
     *
     * Get Unposted Expense By Id
     * @param id
     */
    financeAccountingUnpostedexpensesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<UnpostedExpense>;
}
export declare class AccountingUnpostedProcurementsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Unposted Procurements Count
     * @param conditions
     */
    financeAccountingUnpostedprocurementCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Unposted Procurements
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAccountingUnpostedprocurementGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<UnpostedProcurement>>;
    /**
     *
     * Get Unposted Procurement By Id
     * @param id
     */
    financeAccountingUnpostedprocurementIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<UnpostedProcurement>;
}
export declare class AccountingUnpostedinvoicesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Unposted Invoices Count
     * @param conditions
     */
    financeAccountingUnpostedinvoicesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Unposted Invoices
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAccountingUnpostedinvoicesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<UnpostedInvoice>>;
    /**
     *
     * Get Unposted Invoice By Id
     * @param id
     */
    financeAccountingUnpostedinvoicesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<UnpostedInvoice>;
}
export declare class AgreementAdditionsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Addition By Id
     * @param id
     * @param additionId
     */
    financeAgreementsIdAdditionsAdditionIdDelete(params: {
        id: number;
        additionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Addition By Id
     * @param id
     * @param additionId
     */
    financeAgreementsIdAdditionsAdditionIdGet(params: {
        id: number;
        additionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Addition>;
    /**
     *
     * Update Addition
     * @param id
     * @param additionId
     * @param operations
     */
    financeAgreementsIdAdditionsAdditionIdPatch(params: {
        id: number;
        additionId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Addition>;
    /**
     *
     * Replace Addition
     * @param id
     * @param additionId
     * @param addition
     */
    financeAgreementsIdAdditionsAdditionIdPut(params: {
        id: number;
        additionId: number;
        addition: Addition;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Addition>;
    /**
     *
     * Get Additions Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdAdditionsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Additions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdAdditionsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Addition>>;
    /**
     *
     * Create Addition
     * @param id
     * @param addition
     */
    financeAgreementsIdAdditionsPost(params: {
        id: number;
        addition: Addition;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Addition>;
}
export declare class AgreementAdjustmentsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Adjustment By Id
     * @param id
     * @param adjustmentId
     */
    financeAgreementsIdAdjustmentsAdjustmentIdDelete(params: {
        id: number;
        adjustmentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Adjustment By Id
     * @param id
     * @param adjustmentId
     */
    financeAgreementsIdAdjustmentsAdjustmentIdGet(params: {
        id: number;
        adjustmentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Adjustment>;
    /**
     *
     * Update Adjustment
     * @param id
     * @param adjustmentId
     * @param operations
     */
    financeAgreementsIdAdjustmentsAdjustmentIdPatch(params: {
        id: number;
        adjustmentId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Adjustment>;
    /**
     *
     * Replace Adjustment
     * @param id
     * @param adjustmentId
     * @param adjustment
     */
    financeAgreementsIdAdjustmentsAdjustmentIdPut(params: {
        id: number;
        adjustmentId: number;
        adjustment: Adjustment;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Adjustment>;
    /**
     *
     * Get Adjustments Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdAdjustmentsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Adjustments
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdAdjustmentsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Adjustment>>;
    /**
     *
     * Create Adjustment
     * @param id
     * @param adjustment
     */
    financeAgreementsIdAdjustmentsPost(params: {
        id: number;
        adjustment: Adjustment;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Adjustment>;
}
export declare class AgreementBoardDefaultsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Board Default By Id
     * @param id
     * @param boardDefaultId
     */
    financeAgreementsIdBoardDefaultsBoardDefaultIdDelete(params: {
        id: number;
        boardDefaultId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Board Default By Id
     * @param id
     * @param boardDefaultId
     */
    financeAgreementsIdBoardDefaultsBoardDefaultIdGet(params: {
        id: number;
        boardDefaultId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<BoardDefault>;
    /**
     *
     * Update Board Default
     * @param id
     * @param boardDefaultId
     * @param operations
     */
    financeAgreementsIdBoardDefaultsBoardDefaultIdPatch(params: {
        id: number;
        boardDefaultId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<BoardDefault>;
    /**
     *
     * Replace Board Default
     * @param id
     * @param boardDefaultId
     * @param boardDefault
     */
    financeAgreementsIdBoardDefaultsBoardDefaultIdPut(params: {
        id: number;
        boardDefaultId: number;
        boardDefault: BoardDefault;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<BoardDefault>;
    /**
     *
     * Get Board Defaults Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdBoardDefaultsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Board Defaults
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdBoardDefaultsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<BoardDefault>>;
    /**
     *
     * Create Board Default
     * @param id
     * @param boardDefault
     */
    financeAgreementsIdBoardDefaultsPost(params: {
        id: number;
        boardDefault: BoardDefault;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<BoardDefault>;
}
export declare class AgreementSitesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Sites Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdSitesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Sites
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdSitesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<AgreementSite>>;
    /**
     *
     * Create Site
     * @param id
     * @param site
     */
    financeAgreementsIdSitesPost(params: {
        id: number;
        site: AgreementSite;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementSite>;
    /**
     *
     * Delete Site By Id
     * @param id
     * @param siteId
     */
    financeAgreementsIdSitesSiteIdDelete(params: {
        id: number;
        siteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Site By Id
     * @param id
     * @param siteId
     */
    financeAgreementsIdSitesSiteIdGet(params: {
        id: number;
        siteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementSite>;
    /**
     *
     * Update Site
     * @param id
     * @param siteId
     * @param operations
     */
    financeAgreementsIdSitesSiteIdPatch(params: {
        id: number;
        siteId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementSite>;
    /**
     *
     * Replace Site
     * @param id
     * @param siteId
     * @param site
     */
    financeAgreementsIdSitesSiteIdPut(params: {
        id: number;
        siteId: number;
        site: AgreementSite;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementSite>;
}
export declare class AgreementTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Agreement Types Count
     * @param conditions
     */
    financeAgreementsTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Agreement Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<AgreementType>>;
    /**
     *
     * Delete Agreement Type By Id
     * @param id
     */
    financeAgreementsTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Agreement Type By Id
     * @param id
     */
    financeAgreementsTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementType>;
    /**
     *
     * Update Agreement Type
     * @param id
     * @param operations
     */
    financeAgreementsTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementType>;
    /**
     *
     * Replace Agreement Type
     * @param id
     * @param agreementType
     */
    financeAgreementsTypesIdPut(params: {
        id: number;
        agreementType: AgreementType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementType>;
    /**
     *
     * Create Agreement Type
     * @param agreementType
     */
    financeAgreementsTypesPost(params: {
        agreementType: AgreementType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementType>;
}
export declare class AgreementWorkRoleExclusionsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Work Role Exclusions Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdWorkRoleExclusionsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Work Role Exclusions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdWorkRoleExclusionsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<AgreementWorkRoleExclusion>>;
    /**
     *
     * Create Work Role Exclusion
     * @param id
     * @param workRoleExclusion
     */
    financeAgreementsIdWorkRoleExclusionsPost(params: {
        id: number;
        workRoleExclusion: AgreementWorkRoleExclusion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkRoleExclusion>;
    /**
     *
     * Delete Work Role Exclusion By Id
     * @param id
     * @param workRoleExclusionId
     */
    financeAgreementsIdWorkRoleExclusionsWorkRoleExclusionIdDelete(params: {
        id: number;
        workRoleExclusionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
}
export declare class AgreementWorkRolesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Work Roles Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdWorkrolesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Work Roles
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdWorkrolesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<AgreementWorkRole>>;
    /**
     *
     * Create Work Role
     * @param id
     * @param workRole
     */
    financeAgreementsIdWorkrolesPost(params: {
        id: number;
        workRole: AgreementWorkRole;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkRole>;
    /**
     *
     * Delete Work Role By Id
     * @param id
     * @param workRoleId
     */
    financeAgreementsIdWorkrolesWorkRoleIdDelete(params: {
        id: number;
        workRoleId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Work Role By Id
     * @param id
     * @param workRoleId
     */
    financeAgreementsIdWorkrolesWorkRoleIdGet(params: {
        id: number;
        workRoleId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkRole>;
    /**
     *
     * Update Work Role
     * @param id
     * @param workRoleId
     * @param operations
     */
    financeAgreementsIdWorkrolesWorkRoleIdPatch(params: {
        id: number;
        workRoleId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkRole>;
    /**
     *
     * Replace Work Role
     * @param id
     * @param workRoleId
     * @param workRole
     */
    financeAgreementsIdWorkrolesWorkRoleIdPut(params: {
        id: number;
        workRoleId: number;
        workRole: AgreementWorkRole;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkRole>;
}
export declare class AgreementWorkTypeExclusionsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Work Type Exclusions Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdWorkTypeExclusionsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Work Type Exclusions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdWorkTypeExclusionsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<AgreementWorkTypeExclusion>>;
    /**
     *
     * Create Work Type Exclusion
     * @param id
     * @param workTypeExclusion
     */
    financeAgreementsIdWorkTypeExclusionsPost(params: {
        id: number;
        workTypeExclusion: AgreementWorkTypeExclusion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkTypeExclusion>;
    /**
     *
     * Delete Work Type Exclusion By Id
     * @param id
     * @param workTypeExclusionId
     */
    financeAgreementsIdWorkTypeExclusionsWorkTypeExclusionIdDelete(params: {
        id: number;
        workTypeExclusionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
}
export declare class AgreementWorkTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Work Types Count
     * @param id
     * @param conditions
     */
    financeAgreementsIdWorktypesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Work Types
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsIdWorktypesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<AgreementWorkType>>;
    /**
     *
     * Create Work Type
     * @param id
     * @param workType
     */
    financeAgreementsIdWorktypesPost(params: {
        id: number;
        workType: AgreementWorkType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkType>;
    /**
     *
     * Delete Work Type By Id
     * @param id
     * @param worktypeId
     */
    financeAgreementsIdWorktypesWorktypeIdDelete(params: {
        id: number;
        worktypeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Work Type By Id
     * @param id
     * @param worktypeId
     */
    financeAgreementsIdWorktypesWorktypeIdGet(params: {
        id: number;
        worktypeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkType>;
    /**
     *
     * Update Work Type
     * @param id
     * @param worktypeId
     * @param operations
     */
    financeAgreementsIdWorktypesWorktypeIdPatch(params: {
        id: number;
        worktypeId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkType>;
    /**
     *
     * Replace Work Type
     * @param id
     * @param worktypeId
     * @param workType
     */
    financeAgreementsIdWorktypesWorktypeIdPut(params: {
        id: number;
        worktypeId: number;
        workType: AgreementWorkType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<AgreementWorkType>;
}
export declare class AgreementsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Agreements Count
     * @param conditions
     */
    financeAgreementsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Agreements
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeAgreementsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Agreement>>;
    /**
     *
     * Delete Configuration Association
     * @param id
     * @param configurationId
     */
    financeAgreementsIdConfigurationsConfigurationIdDelete(params: {
        id: number;
        configurationId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Configuration Association
     * @param id
     * @param configurationId
     */
    financeAgreementsIdConfigurationsConfigurationIdGet(params: {
        id: number;
        configurationId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationReference>;
    /**
     *
     * Get Agreement Configurations Count
     * @param id
     */
    financeAgreementsIdConfigurationsCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Agreement Configurations
     * @param id
     * @param page
     * @param pageSize
     */
    financeAgreementsIdConfigurationsGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ConfigurationReference>>;
    /**
     *
     * Create Configuration Association
     * @param id
     * @param configuration
     */
    financeAgreementsIdConfigurationsPost(params: {
        id: number;
        configuration: ConfigurationReference;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationReference>;
    /**
     *
     * Delete Agreement By Id
     * @param id
     */
    financeAgreementsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Agreement By Id
     * @param id
     */
    financeAgreementsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Agreement>;
    /**
     *
     * Update Agreement
     * @param id
     * @param operations
     */
    financeAgreementsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Agreement>;
    /**
     *
     * Replace Agreement
     * @param id
     * @param agreement
     */
    financeAgreementsIdPut(params: {
        id: number;
        agreement: Agreement;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Agreement>;
    /**
     *
     * Create Agreement
     * @param agreement
     */
    financeAgreementsPost(params: {
        agreement: Agreement;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Agreement>;
}
export declare class CurrenciesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Currencies Count
     * @param conditions
     */
    financeCurrenciesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Currencies
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeCurrenciesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Currency>>;
    /**
     *
     * Delete Currency By Id
     * @param id
     */
    financeCurrenciesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Currency By Id
     * @param id
     */
    financeCurrenciesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Currency>;
    /**
     *
     * Update Currency
     * @param id
     * @param operations
     */
    financeCurrenciesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Currency>;
    /**
     *
     * Replace Currency
     * @param id
     * @param currency
     */
    financeCurrenciesIdPut(params: {
        id: number;
        currency: Currency;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Currency>;
    /**
     *
     * Create Currency
     * @param currency
     */
    financeCurrenciesPost(params: {
        currency: Currency;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Currency>;
}
export declare class InvoicePaymentsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Payments
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeInvoicesIdPaymentsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Payment>>;
    /**
     *
     * Delete Payment By Id
     * @param id
     * @param paymentId
     */
    financeInvoicesIdPaymentsPaymentIdDelete(params: {
        id: number;
        paymentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Payment By Id
     * @param id
     * @param paymentId
     */
    financeInvoicesIdPaymentsPaymentIdGet(params: {
        id: number;
        paymentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Payment>;
    /**
     *
     * Update Payment
     * @param id
     * @param paymentId
     * @param operations
     */
    financeInvoicesIdPaymentsPaymentIdPatch(params: {
        id: number;
        paymentId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Payment>;
    /**
     *
     * Replace Payment
     * @param id
     * @param paymentId
     * @param payment
     */
    financeInvoicesIdPaymentsPaymentIdPut(params: {
        id: number;
        paymentId: number;
        payment: Payment;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Payment>;
    /**
     *
     * Create Payment
     * @param id
     * @param payment
     */
    financeInvoicesIdPaymentsPost(params: {
        id: number;
        payment: Payment;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Payment>;
}
export declare class InvoicesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Invoices Count
     * @param conditions
     */
    financeInvoicesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Invoices
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    financeInvoicesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Invoice>>;
    /**
     *
     * Delete Invoice By Id
     * @param id
     */
    financeInvoicesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Invoice By Id
     * @param id
     */
    financeInvoicesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Invoice>;
    /**
     *
     * Update Invoice
     * @param id
     * @param operations
     */
    financeInvoicesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Invoice>;
    /**
     *
     * Get Invoice Pdf
     * @param id
     */
    financeInvoicesIdPdfGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Replace Invoice
     * @param id
     * @param invoice
     */
    financeInvoicesIdPut(params: {
        id: number;
        invoice: Invoice;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Invoice>;
    /**
     *
     * Create Invoice
     * @param invoice
     */
    financeInvoicesPost(params: {
        invoice: Invoice;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Invoice>;
}
