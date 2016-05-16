import * as querystring from 'querystring';

import * as fetch from 'isomorphic-fetch';
import {assign} from './assign';


export interface AgreementReference {
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

export interface CatalogComponent {
    "id"?: number;
    "sequenceNumber"?: number;
    "quantity": number;
    "catalogItem": CatalogItemReference;
    "hidePriceFlag"?: boolean;
    "hideItemIdentifierFlag"?: boolean;
    "hideDescriptionFlag"?: boolean;
    "hideQuantityFlag"?: boolean;
    "parentCatalogItem"?: CatalogItemReference;
    "price"?: number;
    "cost"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CatalogItem {
    "id"?: number;
    "identifier": string;
    "description": string;
    "inactiveFlag"?: boolean;
    "subcategory": ProductSubCategoryReference;
    "type": ProductTypeReference;
    "productClass": ProductClassEnum;
    "serializedFlag"?: boolean;
    "serializedCostFlag"?: boolean;
    "phaseProductFlag"?: boolean;
    "unitOfMeasure"?: UnitOfMeasureReference;
    "minStockLevel"?: number;
    "price"?: number;
    "cost"?: number;
    "priceAttribute"?: PriceAttributeEnum;
    "taxableFlag"?: boolean;
    "customerDescription": string;
    "manufacturer"?: ManufacturerReference;
    "manufacturerPartNumber"?: string;
    "vendor"?: CompanyReference;
    "vendorSku"?: string;
    "notes"?: string;
    "integrationXRef"?: string;
    "dateEntered"?: string;
    "category"?: ProductCategoryReference;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum ProductClassEnum { 
    Agreement = <any> 'Agreement',
    Bundle = <any> 'Bundle',
    Inventory = <any> 'Inventory',
    NonInventory = <any> 'NonInventory',
    Service = <any> 'Service'
}

export enum PriceAttributeEnum { 
    FixedFee = <any> 'FixedFee',
    NotToExceed = <any> 'NotToExceed',
    TimeAndMaterials = <any> 'TimeAndMaterials',
    OverrideRate = <any> 'OverrideRate'
}
export interface CatalogItemReference {
    "id"?: number;
    "identifier"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Category {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;
    "priceLevelXref"?: string;
    "integrationXref"?: string;
    "locationIds"?: Array<number>;
    "addAllLocations"?: boolean;
    "removeAllLocations"?: boolean;

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

export interface CountryReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface EntityTypeReference {
    "id"?: number;
    "name"?: string;

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

export interface IvItemReference {
    "id"?: number;
    "identifier"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Manufacturer {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ManufacturerReference {
    "id"?: number;
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

export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}

export interface PricingBreak {
    "id"?: number;
    "detailId"?: number;
    "amount"?: number;
    "quantityStart"?: number;
    "quantityEnd"?: number;
    "priceMethod": PriceMethodEnum;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum PriceMethodEnum { 
    FlatRateForRange = <any> 'FlatRateForRange',
    PercentMarkupFromCost = <any> 'PercentMarkupFromCost',
    PercentMarkdownFromPrice = <any> 'PercentMarkdownFromPrice',
    PricePerUnit = <any> 'PricePerUnit'
}
export interface PricingDetail {
    "id"?: number;
    "product"?: CatalogItemReference;
    "category"?: ProductCategoryReference;
    "subCategory"?: ProductSubCategoryReference;
    "startDate": Date;
    "endDate"?: Date;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface PricingSchedule {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;
    "defaultFlag"?: boolean;
    "companies"?: Array<number>;
    "setAllCompaniesFlag"?: boolean;
    "removeAllCompaniesFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ProductCategoryReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ProductComponent {
    "id"?: number;
    "sequenceNumber"?: number;
    "quantity": number;
    "catalogItem": CatalogItemReference;
    "hidePriceFlag"?: boolean;
    "hideItemIdentifierFlag"?: boolean;
    "hideDescriptionFlag"?: boolean;
    "hideQuantityFlag"?: boolean;
    "vendor"?: CompanyReference;
    "parentProductItem"?: ProductItemReference;
    "productItem"?: ProductItemReference;
    "price"?: number;
    "cost"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ProductItem {
    "id"?: number;
    "catalogItem": CatalogItemReference;
    "chargeToId": number;
    "chargeToType": ChargeToTypeEnum;
    "description"?: string;
    "sequenceNumber"?: number;
    "quantity"?: number;
    "price"?: number;
    "cost"?: number;
    "discount"?: number;
    "priceMethod"?: PriceMethodEnum;
    "billableOption": BillableOptionEnum;
    "agreement"?: AgreementReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "vendor"?: CompanyReference;
    "taxableFlag"?: boolean;
    "dropshipFlag"?: boolean;
    "specialOrderFlag"?: boolean;
    "phaseProductFlag"?: boolean;
    "cancelledFlag"?: boolean;
    "quantityCancelled"?: number;
    "cancelledReason"?: string;
    "customerDescription"?: string;
    "internalNotes"?: string;
    "productSuppliedFlag"?: boolean;
    "subContractorShipToId"?: number;
    "subContractorAmountLimit"?: number;
    "recurring"?: ProductRecurring;
    "sla"?: SLAReference;
    "entityType"?: EntityTypeReference;
    "forecastDetailId"?: number;
    "cancelledBy"?: number;
    "cancelledDate"?: Date;
    "warehouse"?: string;
    "warehouseBin"?: string;
    "purchaseDate"?: Date;
    "integrationXRef"?: string;
    "listPrice"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "bypassForecastUpdate"?: boolean;
}


export enum ChargeToTypeEnum { 
    Ticket = <any> 'Ticket',
    Project = <any> 'Project',
    Invoice = <any> 'Invoice',
    Opportunity = <any> 'Opportunity',
    SalesOrder = <any> 'SalesOrder'
}

export enum PriceMethodEnum { 
    FlatRateForRange = <any> 'FlatRateForRange',
    PercentMarkupFromCost = <any> 'PercentMarkupFromCost',
    PercentMarkdownFromPrice = <any> 'PercentMarkdownFromPrice',
    PricePerUnit = <any> 'PricePerUnit'
}

export enum BillableOptionEnum { 
    Billable = <any> 'Billable',
    DoNotBill = <any> 'DoNotBill',
    NoCharge = <any> 'NoCharge'
}
export interface ProductItemReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ProductPickingShippingDetail {
    "id"?: number;
    "pickedQuantity": number;
    "shippedQuantity": number;
    "warehouse": WarehouseReference;
    "warehouseBin": WarehouseBinReference;
    "shipmentMethod"?: ShipmentMethodReference;
    "serialNumber"?: string;
    "serialNumberIds"?: Array<number>;
    "trackingNumber"?: string;
    "productItem"?: ProductItemReference;
    "lineNumber"?: number;
    "quantity"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ProductRecurring {
    "recurringRevenue": number;
    "recurringCost": number;
    "startDate": Date;
    "endDate": Date;
    "billCycleId": number;
    "cycles": number;
    "cycleType": CycleTypeEnum;
}


export enum CycleTypeEnum { 
    CalendarYear = <any> 'CalendarYear',
    ContractYear = <any> 'ContractYear'
}
export interface ProductSubCategoryReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ProductType {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;
    "typeXref"?: TypeXrefEnum;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum TypeXrefEnum { 
    InventoryPart = <any> 'InventoryPart',
    NonInventoryPart = <any> 'NonInventoryPart',
    OtherCharge = <any> 'OtherCharge',
    Service = <any> 'Service'
}
export interface ProductTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface PurchaseOrder {
    "id"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "businessUnitId"?: number;
    "cancelReason"?: string;
    "closedFlag"?: boolean;
    "customerCity"?: string;
    "customerCompany"?: CompanyReference;
    "customerContact"?: ContactReference;
    "customerCountry"?: CountryReference;
    "customerExtension"?: string;
    "customerName"?: string;
    "customerPhone"?: string;
    "customerSite"?: SiteReference;
    "customerSiteName"?: string;
    "customerState"?: string;
    "customerStreetLine1"?: string;
    "customerStreetLine2"?: string;
    "customerZip"?: string;
    "dateClosed"?: Date;
    "dropShipCustomerFlag"?: boolean;
    "enteredBy"?: string;
    "freightCost"?: number;
    "freightPackingSlip"?: string;
    "freightTaxTotal"?: number;
    "internalNotes"?: string;
    "locationId": number;
    "poDate"?: Date;
    "poNumber"?: string;
    "salesTax"?: number;
    "shipmentDate"?: Date;
    "shipmentMethod"?: ShipmentMethodReference;
    "shippingInstructions"?: string;
    "status": PurchaseOrderStatusReference;
    "subTotal"?: number;
    "taxCode"?: TaxCodeReference;
    "taxFreightFlag"?: boolean;
    "taxPoFlag"?: boolean;
    "terms": BillingTermsReference;
    "total"?: number;
    "trackingNumber"?: string;

    /**
     * Determines whether or not to update all of the shipment info for each associated line item when new shipment info is passed in
     */
    "updateShipmentInfo"?: boolean;

    /**
     * Determines whether or not to update vendor order number for each associated line item when new vendor order number is passed in
     */
    "updateVendorOrderNumber"?: boolean;
    "vendorCompany": CompanyReference;
    "vendorContact"?: ContactReference;
    "vendorInvoiceDate"?: Date;
    "vendorInvoiceNumber"?: string;
    "vendorOrderNumber"?: string;
    "vendorSite"?: SiteReference;
    "warehouse"?: WarehouseReference;
}

export interface PurchaseOrderLineItem {
    "id"?: number;
    "backorderedFlag"?: boolean;
    "canceledBy"?: string;
    "canceledFlag"?: boolean;
    "canceledReason"?: string;
    "closedFlag"?: boolean;
    "dateCanceled"?: Date;
    "description": string;
    "displayInternalNotesFlag"?: boolean;
    "expectedShipDate"?: Date;
    "internalNotes"?: string;
    "lineNumber": number;
    "packingSlip"?: string;
    "product": IvItemReference;
    "purchaseOrderId"?: number;
    "quantity": number;
    "receivedQuantity"?: number;
    "serialNumbers"?: string;
    "shipDate"?: Date;
    "shipmentMethod"?: ShipmentMethodReference;
    "tax"?: number;
    "trackingNumber"?: string;
    "unitCost"?: number;
    "unitOfMeasure": UnitOfMeasureReference;
    "vendorOrderNumber"?: string;
    "warehouse"?: WarehouseReference;
    "warehouseBin"?: WarehouseBinReference;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface PurchaseOrderStatusReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface SLAReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ShipmentMethod {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "trackingUrl"?: string;
    "shippingType"?: ShippingTypeEnum;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum ShippingTypeEnum { 
    None = <any> 'None',
    FedExTwoDay = <any> 'FedExTwoDay',
    FedExPriority = <any> 'FedExPriority',
    FedExGround = <any> 'FedExGround',
    UpsNextDay = <any> 'UpsNextDay',
    UpsSecondDay = <any> 'UpsSecondDay',
    UpsGround = <any> 'UpsGround',
    CourierService = <any> 'CourierService',
    UspsPriority = <any> 'UspsPriority',
    UspsExpress = <any> 'UspsExpress'
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

export interface SubCategory {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;

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

export interface UnitOfMeasureReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}

export interface WarehouseBinReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface WarehouseReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


//export namespace  {
    'use strict';

    export class CatalogComponentsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Delete Catalog Component By Id
         * @param id 
         * @param componentId 
         */
        public procurementCatalogIdComponentsComponentIdDelete (params: {  id: number; componentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsComponentIdDelete');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementCatalogIdComponentsComponentIdDelete');
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
         * Get Catalog Component By Id
         * @param id 
         * @param componentId 
         */
        public procurementCatalogIdComponentsComponentIdGet (params: {  id: number; componentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogComponent> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsComponentIdGet');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementCatalogIdComponentsComponentIdGet');
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
         * Update Catalog Component
         * @param id 
         * @param componentId 
         * @param operations 
         */
        public procurementCatalogIdComponentsComponentIdPatch (params: {  id: number; componentId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogComponent> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsComponentIdPatch');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementCatalogIdComponentsComponentIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementCatalogIdComponentsComponentIdPatch');
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
         * Replace Catalog Component
         * @param id 
         * @param componentId 
         * @param catalogComponent 
         */
        public procurementCatalogIdComponentsComponentIdPut (params: {  id: number; componentId: number; catalogComponent: CatalogComponent; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogComponent> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsComponentIdPut');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementCatalogIdComponentsComponentIdPut');
            }
            // verify required parameter 'catalogComponent' is set
            if (params.catalogComponent == null) {
                throw new Error('Missing required parameter catalogComponent when calling procurementCatalogIdComponentsComponentIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.catalogComponent),
                
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
         * Get Catalog Components Count
         * @param id 
         * @param conditions 
         */
        public procurementCatalogIdComponentsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}/components/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsCountGet');
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
         * Get Catalog Components
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementCatalogIdComponentsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CatalogComponent>> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}/components'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsGet');
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
         * Create Catalog Component
         * @param id 
         * @param catalogComponent 
         */
        public procurementCatalogIdComponentsPost (params: {  id: number; catalogComponent: CatalogComponent; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogComponent> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}/components'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsPost');
            }
            // verify required parameter 'catalogComponent' is set
            if (params.catalogComponent == null) {
                throw new Error('Missing required parameter catalogComponent when calling procurementCatalogIdComponentsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.catalogComponent),
                
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

    export class CatalogsItemApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Inventory Quantity On Hand
         * @param catalogItemIdentifier 
         * @param warehouseBinId 
         */
        public procurementCatalogCatalogItemIdentifierQuantityOnHandGet (params: {  catalogItemIdentifier: string; warehouseBinId?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/catalog/{catalogItemIdentifier}/quantityOnHand'
                .replace('{' + 'catalogItemIdentifier' + '}', String(params.catalogItemIdentifier));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'catalogItemIdentifier' is set
            if (params.catalogItemIdentifier == null) {
                throw new Error('Missing required parameter catalogItemIdentifier when calling procurementCatalogCatalogItemIdentifierQuantityOnHandGet');
            }
            if (params.warehouseBinId !== undefined) {
                queryParameters['warehouseBinId'] = params.warehouseBinId;
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
         * Get Catalogs Count
         * @param conditions 
         */
        public procurementCatalogCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/catalog/count';

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
         * Get Catalogs
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementCatalogGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CatalogItem>> {
            const localVarPath = this.basePath + '/procurement/catalog';

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
         * Delete Catalog By Id
         * @param id 
         */
        public procurementCatalogIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdDelete');
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
         * Get Catalog By Id
         * @param id 
         */
        public procurementCatalogIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogItem> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdGet');
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
         * Update Catalog
         * @param id 
         * @param operations 
         */
        public procurementCatalogIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogItem> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementCatalogIdPatch');
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
         * Replace Catalog
         * @param id 
         * @param catalogItem 
         */
        public procurementCatalogIdPut (params: {  id: number; catalogItem: CatalogItem; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogItem> {
            const localVarPath = this.basePath + '/procurement/catalog/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCatalogIdPut');
            }
            // verify required parameter 'catalogItem' is set
            if (params.catalogItem == null) {
                throw new Error('Missing required parameter catalogItem when calling procurementCatalogIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.catalogItem),
                
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
         * Create Catalog
         * @param catalogItem 
         */
        public procurementCatalogPost (params: {  catalogItem: CatalogItem; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CatalogItem> {
            const localVarPath = this.basePath + '/procurement/catalog';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'catalogItem' is set
            if (params.catalogItem == null) {
                throw new Error('Missing required parameter catalogItem when calling procurementCatalogPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.catalogItem),
                
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

    export class CategoriesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Categories Count
         * @param conditions 
         */
        public procurementCategoriesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/categories/count';

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
         * Get Categories
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementCategoriesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Category>> {
            const localVarPath = this.basePath + '/procurement/categories';

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
         * Delete Category By Id
         * @param id 
         */
        public procurementCategoriesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/categories/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdDelete');
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
         * Get Category By Id
         * @param id 
         */
        public procurementCategoriesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Category> {
            const localVarPath = this.basePath + '/procurement/categories/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdGet');
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
         * Update Category
         * @param id 
         * @param operations 
         */
        public procurementCategoriesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Category> {
            const localVarPath = this.basePath + '/procurement/categories/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementCategoriesIdPatch');
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
         * Replace Category
         * @param id 
         * @param category 
         */
        public procurementCategoriesIdPut (params: {  id: number; category: Category; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Category> {
            const localVarPath = this.basePath + '/procurement/categories/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdPut');
            }
            // verify required parameter 'category' is set
            if (params.category == null) {
                throw new Error('Missing required parameter category when calling procurementCategoriesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.category),
                
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
         * Create Category
         * @param category 
         */
        public procurementCategoriesPost (params: {  category: Category; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Category> {
            const localVarPath = this.basePath + '/procurement/categories';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'category' is set
            if (params.category == null) {
                throw new Error('Missing required parameter category when calling procurementCategoriesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.category),
                
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

    export class ManufacturersApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Manufacturers Count
         * @param conditions 
         */
        public procurementManufacturersCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/manufacturers/count';

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
         * Get Manufacturers
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementManufacturersGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Manufacturer>> {
            const localVarPath = this.basePath + '/procurement/manufacturers';

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
         * Delete Manufacturer By Id
         * @param id 
         */
        public procurementManufacturersIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/manufacturers/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementManufacturersIdDelete');
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
         * Get Manufacturer By Id
         * @param id 
         */
        public procurementManufacturersIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Manufacturer> {
            const localVarPath = this.basePath + '/procurement/manufacturers/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementManufacturersIdGet');
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
         * Update Manufacturer
         * @param id 
         * @param operations 
         */
        public procurementManufacturersIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Manufacturer> {
            const localVarPath = this.basePath + '/procurement/manufacturers/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementManufacturersIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementManufacturersIdPatch');
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
         * Replace Manufacturer
         * @param id 
         * @param manufacturer 
         */
        public procurementManufacturersIdPut (params: {  id: number; manufacturer: Manufacturer; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Manufacturer> {
            const localVarPath = this.basePath + '/procurement/manufacturers/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementManufacturersIdPut');
            }
            // verify required parameter 'manufacturer' is set
            if (params.manufacturer == null) {
                throw new Error('Missing required parameter manufacturer when calling procurementManufacturersIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.manufacturer),
                
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
         * Create Manufacturer
         * @param manufacturer 
         */
        public procurementManufacturersPost (params: {  manufacturer: Manufacturer; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Manufacturer> {
            const localVarPath = this.basePath + '/procurement/manufacturers';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'manufacturer' is set
            if (params.manufacturer == null) {
                throw new Error('Missing required parameter manufacturer when calling procurementManufacturersPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.manufacturer),
                
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

    export class PricingBreaksApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Delete Pricing Break By Id
         * @param schedId 
         * @param detailId 
         * @param breakId 
         */
        public procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdDelete (params: {  schedId: number; detailId: number; breakId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
                .replace('{' + 'schedId' + '}', String(params.schedId))
                .replace('{' + 'detailId' + '}', String(params.detailId))
                .replace('{' + 'breakId' + '}', String(params.breakId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'schedId' is set
            if (params.schedId == null) {
                throw new Error('Missing required parameter schedId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdDelete');
            }
            // verify required parameter 'detailId' is set
            if (params.detailId == null) {
                throw new Error('Missing required parameter detailId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdDelete');
            }
            // verify required parameter 'breakId' is set
            if (params.breakId == null) {
                throw new Error('Missing required parameter breakId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdDelete');
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
         * Get Pricing Break By Id
         * @param schedId 
         * @param detailId 
         * @param breakId 
         */
        public procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdGet (params: {  schedId: number; detailId: number; breakId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingBreak> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
                .replace('{' + 'schedId' + '}', String(params.schedId))
                .replace('{' + 'detailId' + '}', String(params.detailId))
                .replace('{' + 'breakId' + '}', String(params.breakId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'schedId' is set
            if (params.schedId == null) {
                throw new Error('Missing required parameter schedId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdGet');
            }
            // verify required parameter 'detailId' is set
            if (params.detailId == null) {
                throw new Error('Missing required parameter detailId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdGet');
            }
            // verify required parameter 'breakId' is set
            if (params.breakId == null) {
                throw new Error('Missing required parameter breakId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdGet');
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
         * Update Pricing Break
         * @param schedId 
         * @param detailId 
         * @param breakId 
         * @param operations 
         */
        public procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPatch (params: {  schedId: number; detailId: number; breakId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingBreak> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
                .replace('{' + 'schedId' + '}', String(params.schedId))
                .replace('{' + 'detailId' + '}', String(params.detailId))
                .replace('{' + 'breakId' + '}', String(params.breakId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'schedId' is set
            if (params.schedId == null) {
                throw new Error('Missing required parameter schedId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPatch');
            }
            // verify required parameter 'detailId' is set
            if (params.detailId == null) {
                throw new Error('Missing required parameter detailId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPatch');
            }
            // verify required parameter 'breakId' is set
            if (params.breakId == null) {
                throw new Error('Missing required parameter breakId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPatch');
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
         * Replace Pricing Break
         * @param schedId 
         * @param detailId 
         * @param breakId 
         * @param pricingBreak 
         */
        public procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPut (params: {  schedId: number; detailId: number; breakId: number; pricingBreak: PricingBreak; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingBreak> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
                .replace('{' + 'schedId' + '}', String(params.schedId))
                .replace('{' + 'detailId' + '}', String(params.detailId))
                .replace('{' + 'breakId' + '}', String(params.breakId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'schedId' is set
            if (params.schedId == null) {
                throw new Error('Missing required parameter schedId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPut');
            }
            // verify required parameter 'detailId' is set
            if (params.detailId == null) {
                throw new Error('Missing required parameter detailId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPut');
            }
            // verify required parameter 'breakId' is set
            if (params.breakId == null) {
                throw new Error('Missing required parameter breakId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPut');
            }
            // verify required parameter 'pricingBreak' is set
            if (params.pricingBreak == null) {
                throw new Error('Missing required parameter pricingBreak when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.pricingBreak),
                
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
         * Get Pricing Break Count
         * @param schedId 
         * @param detailId 
         * @param conditions 
         */
        public procurementPricingschedulesSchedIdDetailsDetailIdBreaksCountGet (params: {  schedId: number; detailId: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/count'
                .replace('{' + 'schedId' + '}', String(params.schedId))
                .replace('{' + 'detailId' + '}', String(params.detailId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'schedId' is set
            if (params.schedId == null) {
                throw new Error('Missing required parameter schedId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksCountGet');
            }
            // verify required parameter 'detailId' is set
            if (params.detailId == null) {
                throw new Error('Missing required parameter detailId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksCountGet');
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
         * Get Pricing Break
         * @param schedId 
         * @param detailId 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementPricingschedulesSchedIdDetailsDetailIdBreaksGet (params: {  schedId: number; detailId: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<PricingBreak>> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks'
                .replace('{' + 'schedId' + '}', String(params.schedId))
                .replace('{' + 'detailId' + '}', String(params.detailId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'schedId' is set
            if (params.schedId == null) {
                throw new Error('Missing required parameter schedId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksGet');
            }
            // verify required parameter 'detailId' is set
            if (params.detailId == null) {
                throw new Error('Missing required parameter detailId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksGet');
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
         * Create Pricing Break
         * @param schedId 
         * @param detailId 
         * @param pricingBreak 
         */
        public procurementPricingschedulesSchedIdDetailsDetailIdBreaksPost (params: {  schedId: number; detailId: number; pricingBreak: PricingBreak; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingBreak> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks'
                .replace('{' + 'schedId' + '}', String(params.schedId))
                .replace('{' + 'detailId' + '}', String(params.detailId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'schedId' is set
            if (params.schedId == null) {
                throw new Error('Missing required parameter schedId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksPost');
            }
            // verify required parameter 'detailId' is set
            if (params.detailId == null) {
                throw new Error('Missing required parameter detailId when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksPost');
            }
            // verify required parameter 'pricingBreak' is set
            if (params.pricingBreak == null) {
                throw new Error('Missing required parameter pricingBreak when calling procurementPricingschedulesSchedIdDetailsDetailIdBreaksPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.pricingBreak),
                
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

    export class PricingDetailsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Pricing Detail Count
         * @param id 
         * @param conditions 
         */
        public procurementPricingschedulesIdDetailsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsCountGet');
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
         * Delete Pricing Detail By Id
         * @param id 
         * @param detailID 
         */
        public procurementPricingschedulesIdDetailsDetailIDDelete (params: {  id: number; detailID: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'detailID' + '}', String(params.detailID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsDetailIDDelete');
            }
            // verify required parameter 'detailID' is set
            if (params.detailID == null) {
                throw new Error('Missing required parameter detailID when calling procurementPricingschedulesIdDetailsDetailIDDelete');
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
         * Get Pricing Detail By Id
         * @param id 
         * @param detailID 
         */
        public procurementPricingschedulesIdDetailsDetailIDGet (params: {  id: number; detailID: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingDetail> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'detailID' + '}', String(params.detailID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsDetailIDGet');
            }
            // verify required parameter 'detailID' is set
            if (params.detailID == null) {
                throw new Error('Missing required parameter detailID when calling procurementPricingschedulesIdDetailsDetailIDGet');
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
         * Update Pricing Detail
         * @param id 
         * @param detailID 
         * @param operations 
         */
        public procurementPricingschedulesIdDetailsDetailIDPatch (params: {  id: number; detailID: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingDetail> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'detailID' + '}', String(params.detailID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsDetailIDPatch');
            }
            // verify required parameter 'detailID' is set
            if (params.detailID == null) {
                throw new Error('Missing required parameter detailID when calling procurementPricingschedulesIdDetailsDetailIDPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementPricingschedulesIdDetailsDetailIDPatch');
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
         * Replace Pricing Detail
         * @param id 
         * @param detailID 
         * @param pricingDetail 
         */
        public procurementPricingschedulesIdDetailsDetailIDPut (params: {  id: number; detailID: number; pricingDetail: PricingDetail; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingDetail> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'detailID' + '}', String(params.detailID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsDetailIDPut');
            }
            // verify required parameter 'detailID' is set
            if (params.detailID == null) {
                throw new Error('Missing required parameter detailID when calling procurementPricingschedulesIdDetailsDetailIDPut');
            }
            // verify required parameter 'pricingDetail' is set
            if (params.pricingDetail == null) {
                throw new Error('Missing required parameter pricingDetail when calling procurementPricingschedulesIdDetailsDetailIDPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.pricingDetail),
                
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
         * Get Pricing Detail
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementPricingschedulesIdDetailsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<PricingDetail>> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsGet');
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
         * Create Pricing Detail
         * @param id 
         * @param pricingDetail 
         */
        public procurementPricingschedulesIdDetailsPost (params: {  id: number; pricingDetail: PricingDetail; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingDetail> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsPost');
            }
            // verify required parameter 'pricingDetail' is set
            if (params.pricingDetail == null) {
                throw new Error('Missing required parameter pricingDetail when calling procurementPricingschedulesIdDetailsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.pricingDetail),
                
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

    export class PricingSchedulesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Pricing Schedules Count
         * @param conditions 
         */
        public procurementPricingschedulesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/count';

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
         * Get Pricing Schedules
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementPricingschedulesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<PricingSchedule>> {
            const localVarPath = this.basePath + '/procurement/pricingschedules';

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
         * Delete Pricing Schedule By Id
         * @param id 
         */
        public procurementPricingschedulesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDelete');
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
         * Get Pricing Schedule By Id
         * @param id 
         */
        public procurementPricingschedulesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingSchedule> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdGet');
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
         * Update Pricing Schedule
         * @param id 
         * @param operations 
         */
        public procurementPricingschedulesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingSchedule> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementPricingschedulesIdPatch');
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
         * Replace Pricing Schedule
         * @param id 
         * @param pricingSchedule 
         */
        public procurementPricingschedulesIdPut (params: {  id: number; pricingSchedule: PricingSchedule; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingSchedule> {
            const localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPricingschedulesIdPut');
            }
            // verify required parameter 'pricingSchedule' is set
            if (params.pricingSchedule == null) {
                throw new Error('Missing required parameter pricingSchedule when calling procurementPricingschedulesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.pricingSchedule),
                
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
         * Create Pricing Schedule
         * @param pricingSchedule 
         */
        public procurementPricingschedulesPost (params: {  pricingSchedule: PricingSchedule; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PricingSchedule> {
            const localVarPath = this.basePath + '/procurement/pricingschedules';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'pricingSchedule' is set
            if (params.pricingSchedule == null) {
                throw new Error('Missing required parameter pricingSchedule when calling procurementPricingschedulesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.pricingSchedule),
                
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

    export class ProductComponentsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Delete Product Component By Id
         * @param id 
         * @param componentId 
         */
        public procurementProductsIdComponentsComponentIdDelete (params: {  id: number; componentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdComponentsComponentIdDelete');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementProductsIdComponentsComponentIdDelete');
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
         * Get Product Component By Id
         * @param id 
         * @param componentId 
         */
        public procurementProductsIdComponentsComponentIdGet (params: {  id: number; componentId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductComponent>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdComponentsComponentIdGet');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementProductsIdComponentsComponentIdGet');
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
         * Update Product Component
         * @param id 
         * @param componentId 
         * @param operations 
         */
        public procurementProductsIdComponentsComponentIdPatch (params: {  id: number; componentId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductComponent>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdComponentsComponentIdPatch');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementProductsIdComponentsComponentIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementProductsIdComponentsComponentIdPatch');
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
         * Replace Product Component
         * @param id 
         * @param componentId 
         * @param productComponent 
         */
        public procurementProductsIdComponentsComponentIdPut (params: {  id: number; componentId: number; productComponent: ProductComponent; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductComponent>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'componentId' + '}', String(params.componentId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdComponentsComponentIdPut');
            }
            // verify required parameter 'componentId' is set
            if (params.componentId == null) {
                throw new Error('Missing required parameter componentId when calling procurementProductsIdComponentsComponentIdPut');
            }
            // verify required parameter 'productComponent' is set
            if (params.productComponent == null) {
                throw new Error('Missing required parameter productComponent when calling procurementProductsIdComponentsComponentIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.productComponent),
                
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
         * Get Product Components Count
         * @param id 
         * @param conditions 
         */
        public procurementProductsIdComponentsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/products/{id}/components/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdComponentsCountGet');
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
         * Get Product Components
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementProductsIdComponentsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductComponent>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/components'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdComponentsGet');
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
         * Create Product Component
         * @param id 
         * @param productComponent 
         */
        public procurementProductsIdComponentsPost (params: {  id: number; productComponent: ProductComponent; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductComponent>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/components'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdComponentsPost');
            }
            // verify required parameter 'productComponent' is set
            if (params.productComponent == null) {
                throw new Error('Missing required parameter productComponent when calling procurementProductsIdComponentsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.productComponent),
                
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

    export class ProductPickingShippingDetailsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Product Picking Shipping Details Count
         * @param id 
         * @param conditions 
         */
        public procurementProductsIdPickingShippingDetailsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsCountGet');
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
         * Get Product Picking Shipping Details
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementProductsIdPickingShippingDetailsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductPickingShippingDetail>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsGet');
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
         * Delete Products By Id
         * @param id 
         * @param pickingShippingDetailId 
         */
        public procurementProductsIdPickingShippingDetailsPickingShippingDetailIdDelete (params: {  id: number; pickingShippingDetailId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdDelete');
            }
            // verify required parameter 'pickingShippingDetailId' is set
            if (params.pickingShippingDetailId == null) {
                throw new Error('Missing required parameter pickingShippingDetailId when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdDelete');
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
         * Get Products By Id
         * @param id 
         * @param pickingShippingDetailId 
         */
        public procurementProductsIdPickingShippingDetailsPickingShippingDetailIdGet (params: {  id: number; pickingShippingDetailId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductPickingShippingDetail>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdGet');
            }
            // verify required parameter 'pickingShippingDetailId' is set
            if (params.pickingShippingDetailId == null) {
                throw new Error('Missing required parameter pickingShippingDetailId when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdGet');
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
         * Update Products
         * @param id 
         * @param pickingShippingDetailId 
         * @param operations 
         */
        public procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPatch (params: {  id: number; pickingShippingDetailId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductPickingShippingDetail>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPatch');
            }
            // verify required parameter 'pickingShippingDetailId' is set
            if (params.pickingShippingDetailId == null) {
                throw new Error('Missing required parameter pickingShippingDetailId when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPatch');
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
         * Replace Products
         * @param id 
         * @param pickingShippingDetailId 
         * @param productPickingShippingDetails 
         */
        public procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPut (params: {  id: number; pickingShippingDetailId: number; productPickingShippingDetails: ProductPickingShippingDetail; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductPickingShippingDetail>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPut');
            }
            // verify required parameter 'pickingShippingDetailId' is set
            if (params.pickingShippingDetailId == null) {
                throw new Error('Missing required parameter pickingShippingDetailId when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPut');
            }
            // verify required parameter 'productPickingShippingDetails' is set
            if (params.productPickingShippingDetails == null) {
                throw new Error('Missing required parameter productPickingShippingDetails when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.productPickingShippingDetails),
                
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
         * Create Product Picking Shipping Detail
         * @param id 
         * @param productPickingShippingDetails 
         */
        public procurementProductsIdPickingShippingDetailsPost (params: {  id: number; productPickingShippingDetails: ProductPickingShippingDetail; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductPickingShippingDetail>> {
            const localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPost');
            }
            // verify required parameter 'productPickingShippingDetails' is set
            if (params.productPickingShippingDetails == null) {
                throw new Error('Missing required parameter productPickingShippingDetails when calling procurementProductsIdPickingShippingDetailsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.productPickingShippingDetails),
                
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

    export class ProductTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Product Typess Count
         * @param conditions 
         */
        public procurementTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/types/count';

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
         * Get Product Typess
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductType>> {
            const localVarPath = this.basePath + '/procurement/types';

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
         * Delete Product Types By Id
         * @param id 
         */
        public procurementTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementTypesIdDelete');
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
         * Get Product Types By Id
         * @param id 
         */
        public procurementTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductType> {
            const localVarPath = this.basePath + '/procurement/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementTypesIdGet');
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
         * Update Product Types
         * @param id 
         * @param operations 
         */
        public procurementTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductType> {
            const localVarPath = this.basePath + '/procurement/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementTypesIdPatch');
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
         * Replace Product Types
         * @param id 
         * @param productTypes 
         */
        public procurementTypesIdPut (params: {  id: number; productTypes: ProductType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductType> {
            const localVarPath = this.basePath + '/procurement/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementTypesIdPut');
            }
            // verify required parameter 'productTypes' is set
            if (params.productTypes == null) {
                throw new Error('Missing required parameter productTypes when calling procurementTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.productTypes),
                
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
         * Create Product Types
         * @param productTypes 
         */
        public procurementTypesPost (params: {  productTypes: ProductType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductType> {
            const localVarPath = this.basePath + '/procurement/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'productTypes' is set
            if (params.productTypes == null) {
                throw new Error('Missing required parameter productTypes when calling procurementTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.productTypes),
                
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

    export class ProductsItemApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Products Count
         * @param conditions 
         */
        public procurementProductsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/products/count';

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
         * Get Products
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementProductsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductItem>> {
            const localVarPath = this.basePath + '/procurement/products';

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
         * Delete Product By Id
         * @param id 
         */
        public procurementProductsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/products/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdDelete');
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
         * Get Product By Id
         * @param id 
         */
        public procurementProductsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductItem> {
            const localVarPath = this.basePath + '/procurement/products/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdGet');
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
         * Update Product
         * @param id 
         * @param operations 
         */
        public procurementProductsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductItem> {
            const localVarPath = this.basePath + '/procurement/products/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementProductsIdPatch');
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
         * Replace Product
         * @param id 
         * @param productItem 
         */
        public procurementProductsIdPut (params: {  id: number; productItem: ProductItem; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductItem> {
            const localVarPath = this.basePath + '/procurement/products/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementProductsIdPut');
            }
            // verify required parameter 'productItem' is set
            if (params.productItem == null) {
                throw new Error('Missing required parameter productItem when calling procurementProductsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.productItem),
                
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
         * Create Product
         * @param productItem 
         */
        public procurementProductsPost (params: {  productItem: ProductItem; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProductItem> {
            const localVarPath = this.basePath + '/procurement/products';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'productItem' is set
            if (params.productItem == null) {
                throw new Error('Missing required parameter productItem when calling procurementProductsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.productItem),
                
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

    export class PurchaseOrderLineItemsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Purchase Order Line Items Count
         * @param id 
         * @param conditions 
         */
        public procurementPurchaseordersIdPurchaseorderlineitemsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsCountGet');
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
         * Get Purchase Order Line Items
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementPurchaseordersIdPurchaseorderlineitemsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<PurchaseOrderLineItem>> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsGet');
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
         * Delete Purchase Order Line Item By Id
         * @param id 
         * @param lineItemId 
         */
        public procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdDelete (params: {  id: number; lineItemId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'lineItemId' + '}', String(params.lineItemId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdDelete');
            }
            // verify required parameter 'lineItemId' is set
            if (params.lineItemId == null) {
                throw new Error('Missing required parameter lineItemId when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdDelete');
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
         * Get Purchase Order Line Item By Id
         * @param id 
         * @param lineItemId 
         */
        public procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdGet (params: {  id: number; lineItemId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrderLineItem> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'lineItemId' + '}', String(params.lineItemId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdGet');
            }
            // verify required parameter 'lineItemId' is set
            if (params.lineItemId == null) {
                throw new Error('Missing required parameter lineItemId when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdGet');
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
         * Update Purchase Order Line Item
         * @param id 
         * @param lineItemId 
         * @param operations 
         */
        public procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPatch (params: {  id: number; lineItemId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrderLineItem> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'lineItemId' + '}', String(params.lineItemId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPatch');
            }
            // verify required parameter 'lineItemId' is set
            if (params.lineItemId == null) {
                throw new Error('Missing required parameter lineItemId when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPatch');
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
         * Replace Purchase Order Line Item
         * @param id 
         * @param lineItemId 
         * @param purchaseOrderLineItem 
         */
        public procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPut (params: {  id: number; lineItemId: number; purchaseOrderLineItem: PurchaseOrderLineItem; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrderLineItem> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'lineItemId' + '}', String(params.lineItemId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPut');
            }
            // verify required parameter 'lineItemId' is set
            if (params.lineItemId == null) {
                throw new Error('Missing required parameter lineItemId when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPut');
            }
            // verify required parameter 'purchaseOrderLineItem' is set
            if (params.purchaseOrderLineItem == null) {
                throw new Error('Missing required parameter purchaseOrderLineItem when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.purchaseOrderLineItem),
                
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
         * Create Purchase Order Line Item
         * @param id 
         * @param purchaseOrderLineItem 
         */
        public procurementPurchaseordersIdPurchaseorderlineitemsPost (params: {  id: number; purchaseOrderLineItem: PurchaseOrderLineItem; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrderLineItem> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsPost');
            }
            // verify required parameter 'purchaseOrderLineItem' is set
            if (params.purchaseOrderLineItem == null) {
                throw new Error('Missing required parameter purchaseOrderLineItem when calling procurementPurchaseordersIdPurchaseorderlineitemsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.purchaseOrderLineItem),
                
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

    export class PurchaseOrdersApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Purchase Orders Count
         * @param conditions 
         */
        public procurementPurchaseordersCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/count';

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
         * Get Purchase Orders
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementPurchaseordersGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<PurchaseOrder>> {
            const localVarPath = this.basePath + '/procurement/purchaseorders';

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
         * Delete Purchase Order By Id
         * @param id 
         */
        public procurementPurchaseordersIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdDelete');
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
         * Get Purchase Order By Id
         * @param id 
         */
        public procurementPurchaseordersIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrder> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdGet');
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
         * Update Purchase Order
         * @param id 
         * @param operations 
         */
        public procurementPurchaseordersIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrder> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementPurchaseordersIdPatch');
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
         * Replace Purchase Order
         * @param id 
         * @param purchaseOrder 
         */
        public procurementPurchaseordersIdPut (params: {  id: number; purchaseOrder: PurchaseOrder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrder> {
            const localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPut');
            }
            // verify required parameter 'purchaseOrder' is set
            if (params.purchaseOrder == null) {
                throw new Error('Missing required parameter purchaseOrder when calling procurementPurchaseordersIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.purchaseOrder),
                
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
         * Create Purchase Order
         * @param purchaseOrder 
         */
        public procurementPurchaseordersPost (params: {  purchaseOrder: PurchaseOrder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PurchaseOrder> {
            const localVarPath = this.basePath + '/procurement/purchaseorders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'purchaseOrder' is set
            if (params.purchaseOrder == null) {
                throw new Error('Missing required parameter purchaseOrder when calling procurementPurchaseordersPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.purchaseOrder),
                
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

    export class ShipmentMethodsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Shipment Methods Count
         * @param conditions 
         */
        public procurementShipmentmethodsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/shipmentmethods/count';

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
         * Get Shipment Methods
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementShipmentmethodsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ShipmentMethod>> {
            const localVarPath = this.basePath + '/procurement/shipmentmethods';

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
         * Delete Shipment Method By Id
         * @param id 
         */
        public procurementShipmentmethodsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdDelete');
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
         * Get Shipment Method By Id
         * @param id 
         */
        public procurementShipmentmethodsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ShipmentMethod> {
            const localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdGet');
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
         * Update Shipment Method
         * @param id 
         * @param operations 
         */
        public procurementShipmentmethodsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ShipmentMethod> {
            const localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementShipmentmethodsIdPatch');
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
         * Replace Shipment Method
         * @param id 
         * @param shipmentMethod 
         */
        public procurementShipmentmethodsIdPut (params: {  id: number; shipmentMethod: ShipmentMethod; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ShipmentMethod> {
            const localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdPut');
            }
            // verify required parameter 'shipmentMethod' is set
            if (params.shipmentMethod == null) {
                throw new Error('Missing required parameter shipmentMethod when calling procurementShipmentmethodsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.shipmentMethod),
                
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
         * Create Shipment Method
         * @param shipmentMethod 
         */
        public procurementShipmentmethodsPost (params: {  shipmentMethod: ShipmentMethod; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ShipmentMethod> {
            const localVarPath = this.basePath + '/procurement/shipmentmethods';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'shipmentMethod' is set
            if (params.shipmentMethod == null) {
                throw new Error('Missing required parameter shipmentMethod when calling procurementShipmentmethodsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.shipmentMethod),
                
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

    export class SubCategoriesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Sub Categories Count
         * @param id 
         * @param conditions 
         */
        public procurementCategoriesIdSubcategoriesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesCountGet');
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
         * Get Sub Categories
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public procurementCategoriesIdSubcategoriesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<SubCategory>> {
            const localVarPath = this.basePath + '/procurement/categories/{id}/subcategories'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesGet');
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
         * Create Sub Category
         * @param id 
         * @param subCategory 
         */
        public procurementCategoriesIdSubcategoriesPost (params: {  id: number; subCategory: SubCategory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubCategory> {
            const localVarPath = this.basePath + '/procurement/categories/{id}/subcategories'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesPost');
            }
            // verify required parameter 'subCategory' is set
            if (params.subCategory == null) {
                throw new Error('Missing required parameter subCategory when calling procurementCategoriesIdSubcategoriesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.subCategory),
                
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
         * Delete Sub Category By Id
         * @param id 
         * @param subcategoryID 
         */
        public procurementCategoriesIdSubcategoriesSubcategoryIDDelete (params: {  id: number; subcategoryID: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesSubcategoryIDDelete');
            }
            // verify required parameter 'subcategoryID' is set
            if (params.subcategoryID == null) {
                throw new Error('Missing required parameter subcategoryID when calling procurementCategoriesIdSubcategoriesSubcategoryIDDelete');
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
         * Get Sub Category By Id
         * @param id 
         * @param subcategoryID 
         */
        public procurementCategoriesIdSubcategoriesSubcategoryIDGet (params: {  id: number; subcategoryID: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubCategory> {
            const localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesSubcategoryIDGet');
            }
            // verify required parameter 'subcategoryID' is set
            if (params.subcategoryID == null) {
                throw new Error('Missing required parameter subcategoryID when calling procurementCategoriesIdSubcategoriesSubcategoryIDGet');
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
         * Update Sub Category
         * @param id 
         * @param subcategoryID 
         * @param operations 
         */
        public procurementCategoriesIdSubcategoriesSubcategoryIDPatch (params: {  id: number; subcategoryID: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubCategory> {
            const localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesSubcategoryIDPatch');
            }
            // verify required parameter 'subcategoryID' is set
            if (params.subcategoryID == null) {
                throw new Error('Missing required parameter subcategoryID when calling procurementCategoriesIdSubcategoriesSubcategoryIDPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling procurementCategoriesIdSubcategoriesSubcategoryIDPatch');
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
         * Replace Sub Category
         * @param id 
         * @param subcategoryID 
         * @param subCategory 
         */
        public procurementCategoriesIdSubcategoriesSubcategoryIDPut (params: {  id: number; subcategoryID: number; subCategory: SubCategory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubCategory> {
            const localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesSubcategoryIDPut');
            }
            // verify required parameter 'subcategoryID' is set
            if (params.subcategoryID == null) {
                throw new Error('Missing required parameter subcategoryID when calling procurementCategoriesIdSubcategoriesSubcategoryIDPut');
            }
            // verify required parameter 'subCategory' is set
            if (params.subCategory == null) {
                throw new Error('Missing required parameter subCategory when calling procurementCategoriesIdSubcategoriesSubcategoryIDPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.subCategory),
                
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
