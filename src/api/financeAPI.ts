///<reference path="../../typings/index.d.ts"/>
import * as querystring from 'querystring';
import * as fetch from 'isomorphic-fetch';
import {assign} from './assign';


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


export enum BillCustomerEnum {
	Billable = <any> 'Billable',
	DoNotBill = <any> 'DoNotBill',
	NoCharge = <any> 'NoCharge'
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
export enum PeriodTypeEnum {
	Current = <any> 'Current',
	Future = <any> 'Future',
	Both = <any> 'Both',
	Undefined = <any> 'Undefined'
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


export enum PrefixSuffixOptionEnum {
	Prefix = <any> 'Prefix',
	Suffix = <any> 'Suffix'
}

export enum ApplicationUnitsEnum {
	Amount = <any> 'Amount',
	Hours = <any> 'Hours',
	Incidents = <any> 'Incidents'
}

export enum ApplicationCycleEnum {
	Contract2Weeks = <any> 'Contract2Weeks',
	Contract4Weeks = <any> 'Contract4Weeks',
	ContractYear = <any> 'ContractYear',
	CalendarMonth = <any> 'CalendarMonth',
	CalendarQuarter = <any> 'CalendarQuarter',
	CalendarWeek = <any> 'CalendarWeek',
	ContractQuarter = <any> 'ContractQuarter',
	CalendarYear = <any> 'CalendarYear'
}

export enum EmployeeCompRateEnum {
	Actual = <any> 'Actual',
	Hourly = <any> 'Hourly'
}

export enum EmployeeCompNotExceedEnum {
	Billing = <any> 'Billing',
	Percent = <any> 'Percent',
	Amount = <any> 'Amount'
}

export enum InvoicingCycleEnum {
	CalendarYear = <any> 'CalendarYear',
	ContractYear = <any> 'ContractYear'
}
export enum BillExpensesEnum {
	Billable = <any> 'Billable',
	DoNotBill = <any> 'DoNotBill',
	NoCharge = <any> 'NoCharge',
	NoDefault = <any> 'NoDefault'
}

export enum BillProductsEnum {
	Billable = <any> 'Billable',
	DoNotBill = <any> 'DoNotBill',
	NoCharge = <any> 'NoCharge',
	NoDefault = <any> 'NoDefault'
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


export enum RateTypeEnum {
	AdjAmount = <any> 'AdjAmount',
	Custom = <any> 'Custom',
	Multiplier = <any> 'Multiplier'
}

export enum BillTimeEnum {
	Billable = <any> 'Billable',
	DoNotBill = <any> 'DoNotBill',
	NoCharge = <any> 'NoCharge',
	NoDefault = <any> 'NoDefault'
}

export enum OverageRateTypeEnum {
	AdjAmount = <any> 'AdjAmount',
	Custom = <any> 'Custom',
	Multiplier = <any> 'Multiplier'
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


export enum TypeEnum {
	Agreement = <any> 'Agreement',
	CreditMemo = <any> 'CreditMemo',
	DownPayment = <any> 'DownPayment',
	Miscellaneous = <any> 'Miscellaneous',
	Progress = <any> 'Progress',
	Standard = <any> 'Standard'
}

export enum ApplyToTypeEnum {
	All = <any> 'All',
	Agreement = <any> 'Agreement',
	Project = <any> 'Project',
	ProjectPhase = <any> 'ProjectPhase',
	SalesOrder = <any> 'SalesOrder',
	Ticket = <any> 'Ticket'
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


export enum TypeEnum {
	AP = <any> 'AP',
	AR = <any> 'AR',
	EE = <any> 'EE',
	EI = <any> 'EI',
	EO = <any> 'EO',
	IA = <any> 'IA',
	IT = <any> 'IT',
	P = <any> 'P',
	PF = <any> 'PF',
	R = <any> 'R',
	RA = <any> 'RA',
	RD = <any> 'RD',
	RE = <any> 'RE',
	RP = <any> 'RP',
	ST = <any> 'ST',
	SD = <any> 'SD',
	ET = <any> 'ET',
	RM = <any> 'RM',
	FT = <any> 'FT',
	PT = <any> 'PT'
}

export enum ExpenseClassEnum {
	NonReimbursable = <any> 'NonReimbursable',
	Reimbursable = <any> 'Reimbursable',
	Personal = <any> 'Personal'
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


export enum ClassificationEnum {
	NonReimbursable = <any> 'NonReimbursable',
	Reimbursable = <any> 'Reimbursable',
	Personal = <any> 'Personal'
}

export enum GlTypeEnum {
	AP = <any> 'AP',
	AR = <any> 'AR',
	EE = <any> 'EE',
	EI = <any> 'EI',
	EO = <any> 'EO',
	IA = <any> 'IA',
	IT = <any> 'IT',
	P = <any> 'P',
	PF = <any> 'PF',
	R = <any> 'R',
	RA = <any> 'RA',
	RD = <any> 'RD',
	RE = <any> 'RE',
	RP = <any> 'RP',
	ST = <any> 'ST',
	SD = <any> 'SD',
	ET = <any> 'ET',
	RM = <any> 'RM',
	FT = <any> 'FT',
	PT = <any> 'PT'
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


export enum InvoiceTypeEnum {
	Agreement = <any> 'Agreement',
	CreditMemo = <any> 'CreditMemo',
	DownPayment = <any> 'DownPayment',
	Miscellaneous = <any> 'Miscellaneous',
	Progress = <any> 'Progress',
	Standard = <any> 'Standard'
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


export enum ProcurementTypeEnum {
	Purchase = <any> 'Purchase',
	Adjustment = <any> 'Adjustment',
	Transfer = <any> 'Transfer'
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


//export namespace  {
	'use strict';

	export class AccountingBatchTransactionsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Transactions Count
		 * @param id
		 * @param conditions
		 */
		public financeAccountingBatchesIdTransactionsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/accounting/batches/{id}/transactions/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingBatchesIdTransactionsCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Transactions
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAccountingBatchesIdTransactionsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Transaction>> {
			const localVarPath = this.basePath + '/finance/accounting/batches/{id}/transactions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingBatchesIdTransactionsGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Transaction By Id
		 * @param id
		 * @param transactionId
		 */
		public financeAccountingBatchesIdTransactionsTransactionIdGet (params: {  id: number; transactionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Transaction> {
			const localVarPath = this.basePath + '/finance/accounting/batches/{id}/transactions/{transactionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'transactionId' + '}', String(params.transactionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingBatchesIdTransactionsTransactionIdGet');
			}
			// verify required parameter 'transactionId' is set
			if (params.transactionId == null) {
				throw new Error('Missing required parameter transactionId when calling financeAccountingBatchesIdTransactionsTransactionIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AccountingBatchesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Batches Count
		 * @param conditions
		 */
		public financeAccountingBatchesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/accounting/batches/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Batches
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAccountingBatchesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Batch>> {
			const localVarPath = this.basePath + '/finance/accounting/batches';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Batch By Id
		 * @param id
		 */
		public financeAccountingBatchesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/accounting/batches/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingBatchesIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Batch By Id
		 * @param id
		 */
		public financeAccountingBatchesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Batch> {
			const localVarPath = this.basePath + '/finance/accounting/batches/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingBatchesIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Batch
		 * @param batch
		 */
		public financeAccountingBatchesPost (params: {  batch: Batch; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Batch> {
			const localVarPath = this.basePath + '/finance/accounting/batches';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'batch' is set
			if (params.batch == null) {
				throw new Error('Missing required parameter batch when calling financeAccountingBatchesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.batch),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AccountingUnpostedExpensesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Unposted Expenses Count
		 * @param conditions
		 */
		public financeAccountingUnpostedexpensesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedexpenses/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Unposted Expenses
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAccountingUnpostedexpensesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UnpostedExpense>> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedexpenses';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Unposted Expense By Id
		 * @param id
		 */
		public financeAccountingUnpostedexpensesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UnpostedExpense> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedexpenses/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingUnpostedexpensesIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AccountingUnpostedProcurementsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Unposted Procurements Count
		 * @param conditions
		 */
		public financeAccountingUnpostedprocurementCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedprocurement/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Unposted Procurements
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAccountingUnpostedprocurementGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UnpostedProcurement>> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedprocurement';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Unposted Procurement By Id
		 * @param id
		 */
		public financeAccountingUnpostedprocurementIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UnpostedProcurement> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedprocurement/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingUnpostedprocurementIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AccountingUnpostedinvoicesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Unposted Invoices Count
		 * @param conditions
		 */
		public financeAccountingUnpostedinvoicesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedinvoices/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Unposted Invoices
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAccountingUnpostedinvoicesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UnpostedInvoice>> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedinvoices';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Unposted Invoice By Id
		 * @param id
		 */
		public financeAccountingUnpostedinvoicesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UnpostedInvoice> {
			const localVarPath = this.basePath + '/finance/accounting/unpostedinvoices/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAccountingUnpostedinvoicesIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementAdditionsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Delete Addition By Id
		 * @param id
		 * @param additionId
		 */
		public financeAgreementsIdAdditionsAdditionIdDelete (params: {  id: number; additionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'additionId' + '}', String(params.additionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdDelete');
			}
			// verify required parameter 'additionId' is set
			if (params.additionId == null) {
				throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Addition By Id
		 * @param id
		 * @param additionId
		 */
		public financeAgreementsIdAdditionsAdditionIdGet (params: {  id: number; additionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Addition> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'additionId' + '}', String(params.additionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdGet');
			}
			// verify required parameter 'additionId' is set
			if (params.additionId == null) {
				throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Addition
		 * @param id
		 * @param additionId
		 * @param operations
		 */
		public financeAgreementsIdAdditionsAdditionIdPatch (params: {  id: number; additionId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Addition> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'additionId' + '}', String(params.additionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdPatch');
			}
			// verify required parameter 'additionId' is set
			if (params.additionId == null) {
				throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsIdAdditionsAdditionIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Addition
		 * @param id
		 * @param additionId
		 * @param addition
		 */
		public financeAgreementsIdAdditionsAdditionIdPut (params: {  id: number; additionId: number; addition: Addition; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Addition> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'additionId' + '}', String(params.additionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdPut');
			}
			// verify required parameter 'additionId' is set
			if (params.additionId == null) {
				throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdPut');
			}
			// verify required parameter 'addition' is set
			if (params.addition == null) {
				throw new Error('Missing required parameter addition when calling financeAgreementsIdAdditionsAdditionIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.addition),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Additions Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdAdditionsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/additions/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Additions
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdAdditionsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Addition>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/additions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Addition
		 * @param id
		 * @param addition
		 */
		public financeAgreementsIdAdditionsPost (params: {  id: number; addition: Addition; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Addition> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/additions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsPost');
			}
			// verify required parameter 'addition' is set
			if (params.addition == null) {
				throw new Error('Missing required parameter addition when calling financeAgreementsIdAdditionsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.addition),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementAdjustmentsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Delete Adjustment By Id
		 * @param id
		 * @param adjustmentId
		 */
		public financeAgreementsIdAdjustmentsAdjustmentIdDelete (params: {  id: number; adjustmentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdDelete');
			}
			// verify required parameter 'adjustmentId' is set
			if (params.adjustmentId == null) {
				throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Adjustment By Id
		 * @param id
		 * @param adjustmentId
		 */
		public financeAgreementsIdAdjustmentsAdjustmentIdGet (params: {  id: number; adjustmentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Adjustment> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdGet');
			}
			// verify required parameter 'adjustmentId' is set
			if (params.adjustmentId == null) {
				throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Adjustment
		 * @param id
		 * @param adjustmentId
		 * @param operations
		 */
		public financeAgreementsIdAdjustmentsAdjustmentIdPatch (params: {  id: number; adjustmentId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Adjustment> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdPatch');
			}
			// verify required parameter 'adjustmentId' is set
			if (params.adjustmentId == null) {
				throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsIdAdjustmentsAdjustmentIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Adjustment
		 * @param id
		 * @param adjustmentId
		 * @param adjustment
		 */
		public financeAgreementsIdAdjustmentsAdjustmentIdPut (params: {  id: number; adjustmentId: number; adjustment: Adjustment; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Adjustment> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdPut');
			}
			// verify required parameter 'adjustmentId' is set
			if (params.adjustmentId == null) {
				throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdPut');
			}
			// verify required parameter 'adjustment' is set
			if (params.adjustment == null) {
				throw new Error('Missing required parameter adjustment when calling financeAgreementsIdAdjustmentsAdjustmentIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.adjustment),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Adjustments Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdAdjustmentsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Adjustments
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdAdjustmentsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Adjustment>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/adjustments'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Adjustment
		 * @param id
		 * @param adjustment
		 */
		public financeAgreementsIdAdjustmentsPost (params: {  id: number; adjustment: Adjustment; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Adjustment> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/adjustments'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsPost');
			}
			// verify required parameter 'adjustment' is set
			if (params.adjustment == null) {
				throw new Error('Missing required parameter adjustment when calling financeAgreementsIdAdjustmentsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.adjustment),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementBoardDefaultsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Delete Board Default By Id
		 * @param id
		 * @param boardDefaultId
		 */
		public financeAgreementsIdBoardDefaultsBoardDefaultIdDelete (params: {  id: number; boardDefaultId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdDelete');
			}
			// verify required parameter 'boardDefaultId' is set
			if (params.boardDefaultId == null) {
				throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Board Default By Id
		 * @param id
		 * @param boardDefaultId
		 */
		public financeAgreementsIdBoardDefaultsBoardDefaultIdGet (params: {  id: number; boardDefaultId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<BoardDefault> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdGet');
			}
			// verify required parameter 'boardDefaultId' is set
			if (params.boardDefaultId == null) {
				throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Board Default
		 * @param id
		 * @param boardDefaultId
		 * @param operations
		 */
		public financeAgreementsIdBoardDefaultsBoardDefaultIdPatch (params: {  id: number; boardDefaultId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<BoardDefault> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPatch');
			}
			// verify required parameter 'boardDefaultId' is set
			if (params.boardDefaultId == null) {
				throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Board Default
		 * @param id
		 * @param boardDefaultId
		 * @param boardDefault
		 */
		public financeAgreementsIdBoardDefaultsBoardDefaultIdPut (params: {  id: number; boardDefaultId: number; boardDefault: BoardDefault; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<BoardDefault> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPut');
			}
			// verify required parameter 'boardDefaultId' is set
			if (params.boardDefaultId == null) {
				throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPut');
			}
			// verify required parameter 'boardDefault' is set
			if (params.boardDefault == null) {
				throw new Error('Missing required parameter boardDefault when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.boardDefault),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Board Defaults Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdBoardDefaultsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Board Defaults
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdBoardDefaultsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<BoardDefault>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Board Default
		 * @param id
		 * @param boardDefault
		 */
		public financeAgreementsIdBoardDefaultsPost (params: {  id: number; boardDefault: BoardDefault; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<BoardDefault> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsPost');
			}
			// verify required parameter 'boardDefault' is set
			if (params.boardDefault == null) {
				throw new Error('Missing required parameter boardDefault when calling financeAgreementsIdBoardDefaultsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.boardDefault),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementSitesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Sites Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdSitesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/sites/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdSitesCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Sites
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdSitesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<AgreementSite>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/sites'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdSitesGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Site
		 * @param id
		 * @param site
		 */
		public financeAgreementsIdSitesPost (params: {  id: number; site: AgreementSite; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementSite> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/sites'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdSitesPost');
			}
			// verify required parameter 'site' is set
			if (params.site == null) {
				throw new Error('Missing required parameter site when calling financeAgreementsIdSitesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.site),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Site By Id
		 * @param id
		 * @param siteId
		 */
		public financeAgreementsIdSitesSiteIdDelete (params: {  id: number; siteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'siteId' + '}', String(params.siteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdDelete');
			}
			// verify required parameter 'siteId' is set
			if (params.siteId == null) {
				throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Site By Id
		 * @param id
		 * @param siteId
		 */
		public financeAgreementsIdSitesSiteIdGet (params: {  id: number; siteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementSite> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'siteId' + '}', String(params.siteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdGet');
			}
			// verify required parameter 'siteId' is set
			if (params.siteId == null) {
				throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Site
		 * @param id
		 * @param siteId
		 * @param operations
		 */
		public financeAgreementsIdSitesSiteIdPatch (params: {  id: number; siteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementSite> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'siteId' + '}', String(params.siteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdPatch');
			}
			// verify required parameter 'siteId' is set
			if (params.siteId == null) {
				throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsIdSitesSiteIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Site
		 * @param id
		 * @param siteId
		 * @param site
		 */
		public financeAgreementsIdSitesSiteIdPut (params: {  id: number; siteId: number; site: AgreementSite; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementSite> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'siteId' + '}', String(params.siteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdPut');
			}
			// verify required parameter 'siteId' is set
			if (params.siteId == null) {
				throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdPut');
			}
			// verify required parameter 'site' is set
			if (params.site == null) {
				throw new Error('Missing required parameter site when calling financeAgreementsIdSitesSiteIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.site),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementTypesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Agreement Types Count
		 * @param conditions
		 */
		public financeAgreementsTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/types/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Agreement Types
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<AgreementType>> {
			const localVarPath = this.basePath + '/finance/agreements/types';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Agreement Type By Id
		 * @param id
		 */
		public financeAgreementsTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/types/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsTypesIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Agreement Type By Id
		 * @param id
		 */
		public financeAgreementsTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementType> {
			const localVarPath = this.basePath + '/finance/agreements/types/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsTypesIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Agreement Type
		 * @param id
		 * @param operations
		 */
		public financeAgreementsTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementType> {
			const localVarPath = this.basePath + '/finance/agreements/types/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsTypesIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsTypesIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Agreement Type
		 * @param id
		 * @param agreementType
		 */
		public financeAgreementsTypesIdPut (params: {  id: number; agreementType: AgreementType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementType> {
			const localVarPath = this.basePath + '/finance/agreements/types/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsTypesIdPut');
			}
			// verify required parameter 'agreementType' is set
			if (params.agreementType == null) {
				throw new Error('Missing required parameter agreementType when calling financeAgreementsTypesIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.agreementType),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Agreement Type
		 * @param agreementType
		 */
		public financeAgreementsTypesPost (params: {  agreementType: AgreementType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementType> {
			const localVarPath = this.basePath + '/finance/agreements/types';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'agreementType' is set
			if (params.agreementType == null) {
				throw new Error('Missing required parameter agreementType when calling financeAgreementsTypesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.agreementType),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementWorkRoleExclusionsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Work Role Exclusions Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdWorkRoleExclusionsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Work Role Exclusions
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdWorkRoleExclusionsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<AgreementWorkRoleExclusion>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Work Role Exclusion
		 * @param id
		 * @param workRoleExclusion
		 */
		public financeAgreementsIdWorkRoleExclusionsPost (params: {  id: number; workRoleExclusion: AgreementWorkRoleExclusion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkRoleExclusion> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsPost');
			}
			// verify required parameter 'workRoleExclusion' is set
			if (params.workRoleExclusion == null) {
				throw new Error('Missing required parameter workRoleExclusion when calling financeAgreementsIdWorkRoleExclusionsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.workRoleExclusion),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Work Role Exclusion By Id
		 * @param id
		 * @param workRoleExclusionId
		 */
		public financeAgreementsIdWorkRoleExclusionsWorkRoleExclusionIdDelete (params: {  id: number; workRoleExclusionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions/{workRoleExclusionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'workRoleExclusionId' + '}', String(params.workRoleExclusionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsWorkRoleExclusionIdDelete');
			}
			// verify required parameter 'workRoleExclusionId' is set
			if (params.workRoleExclusionId == null) {
				throw new Error('Missing required parameter workRoleExclusionId when calling financeAgreementsIdWorkRoleExclusionsWorkRoleExclusionIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementWorkRolesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Work Roles Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdWorkrolesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workroles/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Work Roles
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdWorkrolesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<AgreementWorkRole>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workroles'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Work Role
		 * @param id
		 * @param workRole
		 */
		public financeAgreementsIdWorkrolesPost (params: {  id: number; workRole: AgreementWorkRole; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkRole> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workroles'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesPost');
			}
			// verify required parameter 'workRole' is set
			if (params.workRole == null) {
				throw new Error('Missing required parameter workRole when calling financeAgreementsIdWorkrolesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.workRole),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Work Role By Id
		 * @param id
		 * @param workRoleId
		 */
		public financeAgreementsIdWorkrolesWorkRoleIdDelete (params: {  id: number; workRoleId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'workRoleId' + '}', String(params.workRoleId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdDelete');
			}
			// verify required parameter 'workRoleId' is set
			if (params.workRoleId == null) {
				throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Work Role By Id
		 * @param id
		 * @param workRoleId
		 */
		public financeAgreementsIdWorkrolesWorkRoleIdGet (params: {  id: number; workRoleId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkRole> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'workRoleId' + '}', String(params.workRoleId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdGet');
			}
			// verify required parameter 'workRoleId' is set
			if (params.workRoleId == null) {
				throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Work Role
		 * @param id
		 * @param workRoleId
		 * @param operations
		 */
		public financeAgreementsIdWorkrolesWorkRoleIdPatch (params: {  id: number; workRoleId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkRole> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'workRoleId' + '}', String(params.workRoleId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdPatch');
			}
			// verify required parameter 'workRoleId' is set
			if (params.workRoleId == null) {
				throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsIdWorkrolesWorkRoleIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Work Role
		 * @param id
		 * @param workRoleId
		 * @param workRole
		 */
		public financeAgreementsIdWorkrolesWorkRoleIdPut (params: {  id: number; workRoleId: number; workRole: AgreementWorkRole; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkRole> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'workRoleId' + '}', String(params.workRoleId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdPut');
			}
			// verify required parameter 'workRoleId' is set
			if (params.workRoleId == null) {
				throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdPut');
			}
			// verify required parameter 'workRole' is set
			if (params.workRole == null) {
				throw new Error('Missing required parameter workRole when calling financeAgreementsIdWorkrolesWorkRoleIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.workRole),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementWorkTypeExclusionsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Work Type Exclusions Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdWorkTypeExclusionsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Work Type Exclusions
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdWorkTypeExclusionsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<AgreementWorkTypeExclusion>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Work Type Exclusion
		 * @param id
		 * @param workTypeExclusion
		 */
		public financeAgreementsIdWorkTypeExclusionsPost (params: {  id: number; workTypeExclusion: AgreementWorkTypeExclusion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkTypeExclusion> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsPost');
			}
			// verify required parameter 'workTypeExclusion' is set
			if (params.workTypeExclusion == null) {
				throw new Error('Missing required parameter workTypeExclusion when calling financeAgreementsIdWorkTypeExclusionsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.workTypeExclusion),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Work Type Exclusion By Id
		 * @param id
		 * @param workTypeExclusionId
		 */
		public financeAgreementsIdWorkTypeExclusionsWorkTypeExclusionIdDelete (params: {  id: number; workTypeExclusionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions/{workTypeExclusionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'workTypeExclusionId' + '}', String(params.workTypeExclusionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsWorkTypeExclusionIdDelete');
			}
			// verify required parameter 'workTypeExclusionId' is set
			if (params.workTypeExclusionId == null) {
				throw new Error('Missing required parameter workTypeExclusionId when calling financeAgreementsIdWorkTypeExclusionsWorkTypeExclusionIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementWorkTypesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Work Types Count
		 * @param id
		 * @param conditions
		 */
		public financeAgreementsIdWorktypesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesCountGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Work Types
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdWorktypesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<AgreementWorkType>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/worktypes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Work Type
		 * @param id
		 * @param workType
		 */
		public financeAgreementsIdWorktypesPost (params: {  id: number; workType: AgreementWorkType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkType> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/worktypes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesPost');
			}
			// verify required parameter 'workType' is set
			if (params.workType == null) {
				throw new Error('Missing required parameter workType when calling financeAgreementsIdWorktypesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.workType),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Work Type By Id
		 * @param id
		 * @param worktypeId
		 */
		public financeAgreementsIdWorktypesWorktypeIdDelete (params: {  id: number; worktypeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'worktypeId' + '}', String(params.worktypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdDelete');
			}
			// verify required parameter 'worktypeId' is set
			if (params.worktypeId == null) {
				throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Work Type By Id
		 * @param id
		 * @param worktypeId
		 */
		public financeAgreementsIdWorktypesWorktypeIdGet (params: {  id: number; worktypeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkType> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'worktypeId' + '}', String(params.worktypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdGet');
			}
			// verify required parameter 'worktypeId' is set
			if (params.worktypeId == null) {
				throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Work Type
		 * @param id
		 * @param worktypeId
		 * @param operations
		 */
		public financeAgreementsIdWorktypesWorktypeIdPatch (params: {  id: number; worktypeId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkType> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'worktypeId' + '}', String(params.worktypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdPatch');
			}
			// verify required parameter 'worktypeId' is set
			if (params.worktypeId == null) {
				throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsIdWorktypesWorktypeIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Work Type
		 * @param id
		 * @param worktypeId
		 * @param workType
		 */
		public financeAgreementsIdWorktypesWorktypeIdPut (params: {  id: number; worktypeId: number; workType: AgreementWorkType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AgreementWorkType> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'worktypeId' + '}', String(params.worktypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdPut');
			}
			// verify required parameter 'worktypeId' is set
			if (params.worktypeId == null) {
				throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdPut');
			}
			// verify required parameter 'workType' is set
			if (params.workType == null) {
				throw new Error('Missing required parameter workType when calling financeAgreementsIdWorktypesWorktypeIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.workType),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class AgreementsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Agreements Count
		 * @param conditions
		 */
		public financeAgreementsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Agreements
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Agreement>> {
			const localVarPath = this.basePath + '/finance/agreements';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Configuration Association
		 * @param id
		 * @param configurationId
		 */
		public financeAgreementsIdConfigurationsConfigurationIdDelete (params: {  id: number; configurationId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/configurations/{configurationId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'configurationId' + '}', String(params.configurationId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsConfigurationIdDelete');
			}
			// verify required parameter 'configurationId' is set
			if (params.configurationId == null) {
				throw new Error('Missing required parameter configurationId when calling financeAgreementsIdConfigurationsConfigurationIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Configuration Association
		 * @param id
		 * @param configurationId
		 */
		public financeAgreementsIdConfigurationsConfigurationIdGet (params: {  id: number; configurationId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationReference> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/configurations/{configurationId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'configurationId' + '}', String(params.configurationId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsConfigurationIdGet');
			}
			// verify required parameter 'configurationId' is set
			if (params.configurationId == null) {
				throw new Error('Missing required parameter configurationId when calling financeAgreementsIdConfigurationsConfigurationIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Agreement Configurations Count
		 * @param id
		 */
		public financeAgreementsIdConfigurationsCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/configurations/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsCountGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Agreement Configurations
		 * @param id
		 * @param page
		 * @param pageSize
		 */
		public financeAgreementsIdConfigurationsGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ConfigurationReference>> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/configurations'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsGet');
			}
			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Configuration Association
		 * @param id
		 * @param configuration
		 */
		public financeAgreementsIdConfigurationsPost (params: {  id: number; configuration: ConfigurationReference; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationReference> {
			const localVarPath = this.basePath + '/finance/agreements/{id}/configurations'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsPost');
			}
			// verify required parameter 'configuration' is set
			if (params.configuration == null) {
				throw new Error('Missing required parameter configuration when calling financeAgreementsIdConfigurationsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.configuration),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Agreement By Id
		 * @param id
		 */
		public financeAgreementsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/agreements/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Agreement By Id
		 * @param id
		 */
		public financeAgreementsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Agreement> {
			const localVarPath = this.basePath + '/finance/agreements/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Agreement
		 * @param id
		 * @param operations
		 */
		public financeAgreementsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Agreement> {
			const localVarPath = this.basePath + '/finance/agreements/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeAgreementsIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Agreement
		 * @param id
		 * @param agreement
		 */
		public financeAgreementsIdPut (params: {  id: number; agreement: Agreement; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Agreement> {
			const localVarPath = this.basePath + '/finance/agreements/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeAgreementsIdPut');
			}
			// verify required parameter 'agreement' is set
			if (params.agreement == null) {
				throw new Error('Missing required parameter agreement when calling financeAgreementsIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.agreement),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Agreement
		 * @param agreement
		 */
		public financeAgreementsPost (params: {  agreement: Agreement; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Agreement> {
			const localVarPath = this.basePath + '/finance/agreements';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'agreement' is set
			if (params.agreement == null) {
				throw new Error('Missing required parameter agreement when calling financeAgreementsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.agreement),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class CurrenciesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Currencies Count
		 * @param conditions
		 */
		public financeCurrenciesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/currencies/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Currencies
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeCurrenciesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Currency>> {
			const localVarPath = this.basePath + '/finance/currencies';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Currency By Id
		 * @param id
		 */
		public financeCurrenciesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/currencies/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeCurrenciesIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Currency By Id
		 * @param id
		 */
		public financeCurrenciesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Currency> {
			const localVarPath = this.basePath + '/finance/currencies/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeCurrenciesIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Currency
		 * @param id
		 * @param operations
		 */
		public financeCurrenciesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Currency> {
			const localVarPath = this.basePath + '/finance/currencies/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeCurrenciesIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeCurrenciesIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Currency
		 * @param id
		 * @param currency
		 */
		public financeCurrenciesIdPut (params: {  id: number; currency: Currency; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Currency> {
			const localVarPath = this.basePath + '/finance/currencies/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeCurrenciesIdPut');
			}
			// verify required parameter 'currency' is set
			if (params.currency == null) {
				throw new Error('Missing required parameter currency when calling financeCurrenciesIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.currency),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Currency
		 * @param currency
		 */
		public financeCurrenciesPost (params: {  currency: Currency; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Currency> {
			const localVarPath = this.basePath + '/finance/currencies';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'currency' is set
			if (params.currency == null) {
				throw new Error('Missing required parameter currency when calling financeCurrenciesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.currency),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class InvoicePaymentsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Payments
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeInvoicesIdPaymentsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Payment>> {
			const localVarPath = this.basePath + '/finance/invoices/{id}/payments'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsGet');
			}
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Payment By Id
		 * @param id
		 * @param paymentId
		 */
		public financeInvoicesIdPaymentsPaymentIdDelete (params: {  id: number; paymentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'paymentId' + '}', String(params.paymentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdDelete');
			}
			// verify required parameter 'paymentId' is set
			if (params.paymentId == null) {
				throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Payment By Id
		 * @param id
		 * @param paymentId
		 */
		public financeInvoicesIdPaymentsPaymentIdGet (params: {  id: number; paymentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Payment> {
			const localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'paymentId' + '}', String(params.paymentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdGet');
			}
			// verify required parameter 'paymentId' is set
			if (params.paymentId == null) {
				throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Payment
		 * @param id
		 * @param paymentId
		 * @param operations
		 */
		public financeInvoicesIdPaymentsPaymentIdPatch (params: {  id: number; paymentId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Payment> {
			const localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'paymentId' + '}', String(params.paymentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdPatch');
			}
			// verify required parameter 'paymentId' is set
			if (params.paymentId == null) {
				throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeInvoicesIdPaymentsPaymentIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Payment
		 * @param id
		 * @param paymentId
		 * @param payment
		 */
		public financeInvoicesIdPaymentsPaymentIdPut (params: {  id: number; paymentId: number; payment: Payment; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Payment> {
			const localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'paymentId' + '}', String(params.paymentId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdPut');
			}
			// verify required parameter 'paymentId' is set
			if (params.paymentId == null) {
				throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdPut');
			}
			// verify required parameter 'payment' is set
			if (params.payment == null) {
				throw new Error('Missing required parameter payment when calling financeInvoicesIdPaymentsPaymentIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.payment),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Payment
		 * @param id
		 * @param payment
		 */
		public financeInvoicesIdPaymentsPost (params: {  id: number; payment: Payment; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Payment> {
			const localVarPath = this.basePath + '/finance/invoices/{id}/payments'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPost');
			}
			// verify required parameter 'payment' is set
			if (params.payment == null) {
				throw new Error('Missing required parameter payment when calling financeInvoicesIdPaymentsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.payment),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
//export namespace  {
	'use strict';

	export class InvoicesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Invoices Count
		 * @param conditions
		 */
		public financeInvoicesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/finance/invoices/count';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Invoices
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public financeInvoicesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Invoice>> {
			const localVarPath = this.basePath + '/finance/invoices';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			if (params.conditions !== undefined) {
				queryParameters['conditions'] = params.conditions;
			}

			if (params.orderBy !== undefined) {
				queryParameters['orderBy'] = params.orderBy;
			}

			if (params.page !== undefined) {
				queryParameters['page'] = params.page;
			}

			if (params.pageSize !== undefined) {
				queryParameters['pageSize'] = params.pageSize;
			}

			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Delete Invoice By Id
		 * @param id
		 */
		public financeInvoicesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/invoices/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdDelete');
			}
			let fetchParams = {
				method: 'DELETE',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Invoice By Id
		 * @param id
		 */
		public financeInvoicesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Invoice> {
			const localVarPath = this.basePath + '/finance/invoices/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Update Invoice
		 * @param id
		 * @param operations
		 */
		public financeInvoicesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Invoice> {
			const localVarPath = this.basePath + '/finance/invoices/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling financeInvoicesIdPatch');
			}
			let fetchParams = {
				method: 'PATCH',
				headers: headerParams,
				body: JSON.stringify(params.operations),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Get Invoice Pdf
		 * @param id
		 */
		public financeInvoicesIdPdfGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/finance/invoices/{id}/pdf'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPdfGet');
			}
			let fetchParams = {
				method: 'GET',
				headers: headerParams,

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Replace Invoice
		 * @param id
		 * @param invoice
		 */
		public financeInvoicesIdPut (params: {  id: number; invoice: Invoice; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Invoice> {
			const localVarPath = this.basePath + '/finance/invoices/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling financeInvoicesIdPut');
			}
			// verify required parameter 'invoice' is set
			if (params.invoice == null) {
				throw new Error('Missing required parameter invoice when calling financeInvoicesIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.invoice),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
		/**
		 *
		 * Create Invoice
		 * @param invoice
		 */
		public financeInvoicesPost (params: {  invoice: Invoice; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Invoice> {
			const localVarPath = this.basePath + '/finance/invoices';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'invoice' is set
			if (params.invoice == null) {
				throw new Error('Missing required parameter invoice when calling financeInvoicesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.invoice),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					var error = new Error(response.statusText);
					error['response'] = response;
					throw error;
				}
			});
		}
	}
//}
