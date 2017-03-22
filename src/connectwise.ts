'use strict';

import {
	AccountingBatchTransactionsApi,
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
	CodesApi,
	CompaniesApi,
	CompanyCustomNotesApi,
	CompanyManagementSummaryReportsApi,
	CompanyNotesApi,
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
	InvoicesApi,
	InvoicePaymentsApi,
	KnowledgeBaseArticlesApi,
	LinksApi,
	LocationsApi,
	MembersApi,
	ManufacturersApi,
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
	OpportunityForecastsApi,
	PricingBreaksApi,
	ProductsApi,
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
	TicketStopwatchesApi,
	UnitOfMeasureConversionsApi,
	UnitOfMeasuresApi,
	UserDefinedFieldsApi
} from './api/api';

export class Connectwise {
	public readonly AccountingBatchTransactionsApi: AccountingBatchTransactionsApi;
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
	public readonly CodesApi: CodesApi;
	public readonly CompaniesApi: CompaniesApi;
	public readonly CompanyCustomNotesApi: CompanyCustomNotesApi;
	public readonly CompanyManagementSummaryReportsApi: CompanyManagementSummaryReportsApi;
	public readonly CompanyNotesApi: CompanyNotesApi;
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
	public readonly InvoicesApi: InvoicesApi;
	public readonly InvoicePaymentsApi: InvoicePaymentsApi;
	public readonly KnowledgeBaseArticlesApi: KnowledgeBaseArticlesApi;
	public readonly LinksApi: LinksApi;
	public readonly LocationsApi: LocationsApi;
	public readonly MembersApi: MembersApi;
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
	public readonly OpportunityForecastsApi: OpportunityForecastsApi;
	public readonly PricingBreaksApi: PricingBreaksApi;
	public readonly ProductsApi: ProductsApi;
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
	public readonly TicketsApi: TicketsApi;
	public readonly TaxCodesApi: TaxCodesApi;
	public readonly TicketNotesApi: TicketNotesApi;
	public readonly TicketTasksApi: TicketTasksApi;
	public readonly TimeEntriesApi: TimeEntriesApi;
	public readonly TicketStopwatchesApi: TicketStopwatchesApi;
	public readonly UnitOfMeasureConversionsApi: UnitOfMeasureConversionsApi;
	public readonly UnitOfMeasuresApi: UnitOfMeasuresApi;
	public readonly UserDefinedFieldsApi: UserDefinedFieldsApi;
	private readonly authKey: string;
	public constructor(host: string, companyId: string, publicKey: string, privateKey: string) {
		this.authKey = new Buffer(`${companyId}+${publicKey}:${privateKey}`).toString('base64');
		this.AccountingBatchTransactionsApi = new AccountingBatchTransactionsApi(`https://${host}/v4_6_release/apis/3.0`);
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
		this.CodesApi = new CodesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompaniesApi = new CompaniesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyCustomNotesApi = new CompanyCustomNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyManagementSummaryReportsApi = new CompanyManagementSummaryReportsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyNotesApi = new CompanyNotesApi(`https://${host}/v4_6_release/apis/3.0`);
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
		this.InvoicesApi = new InvoicesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InvoicePaymentsApi = new InvoicePaymentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.KnowledgeBaseArticlesApi = new KnowledgeBaseArticlesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LinksApi = new LinksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LocationsApi = new LocationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MembersApi = new MembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManufacturersApi = new ManufacturersApi(`https://${host}/v4_6_release/apis/3.0`);
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
		this.OpportunityForecastsApi = new OpportunityForecastsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PricingBreaksApi = new PricingBreaksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductsApi = new ProductsApi(`https://${host}/v4_6_release/apis/3.0`);
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
		this.TicketsApi = new TicketsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TaxCodesApi = new TaxCodesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketNotesApi = new TicketNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketTasksApi = new TicketTasksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeEntriesApi = new TimeEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketStopwatchesApi = new TicketStopwatchesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.UnitOfMeasureConversionsApi = new UnitOfMeasureConversionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.UnitOfMeasuresApi = new UnitOfMeasuresApi(`https://${host}/v4_6_release/apis/3.0`);
		this.UserDefinedFieldsApi = new UserDefinedFieldsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingBatchTransactionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
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
		}
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
		this.ProductsApi.defaultHeaders = {
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
		}
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
		}
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
	};
};