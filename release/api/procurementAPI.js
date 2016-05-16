"use strict";
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
(function (ProductClassEnum) {
    ProductClassEnum[ProductClassEnum["Agreement"] = 'Agreement'] = "Agreement";
    ProductClassEnum[ProductClassEnum["Bundle"] = 'Bundle'] = "Bundle";
    ProductClassEnum[ProductClassEnum["Inventory"] = 'Inventory'] = "Inventory";
    ProductClassEnum[ProductClassEnum["NonInventory"] = 'NonInventory'] = "NonInventory";
    ProductClassEnum[ProductClassEnum["Service"] = 'Service'] = "Service";
})(exports.ProductClassEnum || (exports.ProductClassEnum = {}));
var ProductClassEnum = exports.ProductClassEnum;
(function (PriceAttributeEnum) {
    PriceAttributeEnum[PriceAttributeEnum["FixedFee"] = 'FixedFee'] = "FixedFee";
    PriceAttributeEnum[PriceAttributeEnum["NotToExceed"] = 'NotToExceed'] = "NotToExceed";
    PriceAttributeEnum[PriceAttributeEnum["TimeAndMaterials"] = 'TimeAndMaterials'] = "TimeAndMaterials";
    PriceAttributeEnum[PriceAttributeEnum["OverrideRate"] = 'OverrideRate'] = "OverrideRate";
})(exports.PriceAttributeEnum || (exports.PriceAttributeEnum = {}));
var PriceAttributeEnum = exports.PriceAttributeEnum;
(function (PriceMethodEnum) {
    PriceMethodEnum[PriceMethodEnum["FlatRateForRange"] = 'FlatRateForRange'] = "FlatRateForRange";
    PriceMethodEnum[PriceMethodEnum["PercentMarkupFromCost"] = 'PercentMarkupFromCost'] = "PercentMarkupFromCost";
    PriceMethodEnum[PriceMethodEnum["PercentMarkdownFromPrice"] = 'PercentMarkdownFromPrice'] = "PercentMarkdownFromPrice";
    PriceMethodEnum[PriceMethodEnum["PricePerUnit"] = 'PricePerUnit'] = "PricePerUnit";
})(exports.PriceMethodEnum || (exports.PriceMethodEnum = {}));
var PriceMethodEnum = exports.PriceMethodEnum;
(function (ChargeToTypeEnum) {
    ChargeToTypeEnum[ChargeToTypeEnum["Ticket"] = 'Ticket'] = "Ticket";
    ChargeToTypeEnum[ChargeToTypeEnum["Project"] = 'Project'] = "Project";
    ChargeToTypeEnum[ChargeToTypeEnum["Invoice"] = 'Invoice'] = "Invoice";
    ChargeToTypeEnum[ChargeToTypeEnum["Opportunity"] = 'Opportunity'] = "Opportunity";
    ChargeToTypeEnum[ChargeToTypeEnum["SalesOrder"] = 'SalesOrder'] = "SalesOrder";
})(exports.ChargeToTypeEnum || (exports.ChargeToTypeEnum = {}));
var ChargeToTypeEnum = exports.ChargeToTypeEnum;
(function (PriceMethodEnum) {
    PriceMethodEnum[PriceMethodEnum["FlatRateForRange"] = 'FlatRateForRange'] = "FlatRateForRange";
    PriceMethodEnum[PriceMethodEnum["PercentMarkupFromCost"] = 'PercentMarkupFromCost'] = "PercentMarkupFromCost";
    PriceMethodEnum[PriceMethodEnum["PercentMarkdownFromPrice"] = 'PercentMarkdownFromPrice'] = "PercentMarkdownFromPrice";
    PriceMethodEnum[PriceMethodEnum["PricePerUnit"] = 'PricePerUnit'] = "PricePerUnit";
})(exports.PriceMethodEnum || (exports.PriceMethodEnum = {}));
var PriceMethodEnum = exports.PriceMethodEnum;
(function (BillableOptionEnum) {
    BillableOptionEnum[BillableOptionEnum["Billable"] = 'Billable'] = "Billable";
    BillableOptionEnum[BillableOptionEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillableOptionEnum[BillableOptionEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
})(exports.BillableOptionEnum || (exports.BillableOptionEnum = {}));
var BillableOptionEnum = exports.BillableOptionEnum;
(function (CycleTypeEnum) {
    CycleTypeEnum[CycleTypeEnum["CalendarYear"] = 'CalendarYear'] = "CalendarYear";
    CycleTypeEnum[CycleTypeEnum["ContractYear"] = 'ContractYear'] = "ContractYear";
})(exports.CycleTypeEnum || (exports.CycleTypeEnum = {}));
var CycleTypeEnum = exports.CycleTypeEnum;
(function (TypeXrefEnum) {
    TypeXrefEnum[TypeXrefEnum["InventoryPart"] = 'InventoryPart'] = "InventoryPart";
    TypeXrefEnum[TypeXrefEnum["NonInventoryPart"] = 'NonInventoryPart'] = "NonInventoryPart";
    TypeXrefEnum[TypeXrefEnum["OtherCharge"] = 'OtherCharge'] = "OtherCharge";
    TypeXrefEnum[TypeXrefEnum["Service"] = 'Service'] = "Service";
})(exports.TypeXrefEnum || (exports.TypeXrefEnum = {}));
var TypeXrefEnum = exports.TypeXrefEnum;
(function (ShippingTypeEnum) {
    ShippingTypeEnum[ShippingTypeEnum["None"] = 'None'] = "None";
    ShippingTypeEnum[ShippingTypeEnum["FedExTwoDay"] = 'FedExTwoDay'] = "FedExTwoDay";
    ShippingTypeEnum[ShippingTypeEnum["FedExPriority"] = 'FedExPriority'] = "FedExPriority";
    ShippingTypeEnum[ShippingTypeEnum["FedExGround"] = 'FedExGround'] = "FedExGround";
    ShippingTypeEnum[ShippingTypeEnum["UpsNextDay"] = 'UpsNextDay'] = "UpsNextDay";
    ShippingTypeEnum[ShippingTypeEnum["UpsSecondDay"] = 'UpsSecondDay'] = "UpsSecondDay";
    ShippingTypeEnum[ShippingTypeEnum["UpsGround"] = 'UpsGround'] = "UpsGround";
    ShippingTypeEnum[ShippingTypeEnum["CourierService"] = 'CourierService'] = "CourierService";
    ShippingTypeEnum[ShippingTypeEnum["UspsPriority"] = 'UspsPriority'] = "UspsPriority";
    ShippingTypeEnum[ShippingTypeEnum["UspsExpress"] = 'UspsExpress'] = "UspsExpress";
})(exports.ShippingTypeEnum || (exports.ShippingTypeEnum = {}));
var ShippingTypeEnum = exports.ShippingTypeEnum;
//export namespace  {
'use strict';
var CatalogComponentsApi = (function () {
    function CatalogComponentsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    CatalogComponentsApi.prototype.procurementCatalogIdComponentsComponentIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsComponentIdDelete');
        }
        // verify required parameter 'componentId' is set
        if (params.componentId == null) {
            throw new Error('Missing required parameter componentId when calling procurementCatalogIdComponentsComponentIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Catalog Component By Id
     * @param id
     * @param componentId
     */
    CatalogComponentsApi.prototype.procurementCatalogIdComponentsComponentIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsComponentIdGet');
        }
        // verify required parameter 'componentId' is set
        if (params.componentId == null) {
            throw new Error('Missing required parameter componentId when calling procurementCatalogIdComponentsComponentIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Catalog Component
     * @param id
     * @param componentId
     * @param operations
     */
    CatalogComponentsApi.prototype.procurementCatalogIdComponentsComponentIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Catalog Component
     * @param id
     * @param componentId
     * @param catalogComponent
     */
    CatalogComponentsApi.prototype.procurementCatalogIdComponentsComponentIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.catalogComponent),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Catalog Components Count
     * @param id
     * @param conditions
     */
    CatalogComponentsApi.prototype.procurementCatalogIdComponentsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}/components/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Catalog Components
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CatalogComponentsApi.prototype.procurementCatalogIdComponentsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}/components'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Catalog Component
     * @param id
     * @param catalogComponent
     */
    CatalogComponentsApi.prototype.procurementCatalogIdComponentsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}/components'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdComponentsPost');
        }
        // verify required parameter 'catalogComponent' is set
        if (params.catalogComponent == null) {
            throw new Error('Missing required parameter catalogComponent when calling procurementCatalogIdComponentsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.catalogComponent),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CatalogComponentsApi;
}());
exports.CatalogComponentsApi = CatalogComponentsApi;
//}
//export namespace  {
'use strict';
var CatalogsItemApi = (function () {
    function CatalogsItemApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    CatalogsItemApi.prototype.procurementCatalogCatalogItemIdentifierQuantityOnHandGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{catalogItemIdentifier}/quantityOnHand'
            .replace('{' + 'catalogItemIdentifier' + '}', String(params.catalogItemIdentifier));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'catalogItemIdentifier' is set
        if (params.catalogItemIdentifier == null) {
            throw new Error('Missing required parameter catalogItemIdentifier when calling procurementCatalogCatalogItemIdentifierQuantityOnHandGet');
        }
        if (params.warehouseBinId !== undefined) {
            queryParameters['warehouseBinId'] = params.warehouseBinId;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Catalogs Count
     * @param conditions
     */
    CatalogsItemApi.prototype.procurementCatalogCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Catalogs
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CatalogsItemApi.prototype.procurementCatalogGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Catalog By Id
     * @param id
     */
    CatalogsItemApi.prototype.procurementCatalogIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Catalog By Id
     * @param id
     */
    CatalogsItemApi.prototype.procurementCatalogIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Catalog
     * @param id
     * @param operations
     */
    CatalogsItemApi.prototype.procurementCatalogIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementCatalogIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Catalog
     * @param id
     * @param catalogItem
     */
    CatalogsItemApi.prototype.procurementCatalogIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCatalogIdPut');
        }
        // verify required parameter 'catalogItem' is set
        if (params.catalogItem == null) {
            throw new Error('Missing required parameter catalogItem when calling procurementCatalogIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.catalogItem),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Catalog
     * @param catalogItem
     */
    CatalogsItemApi.prototype.procurementCatalogPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/catalog';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'catalogItem' is set
        if (params.catalogItem == null) {
            throw new Error('Missing required parameter catalogItem when calling procurementCatalogPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.catalogItem),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CatalogsItemApi;
}());
exports.CatalogsItemApi = CatalogsItemApi;
//}
//export namespace  {
'use strict';
var CategoriesApi = (function () {
    function CategoriesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Categories Count
     * @param conditions
     */
    CategoriesApi.prototype.procurementCategoriesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Categories
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CategoriesApi.prototype.procurementCategoriesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Category By Id
     * @param id
     */
    CategoriesApi.prototype.procurementCategoriesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Category By Id
     * @param id
     */
    CategoriesApi.prototype.procurementCategoriesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Category
     * @param id
     * @param operations
     */
    CategoriesApi.prototype.procurementCategoriesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementCategoriesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Category
     * @param id
     * @param category
     */
    CategoriesApi.prototype.procurementCategoriesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdPut');
        }
        // verify required parameter 'category' is set
        if (params.category == null) {
            throw new Error('Missing required parameter category when calling procurementCategoriesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.category),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Category
     * @param category
     */
    CategoriesApi.prototype.procurementCategoriesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'category' is set
        if (params.category == null) {
            throw new Error('Missing required parameter category when calling procurementCategoriesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.category),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CategoriesApi;
}());
exports.CategoriesApi = CategoriesApi;
//}
//export namespace  {
'use strict';
var ManufacturersApi = (function () {
    function ManufacturersApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Manufacturers Count
     * @param conditions
     */
    ManufacturersApi.prototype.procurementManufacturersCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/manufacturers/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Manufacturers
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ManufacturersApi.prototype.procurementManufacturersGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/manufacturers';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Manufacturer By Id
     * @param id
     */
    ManufacturersApi.prototype.procurementManufacturersIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/manufacturers/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementManufacturersIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Manufacturer By Id
     * @param id
     */
    ManufacturersApi.prototype.procurementManufacturersIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/manufacturers/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementManufacturersIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Manufacturer
     * @param id
     * @param operations
     */
    ManufacturersApi.prototype.procurementManufacturersIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/manufacturers/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementManufacturersIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementManufacturersIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Manufacturer
     * @param id
     * @param manufacturer
     */
    ManufacturersApi.prototype.procurementManufacturersIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/manufacturers/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementManufacturersIdPut');
        }
        // verify required parameter 'manufacturer' is set
        if (params.manufacturer == null) {
            throw new Error('Missing required parameter manufacturer when calling procurementManufacturersIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.manufacturer),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Manufacturer
     * @param manufacturer
     */
    ManufacturersApi.prototype.procurementManufacturersPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/manufacturers';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'manufacturer' is set
        if (params.manufacturer == null) {
            throw new Error('Missing required parameter manufacturer when calling procurementManufacturersPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.manufacturer),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ManufacturersApi;
}());
exports.ManufacturersApi = ManufacturersApi;
//}
//export namespace  {
'use strict';
var PricingBreaksApi = (function () {
    function PricingBreaksApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    PricingBreaksApi.prototype.procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
            .replace('{' + 'schedId' + '}', String(params.schedId))
            .replace('{' + 'detailId' + '}', String(params.detailId))
            .replace('{' + 'breakId' + '}', String(params.breakId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Pricing Break By Id
     * @param schedId
     * @param detailId
     * @param breakId
     */
    PricingBreaksApi.prototype.procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
            .replace('{' + 'schedId' + '}', String(params.schedId))
            .replace('{' + 'detailId' + '}', String(params.detailId))
            .replace('{' + 'breakId' + '}', String(params.breakId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Pricing Break
     * @param schedId
     * @param detailId
     * @param breakId
     * @param operations
     */
    PricingBreaksApi.prototype.procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
            .replace('{' + 'schedId' + '}', String(params.schedId))
            .replace('{' + 'detailId' + '}', String(params.detailId))
            .replace('{' + 'breakId' + '}', String(params.breakId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Pricing Break
     * @param schedId
     * @param detailId
     * @param breakId
     * @param pricingBreak
     */
    PricingBreaksApi.prototype.procurementPricingschedulesSchedIdDetailsDetailIdBreaksBreakIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/{breakId}'
            .replace('{' + 'schedId' + '}', String(params.schedId))
            .replace('{' + 'detailId' + '}', String(params.detailId))
            .replace('{' + 'breakId' + '}', String(params.breakId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.pricingBreak),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Pricing Break Count
     * @param schedId
     * @param detailId
     * @param conditions
     */
    PricingBreaksApi.prototype.procurementPricingschedulesSchedIdDetailsDetailIdBreaksCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks/count'
            .replace('{' + 'schedId' + '}', String(params.schedId))
            .replace('{' + 'detailId' + '}', String(params.detailId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
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
    PricingBreaksApi.prototype.procurementPricingschedulesSchedIdDetailsDetailIdBreaksGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks'
            .replace('{' + 'schedId' + '}', String(params.schedId))
            .replace('{' + 'detailId' + '}', String(params.detailId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Pricing Break
     * @param schedId
     * @param detailId
     * @param pricingBreak
     */
    PricingBreaksApi.prototype.procurementPricingschedulesSchedIdDetailsDetailIdBreaksPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{schedId}/details/{detailId}/breaks'
            .replace('{' + 'schedId' + '}', String(params.schedId))
            .replace('{' + 'detailId' + '}', String(params.detailId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.pricingBreak),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return PricingBreaksApi;
}());
exports.PricingBreaksApi = PricingBreaksApi;
//}
//export namespace  {
'use strict';
var PricingDetailsApi = (function () {
    function PricingDetailsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    PricingDetailsApi.prototype.procurementPricingschedulesIdDetailsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Pricing Detail By Id
     * @param id
     * @param detailID
     */
    PricingDetailsApi.prototype.procurementPricingschedulesIdDetailsDetailIDDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'detailID' + '}', String(params.detailID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsDetailIDDelete');
        }
        // verify required parameter 'detailID' is set
        if (params.detailID == null) {
            throw new Error('Missing required parameter detailID when calling procurementPricingschedulesIdDetailsDetailIDDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Pricing Detail By Id
     * @param id
     * @param detailID
     */
    PricingDetailsApi.prototype.procurementPricingschedulesIdDetailsDetailIDGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'detailID' + '}', String(params.detailID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsDetailIDGet');
        }
        // verify required parameter 'detailID' is set
        if (params.detailID == null) {
            throw new Error('Missing required parameter detailID when calling procurementPricingschedulesIdDetailsDetailIDGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Pricing Detail
     * @param id
     * @param detailID
     * @param operations
     */
    PricingDetailsApi.prototype.procurementPricingschedulesIdDetailsDetailIDPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'detailID' + '}', String(params.detailID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Pricing Detail
     * @param id
     * @param detailID
     * @param pricingDetail
     */
    PricingDetailsApi.prototype.procurementPricingschedulesIdDetailsDetailIDPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details/{detailID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'detailID' + '}', String(params.detailID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.pricingDetail),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Pricing Detail
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    PricingDetailsApi.prototype.procurementPricingschedulesIdDetailsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Pricing Detail
     * @param id
     * @param pricingDetail
     */
    PricingDetailsApi.prototype.procurementPricingschedulesIdDetailsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}/details'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDetailsPost');
        }
        // verify required parameter 'pricingDetail' is set
        if (params.pricingDetail == null) {
            throw new Error('Missing required parameter pricingDetail when calling procurementPricingschedulesIdDetailsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.pricingDetail),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return PricingDetailsApi;
}());
exports.PricingDetailsApi = PricingDetailsApi;
//}
//export namespace  {
'use strict';
var PricingSchedulesApi = (function () {
    function PricingSchedulesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Pricing Schedules Count
     * @param conditions
     */
    PricingSchedulesApi.prototype.procurementPricingschedulesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Pricing Schedules
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    PricingSchedulesApi.prototype.procurementPricingschedulesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Pricing Schedule By Id
     * @param id
     */
    PricingSchedulesApi.prototype.procurementPricingschedulesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Pricing Schedule By Id
     * @param id
     */
    PricingSchedulesApi.prototype.procurementPricingschedulesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Pricing Schedule
     * @param id
     * @param operations
     */
    PricingSchedulesApi.prototype.procurementPricingschedulesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementPricingschedulesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Pricing Schedule
     * @param id
     * @param pricingSchedule
     */
    PricingSchedulesApi.prototype.procurementPricingschedulesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPricingschedulesIdPut');
        }
        // verify required parameter 'pricingSchedule' is set
        if (params.pricingSchedule == null) {
            throw new Error('Missing required parameter pricingSchedule when calling procurementPricingschedulesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.pricingSchedule),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Pricing Schedule
     * @param pricingSchedule
     */
    PricingSchedulesApi.prototype.procurementPricingschedulesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/pricingschedules';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'pricingSchedule' is set
        if (params.pricingSchedule == null) {
            throw new Error('Missing required parameter pricingSchedule when calling procurementPricingschedulesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.pricingSchedule),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return PricingSchedulesApi;
}());
exports.PricingSchedulesApi = PricingSchedulesApi;
//}
//export namespace  {
'use strict';
var ProductComponentsApi = (function () {
    function ProductComponentsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    ProductComponentsApi.prototype.procurementProductsIdComponentsComponentIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdComponentsComponentIdDelete');
        }
        // verify required parameter 'componentId' is set
        if (params.componentId == null) {
            throw new Error('Missing required parameter componentId when calling procurementProductsIdComponentsComponentIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Product Component By Id
     * @param id
     * @param componentId
     */
    ProductComponentsApi.prototype.procurementProductsIdComponentsComponentIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdComponentsComponentIdGet');
        }
        // verify required parameter 'componentId' is set
        if (params.componentId == null) {
            throw new Error('Missing required parameter componentId when calling procurementProductsIdComponentsComponentIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Product Component
     * @param id
     * @param componentId
     * @param operations
     */
    ProductComponentsApi.prototype.procurementProductsIdComponentsComponentIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Product Component
     * @param id
     * @param componentId
     * @param productComponent
     */
    ProductComponentsApi.prototype.procurementProductsIdComponentsComponentIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/components/{componentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'componentId' + '}', String(params.componentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.productComponent),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Product Components Count
     * @param id
     * @param conditions
     */
    ProductComponentsApi.prototype.procurementProductsIdComponentsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/components/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdComponentsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Product Components
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProductComponentsApi.prototype.procurementProductsIdComponentsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/components'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Product Component
     * @param id
     * @param productComponent
     */
    ProductComponentsApi.prototype.procurementProductsIdComponentsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/components'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdComponentsPost');
        }
        // verify required parameter 'productComponent' is set
        if (params.productComponent == null) {
            throw new Error('Missing required parameter productComponent when calling procurementProductsIdComponentsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.productComponent),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ProductComponentsApi;
}());
exports.ProductComponentsApi = ProductComponentsApi;
//}
//export namespace  {
'use strict';
var ProductPickingShippingDetailsApi = (function () {
    function ProductPickingShippingDetailsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    ProductPickingShippingDetailsApi.prototype.procurementProductsIdPickingShippingDetailsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Product Picking Shipping Details
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProductPickingShippingDetailsApi.prototype.procurementProductsIdPickingShippingDetailsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Products By Id
     * @param id
     * @param pickingShippingDetailId
     */
    ProductPickingShippingDetailsApi.prototype.procurementProductsIdPickingShippingDetailsPickingShippingDetailIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdDelete');
        }
        // verify required parameter 'pickingShippingDetailId' is set
        if (params.pickingShippingDetailId == null) {
            throw new Error('Missing required parameter pickingShippingDetailId when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Products By Id
     * @param id
     * @param pickingShippingDetailId
     */
    ProductPickingShippingDetailsApi.prototype.procurementProductsIdPickingShippingDetailsPickingShippingDetailIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdGet');
        }
        // verify required parameter 'pickingShippingDetailId' is set
        if (params.pickingShippingDetailId == null) {
            throw new Error('Missing required parameter pickingShippingDetailId when calling procurementProductsIdPickingShippingDetailsPickingShippingDetailIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Products
     * @param id
     * @param pickingShippingDetailId
     * @param operations
     */
    ProductPickingShippingDetailsApi.prototype.procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Products
     * @param id
     * @param pickingShippingDetailId
     * @param productPickingShippingDetails
     */
    ProductPickingShippingDetailsApi.prototype.procurementProductsIdPickingShippingDetailsPickingShippingDetailIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails/{pickingShippingDetailId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'pickingShippingDetailId' + '}', String(params.pickingShippingDetailId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.productPickingShippingDetails),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Product Picking Shipping Detail
     * @param id
     * @param productPickingShippingDetails
     */
    ProductPickingShippingDetailsApi.prototype.procurementProductsIdPickingShippingDetailsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}/pickingShippingDetails'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdPickingShippingDetailsPost');
        }
        // verify required parameter 'productPickingShippingDetails' is set
        if (params.productPickingShippingDetails == null) {
            throw new Error('Missing required parameter productPickingShippingDetails when calling procurementProductsIdPickingShippingDetailsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.productPickingShippingDetails),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ProductPickingShippingDetailsApi;
}());
exports.ProductPickingShippingDetailsApi = ProductPickingShippingDetailsApi;
//}
//export namespace  {
'use strict';
var ProductTypesApi = (function () {
    function ProductTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Product Typess Count
     * @param conditions
     */
    ProductTypesApi.prototype.procurementTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/types/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Product Typess
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProductTypesApi.prototype.procurementTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Product Types By Id
     * @param id
     */
    ProductTypesApi.prototype.procurementTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementTypesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Product Types By Id
     * @param id
     */
    ProductTypesApi.prototype.procurementTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementTypesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Product Types
     * @param id
     * @param operations
     */
    ProductTypesApi.prototype.procurementTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementTypesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Product Types
     * @param id
     * @param productTypes
     */
    ProductTypesApi.prototype.procurementTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementTypesIdPut');
        }
        // verify required parameter 'productTypes' is set
        if (params.productTypes == null) {
            throw new Error('Missing required parameter productTypes when calling procurementTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.productTypes),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Product Types
     * @param productTypes
     */
    ProductTypesApi.prototype.procurementTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'productTypes' is set
        if (params.productTypes == null) {
            throw new Error('Missing required parameter productTypes when calling procurementTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.productTypes),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ProductTypesApi;
}());
exports.ProductTypesApi = ProductTypesApi;
//}
//export namespace  {
'use strict';
var ProductsItemApi = (function () {
    function ProductsItemApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Products Count
     * @param conditions
     */
    ProductsItemApi.prototype.procurementProductsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Products
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProductsItemApi.prototype.procurementProductsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Product By Id
     * @param id
     */
    ProductsItemApi.prototype.procurementProductsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Product By Id
     * @param id
     */
    ProductsItemApi.prototype.procurementProductsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Product
     * @param id
     * @param operations
     */
    ProductsItemApi.prototype.procurementProductsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementProductsIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Product
     * @param id
     * @param productItem
     */
    ProductsItemApi.prototype.procurementProductsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementProductsIdPut');
        }
        // verify required parameter 'productItem' is set
        if (params.productItem == null) {
            throw new Error('Missing required parameter productItem when calling procurementProductsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.productItem),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Product
     * @param productItem
     */
    ProductsItemApi.prototype.procurementProductsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/products';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'productItem' is set
        if (params.productItem == null) {
            throw new Error('Missing required parameter productItem when calling procurementProductsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.productItem),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ProductsItemApi;
}());
exports.ProductsItemApi = ProductsItemApi;
//}
//export namespace  {
'use strict';
var PurchaseOrderLineItemsApi = (function () {
    function PurchaseOrderLineItemsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    PurchaseOrderLineItemsApi.prototype.procurementPurchaseordersIdPurchaseorderlineitemsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Purchase Order Line Items
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    PurchaseOrderLineItemsApi.prototype.procurementPurchaseordersIdPurchaseorderlineitemsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Purchase Order Line Item By Id
     * @param id
     * @param lineItemId
     */
    PurchaseOrderLineItemsApi.prototype.procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'lineItemId' + '}', String(params.lineItemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdDelete');
        }
        // verify required parameter 'lineItemId' is set
        if (params.lineItemId == null) {
            throw new Error('Missing required parameter lineItemId when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Purchase Order Line Item By Id
     * @param id
     * @param lineItemId
     */
    PurchaseOrderLineItemsApi.prototype.procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'lineItemId' + '}', String(params.lineItemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdGet');
        }
        // verify required parameter 'lineItemId' is set
        if (params.lineItemId == null) {
            throw new Error('Missing required parameter lineItemId when calling procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Purchase Order Line Item
     * @param id
     * @param lineItemId
     * @param operations
     */
    PurchaseOrderLineItemsApi.prototype.procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'lineItemId' + '}', String(params.lineItemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Purchase Order Line Item
     * @param id
     * @param lineItemId
     * @param purchaseOrderLineItem
     */
    PurchaseOrderLineItemsApi.prototype.procurementPurchaseordersIdPurchaseorderlineitemsLineItemIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems/{lineItemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'lineItemId' + '}', String(params.lineItemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.purchaseOrderLineItem),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Purchase Order Line Item
     * @param id
     * @param purchaseOrderLineItem
     */
    PurchaseOrderLineItemsApi.prototype.procurementPurchaseordersIdPurchaseorderlineitemsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}/purchaseorderlineitems'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPurchaseorderlineitemsPost');
        }
        // verify required parameter 'purchaseOrderLineItem' is set
        if (params.purchaseOrderLineItem == null) {
            throw new Error('Missing required parameter purchaseOrderLineItem when calling procurementPurchaseordersIdPurchaseorderlineitemsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.purchaseOrderLineItem),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return PurchaseOrderLineItemsApi;
}());
exports.PurchaseOrderLineItemsApi = PurchaseOrderLineItemsApi;
//}
//export namespace  {
'use strict';
var PurchaseOrdersApi = (function () {
    function PurchaseOrdersApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Purchase Orders Count
     * @param conditions
     */
    PurchaseOrdersApi.prototype.procurementPurchaseordersCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Purchase Orders
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    PurchaseOrdersApi.prototype.procurementPurchaseordersGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Purchase Order By Id
     * @param id
     */
    PurchaseOrdersApi.prototype.procurementPurchaseordersIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Purchase Order By Id
     * @param id
     */
    PurchaseOrdersApi.prototype.procurementPurchaseordersIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Purchase Order
     * @param id
     * @param operations
     */
    PurchaseOrdersApi.prototype.procurementPurchaseordersIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementPurchaseordersIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Purchase Order
     * @param id
     * @param purchaseOrder
     */
    PurchaseOrdersApi.prototype.procurementPurchaseordersIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementPurchaseordersIdPut');
        }
        // verify required parameter 'purchaseOrder' is set
        if (params.purchaseOrder == null) {
            throw new Error('Missing required parameter purchaseOrder when calling procurementPurchaseordersIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.purchaseOrder),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Purchase Order
     * @param purchaseOrder
     */
    PurchaseOrdersApi.prototype.procurementPurchaseordersPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/purchaseorders';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'purchaseOrder' is set
        if (params.purchaseOrder == null) {
            throw new Error('Missing required parameter purchaseOrder when calling procurementPurchaseordersPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.purchaseOrder),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return PurchaseOrdersApi;
}());
exports.PurchaseOrdersApi = PurchaseOrdersApi;
//}
//export namespace  {
'use strict';
var ShipmentMethodsApi = (function () {
    function ShipmentMethodsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Shipment Methods Count
     * @param conditions
     */
    ShipmentMethodsApi.prototype.procurementShipmentmethodsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/shipmentmethods/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Shipment Methods
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ShipmentMethodsApi.prototype.procurementShipmentmethodsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/shipmentmethods';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Shipment Method By Id
     * @param id
     */
    ShipmentMethodsApi.prototype.procurementShipmentmethodsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Shipment Method By Id
     * @param id
     */
    ShipmentMethodsApi.prototype.procurementShipmentmethodsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Shipment Method
     * @param id
     * @param operations
     */
    ShipmentMethodsApi.prototype.procurementShipmentmethodsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling procurementShipmentmethodsIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Shipment Method
     * @param id
     * @param shipmentMethod
     */
    ShipmentMethodsApi.prototype.procurementShipmentmethodsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/shipmentmethods/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementShipmentmethodsIdPut');
        }
        // verify required parameter 'shipmentMethod' is set
        if (params.shipmentMethod == null) {
            throw new Error('Missing required parameter shipmentMethod when calling procurementShipmentmethodsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.shipmentMethod),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Shipment Method
     * @param shipmentMethod
     */
    ShipmentMethodsApi.prototype.procurementShipmentmethodsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/shipmentmethods';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'shipmentMethod' is set
        if (params.shipmentMethod == null) {
            throw new Error('Missing required parameter shipmentMethod when calling procurementShipmentmethodsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.shipmentMethod),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ShipmentMethodsApi;
}());
exports.ShipmentMethodsApi = ShipmentMethodsApi;
//}
//export namespace  {
'use strict';
var SubCategoriesApi = (function () {
    function SubCategoriesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
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
    SubCategoriesApi.prototype.procurementCategoriesIdSubcategoriesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Sub Categories
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    SubCategoriesApi.prototype.procurementCategoriesIdSubcategoriesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}/subcategories'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Sub Category
     * @param id
     * @param subCategory
     */
    SubCategoriesApi.prototype.procurementCategoriesIdSubcategoriesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}/subcategories'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesPost');
        }
        // verify required parameter 'subCategory' is set
        if (params.subCategory == null) {
            throw new Error('Missing required parameter subCategory when calling procurementCategoriesIdSubcategoriesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.subCategory),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Sub Category By Id
     * @param id
     * @param subcategoryID
     */
    SubCategoriesApi.prototype.procurementCategoriesIdSubcategoriesSubcategoryIDDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesSubcategoryIDDelete');
        }
        // verify required parameter 'subcategoryID' is set
        if (params.subcategoryID == null) {
            throw new Error('Missing required parameter subcategoryID when calling procurementCategoriesIdSubcategoriesSubcategoryIDDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Sub Category By Id
     * @param id
     * @param subcategoryID
     */
    SubCategoriesApi.prototype.procurementCategoriesIdSubcategoriesSubcategoryIDGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling procurementCategoriesIdSubcategoriesSubcategoryIDGet');
        }
        // verify required parameter 'subcategoryID' is set
        if (params.subcategoryID == null) {
            throw new Error('Missing required parameter subcategoryID when calling procurementCategoriesIdSubcategoriesSubcategoryIDGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Sub Category
     * @param id
     * @param subcategoryID
     * @param operations
     */
    SubCategoriesApi.prototype.procurementCategoriesIdSubcategoriesSubcategoryIDPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Sub Category
     * @param id
     * @param subcategoryID
     * @param subCategory
     */
    SubCategoriesApi.prototype.procurementCategoriesIdSubcategoriesSubcategoryIDPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/procurement/categories/{id}/subcategories/{subcategoryID}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subcategoryID' + '}', String(params.subcategoryID));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.subCategory),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return SubCategoriesApi;
}());
exports.SubCategoriesApi = SubCategoriesApi;
//}
