const { Type } = '@sinclair/typebox'


/**
* DESCRIPTION: Admit Period
*/
const AdmitPeriodQuerySchema = Type.String()

/**
* DESCRIPTION: Application UUID
*/
const ApplicationIdPathSchema = Type.String()

/**
* DESCRIPTION: Component ID
*/
const ComponentIdPathSchema = Type.String()

/**
* DESCRIPTION: Application UUID
*/
const ApplicationIdQuerySchema = Type.String()

/**
* DESCRIPTION: Applicant ID
*/
const ApplicantIdQuerySchema = Type.String()

/**
* DESCRIPTION: Name of the applicant
*/
const ApplicantNameQuerySchema = Type.String()

/**
* DESCRIPTION: Applicant's Institution ID
*/
const InstitutionIdQuerySchema = Type.String()

/**
* DESCRIPTION: Applicant's Email Address
*/
const EmailQuerySchema = Type.String()

/**
* DESCRIPTION: the College designator
*/
const CollegePathSchema = Type.String()

/**
* DESCRIPTION: Indicates a set of subresources
*/
const ContextQuerySchema = Type.String()

/**
* DESCRIPTION: Return packets created on or before this date
*/
const DateEndQuerySchema = Type.String()

/**
* DESCRIPTION: Return packets created on or after this date
*/
const DateStartQuerySchema = Type.String()

/**
* DESCRIPTION: Month enrollment ended
*/
const EndMonthPathSchema = Type.String()

/**
* DESCRIPTION: List which subresources are to be returned
*/
const FieldSetsQuerySchema = Type.String()

/**
* DESCRIPTION: List which template sets are to be returned in a comma seperated string
*/
const TemplateSetsQuerySchema = Type.String()

/**
* DESCRIPTION: High School Identifier
*/
const HighSchoolPathSchema = Type.String()

/**
* DESCRIPTION: Applicant's Institution ID
*/
const InstitutionQuerySchema = Type.String()

/**
* DESCRIPTION: Return the named reports
*/
const NameQuerySchema = Type.String()

/**
* DESCRIPTION: Column to paginate a report by (ces_id or app_id)
*/
const PaginationParameterQuerySchema = Type.String()

/**
* DESCRIPTION: Last UUID to paginate a query by
*/
const CursorQuerySchema = Type.String()

/**
* DESCRIPTION: Limit query size
*/
const LimitQuerySchema = Type.String()

/**
* DESCRIPTION: Skip into a large collection to this item
*/
const PageStartQuerySchema = Type.String()

/**
* DESCRIPTION: Return this many items of a large collection
*/
const PageSizeQuerySchema = Type.String()

/**
* DESCRIPTION: Question UUID
*/
const QuestionIdPathSchema = Type.String()

/**
* DESCRIPTION: School-specific application information
*/
const SchoolQuerySchema = Type.String()

/**
* DESCRIPTION: Search the database, returning all matching packets, for the given search string.
*/
const SearchQuerySchema = Type.String()

/**
* DESCRIPTION: Month enrollment started
*/
const StartMonthPathSchema = Type.String()

/**
* DESCRIPTION: Skip into a large collection to this item
*/
const SubsetStartQuerySchema = Type.String()

/**
* DESCRIPTION: Return this many items of a large collection
*/
const SubsetSizeQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given applicant type
*/
const ApplicantTypeQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given citizenship
*/
const CitizenshipQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given country(ies)
*/
const CountryQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given sex
*/
const SexQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given state(s)
*/
const StateQuerySchema = Type.String()

/**
* DESCRIPTION: Deliverable ID
*/
const DeliverableIdPathSchema = Type.String()

module.exports = {
    AdmitPeriodQuerySchema, ApplicationIdPathSchema, ComponentIdPathSchema, 
    ApplicationIdQuerySchema, ApplicantIdQuerySchema, ApplicantNameQuerySchema, 
    InstitutionIdQuerySchema, EmailQuerySchema, CollegePathSchema, ContextQuerySchema, 
    DateEndQuerySchema, DateStartQuerySchema, EndMonthPathSchema, 
    FieldSetsQuerySchema, TemplateSetsQuerySchema, HighSchoolPathSchema, 
    InstitutionQuerySchema, NameQuerySchema, PaginationParameterQuerySchema, 
    CursorQuerySchema, LimitQuerySchema, PageStartQuerySchema, 
    PageSizeQuerySchema, QuestionIdPathSchema, SchoolQuerySchema, 
    SearchQuerySchema, StartMonthPathSchema, SubsetStartQuerySchema, 
    SubsetSizeQuerySchema, 
    AdmitPeriodQuerySchema, ApplicantNameQuerySchema, EmailQuerySchema, 
    AdmitPeriodQuerySchema, ApplicantTypeQuerySchema, CitizenshipQuerySchema, 
    CountryQuerySchema, SexQuerySchema, StateQuerySchema, 
    ApplicantNameQuerySchema, EmailQuerySchema, AdmitPeriodQuerySchema, 
    ApplicantTypeQuerySchema, CitizenshipQuerySchema, CountryQuerySchema, 
    SexQuerySchema, StateQuerySchema, NameQuerySchema, 
    AdmitPeriodQuerySchema, PaginationParameterQuerySchema, CursorQuerySchema, 
    LimitQuerySchema, ApplicantNameQuerySchema, EmailQuerySchema, 
    AdmitPeriodQuerySchema, ApplicantTypeQuerySchema, CitizenshipQuerySchema, 
    CountryQuerySchema, SexQuerySchema, StateQuerySchema, 
    AdmitPeriodQuerySchema, ApplicantTypeQuerySchema, CitizenshipQuerySchema, 
    CountryQuerySchema, SexQuerySchema, StateQuerySchema, DeliverableIdPathSchema
}