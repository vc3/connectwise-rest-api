///<reference path="../../typings/main.d.ts"/>
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

export interface CalendarReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CommunicationTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Company {
    "id"?: number;
    "identifier": string;
    "name": string;
    "status": CompanyStatusReference;
    "type": CompanyTypeReference;
    "addressLine1": string;
    "addressLine2"?: string;
    "city"?: string;
    "state"?: string;
    "zip"?: string;
    "country"?: CountryReference;
    "phoneNumber"?: string;
    "faxNumber"?: string;
    "website"?: string;
    "territoryId"?: number;
    "marketId"?: number;
    "accountNumber"?: string;
    "defaultContact"?: ContactReference;
    "dateAcquired"?: Date;
    "sicCode"?: SicCodeReference;
    "parentCompany"?: CompanyReference;
    "annualRevenue"?: number;
    "numberOfEmployees"?: number;
    "ownershipType"?: OwnershipTypeReference;
    "timeZone"?: TimeZoneReference;
    "leadSource"?: string;
    "leadFlag"?: boolean;
    "unsubscribeFlag"?: boolean;
    "calendarId"?: number;
    "deletedFlag"?: boolean;
    "dateDeleted"?: Date;
    "deletedBy"?: string;
    "mobileGuid"?: Guid;
    "currency"?: CurrencyReference;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}

export interface CompanyManagementSummary {
    "id"?: number;
    "managementSolution"?: ManagementSolutionReference;
    "groupIdentifier": string;

    /**
     * deviceType is required if the managementSolution is Legacy
     */
    "deviceType"?: DeviceTypeEnum;
    "agreement"?: AgreementReference;
    "snmpMachines"?: number;
    "totalWorkstations"?: number;
    "totalServers"?: number;
    "totalWindowsServers"?: number;
    "totalWindowsWorkstations"?: number;
    "totalManagedMachines"?: number;
    "serversOffline"?: number;
    "serversDiskSpaceLow"?: number;
    "failedBackupJobs"?: number;
    "totalNotifications"?: number;
    "successfulBackupJobs"?: number;
    "serverAvailability"?: number;
    "virusesRemoved"?: number;
    "spywareItemsRemoved"?: number;
    "windowsPatchesInstalled"?: number;
    "diskCleanups"?: number;
    "diskDefragmentations"?: number;
    "fullyPatchedMachines"?: number;
    "missingOneTwoPatchesMachines"?: number;
    "missingThreeFivePatchesMachines"?: number;
    "missingMoreFivePatchesMachines"?: number;
    "missingUnscannedPatchesMachines"?: number;
    "alertsGenerated"?: string;
    "internetConnectivity"?: number;
    "diskSpaceCleanedMb"?: number;
    "missingSecurityPatches"?: string;
    "cpuUtilization"?: number;
    "memoryUtilization"?: number;
    "company"?: CompanyReference;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum DeviceTypeEnum {
    WorkstationsAndServers = <any> 'WorkstationsAndServers',
    BackupStats = <any> 'BackupStats',
    Servers = <any> 'Servers',
    Workstations = <any> 'Workstations'
}
export interface CompanyMerge {
    "toCompanyId": number;
    "name"?: NameEnum;
    "identifier"?: IdentifierEnum;
    "status"?: StatusEnum;
    "type"?: TypeEnum;
    "primaryAddress"?: PrimaryAddressEnum;
    "primaryContact"?: PrimaryContactEnum;
    "phone"?: PhoneEnum;
    "fax"?: FaxEnum;
    "website"?: WebsiteEnum;
    "market"?: MarketEnum;
    "territory"?: TerritoryEnum;
    "revenue"?: RevenueEnum;
    "revenueYear"?: RevenueYearEnum;
    "numberOfEmployees"?: NumberOfEmployeesEnum;
    "sicCode"?: SicCodeEnum;
    "dateAcquired"?: DateAcquiredEnum;
    "timeZone"?: TimeZoneEnum;
    "sourceList"?: SourceListEnum;
    "userDefinedField1"?: UserDefinedField1Enum;
    "userDefinedField2"?: UserDefinedField2Enum;
    "userDefinedField3"?: UserDefinedField3Enum;
    "userDefinedField4"?: UserDefinedField4Enum;
    "userDefinedField5"?: UserDefinedField5Enum;
    "userDefinedField6"?: UserDefinedField6Enum;
    "userDefinedField7"?: UserDefinedField7Enum;
    "userDefinedField8"?: UserDefinedField8Enum;
    "userDefinedField9"?: UserDefinedField9Enum;
    "userDefinedField10"?: UserDefinedField10Enum;
    "billingAddress"?: BillingAddressEnum;
    "billingContact"?: BillingContactEnum;
    "taxCode"?: TaxCodeEnum;
    "accountNumber"?: AccountNumberEnum;
    "billingTerms"?: BillingTermsEnum;
    "notes"?: NotesEnum;
    "sites"?: SitesEnum;
    "activities"?: ActivitiesEnum;
    "opportunities"?: OpportunitiesEnum;
    "services"?: ServicesEnum;
    "projects"?: ProjectsEnum;
    "contacts"?: ContactsEnum;
    "documents"?: DocumentsEnum;
}


export enum NameEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum IdentifierEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum StatusEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum TypeEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum PrimaryAddressEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum PrimaryContactEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum PhoneEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum FaxEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum WebsiteEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum MarketEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum TerritoryEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum RevenueEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum RevenueYearEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum NumberOfEmployeesEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum SicCodeEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum DateAcquiredEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum TimeZoneEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum SourceListEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField1Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField2Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField3Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField4Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField5Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField6Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField7Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField8Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField9Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum UserDefinedField10Enum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum BillingAddressEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum BillingContactEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum TaxCodeEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum AccountNumberEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum BillingTermsEnum {
    From = <any> 'From',
    To = <any> 'To'
}

export enum NotesEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}

export enum SitesEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}

export enum ActivitiesEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}

export enum OpportunitiesEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}

export enum ServicesEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}

export enum ProjectsEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}

export enum ContactsEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}

export enum DocumentsEnum {
    Discard = <any> 'Discard',
    Merge = <any> 'Merge'
}
export interface CompanyNote {
    "id"?: number;
    "text": string;
    "type"?: NoteTypeReference;
    "flagged"?: boolean;
    "enteredBy"?: string;
    "company"?: CompanyReference;

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

export interface CompanySite {
    "id"?: number;
    "name": string;
    "addressLine1"?: string;
    "addressLine2"?: string;
    "city"?: string;
    "state"?: string;
    "zip"?: string;
    "country"?: CountryReference;
    "phoneNumber"?: string;
    "faxNumber"?: string;
    "taxCodeId"?: number;
    "expenseReimbursement"?: number;
    "primaryAddressFlag"?: boolean;
    "defaultShippingFlag"?: boolean;
    "defaultBillingFlag"?: boolean;
    "defaultMailingFlag"?: boolean;
    "calendar"?: CalendarReference;
    "timeZone"?: TimeZoneReference;
    "company"?: CompanyReference;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CompanyStatus {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "notifyFlag"?: boolean;
    "disallowSavingFlag"?: boolean;
    "notificationMessage"?: string;
    "customNoteFlag"?: boolean;
    "cancelOpenTracksFlag"?: boolean;
    "track"?: TrackReference;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CompanyStatusReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CompanyTeam {
    "id"?: number;
    "company"?: CompanyReference;
    "teamRole": TeamRoleReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "contact"?: ContactReference;
    "member"?: MemberReference;
    "accountManagerFlag"?: boolean;
    "techFlag"?: boolean;
    "salesFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CompanyType {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "vendorFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CompanyTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Configuration {
    "id"?: number;
    "name": string;
    "type": ConfigurationTypeReference;
    "status"?: ConfigurationStatusReference;
    "company": CompanyReference;
    "contact"?: ContactReference;
    "site"?: SiteReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "deviceIdentifier"?: string;
    "serialNumber"?: string;
    "modelNumber"?: string;
    "tagNumber"?: string;
    "purchaseDate"?: Date;
    "installationDate"?: Date;
    "installedBy"?: MemberReference;
    "warrantyExpirationDate"?: Date;
    "vendorNotes"?: string;
    "notes"?: string;
    "macAddress"?: string;
    "lastLoginName"?: string;
    "billFlag"?: boolean;
    "backupSuccesses"?: number;
    "backupIncomplete"?: number;
    "backupFailed"?: number;
    "backupRestores"?: number;
    "lastBackupDate"?: Date;
    "backupServerName"?: string;
    "backupBillableSpaceGb"?: number;
    "backupProtectedDeviceList"?: string;
    "backupYear"?: number;
    "backupMonth"?: number;
    "ipAddress"?: string;
    "defaultGateway"?: string;
    "osType"?: string;
    "osInfo"?: string;
    "cpuSpeed"?: string;
    "ram"?: string;
    "localHardDrives"?: string;
    "parentConfigurationId"?: number;
    "vendor"?: CompanyReference;
    "manufacturer"?: ManufacturerReference;
    "questions"?: Array<ConfigurationQuestion>;
    "activeFlag"?: boolean;
    "managementLink"?: string;
    "remoteLink"?: string;
    "sla"?: SLAReference;
    "mobileGuid"?: Guid;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}

export interface ConfigurationQuestion {
    "answerId"?: number;
    "questionId"?: number;
    "question"?: string;
    "answer"?: string;
    "sequenceNumber"?: number;
    "numberOfDecimals"?: number;
    "fieldType"?: FieldTypeEnum;
    "requiredFlag"?: boolean;
}


export enum FieldTypeEnum {
    Text = <any> 'Text',
    Button = <any> 'Button',
    Currency = <any> 'Currency',
    Date = <any> 'Date',
    Hyperlink = <any> 'Hyperlink',
    IPAddress = <any> 'IPAddress',
    Checkbox = <any> 'Checkbox',
    Number = <any> 'Number',
    Percent = <any> 'Percent',
    TextArea = <any> 'TextArea',
    Password = <any> 'Password'
}
export interface ConfigurationStatus {
    "id"?: number;
    "description": string;
    "closedFlag"?: boolean;
    "defaultFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ConfigurationStatusReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ConfigurationType {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;
    "systemFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ConfigurationTypeQuestion {
    "id"?: number;
    "configurationTypeId"?: number;
    "fieldType": FieldTypeEnum;
    "entryType": EntryTypeEnum;
    "sequenceNumber"?: number;
    "question": string;
    "numberOfDecimals"?: number;
    "requiredFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "possibleAnswers"?: Array<string>;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum FieldTypeEnum {
    Text = <any> 'Text',
    Button = <any> 'Button',
    Currency = <any> 'Currency',
    Date = <any> 'Date',
    Hyperlink = <any> 'Hyperlink',
    IPAddress = <any> 'IPAddress',
    Checkbox = <any> 'Checkbox',
    Number = <any> 'Number',
    Percent = <any> 'Percent',
    TextArea = <any> 'TextArea',
    Password = <any> 'Password'
}

export enum EntryTypeEnum {
    EntryField = <any> 'EntryField',
    List = <any> 'List',
    Option = <any> 'Option'
}
export interface ConfigurationTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Contact {
    "id"?: number;
    "firstName": string;
    "lastName"?: string;
    "type"?: ContactTypeReference;
    "company"?: CompanyReference;
    "site"?: SiteReference;
    "addressLine1"?: string;
    "addressLine2"?: string;
    "city"?: string;
    "state"?: string;
    "zip"?: string;
    "country"?: string;
    "relationship"?: RelationshipReference;
    "department"?: ContactDepartmentReference;
    "inactiveFlag"?: boolean;
    "securityIdentifier"?: string;
    "managerContactId"?: number;
    "assistantContactId"?: number;
    "title"?: string;
    "school"?: string;
    "nickName"?: string;
    "marriedFlag"?: boolean;
    "childrenFlag"?: boolean;
    "significantOther"?: string;
    "portalPassword"?: string;
    "portalSecurityLevel"?: number;
    "disablePortalLoginFlag"?: boolean;
    "unsubscribeFlag"?: boolean;
    "gender"?: GenderEnum;
    "birthDay"?: Date;
    "anniversary"?: Date;
    "presence"?: PresenceEnum;
    "mobileGuid"?: Guid;
    "facebookUrl"?: string;
    "twitterUrl"?: string;
    "linkedInUrl"?: string;
    "communicationItems"?: Array<ContactCommunicationItem>;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}


export enum GenderEnum {
    Male = <any> 'Male',
    Female = <any> 'Female'
}

export enum PresenceEnum {
    Online = <any> 'Online',
    DoNotDisturb = <any> 'DoNotDisturb',
    Away = <any> 'Away',
    Offline = <any> 'Offline',
    NoAgent = <any> 'NoAgent'
}
export interface ContactCommunication {
    "id"?: number;
    "contactId"?: number;
    "type": CommunicationTypeReference;
    "value": string;
    "extension"?: string;
    "defaultFlag"?: boolean;
    "mobileGuid"?: Guid;
    "communicationType"?: CommunicationTypeEnum;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum CommunicationTypeEnum {
    Phone = <any> 'Phone',
    Fax = <any> 'Fax',
    Email = <any> 'Email'
}
export interface ContactCommunicationItem {
    "id"?: number;
    "type": CommunicationTypeReference;
    "value": string;
    "extension"?: string;
    "defaultFlag"?: boolean;
    "communicationType"?: CommunicationTypeEnum;
}


export enum CommunicationTypeEnum {
    Phone = <any> 'Phone',
    Fax = <any> 'Fax',
    Email = <any> 'Email'
}
export interface ContactDepartment {
    "id"?: number;
    "name": string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ContactDepartmentReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ContactNote {
    "id"?: number;
    "contactId"?: number;
    "text": string;
    "type"?: NoteTypeReference;
    "flagged"?: boolean;
    "enteredBy"?: string;

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

export interface ContactRelationship {
    "id"?: number;
    "name": string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ContactType {
    "id"?: number;
    "description": string;
    "defaultFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ContactTypeReference {
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

export interface CurrencyReference {
    "id"?: number;
    "identifier"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CustomFieldValue {
    "id"?: number;
    "caption"?: string;
    "type"?: TypeEnum;
    "entryMethod"?: EntryMethodEnum;
    "numberOfDecimals"?: number;
    "value"?: string;
}


export enum TypeEnum {
    Text = <any> 'Text',
    Button = <any> 'Button',
    Currency = <any> 'Currency',
    Date = <any> 'Date',
    Hyperlink = <any> 'Hyperlink',
    IPAddress = <any> 'IPAddress',
    Checkbox = <any> 'Checkbox',
    Number = <any> 'Number',
    Percent = <any> 'Percent',
    TextArea = <any> 'TextArea',
    Password = <any> 'Password'
}

export enum EntryMethodEnum {
    EntryField = <any> 'EntryField',
    List = <any> 'List',
    Option = <any> 'Option'
}
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}

export interface Guid {
}

export interface ManagementSolutionReference {
    "id"?: number;
    "name"?: string;

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

export interface NoteTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OwnershipTypeReference {
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

export interface PortalSecurity {
    "identifier"?: string;
    "enabled"?: boolean;
}

export interface RelationshipReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface RequestPasswordRequest {
    "email"?: string;
}

export interface SLAReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface SicCodeReference {
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

export interface SuccessResponse {
    "success"?: boolean;
    "message"?: string;
}

export interface TeamRoleReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface TimeZoneReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Track {
    "id"?: number;
    "trackId": number;
    "name"?: string;
    "startDate"?: string;
    "endDate"?: string;
    "actionTaken"?: number;
    "actionRemaining"?: number;
    "startedBy"?: string;
    "company"?: CompanyReference;
    "contact"?: ContactReference;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface TrackReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ValidatePortalRequest {
    "email"?: string;
    "password"?: string;
}

export interface ValidatePortalResponse {
    "success"?: boolean;
    "contactId"?: number;
}

export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}


//export namespace  {
    'use strict';

    export class CompaniesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Companies Count
         * @param conditions
         */
        public companyCompaniesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/companies/count';

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
         * Get Companies
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyCompaniesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Company>> {
            const localVarPath = this.basePath + '/company/companies';

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
         * Delete Company By Id
         * @param id
         */
        public companyCompaniesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/companies/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdDelete');
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
         * Get Company By Id
         * @param id
         */
        public companyCompaniesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Company> {
            const localVarPath = this.basePath + '/company/companies/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdGet');
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
         * Merge Company
         * @param id
         * @param merge
         */
        public companyCompaniesIdMergePost (params: {  id: number; merge: CompanyMerge; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SuccessResponse> {
            const localVarPath = this.basePath + '/company/companies/{id}/merge'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdMergePost');
            }
            // verify required parameter 'merge' is set
            if (params.merge == null) {
                throw new Error('Missing required parameter merge when calling companyCompaniesIdMergePost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.merge),

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
         * Update Company
         * @param id
         * @param operations
         */
        public companyCompaniesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Company> {
            const localVarPath = this.basePath + '/company/companies/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyCompaniesIdPatch');
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
         * Replace Company
         * @param id
         * @param company
         */
        public companyCompaniesIdPut (params: {  id: number; company: Company; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Company> {
            const localVarPath = this.basePath + '/company/companies/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdPut');
            }
            // verify required parameter 'company' is set
            if (params.company == null) {
                throw new Error('Missing required parameter company when calling companyCompaniesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.company),

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
         * Create Company
         * @param company
         */
        public companyCompaniesPost (params: {  company: Company; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Company> {
            const localVarPath = this.basePath + '/company/companies';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'company' is set
            if (params.company == null) {
                throw new Error('Missing required parameter company when calling companyCompaniesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.company),

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

    export class CompanyManagementSummarysApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Company Types Count
         * @param id
         * @param conditions
         */
        public companyCompaniesIdManagementSummaryReportsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsCountGet');
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
         * Get Management Summarys
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyCompaniesIdManagementSummaryReportsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CompanyManagementSummary>> {
            const localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsGet');
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
         * Create Management Summary
         * @param id
         * @param managementSummary
         */
        public companyCompaniesIdManagementSummaryReportsPost (params: {  id: number; managementSummary: CompanyManagementSummary; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyManagementSummary> {
            const localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsPost');
            }
            // verify required parameter 'managementSummary' is set
            if (params.managementSummary == null) {
                throw new Error('Missing required parameter managementSummary when calling companyCompaniesIdManagementSummaryReportsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.managementSummary),

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
         * Delete Management Summary By Id
         * @param id
         * @param reportId
         */
        public companyCompaniesIdManagementSummaryReportsReportIdDelete (params: {  id: number; reportId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'reportId' + '}', String(params.reportId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdDelete');
            }
            // verify required parameter 'reportId' is set
            if (params.reportId == null) {
                throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdDelete');
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
         * Get Management Summary By Id
         * @param id
         * @param reportId
         */
        public companyCompaniesIdManagementSummaryReportsReportIdGet (params: {  id: number; reportId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyManagementSummary> {
            const localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'reportId' + '}', String(params.reportId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdGet');
            }
            // verify required parameter 'reportId' is set
            if (params.reportId == null) {
                throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdGet');
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
         * Update Management Summary
         * @param id
         * @param reportId
         * @param operations
         */
        public companyCompaniesIdManagementSummaryReportsReportIdPatch (params: {  id: number; reportId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyManagementSummary> {
            const localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'reportId' + '}', String(params.reportId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdPatch');
            }
            // verify required parameter 'reportId' is set
            if (params.reportId == null) {
                throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyCompaniesIdManagementSummaryReportsReportIdPatch');
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
         * Replace Management Summary
         * @param id
         * @param reportId
         * @param managementSummary
         */
        public companyCompaniesIdManagementSummaryReportsReportIdPut (params: {  id: number; reportId: number; managementSummary: CompanyManagementSummary; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyManagementSummary> {
            const localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'reportId' + '}', String(params.reportId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdPut');
            }
            // verify required parameter 'reportId' is set
            if (params.reportId == null) {
                throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdPut');
            }
            // verify required parameter 'managementSummary' is set
            if (params.managementSummary == null) {
                throw new Error('Missing required parameter managementSummary when calling companyCompaniesIdManagementSummaryReportsReportIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.managementSummary),

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

    export class CompanyNotesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Company Notes Count
         * @param id
         * @param conditions
         */
        public companyCompaniesIdNotesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/companies/{id}/notes/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdNotesCountGet');
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
         * Get Company Notes
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyCompaniesIdNotesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CompanyNote>> {
            const localVarPath = this.basePath + '/company/companies/{id}/notes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdNotesGet');
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
         * Delete Company Note By Id
         * @param id
         * @param noteId
         */
        public companyCompaniesIdNotesNoteIdDelete (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdDelete');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdDelete');
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
         * Get Company Note By Id
         * @param id
         * @param noteId
         */
        public companyCompaniesIdNotesNoteIdGet (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyNote> {
            const localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdGet');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdGet');
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
         * Update Company Note
         * @param id
         * @param noteId
         * @param operations
         */
        public companyCompaniesIdNotesNoteIdPatch (params: {  id: number; noteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyNote> {
            const localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdPatch');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyCompaniesIdNotesNoteIdPatch');
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
         * Replace Company Note
         * @param id
         * @param noteId
         * @param companyNote
         */
        public companyCompaniesIdNotesNoteIdPut (params: {  id: number; noteId: number; companyNote: CompanyNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyNote> {
            const localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdPut');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdPut');
            }
            // verify required parameter 'companyNote' is set
            if (params.companyNote == null) {
                throw new Error('Missing required parameter companyNote when calling companyCompaniesIdNotesNoteIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.companyNote),

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
         * Create Company Note
         * @param id
         * @param companyNote
         */
        public companyCompaniesIdNotesPost (params: {  id: number; companyNote: CompanyNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyNote> {
            const localVarPath = this.basePath + '/company/companies/{id}/notes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdNotesPost');
            }
            // verify required parameter 'companyNote' is set
            if (params.companyNote == null) {
                throw new Error('Missing required parameter companyNote when calling companyCompaniesIdNotesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.companyNote),

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

    export class CompanySitesApi {
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
        public companyCompaniesIdSitesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/companies/{id}/sites/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdSitesCountGet');
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
        public companyCompaniesIdSitesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CompanySite>> {
            const localVarPath = this.basePath + '/company/companies/{id}/sites'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdSitesGet');
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
        public companyCompaniesIdSitesPost (params: {  id: number; site: CompanySite; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanySite> {
            const localVarPath = this.basePath + '/company/companies/{id}/sites'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdSitesPost');
            }
            // verify required parameter 'site' is set
            if (params.site == null) {
                throw new Error('Missing required parameter site when calling companyCompaniesIdSitesPost');
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
        public companyCompaniesIdSitesSiteIdDelete (params: {  id: number; siteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'siteId' + '}', String(params.siteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdDelete');
            }
            // verify required parameter 'siteId' is set
            if (params.siteId == null) {
                throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdDelete');
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
        public companyCompaniesIdSitesSiteIdGet (params: {  id: number; siteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanySite> {
            const localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'siteId' + '}', String(params.siteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdGet');
            }
            // verify required parameter 'siteId' is set
            if (params.siteId == null) {
                throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdGet');
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
        public companyCompaniesIdSitesSiteIdPatch (params: {  id: number; siteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanySite> {
            const localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'siteId' + '}', String(params.siteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdPatch');
            }
            // verify required parameter 'siteId' is set
            if (params.siteId == null) {
                throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyCompaniesIdSitesSiteIdPatch');
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
        public companyCompaniesIdSitesSiteIdPut (params: {  id: number; siteId: number; site: CompanySite; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanySite> {
            const localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'siteId' + '}', String(params.siteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdPut');
            }
            // verify required parameter 'siteId' is set
            if (params.siteId == null) {
                throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdPut');
            }
            // verify required parameter 'site' is set
            if (params.site == null) {
                throw new Error('Missing required parameter site when calling companyCompaniesIdSitesSiteIdPut');
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

    export class CompanyStatusesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Company Statuses Count
         * @param conditions
         */
        public companyCompaniesStatusesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/companies/statuses/count';

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
         * Get Company Statuses
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyCompaniesStatusesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CompanyStatus>> {
            const localVarPath = this.basePath + '/company/companies/statuses';

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
         * Delete Company Status By Id
         * @param id
         */
        public companyCompaniesStatusesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/companies/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdDelete');
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
         * Get Company Status By Id
         * @param id
         */
        public companyCompaniesStatusesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyStatus> {
            const localVarPath = this.basePath + '/company/companies/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdGet');
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
         * Update Company Status
         * @param id
         * @param operations
         */
        public companyCompaniesStatusesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyStatus> {
            const localVarPath = this.basePath + '/company/companies/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyCompaniesStatusesIdPatch');
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
         * Replace Company Status
         * @param id
         * @param companyStatus
         */
        public companyCompaniesStatusesIdPut (params: {  id: number; companyStatus: CompanyStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyStatus> {
            const localVarPath = this.basePath + '/company/companies/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdPut');
            }
            // verify required parameter 'companyStatus' is set
            if (params.companyStatus == null) {
                throw new Error('Missing required parameter companyStatus when calling companyCompaniesStatusesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.companyStatus),

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
         * Create Company Status
         * @param companyStatus
         */
        public companyCompaniesStatusesPost (params: {  companyStatus: CompanyStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyStatus> {
            const localVarPath = this.basePath + '/company/companies/statuses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'companyStatus' is set
            if (params.companyStatus == null) {
                throw new Error('Missing required parameter companyStatus when calling companyCompaniesStatusesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.companyStatus),

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

    export class CompanyTeamsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Company Teams Count
         * @param id
         * @param conditions
         */
        public companyCompaniesIdTeamsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/companies/{id}/teams/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsCountGet');
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
         * Get Company Teams
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyCompaniesIdTeamsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CompanyTeam>> {
            const localVarPath = this.basePath + '/company/companies/{id}/teams'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsGet');
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
         * Create Company Team
         * @param id
         * @param companyTeam
         */
        public companyCompaniesIdTeamsPost (params: {  id: number; companyTeam: CompanyTeam; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyTeam> {
            const localVarPath = this.basePath + '/company/companies/{id}/teams'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsPost');
            }
            // verify required parameter 'companyTeam' is set
            if (params.companyTeam == null) {
                throw new Error('Missing required parameter companyTeam when calling companyCompaniesIdTeamsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.companyTeam),

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
         * Delete Company Team By Id
         * @param id
         * @param teamId
         */
        public companyCompaniesIdTeamsTeamIdDelete (params: {  id: number; teamId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdDelete');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdDelete');
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
         * Get Company Team By Id
         * @param id
         * @param teamId
         */
        public companyCompaniesIdTeamsTeamIdGet (params: {  id: number; teamId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyTeam> {
            const localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdGet');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdGet');
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
         * Update Company Team
         * @param id
         * @param teamId
         * @param operations
         */
        public companyCompaniesIdTeamsTeamIdPatch (params: {  id: number; teamId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyTeam> {
            const localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdPatch');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyCompaniesIdTeamsTeamIdPatch');
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
         * Replace Company Team
         * @param id
         * @param teamId
         * @param companyTeam
         */
        public companyCompaniesIdTeamsTeamIdPut (params: {  id: number; teamId: number; companyTeam: CompanyTeam; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyTeam> {
            const localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdPut');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdPut');
            }
            // verify required parameter 'companyTeam' is set
            if (params.companyTeam == null) {
                throw new Error('Missing required parameter companyTeam when calling companyCompaniesIdTeamsTeamIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.companyTeam),

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

    export class CompanyTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Company Types Count
         * @param conditions
         */
        public companyCompaniesTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/companies/types/count';

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
         * Get Company Types
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyCompaniesTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CompanyType>> {
            const localVarPath = this.basePath + '/company/companies/types';

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
         * Delete Company Type By Id
         * @param id
         */
        public companyCompaniesTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/companies/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesTypesIdDelete');
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
         * Get Company Type By Id
         * @param id
         */
        public companyCompaniesTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyType> {
            const localVarPath = this.basePath + '/company/companies/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesTypesIdGet');
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
         * Update Company Type
         * @param id
         * @param operations
         */
        public companyCompaniesTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyType> {
            const localVarPath = this.basePath + '/company/companies/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyCompaniesTypesIdPatch');
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
         * Replace Company Type
         * @param id
         * @param companyType
         */
        public companyCompaniesTypesIdPut (params: {  id: number; companyType: CompanyType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyType> {
            const localVarPath = this.basePath + '/company/companies/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyCompaniesTypesIdPut');
            }
            // verify required parameter 'companyType' is set
            if (params.companyType == null) {
                throw new Error('Missing required parameter companyType when calling companyCompaniesTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.companyType),

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
         * Create Company Type
         * @param companyType
         */
        public companyCompaniesTypesPost (params: {  companyType: CompanyType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CompanyType> {
            const localVarPath = this.basePath + '/company/companies/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'companyType' is set
            if (params.companyType == null) {
                throw new Error('Missing required parameter companyType when calling companyCompaniesTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.companyType),

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

    export class ConfigurationStatusesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Configuration Statuses Count
         * @param conditions
         */
        public companyConfigurationsStatusesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/configurations/statuses/count';

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
         * Get Configuration Statuses
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyConfigurationsStatusesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ConfigurationStatus>> {
            const localVarPath = this.basePath + '/company/configurations/statuses';

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
         * Delete Configuration Status By Id
         * @param id
         */
        public companyConfigurationsStatusesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/configurations/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdDelete');
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
         * Get Configuration Status By Id
         * @param id
         */
        public companyConfigurationsStatusesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationStatus> {
            const localVarPath = this.basePath + '/company/configurations/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdGet');
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
         * Update Configuration Status
         * @param id
         * @param operations
         */
        public companyConfigurationsStatusesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationStatus> {
            const localVarPath = this.basePath + '/company/configurations/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyConfigurationsStatusesIdPatch');
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
         * Replace Configuration Status
         * @param id
         * @param configurationStatus
         */
        public companyConfigurationsStatusesIdPut (params: {  id: number; configurationStatus: ConfigurationStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationStatus> {
            const localVarPath = this.basePath + '/company/configurations/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdPut');
            }
            // verify required parameter 'configurationStatus' is set
            if (params.configurationStatus == null) {
                throw new Error('Missing required parameter configurationStatus when calling companyConfigurationsStatusesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.configurationStatus),

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
         * Create Configuration Status
         * @param configurationStatus
         */
        public companyConfigurationsStatusesPost (params: {  configurationStatus: ConfigurationStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationStatus> {
            const localVarPath = this.basePath + '/company/configurations/statuses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'configurationStatus' is set
            if (params.configurationStatus == null) {
                throw new Error('Missing required parameter configurationStatus when calling companyConfigurationsStatusesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.configurationStatus),

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

    export class ConfigurationTypeQuestionsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Configuration Type Questions Count
         * @param id
         * @param conditions
         */
        public companyConfigurationsTypesIdQuestionsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}/questions/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsCountGet');
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
         * Get Configuration Type Questions
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyConfigurationsTypesIdQuestionsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ConfigurationTypeQuestion>> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}/questions'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsGet');
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
         * Create Configuration Type Question
         * @param id
         * @param configurationTypeQuestion
         */
        public companyConfigurationsTypesIdQuestionsPost (params: {  id: number; configurationTypeQuestion: ConfigurationTypeQuestion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationTypeQuestion> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}/questions'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsPost');
            }
            // verify required parameter 'configurationTypeQuestion' is set
            if (params.configurationTypeQuestion == null) {
                throw new Error('Missing required parameter configurationTypeQuestion when calling companyConfigurationsTypesIdQuestionsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.configurationTypeQuestion),

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
         * Delete Configuration Type Question By Id
         * @param id
         * @param questionId
         */
        public companyConfigurationsTypesIdQuestionsQuestionIdDelete (params: {  id: number; questionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'questionId' + '}', String(params.questionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdDelete');
            }
            // verify required parameter 'questionId' is set
            if (params.questionId == null) {
                throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdDelete');
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
         * Get Configuration Type Question By Id
         * @param id
         * @param questionId
         */
        public companyConfigurationsTypesIdQuestionsQuestionIdGet (params: {  id: number; questionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationTypeQuestion> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'questionId' + '}', String(params.questionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdGet');
            }
            // verify required parameter 'questionId' is set
            if (params.questionId == null) {
                throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdGet');
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
         * Update Configuration Type Question
         * @param id
         * @param questionId
         * @param operations
         */
        public companyConfigurationsTypesIdQuestionsQuestionIdPatch (params: {  id: number; questionId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationTypeQuestion> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'questionId' + '}', String(params.questionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdPatch');
            }
            // verify required parameter 'questionId' is set
            if (params.questionId == null) {
                throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyConfigurationsTypesIdQuestionsQuestionIdPatch');
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
         * Replace Configuration Type Question
         * @param id
         * @param questionId
         * @param configurationTypeQuestion
         */
        public companyConfigurationsTypesIdQuestionsQuestionIdPut (params: {  id: number; questionId: number; configurationTypeQuestion: ConfigurationTypeQuestion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationTypeQuestion> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'questionId' + '}', String(params.questionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdPut');
            }
            // verify required parameter 'questionId' is set
            if (params.questionId == null) {
                throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdPut');
            }
            // verify required parameter 'configurationTypeQuestion' is set
            if (params.configurationTypeQuestion == null) {
                throw new Error('Missing required parameter configurationTypeQuestion when calling companyConfigurationsTypesIdQuestionsQuestionIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.configurationTypeQuestion),

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

    export class ConfigurationTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Configuration Types Count
         * @param conditions
         */
        public companyConfigurationsTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/configurations/types/count';

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
         * Get Configuration Types
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyConfigurationsTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ConfigurationType>> {
            const localVarPath = this.basePath + '/company/configurations/types';

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
         * Delete Configuration Type By Id
         * @param id
         */
        public companyConfigurationsTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdDelete');
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
         * Get Configuration Type By Id
         * @param id
         */
        public companyConfigurationsTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationType> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdGet');
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
         * Update Configuration Type
         * @param id
         * @param operations
         */
        public companyConfigurationsTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationType> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyConfigurationsTypesIdPatch');
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
         * Replace Configuration Type
         * @param id
         * @param configurationType
         */
        public companyConfigurationsTypesIdPut (params: {  id: number; configurationType: ConfigurationType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationType> {
            const localVarPath = this.basePath + '/company/configurations/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdPut');
            }
            // verify required parameter 'configurationType' is set
            if (params.configurationType == null) {
                throw new Error('Missing required parameter configurationType when calling companyConfigurationsTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.configurationType),

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
         * Create Configuration Type
         * @param configurationType
         */
        public companyConfigurationsTypesPost (params: {  configurationType: ConfigurationType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationType> {
            const localVarPath = this.basePath + '/company/configurations/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'configurationType' is set
            if (params.configurationType == null) {
                throw new Error('Missing required parameter configurationType when calling companyConfigurationsTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.configurationType),

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

    export class ConfigurationsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Configurations Count
         * @param conditions
         * @param managedIdentifier
         */
        public companyConfigurationsCountGet (params: {  conditions?: string; managedIdentifier?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/configurations/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            if (params.managedIdentifier !== undefined) {
                queryParameters['managedIdentifier'] = params.managedIdentifier;
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
         * Get Configurations
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         * @param managedIdentifier
         */
        public companyConfigurationsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; managedIdentifier?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Configuration>> {
            const localVarPath = this.basePath + '/company/configurations';

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

            if (params.managedIdentifier !== undefined) {
                queryParameters['managedIdentifier'] = params.managedIdentifier;
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
         * Delete Configuration By Id
         * @param id
         */
        public companyConfigurationsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/configurations/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsIdDelete');
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
         * Get Configuration By Id
         * @param id
         */
        public companyConfigurationsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Configuration> {
            const localVarPath = this.basePath + '/company/configurations/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsIdGet');
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
         * Update Configuration
         * @param id
         * @param operations
         * @param managementSolutionName
         * @param managedIdentifier
         * @param type
         * @param level
         * @param childConfigurationsMatchingOn
         * @param inactivateConfigurationsMatchingOn
         * @param inactiveConfigurationStatusId
         */
        public companyConfigurationsIdPatch (params: {  id: number; operations: Array<PatchOperation>; managementSolutionName?: string; managedIdentifier?: string; type?: string; level?: string; childConfigurationsMatchingOn?: string; inactivateConfigurationsMatchingOn?: string; inactiveConfigurationStatusId?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Configuration> {
            const localVarPath = this.basePath + '/company/configurations/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyConfigurationsIdPatch');
            }
            if (params.managementSolutionName !== undefined) {
                queryParameters['managementSolutionName'] = params.managementSolutionName;
            }

            if (params.managedIdentifier !== undefined) {
                queryParameters['managedIdentifier'] = params.managedIdentifier;
            }

            if (params.type !== undefined) {
                queryParameters['type'] = params.type;
            }

            if (params.level !== undefined) {
                queryParameters['level'] = params.level;
            }

            if (params.childConfigurationsMatchingOn !== undefined) {
                queryParameters['childConfigurationsMatchingOn'] = params.childConfigurationsMatchingOn;
            }

            if (params.inactivateConfigurationsMatchingOn !== undefined) {
                queryParameters['inactivateConfigurationsMatchingOn'] = params.inactivateConfigurationsMatchingOn;
            }

            if (params.inactiveConfigurationStatusId !== undefined) {
                queryParameters['inactiveConfigurationStatusId'] = params.inactiveConfigurationStatusId;
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
         * Replace Configuration
         * @param id
         * @param configuration
         * @param managementSolutionName
         * @param managedIdentifier
         * @param type
         * @param level
         * @param childConfigurationsMatchingOn
         * @param inactivateConfigurationsMatchingOn
         * @param inactiveConfigurationStatusId
         */
        public companyConfigurationsIdPut (params: {  id: number; configuration: Configuration; managementSolutionName?: string; managedIdentifier?: string; type?: string; level?: string; childConfigurationsMatchingOn?: string; inactivateConfigurationsMatchingOn?: string; inactiveConfigurationStatusId?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Configuration> {
            const localVarPath = this.basePath + '/company/configurations/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyConfigurationsIdPut');
            }
            // verify required parameter 'configuration' is set
            if (params.configuration == null) {
                throw new Error('Missing required parameter configuration when calling companyConfigurationsIdPut');
            }
            if (params.managementSolutionName !== undefined) {
                queryParameters['managementSolutionName'] = params.managementSolutionName;
            }

            if (params.managedIdentifier !== undefined) {
                queryParameters['managedIdentifier'] = params.managedIdentifier;
            }

            if (params.type !== undefined) {
                queryParameters['type'] = params.type;
            }

            if (params.level !== undefined) {
                queryParameters['level'] = params.level;
            }

            if (params.childConfigurationsMatchingOn !== undefined) {
                queryParameters['childConfigurationsMatchingOn'] = params.childConfigurationsMatchingOn;
            }

            if (params.inactivateConfigurationsMatchingOn !== undefined) {
                queryParameters['inactivateConfigurationsMatchingOn'] = params.inactivateConfigurationsMatchingOn;
            }

            if (params.inactiveConfigurationStatusId !== undefined) {
                queryParameters['inactiveConfigurationStatusId'] = params.inactiveConfigurationStatusId;
            }

            let fetchParams = {
                method: 'PUT',
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
         * Create Configuration
         * @param configuration
         * @param managementSolutionName
         * @param managedIdentifier
         * @param type
         * @param level
         * @param childConfigurationsMatchingOn
         * @param inactivateConfigurationsMatchingOn
         * @param inactiveConfigurationStatusId
         */
        public companyConfigurationsPost (params: {  configuration: Configuration; managementSolutionName?: string; managedIdentifier?: string; type?: string; level?: string; childConfigurationsMatchingOn?: string; inactivateConfigurationsMatchingOn?: string; inactiveConfigurationStatusId?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Configuration> {
            const localVarPath = this.basePath + '/company/configurations';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'configuration' is set
            if (params.configuration == null) {
                throw new Error('Missing required parameter configuration when calling companyConfigurationsPost');
            }
            if (params.managementSolutionName !== undefined) {
                queryParameters['managementSolutionName'] = params.managementSolutionName;
            }

            if (params.managedIdentifier !== undefined) {
                queryParameters['managedIdentifier'] = params.managedIdentifier;
            }

            if (params.type !== undefined) {
                queryParameters['type'] = params.type;
            }

            if (params.level !== undefined) {
                queryParameters['level'] = params.level;
            }

            if (params.childConfigurationsMatchingOn !== undefined) {
                queryParameters['childConfigurationsMatchingOn'] = params.childConfigurationsMatchingOn;
            }

            if (params.inactivateConfigurationsMatchingOn !== undefined) {
                queryParameters['inactivateConfigurationsMatchingOn'] = params.inactivateConfigurationsMatchingOn;
            }

            if (params.inactiveConfigurationStatusId !== undefined) {
                queryParameters['inactiveConfigurationStatusId'] = params.inactiveConfigurationStatusId;
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
    }
//}
//export namespace  {
    'use strict';

    export class ContactCommunicationsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Delete Contact Communication By Id
         * @param id
         * @param communicationId
         */
        public companyContactsIdCommunicationsCommunicationIdDelete (params: {  id: number; communicationId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'communicationId' + '}', String(params.communicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdDelete');
            }
            // verify required parameter 'communicationId' is set
            if (params.communicationId == null) {
                throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdDelete');
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
         * Get Contact Communication By Id
         * @param id
         * @param communicationId
         */
        public companyContactsIdCommunicationsCommunicationIdGet (params: {  id: number; communicationId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactCommunication> {
            const localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'communicationId' + '}', String(params.communicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdGet');
            }
            // verify required parameter 'communicationId' is set
            if (params.communicationId == null) {
                throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdGet');
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
         * Update Contact Communication
         * @param id
         * @param communicationId
         * @param operations
         */
        public companyContactsIdCommunicationsCommunicationIdPatch (params: {  id: number; communicationId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactCommunication> {
            const localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'communicationId' + '}', String(params.communicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdPatch');
            }
            // verify required parameter 'communicationId' is set
            if (params.communicationId == null) {
                throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyContactsIdCommunicationsCommunicationIdPatch');
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
         * Replace Contact Communication
         * @param id
         * @param communicationId
         * @param contactCommunication
         */
        public companyContactsIdCommunicationsCommunicationIdPut (params: {  id: number; communicationId: number; contactCommunication: ContactCommunication; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactCommunication> {
            const localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'communicationId' + '}', String(params.communicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdPut');
            }
            // verify required parameter 'communicationId' is set
            if (params.communicationId == null) {
                throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdPut');
            }
            // verify required parameter 'contactCommunication' is set
            if (params.contactCommunication == null) {
                throw new Error('Missing required parameter contactCommunication when calling companyContactsIdCommunicationsCommunicationIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.contactCommunication),

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
         * Get Contact Communications Count
         * @param id
         * @param conditions
         */
        public companyContactsIdCommunicationsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/contacts/{id}/communications/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCountGet');
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
         * Get Contact Communications
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyContactsIdCommunicationsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ContactCommunication>> {
            const localVarPath = this.basePath + '/company/contacts/{id}/communications'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsGet');
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
         * Create Contact Communication
         * @param id
         * @param contactCommunication
         */
        public companyContactsIdCommunicationsPost (params: {  id: number; contactCommunication: ContactCommunication; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactCommunication> {
            const localVarPath = this.basePath + '/company/contacts/{id}/communications'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsPost');
            }
            // verify required parameter 'contactCommunication' is set
            if (params.contactCommunication == null) {
                throw new Error('Missing required parameter contactCommunication when calling companyContactsIdCommunicationsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.contactCommunication),

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

    export class ContactDepartmentsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Contact Departments Count
         * @param conditions
         */
        public companyContactsDepartmentsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/contacts/departments/count';

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
         * Get Contact Departments
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyContactsDepartmentsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ContactDepartment>> {
            const localVarPath = this.basePath + '/company/contacts/departments';

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
         * Delete Contact Department By Id
         * @param id
         */
        public companyContactsDepartmentsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/departments/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdDelete');
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
         * Get Contact Department By Id
         * @param id
         */
        public companyContactsDepartmentsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactDepartment> {
            const localVarPath = this.basePath + '/company/contacts/departments/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdGet');
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
         * Update Contact Department
         * @param id
         * @param operations
         */
        public companyContactsDepartmentsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactDepartment> {
            const localVarPath = this.basePath + '/company/contacts/departments/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyContactsDepartmentsIdPatch');
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
         * Replace Contact Department
         * @param id
         * @param contactDepartment
         */
        public companyContactsDepartmentsIdPut (params: {  id: number; contactDepartment: ContactDepartment; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactDepartment> {
            const localVarPath = this.basePath + '/company/contacts/departments/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdPut');
            }
            // verify required parameter 'contactDepartment' is set
            if (params.contactDepartment == null) {
                throw new Error('Missing required parameter contactDepartment when calling companyContactsDepartmentsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.contactDepartment),

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
         * Create Contact Department
         * @param contactDepartment
         */
        public companyContactsDepartmentsPost (params: {  contactDepartment: ContactDepartment; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactDepartment> {
            const localVarPath = this.basePath + '/company/contacts/departments';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'contactDepartment' is set
            if (params.contactDepartment == null) {
                throw new Error('Missing required parameter contactDepartment when calling companyContactsDepartmentsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.contactDepartment),

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

    export class ContactNotesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Contact Notes Count
         * @param id
         * @param conditions
         */
        public companyContactsIdNotesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/contacts/{id}/notes/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdNotesCountGet');
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
         * Get Contact Notes
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyContactsIdNotesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ContactNote>> {
            const localVarPath = this.basePath + '/company/contacts/{id}/notes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdNotesGet');
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
         * Delete Contact Note By Id
         * @param id
         * @param noteId
         */
        public companyContactsIdNotesNoteIdDelete (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdDelete');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdDelete');
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
         * Get Contact Note By Id
         * @param id
         * @param noteId
         */
        public companyContactsIdNotesNoteIdGet (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactNote> {
            const localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdGet');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdGet');
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
         * Update Contact Note
         * @param id
         * @param noteId
         * @param operations
         */
        public companyContactsIdNotesNoteIdPatch (params: {  id: number; noteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactNote> {
            const localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdPatch');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyContactsIdNotesNoteIdPatch');
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
         * Replace Contact Note
         * @param id
         * @param noteId
         * @param contactNote
         */
        public companyContactsIdNotesNoteIdPut (params: {  id: number; noteId: number; contactNote: ContactNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactNote> {
            const localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdPut');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdPut');
            }
            // verify required parameter 'contactNote' is set
            if (params.contactNote == null) {
                throw new Error('Missing required parameter contactNote when calling companyContactsIdNotesNoteIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.contactNote),

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
         * Create Contact Note
         * @param id
         * @param contactNote
         */
        public companyContactsIdNotesPost (params: {  id: number; contactNote: ContactNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactNote> {
            const localVarPath = this.basePath + '/company/contacts/{id}/notes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdNotesPost');
            }
            // verify required parameter 'contactNote' is set
            if (params.contactNote == null) {
                throw new Error('Missing required parameter contactNote when calling companyContactsIdNotesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.contactNote),

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

    export class ContactRelationshipsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Contact Relationships Count
         * @param conditions
         */
        public companyContactsRelationshipsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/contacts/relationships/count';

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
         * Get Contact Relationships
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyContactsRelationshipsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ContactRelationship>> {
            const localVarPath = this.basePath + '/company/contacts/relationships';

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
         * Delete Contact Relationship By Id
         * @param id
         */
        public companyContactsRelationshipsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/relationships/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdDelete');
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
         * Get Contact Relationship By Id
         * @param id
         */
        public companyContactsRelationshipsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactRelationship> {
            const localVarPath = this.basePath + '/company/contacts/relationships/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdGet');
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
         * Update Contact Relationship
         * @param id
         * @param operations
         */
        public companyContactsRelationshipsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactRelationship> {
            const localVarPath = this.basePath + '/company/contacts/relationships/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyContactsRelationshipsIdPatch');
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
         * Replace Contact Relationship
         * @param id
         * @param contactRelationship
         */
        public companyContactsRelationshipsIdPut (params: {  id: number; contactRelationship: ContactRelationship; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactRelationship> {
            const localVarPath = this.basePath + '/company/contacts/relationships/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdPut');
            }
            // verify required parameter 'contactRelationship' is set
            if (params.contactRelationship == null) {
                throw new Error('Missing required parameter contactRelationship when calling companyContactsRelationshipsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.contactRelationship),

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
         * Create Contact Relationship
         * @param contactRelationship
         */
        public companyContactsRelationshipsPost (params: {  contactRelationship: ContactRelationship; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactRelationship> {
            const localVarPath = this.basePath + '/company/contacts/relationships';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'contactRelationship' is set
            if (params.contactRelationship == null) {
                throw new Error('Missing required parameter contactRelationship when calling companyContactsRelationshipsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.contactRelationship),

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

    export class ContactTracksApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Tracks Count
         * @param id
         * @param conditions
         */
        public companyContactsIdTracksCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/contacts/{id}/tracks/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdTracksCountGet');
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
         * Get Tracks
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyContactsIdTracksGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Track>> {
            const localVarPath = this.basePath + '/company/contacts/{id}/tracks'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdTracksGet');
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
         * Create Track
         * @param id
         * @param track
         */
        public companyContactsIdTracksPost (params: {  id: number; track: Track; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Track> {
            const localVarPath = this.basePath + '/company/contacts/{id}/tracks'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdTracksPost');
            }
            // verify required parameter 'track' is set
            if (params.track == null) {
                throw new Error('Missing required parameter track when calling companyContactsIdTracksPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.track),

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
         * Delete Track By Id
         * @param id
         * @param trackId
         */
        public companyContactsIdTracksTrackIdDelete (params: {  id: number; trackId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/{id}/tracks/{trackId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'trackId' + '}', String(params.trackId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdTracksTrackIdDelete');
            }
            // verify required parameter 'trackId' is set
            if (params.trackId == null) {
                throw new Error('Missing required parameter trackId when calling companyContactsIdTracksTrackIdDelete');
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
         * Get Track By Id
         * @param id
         * @param trackId
         */
        public companyContactsIdTracksTrackIdGet (params: {  id: number; trackId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Track> {
            const localVarPath = this.basePath + '/company/contacts/{id}/tracks/{trackId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'trackId' + '}', String(params.trackId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdTracksTrackIdGet');
            }
            // verify required parameter 'trackId' is set
            if (params.trackId == null) {
                throw new Error('Missing required parameter trackId when calling companyContactsIdTracksTrackIdGet');
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

    export class ContactTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Contact Types Count
         * @param conditions
         */
        public companyContactsTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/contacts/types/count';

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
         * Get Contact Types
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyContactsTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ContactType>> {
            const localVarPath = this.basePath + '/company/contacts/types';

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
         * Delete Contact Type By Id
         * @param id
         */
        public companyContactsTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsTypesIdDelete');
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
         * Get Contact Type By Id
         * @param id
         */
        public companyContactsTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactType> {
            const localVarPath = this.basePath + '/company/contacts/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsTypesIdGet');
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
         * Update Contact Type
         * @param id
         * @param operations
         */
        public companyContactsTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactType> {
            const localVarPath = this.basePath + '/company/contacts/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyContactsTypesIdPatch');
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
         * Replace Contact Type
         * @param id
         * @param contactType
         */
        public companyContactsTypesIdPut (params: {  id: number; contactType: ContactType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactType> {
            const localVarPath = this.basePath + '/company/contacts/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsTypesIdPut');
            }
            // verify required parameter 'contactType' is set
            if (params.contactType == null) {
                throw new Error('Missing required parameter contactType when calling companyContactsTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.contactType),

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
         * Create Contact Type
         * @param contactType
         */
        public companyContactsTypesPost (params: {  contactType: ContactType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ContactType> {
            const localVarPath = this.basePath + '/company/contacts/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'contactType' is set
            if (params.contactType == null) {
                throw new Error('Missing required parameter contactType when calling companyContactsTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.contactType),

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

    export class ContactsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Contacts Count
         * @param conditions
         */
        public companyContactsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/company/contacts/count';

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
         * Get Contacts
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public companyContactsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Contact>> {
            const localVarPath = this.basePath + '/company/contacts';

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
         * Delete Contact By Id
         * @param id
         * @param transferContactId
         */
        public companyContactsIdDelete (params: {  id: number; transferContactId?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdDelete');
            }
            if (params.transferContactId !== undefined) {
                queryParameters['transferContactId'] = params.transferContactId;
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
         * Get Contact By Id
         * @param id
         */
        public companyContactsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/company/contacts/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdGet');
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
         * Get Contact Image
         * @param id
         * @param useDefaultFlag
         * @param lastModified
         */
        public companyContactsIdImageGet (params: {  id: number; useDefaultFlag?: boolean; lastModified?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/{id}/image'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdImageGet');
            }
            if (params.useDefaultFlag !== undefined) {
                queryParameters['useDefaultFlag'] = params.useDefaultFlag;
            }

            if (params.lastModified !== undefined) {
                queryParameters['lastModified'] = params.lastModified;
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
         * Update Contact
         * @param id
         * @param operations
         */
        public companyContactsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/company/contacts/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling companyContactsIdPatch');
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
         * Get Portal Security
         * @param id
         */
        public companyContactsIdPortalSecurityGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<PortalSecurity>> {
            const localVarPath = this.basePath + '/company/contacts/{id}/portalSecurity'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdPortalSecurityGet');
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
         * Replace Contact
         * @param id
         * @param contact
         */
        public companyContactsIdPut (params: {  id: number; contact: Contact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/company/contacts/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling companyContactsIdPut');
            }
            // verify required parameter 'contact' is set
            if (params.contact == null) {
                throw new Error('Missing required parameter contact when calling companyContactsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.contact),

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
         * Create Contact
         * @param contact
         */
        public companyContactsPost (params: {  contact: Contact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/company/contacts';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'contact' is set
            if (params.contact == null) {
                throw new Error('Missing required parameter contact when calling companyContactsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.contact),

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
         * Request Password
         * @param request
         */
        public companyContactsRequestPasswordPost (params: {  request: RequestPasswordRequest; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/company/contacts/requestPassword';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'request' is set
            if (params.request == null) {
                throw new Error('Missing required parameter request when calling companyContactsRequestPasswordPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.request),

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
         * Validate Portal Credentials
         * @param request
         */
        public companyContactsValidatePortalCredentialsPost (params: {  request: ValidatePortalRequest; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ValidatePortalResponse> {
            const localVarPath = this.basePath + '/company/contacts/validatePortalCredentials';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'request' is set
            if (params.request == null) {
                throw new Error('Missing required parameter request when calling companyContactsValidatePortalCredentialsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.request),

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
