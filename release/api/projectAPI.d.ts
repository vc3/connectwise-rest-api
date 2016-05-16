export interface AgreementReference {
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
export interface ContactReference {
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
export interface NoteTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
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
export interface PhaseStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Project {
    "id"?: number;
    "name": string;
    "company": CompanyReference;
    "site"?: SiteReference;
    "opportunity"?: OpportunityReference;
    "contact"?: ContactReference;
    "manager"?: MemberReference;
    "type"?: ProjectTypeReference;
    "board": ProjectBoardReference;
    "status"?: ProjectStatusReference;
    "agreement"?: AgreementReference;
    "billingMethod": BillingMethodEnum;
    "billingAmount"?: number;
    "estimatedTimeRevenue"?: number;
    "estimatedExpenseRevenue"?: number;
    "estimatedProductRevenue"?: number;
    "estimatedStart": Date;
    "estimatedEnd": Date;
    "estimatedHours"?: number;
    "description"?: string;
    "timeApprover"?: MemberReference;
    "expenseApprover"?: MemberReference;
    "budgetAnalysis"?: BudgetAnalysisEnum;
    "budgetFlag"?: boolean;
    "billingRateType"?: BillingRateTypeEnum;
    "billTime"?: BillTimeEnum;
    "billExpenses"?: BillExpensesEnum;
    "billProducts"?: BillProductsEnum;
    "downpayment"?: number;
    "restrictDownPaymentFlag"?: boolean;
    "billingAttention"?: string;
    "customerPO"?: string;
    "billProjectAfterClosedFlag"?: boolean;
    "billUnapprovedTimeAndExpense"?: boolean;
    "scheduledHours"?: number;
    "scheduledStart"?: string;
    "scheduledEnd"?: string;
    "actualHours"?: number;
    "actualStart"?: string;
    "actualEnd"?: string;
    "budgetHours"?: number;
    "projectTemplateId"?: number;
    "locationId"?: number;
    "businessUnitId"?: number;
    "shipToCompany"?: CompanyReference;
    "shipToContact"?: ContactReference;
    "shipToSite"?: SiteReference;
    "billToCompany"?: CompanyReference;
    "billToContact"?: ContactReference;
    "billToSite"?: SiteReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum BillingMethodEnum {
    ActualRates,
    FixedFee,
    NotToExceed,
    OverrideRate,
}
export declare enum BudgetAnalysisEnum {
    ActualHours,
    BillableHours,
}
export declare enum BillingRateTypeEnum {
    WorkRole,
    StaffMember,
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
export interface ProjectBoardReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectContact {
    "id"?: number;
    "projectId"?: number;
    "contact": ContactReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectNote {
    "id"?: number;
    "projectId"?: number;
    "text": string;
    "type"?: NoteTypeReference;
    "flagged"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectPhase {
    "id"?: number;
    "projectId"?: number;
    "description": string;
    "board"?: ProjectBoardReference;
    "status"?: PhaseStatusReference;
    "agreement"?: AgreementReference;
    "opportunity"?: OpportunityReference;
    "parentPhase"?: ProjectPhaseReference;
    "wbsCode"?: string;
    "billTime"?: BillTimeEnum;
    "billExpenses"?: BillExpensesEnum;
    "billProducts"?: BillProductsEnum;
    "markAsMilestoneFlag"?: boolean;
    "notes"?: string;
    "deadlineDate"?: Date;
    "billSeparatelyFlag"?: boolean;
    "billingMethod"?: BillingMethodEnum;
    "scheduledHours"?: number;
    "scheduledStart"?: string;
    "scheduledEnd"?: string;
    "actualHours"?: number;
    "actualStart"?: string;
    "actualEnd"?: string;
    "budgetHours"?: number;
    "locationId"?: number;
    "businessUnitId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
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
export declare enum BillingMethodEnum {
    ActualRates,
    FixedFee,
    NotToExceed,
    OverrideRate,
}
export interface ProjectPhaseReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectRoleReference {
    "id"?: number;
    "identifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectTeamMember {
    "id"?: number;
    "projectId"?: number;
    "hours"?: number;
    "member": MemberReference;
    "projectRole": ProjectRoleReference;
    "workRole"?: WorkRoleReference;
    "startDate"?: Date;
    "endDate"?: Date;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectTypeReference {
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
export declare class ProjectContactsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Project Contact By Id
     * @param id
     * @param contactId
     */
    projectProjectsIdContactsContactIdDelete(params: {
        id: number;
        contactId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Project Contact By Id
     * @param id
     * @param contactId
     */
    projectProjectsIdContactsContactIdGet(params: {
        id: number;
        contactId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectContact>;
    /**
     *
     * Get Project Contacts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    projectProjectsIdContactsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProjectContact>>;
    /**
     *
     * Create Project Contact
     * @param id
     * @param contact
     */
    projectProjectsIdContactsPost(params: {
        id: number;
        contact: ProjectContact;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectContact>;
}
export declare class ProjectNotesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Project Notes Count
     * @param id
     * @param conditions
     */
    projectProjectsIdNotesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Project Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    projectProjectsIdNotesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProjectNote>>;
    /**
     *
     * Delete Project Note By Id
     * @param id
     * @param noteId
     */
    projectProjectsIdNotesNoteIdDelete(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Project Note By Id
     * @param id
     * @param noteId
     */
    projectProjectsIdNotesNoteIdGet(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectNote>;
    /**
     *
     * Update Project Note
     * @param id
     * @param noteId
     * @param operations
     */
    projectProjectsIdNotesNoteIdPatch(params: {
        id: number;
        noteId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectNote>;
    /**
     *
     * Replace Project Note
     * @param id
     * @param noteId
     * @param note
     */
    projectProjectsIdNotesNoteIdPut(params: {
        id: number;
        noteId: number;
        note: ProjectNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectNote>;
    /**
     *
     * Create Project Note
     * @param id
     * @param note
     */
    projectProjectsIdNotesPost(params: {
        id: number;
        note: ProjectNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectNote>;
}
export declare class ProjectPhasesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Project Phases Count
     * @param id
     * @param conditions
     */
    projectProjectsIdPhasesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Project Phases
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    projectProjectsIdPhasesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProjectPhase>>;
    /**
     *
     * Delete Project Phase By Id
     * @param id
     * @param phaseId
     */
    projectProjectsIdPhasesPhaseIdDelete(params: {
        id: number;
        phaseId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Project Phase By Id
     * @param id
     * @param phaseId
     */
    projectProjectsIdPhasesPhaseIdGet(params: {
        id: number;
        phaseId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectPhase>;
    /**
     *
     * Update Project Phase
     * @param id
     * @param phaseId
     * @param operations
     */
    projectProjectsIdPhasesPhaseIdPatch(params: {
        id: number;
        phaseId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectPhase>;
    /**
     *
     * Replace Project Phase
     * @param id
     * @param phaseId
     * @param projectPhase
     */
    projectProjectsIdPhasesPhaseIdPut(params: {
        id: number;
        phaseId: number;
        projectPhase: ProjectPhase;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectPhase>;
    /**
     *
     * Create Project Phase
     * @param id
     * @param projectPhase
     */
    projectProjectsIdPhasesPost(params: {
        id: number;
        projectPhase: ProjectPhase;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectPhase>;
}
export declare class ProjectsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Projects Count
     * @param conditions
     */
    projectProjectsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Projects
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    projectProjectsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Project>>;
    /**
     *
     * Delete Project By Id
     * @param id
     */
    projectProjectsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Project By Id
     * @param id
     */
    projectProjectsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Project>;
    /**
     *
     * Update Project
     * @param id
     * @param operations
     */
    projectProjectsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Project>;
    /**
     *
     * Replace Project
     * @param id
     * @param project
     */
    projectProjectsIdPut(params: {
        id: number;
        project: Project;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Project>;
    /**
     *
     * Create Project
     * @param project
     */
    projectProjectsPost(params: {
        project: Project;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Project>;
}
export declare class ProjectsTeamMembersApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Team Members Count
     * @param id
     * @param conditions
     */
    projectProjectsIdTeamMembersCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Team Members
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    projectProjectsIdTeamMembersGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProjectTeamMember>>;
    /**
     *
     * Create Team Member
     * @param id
     * @param teamMember
     */
    projectProjectsIdTeamMembersPost(params: {
        id: number;
        teamMember: ProjectTeamMember;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectTeamMember>;
    /**
     *
     * Delete Team Member By Id
     * @param id
     * @param teamMemberId
     */
    projectProjectsIdTeamMembersTeamMemberIdDelete(params: {
        id: number;
        teamMemberId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Team Member By Id
     * @param id
     * @param teamMemberId
     */
    projectProjectsIdTeamMembersTeamMemberIdGet(params: {
        id: number;
        teamMemberId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectTeamMember>;
    /**
     *
     * Update Team Member
     * @param id
     * @param teamMemberId
     * @param operations
     */
    projectProjectsIdTeamMembersTeamMemberIdPatch(params: {
        id: number;
        teamMemberId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectTeamMember>;
    /**
     *
     * Replace Team Member
     * @param id
     * @param teamMemberId
     * @param teamMember
     */
    projectProjectsIdTeamMembersTeamMemberIdPut(params: {
        id: number;
        teamMemberId: number;
        teamMember: ProjectTeamMember;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ProjectTeamMember>;
}
