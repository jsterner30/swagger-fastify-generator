import { Type } from '@sinclair/typebox'


/**
* DESCRIPTION: Admit Period
*/
export const AdmitPeriodQuerySchema = Type.String()

/**
* DESCRIPTION: Application UUID
*/
export const ApplicationIdPathSchema = Type.String()

/**
* DESCRIPTION: Component ID
*/
export const ComponentIdPathSchema = Type.String()

/**
* DESCRIPTION: Application UUID
*/
export const ApplicationIdQuerySchema = Type.String()

/**
* DESCRIPTION: Applicant ID
*/
export const ApplicantIdQuerySchema = Type.String()

/**
* DESCRIPTION: Name of the applicant
*/
export const ApplicantNameQuerySchema = Type.String()

/**
* DESCRIPTION: Applicant's Institution ID
*/
export const InstitutionIdQuerySchema = Type.String()

/**
* DESCRIPTION: Applicant's Email Address
*/
export const EmailQuerySchema = Type.String()

/**
* DESCRIPTION: the College designator
*/
export const CollegePathSchema = Type.String()

/**
* DESCRIPTION: Indicates a set of subresources
*/
export const ContextQuerySchema = Type.String()

/**
* DESCRIPTION: Return packets created on or before this date
*/
export const DateEndQuerySchema = Type.String()

/**
* DESCRIPTION: Return packets created on or after this date
*/
export const DateStartQuerySchema = Type.String()

/**
* DESCRIPTION: Month enrollment ended
*/
export const EndMonthPathSchema = Type.String()

/**
* DESCRIPTION: List which subresources are to be returned
*/
export const FieldSetsQuerySchema = Type.String()

/**
* DESCRIPTION: List which template sets are to be returned in a comma seperated string
*/
export const TemplateSetsQuerySchema = Type.String()

/**
* DESCRIPTION: High School Identifier
*/
export const HighSchoolPathSchema = Type.String()

/**
* DESCRIPTION: Applicant's Institution ID
*/
export const InstitutionQuerySchema = Type.String()

/**
* DESCRIPTION: Return the named reports
*/
export const NameQuerySchema = Type.String()

/**
* DESCRIPTION: Column to paginate a report by (ces_id or app_id)
*/
export const PaginationParameterQuerySchema = Type.String()

/**
* DESCRIPTION: Last UUID to paginate a query by
*/
export const CursorQuerySchema = Type.String()

/**
* DESCRIPTION: Limit query size
*/
export const LimitQuerySchema = Type.String()

/**
* DESCRIPTION: Skip into a large collection to this item
*/
export const PageStartQuerySchema = Type.String()

/**
* DESCRIPTION: Return this many items of a large collection
*/
export const PageSizeQuerySchema = Type.String()

/**
* DESCRIPTION: Question UUID
*/
export const QuestionIdPathSchema = Type.String()

/**
* DESCRIPTION: School-specific application information
*/
export const SchoolQuerySchema = Type.String()

/**
* DESCRIPTION: Search the database, returning all matching packets, for the given search string.
*/
export const SearchQuerySchema = Type.String()

/**
* DESCRIPTION: Month enrollment started
*/
export const StartMonthPathSchema = Type.String()

/**
* DESCRIPTION: Skip into a large collection to this item
*/
export const SubsetStartQuerySchema = Type.String()

/**
* DESCRIPTION: Return this many items of a large collection
*/
export const SubsetSizeQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given applicant type
*/
export const ApplicantTypeQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given citizenship
*/
export const CitizenshipQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given country(ies)
*/
export const CountryQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given sex
*/
export const SexQuerySchema = Type.String()

/**
* DESCRIPTION: Return the packets with the given state(s)
*/
export const StateQuerySchema = Type.String()

/**
* DESCRIPTION: Deliverable ID
*/
export const DeliverableIdPathSchema = Type.String()