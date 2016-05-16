export interface ChargeCodeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Count {
    "value"?: number;
}
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
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
export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}
export interface ReminderReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ScheduleEntry {
    "id"?: number;
    "objectId"?: number;
    "name"?: string;
    "member"?: MemberReference;
    "where"?: ServiceLocationReference;
    "dateStart"?: Date;
    "dateEnd"?: Date;
    "reminder"?: ReminderReference;
    "status"?: ScheduleStatusReference;
    "type": ScheduleTypeReference;
    "span"?: ScheduleSpanReference;
    "doneFlag"?: boolean;
    "acknowledgedFlag"?: boolean;
    "ownerFlag"?: boolean;
    "allowScheduleConflictsFlag"?: boolean;
    "addMemberToProjectFlag"?: boolean;
    "projectRoleId"?: number;
    "closeDate"?: Date;
    "hours"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ScheduleSpanReference {
    "id"?: number;
    "identifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ScheduleStatus {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "showAsTentativeFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ScheduleStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ScheduleType {
    "id"?: number;
    "name": string;
    "identifier": string;
    "chargeCode"?: ChargeCodeReference;
    "where"?: ServiceLocationReference;
    "systemFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ScheduleTypeReference {
    "id"?: number;
    "identifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceLocationReference {
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
export declare class ScheduleEntriesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Schedules Count
     * @param conditions
     */
    scheduleEntriesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Schedules
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    scheduleEntriesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ScheduleEntry>>;
    /**
     *
     * Delete Schedule By Id
     * @param id
     */
    scheduleEntriesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Schedule By Id
     * @param id
     */
    scheduleEntriesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleEntry>;
    /**
     *
     * Update Schedule
     * @param id
     * @param operations
     */
    scheduleEntriesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleEntry>;
    /**
     *
     * Replace Schedule
     * @param id
     * @param scheduleEntry
     */
    scheduleEntriesIdPut(params: {
        id: number;
        scheduleEntry: ScheduleEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleEntry>;
    /**
     *
     * Create Schedule
     * @param scheduleEntry
     */
    scheduleEntriesPost(params: {
        scheduleEntry: ScheduleEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleEntry>;
}
export declare class ScheduleStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Schedule Statuses Count
     * @param conditions
     */
    scheduleStatusesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Schedule Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    scheduleStatusesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ScheduleStatus>>;
    /**
     *
     * Delete Schedule Status By Id
     * @param id
     */
    scheduleStatusesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Schedule Status By Id
     * @param id
     */
    scheduleStatusesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleStatus>;
    /**
     *
     * Update Schedule Status
     * @param id
     * @param operations
     */
    scheduleStatusesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleStatus>;
    /**
     *
     * Replace Schedule Status
     * @param id
     * @param scheduleStatus
     */
    scheduleStatusesIdPut(params: {
        id: number;
        scheduleStatus: ScheduleStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleStatus>;
    /**
     *
     * Create Schedule Status
     * @param scheduleStatus
     */
    scheduleStatusesPost(params: {
        scheduleStatus: ScheduleStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleStatus>;
}
export declare class ScheduleTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Schedule Types Count
     * @param conditions
     */
    scheduleTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Schedule Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    scheduleTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ScheduleType>>;
    /**
     *
     * Delete Schedule Type By Id
     * @param id
     */
    scheduleTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Schedule Type By Id
     * @param id
     */
    scheduleTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleType>;
    /**
     *
     * Update Schedule Type
     * @param id
     * @param operations
     */
    scheduleTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleType>;
    /**
     *
     * Replace Schedule Type
     * @param id
     * @param scheduleType
     */
    scheduleTypesIdPut(params: {
        id: number;
        scheduleType: ScheduleType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleType>;
    /**
     *
     * Create Schedule Type
     * @param scheduleType
     */
    scheduleTypesPost(params: {
        scheduleType: ScheduleType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ScheduleType>;
}
