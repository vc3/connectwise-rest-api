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
export declare enum ProductClassEnum {
    Agreement,
    Bundle,
    Inventory,
    NonInventory,
    Service,
}
export declare enum PriceAttributeEnum {
    FixedFee,
    NotToExceed,
    TimeAndMaterials,
    OverrideRate,
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
export declare enum PriceMethodEnum {
    FlatRateForRange,
    PercentMarkupFromCost,
    PercentMarkdownFromPrice,
    PricePerUnit,
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
export declare enum ChargeToTypeEnum {
    Ticket,
    Project,
    Invoice,
    Opportunity,
    SalesOrder,
}
export declare enum PriceMethodEnum {
    FlatRateForRange,
    PercentMarkupFromCost,
    PercentMarkdownFromPrice,
    PricePerUnit,
}
export declare enum BillableOptionEnum {
    Billable,
    DoNotBill,
    NoCharge,
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
export declare enum CycleTypeEnum {
    CalendarYear,
    ContractYear,
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
export declare enum TypeXrefEnum {
    InventoryPart,
    NonInventoryPart,
    OtherCharge,
    Service,
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
export declare enum ShippingTypeEnum {
    None,
    FedExTwoDay,
    FedExPriority,
    FedExGround,
    UpsNextDay,
    UpsSecondDay,
    UpsGround,
    CourierService,
    UspsPriority,
    UspsExpress,
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
export declare class CatalogComponentsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Catalog Component By Id
     * @param id
     * @param componentId
     */
    procurementCatalogIdComponentsComponentIdDelete(params: {
        id: number;
        componentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Catalog Component By Id
     * @param id
     * @param componentId
     */
    procurementCatalogIdComponentsComponentIdGet(params: {
        id: number;
        componentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogComponent>;
    /**
     *
     * Update Catalog Component
     * @param id
     * @param componentId
     * @param operations
     */
    procurementCatalogIdComponentsComponentIdPatch(params: {
        id: number;
        componentId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogComponent>;
    /**
     *
     * Replace Catalog Component
     * @param id
     * @param componentId
     * @param catalogComponent
     */
    procurementCatalogIdComponentsComponentIdPut(params: {
        id: number;
        componentId: number;
        catalogComponent: CatalogComponent;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogComponent>;
    /**
     *
     * Get Catalog Components Count
     * @param id
     * @param conditions
     */
    procurementCatalogIdComponentsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Catalog Components
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementCatalogIdComponentsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CatalogComponent>>;
    /**
     *
     * Create Catalog Component
     * @param id
     * @param catalogComponent
     */
    procurementCatalogIdComponentsPost(params: {
        id: number;
        catalogComponent: CatalogComponent;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogComponent>;
}
export declare class CatalogsItemApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Inventory Quantity On Hand
     * @param catalogItemIdentifier
     * @param warehouseBinId
     */
    procurementCatalogCatalogItemIdentifierQuantityOnHandGet(params: {
        catalogItemIdentifier: string;
        warehouseBinId?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Catalogs Count
     * @param conditions
     */
    procurementCatalogCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Catalogs
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementCatalogGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CatalogItem>>;
    /**
     *
     * Delete Catalog By Id
     * @param id
     */
    procurementCatalogIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Catalog By Id
     * @param id
     */
    procurementCatalogIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogItem>;
    /**
     *
     * Update Catalog
     * @param id
     * @param operations
     */
    procurementCatalogIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogItem>;
    /**
     *
     * Replace Catalog
     * @param id
     * @param catalogItem
     */
    procurementCatalogIdPut(params: {
        id: number;
        catalogItem: CatalogItem;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogItem>;
    /**
     *
     * Create Catalog
     * @param catalogItem
     */
    procurementCatalogPost(params: {
        catalogItem: CatalogItem;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CatalogItem>;
}
export declare class CategoriesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Categories Count
     * @param conditions
     */
    procurementCategoriesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Categories
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementCategoriesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Category>>;
    /**
     *
     * Delete Category By Id
     * @param id
     */
    procurementCategoriesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Category By Id
     * @param id
     */
    procurementCategoriesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Category>;
    /**
     *
     * Update Category
     * @param id
     * @param operations
     */
    procurementCategoriesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Category>;
    /**
     *
     * Replace Category
     * @param id
     * @param category
     */
    procurementCategoriesIdPut(params: {
        id: number;
        category: Category;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Category>;
    /**
     *
     * Create Category
     * @param category
     */
    procurementCategoriesPost(params: {
        category: Category;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Category>;
}
export declare class ManufacturersApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Manufacturers Count
     * @param conditions
     */
    procurementManufacturersCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Manufacturers
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementManufacturersGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Manufacturer>>;
    /**
     *
     * Delete Manufacturer By Id
     * @param id
     */
    procurementManufacturersIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Manufacturer By Id
     * @param id
     */
    procurementManufacturersIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Manufacturer>;
    /**
     *
     * Update Manufacturer
     * @param id
     * @param operations
     */
    procurementManufacturersIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Manufacturer>;
    /**
     *
     * Replace Manufacturer
     * @param id
     * @param manufacturer
     */
    procurementManufacturersIdPut(params: {
        id: number;
        manufacturer: Manufacturer;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Manufacturer>;
    /**
     *
     * Create Manufacturer
     * @param manufacturer
     */
    procurementManufacturersPost(params: {
        manufacturer: Manufacturer;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Manufacturer>;
}
export declare class PricingBreaksApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Pricing Break By Id
     * @param schedId
     * @param detailId
     * @param breakId
     */
    procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdDelete(params: {
        schedId: number;
        detailId: number;
        breakId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Pricing Break By Id
     * @param schedId
     * @param detailId
     * @param breakId
     */
    procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdGet(params: {
        schedId: number;
        detailId: number;
        breakId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingBreak>;
    /**
     *
     * Update Pricing Break
     * @param schedId
     * @param detailId
     * @param breakId
     * @param operations
     */
    procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPatch(params: {
        schedId: number;
        detailId: number;
        breakId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingBreak>;
    /**
     *
     * Replace Pricing Break
     * @param schedId
     * @param detailId
     * @param breakId
     * @param pricingBreak
     */
    procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPut(params: {
        schedId: number;
        detailId: number;
        breakId: number;
        pricingBreak: PricingBreak;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingBreak>;
    /**
     *
     * Get Pricing Break Count
     * @param schedId
     * @param detailId
     * @param conditions
     */
    procurementPricingschedulesSchedIdDetailsDetailIdBreaksCountGet(params: {
        schedId: number;
        detailId: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
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
    procurementPricingschedulesSchedIdDetailsDetailIdBreaksGet(params: {
        schedId: number;
        detailId: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<PricingBreak>>;
    /**
     *
     * Create Pricing Break
     * @param schedId
     * @param detailId
     * @param pricingBreak
     */
    procurementPricingschedulesSchedIdDetailsDetailIdBreaksPost(params: {
        schedId: number;
        detailId: number;
        pricingBreak: PricingBreak;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingBreak>;
}
export declare class PricingDetailsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Pricing Detail Count
     * @param id
     * @param conditions
     */
    procurementPricingschedulesIdDetailsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Delete Pricing Detail By Id
     * @param id
     * @param detailID
     */
    procurementPricingschedulesIdDetailsDetailIDDelete(params: {
        id: number;
        detailID: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Pricing Detail By Id
     * @param id
     * @param detailID
     */
    procurementPricingschedulesIdDetailsDetailIDGet(params: {
        id: number;
        detailID: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingDetail>;
    /**
     *
     * Update Pricing Detail
     * @param id
     * @param detailID
     * @param operations
     */
    procurementPricingschedulesIdDetailsDetailIDPatch(params: {
        id: number;
        detailID: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingDetail>;
    /**
     *
     * Replace Pricing Detail
     * @param id
     * @param detailID
     * @param pricingDetail
     */
    procurementPricingschedulesIdDetailsDetailIDPut(params: {
        id: number;
        detailID: number;
        pricingDetail: PricingDetail;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingDetail>;
    /**
     *
     * Get Pricing Detail
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementPricingschedulesIdDetailsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<PricingDetail>>;
    /**
     *
     * Create Pricing Detail
     * @param id
     * @param pricingDetail
     */
    procurementPricingschedulesIdDetailsPost(params: {
        id: number;
        pricingDetail: PricingDetail;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingDetail>;
}
export declare class PricingSchedulesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Pricing Schedules Count
     * @param conditions
     */
    procurementPricingschedulesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Pricing Schedules
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementPricingschedulesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<PricingSchedule>>;
    /**
     *
     * Delete Pricing Schedule By Id
     * @param id
     */
    procurementPricingschedulesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Pricing Schedule By Id
     * @param id
     */
    procurementPricingschedulesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingSchedule>;
    /**
     *
     * Update Pricing Schedule
     * @param id
     * @param operations
     */
    procurementPricingschedulesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingSchedule>;
    /**
     *
     * Replace Pricing Schedule
     * @param id
     * @param pricingSchedule
     */
    procurementPricingschedulesIdPut(params: {
        id: number;
        pricingSchedule: PricingSchedule;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingSchedule>;
    /**
     *
     * Create Pricing Schedule
     * @param pricingSchedule
     */
    procurementPricingschedulesPost(params: {
        pricingSchedule: PricingSchedule;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PricingSchedule>;
}
export declare class ProductComponentsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Product Component By Id
     * @param id
     * @param componentId
     */
    procurementProductsIdComponentsComponentIdDelete(params: {
        id: number;
        componentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Product Component By Id
     * @param id
     * @param componentId
     */
    procurementProductsIdComponentsComponentIdGet(params: {
        id: number;
        componentId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductComponent>>;
    /**
     *
     * Update Product Component
     * @param id
     * @param componentId
     * @param operations
     */
    procurementProductsIdComponentsComponentIdPatch(params: {
        id: number;
        componentId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductComponent>>;
    /**
     *
     * Replace Product Component
     * @param id
     * @param componentId
     * @param productComponent
     */
    procurementProductsIdComponentsComponentIdPut(params: {
        id: number;
        componentId: number;
        productComponent: ProductComponent;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductComponent>>;
    /**
     *
     * Get Product Components Count
     * @param id
     * @param conditions
     */
    procurementProductsIdComponentsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Product Components
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementProductsIdComponentsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductComponent>>;
    /**
     *
     * Create Product Component
     * @param id
     * @param productComponent
     */
    procurementProductsIdComponentsPost(params: {
        id: number;
        productComponent: ProductComponent;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductComponent>>;
}
export declare class ProductPickingShippingDetailsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Product Picking Shipping Details Count
     * @param id
     * @param conditions
     */
    procurementProductsIdPickingShippingDetailsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Product Picking Shipping Details
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementProductsIdPickingShippingDetailsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductPickingShippingDetail>>;
    /**
     *
     * Delete Products By Id
     * @param id
     * @param pickingShippingDetailId
     */
    procurementProductsIdPickingShippingDetailsPickingShippingDetailIdDelete(params: {
        id: number;
        pickingShippingDetailId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Products By Id
     * @param id
     * @param pickingShippingDetailId
     */
    procurementProductsIdPickingShippingDetailsPickingShippingDetailIdGet(params: {
        id: number;
        pickingShippingDetailId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductPickingShippingDetail>>;
    /**
     *
     * Update Products
     * @param id
     * @param pickingShippingDetailId
     * @param operations
     */
    procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPatch(params: {
        id: number;
        pickingShippingDetailId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductPickingShippingDetail>>;
    /**
     *
     * Replace Products
     * @param id
     * @param pickingShippingDetailId
     * @param productPickingShippingDetails
     */
    procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPut(params: {
        id: number;
        pickingShippingDetailId: number;
        productPickingShippingDetails: ProductPickingShippingDetail;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductPickingShippingDetail>>;
    /**
     *
     * Create Product Picking Shipping Detail
     * @param id
     * @param productPickingShippingDetails
     */
    procurementProductsIdPickingShippingDetailsPost(params: {
        id: number;
        productPickingShippingDetails: ProductPickingShippingDetail;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductPickingShippingDetail>>;
}
export declare class ProductTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Product Typess Count
     * @param conditions
     */
    procurementTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Product Typess
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductType>>;
    /**
     *
     * Delete Product Types By Id
     * @param id
     */
    procurementTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Product Types By Id
     * @param id
     */
    procurementTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductType>;
    /**
     *
     * Update Product Types
     * @param id
     * @param operations
     */
    procurementTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductType>;
    /**
     *
     * Replace Product Types
     * @param id
     * @param productTypes
     */
    procurementTypesIdPut(params: {
        id: number;
        productTypes: ProductType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductType>;
    /**
     *
     * Create Product Types
     * @param productTypes
     */
    procurementTypesPost(params: {
        productTypes: ProductType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductType>;
}
export declare class ProductsItemApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Products Count
     * @param conditions
     */
    procurementProductsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Products
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementProductsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductItem>>;
    /**
     *
     * Delete Product By Id
     * @param id
     */
    procurementProductsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Product By Id
     * @param id
     */
    procurementProductsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductItem>;
    /**
     *
     * Update Product
     * @param id
     * @param operations
     */
    procurementProductsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductItem>;
    /**
     *
     * Replace Product
     * @param id
     * @param productItem
     */
    procurementProductsIdPut(params: {
        id: number;
        productItem: ProductItem;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductItem>;
    /**
     *
     * Create Product
     * @param productItem
     */
    procurementProductsPost(params: {
        productItem: ProductItem;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProductItem>;
}
export declare class PurchaseOrderLineItemsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Purchase Order Line Items Count
     * @param id
     * @param conditions
     */
    procurementPurchaseordersIdPurchaseorderlineitemsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Purchase Order Line Items
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementPurchaseordersIdPurchaseorderlineitemsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<PurchaseOrderLineItem>>;
    /**
     *
     * Delete Purchase Order Line Item By Id
     * @param id
     * @param lineItemId
     */
    procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdDelete(params: {
        id: number;
        lineItemId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Purchase Order Line Item By Id
     * @param id
     * @param lineItemId
     */
    procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdGet(params: {
        id: number;
        lineItemId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrderLineItem>;
    /**
     *
     * Update Purchase Order Line Item
     * @param id
     * @param lineItemId
     * @param operations
     */
    procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPatch(params: {
        id: number;
        lineItemId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrderLineItem>;
    /**
     *
     * Replace Purchase Order Line Item
     * @param id
     * @param lineItemId
     * @param purchaseOrderLineItem
     */
    procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPut(params: {
        id: number;
        lineItemId: number;
        purchaseOrderLineItem: PurchaseOrderLineItem;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrderLineItem>;
    /**
     *
     * Create Purchase Order Line Item
     * @param id
     * @param purchaseOrderLineItem
     */
    procurementPurchaseordersIdPurchaseorderlineitemsPost(params: {
        id: number;
        purchaseOrderLineItem: PurchaseOrderLineItem;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrderLineItem>;
}
export declare class PurchaseOrdersApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Purchase Orders Count
     * @param conditions
     */
    procurementPurchaseordersCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Purchase Orders
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementPurchaseordersGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<PurchaseOrder>>;
    /**
     *
     * Delete Purchase Order By Id
     * @param id
     */
    procurementPurchaseordersIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Purchase Order By Id
     * @param id
     */
    procurementPurchaseordersIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrder>;
    /**
     *
     * Update Purchase Order
     * @param id
     * @param operations
     */
    procurementPurchaseordersIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrder>;
    /**
     *
     * Replace Purchase Order
     * @param id
     * @param purchaseOrder
     */
    procurementPurchaseordersIdPut(params: {
        id: number;
        purchaseOrder: PurchaseOrder;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrder>;
    /**
     *
     * Create Purchase Order
     * @param purchaseOrder
     */
    procurementPurchaseordersPost(params: {
        purchaseOrder: PurchaseOrder;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<PurchaseOrder>;
}
export declare class ShipmentMethodsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Shipment Methods Count
     * @param conditions
     */
    procurementShipmentmethodsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Shipment Methods
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementShipmentmethodsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ShipmentMethod>>;
    /**
     *
     * Delete Shipment Method By Id
     * @param id
     */
    procurementShipmentmethodsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Shipment Method By Id
     * @param id
     */
    procurementShipmentmethodsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ShipmentMethod>;
    /**
     *
     * Update Shipment Method
     * @param id
     * @param operations
     */
    procurementShipmentmethodsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ShipmentMethod>;
    /**
     *
     * Replace Shipment Method
     * @param id
     * @param shipmentMethod
     */
    procurementShipmentmethodsIdPut(params: {
        id: number;
        shipmentMethod: ShipmentMethod;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ShipmentMethod>;
    /**
     *
     * Create Shipment Method
     * @param shipmentMethod
     */
    procurementShipmentmethodsPost(params: {
        shipmentMethod: ShipmentMethod;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ShipmentMethod>;
}
export declare class SubCategoriesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Sub Categories Count
     * @param id
     * @param conditions
     */
    procurementCategoriesIdSubcategoriesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Sub Categories
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    procurementCategoriesIdSubcategoriesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<SubCategory>>;
    /**
     *
     * Create Sub Category
     * @param id
     * @param subCategory
     */
    procurementCategoriesIdSubcategoriesPost(params: {
        id: number;
        subCategory: SubCategory;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubCategory>;
    /**
     *
     * Delete Sub Category By Id
     * @param id
     * @param subcategoryID
     */
    procurementCategoriesIdSubcategoriesSubcategoryIDDelete(params: {
        id: number;
        subcategoryID: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Sub Category By Id
     * @param id
     * @param subcategoryID
     */
    procurementCategoriesIdSubcategoriesSubcategoryIDGet(params: {
        id: number;
        subcategoryID: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubCategory>;
    /**
     *
     * Update Sub Category
     * @param id
     * @param subcategoryID
     * @param operations
     */
    procurementCategoriesIdSubcategoriesSubcategoryIDPatch(params: {
        id: number;
        subcategoryID: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubCategory>;
    /**
     *
     * Replace Sub Category
     * @param id
     * @param subcategoryID
     * @param subCategory
     */
    procurementCategoriesIdSubcategoriesSubcategoryIDPut(params: {
        id: number;
        subcategoryID: number;
        subCategory: SubCategory;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubCategory>;
}
