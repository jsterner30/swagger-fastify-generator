import { Static, Type } from '@sinclair/typebox'


/**
* DESCRIPTION: Admit Period
*/
export const AdmitPeriodQuerySchema = Type.String()
export type AdmitPeriodQuery = Static<typeof AdmitPeriodQuerySchema>

/**
* DESCRIPTION: Application UUID
*/
export const ApplicationIdPathSchema = Type.String()
export type ApplicationIdPath = Static<typeof ApplicationIdPathSchema>

/**
* DESCRIPTION: Component ID
*/
export const ComponentIdPathSchema = Type.String()
export type ComponentIdPath = Static<typeof ComponentIdPathSchema>

/**
* DESCRIPTION: Application UUID
*/
export const ApplicationIdQuerySchema = Type.String()
export type ApplicationIdQuery = Static<typeof ApplicationIdQuerySchema>

/**
* DESCRIPTION: Applicant ID
*/
export const ApplicantIdQuerySchema = Type.String()
export type ApplicantIdQuery = Static<typeof ApplicantIdQuerySchema>

/**
* DESCRIPTION: Name of the applicant
*/
export const ApplicantNameQuerySchema = Type.String()
export type ApplicantNameQuery = Static<typeof ApplicantNameQuerySchema>

/**
* DESCRIPTION: Applicant's Institution ID
*/
export const InstitutionIdQuerySchema = Type.String()
export type InstitutionIdQuery = Static<typeof InstitutionIdQuerySchema>

/**
* DESCRIPTION: Applicant's Email Address
*/
export const EmailQuerySchema = Type.String()
export type EmailQuery = Static<typeof EmailQuerySchema>

/**
* DESCRIPTION: the College designator
*/
export const CollegePathSchema = Type.String()
export type CollegePath = Static<typeof CollegePathSchema>

/**
* DESCRIPTION: Indicates a set of subresources
*/
export const ContextQuerySchema = Type.String()
export type ContextQuery = Static<typeof ContextQuerySchema>

/**
* DESCRIPTION: Return packets created on or before this date
*/
export const DateEndQuerySchema = Type.String()
export type DateEndQuery = Static<typeof DateEndQuerySchema>

/**
* DESCRIPTION: Return packets created on or after this date
*/
export const DateStartQuerySchema = Type.String()
export type DateStartQuery = Static<typeof DateStartQuerySchema>

/**
* DESCRIPTION: Month enrollment ended
*/
export const EndMonthPathSchema = Type.String()
export type EndMonthPath = Static<typeof EndMonthPathSchema>

/**
* DESCRIPTION: List which subresources are to be returned
*/
export const FieldSetsQuerySchema = Type.String()
export type FieldSetsQuery = Static<typeof FieldSetsQuerySchema>

/**
* DESCRIPTION: List which template sets are to be returned in a comma seperated string
*/
export const TemplateSetsQuerySchema = Type.String()
export type TemplateSetsQuery = Static<typeof TemplateSetsQuerySchema>

/**
* DESCRIPTION: High School Identifier
*/
export const HighSchoolPathSchema = Type.String()
export type HighSchoolPath = Static<typeof HighSchoolPathSchema>

/**
* DESCRIPTION: Applicant's Institution ID
*/
export const InstitutionQuerySchema = Type.String()
export type InstitutionQuery = Static<typeof InstitutionQuerySchema>

/**
* DESCRIPTION: Return the named reports
*/
export const NameQuerySchema = Type.String()
export type NameQuery = Static<typeof NameQuerySchema>

/**
* DESCRIPTION: Column to paginate a report by (ces_id or app_id)
*/
export const PaginationParameterQuerySchema = Type.String()
export type PaginationParameterQuery = Static<typeof PaginationParameterQuerySchema>

/**
* DESCRIPTION: Last UUID to paginate a query by
*/
export const CursorQuerySchema = Type.String()
export type CursorQuery = Static<typeof CursorQuerySchema>

/**
* DESCRIPTION: Limit query size
*/
export const LimitQuerySchema = Type.String()
export type LimitQuery = Static<typeof LimitQuerySchema>

/**
* DESCRIPTION: Skip into a large collection to this item
*/
export const PageStartQuerySchema = Type.String()
export type PageStartQuery = Static<typeof PageStartQuerySchema>

/**
* DESCRIPTION: Return this many items of a large collection
*/
export const PageSizeQuerySchema = Type.String()
export type PageSizeQuery = Static<typeof PageSizeQuerySchema>

/**
* DESCRIPTION: Question UUID
*/
export const QuestionIdPathSchema = Type.String()
export type QuestionIdPath = Static<typeof QuestionIdPathSchema>

/**
* DESCRIPTION: School-specific application information
*/
export const SchoolQuerySchema = Type.String()
export type SchoolQuery = Static<typeof SchoolQuerySchema>

/**
* DESCRIPTION: Search the database, returning all matching packets, for the given search string.
*/
export const SearchQuerySchema = Type.String()
export type SearchQuery = Static<typeof SearchQuerySchema>

/**
* DESCRIPTION: Month enrollment started
*/
export const StartMonthPathSchema = Type.String()
export type StartMonthPath = Static<typeof StartMonthPathSchema>

/**
* DESCRIPTION: Skip into a large collection to this item
*/
export const SubsetStartQuerySchema = Type.String()
export type SubsetStartQuery = Static<typeof SubsetStartQuerySchema>

/**
* DESCRIPTION: Return this many items of a large collection
*/
export const SubsetSizeQuerySchema = Type.String()
export type SubsetSizeQuery = Static<typeof SubsetSizeQuerySchema>

/**
* DESCRIPTION: Return the packets with the given applicant type
*/
export const ApplicantTypeQuerySchema = Type.String()
export type ApplicantTypeQuery = Static<typeof ApplicantTypeQuerySchema>

/**
* DESCRIPTION: Return the packets with the given citizenship
*/
export const CitizenshipQuerySchema = Type.String()
export type CitizenshipQuery = Static<typeof CitizenshipQuerySchema>

/**
* DESCRIPTION: Return the packets with the given country(ies)
*/
export const CountryQuerySchema = Type.String()
export type CountryQuery = Static<typeof CountryQuerySchema>

/**
* DESCRIPTION: Return the packets with the given sex
*/
export const SexQuerySchema = Type.String()
export type SexQuery = Static<typeof SexQuerySchema>

/**
* DESCRIPTION: Return the packets with the given state(s)
*/
export const StateQuerySchema = Type.String()
export type StateQuery = Static<typeof StateQuerySchema>

/**
* DESCRIPTION: Deliverable ID
*/
export const DeliverableIdPathSchema = Type.String()
export type DeliverableIdPath = Static<typeof DeliverableIdPathSchema>