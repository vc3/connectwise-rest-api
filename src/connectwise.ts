'use strict';

import {
	AccountingPackagesApi,
	AddressFormatsApi,
	AgreementBatchSetupsApi,
	AgreementTypeBoardDefaultsApi,
	AgreementTypeWorkRoleExclusionsApi,
	AgreementTypeWorkRolesApi,
	AgreementTypeWorkTypeExclusionsApi,
	AgreementTypeWorkTypesApi,
	AuthAnvilsApi,
	BillingCyclesApi,
	BillingSetupRoutingsApi,
	BillingSetupsApi,
	BillingStatusesApi,
	BillingTermsApi,
	BoardAutoAssignResourcesApi,
	BoardAutoTemplatesApi,
	BoardItemAssociationsApi,
	BoardNotificationsApi,
	BoardStatusNotificationsApi,
	BoardTypeSubTypeItemAssociationsApi,
	CalendarsApi,
	ChargeCodeExpenseTypesApi,
	ChargeCodesApi,
	ClassificationsApi,
	CommissionsApi,
	CompanyGroupsApi,
	CompanyPickerItemsApi,
	ConfigurationTypeQuestionValuesApi,
	ContactGroupsApi,
	CorporateStructureLevelsApi,
	CorporateStructuresApi,
	CountriesApi,
	CrmsApi,
	CustomReportParametersApi,
	CustomReportsApi,
	DeliveryMethodsApi,
	DepartmentLocationsApi,
	DepartmentsApi,
	DocumentsSetupApi,
	EmailConnectorParsingRulesApi,
	EmailConnectorParsingStylesApi,
	EmailConnectorsApi,
	EmailTokensApi,
	ExpenseReportsApi,
	ExpenseTypeExternalIntegrationReferencesApi,
	HolidayListsApi,
	HolidaysApi,
	ImapsApi,
	ImpactsApi,
	ImportsMassMaintenanceApi,
	IntegratorLoginsApi,
	InvoiceEmailTemplatesApi,
	InvoiceTemplatesApi,
	InvoiceTemplateSetupsApi,
	KPICategoriesApi,
	KPIsApi,
	LdapConfigurationsApi,
	LegacyCampaignSubTypesApi,
	LegacySubCategoriesApi,
	LocationDepartmentsApi,
	LocationWorkRolesApi,
	ManagedDevicesIntegrationCrossReferencesApi,
	ManagedDevicesIntegrationLoginsApi,
	ManagedDevicesIntegrationNotificationsApi,
	ManagedDevicesIntegrationsApi,
	ManagementExecuteManagedItSyncsApi,
	ManagementItSolutionAgreementInterfaceParametersApi,
	ManagementItSolutionsApi,
	ManagementLogsApi,
	ManagementNetworksSecurityApi,
	ManagementReportNotificationsApi,
	ManagementsApi,
	MemberAccrualsApi,
	MemberCertificationsApi,
	MemberDelegationsApi,
	MemberSkillsApi,
	MenuEntryLocationsApi,
	MyCompanyPurchasingsApi,
	NotificationRecipientsApi,
	OrderStatusesEmailTemplateApi,
	OrderStatusNotificationsApi,
	OthersApi,
	ParsingTypesApi,
	ParsingVariablesApi,
	PaymentTypesApi,
	PortalCalendarsApi,
	PortalConfigurationInvoiceSetupsApi,
	PortalConfigurationOpportunitySetupsApi,
	PortalConfigurationPasswordEmailSetupsApi,
	PortalConfigurationProjectSetupsApi,
	PortalConfigurationsApi,
	PortalConfigurationServiceSetupsApi,
	PortalReportsApi,
	PortalSecuritiesApi,
	PortalSecurityLevelsApi,
	ProjectSecurityRolesApi,
	ProjectSecurityRoleSettingsApi,
	ProjectStatusesApi,
	ProjectTypesApi,
	PurchaseOrderStatusEmailTemplatesApi,
	PurchaseOrderStatusesApi,
	PurchaseOrderStatusNotificationsApi,
	ReportCardDetailsApi,
	ReportCardsApi,
	ReportingServicesApi,
	RmaStatusEmailTemplatesApi,
	RmaStatusesApi,
	RmaStatusNotificationsApi,
	SalesQuotasApi,
	SalesTeamMembersApi,
	SalesTeamsApi,
	ScheduleColorsApi,
	ScheduleDetailsApi,
	SecurityRolesApi,
	SecurityRoleSettingsApi,
	ServiceEmailTemplatesApi,
	ServiceLocationsApi,
	ServicesApi,
	ServiceSignoffsApi,
	ServiceSurveyQuestionsApi,
	ServiceSurveysApi,
	ServiceTeamsApi,
	ServiceTemplatesApi,
	SetupScreensApi,
	SeveritiesApi,
	SLAPrioritiesApi,
	SLAsApi,
	StatesApi,
	StatusExternalIntegrationReferencesApi,
	SurveyOptionsApi,
	SurveyQuestionValuesApi,
	SystemTracksApi,
	TaxCodeExpenseTypeExemptionsApi,
	TaxCodeProductTypeExemptionsApi,
	TaxCodeWorkRoleExemptionsApi,
	TaxIntegrationsApi,
	TeamMembersApi,
	TicketSyncsApi,
	TimeAccrualDetailsApi,
	TimeAccrualsApi,
	TimeExpensesApi,
	TimePeriodsApi,
	TimePeriodSetupsApi,
	TimeSheetsApi,
	TimeZonesApi,
	TimeZoneSetupsApi,
	TrackActionsApi,
	WarehouseBinsApi,
	WarehousesApi,
	WorkflowActionAutomateParametersApi,
	WorkflowActionsApi,
	WorkflowEventsApi,
	WorkflowNotifyTypesApi,
	WorkflowsApi,
	WorkflowTableTypesApi,
	WorkflowTriggerOptionsApi,
	WorkflowTriggersApi,
	WorkRoleLocationsApi,
	WorkRolesApi,
	WorkTypeExternalIntegrationReferencesApi,
	WorkTypesApi,
	AccountingBatchesApi,
	AccountingUnpostedExpensesApi,
	AccountingUnpostedProcurementsApi,
	AccountingUnpostedinvoicesApi,
	ActivitiesApi,
	ActivityStatusesApi,
	ActivityStopwatchesApi,
	ActivityTypesApi,
	AdjustmentDetailsApi,
	AdjustmentTypesApi,
	AdjustmentsApi,
	AgreementSitesApi,
	AgreementAdditionsApi,
	AgreementAdjustmentsApi,
	AgreementBoardDefaultsApi,
	AgreementTypesApi,
	AgreementWorkRoleExclusionsApi,
	AgreementWorkRolesApi,
	AgreementWorkTypeExclusionsApi,
	AgreementWorkTypesApi,
	AgreementsApi,
	AuditTrailApi,
	BatchApi,
	BoardExcludedMembersApi,
	BoardItemsApi,
	BoardStatusesApi,
	BoardSubTypesApi,
	BoardTeamsApi,
	BoardTypesApi,
	BoardsApi,
	CallbacksApi,
	CampaignAuditsApi,
	CampaignEmailsOpenedApi,
	CampaignFormsSubmittedApi,
	CampaignLinksClickedApi,
	CampaignStatusesApi,
	CampaignSubTypesApi,
	CampaignTypesApi,
	CampaignsApi,
	CatalogComponentsApi,
	CatalogsItemApi,
	CategoriesApi,
	CertificationsApi,
	CodesApi,
	CompaniesApi,
	CompanyCustomNotesApi,
	CompanyManagementSummaryReportsApi,
	CompanyNotesApi,
	CompanyNoteTypesApi,
	CompanySitesApi,
	CompanyStatusesApi,
	CompanyTeamsApi,
	CompanyTypesApi,
	ConfigurationStatusesApi,
	ConfigurationTypeQuestionsApi,
	ConfigurationTypesApi,
	ContactsApi,
	CurrenciesApi,
	ConfigurationsApi,
	ContactNotesApi,
	ContactTypesApi,
	ContactTracksApi,
	ContactDepartmentsApi,
	ContactRelationshipsApi,
	ContactCommunicationsApi,
	ConnectWiseHostedSetupsApi,
	DocumentsApi,
	ExpenseEntriesApi,
	ExpenseTypesApi,
	GroupCompaniesApi,
	GroupsApi,
	GroupContactsApi,
	InfoApi,
	InOutBoardsApi,
	InOutTypesApi,
	InvoicesApi,
	InvoicePaymentsApi,
	KnowledgeBaseArticlesApi,
	LinksApi,
	LocationsApi,
	ManagementBackupsApi,
	ManagementEmailsApi,
	MarketDescriptionsApi,
	ManufacturersApi,
	MembersApi,
	MemberTypesApi,
	MenuEntriesApi,
	OpportunitiesApi,
	OrdersApi,
	OrderStatusesApi,
	OpportunityNotesApi,
	OpportunityTeamsApi,
	OpportunityTypesApi,
	OpportunityRatingsApi,
	OpportunityContactsApi,
	OpportunityStatusesApi,
	OpportunityStagesApi,
	OpportunityForecastsApi,
	OwnershipTypesApi,
	PricingBreaksApi,
	ProjectsApi,
	PrioritiesApi,
	ProductsItemApi,
	ProductTypesApi,
	ProjectNotesApi,
	ProjectPhasesApi,
	PricingDetailsApi,
	PurchaseOrdersApi,
	ProjectContactsApi,
	PricingSchedulesApi,
	ProductComponentsApi,
	ProjectsTeammembersApi,
	PurchaseOrderLineItemsApi,
	ProductPickingShippingDetailsApi,
	ReportsApi,
	RMAActionsApi,
	RMADispositionsApi,
	RolesApi,
	SalesProbabilitiesApi,
	SourcesApi,
	SurveysApi,
	ScheduleTypesApi,
	SubCategoriesApi,
	SurveyResultsApi,
	ScheduleEntriesApi,
	ShipmentMethodsApi,
	SurveyQuestionsApi,
	ScheduleStatusesApi,
	ScheduleStopwatchesApi,
	ScheduleReminderTimesApi,
	TaxCodeXRefsApi,
	TicketsApi,
	TaxCodesApi,
	TicketNotesApi,
	TicketTasksApi,
	TimeEntriesApi,
	TeamRolesApi,
	SkillsApi,
	SkillCategoriesApi,
	TodayPageCategoriesApi,
	TicketStopwatchesApi,
	UnitOfMeasureConversionsApi,
	UnitOfMeasuresApi,
	UserDefinedFieldsApi
} from './api/api';

export class Connectwise {
	public readonly AccountingPackagesApi: AccountingPackagesApi;
	public readonly AddressFormatsApi: AddressFormatsApi;
	public readonly AgreementBatchSetupsApi: AgreementBatchSetupsApi;
	public readonly AgreementTypeBoardDefaultsApi: AgreementTypeBoardDefaultsApi;
	public readonly AgreementTypeWorkRoleExclusionsApi: AgreementTypeWorkRoleExclusionsApi;
	public readonly AgreementTypeWorkRolesApi: AgreementTypeWorkRolesApi;
	public readonly AgreementTypeWorkTypeExclusionsApi: AgreementTypeWorkTypeExclusionsApi;
	public readonly AgreementTypeWorkTypesApi: AgreementTypeWorkTypesApi;
	public readonly AuthAnvilsApi: AuthAnvilsApi;
	public readonly BillingCyclesApi: BillingCyclesApi;
	public readonly BillingSetupRoutingsApi: BillingSetupRoutingsApi;
	public readonly BillingSetupsApi: BillingSetupsApi;
	public readonly BillingStatusesApi: BillingStatusesApi;
	public readonly BillingTermsApi: BillingTermsApi;
	public readonly BoardAutoAssignResourcesApi: BoardAutoAssignResourcesApi;
	public readonly BoardAutoTemplatesApi: BoardAutoTemplatesApi;
	public readonly BoardItemAssociationsApi: BoardItemAssociationsApi;
	public readonly BoardNotificationsApi: BoardNotificationsApi;
	public readonly BoardStatusNotificationsApi: BoardStatusNotificationsApi;
	public readonly BoardTypeSubTypeItemAssociationsApi: BoardTypeSubTypeItemAssociationsApi;
	public readonly CalendarsApi: CalendarsApi;
	public readonly ChargeCodeExpenseTypesApi: ChargeCodeExpenseTypesApi;
	public readonly ChargeCodesApi: ChargeCodesApi;
	public readonly ClassificationsApi: ClassificationsApi;
	public readonly CommissionsApi: CommissionsApi;
	public readonly CompanyGroupsApi: CompanyGroupsApi;
	public readonly CompanyPickerItemsApi: CompanyPickerItemsApi;
	public readonly ConfigurationTypeQuestionValuesApi: ConfigurationTypeQuestionValuesApi;
	public readonly ContactGroupsApi: ContactGroupsApi;
	public readonly CorporateStructureLevelsApi: CorporateStructureLevelsApi;
	public readonly CorporateStructuresApi: CorporateStructuresApi;
	public readonly CountriesApi: CountriesApi;
	public readonly CrmsApi: CrmsApi;
	public readonly CustomReportParametersApi: CustomReportParametersApi;
	public readonly CustomReportsApi: CustomReportsApi;
	public readonly DeliveryMethodsApi: DeliveryMethodsApi;
	public readonly DepartmentLocationsApi: DepartmentLocationsApi;
	public readonly DepartmentsApi: DepartmentsApi;
	public readonly DocumentsSetupApi: DocumentsSetupApi;
	public readonly EmailConnectorParsingRulesApi: EmailConnectorParsingRulesApi;
	public readonly EmailConnectorParsingStylesApi: EmailConnectorParsingStylesApi;
	public readonly EmailConnectorsApi: EmailConnectorsApi;
	public readonly EmailTokensApi: EmailTokensApi;
	public readonly ExpenseReportsApi: ExpenseReportsApi;
	public readonly ExpenseTypeExternalIntegrationReferencesApi: ExpenseTypeExternalIntegrationReferencesApi;
	public readonly HolidayListsApi: HolidayListsApi;
	public readonly HolidaysApi: HolidaysApi;
	public readonly ImapsApi: ImapsApi;
	public readonly ImpactsApi: ImpactsApi;
	public readonly ImportsMassMaintenanceApi: ImportsMassMaintenanceApi;
	public readonly IntegratorLoginsApi: IntegratorLoginsApi;
	public readonly InvoiceEmailTemplatesApi: InvoiceEmailTemplatesApi;
	public readonly InvoiceTemplatesApi: InvoiceTemplatesApi;
	public readonly InvoiceTemplateSetupsApi: InvoiceTemplateSetupsApi;
	public readonly KPICategoriesApi: KPICategoriesApi;
	public readonly KPIsApi: KPIsApi;
	public readonly LdapConfigurationsApi: LdapConfigurationsApi;
	public readonly LegacyCampaignSubTypesApi: LegacyCampaignSubTypesApi;
	public readonly LegacySubCategoriesApi: LegacySubCategoriesApi;
	public readonly LocationDepartmentsApi: LocationDepartmentsApi;
	public readonly LocationWorkRolesApi: LocationWorkRolesApi;
	public readonly ManagedDevicesIntegrationCrossReferencesApi: ManagedDevicesIntegrationCrossReferencesApi;
	public readonly ManagedDevicesIntegrationLoginsApi: ManagedDevicesIntegrationLoginsApi;
	public readonly ManagedDevicesIntegrationNotificationsApi: ManagedDevicesIntegrationNotificationsApi;
	public readonly ManagedDevicesIntegrationsApi: ManagedDevicesIntegrationsApi;
	public readonly ManagementExecuteManagedItSyncsApi: ManagementExecuteManagedItSyncsApi;
	public readonly ManagementItSolutionAgreementInterfaceParametersApi: ManagementItSolutionAgreementInterfaceParametersApi;
	public readonly ManagementItSolutionsApi: ManagementItSolutionsApi;
	public readonly ManagementLogsApi: ManagementLogsApi;
	public readonly ManagementNetworksSecurityApi: ManagementNetworksSecurityApi;
	public readonly ManagementReportNotificationsApi: ManagementReportNotificationsApi;
	public readonly ManagementsApi: ManagementsApi;
	public readonly MemberAccrualsApi: MemberAccrualsApi;
	public readonly MemberCertificationsApi: MemberCertificationsApi;
	public readonly MemberDelegationsApi: MemberDelegationsApi;
	public readonly MemberSkillsApi: MemberSkillsApi;
	public readonly MenuEntryLocationsApi: MenuEntryLocationsApi;
	public readonly MyCompanyPurchasingsApi: MyCompanyPurchasingsApi;
	public readonly NotificationRecipientsApi: NotificationRecipientsApi;
	public readonly OrderStatusesEmailTemplateApi: OrderStatusesEmailTemplateApi;
	public readonly OrderStatusNotificationsApi: OrderStatusNotificationsApi;
	public readonly OthersApi: OthersApi;
	public readonly ParsingTypesApi: ParsingTypesApi;
	public readonly ParsingVariablesApi: ParsingVariablesApi;
	public readonly PaymentTypesApi: PaymentTypesApi;
	public readonly PortalCalendarsApi: PortalCalendarsApi;
	public readonly PortalConfigurationInvoiceSetupsApi: PortalConfigurationInvoiceSetupsApi;
	public readonly PortalConfigurationOpportunitySetupsApi: PortalConfigurationOpportunitySetupsApi;
	public readonly PortalConfigurationPasswordEmailSetupsApi: PortalConfigurationPasswordEmailSetupsApi;
	public readonly PortalConfigurationProjectSetupsApi: PortalConfigurationProjectSetupsApi;
	public readonly PortalConfigurationsApi: PortalConfigurationsApi;
	public readonly PortalConfigurationServiceSetupsApi: PortalConfigurationServiceSetupsApi;
	public readonly PortalReportsApi: PortalReportsApi;
	public readonly PortalSecuritiesApi: PortalSecuritiesApi;
	public readonly PortalSecurityLevelsApi: PortalSecurityLevelsApi;
	public readonly ProjectSecurityRolesApi: ProjectSecurityRolesApi;
	public readonly ProjectSecurityRoleSettingsApi: ProjectSecurityRoleSettingsApi;
	public readonly ProjectStatusesApi: ProjectStatusesApi;
	public readonly ProjectTypesApi: ProjectTypesApi;
	public readonly PurchaseOrderStatusEmailTemplatesApi: PurchaseOrderStatusEmailTemplatesApi;
	public readonly PurchaseOrderStatusesApi: PurchaseOrderStatusesApi;
	public readonly PurchaseOrderStatusNotificationsApi: PurchaseOrderStatusNotificationsApi;
	public readonly ReportCardDetailsApi: ReportCardDetailsApi;
	public readonly ReportCardsApi: ReportCardsApi;
	public readonly ReportingServicesApi: ReportingServicesApi;
	public readonly RmaStatusEmailTemplatesApi: RmaStatusEmailTemplatesApi;
	public readonly RmaStatusesApi: RmaStatusesApi;
	public readonly RmaStatusNotificationsApi: RmaStatusNotificationsApi;
	public readonly SalesQuotasApi: SalesQuotasApi;
	public readonly SalesTeamMembersApi: SalesTeamMembersApi;
	public readonly SalesTeamsApi: SalesTeamsApi;
	public readonly ScheduleColorsApi: ScheduleColorsApi;
	public readonly ScheduleDetailsApi: ScheduleDetailsApi;
	public readonly SecurityRolesApi: SecurityRolesApi;
	public readonly SecurityRoleSettingsApi: SecurityRoleSettingsApi;
	public readonly ServiceEmailTemplatesApi: ServiceEmailTemplatesApi;
	public readonly ServiceLocationsApi: ServiceLocationsApi;
	public readonly ServicesApi: ServicesApi;
	public readonly ServiceSignoffsApi: ServiceSignoffsApi;
	public readonly ServiceSurveyQuestionsApi: ServiceSurveyQuestionsApi;
	public readonly ServiceSurveysApi: ServiceSurveysApi;
	public readonly ServiceTeamsApi: ServiceTeamsApi;
	public readonly ServiceTemplatesApi: ServiceTemplatesApi;
	public readonly SetupScreensApi: SetupScreensApi;
	public readonly SeveritiesApi: SeveritiesApi;
	public readonly SLAPrioritiesApi: SLAPrioritiesApi;
	public readonly SLAsApi: SLAsApi;
	public readonly StatesApi: StatesApi;
	public readonly StatusExternalIntegrationReferencesApi: StatusExternalIntegrationReferencesApi;
	public readonly SurveyOptionsApi: SurveyOptionsApi;
	public readonly SurveyQuestionValuesApi: SurveyQuestionValuesApi;
	public readonly SystemTracksApi: SystemTracksApi;
	public readonly TaxCodeExpenseTypeExemptionsApi: TaxCodeExpenseTypeExemptionsApi;
	public readonly TaxCodeProductTypeExemptionsApi: TaxCodeProductTypeExemptionsApi;
	public readonly TaxCodeWorkRoleExemptionsApi: TaxCodeWorkRoleExemptionsApi;
	public readonly TaxIntegrationsApi: TaxIntegrationsApi;
	public readonly TeamMembersApi: TeamMembersApi;
	public readonly TicketSyncsApi: TicketSyncsApi;
	public readonly TimeAccrualDetailsApi: TimeAccrualDetailsApi;
	public readonly TimeAccrualsApi: TimeAccrualsApi;
	public readonly TimeExpensesApi: TimeExpensesApi;
	public readonly TimePeriodsApi: TimePeriodsApi;
	public readonly TimePeriodSetupsApi: TimePeriodSetupsApi;
	public readonly TimeSheetsApi: TimeSheetsApi;
	public readonly TimeZonesApi: TimeZonesApi;
	public readonly TimeZoneSetupsApi: TimeZoneSetupsApi;
	public readonly TrackActionsApi: TrackActionsApi;
	public readonly WarehouseBinsApi: WarehouseBinsApi;
	public readonly WarehousesApi: WarehousesApi;
	public readonly WorkflowActionAutomateParametersApi: WorkflowActionAutomateParametersApi;
	public readonly WorkflowActionsApi: WorkflowActionsApi;
	public readonly WorkflowEventsApi: WorkflowEventsApi;
	public readonly WorkflowNotifyTypesApi: WorkflowNotifyTypesApi;
	public readonly WorkflowsApi: WorkflowsApi;
	public readonly WorkflowTableTypesApi: WorkflowTableTypesApi;
	public readonly WorkflowTriggerOptionsApi: WorkflowTriggerOptionsApi;
	public readonly WorkflowTriggersApi: WorkflowTriggersApi;
	public readonly WorkRoleLocationsApi: WorkRoleLocationsApi;
	public readonly WorkRolesApi: WorkRolesApi;
	public readonly WorkTypeExternalIntegrationReferencesApi: WorkTypeExternalIntegrationReferencesApi;
	public readonly WorkTypesApi: WorkTypesApi;
	public readonly AccountingBatchesApi: AccountingBatchesApi;
	public readonly AccountingUnpostedExpensesApi: AccountingUnpostedExpensesApi;
	public readonly AccountingUnpostedProcurementsApi: AccountingUnpostedProcurementsApi;
	public readonly AccountingUnpostedinvoicesApi: AccountingUnpostedinvoicesApi;
	public readonly ActivitiesApi: ActivitiesApi;
	public readonly ActivityStatusesApi: ActivityStatusesApi;
	public readonly ActivityStopwatchesApi: ActivityStopwatchesApi;
	public readonly ActivityTypesApi: ActivityTypesApi;
	public readonly AdjustmentDetailsApi: AdjustmentDetailsApi;
	public readonly AdjustmentTypesApi: AdjustmentTypesApi;
	public readonly AdjustmentsApi: AdjustmentsApi;
	public readonly AgreementSitesApi: AgreementSitesApi;
	public readonly AgreementAdditionsApi: AgreementAdditionsApi;
	public readonly AgreementAdjustmentsApi: AgreementAdjustmentsApi;
	public readonly AgreementBoardDefaultsApi: AgreementBoardDefaultsApi;
	public readonly AgreementTypesApi: AgreementTypesApi;
	public readonly AgreementWorkRoleExclusionsApi: AgreementWorkRoleExclusionsApi;
	public readonly AgreementWorkRolesApi: AgreementWorkRolesApi;
	public readonly AgreementWorkTypeExclusionsApi: AgreementWorkTypeExclusionsApi;
	public readonly AgreementWorkTypesApi: AgreementWorkTypesApi;
	public readonly AgreementsApi: AgreementsApi;
	public readonly AuditTrailApi: AuditTrailApi;
	public readonly BatchApi: BatchApi;
	public readonly BoardExcludedMembersApi: BoardExcludedMembersApi;
	public readonly BoardItemsApi: BoardItemsApi;
	public readonly BoardStatusesApi: BoardStatusesApi;
	public readonly BoardSubTypesApi: BoardSubTypesApi;
	public readonly BoardTeamsApi: BoardTeamsApi;
	public readonly BoardTypesApi: BoardTypesApi;
	public readonly BoardsApi: BoardsApi;
	public readonly CallbacksApi: CallbacksApi;
	public readonly CampaignAuditsApi: CampaignAuditsApi;
	public readonly CampaignEmailsOpenedApi: CampaignEmailsOpenedApi;
	public readonly CampaignFormsSubmittedApi: CampaignFormsSubmittedApi;
	public readonly CampaignLinksClickedApi: CampaignLinksClickedApi;
	public readonly CampaignStatusesApi: CampaignStatusesApi;
	public readonly CampaignSubTypesApi: CampaignSubTypesApi;
	public readonly CampaignTypesApi: CampaignTypesApi;
	public readonly CampaignsApi: CampaignsApi;
	public readonly CatalogComponentsApi: CatalogComponentsApi;
	public readonly CatalogsItemApi: CatalogsItemApi;
	public readonly CategoriesApi: CategoriesApi;
	public readonly CertificationsApi: CertificationsApi;
	public readonly CodesApi: CodesApi;
	public readonly CompaniesApi: CompaniesApi;
	public readonly CompanyCustomNotesApi: CompanyCustomNotesApi;
	public readonly CompanyManagementSummaryReportsApi: CompanyManagementSummaryReportsApi;
	public readonly CompanyNotesApi: CompanyNotesApi;
	public readonly CompanyNoteTypesApi: CompanyNoteTypesApi;
	public readonly CompanySitesApi: CompanySitesApi;
	public readonly CompanyStatusesApi: CompanyStatusesApi;
	public readonly CompanyTeamsApi: CompanyTeamsApi;
	public readonly CompanyTypesApi: CompanyTypesApi;
	public readonly ConfigurationStatusesApi: ConfigurationStatusesApi;
	public readonly ConfigurationTypeQuestionsApi: ConfigurationTypeQuestionsApi;
	public readonly ConfigurationTypesApi: ConfigurationTypesApi;
	public readonly ContactsApi: ContactsApi;
	public readonly CurrenciesApi: CurrenciesApi;
	public readonly ConfigurationsApi: ConfigurationsApi;
	public readonly ContactNotesApi: ContactNotesApi;
	public readonly ContactTypesApi: ContactTypesApi;
	public readonly ContactTracksApi: ContactTracksApi;
	public readonly ContactDepartmentsApi: ContactDepartmentsApi;
	public readonly ContactRelationshipsApi: ContactRelationshipsApi;
	public readonly ContactCommunicationsApi: ContactCommunicationsApi;
	public readonly ConnectWiseHostedSetupsApi: ConnectWiseHostedSetupsApi;
	public readonly DocumentsApi: DocumentsApi;
	public readonly ExpenseEntriesApi: ExpenseEntriesApi;
	public readonly ExpenseTypesApi: ExpenseTypesApi;
	public readonly GroupCompaniesApi: GroupCompaniesApi;
	public readonly GroupsApi: GroupsApi;
	public readonly GroupContactsApi: GroupContactsApi;
	public readonly InfoApi: InfoApi;
	public readonly InOutBoardsApi: InOutBoardsApi;
	public readonly InOutTypesApi: InOutTypesApi;
	public readonly InvoicesApi: InvoicesApi;
	public readonly InvoicePaymentsApi: InvoicePaymentsApi;
	public readonly KnowledgeBaseArticlesApi: KnowledgeBaseArticlesApi;
	public readonly LinksApi: LinksApi;
	public readonly LocationsApi: LocationsApi;
	public readonly MembersApi: MembersApi;
	public readonly MemberTypesApi: MemberTypesApi;
	public readonly ManagementBackupsApi: ManagementBackupsApi;
	public readonly ManagementEmailsApi: ManagementEmailsApi;
	public readonly MarketDescriptionsApi: MarketDescriptionsApi;
	public readonly ManufacturersApi: ManufacturersApi;
	public readonly MenuEntriesApi: MenuEntriesApi;
	public readonly OpportunitiesApi: OpportunitiesApi;
	public readonly OrdersApi: OrdersApi;
	public readonly OrderStatusesApi: OrderStatusesApi;
	public readonly OpportunityNotesApi: OpportunityNotesApi;
	public readonly OpportunityTeamsApi: OpportunityTeamsApi;
	public readonly OpportunityTypesApi: OpportunityTypesApi;
	public readonly OpportunityRatingsApi: OpportunityRatingsApi;
	public readonly OpportunityContactsApi: OpportunityContactsApi;
	public readonly OpportunityStatusesApi: OpportunityStatusesApi;
	public readonly OpportunityStagesApi: OpportunityStagesApi;
	public readonly OpportunityForecastsApi: OpportunityForecastsApi;
	public readonly OwnershipTypesApi: OwnershipTypesApi;
	public readonly PricingBreaksApi: PricingBreaksApi;
	public readonly ProjectsApi: ProjectsApi;
	public readonly PrioritiesApi: PrioritiesApi;
	public readonly ProductsItemApi: ProductsItemApi;
	public readonly ProductTypesApi: ProductTypesApi;
	public readonly ProjectNotesApi: ProjectNotesApi;
	public readonly ProjectPhasesApi: ProjectPhasesApi;
	public readonly PricingDetailsApi: PricingDetailsApi;
	public readonly PurchaseOrdersApi: PurchaseOrdersApi;
	public readonly ProjectContactsApi: ProjectContactsApi;
	public readonly PricingSchedulesApi: PricingSchedulesApi;
	public readonly ProductComponentsApi: ProductComponentsApi;
	public readonly ProjectsTeammembersApi: ProjectsTeammembersApi;
	public readonly PurchaseOrderLineItemsApi: PurchaseOrderLineItemsApi;
	public readonly ProductPickingShippingDetailsApi: ProductPickingShippingDetailsApi;
	public readonly ReportsApi: ReportsApi;
	public readonly RMAActionsApi: RMAActionsApi;
	public readonly RMADispositionsApi: RMADispositionsApi;
	public readonly RolesApi: RolesApi;
	public readonly SalesProbabilitiesApi: SalesProbabilitiesApi;
	public readonly SkillsApi: SkillsApi;
	public readonly SkillCategoriesApi: SkillCategoriesApi;
	public readonly SourcesApi: SourcesApi;
	public readonly SurveysApi: SurveysApi;
	public readonly ScheduleTypesApi: ScheduleTypesApi;
	public readonly SubCategoriesApi: SubCategoriesApi;
	public readonly SurveyResultsApi: SurveyResultsApi;
	public readonly ScheduleEntriesApi: ScheduleEntriesApi;
	public readonly ShipmentMethodsApi: ShipmentMethodsApi;
	public readonly SurveyQuestionsApi: SurveyQuestionsApi;
	public readonly ScheduleStatusesApi: ScheduleStatusesApi;
	public readonly ScheduleStopwatchesApi: ScheduleStopwatchesApi;
	public readonly ScheduleReminderTimesApi: ScheduleReminderTimesApi;
	public readonly TaxCodeXRefsApi: TaxCodeXRefsApi;
	public readonly TeamRolesApi: TeamRolesApi;
	public readonly TicketsApi: TicketsApi;
	public readonly TaxCodesApi: TaxCodesApi;
	public readonly TicketNotesApi: TicketNotesApi;
	public readonly TicketTasksApi: TicketTasksApi;
	public readonly TimeEntriesApi: TimeEntriesApi;
	public readonly TicketStopwatchesApi: TicketStopwatchesApi;
	public readonly TodayPageCategoriesApi: TodayPageCategoriesApi;
	public readonly UnitOfMeasureConversionsApi: UnitOfMeasureConversionsApi;
	public readonly UnitOfMeasuresApi: UnitOfMeasuresApi;
	public readonly UserDefinedFieldsApi: UserDefinedFieldsApi;
	private readonly authKey: string;
	public constructor(host: string, companyId: string, publicKey: string, privateKey: string) {
		this.authKey = Buffer.from(`${companyId}+${publicKey}:${privateKey}`, 'base64').toString();
		this.AccountingPackagesApi = new AccountingPackagesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AddressFormatsApi = new AddressFormatsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementBatchSetupsApi = new AgreementBatchSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementTypeBoardDefaultsApi = new AgreementTypeBoardDefaultsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementTypeWorkRoleExclusionsApi = new AgreementTypeWorkRoleExclusionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementTypeWorkRolesApi = new AgreementTypeWorkRolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementTypeWorkTypeExclusionsApi = new AgreementTypeWorkTypeExclusionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementTypeWorkTypesApi = new AgreementTypeWorkTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AuthAnvilsApi = new AuthAnvilsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BillingCyclesApi = new BillingCyclesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BillingSetupRoutingsApi = new BillingSetupRoutingsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BillingSetupsApi = new BillingSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BillingStatusesApi = new BillingStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BillingTermsApi = new BillingTermsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardAutoAssignResourcesApi = new BoardAutoAssignResourcesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardAutoTemplatesApi = new BoardAutoTemplatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardItemAssociationsApi = new BoardItemAssociationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardNotificationsApi = new BoardNotificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardStatusNotificationsApi = new BoardStatusNotificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardTypeSubTypeItemAssociationsApi = new BoardTypeSubTypeItemAssociationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CalendarsApi = new CalendarsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ChargeCodeExpenseTypesApi = new ChargeCodeExpenseTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ChargeCodesApi = new ChargeCodesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ClassificationsApi = new ClassificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CommissionsApi = new CommissionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyGroupsApi = new CompanyGroupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyPickerItemsApi = new CompanyPickerItemsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationTypeQuestionValuesApi = new ConfigurationTypeQuestionValuesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactGroupsApi = new ContactGroupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CorporateStructureLevelsApi = new CorporateStructureLevelsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CorporateStructuresApi = new CorporateStructuresApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CountriesApi = new CountriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CrmsApi = new CrmsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CustomReportParametersApi = new CustomReportParametersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CustomReportsApi = new CustomReportsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.DeliveryMethodsApi = new DeliveryMethodsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.DepartmentLocationsApi = new DepartmentLocationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.DepartmentsApi = new DepartmentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.DocumentsSetupApi = new DocumentsSetupApi(`https://${host}/v4_6_release/apis/3.0`);
		this.EmailConnectorParsingRulesApi = new EmailConnectorParsingRulesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.EmailConnectorParsingStylesApi = new EmailConnectorParsingStylesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.EmailConnectorsApi = new EmailConnectorsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.EmailTokensApi = new EmailTokensApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ExpenseReportsApi = new ExpenseReportsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ExpenseTypeExternalIntegrationReferencesApi = new ExpenseTypeExternalIntegrationReferencesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.HolidayListsApi = new HolidayListsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.HolidaysApi = new HolidaysApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ImapsApi = new ImapsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ImpactsApi = new ImpactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ImportsMassMaintenanceApi = new ImportsMassMaintenanceApi(`https://${host}/v4_6_release/apis/3.0`);
		this.IntegratorLoginsApi = new IntegratorLoginsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InvoiceEmailTemplatesApi = new InvoiceEmailTemplatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InvoiceTemplatesApi = new InvoiceTemplatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InvoiceTemplateSetupsApi = new InvoiceTemplateSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.KPICategoriesApi = new KPICategoriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.KPIsApi = new KPIsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LdapConfigurationsApi = new LdapConfigurationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LegacyCampaignSubTypesApi = new LegacyCampaignSubTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LegacySubCategoriesApi = new LegacySubCategoriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LocationDepartmentsApi = new LocationDepartmentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LocationWorkRolesApi = new LocationWorkRolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagedDevicesIntegrationCrossReferencesApi = new ManagedDevicesIntegrationCrossReferencesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagedDevicesIntegrationLoginsApi = new ManagedDevicesIntegrationLoginsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagedDevicesIntegrationNotificationsApi = new ManagedDevicesIntegrationNotificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagedDevicesIntegrationsApi = new ManagedDevicesIntegrationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementExecuteManagedItSyncsApi = new ManagementExecuteManagedItSyncsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementItSolutionAgreementInterfaceParametersApi = new ManagementItSolutionAgreementInterfaceParametersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementItSolutionsApi = new ManagementItSolutionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementLogsApi = new ManagementLogsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementNetworksSecurityApi = new ManagementNetworksSecurityApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementReportNotificationsApi = new ManagementReportNotificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementsApi = new ManagementsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MemberAccrualsApi = new MemberAccrualsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MemberCertificationsApi = new MemberCertificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MemberDelegationsApi = new MemberDelegationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MemberSkillsApi = new MemberSkillsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MenuEntryLocationsApi = new MenuEntryLocationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MyCompanyPurchasingsApi = new MyCompanyPurchasingsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.NotificationRecipientsApi = new NotificationRecipientsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OrderStatusesEmailTemplateApi = new OrderStatusesEmailTemplateApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OrderStatusNotificationsApi = new OrderStatusNotificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OthersApi = new OthersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ParsingTypesApi = new ParsingTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ParsingVariablesApi = new ParsingVariablesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PaymentTypesApi = new PaymentTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalCalendarsApi = new PortalCalendarsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalConfigurationInvoiceSetupsApi = new PortalConfigurationInvoiceSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalConfigurationOpportunitySetupsApi = new PortalConfigurationOpportunitySetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalConfigurationPasswordEmailSetupsApi = new PortalConfigurationPasswordEmailSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalConfigurationProjectSetupsApi = new PortalConfigurationProjectSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalConfigurationsApi = new PortalConfigurationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalConfigurationServiceSetupsApi = new PortalConfigurationServiceSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalReportsApi = new PortalReportsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalSecuritiesApi = new PortalSecuritiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PortalSecurityLevelsApi = new PortalSecurityLevelsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectSecurityRolesApi = new ProjectSecurityRolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectSecurityRoleSettingsApi = new ProjectSecurityRoleSettingsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectStatusesApi = new ProjectStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectTypesApi = new ProjectTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PurchaseOrderStatusEmailTemplatesApi = new PurchaseOrderStatusEmailTemplatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PurchaseOrderStatusesApi = new PurchaseOrderStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PurchaseOrderStatusNotificationsApi = new PurchaseOrderStatusNotificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ReportCardDetailsApi = new ReportCardDetailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ReportCardsApi = new ReportCardsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ReportingServicesApi = new ReportingServicesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.RmaStatusEmailTemplatesApi = new RmaStatusEmailTemplatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.RmaStatusesApi = new RmaStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.RmaStatusNotificationsApi = new RmaStatusNotificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SalesQuotasApi = new SalesQuotasApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SalesTeamMembersApi = new SalesTeamMembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SalesTeamsApi = new SalesTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleColorsApi = new ScheduleColorsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleDetailsApi = new ScheduleDetailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SecurityRolesApi = new SecurityRolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SecurityRoleSettingsApi = new SecurityRoleSettingsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServiceEmailTemplatesApi = new ServiceEmailTemplatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServiceLocationsApi = new ServiceLocationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServicesApi = new ServicesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServiceSignoffsApi = new ServiceSignoffsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServiceSurveyQuestionsApi = new ServiceSurveyQuestionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServiceSurveysApi = new ServiceSurveysApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServiceTeamsApi = new ServiceTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ServiceTemplatesApi = new ServiceTemplatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SetupScreensApi = new SetupScreensApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SeveritiesApi = new SeveritiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SLAPrioritiesApi = new SLAPrioritiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SLAsApi = new SLAsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.StatesApi = new StatesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.StatusExternalIntegrationReferencesApi = new StatusExternalIntegrationReferencesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveyOptionsApi = new SurveyOptionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveyQuestionValuesApi = new SurveyQuestionValuesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SystemTracksApi = new SystemTracksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TaxCodeExpenseTypeExemptionsApi = new TaxCodeExpenseTypeExemptionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TaxCodeProductTypeExemptionsApi = new TaxCodeProductTypeExemptionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TaxCodeWorkRoleExemptionsApi = new TaxCodeWorkRoleExemptionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TaxIntegrationsApi = new TaxIntegrationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TeamMembersApi = new TeamMembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketSyncsApi = new TicketSyncsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeAccrualDetailsApi = new TimeAccrualDetailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeAccrualsApi = new TimeAccrualsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeExpensesApi = new TimeExpensesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimePeriodsApi = new TimePeriodsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimePeriodSetupsApi = new TimePeriodSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeSheetsApi = new TimeSheetsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeZonesApi = new TimeZonesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeZoneSetupsApi = new TimeZoneSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TrackActionsApi = new TrackActionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WarehouseBinsApi = new WarehouseBinsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WarehousesApi = new WarehousesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowActionAutomateParametersApi = new WorkflowActionAutomateParametersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowActionsApi = new WorkflowActionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowEventsApi = new WorkflowEventsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowNotifyTypesApi = new WorkflowNotifyTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowsApi = new WorkflowsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowTableTypesApi = new WorkflowTableTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowTriggerOptionsApi = new WorkflowTriggerOptionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkflowTriggersApi = new WorkflowTriggersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkRoleLocationsApi = new WorkRoleLocationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkRolesApi = new WorkRolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkTypeExternalIntegrationReferencesApi = new WorkTypeExternalIntegrationReferencesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.WorkTypesApi = new WorkTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingBatchesApi = new AccountingBatchesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingUnpostedExpensesApi = new AccountingUnpostedExpensesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingUnpostedProcurementsApi = new AccountingUnpostedProcurementsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingUnpostedinvoicesApi = new AccountingUnpostedinvoicesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ActivitiesApi = new ActivitiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ActivityStatusesApi = new ActivityStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ActivityStopwatchesApi = new ActivityStopwatchesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ActivityTypesApi = new ActivityTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AdjustmentDetailsApi = new AdjustmentDetailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AdjustmentTypesApi = new AdjustmentTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AdjustmentsApi = new AdjustmentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementSitesApi = new AgreementSitesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementAdditionsApi = new AgreementAdditionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementAdjustmentsApi = new AgreementAdjustmentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementBoardDefaultsApi = new AgreementBoardDefaultsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementTypesApi = new AgreementTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementWorkRoleExclusionsApi = new AgreementWorkRoleExclusionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementWorkRolesApi = new AgreementWorkRolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementWorkTypeExclusionsApi = new AgreementWorkTypeExclusionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementWorkTypesApi = new AgreementWorkTypesApi(`https://${host}/v4_6_release/apis/3.0`)
		this.AgreementsApi = new AgreementsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AuditTrailApi = new AuditTrailApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BatchApi = new BatchApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardExcludedMembersApi = new BoardExcludedMembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardItemsApi = new BoardItemsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardStatusesApi = new BoardStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardSubTypesApi = new BoardSubTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardTeamsApi = new BoardTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardTypesApi = new BoardTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		// this.BoardSubtypeAssociationsApi = new BoardSubtypeAssociationsApi(`https://${host}/v4_6_release/apis/3.0`); -- REMOVED
		this.BoardsApi = new BoardsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CallbacksApi = new CallbacksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignAuditsApi = new CampaignAuditsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignEmailsOpenedApi = new CampaignEmailsOpenedApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignFormsSubmittedApi = new CampaignFormsSubmittedApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignLinksClickedApi = new CampaignLinksClickedApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignStatusesApi = new CampaignStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignSubTypesApi = new CampaignSubTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignTypesApi = new CampaignTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignsApi = new CampaignsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CatalogComponentsApi = new CatalogComponentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CatalogsItemApi = new CatalogsItemApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CategoriesApi = new CategoriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CertificationsApi = new CertificationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CodesApi = new CodesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompaniesApi = new CompaniesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyCustomNotesApi = new CompanyCustomNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyManagementSummaryReportsApi = new CompanyManagementSummaryReportsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyNotesApi = new CompanyNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyNoteTypesApi = new CompanyNoteTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanySitesApi = new CompanySitesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyStatusesApi = new CompanyStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyTeamsApi = new CompanyTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyTypesApi = new CompanyTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationStatusesApi = new ConfigurationStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationTypeQuestionsApi = new ConfigurationTypeQuestionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationTypesApi = new ConfigurationTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactsApi = new ContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CurrenciesApi = new CurrenciesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationsApi = new ConfigurationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactNotesApi = new ContactNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactTypesApi = new ContactTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactTracksApi = new ContactTracksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactDepartmentsApi = new ContactDepartmentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactRelationshipsApi = new ContactRelationshipsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactCommunicationsApi = new ContactCommunicationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConnectWiseHostedSetupsApi = new ConnectWiseHostedSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.DocumentsApi = new DocumentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ExpenseEntriesApi = new ExpenseEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ExpenseTypesApi = new ExpenseTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.GroupCompaniesApi = new GroupCompaniesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.GroupsApi = new GroupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.GroupContactsApi = new GroupContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InfoApi = new InfoApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InOutBoardsApi = new InOutBoardsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InOutTypesApi = new InOutTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InvoicesApi = new InvoicesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InvoicePaymentsApi = new InvoicePaymentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.KnowledgeBaseArticlesApi = new KnowledgeBaseArticlesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LinksApi = new LinksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LocationsApi = new LocationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MembersApi = new MembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MemberTypesApi = new MemberTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManufacturersApi = new ManufacturersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementBackupsApi = new ManagementBackupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManagementEmailsApi = new ManagementEmailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MarketDescriptionsApi = new MarketDescriptionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MenuEntriesApi = new MenuEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunitiesApi = new OpportunitiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OrdersApi = new OrdersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OrderStatusesApi = new OrderStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityNotesApi = new OpportunityNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityTeamsApi = new OpportunityTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityTypesApi = new OpportunityTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityRatingsApi = new OpportunityRatingsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityContactsApi = new OpportunityContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityStatusesApi = new OpportunityStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityStagesApi = new OpportunityStagesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityForecastsApi = new OpportunityForecastsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OwnershipTypesApi = new OwnershipTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PricingBreaksApi = new PricingBreaksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectsApi = new ProjectsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PrioritiesApi = new PrioritiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductsItemApi = new ProductsItemApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductTypesApi = new ProductTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectNotesApi = new ProjectNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectPhasesApi = new ProjectPhasesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PricingDetailsApi = new PricingDetailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PurchaseOrdersApi = new PurchaseOrdersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectContactsApi = new ProjectContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PricingSchedulesApi = new PricingSchedulesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductComponentsApi = new ProductComponentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectsTeammembersApi = new ProjectsTeammembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PurchaseOrderLineItemsApi = new PurchaseOrderLineItemsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductPickingShippingDetailsApi = new ProductPickingShippingDetailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ReportsApi = new ReportsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.RMAActionsApi = new RMAActionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.RMADispositionsApi = new RMADispositionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.RolesApi = new RolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SalesProbabilitiesApi = new SalesProbabilitiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SourcesApi = new SourcesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveysApi = new SurveysApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleTypesApi = new ScheduleTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SubCategoriesApi = new SubCategoriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveyResultsApi = new SurveyResultsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleEntriesApi = new ScheduleEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ShipmentMethodsApi = new ShipmentMethodsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveyQuestionsApi = new SurveyQuestionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleStatusesApi = new ScheduleStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleStopwatchesApi = new ScheduleStopwatchesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleReminderTimesApi = new ScheduleReminderTimesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TaxCodeXRefsApi = new TaxCodeXRefsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TeamRolesApi = new TeamRolesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SkillsApi = new SkillsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SkillCategoriesApi = new SkillCategoriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TodayPageCategoriesApi = new TodayPageCategoriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketsApi = new TicketsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TaxCodesApi = new TaxCodesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketNotesApi = new TicketNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketTasksApi = new TicketTasksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeEntriesApi = new TimeEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketStopwatchesApi = new TicketStopwatchesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.UnitOfMeasureConversionsApi = new UnitOfMeasureConversionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.UnitOfMeasuresApi = new UnitOfMeasuresApi(`https://${host}/v4_6_release/apis/3.0`);
		this.UserDefinedFieldsApi = new UserDefinedFieldsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingBatchesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingUnpostedExpensesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingUnpostedProcurementsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingUnpostedinvoicesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ActivitiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ActivityStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ActivityStopwatchesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ActivityTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AdjustmentDetailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AdjustmentTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AdjustmentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementSitesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementAdditionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementAdjustmentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementBoardDefaultsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementWorkRoleExclusionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementWorkRolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementWorkTypeExclusionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementWorkTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AuditTrailApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BatchApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardExcludedMembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardItemsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardSubTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CallbacksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignAuditsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignEmailsOpenedApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignFormsSubmittedApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignLinksClickedApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignSubTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CatalogComponentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CatalogsItemApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CategoriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CodesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompaniesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyCustomNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyManagementSummaryReportsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanySitesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationTypeQuestionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CurrenciesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactTracksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactDepartmentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactRelationshipsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactCommunicationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConnectWiseHostedSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.DocumentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ExpenseEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ExpenseTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.GroupCompaniesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.GroupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.GroupContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InfoApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InvoicesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InvoicePaymentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.KnowledgeBaseArticlesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LinksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LocationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManufacturersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MenuEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunitiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OrdersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OrderStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityRatingsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityForecastsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PricingBreaksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PrioritiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProductsItemApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProductTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectPhasesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PricingDetailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PurchaseOrdersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PricingSchedulesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProductComponentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectsTeammembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PurchaseOrderLineItemsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProductPickingShippingDetailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ReportsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SourcesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveysApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SubCategoriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveyResultsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ShipmentMethodsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveyQuestionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleStopwatchesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleReminderTimesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TaxCodeXRefsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TaxCodesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketTasksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketStopwatchesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.UnitOfMeasureConversionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.UnitOfMeasuresApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.UserDefinedFieldsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		/* this.BoardSubtypeAssociationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		}; -- REMOVED */
		this.CertificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyNoteTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InOutBoardsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InOutTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementBackupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementEmailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MarketDescriptionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MemberTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityStagesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OwnershipTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.RMAActionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.RMADispositionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.RolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SalesProbabilitiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TeamRolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SkillsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SkillCategoriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TodayPageCategoriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingPackagesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AddressFormatsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementBatchSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementTypeBoardDefaultsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementTypeWorkRoleExclusionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementTypeWorkRolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementTypeWorkTypeExclusionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementTypeWorkTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AuthAnvilsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BillingCyclesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BillingSetupRoutingsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BillingSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BillingStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BillingTermsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardAutoAssignResourcesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardAutoTemplatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardItemAssociationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardNotificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardStatusNotificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardTypeSubTypeItemAssociationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CalendarsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ChargeCodeExpenseTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ChargeCodesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ClassificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CommissionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyGroupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyPickerItemsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationTypeQuestionValuesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactGroupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CorporateStructureLevelsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CorporateStructuresApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CountriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CrmsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CustomReportParametersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CustomReportsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.DeliveryMethodsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.DepartmentLocationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.DepartmentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.DocumentsSetupApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.EmailConnectorParsingRulesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.EmailConnectorParsingStylesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.EmailConnectorsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.EmailTokensApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ExpenseReportsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ExpenseTypeExternalIntegrationReferencesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.HolidayListsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.HolidaysApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ImapsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ImpactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ImportsMassMaintenanceApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.IntegratorLoginsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InvoiceEmailTemplatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InvoiceTemplatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InvoiceTemplateSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.KPICategoriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.KPIsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LdapConfigurationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LegacyCampaignSubTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LegacySubCategoriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LocationDepartmentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LocationWorkRolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagedDevicesIntegrationCrossReferencesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagedDevicesIntegrationLoginsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagedDevicesIntegrationNotificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagedDevicesIntegrationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementExecuteManagedItSyncsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementItSolutionAgreementInterfaceParametersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementItSolutionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementLogsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementNetworksSecurityApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementReportNotificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManagementsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MemberAccrualsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MemberCertificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MemberDelegationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MemberSkillsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MenuEntryLocationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MyCompanyPurchasingsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.NotificationRecipientsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OrderStatusesEmailTemplateApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OrderStatusNotificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OthersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ParsingTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ParsingVariablesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PaymentTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalCalendarsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalConfigurationInvoiceSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalConfigurationOpportunitySetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		}
		this.PortalConfigurationPasswordEmailSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalConfigurationProjectSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalConfigurationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalConfigurationServiceSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalReportsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalSecuritiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PortalSecurityLevelsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectSecurityRolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectSecurityRoleSettingsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PurchaseOrderStatusEmailTemplatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PurchaseOrderStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PurchaseOrderStatusNotificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ReportCardDetailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ReportCardsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ReportingServicesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.RmaStatusEmailTemplatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.RmaStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.RmaStatusNotificationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SalesQuotasApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SalesTeamMembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SalesTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleColorsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleDetailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SecurityRolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SecurityRoleSettingsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServiceEmailTemplatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServiceLocationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServicesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServiceSignoffsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServiceSurveyQuestionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServiceSurveysApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServiceTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ServiceTemplatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SetupScreensApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SeveritiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SLAPrioritiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SLAsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.StatesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.StatusExternalIntegrationReferencesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveyOptionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveyQuestionValuesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SystemTracksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TaxCodeExpenseTypeExemptionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TaxCodeProductTypeExemptionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TaxCodeWorkRoleExemptionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TaxIntegrationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TeamMembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketSyncsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeAccrualDetailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeAccrualsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeExpensesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimePeriodsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimePeriodSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeSheetsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeZonesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeZoneSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TrackActionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WarehouseBinsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WarehousesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowActionAutomateParametersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowActionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowEventsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowNotifyTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowTableTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowTriggerOptionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkflowTriggersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkRoleLocationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkRolesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkTypeExternalIntegrationReferencesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.WorkTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
	}
}
