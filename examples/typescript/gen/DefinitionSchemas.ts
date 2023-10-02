import { Static, Type } from '@sinclair/typebox'


/**
* EXAMPLE: {
  priority: '4',
  caller_id: '<netId>',
  short_description: 'My short description',
  description: 'My much longer description',
  u_email: 'my_alt@email.com'
}
*/
export const IncidentBodySchema = Type.Object({
   priority: Type.String(),
   caller_id: Type.String(),
   short_description: Type.String(),
   description: Type.Optional(Type.String()),
   u_email: Type.Optional(Type.String())
})
export type IncidentBody = Static<typeof IncidentBodySchema>

/**
* DESCRIPTION: A list of decision reason values
*/
export const DecisionReasonValueArraySchema = Type.Array(Type.String())
export type DecisionReasonValueArray = Static<typeof DecisionReasonValueArraySchema>

/**
* DESCRIPTION: Entity Name
* EXAMPLE: { value: 'Entity Name', api_type: 'modifiable', display_label: 'Name' }
*/
export const NameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type Name = Static<typeof NameSchema>

/**
* DESCRIPTION: Entity Description
* EXAMPLE: {
  value: 'Entity Description',
  api_type: 'modifiable',
  display_label: 'Description'
}
*/
export const DescriptionSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type Description = Static<typeof DescriptionSchema>

/**
* DESCRIPTION: A key/string-value pair
* EXAMPLE: { key: 'location', value: 'CA' }
*/
export const AttributeStringSchema = Type.Object({
   key: Type.String(),
   value: Type.String()
})
export type AttributeString = Static<typeof AttributeStringSchema>

/**
* DESCRIPTION: ID of the person who made the last update
* EXAMPLE: {
  value: '764634873',
  description: 'Bugs Bunny Ithaca',
  api_type: 'system',
  display_label: 'Updated by'
}
*/
export const IdUpdatedBySchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type IdUpdatedBy = Static<typeof IdUpdatedBySchema>

/**
* DESCRIPTION: ID of the person who submitted the object
* EXAMPLE: {
  value: '764634873',
  description: 'Bugs Bunny Ithaca',
  api_type: 'system',
  display_label: 'Submitted by'
}
*/
export const IdSubmittedBySchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type IdSubmittedBy = Static<typeof IdSubmittedBySchema>

/**
* DESCRIPTION: ID of the person who created the object
* EXAMPLE: {
  value: '764634873',
  description: 'Bugs Bunny Ithaca',
  api_type: 'system',
  display_label: 'Created by'
}
*/
export const IdCreatedBySchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type IdCreatedBy = Static<typeof IdCreatedBySchema>

/**
* DESCRIPTION: When was the Application's data verified?
*/
export const DateTimeVerifiedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DateTimeVerified = Static<typeof DateTimeVerifiedSchema>

/**
* DESCRIPTION: When was the data last updated?
* EXAMPLE: {
  value: '2014-05-11T13:45:53.200Z',
  api_type: 'system',
  display_label: 'Updated'
}
*/
export const DateTimeUpdatedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DateTimeUpdated = Static<typeof DateTimeUpdatedSchema>

/**
* DESCRIPTION: When was the object submitted?
*/
export const DateTimeSubmittedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DateTimeSubmitted = Static<typeof DateTimeSubmittedSchema>

/**
* DESCRIPTION: When was the object last reported?
*/
export const DateTimeReportedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DateTimeReported = Static<typeof DateTimeReportedSchema>

/**
* DESCRIPTION: When was the object created?
*/
export const DateTimeCreatedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DateTimeCreated = Static<typeof DateTimeCreatedSchema>

/**
* DESCRIPTION: Unique Identifier assigned to each Application
*/
export const ApplicationIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   display_label: Type.Optional(Type.String())
})
export type ApplicationId = Static<typeof ApplicationIdSchema>

/**
* DESCRIPTION: Type of Applicant, for example: New Freshman, Transfer
*/
export const ApplicantTypeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ApplicantType = Static<typeof ApplicantTypeSchema>

/**
* DESCRIPTION: Synonym for the byu_id
*/
export const ApplicantIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   display_label: Type.Optional(Type.String())
})
export type ApplicantId = Static<typeof ApplicantIdSchema>

/**
* DESCRIPTION: Academic Period for which the Applicant is requesting admittance
*/
export const AdmitPeriodSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   long_description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type AdmitPeriod = Static<typeof AdmitPeriodSchema>

/**
* DESCRIPTION: Major which the Applicant is requesting admittance
*/
export const AdmitMajorSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type AdmitMajor = Static<typeof AdmitMajorSchema>

/**
* DESCRIPTION: First Month for an Enrollment/Service
*/
export const SharedStartMonthSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SharedStartMonth = Static<typeof SharedStartMonthSchema>

/**
* DESCRIPTION: Can texts be sent to this phone?
*/
export const SharedPhoneTextsOkSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SharedPhoneTextsOk = Static<typeof SharedPhoneTextsOkSchema>

/**
* DESCRIPTION: Letter grade
*/
export const SharedGradeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SharedGrade = Static<typeof SharedGradeSchema>

/**
* DESCRIPTION: High school/Seminary/Institute graduation status of the applicant
*/
export const SharedGraduationStatusSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SharedGraduationStatus = Static<typeof SharedGraduationStatusSchema>

/**
* DESCRIPTION: Last Month for an Enrollment/Service
*/
export const SharedEndMonthSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SharedEndMonth = Static<typeof SharedEndMonthSchema>

/**
* DESCRIPTION: Hours graded at another college/high school
*/
export const SharedCreditHoursGradedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SharedCreditHoursGraded = Static<typeof SharedCreditHoursGradedSchema>

/**
* DESCRIPTION: The academic year during which a seminary or institute class was taught
*/
export const SharedAcademicYearSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SharedAcademicYear = Static<typeof SharedAcademicYearSchema>

/**
* DESCRIPTION: Version of test
*/
export const TestVersionSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type TestVersion = Static<typeof TestVersionSchema>

/**
* DESCRIPTION: Name of test
*/
export const TestNameSchema = Type.Object({
   value: Type.String(),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type TestName = Static<typeof TestNameSchema>

/**
* DESCRIPTION: Date test administered
*/
export const TestDateSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   display_label: Type.Optional(Type.String())
})
export type TestDate = Static<typeof TestDateSchema>

/**
* DESCRIPTION: Composite score of test/evaluation
*/
export const TestCompositeScoreSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type TestCompositeScore = Static<typeof TestCompositeScoreSchema>

/**
* DESCRIPTION: Score on test component
*/
export const TestComponentScoreSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type TestComponentScore = Static<typeof TestComponentScoreSchema>

/**
* DESCRIPTION: Name of test component
*/
export const TestComponentNameSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type TestComponentName = Static<typeof TestComponentNameSchema>

/**
* DESCRIPTION: Years completed in seminary program
*/
export const SeminaryYearsCompletedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryYearsCompleted = Static<typeof SeminaryYearsCompletedSchema>

/**
* DESCRIPTION: Type of Seminary: released time, early morning, etc.
* EXAMPLE: {
  value: 'Released Time',
  description: 'Released Time from School',
  domain: 'https://api.byu.edu/byuapi/meta/seminary_types',
  api_type: 'read-only',
  display_label: 'Seminary Type'
}
*/
export const SeminaryTypeSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryType = Static<typeof SeminaryTypeSchema>

/**
* DESCRIPTION: Seminary term number
*/
export const SeminaryTermSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryTerm = Static<typeof SeminaryTermSchema>

/**
* DESCRIPTION: Teacher Email Address
*/
export const SeminaryTeacherEmailSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryTeacherEmail = Static<typeof SeminaryTeacherEmailSchema>

/**
* DESCRIPTION: Name of Seminary Teacher
* EXAMPLE: {
  value: 'John Doe',
  api_type: 'modifiable',
  display_label: 'Seminary Teacher'
}
*/
export const SeminaryTeacherNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryTeacherName = Static<typeof SeminaryTeacherNameSchema>

/**
* DESCRIPTION: Seminary sessions during the term
*/
export const SeminarySessionsSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminarySessions = Static<typeof SeminarySessionsSchema>

/**
* DESCRIPTION: Seminary recognition for the term
*/
export const SeminaryRecognitionSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryRecognition = Static<typeof SeminaryRecognitionSchema>

/**
* DESCRIPTION: Seminary reading for the term
*/
export const SeminaryReadingSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryReading = Static<typeof SeminaryReadingSchema>

/**
* DESCRIPTION: Seminary grade for the term
*/
export const SeminaryGradeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryGrade = Static<typeof SeminaryGradeSchema>

/**
* DESCRIPTION: Explanation of Seminary Participation/non-Participation
* EXAMPLE: {
  value: 'Blah, blah, blah',
  api_type: 'modifiable',
  display_label: 'Explain your Seminary Participation'
}
*/
export const SeminaryExplanationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryExplanation = Static<typeof SeminaryExplanationSchema>

/**
* DESCRIPTION: Seminary credit for the term
*/
export const SeminaryCreditSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryCredit = Static<typeof SeminaryCreditSchema>

/**
* DESCRIPTION: Seminary Class Name
*/
export const SeminaryClassSchema = Type.Object({
   value: Type.String(),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryClass = Static<typeof SeminaryClassSchema>

/**
* DESCRIPTION: Seminary attendance percentage
*/
export const SeminaryAttendancePercentageSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryAttendancePercentage = Static<typeof SeminaryAttendancePercentageSchema>

/**
* DESCRIPTION: Seminary attendance for the term
*/
export const SeminaryAttendanceSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryAttendance = Static<typeof SeminaryAttendanceSchema>

/**
* DESCRIPTION: Seminary absences during the term
*/
export const SeminaryAbsencesSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type SeminaryAbsences = Static<typeof SeminaryAbsencesSchema>

/**
* DESCRIPTION: A question UUID
* EXAMPLE: {
  value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
  api_type: 'system',
  key: true,
  display_label: 'UUID'
}
*/
export const QuestionUuidSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   display_label: Type.Optional(Type.String())
})
export type QuestionUuid = Static<typeof QuestionUuidSchema>

/**
* DESCRIPTION: Question type
* EXAMPLE: { value: 'Essay', api_type: 'modifiable', display_label: 'Type' }
*/
export const QuestionTypeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionType = Static<typeof QuestionTypeSchema>

/**
* DESCRIPTION: Ordinal position for a question element in a group
* EXAMPLE: { value: '1', api_type: 'modifiable', display_label: 'Position' }
*/
export const QuestionGroupOrdinalSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionGroupOrdinal = Static<typeof QuestionGroupOrdinalSchema>

/**
* DESCRIPTION: Question group ID
* EXAMPLE: {
  value: '4060d2e3-42e2-415b-8ddb-357f99ae31ba',
  api_type: 'system',
  display_label: 'Group ID'
}
*/
export const QuestionGroupIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionGroupId = Static<typeof QuestionGroupIdSchema>

/**
* DESCRIPTION: Display heading for a group of question elements
* EXAMPLE: {
  value: 'Intellectually Enlarging',
  api_type: 'modifiable',
  display_label: 'Display Group Heading'
}
*/
export const QuestionGroupHeadingSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionGroupHeading = Static<typeof QuestionGroupHeadingSchema>

/**
* DESCRIPTION: Question element type
* EXAMPLE: { value: 'Text', api_type: 'modifiable', display_label: 'Type' }
*/
export const QuestionElementTypeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementType = Static<typeof QuestionElementTypeSchema>

/**
* DESCRIPTION: Question element response range
* EXAMPLE: { value: '5', api_type: 'modifiable', display_label: 'Response Range' }
*/
export const QuestionElementResponseRangeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementResponseRange = Static<typeof QuestionElementResponseRangeSchema>

/**
* DESCRIPTION: Question element response
* EXAMPLE: {
  value: 'The airspeed of a laden swallow depends: is it African or European?',
  api_type: 'modifiable',
  display_label: 'Response Range'
}
*/
export const QuestionElementResponseSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementResponse = Static<typeof QuestionElementResponseSchema>

/**
* DESCRIPTION: Question element prompt
* EXAMPLE: {
  value: 'What is the airspeed of a laden swallow?',
  api_type: 'modifiable',
  display_label: 'Prompt'
}
*/
export const QuestionElementPromptSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementPrompt = Static<typeof QuestionElementPromptSchema>

/**
* DESCRIPTION: Question element ordinal
* EXAMPLE: { value: '1', api_type: 'modifiable', display_label: 'Ordinal' }
*/
export const QuestionElementOrdinalSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementOrdinal = Static<typeof QuestionElementOrdinalSchema>

/**
* DESCRIPTION: Question element character limit
* EXAMPLE: {
  value: '2000',
  api_type: 'modifiable',
  display_label: 'Character Limit'
}
*/
export const QuestionElementLimitSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementLimit = Static<typeof QuestionElementLimitSchema>

/**
* DESCRIPTION: Question element ID
* EXAMPLE: {
  value: '88dfe659-1e56-4bd5-978c-48863f1eac82',
  api_type: 'system',
  display_label: 'Element ID'
}
*/
export const QuestionElementIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementId = Static<typeof QuestionElementIdSchema>

/**
* DESCRIPTION: An explanation about a question element
* EXAMPLE: {
  value: "If you don't recognize this question, you're not a Python.",
  api_type: 'modifiable',
  display_label: 'Explanation'
}
*/
export const QuestionElementExplanationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type QuestionElementExplanation = Static<typeof QuestionElementExplanationSchema>

/**
* DESCRIPTION: Sex
*/
export const PersonalSexSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type PersonalSex = Static<typeof PersonalSexSchema>

/**
* DESCRIPTION: How many years have you been a member of your Church?
*/
export const PersonalReligionTenureSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type PersonalReligionTenure = Static<typeof PersonalReligionTenureSchema>

/**
* DESCRIPTION: Religious Affiliation
*/
export const PersonalReligionCodeSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type PersonalReligionCode = Static<typeof PersonalReligionCodeSchema>

/**
* DESCRIPTION: Marital Status
*/
export const PersonalMaritalStatusSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type PersonalMaritalStatus = Static<typeof PersonalMaritalStatusSchema>

/**
* DESCRIPTION: Birthday
*/
export const PersonalDateOfBirthSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type PersonalDateOfBirth = Static<typeof PersonalDateOfBirthSchema>

/**
* DESCRIPTION: Type of mission served
*/
export const MissionTypeSchema = Type.Object({
   value: Type.String(),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type MissionType = Static<typeof MissionTypeSchema>

/**
* DESCRIPTION: Has the Applicant served a mission?
*/
export const MissionServiceSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type MissionService = Static<typeof MissionServiceSchema>

/**
* DESCRIPTION: Name of mission
*/
export const MissionNameSchema = Type.Object({
   value: Type.String(),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type MissionName = Static<typeof MissionNameSchema>

/**
* DESCRIPTION: Language spoken in mission
*/
export const MissionLanguageSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type MissionLanguage = Static<typeof MissionLanguageSchema>

/**
* DESCRIPTION: Are you planning to change visa type if you are admitted?
*/
export const IntlVisaChangePlanSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type IntlVisaChangePlan = Static<typeof IntlVisaChangePlanSchema>

/**
* DESCRIPTION: Are you currently residing in the US?
*/
export const IntlCurrentUsResidentSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type IntlCurrentUsResident = Static<typeof IntlCurrentUsResidentSchema>

/**
* DESCRIPTION: US-issued ID for non-citizen residents
*/
export const IntlAlienNumberSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type IntlAlienNumber = Static<typeof IntlAlienNumberSchema>

/**
* DESCRIPTION: Was the institute class taken for credit?
*/
export const InstituteForCreditSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type InstituteForCredit = Static<typeof InstituteForCreditSchema>

/**
* DESCRIPTION: Explanation of Institute participation/non-participation
*/
export const InstituteExplanationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type InstituteExplanation = Static<typeof InstituteExplanationSchema>

/**
* DESCRIPTION: Name of Institute Course
*/
export const InstituteClassSchema = Type.Object({
   value: Type.String(),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type InstituteClass = Static<typeof InstituteClassSchema>

/**
* DESCRIPTION: Years of Institute Attendance
* EXAMPLE: { value: '3', api_type: 'read-only', display_label: 'Years Attended' }
*/
export const InstituteAttendanceSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type InstituteAttendance = Static<typeof InstituteAttendanceSchema>

/**
* DESCRIPTION: Type of High School - public, charter, home school, and so on
* EXAMPLE: {
  value: 'Public',
  description: 'Public High School',
  domain: 'https://api.byu.edu/byuapi/meta/high_school_types/v1',
  api_type: 'modifiable',
  key: true,
  display_label: 'High School Type'
}
*/
export const HighSchoolTypeSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolType = Static<typeof HighSchoolTypeSchema>

/**
* DESCRIPTION: Source of Transcript
* EXAMPLE: {
  value: '1',
  api_type: 'modifiable',
  display_label: 'Transcript Source'
}
*/
export const HighSchoolTranscriptSourceSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolTranscriptSource = Static<typeof HighSchoolTranscriptSourceSchema>

/**
* DESCRIPTION: High School Course Subject
* EXAMPLE: { value: 'English', api_type: 'modifiable', display_label: 'Subject' }
*/
export const HighSchoolSubjectSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolSubject = Static<typeof HighSchoolSubjectSchema>

/**
* DESCRIPTION: State where High School is located
* EXAMPLE: {
  value: 'UT',
  description: 'Utah',
  api_type: 'related',
  related_resource: 'high_schools',
  display_label: 'High School State'
}
*/
export const HighSchoolStateSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolState = Static<typeof HighSchoolStateSchema>

/**
* DESCRIPTION: High School Repeated Course Flag
* EXAMPLE: { value: 'Y', api_type: 'modifiable', display_label: 'Repeated' }
*/
export const HighSchoolRepeatedFlagSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolRepeatedFlag = Static<typeof HighSchoolRepeatedFlagSchema>

/**
* DESCRIPTION: Will the student complete a home school program?
* EXAMPLE: {
  value: 'Blah, blah, blah',
  api_type: 'modifiable',
  display_label: 'Describe your non-accredited school work'
}
*/
export const HighSchoolNonaccreditedStatementSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolNonaccreditedStatement = Static<typeof HighSchoolNonaccreditedStatementSchema>

/**
* DESCRIPTION: Link to document image
* EXAMPLE: {
  value: 'https://api.byu.edu/byuapi/images/5820492',
  api_type: 'modifiable',
  display: 'Link to Document Image'
}
*/
export const HighSchoolLinkToSecondaryDocumentImageSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolLinkToSecondaryDocumentImage = Static<typeof HighSchoolLinkToSecondaryDocumentImageSchema>

/**
* DESCRIPTION: Link to document image
* EXAMPLE: {
  value: 'https://api.byu.edu/byuapi/images/5820492',
  api_type: 'modifiable',
  display: 'Link to Document Image'
}
*/
export const HighSchoolLinkToDocumentImageSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolLinkToDocumentImage = Static<typeof HighSchoolLinkToDocumentImageSchema>

/**
* DESCRIPTION: Date of high school graduation or anticipated date
*/
export const HighSchoolGraduationDateSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolGraduationDate = Static<typeof HighSchoolGraduationDateSchema>

/**
* DESCRIPTION: High School Grading Terms
* EXAMPLE: { value: 4, api_type: 'modifiable', display_label: 'Term' }
*/
export const HighSchoolGradingTermsSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolGradingTerms = Static<typeof HighSchoolGradingTermsSchema>

/**
* DESCRIPTION: Grade Level
* EXAMPLE: { value: '10', api_type: 'modifiable', display_label: 'Grade Level' }
*/
export const HighSchoolGradeLevelSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolGradeLevel = Static<typeof HighSchoolGradeLevelSchema>

/**
* DESCRIPTION: Final letter grade
*/
export const HighSchoolGradeFinalSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolGradeFinal = Static<typeof HighSchoolGradeFinalSchema>

/**
* DESCRIPTION: Calculated GPA
* EXAMPLE: {
  value: '3.75',
  api_type: 'read-only',
  display_label: 'Calculated GPA'
}
*/
export const HighSchoolGpaCalculatedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolGpaCalculated = Static<typeof HighSchoolGpaCalculatedSchema>

/**
* DESCRIPTION: GPA earned in High School
* EXAMPLE: {
  value: '3.1',
  api_type: 'modifiable',
  display_label: 'High School GPA'
}
*/
export const HighSchoolGpaSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolGpa = Static<typeof HighSchoolGpaSchema>

/**
* DESCRIPTION: Number of graded high school credits
*/
export const HighSchoolCreditsSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolCredits = Static<typeof HighSchoolCreditsSchema>

/**
* DESCRIPTION: Course Name
* EXAMPLE: {
  value: 'English',
  api_type: 'modifiable',
  display_label: 'Course Name'
}
*/
export const HighSchoolCourseNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolCourseName = Static<typeof HighSchoolCourseNameSchema>

/**
* DESCRIPTION: Country where High School is located
* EXAMPLE: {
  value: 'us',
  description: 'United States',
  api_type: 'related',
  related_resource: 'high_schools',
  display_label: 'High School Country'
}
*/
export const HighSchoolCountrySchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolCountry = Static<typeof HighSchoolCountrySchema>

/**
* DESCRIPTION: Did the Applicant participate in concurrent enrollment
*/
export const HighSchoolConcurrentEnrollmentSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolConcurrentEnrollment = Static<typeof HighSchoolConcurrentEnrollmentSchema>

/**
* DESCRIPTION: City where High School is located
* EXAMPLE: {
  value: 'Orem',
  api_type: 'related',
  related_resource: 'high_schools',
  display_label: 'High School City'
}
*/
export const HighSchoolCitySchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolCity = Static<typeof HighSchoolCitySchema>

/**
* DESCRIPTION: Number of half year AP/IB classes on high school transcript
*/
export const HighSchoolApIbHalfClassesSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolApIbHalfClasses = Static<typeof HighSchoolApIbHalfClassesSchema>

/**
* DESCRIPTION: Number of full year AP/IB classes on high school transcript
*/
export const HighSchoolApIbFullClassesSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolApIbFullClasses = Static<typeof HighSchoolApIbFullClassesSchema>

/**
* DESCRIPTION: High School AP/IB Flag
* EXAMPLE: { value: 'Y', api_type: 'modifiable', display_label: 'AP/IB Flag' }
*/
export const HighSchoolApIbFlagSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchoolApIbFlag = Static<typeof HighSchoolApIbFlagSchema>

/**
* DESCRIPTION: Self-identified high school - used primarily for identification purposes
* EXAMPLE: {
  value: '450281',
  description: 'Orem High School',
  domain: 'https://api.byu.edu/byuapi/meta/high_schools/v1',
  api_type: 'related',
  related_resource: 'persons',
  display_label: 'High School'
}
*/
export const HighSchoolSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type HighSchool = Static<typeof HighSchoolSchema>

/**
* DESCRIPTION: Entity which verified the visa type
*/
export const GovVisaTypeSourceSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GovVisaTypeSource = Static<typeof GovVisaTypeSourceSchema>

/**
* DESCRIPTION: US-issued Visa Type
*/
export const GovVisaTypeSchema = Type.Object({
   value: Type.String(),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GovVisaType = Static<typeof GovVisaTypeSchema>

/**
* DESCRIPTION: Citizenship Status
*/
export const GovCitizenshipStatusSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GovCitizenshipStatus = Static<typeof GovCitizenshipStatusSchema>

/**
* DESCRIPTION: Country of Citizenship
*/
export const GovCitizenshipCountryCodeSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GovCitizenshipCountryCode = Static<typeof GovCitizenshipCountryCodeSchema>

/**
* DESCRIPTION: Country of Birth
*/
export const GovBirthCountryCodeSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GovBirthCountryCode = Static<typeof GovBirthCountryCodeSchema>

/**
* DESCRIPTION: City of Birth
*/
export const GovBirthCitySchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GovBirthCity = Static<typeof GovBirthCitySchema>

/**
* DESCRIPTION: SRS Site
*/
export const GeiProgramsSrsSiteSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GeiProgramsSrsSite = Static<typeof GeiProgramsSrsSiteSchema>

/**
* DESCRIPTION: SRS Facilitator
*/
export const GeiProgramsSrsFacilitatorSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GeiProgramsSrsFacilitator = Static<typeof GeiProgramsSrsFacilitatorSchema>

/**
* DESCRIPTION: SRS Certificates
*/
export const GeiProgramsSrsCertificatesSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GeiProgramsSrsCertificates = Static<typeof GeiProgramsSrsCertificatesSchema>

/**
* DESCRIPTION: Pathway Connect site
*/
export const GeiProgramsPwSiteSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GeiProgramsPwSite = Static<typeof GeiProgramsPwSiteSchema>

/**
* DESCRIPTION: Pathway Connect GPA
*/
export const GeiProgramsPwGpaSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GeiProgramsPwGpa = Static<typeof GeiProgramsPwGpaSchema>

/**
* DESCRIPTION: Pathway Connect Credits
*/
export const GeiProgramsPwCreditsSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GeiProgramsPwCredits = Static<typeof GeiProgramsPwCreditsSchema>

/**
* DESCRIPTION: Pathway Connect completion date
*/
export const GeiProgramsPwCompletionSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type GeiProgramsPwCompletion = Static<typeof GeiProgramsPwCompletionSchema>

/**
* DESCRIPTION: The endorsement type (i.e., L1, L2)
*/
export const EndorsementTypeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type EndorsementType = Static<typeof EndorsementTypeSchema>

/**
* DESCRIPTION: The status of an endorsement
*/
export const EndorsementStatusSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type EndorsementStatus = Static<typeof EndorsementStatusSchema>

/**
* DESCRIPTION: The date of the endorsement status
*/
export const EndorsementDateSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type EndorsementDate = Static<typeof EndorsementDateSchema>

/**
* DESCRIPTION: Deliverable View Index
*/
export const DeliverableViewIdxSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String())
})
export type DeliverableViewIdx = Static<typeof DeliverableViewIdxSchema>

/**
* DESCRIPTION: Type of Deliverable - corresponds to section heading on Application Status Page
*/
export const DeliverableTypeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableType = Static<typeof DeliverableTypeSchema>

/**
* DESCRIPTION: Specialization of Deliverable - corresponds to line item on Application Status Page
*/
export const DeliverableSubtypeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableSubtype = Static<typeof DeliverableSubtypeSchema>

/**
* DESCRIPTION: Status of an Application Deliverable
*/
export const DeliverableStatusSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableStatus = Static<typeof DeliverableStatusSchema>

/**
* DESCRIPTION: Has the deliverable been satisfied?
*/
export const DeliverableSatisfiedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableSatisfied = Static<typeof DeliverableSatisfiedSchema>

/**
* DESCRIPTION: Defines how to handle the Deliverable Qualifier
*/
export const DeliverableQualifierTypeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableQualifierType = Static<typeof DeliverableQualifierTypeSchema>

/**
* DESCRIPTION: Unique Qualifier assigned to each Deliverable - build to connect to URL
*/
export const DeliverableQualifierSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableQualifier = Static<typeof DeliverableQualifierSchema>

/**
* DESCRIPTION: Deliverable display name
*/
export const DeliverableNameDisplaySchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableNameDisplay = Static<typeof DeliverableNameDisplaySchema>

/**
* DESCRIPTION: Deliverable name
*/
export const DeliverableNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableName = Static<typeof DeliverableNameSchema>

/**
* DESCRIPTION: Unique deliverable identifier
*/
export const DeliverableIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableId = Static<typeof DeliverableIdSchema>

/**
* DESCRIPTION: Description of Deliverable for Applicant
*/
export const DeliverableDescriptionSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableDescription = Static<typeof DeliverableDescriptionSchema>

/**
* DESCRIPTION: Deliverable Controller Index
*/
export const DeliverableControllerIdxSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String())
})
export type DeliverableControllerIdx = Static<typeof DeliverableControllerIdxSchema>

/**
* DESCRIPTION: Date the status of the deliverable last changed
*/
export const DeliverableDateTimeStatusSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableDateTimeStatus = Static<typeof DeliverableDateTimeStatusSchema>

/**
* DESCRIPTION: When the Application Deliverable was satisfied
*/
export const DeliverableDateTimeSatisfiedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type DeliverableDateTimeSatisfied = Static<typeof DeliverableDateTimeSatisfiedSchema>

/**
* DESCRIPTION: State Code
*/
export const ContactStateCodeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactStateCode = Static<typeof ContactStateCodeSchema>

/**
* DESCRIPTION: Postal Code
*/
export const ContactPostalCodeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactPostalCode = Static<typeof ContactPostalCodeSchema>

/**
* DESCRIPTION: Country Code
*/
export const ContactCountryCodeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactCountryCode = Static<typeof ContactCountryCodeSchema>

/**
* DESCRIPTION: City Name
*/
export const ContactCitySchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactCity = Static<typeof ContactCitySchema>

/**
* DESCRIPTION: Fifth Line of Deliverable Address
*/
export const ContactAddressLine5Schema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactAddressLine5 = Static<typeof ContactAddressLine5Schema>

/**
* DESCRIPTION: Fourth Line of Deliverable Address
*/
export const ContactAddressLine4Schema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactAddressLine4 = Static<typeof ContactAddressLine4Schema>

/**
* DESCRIPTION: Third Line of Deliverable Address
*/
export const ContactAddressLine3Schema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactAddressLine3 = Static<typeof ContactAddressLine3Schema>

/**
* DESCRIPTION: Second Line of Deliverable Address
*/
export const ContactAddressLine2Schema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactAddressLine2 = Static<typeof ContactAddressLine2Schema>

/**
* DESCRIPTION: First Line of Deliverable Address
*/
export const ContactAddressLine1Schema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ContactAddressLine1 = Static<typeof ContactAddressLine1Schema>

/**
* DESCRIPTION: College degree major
*/
export const CollegeDegreeMajorSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type CollegeDegreeMajor = Static<typeof CollegeDegreeMajorSchema>

/**
* DESCRIPTION: College degree date
*/
export const CollegeDegreeDateSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type CollegeDegreeDate = Static<typeof CollegeDegreeDateSchema>

/**
* DESCRIPTION: College degree type
*/
export const CollegeDegreeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type CollegeDegree = Static<typeof CollegeDegreeSchema>

/**
* DESCRIPTION: College GPA verified
*/
export const CollegeGpaVerifiedSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type CollegeGpaVerified = Static<typeof CollegeGpaVerifiedSchema>

/**
* DESCRIPTION: Total GPA earned at a College
*/
export const CollegeGpaSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type CollegeGpa = Static<typeof CollegeGpaSchema>

/**
* DESCRIPTION: College Code
*/
export const CollegeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type College = Static<typeof CollegeSchema>

/**
* DESCRIPTION: Average GPA in College
*/
export const CollegeCumulativeGpaSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type CollegeCumulativeGpa = Static<typeof CollegeCumulativeGpaSchema>

/**
* DESCRIPTION: Total credit earned in College
*/
export const CollegeCumulativeCreditSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type CollegeCumulativeCredit = Static<typeof CollegeCumulativeCreditSchema>

/**
* DESCRIPTION: Single Parent
*/
export const BioSingleParentSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BioSingleParent = Static<typeof BioSingleParentSchema>

/**
* DESCRIPTION: Residing With
*/
export const BioResidingWithSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BioResidingWith = Static<typeof BioResidingWithSchema>

/**
* DESCRIPTION: Family Income
*/
export const BioFamilyIncomeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BioFamilyIncome = Static<typeof BioFamilyIncomeSchema>

/**
* DESCRIPTION: Mother's Level of Education
*/
export const BioMothersLevelOfEducationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BioMothersLevelOfEducation = Static<typeof BioMothersLevelOfEducationSchema>

/**
* DESCRIPTION: Did the Applicant mark the Hispanic flag?
*/
export const BioHispanicFlagSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BioHispanicFlag = Static<typeof BioHispanicFlagSchema>

/**
* DESCRIPTION: Father's Level of Education
*/
export const BioFathersLevelOfEducationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BioFathersLevelOfEducation = Static<typeof BioFathersLevelOfEducationSchema>

/**
* DESCRIPTION: Discipline Explanation
*/
export const BgUniversityDisciplineExplanationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BgUniversityDisciplineExplanation = Static<typeof BgUniversityDisciplineExplanationSchema>

/**
* DESCRIPTION: Has the Applicant ever been disciplined by a college or university?
*/
export const BgUniversityDisciplineSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BgUniversityDiscipline = Static<typeof BgUniversityDisciplineSchema>

/**
* DESCRIPTION: Sex Registry Explanation
*/
export const BgSexRegistryExplanationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BgSexRegistryExplanation = Static<typeof BgSexRegistryExplanationSchema>

/**
* DESCRIPTION: Has the Applicant ever been listed on a sex offender registry?
*/
export const BgSexRegistrySchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BgSexRegistry = Static<typeof BgSexRegistrySchema>

/**
* DESCRIPTION: Explanation for the Plural Marriage Affiliation
*/
export const BgPluralMarriageExplanationSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BgPluralMarriageExplanation = Static<typeof BgPluralMarriageExplanationSchema>

/**
* DESCRIPTION: Is the applicant affiliated with any group that currently advocates plural marriage?
*/
export const BgPluralMarriageSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BgPluralMarriage = Static<typeof BgPluralMarriageSchema>

/**
* DESCRIPTION: Details on each conviction and resolution
*/
export const BgCriminalConvictionsSchema = Type.Array(Type.Object({
   crime: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   crime_year: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   courts: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   conditions: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   probation: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   probation_explanation: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   penalties: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   penalties_explanation: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   })),
   additional_explanation: Type.Optional(Type.Object({
      value: Type.String(),
      api_type: Type.Optional(Type.String()),
      display_label: Type.Optional(Type.String())
   }))
}))
export type BgCriminalConvictions = Static<typeof BgCriminalConvictionsSchema>

/**
* DESCRIPTION: Has the Applicant ever been convicted?
*/
export const BgConvictionRecordSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BgConvictionRecord = Static<typeof BgConvictionRecordSchema>

/**
* DESCRIPTION: Phone Number
*/
export const BasicSecondaryPhoneNumberSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicSecondaryPhoneNumber = Static<typeof BasicSecondaryPhoneNumberSchema>

/**
* DESCRIPTION: Phone Number
*/
export const BasicPhoneNumberSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   key: Type.Optional(Type.Boolean()),
   display_label: Type.Optional(Type.String())
})
export type BasicPhoneNumber = Static<typeof BasicPhoneNumberSchema>

/**
* DESCRIPTION: Email Address
*/
export const BasicSecondaryEmailAddressSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicSecondaryEmailAddress = Static<typeof BasicSecondaryEmailAddressSchema>

/**
* DESCRIPTION: Email Address
*/
export const BasicEmailAddressSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicEmailAddress = Static<typeof BasicEmailAddressSchema>

/**
* DESCRIPTION: Status of the Application or School Selection
*/
export const BasicSchoolPreferenceOrderSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicSchoolPreferenceOrder = Static<typeof BasicSchoolPreferenceOrderSchema>

/**
* DESCRIPTION: Legal Surname
*/
export const BasicSurnameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicSurname = Static<typeof BasicSurnameSchema>

/**
* DESCRIPTION: Legal Suffix added to the Legal Name
*/
export const BasicSuffixSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicSuffix = Static<typeof BasicSuffixSchema>

/**
* DESCRIPTION: Legal First-Middle-etc Name (everything except for the Surname)
*/
export const BasicRestOfNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicRestOfName = Static<typeof BasicRestOfNameSchema>

/**
* DESCRIPTION: Primary Language
*/
export const BasicPrimaryLanguageSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicPrimaryLanguage = Static<typeof BasicPrimaryLanguageSchema>

/**
* DESCRIPTION: Previous/Maiden Name
*/
export const BasicPreviousNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicPreviousName = Static<typeof BasicPreviousNameSchema>

/**
* DESCRIPTION: Complete preferred name - first name first
*/
export const BasicPreferredNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicPreferredName = Static<typeof BasicPreferredNameSchema>

/**
* DESCRIPTION: Institution-specific net ID.
*/
export const BasicNetIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String())
})
export type BasicNetId = Static<typeof BasicNetIdSchema>

/**
* DESCRIPTION: Legal Middle Name(s)
*/
export const BasicMiddleNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicMiddleName = Static<typeof BasicMiddleNameSchema>

/**
* DESCRIPTION: Institution-specific person ID.
*/
export const BasicInstitutionIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String())
})
export type BasicInstitutionId = Static<typeof BasicInstitutionIdSchema>

/**
* DESCRIPTION: Self-identified home town - used primarily for identification purposes
*/
export const BasicHomeTownSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicHomeTown = Static<typeof BasicHomeTownSchema>

/**
* DESCRIPTION: Self-identified home state - used primarily for identification purposes
*/
export const BasicHomeStateSchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicHomeState = Static<typeof BasicHomeStateSchema>

/**
* DESCRIPTION: Self-identified home county - used primarily for scholarship considerations
*/
export const BasicHomeCountySchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicHomeCounty = Static<typeof BasicHomeCountySchema>

/**
* DESCRIPTION: Self-identified home country - used primarily for identification purposes
*/
export const BasicHomeCountrySchema = Type.Object({
   value: Type.String(),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicHomeCountry = Static<typeof BasicHomeCountrySchema>

/**
* DESCRIPTION: Legal First Name
*/
export const BasicFirstNameSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicFirstName = Static<typeof BasicFirstNameSchema>

/**
* DESCRIPTION: The date time that the decision was made
*/
export const BasicDecisionDateTimeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicDecisionDateTime = Static<typeof BasicDecisionDateTimeSchema>

/**
* DESCRIPTION: Decision template ID
*/
export const BasicDecisionTemplateIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicDecisionTemplateId = Static<typeof BasicDecisionTemplateIdSchema>

/**
* DESCRIPTION: The reason for the decision made on the application
*/
export const BasicDecisionQualifierSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicDecisionQualifier = Static<typeof BasicDecisionQualifierSchema>

/**
* DESCRIPTION: The decision made on the application
*/
export const BasicDecisionSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicDecision = Static<typeof BasicDecisionSchema>

/**
* DESCRIPTION: Date the Application or School Selection was determined
*/
export const BasicApplicationStatusDateTimeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicApplicationStatusDateTime = Static<typeof BasicApplicationStatusDateTimeSchema>

/**
* DESCRIPTION: Status of the Application or School Selection
*/
export const BasicApplicationStatusSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicApplicationStatus = Static<typeof BasicApplicationStatusSchema>

/**
* DESCRIPTION: When did the applicant accept financial responsibility?
*/
export const BasicAgreementFinancialResponsibilityDateTimeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicAgreementFinancialResponsibilityDateTime = Static<typeof BasicAgreementFinancialResponsibilityDateTimeSchema>

/**
* DESCRIPTION: When did the applicant agree to the information release?
*/
export const BasicAgreementInformationReleaseDateTimeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type BasicAgreementInformationReleaseDateTime = Static<typeof BasicAgreementInformationReleaseDateTimeSchema>

/**
* DESCRIPTION: When was the Application Action taken?
*/
export const ActionDateTimeSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ActionDateTime = Static<typeof ActionDateTimeSchema>

/**
* DESCRIPTION: Who attempted the Application Action
*/
export const ActionByIdSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ActionById = Static<typeof ActionByIdSchema>

/**
* DESCRIPTION: Results of the Application Action attempt
*/
export const ActionResultsSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ActionResults = Static<typeof ActionResultsSchema>

/**
* DESCRIPTION: Notes added by the Applicant
*/
export const ActionMessageSchema = Type.Object({
   value: Type.String(),
   api_type: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
})
export type ActionMessage = Static<typeof ActionMessageSchema>

/**
* DESCRIPTION: Elements required to perform an application action
* EXAMPLE: {
  component_id: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
  action: 'Create',
  action_message: 'New Application Created',
  data: {}
}
*/
export const ActionSchema = Type.Object({
   action: Type.String(),
   action_message: Type.Optional(Type.String()),
   component_id: Type.Optional(Type.String()),
   data: Type.Optional(Type.Object({
   }))
})
export type Action = Static<typeof ActionSchema>

/**
*/
export const MetadataSimpleSchema = Type.Object({
   validation_response: Type.Object({
      code: Type.Integer(),
      message: Type.String()
   }),
   validation_information: Type.Optional(Type.Array(Type.String())),
   cache: Type.Optional(Type.Object({
      date_time: Type.Optional(Type.String())
   }))
})
export type MetadataSimple = Static<typeof MetadataSimpleSchema>

/**
* DESCRIPTION: A list of decision reasons
*/
export const DecisionReasonsSchema = Type.Object({
   metadata: MetadataSimpleSchema,
   values: Type.Optional(Type.Object({
      admitReasons: Type.Optional(DecisionReasonValueArraySchema),
      denyReasons: Type.Optional(DecisionReasonValueArraySchema),
      holdReasons: Type.Optional(DecisionReasonValueArraySchema),
      archiveReasons: Type.Optional(DecisionReasonValueArraySchema)
   }))
})
export type DecisionReasons = Static<typeof DecisionReasonsSchema>

/**
*/
export const MetadataCollectionSchema = Type.Intersect([
   MetadataSimpleSchema,
   Type.Object({
      collection_size: Type.Optional(Type.Integer()),
      page_start: Type.Optional(Type.Integer()),
      page_end: Type.Optional(Type.Integer()),
      page_size: Type.Optional(Type.Integer()),
      default_page_size: Type.Optional(Type.Integer()),
      max_page_size: Type.Optional(Type.Integer())
   })
])
export type MetadataCollection = Static<typeof MetadataCollectionSchema>

/**
*/
export const MetadataTopLevelSchema = Type.Intersect([
   MetadataCollectionSchema,
   Type.Object({
      field_sets_returned: Type.Optional(Type.Array(Type.String())),
      field_sets_available: Type.Optional(Type.Array(Type.String())),
      field_sets_default: Type.Optional(Type.Array(Type.String())),
      contexts_available: Type.Optional(Type.Object({
         admin: Type.Optional(Type.Array(Type.String())),
         all: Type.Optional(Type.Array(Type.String())),
         application_controls: Type.Optional(Type.Array(Type.String())),
         applicant: Type.Optional(Type.Array(Type.String())),
         contact: Type.Optional(Type.Array(Type.String())),
         education: Type.Optional(Type.Array(Type.String())),
         profile: Type.Optional(Type.Array(Type.String())),
         religion: Type.Optional(Type.Array(Type.String()))
      }))
   })
])
export type MetadataTopLevel = Static<typeof MetadataTopLevelSchema>

/**
*/
export const ErrorResponseSchema = Type.Object({
   metadata: MetadataSimpleSchema
})
export type ErrorResponse = Static<typeof ErrorResponseSchema>

/**
*/
export const SeminaryTermInfoSchema = Type.Object({
   term: Type.Optional(SeminaryTermSchema),
   absences: Type.Optional(SeminaryAbsencesSchema),
   sessions: Type.Optional(SeminarySessionsSchema),
   attendance: Type.Optional(SeminaryAttendanceSchema),
   reading: Type.Optional(SeminaryReadingSchema),
   recognition: Type.Optional(SeminaryRecognitionSchema),
   credit: Type.Optional(SeminaryCreditSchema),
   grade: Type.Optional(SeminaryGradeSchema)
})
export type SeminaryTermInfo = Static<typeof SeminaryTermInfoSchema>

/**
*/
export const SeminaryClassDataSchema = Type.Object({
   seminary_class: Type.Optional(SeminaryClassSchema),
   academic_year: Type.Optional(SharedAcademicYearSchema),
   term_info: Type.Optional(Type.Array(SeminaryTermInfoSchema))
})
export type SeminaryClassData = Static<typeof SeminaryClassDataSchema>

/**
* DESCRIPTION: A set of question elements that should be grouped together
*/
export const QuestionGroupSchema = Type.Object({
   id: Type.Optional(QuestionGroupIdSchema),
   name: Type.Optional(NameSchema),
   description: Type.Optional(DescriptionSchema),
   ordinal: Type.Optional(QuestionGroupOrdinalSchema),
   heading: Type.Optional(QuestionGroupHeadingSchema),
   elements: Type.Optional(Type.Array(Type.Object({
      id: Type.Optional(Type.String()),
      label: Type.Optional(Type.String()),
      ordinal: Type.Optional(Type.String())
   })))
})
export type QuestionGroup = Static<typeof QuestionGroupSchema>

/**
* DESCRIPTION: A question element
*/
export const QuestionElementSchema = Type.Object({
   id: Type.Optional(QuestionElementIdSchema),
   type: Type.Optional(QuestionElementTypeSchema),
   prompt: Type.Optional(QuestionElementPromptSchema),
   explanation: Type.Optional(QuestionElementExplanationSchema),
   limit: Type.Optional(QuestionElementLimitSchema),
   ordinal: Type.Optional(QuestionElementOrdinalSchema),
   response: Type.Optional(QuestionElementResponseSchema),
   response_range: Type.Optional(QuestionElementResponseRangeSchema),
   response_criteria: Type.Optional(Type.Array(Type.Object({
      label: Type.Optional(Type.String()),
      value: Type.Optional(Type.String())
   }))),
   response_set: Type.Optional(Type.Array(Type.String()))
})
export type QuestionElement = Static<typeof QuestionElementSchema>

/**
* DESCRIPTION: Answers to question elements
* EXAMPLE: {
  answers: [
    {
      element_id: '88dfe659-1e56-4bd5-978c-48863f1eac82',
      response: 'The airspeed of a laden swallow depends: is it African or European?'
    }
  ]
}
*/
export const QuestionAnswerSchema = Type.Object({
   answers: Type.Optional(Type.Array(Type.Object({
      element_id: Type.Optional(Type.String()),
      response: Type.Optional(Type.String())
   })))
})
export type QuestionAnswer = Static<typeof QuestionAnswerSchema>

/**
* DESCRIPTION: Collection of self-declared racial categories
*/
export const RacialCategoriesSchema = Type.Array(Type.Object({
   value: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
}))
export type RacialCategories = Static<typeof RacialCategoriesSchema>

/**
* DESCRIPTION: Collection of languages in which the Applicant has declared some proficiency
*/
export const LanguagesSchema = Type.Array(Type.Object({
   value: Type.Optional(Type.String()),
   api_type: Type.Optional(Type.String()),
   related_resource: Type.Optional(Type.String()),
   description: Type.Optional(Type.String()),
   domain: Type.Optional(Type.String()),
   display_label: Type.Optional(Type.String())
}))
export type Languages = Static<typeof LanguagesSchema>

/**
*/
export const HighSchoolNonaccreditedWorkInfoSchema = Type.Object({
   grade_level: Type.Optional(HighSchoolGradeLevelSchema),
   statement: Type.Optional(HighSchoolNonaccreditedStatementSchema)
})
export type HighSchoolNonaccreditedWorkInfo = Static<typeof HighSchoolNonaccreditedWorkInfoSchema>

/**
*/
export const HighSchoolCourseInfoSchema = Type.Object({
   grade_level: Type.Optional(HighSchoolGradeLevelSchema),
   subject: Type.Optional(HighSchoolSubjectSchema),
   course_name: Type.Optional(HighSchoolCourseNameSchema),
   ap_ib_flag: Type.Optional(HighSchoolApIbFlagSchema),
   repeated: Type.Optional(HighSchoolRepeatedFlagSchema),
   grading_terms: Type.Optional(HighSchoolGradingTermsSchema),
   grade_final: Type.Optional(HighSchoolGradeFinalSchema),
   credits: Type.Optional(HighSchoolCreditsSchema),
   grades: Type.Optional(Type.Array(SharedGradeSchema))
})
export type HighSchoolCourseInfo = Static<typeof HighSchoolCourseInfoSchema>

/**
* DESCRIPTION: Modifiable International Recordes Information
* EXAMPLE: {
  alien_number: '789789789',
  current_us_resident: 'Y',
  visa_change_plan: 'Y'
}
*/
export const InternationalRecordsModifySchema = Type.Object({
   alien_number: Type.Optional(Type.String()),
   current_us_resident: Type.Optional(Type.String()),
   visa_change_plan: Type.Optional(Type.String())
})
export type InternationalRecordsModify = Static<typeof InternationalRecordsModifySchema>

/**
* DESCRIPTION: Modifiable Missions Information
* EXAMPLE: {
  mission_type: 'Y',
  mission_name: 'Honduras Tegucigalpa',
  mission_language: 'ES',
  start_month: '2014-06',
  end_month: '2016-06'
}
*/
export const MissionsModifySchema = Type.Object({
   mission_type: Type.Optional(Type.String()),
   mission_name: Type.Optional(Type.String()),
   mission_language: Type.Optional(Type.String()),
   start_month: Type.Optional(Type.String()),
   end_month: Type.Optional(Type.String())
})
export type MissionsModify = Static<typeof MissionsModifySchema>

/**
*/
export const HighSchoolNonaccreditedWorkInfoModifySchema = Type.Object({
   grade_level: Type.Optional(Type.String()),
   statement: Type.Optional(Type.String())
})
export type HighSchoolNonaccreditedWorkInfoModify = Static<typeof HighSchoolNonaccreditedWorkInfoModifySchema>

/**
*/
export const HighSchoolCourseInfoModifySchema = Type.Object({
   grade_level: Type.Optional(Type.String()),
   subject: Type.Optional(Type.String()),
   course_name: Type.Optional(Type.String()),
   ap_ib_flag: Type.Optional(Type.String()),
   repeated: Type.Optional(Type.String()),
   grading_terms: Type.Optional(Type.String()),
   grades: Type.Optional(Type.Array(Type.String())),
   grade_final: Type.Optional(Type.String()),
   credits: Type.Optional(Type.String())
})
export type HighSchoolCourseInfoModify = Static<typeof HighSchoolCourseInfoModifySchema>

/**
* DESCRIPTION: High School for Applicant API
* EXAMPLE: {
  high_school_type: 'Public',
  high_school_code: '485934',
  high_school_name: 'Provo High',
  high_school_city: 'Provo',
  high_school_state: 'UT',
  start_month: '2013-01',
  end_month: '2013-08',
  graduation_status: 'Y',
  graduation_date: '2015-05',
  gpa_overall: '3.75',
  gpa_calculated: '3.75',
  list_of_classes: [
    {
      grade_level: '10',
      subject: 'English',
      course_name: 'English 101',
      ap_ib_flag: 'Y',
      repeated: 'N',
      grading_terms: '4',
      grades: [ 'A', 'A', 'A', 'A' ],
      grade_final: 'A',
      credits: '1.0'
    }
  ],
  list_of_nonaccredited_work: [ { grade_level: '10', statement: 'blah blah blah' } ],
  transcript_source: '1',
  verified_by_id: '764634873',
  date_time_verified: '2014-05-11T13:45:53.200Z',
  link_to_document_image: 'https://api.byu.edu/byuapi/images/5820492',
  link_to_secondary_document_image: 'https://api.byu.edu/byuapi/images/5820492'
}
*/
export const HighSchoolSummaryModifySchema = Type.Object({
   high_school_type: Type.Optional(Type.String()),
   high_school_code: Type.Optional(Type.String()),
   high_school_name: Type.Optional(Type.String()),
   high_school_city: Type.Optional(Type.String()),
   high_school_state: Type.Optional(Type.String()),
   high_school_country: Type.Optional(Type.String()),
   start_month: Type.Optional(Type.String()),
   end_month: Type.Optional(Type.String()),
   graduation_status: Type.Optional(Type.String()),
   graduation_date: Type.Optional(Type.String()),
   high_school_gpa: Type.Optional(Type.String()),
   list_of_classes: Type.Optional(Type.Array(HighSchoolCourseInfoModifySchema)),
   list_of_nonaccredited_work: Type.Optional(Type.Array(HighSchoolNonaccreditedWorkInfoModifySchema)),
   concurrent_enrollment: Type.Optional(Type.String()),
   transcript_source: Type.Optional(Type.String()),
   verified_by_id: Type.Optional(Type.String()),
   date_time_verified: Type.Optional(Type.String()),
   link_to_document_image: Type.Optional(Type.String()),
   link_to_secondary_document_image: Type.Optional(Type.String())
})
export type HighSchoolSummaryModify = Static<typeof HighSchoolSummaryModifySchema>

/**
* DESCRIPTION: Modifiable Government Records Information
* EXAMPLE: {
  ssn: '123456789',
  ssn_verification_date: '2017-04-23',
  i20_expiration_date: '2021-05-17',
  visa_type: 'student',
  visa_type_source: 'string',
  citizenship_status: 'I',
  citizenship_country_code: 'can',
  birth_country_code: 'can',
  birth_city: 'Beijing'
}
*/
export const GovernmentRecordsModifySchema = Type.Object({
   visa_type: Type.Optional(Type.String()),
   visa_type_source: Type.Optional(Type.String()),
   citizenship_status: Type.Optional(Type.String()),
   citizenship_country_code: Type.Optional(Type.String()),
   birth_country_code: Type.Optional(Type.String()),
   birth_city: Type.Optional(Type.String())
})
export type GovernmentRecordsModify = Static<typeof GovernmentRecordsModifySchema>

/**
* DESCRIPTION: Modifiable GEI Program Information
* EXAMPLE: {
  srs_certificates: 'Finance, Business, Job',
  srs_facilitator: 'John Smith',
  srs_site: 'Test Stake'
}
*/
export const GeiProgramModifySchema = Type.Object({
   srs_certificates: Type.Optional(Type.String()),
   srs_facilitator: Type.Optional(Type.String()),
   srs_site: Type.Optional(Type.String())
})
export type GeiProgramModify = Static<typeof GeiProgramModifySchema>

/**
* DESCRIPTION: Structure to Modify Contact Information
* EXAMPLE: {
  preferred_name: 'Roger',
  surname: 'Rabbit',
  email_address: 'roger.rabbit@gmail.com',
  phone_number: '123456789',
  address_line_1: '142 Termite Terrace',
  address_line_2: 'Apt. 2',
  address_line_3: '',
  address_line_4: '',
  country_code: 'USA',
  city: 'Los Angeles',
  state_code: 'CA',
  postal_code: '98765-4321'
}
*/
export const ContactModifySchema = Type.Object({
   preferred_name: Type.Optional(Type.String()),
   surname: Type.Optional(Type.String()),
   email_address: Type.Optional(Type.String()),
   phone_number: Type.Optional(Type.String()),
   address_line_1: Type.Optional(Type.String()),
   address_line_2: Type.Optional(Type.String()),
   address_line_3: Type.Optional(Type.String()),
   address_line_4: Type.Optional(Type.String()),
   country_code: Type.Optional(Type.String()),
   city: Type.Optional(Type.String()),
   state_code: Type.Optional(Type.String()),
   postal_code: Type.Optional(Type.String())
})
export type ContactModify = Static<typeof ContactModifySchema>

/**
* DESCRIPTION: Structure to Modify College Summary Information
*/
export const CollegeSummaryModifySchema = Type.Array(Type.Object({
   college_code: Type.Optional(Type.String()),
   start_month: Type.Optional(Type.String()),
   end_month: Type.Optional(Type.String()),
   gpa: Type.Optional(Type.String()),
   credit_hours_graded: Type.Optional(Type.String())
}))
export type CollegeSummaryModify = Static<typeof CollegeSummaryModifySchema>

/**
* DESCRIPTION: Modifiable Biographical Classifications
* EXAMPLE: {
  hispanic_flag: 'N',
  racial_categories: 'Caucasian',
  languages: 'Spanish',
  mothers_level_of_education: 'SC',
  fathers_level_of_education: 'SH',
  single_parent: 'Y'
}
*/
export const BiographicalClassificationsModifySchema = Type.Object({
   hispanic_flag: Type.Optional(Type.String()),
   racial_categories: Type.Optional(Type.String()),
   languages: Type.Optional(Type.String()),
   mothers_level_of_education: Type.Optional(Type.String()),
   fathers_level_of_education: Type.Optional(Type.String()),
   family_income: Type.Optional(Type.String()),
   residing_with: Type.Optional(Type.String()),
   single_parent: Type.Optional(Type.String())
})
export type BiographicalClassificationsModify = Static<typeof BiographicalClassificationsModifySchema>

/**
* DESCRIPTION: Structure to modify background questions
* EXAMPLE: {
  conviction_record: 'Y',
  criminal_convictions: [
    {
      crime: 'Petty Theft',
      crime_year: '1999',
      courts: 'Kangaroo Court, Tasmania, Australia',
      conditions: '50 lashes with a wet noodle',
      probation: 'N',
      probation_explanation: 'Generic explanation',
      penalties: 'Y',
      penalties_explanation: 'Generic explanation',
      additional_explanation: 'Generic explanation'
    }
  ],
  plural_marriage: 'N',
  plural_marriage_explanation: '',
  sex_registry: 'N',
  sex_registry_explanation: '',
  university_discipline: 'N',
  university_discipline_explanation: ''
}
*/
export const BackgroundQuestionsModifySchema = Type.Object({
   conviction_record: Type.Optional(Type.String()),
   criminal_convictions: Type.Optional(Type.Array(Type.Object({
      crime: Type.Optional(Type.String()),
      crime_year: Type.Optional(Type.String()),
      courts: Type.Optional(Type.String()),
      conditions: Type.Optional(Type.String()),
      probation: Type.Optional(Type.String()),
      probation_explanation: Type.Optional(Type.String()),
      penalties: Type.Optional(Type.String()),
      penalties_explanation: Type.Optional(Type.String()),
      additional_explanation: Type.Optional(Type.String())
   }))),
   plural_marriage: Type.Optional(Type.String()),
   plural_marriage_explanation: Type.Optional(Type.String()),
   sex_registry: Type.Optional(Type.String()),
   sex_registry_explanation: Type.Optional(Type.String()),
   university_discipline: Type.Optional(Type.String()),
   university_discipline_explanation: Type.Optional(Type.String())
})
export type BackgroundQuestionsModify = Static<typeof BackgroundQuestionsModifySchema>

/**
* DESCRIPTION: A Test Score from the applicant
*/
export const TestScoreSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   test_name: Type.Optional(TestNameSchema),
   test_date: Type.Optional(TestDateSchema),
   composite_score: Type.Optional(TestCompositeScoreSchema),
   date_time_reported: Type.Optional(DateTimeReportedSchema),
   test_version: Type.Optional(TestVersionSchema),
   test_components: Type.Optional(Type.Array(Type.Object({
      component_name: Type.Optional(TestComponentNameSchema),
      component_score: Type.Optional(TestComponentScoreSchema)
   })))
})
export type TestScore = Static<typeof TestScoreSchema>

/**
* DESCRIPTION: A collection of Test Scores from the applicant
*/
export const TestScoresSchema = Type.Object({
   metadata: MetadataCollectionSchema,
   links: Type.Optional(Type.Object({
      test_scores__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   values: Type.Optional(Type.Array(TestScoreSchema))
})
export type TestScores = Static<typeof TestScoresSchema>

/**
* DESCRIPTION: Service or query statistics
*/
export const StatsSchema = Type.Array(AttributeStringSchema)
export type Stats = Static<typeof StatsSchema>

/**
* DESCRIPTION: Seminary information from the applicant API
*/
export const SeminarySummariesSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   seminary_type: Type.Optional(SeminaryTypeSchema),
   years_completed: Type.Optional(SeminaryYearsCompletedSchema),
   attendance_percentage: Type.Optional(SeminaryAttendancePercentageSchema),
   graduation_status: Type.Optional(SharedGraduationStatusSchema),
   seminary_explanation: Type.Optional(SeminaryExplanationSchema),
   teacher_name: Type.Optional(SeminaryTeacherNameSchema),
   teacher_email: Type.Optional(SeminaryTeacherEmailSchema),
   date_time_reported: Type.Optional(DateTimeReportedSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      seminary_summaries__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      seminary_summaries__modify: Type.Optional(Type.Object({
         rel: Type.Optional(Type.String()),
         href: Type.Optional(Type.String()),
         method: Type.Optional(Type.String())
      })),
      seminary_summaries__remove: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   seminary_classes: Type.Optional(Type.Array(SeminaryClassDataSchema))
})
export type SeminarySummaries = Static<typeof SeminarySummariesSchema>

/**
*/
export const ReportsMetadataSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   values: Type.Optional(Type.Array(Type.Object({
      name: Type.Optional(Type.String()),
      description: Type.Optional(Type.String()),
      long_description: Type.Optional(Type.String()),
      category: Type.Optional(Type.String()),
      limit: Type.Optional(Type.String()),
      pagination_parameter: Type.Optional(Type.String()),
      institutions: Type.Optional(Type.Array(Type.String())),
      content_type: Type.Optional(Type.Array(Type.String())),
      parameters: Type.Optional(Type.Array(Type.String())),
      columns: Type.Optional(Type.Array(Type.Object({
         ordinal: Type.Optional(Type.String()),
         name: Type.Optional(Type.String()),
         qualifier: Type.Optional(Type.Array(Type.String())),
         link: Type.Optional(Type.String())
      })))
   })))
})
export type ReportsMetadata = Static<typeof ReportsMetadataSchema>

/**
* DESCRIPTION: An application question
*/
export const QuestionSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   uuid: Type.Optional(QuestionUuidSchema),
   type: Type.Optional(QuestionTypeSchema),
   name: Type.Optional(NameSchema),
   description: Type.Optional(DescriptionSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      question__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      question__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   elements: Type.Optional(Type.Array(QuestionElementSchema)),
   groups: Type.Optional(Type.Array(QuestionGroupSchema))
})
export type Question = Static<typeof QuestionSchema>

/**
* DESCRIPTION: Admissions questions
*/
export const QuestionsSchema = Type.Object({
   metadata: MetadataCollectionSchema,
   links: Type.Optional(Type.Object({
      questions__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   values: Type.Optional(Type.Array(QuestionSchema))
})
export type Questions = Static<typeof QuestionsSchema>

/**
* DESCRIPTION: Confidential personal information on the applicant API
*/
export const PersonalRecordsSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   date_of_birth: Type.Optional(PersonalDateOfBirthSchema),
   marital_status: Type.Optional(PersonalMaritalStatusSchema),
   religion_code: Type.Optional(PersonalReligionCodeSchema),
   religion_tenure: Type.Optional(PersonalReligionTenureSchema),
   sex: Type.Optional(PersonalSexSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      personal_records__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      personal_records__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      persons__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type PersonalRecords = Static<typeof PersonalRecordsSchema>

/**
* DESCRIPTION: Mission information for Applicant on the Undergradudate Application
*/
export const MissionsSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   mission_service: Type.Optional(MissionServiceSchema),
   mission_name: Type.Optional(MissionNameSchema),
   mission_language: Type.Optional(MissionLanguageSchema),
   start_month: Type.Optional(SharedStartMonthSchema),
   end_month: Type.Optional(SharedEndMonthSchema),
   mission_type: Type.Optional(MissionTypeSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      missions__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type Missions = Static<typeof MissionsSchema>

/**
* DESCRIPTION: Confidential International information for Applicant API
*/
export const InternationalRecordsSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   alien_number: Type.Optional(IntlAlienNumberSchema),
   current_us_resident: Type.Optional(IntlCurrentUsResidentSchema),
   visa_change_plan: Type.Optional(IntlVisaChangePlanSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      international_records__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      international_records__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type InternationalRecords = Static<typeof InternationalRecordsSchema>

/**
* DESCRIPTION: Institute Class Enrollment information
*/
export const InstituteClassDataSchema = Type.Object({
   institute_class: Type.Optional(InstituteClassSchema),
   academic_year: Type.Optional(SharedAcademicYearSchema),
   grade: Type.Optional(SharedGradeSchema),
   for_credit: Type.Optional(InstituteForCreditSchema)
})
export type InstituteClassData = Static<typeof InstituteClassDataSchema>

/**
* DESCRIPTION: Institute information from the Application API
*/
export const InstituteSummariesSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   institute_attendance: Type.Optional(InstituteAttendanceSchema),
   institute_explanation: Type.Optional(InstituteExplanationSchema),
   date_time_reported: Type.Optional(DateTimeReportedSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      institute_summaries__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      institute_summaries__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      institute_summaries__remove: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   institute_classes: Type.Optional(Type.Array(InstituteClassDataSchema))
})
export type InstituteSummaries = Static<typeof InstituteSummariesSchema>

/**
* DESCRIPTION: High School for Undergraduate Application API
*/
export const HighSchoolSummarySchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   high_school_type: Type.Optional(HighSchoolTypeSchema),
   high_school: Type.Optional(HighSchoolSchema),
   high_school_city: Type.Optional(HighSchoolCitySchema),
   high_school_state: Type.Optional(HighSchoolStateSchema),
   high_school_country: Type.Optional(HighSchoolCountrySchema),
   start_month: Type.Optional(SharedStartMonthSchema),
   end_month: Type.Optional(SharedEndMonthSchema),
   graduation_status: Type.Optional(SharedGraduationStatusSchema),
   graduation_date: Type.Optional(HighSchoolGraduationDateSchema),
   high_school_gpa: Type.Optional(HighSchoolGpaSchema),
   gpa_calculated: Type.Optional(HighSchoolGpaCalculatedSchema),
   ap_ib_half_classes: Type.Optional(HighSchoolApIbHalfClassesSchema),
   ap_ib_full_classes: Type.Optional(HighSchoolApIbFullClassesSchema),
   concurrent_enrollment: Type.Optional(HighSchoolConcurrentEnrollmentSchema),
   transcript_source: Type.Optional(HighSchoolTranscriptSourceSchema),
   date_time_verified: Type.Optional(DateTimeVerifiedSchema),
   link_to_document_image: Type.Optional(HighSchoolLinkToDocumentImageSchema),
   link_to_secondary_document_image: Type.Optional(HighSchoolLinkToSecondaryDocumentImageSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      high_school_summaries__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      high_school_summaries__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      high_school_summaries__remove: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      high_school_codes__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   list_of_classes: Type.Optional(Type.Array(HighSchoolCourseInfoSchema)),
   list_of_nonaccredited_work: Type.Optional(Type.Array(HighSchoolNonaccreditedWorkInfoSchema))
})
export type HighSchoolSummary = Static<typeof HighSchoolSummarySchema>

/**
* DESCRIPTION: High Schools for Undergraduate Application API
*/
export const HighSchoolSummariesSchema = Type.Object({
   metadata: MetadataCollectionSchema,
   links: Type.Optional(Type.Object({
      high_school_summaries__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   values: Type.Optional(Type.Array(HighSchoolSummarySchema))
})
export type HighSchoolSummaries = Static<typeof HighSchoolSummariesSchema>

/**
* DESCRIPTION: Confidential Government information for an Applicant
*/
export const GovernmentRecordsSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   birth_city: Type.Optional(GovBirthCitySchema),
   birth_country_code: Type.Optional(GovBirthCountryCodeSchema),
   citizenship_country_code: Type.Optional(GovCitizenshipCountryCodeSchema),
   citizenship_status: Type.Optional(GovCitizenshipStatusSchema),
   visa_type: Type.Optional(GovVisaTypeSchema),
   visa_type_source: Type.Optional(GovVisaTypeSourceSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      government_records__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      government_records__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      persons__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type GovernmentRecords = Static<typeof GovernmentRecordsSchema>

/**
*/
export const GeiProgramsSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   pw_completion: Type.Optional(GeiProgramsPwCompletionSchema),
   pw_credits: Type.Optional(GeiProgramsPwCreditsSchema),
   pw_gpa: Type.Optional(GeiProgramsPwGpaSchema),
   pw_site: Type.Optional(GeiProgramsPwSiteSchema),
   srs_certificates: Type.Optional(GeiProgramsSrsCertificatesSchema),
   srs_facilitator: Type.Optional(GeiProgramsSrsFacilitatorSchema),
   srs_site: Type.Optional(GeiProgramsSrsSiteSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      gei_programs__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      gei_programs__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type GeiPrograms = Static<typeof GeiProgramsSchema>

/**
*/
export const EndorsementSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   date: Type.Optional(EndorsementDateSchema),
   status: Type.Optional(EndorsementStatusSchema),
   type: Type.Optional(EndorsementTypeSchema),
   links: Type.Optional(Type.Object({
      endorsement__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type Endorsement = Static<typeof EndorsementSchema>

/**
* DESCRIPTION: College Summary from the applicant
*/
export const CollegeSummarySchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   college: Type.Optional(CollegeSchema),
   start_month: Type.Optional(SharedStartMonthSchema),
   end_month: Type.Optional(SharedEndMonthSchema),
   gpa: Type.Optional(CollegeGpaSchema),
   gpa_verified: Type.Optional(CollegeGpaVerifiedSchema),
   degree: Type.Optional(CollegeDegreeSchema),
   degree_date: Type.Optional(CollegeDegreeDateSchema),
   degree_major: Type.Optional(CollegeDegreeMajorSchema),
   credit_hours_graded: Type.Optional(SharedCreditHoursGradedSchema),
   date_time_verified: Type.Optional(DateTimeVerifiedSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      college_summaries__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      college_summaries__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      college_summaries__remove: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type CollegeSummary = Static<typeof CollegeSummarySchema>

/**
* DESCRIPTION: College Summaries from the applicant
*/
export const CollegeSummariesSchema = Type.Object({
   metadata: MetadataCollectionSchema,
   cumulative_credit: Type.Optional(CollegeCumulativeCreditSchema),
   cumulative_gpa: Type.Optional(CollegeCumulativeGpaSchema),
   links: Type.Optional(Type.Object({
      college_summaries__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   values: Type.Optional(Type.Array(CollegeSummarySchema))
})
export type CollegeSummaries = Static<typeof CollegeSummariesSchema>

/**
* DESCRIPTION: Biographical Classifications
*/
export const BiographicalClassificationsSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   hispanic_flag: Type.Optional(BioHispanicFlagSchema),
   racial_categories: Type.Optional(RacialCategoriesSchema),
   languages: Type.Optional(LanguagesSchema),
   mothers_level_of_education: Type.Optional(BioMothersLevelOfEducationSchema),
   fathers_level_of_education: Type.Optional(BioFathersLevelOfEducationSchema),
   family_income: Type.Optional(BioFamilyIncomeSchema),
   residing_with: Type.Optional(BioResidingWithSchema),
   single_parent: Type.Optional(BioSingleParentSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      biographical_classifications__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      biographical_classifications__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      ethnicities__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      languages__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type BiographicalClassifications = Static<typeof BiographicalClassificationsSchema>

/**
* DESCRIPTION: Basic field_set for Application API
*/
export const BasicSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   institution_id: Type.Optional(BasicInstitutionIdSchema),
   net_id: Type.Optional(BasicNetIdSchema),
   admit_period: Type.Optional(AdmitPeriodSchema),
   admit_major: Type.Optional(AdmitMajorSchema),
   applicant_type: Type.Optional(ApplicantTypeSchema),
   primary_language: Type.Optional(BasicPrimaryLanguageSchema),
   first_name: Type.Optional(BasicFirstNameSchema),
   middle_name: Type.Optional(BasicMiddleNameSchema),
   rest_of_name: Type.Optional(BasicRestOfNameSchema),
   surname: Type.Optional(BasicSurnameSchema),
   suffix: Type.Optional(BasicSuffixSchema),
   preferred_name: Type.Optional(BasicPreferredNameSchema),
   previous_name: Type.Optional(BasicPreviousNameSchema),
   address_line_1: Type.Optional(ContactAddressLine1Schema),
   address_line_2: Type.Optional(ContactAddressLine2Schema),
   address_line_3: Type.Optional(ContactAddressLine3Schema),
   address_line_4: Type.Optional(ContactAddressLine4Schema),
   address_line_5: Type.Optional(ContactAddressLine5Schema),
   city: Type.Optional(ContactCitySchema),
   country_code: Type.Optional(ContactCountryCodeSchema),
   postal_code: Type.Optional(ContactPostalCodeSchema),
   state_code: Type.Optional(ContactStateCodeSchema),
   email_address: Type.Optional(BasicEmailAddressSchema),
   phone_number: Type.Optional(BasicPhoneNumberSchema),
   secondary_email_address: Type.Optional(BasicSecondaryEmailAddressSchema),
   secondary_phone_number: Type.Optional(BasicSecondaryPhoneNumberSchema),
   phone_texts_ok: Type.Optional(SharedPhoneTextsOkSchema),
   home_town: Type.Optional(BasicHomeTownSchema),
   home_county: Type.Optional(BasicHomeCountySchema),
   home_state: Type.Optional(BasicHomeStateSchema),
   home_country: Type.Optional(BasicHomeCountrySchema),
   information_release: Type.Optional(BasicAgreementInformationReleaseDateTimeSchema),
   financial_responsibility: Type.Optional(BasicAgreementFinancialResponsibilityDateTimeSchema),
   school_preference_order: Type.Optional(BasicSchoolPreferenceOrderSchema),
   decision: Type.Optional(BasicDecisionSchema),
   decision_qualifier: Type.Optional(BasicDecisionQualifierSchema),
   decision_template_id: Type.Optional(BasicDecisionTemplateIdSchema),
   decision_date_time: Type.Optional(BasicDecisionDateTimeSchema),
   application_status: Type.Optional(BasicApplicationStatusSchema),
   application_status_date_time: Type.Optional(BasicApplicationStatusDateTimeSchema),
   created_by_id: Type.Optional(IdCreatedBySchema),
   created_date_time: Type.Optional(DateTimeCreatedSchema),
   submitted_by_id: Type.Optional(IdSubmittedBySchema),
   submitted_date_time: Type.Optional(DateTimeSubmittedSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      applications__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      applications__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      applications__remove: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      contact__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type Basic = Static<typeof BasicSchema>

/**
* DESCRIPTION: Background Questions
*/
export const BackgroundQuestionsSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   conviction_record: Type.Optional(BgConvictionRecordSchema),
   criminal_convictions: Type.Optional(BgCriminalConvictionsSchema),
   plural_marriage: Type.Optional(BgPluralMarriageSchema),
   plural_marriage_explanation: Type.Optional(BgPluralMarriageExplanationSchema),
   sex_registry: Type.Optional(BgSexRegistrySchema),
   sex_registry_explanation: Type.Optional(BgSexRegistryExplanationSchema),
   university_discipline: Type.Optional(BgUniversityDisciplineSchema),
   university_discipline_explanation: Type.Optional(BgUniversityDisciplineExplanationSchema),
   updated_by_id: Type.Optional(IdUpdatedBySchema),
   updated_date_time: Type.Optional(DateTimeUpdatedSchema),
   links: Type.Optional(Type.Object({
      background_questions__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      background_questions__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type BackgroundQuestions = Static<typeof BackgroundQuestionsSchema>

/**
* DESCRIPTION: Structure to Add/Modify an Application Deliverable
* EXAMPLE: { waived: 'N' }
*/
export const ApplicationDeliverableModifySchema = Type.Object({
   waived: Type.String()
})
export type ApplicationDeliverableModify = Static<typeof ApplicationDeliverableModifySchema>

/**
* DESCRIPTION: A deliverable required for an application
*/
export const ApplicationDeliverableSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   name: Type.Optional(DeliverableNameSchema),
   name_display: Type.Optional(DeliverableNameDisplaySchema),
   deliverable_id: Type.Optional(DeliverableIdSchema),
   controller_idx: Type.Optional(DeliverableControllerIdxSchema),
   view_idx: Type.Optional(DeliverableViewIdxSchema),
   type: Type.Optional(DeliverableTypeSchema),
   subtype: Type.Optional(DeliverableSubtypeSchema),
   qualifier: Type.Optional(DeliverableQualifierSchema),
   qualifier_type: Type.Optional(DeliverableQualifierTypeSchema),
   description: Type.Optional(DeliverableDescriptionSchema),
   satisfied: Type.Optional(DeliverableSatisfiedSchema),
   deliverable_date_time_satisfied: Type.Optional(DeliverableDateTimeSatisfiedSchema),
   status: Type.Optional(DeliverableStatusSchema),
   deliverable_date_time_status: Type.Optional(DeliverableDateTimeStatusSchema),
   links: Type.Optional(Type.Object({
      application_deliverables__modify: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   }))
})
export type ApplicationDeliverable = Static<typeof ApplicationDeliverableSchema>

/**
* DESCRIPTION: Deliverables required for an application
*/
export const ApplicationDeliverablesSchema = Type.Object({
   metadata: MetadataCollectionSchema,
   links: Type.Optional(Type.Object({
      application_deliverables__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      application_deliverables__add: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   values: Type.Optional(Type.Array(ApplicationDeliverableSchema))
})
export type ApplicationDeliverables = Static<typeof ApplicationDeliverablesSchema>

/**
* DESCRIPTION: Elements required to perform an application action
* EXAMPLE: {
  deliverable_id: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
  action: 'Create',
  action_message: 'New Application Created'
}
*/
export const ApplicationActionNewSchema = Type.Object({
   action: Type.String(),
   deliverable_id: Type.Optional(Type.String()),
   action_message: Type.Optional(Type.String())
})
export type ApplicationActionNew = Static<typeof ApplicationActionNewSchema>

/**
* DESCRIPTION: Application action
*/
export const ApplicationActionSchema = Type.Object({
   metadata: Type.Optional(MetadataSimpleSchema),
   application_id: Type.Optional(ApplicationIdSchema),
   applicant_id: Type.Optional(ApplicantIdSchema),
   deliverable_id: Type.Optional(DeliverableIdSchema),
   action: Type.Optional(ActionSchema),
   action_results: Type.Optional(ActionResultsSchema),
   action_message: Type.Optional(ActionMessageSchema),
   action_by_id: Type.Optional(ActionByIdSchema),
   action_date_time: Type.Optional(ActionDateTimeSchema)
})
export type ApplicationAction = Static<typeof ApplicationActionSchema>

/**
* DESCRIPTION: Actions performed on the application
*/
export const ApplicationActionsSchema = Type.Object({
   metadata: MetadataCollectionSchema,
   links: Type.Optional(Type.Object({
      application_actions__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      application_actions__submit: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      application_actions__reopen: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      })),
      application_actions__withdraw: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   values: Type.Optional(Type.Array(ApplicationActionSchema))
})
export type ApplicationActions = Static<typeof ApplicationActionsSchema>

/**
* DESCRIPTION: Elements required to add a new Application
* EXAMPLE: {
  applicant_id: '764634873',
  admit_period: '20185',
  admit_major: 'Open'
}
*/
export const ApplicationNewSchema = Type.Object({
   applicant_id: Type.String(),
   admit_period: Type.String(),
   admit_major: Type.String(),
   applicant_type: Type.String()
})
export type ApplicationNew = Static<typeof ApplicationNewSchema>

/**
* DESCRIPTION: An Application
*/
export const ApplicationSchema = Type.Object({
   application_actions: Type.Optional(ApplicationActionsSchema),
   application_deliverables: Type.Optional(ApplicationDeliverablesSchema),
   background_questions: Type.Optional(BackgroundQuestionsSchema),
   basic: Type.Optional(BasicSchema),
   biographical_classifications: Type.Optional(BiographicalClassificationsSchema),
   college_summaries: Type.Optional(CollegeSummariesSchema),
   endorsement: Type.Optional(EndorsementSchema),
   gei_programs: Type.Optional(GeiProgramsSchema),
   government_records: Type.Optional(GovernmentRecordsSchema),
   high_school_summaries: Type.Optional(HighSchoolSummariesSchema),
   institute_summaries: Type.Optional(InstituteSummariesSchema),
   international_records: Type.Optional(InternationalRecordsSchema),
   missions: Type.Optional(MissionsSchema),
   personal_records: Type.Optional(PersonalRecordsSchema),
   seminary_summaries: Type.Optional(SeminarySummariesSchema),
   test_scores: Type.Optional(TestScoresSchema),
   questions: Type.Optional(QuestionsSchema)
})
export type Application = Static<typeof ApplicationSchema>

/**
* DESCRIPTION: A collection of Applications
* EXAMPLE: {
  links: {
    applications__info: {
      rel: 'self',
      href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications?page_start=51&page_size=50',
      method: 'GET'
    },
    applications__prev: {
      rel: 'applications__prev',
      href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications?page_start=1&page_size=50',
      method: 'GET'
    },
    applications__next: {
      rel: 'applications__next',
      href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications?page_start=101&page_size=50',
      method: 'GET'
    },
    applications__create: {
      rel: 'applications__create',
      href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications',
      method: 'POST'
    }
  },
  metadata: {
    field_sets_returned: [
      'application_actions',
      'application_deliverables',
      'basic',
      'biographical_classifications',
      'college_summaries',
      'background_questions',
      'endorsement',
      'essays',
      'flags',
      'government_records',
      'high_school_summaries',
      'home_addresses',
      'institute_summaries',
      'international_records',
      'missions',
      'personal_records',
      'phones',
      'religious_records',
      'school_selections',
      'seminary_summaries',
      'test_scores'
    ],
    field_sets_available: [
      'application_actions',
      'application_deliverables',
      'basic',
      'biographical_classifications',
      'college_summaries',
      'background_questions',
      'endorsement',
      'essays',
      'flags',
      'government_records',
      'high_school_summaries',
      'home_addresses',
      'institute_summaries',
      'international_records',
      'missions',
      'personal_records',
      'phones',
      'religious_records',
      'school_selections',
      'seminary_summaries',
      'test_scores'
    ],
    contexts_available: {
      admin: [ 'basic', 'applications', 'endorsement', 'file_notes', 'flags' ],
      all: [
        'application_actions',
        'application_deliverables',
        'basic',
        'biographical_classifications',
        'college_summaries',
        'background_questions',
        'endorsement',
        'essays',
        'government_records',
        'high_school_summaries',
        'home_addresses',
        'institute_summaries',
        'international_records',
        'missions',
        'personal_records',
        'phones',
        'religious_records',
        'school_selections',
        'seminary_summaries',
        'test_scores'
      ],
      application_controls: [
        'application_actions',
        'application_deliverables',
        'basic',
        'school_selections'
      ],
      applicant: [
        'basic',
        'applications',
        'biographical_classifications',
        'college_summaries',
        'background_questions',
        'endorsement',
        'government_records',
        'high_school_summaries',
        'home_addresses',
        'institute_summaries',
        'international_records',
        'missions',
        'personal_records',
        'phones',
        'religious_records',
        'seminary_summaries',
        'test_scores'
      ],
      contact: [ 'basic', 'home_addresses', 'phones' ],
      education: [
        'basic',
        'college_summaries',
        'high_school_summaries',
        'test_scores'
      ],
      profile: [
        'basic',
        'biographical_classifications',
        'background_questions',
        'government_records',
        'international_records',
        'personal_records'
      ],
      religion: [
        'basic',
        'institute_summaries',
        'missions',
        'religious_records',
        'seminary_summaries'
      ]
    },
    collection_size: 1,
    page_start: 1,
    page_end: 1,
    page_size: 1,
    default_page_size: 50,
    max_page_size: 1000,
    validation_response: { code: 200, message: 'Retrieve Successful' }
  },
  stats: [ { key: 'Total', value: '123' }, { key: 'Average', value: '3.45' } ],
  values: [
    {
      basic: {
        links: {
          applications__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
            method: 'GET'
          },
          applications__modify: {
            rel: 'applications__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
            method: 'PUT'
          },
          applications__remove: {
            rel: 'applications__remove',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
            method: 'DELETE'
          },
          contact__modify: {
            rel: 'contact__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/contact',
            method: 'PUT'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          display_label: 'Applicant ID',
          key: true
        },
        institution_id: { value: '764634873', api_type: 'system' },
        net_id: { value: 'abc123', api_type: 'system' },
        admit_major: {
          value: '12345',
          api_type: 'read-only',
          description: 'Business',
          domain: 'https://api.byu.edu/cesapi/meta/admit_majors/v1?ces_school=LDSBC',
          display_label: 'Major'
        },
        admit_period: {
          value: '20185',
          api_type: 'modifiable',
          description: 'Fall 2017',
          long_description: 'Fall Semester 2017',
          domain: 'https://api.byu.edu/cesapi/meta/admit_periods/v1?ces_school=LDSBC',
          display_label: 'Admit Period'
        },
        applicant_type: {
          value: 'F',
          api_type: 'read-only',
          description: 'Former Student',
          domain: 'https://api.byu.edu/cesapi/meta/applicant_types/v1?ces_school=LDSBC',
          display_label: 'Applicant Type'
        },
        primary_language: {
          value: 'English',
          api_type: 'modifiable',
          display_label: 'Primary Language'
        },
        surname: {
          value: 'Ithaca',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Surname'
        },
        first_name: {
          value: 'Bugs',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'First Name'
        },
        middle_name: {
          value: 'Bunny',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Middle Name'
        },
        rest_of_name: {
          value: 'Bugs Bunny',
          api_type: 'derived',
          display_label: 'First/Middle Names'
        },
        suffix: {
          value: 'Esq.',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Name Suffix'
        },
        preferred_name: {
          value: 'Bugs Ithaca',
          api_type: 'derived',
          display_label: 'Preferred Name'
        },
        previous_name: {
          value: 'Bugs Ithaca',
          api_type: 'modifiable',
          display_label: 'Previous/Maiden Name'
        },
        address_line_1: {
          value: 'A-153 ASB',
          api_type: 'modifiable',
          display_label: 'Address Line 1'
        },
        address_line_2: {
          value: 'Provo, UT  84602',
          api_type: 'modifiable',
          display_label: 'Address Line 2'
        },
        address_line_3: {
          value: '',
          api_type: 'modifiable',
          display_label: 'Address Line 3'
        },
        address_line_4: {
          value: '',
          api_type: 'modifiable',
          display_label: 'Address Line 4'
        },
        address_line_5: {
          value: '',
          api_type: 'modifiable',
          display_label: 'Address Line 5'
        },
        city: {
          value: 'Provo',
          api_type: 'modifiable',
          display_label: 'City'
        },
        country_code: {
          value: 'USA',
          description: 'United States of America',
          domain: 'https://api.byu.edu/byuapi/meta/country_codes/v1',
          api_type: 'modifiable',
          display_label: 'Country Code'
        },
        state_code: {
          value: 'UT',
          description: 'Utah',
          api_type: 'modifiable',
          domain: 'https://api.byu.edu/byuapi/meta/state_codes/v1',
          display_label: 'State'
        },
        postal_code: {
          value: '84602',
          api_type: 'modifiable',
          display_label: 'Zip Code'
        },
        email_address: {
          value: 'bugsbunny22@gmail.com',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Email'
        },
        secondary_email_address: {
          value: 'bugsbunny22@gmail.com',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Email'
        },
        phone_number: {
          value: '801-422-2507',
          api_type: 'modifiable',
          key: true,
          display_label: 'Phone Number'
        },
        secondary_phone_number: {
          value: '801-422-2507',
          api_type: 'modifiable',
          display_label: 'Phone Number'
        },
        phone_texts_ok: {
          value: 'Y',
          api_type: 'modifiable',
          display_label: 'Texts OK'
        },
        decision: {
          api_type: 'derived',
          display_label: 'Application Decision',
          domain: 'https://api.byu.edu/cesapi/meta/decision/v1',
          description: 'Admit',
          value: 'A'
        },
        decision_date_time: {
          api_type: 'derived',
          display_label: 'Application Status',
          domain: 'https://api.byu.edu/cesapi/meta/decision/v1',
          value: '2015-06-11T13:45:53.200Z'
        },
        decision_qualifier: {
          api_type: 'derived',
          display_label: 'Application Decision Qualifier',
          value: 'New Freshman'
        },
        decision_template_id: {
          api_type: 'derived',
          display_label: 'Application Status',
          domain: 'https://api.byu.edu/cesapi/meta/decision/v1',
          value: ''
        },
        home_town: {
          value: 'Toontown',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Home Town'
        },
        home_county: {
          value: 'Animation',
          api_type: 'modifiable',
          display_label: 'Home County'
        },
        home_state: {
          value: 'NY',
          description: 'New York',
          domain: 'https://api.byu.edu/byuapi/meta/state_codes/v1',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Home State'
        },
        home_country: {
          value: 'USA',
          description: 'United States of America',
          domain: 'https://api.byu.edu/byuapi/meta/country_codes/v1',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Home Country'
        },
        information_release: {
          value: '2015-05-11T13:45:53.200Z',
          api_type: 'read-only',
          display_label: 'Information Release Agreement'
        },
        financial_responsibility: {
          value: '2015-05-11T13:45:53.200Z',
          api_type: 'read-only',
          display_label: 'Financial Responsibility Agreement'
        },
        school_preference_order: {
          value: 'BYU, BYUI',
          api_type: 'modifiable',
          display_label: 'CES School Preference Order'
        },
        application_status: {
          value: 'as03',
          api_type: 'derived',
          description: 'Submitted',
          domain: 'https://api.byu.edu/cesapi/meta/application_status/v1',
          display_label: 'Application Status'
        },
        application_status_date_time: {
          value: '2015-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Date/Time that current Application Status was determined'
        },
        created_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Created by'
        },
        created_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Created'
        },
        submitted_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Submitted By'
        },
        submitted_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Application submitted when?'
        },
        updated_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      application_actions: {
        links: {
          application_actions__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/application_actions',
            method: 'GET'
          },
          application_actions__submit: {
            rel: 'application_actions__submit',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/application_actions',
            method: 'POST'
          },
          application_actions__reopen: {
            rel: 'application_actions__reopen',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/application_actions',
            method: 'POST'
          },
          application_actions__withdraw: {
            rel: 'application_actions__withdraw',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/application_actions',
            method: 'POST'
          }
        },
        metadata: {
          collection_size: 1,
          page_start: 1,
          page_end: 1,
          page_size: 1,
          default_page_size: 50,
          max_page_size: 1000,
          validation_response: { code: 200, message: 'Success' }
        },
        values: [
          {
            metadata: { validation_response: { code: 200, message: 'Success' } },
            application_id: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              key: true,
              display_label: 'Application UUID'
            },
            applicant_id: {
              value: '764634873',
              api_type: 'system',
              key: true,
              display_label: 'Applicant ID'
            },
            action: {
              value: 'Application created',
              api_type: 'read-only',
              display_label: 'Application action'
            },
            deliverable_id: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              key: true,
              display_label: 'Deliverable ID'
            },
            action_results: {
              value: '200',
              api_type: 'read-only',
              description: 'Application create succeeded',
              display_label: 'Application action results'
            },
            action_message: {
              value: 'blah, blah, blah',
              api_type: 'read-only',
              display_label: 'Notes on application action'
            },
            action_by_id: {
              value: '764634873',
              api_type: 'system',
              description: 'Bugs Bunny Ithaca',
              display_label: 'Action by'
            },
            action_date_time: {
              value: '2014-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Action date'
            }
          }
        ]
      },
      application_deliverables: {
        links: {
          application_deliverables__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/application_deliverables',
            method: 'GET'
          },
          application_deliverables__add: {
            rel: 'application_deliverables__add',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/application_deliverables',
            method: 'POST'
          }
        },
        metadata: {
          collection_size: 1,
          page_start: 1,
          page_end: 1,
          page_size: 1,
          default_page_size: 50,
          max_page_size: 1000,
          validation_response: { code: 200, message: 'Success' }
        },
        values: [
          {
            links: {
              application_deliverables__modify: {
                rel: 'application_deliverables__modify',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/application_deliverables/cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
                method: 'PUT'
              }
            },
            metadata: { validation_response: { code: 200, message: 'Success' } },
            application_id: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              key: true,
              display_label: 'Application UUID'
            },
            applicant_id: {
              value: '764634873',
              api_type: 'system',
              key: true,
              display_label: 'Applicant ID'
            },
            deliverable_id: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              key: true,
              display_label: 'Deliverable ID'
            },
            controller_idx: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984401',
              api_type: 'system'
            },
            view_idx: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984402',
              api_type: 'system'
            },
            type: {
              value: 'Recommendation',
              api_type: 'read-only',
              description: 'Recommendations',
              domain: 'https://api.byu.edu/cesapi/meta/application_deliverables/v1',
              display_label: 'Deliverable type'
            },
            subtype: {
              value: 'HST',
              api_type: 'read-only',
              description: 'High School Teacher',
              domain: 'https://api.byu.edu/cesapi/meta/application_deliverables/v1',
              display_label: 'Deliverable subtype'
            },
            qualifier: {
              value: '3j4xvgh5',
              api_type: 'read-only',
              display_label: 'Deliverable Qualifier'
            },
            qualifier_type: {
              value: 'URL Path Generated',
              api_type: 'system',
              display_label: 'How is the deliverable qualifier used?'
            },
            name: {
              value: 'HSTRec1',
              api_type: 'system',
              display_label: 'Name'
            },
            name_display: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              display_label: 'Display name'
            },
            description: {
              value: 'Request a recommendation from one of your high school teachers.',
              api_type: 'read-only',
              display_label: 'Deliverable Description'
            },
            satisfied: {
              value: 'N',
              api_type: 'system',
              display_label: 'Deliverable Satisfied?'
            },
            deliverable_date_time_satisfied: {
              value: '2015-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Date the deliverable was satisfied'
            },
            status: {
              value: 'Incomplete',
              api_type: 'read-only',
              display_label: 'Status'
            },
            deliverable_date_time_status: {
              value: '2015-05-11T13:45:53.200Z',
              api_type: 'read-only',
              display_label: 'Date the status of the deliverable last changed'
            }
          }
        ]
      },
      background_questions: {
        links: {
          background_questions__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/background_questions',
            method: 'GET'
          },
          background_questions__modify: {
            rel: 'background_questions__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/background_questions',
            method: 'PUT'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        conviction_record: {
          value: 'Y',
          api_type: 'modifiable',
          display_label: 'Have you ever been convicted of a crime?'
        },
        criminal_convictions: [
          {
            crime: {
              value: 'Petty Theft',
              api_type: 'modifiable',
              display_label: 'What was the specific crime?'
            },
            crime_year: {
              value: '1999',
              api_type: 'modifiable',
              display_label: 'What year was the crime committed?'
            },
            courts: {
              value: 'Kangaroo Court, Tasmania, Australia',
              api_type: 'modifiable',
              display_label: 'What were the name(s) and location(s) of the court(s) involved?'
            },
            conditions: {
              value: '50 lashes with a wet noodle',
              api_type: 'modifiable',
              display_label: 'What were the terms or conditions of any plea, penalty, punishment, sentence, probation, or parole?'
            },
            probation: {
              value: 'N',
              api_type: 'modifiable',
              display_label: 'Are you currently on probation, parole, or under any ongoing penalty, punishment, or restriction with any court or law enforcement agency?'
            },
            probation_explanation: {
              value: 'Generic explanation',
              api_type: 'modifiable',
              display_label: 'Explanation'
            },
            penalties: {
              value: 'Y',
              api_type: 'modifiable',
              display_label: 'Have all prison terms, penalties, fines, restitution, community service hours, any other part of your criminal sentence been completed?'
            },
            penalties_explanation: {
              value: 'Generic explanation',
              api_type: 'modifiable',
              display_label: 'Explanation'
            },
            additional_explanation: {
              value: 'Generic explanation',
              api_type: 'modifiable',
              display_label: 'Explanation'
            }
          }
        ],
        plural_marriage: {
          value: 'N',
          api_type: 'modifiable',
          display_label: 'Are you affiliated with any group that currently advocates plural marriage?'
        },
        plural_marriage_explanation: {
          value: 'Blah, blah, blah',
          api_type: 'modifiable',
          display_label: 'Explanation'
        },
        sex_registry: {
          value: 'N',
          api_type: 'modifiable',
          display_label: 'Have you ever been listed on a sex offender registry?'
        },
        sex_registry_explanation: {
          value: 'Blah, blah, blah',
          api_type: 'modifiable',
          display_label: 'Explanation'
        },
        university_discipline: {
          value: 'N',
          api_type: 'modifiable',
          display_label: 'Have you ever been disciplined by a college or university?'
        },
        university_discipline_explanation: {
          value: 'Blah, blah, blah',
          api_type: 'modifiable',
          display_label: 'Explanation'
        },
        updated_by_id: {
          value: '764634873',
          description: 'Bugs Bunny Ithaca',
          api_type: 'system',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      biographical_classifications: {
        links: {
          biographical_classifications__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/biographical_classifications',
            method: 'GET'
          },
          biographical_classifications__modify: {
            rel: 'biographical_classifications__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/biographical_classifications',
            method: 'PUT'
          },
          ethnicities__modify: {
            rel: 'ethnicities__modify',
            href: 'https://api.byu.edu/byuapi/persons/v1/764634873/ethnicities',
            method: 'GET'
          },
          languages__modify: {
            rel: 'languages__modify',
            href: 'https://api.byu.edu/byuapi/persons/v1/764634873/languages',
            method: 'GET'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        hispanic_flag: {
          value: 'N',
          api_type: 'modifiable',
          display_label: 'Do you consider yourself Hispanic/Latino?'
        },
        racial_categories: [
          {
            value: 'Asian/Asian American',
            domain: 'https://api.byu.edu/byuapi/meta/racial_categories/v1',
            api_type: 'related',
            related_resource: 'ethnicities',
            display_label: 'Which racial categories describe you?'
          },
          {
            value: 'Pacific Islander',
            domain: 'https://api.byu.edu/byuapi/meta/racial_categories/v1',
            api_type: 'related',
            related_resource: 'ethnicities',
            display_label: 'Which racial categories describe you?'
          },
          {
            value: 'Hawaiian/Part-Hawaiian',
            domain: 'https://api.byu.edu/byuapi/meta/racial_categories/v1',
            api_type: 'related',
            related_resource: 'ethnicities',
            display_label: 'Which racial categories describe you?'
          }
        ],
        languages: [
          {
            value: 'en',
            description: '',
            domain: 'https://api.byu.edu/byuapi/meta/languages/v1',
            api_type: 'related',
            related_resource: 'languages',
            display_label: 'Language Skills'
          },
          {
            value: 'pt',
            description: '',
            domain: 'https://api.byu.edu/byuapi/meta/languages/v1',
            api_type: 'related',
            related_resource: 'languages',
            display_label: 'Language Skills'
          },
          {
            value: 'de',
            description: '',
            domain: 'https://api.byu.edu/byuapi/meta/languages/v1',
            api_type: 'related',
            related_resource: 'languages',
            display_label: 'Language Skills'
          }
        ],
        mothers_level_of_education: {
          value: 'Some College/University',
          domain: 'https://api.byu.edu/cesapi/meta/levels_of_education/v1',
          api_type: 'modifiable',
          display_label: "Mother's Level of Education"
        },
        fathers_level_of_education: {
          value: 'Some High School',
          domain: 'https://api.byu.edu/cesapi/meta/levels_of_education/v1',
          api_type: 'modifiable',
          display_label: "Father's Level of Education"
        },
        family_income: {
          value: '50-60',
          api_type: 'modifiable',
          domain: 'https://api.byu.edu/cesapi/meta/family_income_levels/v1',
          display_label: 'Family Income'
        },
        residing_with: {
          value: 'Parents',
          api_type: 'modifiable',
          domain: 'https://api.byu.edu/cesapi/meta/residing_with_options/v1',
          display_label: 'Residing With'
        },
        single_parent: {
          value: 'Y',
          api_type: 'modifiable',
          display_label: 'Single Parent'
        },
        updated_by_id: {
          value: '764634873',
          description: 'Bugs Bunny Ithaca',
          api_type: 'system',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      college_summaries: {
        links: {
          college_summaries__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/college_summaries',
            method: 'GET'
          }
        },
        metadata: {
          collection_size: 1,
          page_start: 1,
          page_end: 1,
          page_size: 1,
          default_page_size: 50,
          max_page_size: 1000,
          validation_response: { code: 200, message: 'Success' }
        },
        cumulative_credit: {
          api_type: 'derived',
          display_label: 'Cumulative College Credit',
          value: '34.00'
        },
        cumulative_gpa: {
          api_type: 'derived',
          display_label: 'Cumulative College GPA',
          value: '3.16'
        },
        values: [
          {
            links: {
              college_summaries__info: {
                rel: 'self',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/college_summaries/BYU-Idaho,2013-01,2013-08',
                method: 'GET'
              },
              college_summaries__modify: {
                rel: 'college_summaries__modify',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/college_summaries/BYU-Idaho,2013-01,2013-08',
                method: 'PUT'
              },
              college_summaries__remove: {
                rel: 'college_summaries__remove',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/college_summaries/BYU-Idaho,2013-01,2013-08',
                method: 'DELETE'
              }
            },
            metadata: { validation_response: { code: 200, message: 'Success' } },
            application_id: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              key: true,
              display_label: 'Application UUID'
            },
            applicant_id: {
              value: '764634873',
              api_type: 'system',
              key: true,
              display_label: 'Applicant ID'
            },
            college: {
              value: 'BYU-Idaho',
              description: 'BYU Idaho',
              domain: 'https://api.byu.edu/byuapi/meta/colleges/v1',
              api_type: 'read-only',
              key: true,
              display_label: 'College Attended'
            },
            start_month: {
              value: '2013-01',
              api_type: 'read-only',
              display_label: 'Start Month'
            },
            end_month: {
              value: '2013-08',
              api_type: 'read-only',
              display_label: 'End Month'
            },
            gpa: {
              value: '3.16',
              api_type: 'derived',
              display_label: 'GPA'
            },
            gpa_verified: {
              value: '3.16',
              api_type: 'derived',
              display_label: 'GPA Verified'
            },
            degree: {
              value: 'ASSO',
              api_type: 'system',
              display_label: 'College Degree'
            },
            degree_date: {
              value: '201605',
              api_type: 'system',
              display_label: 'College Degree Date'
            },
            degree_major: {
              value: 'Musical Theater',
              api_type: 'system',
              display_label: 'College Major'
            },
            credit_hours_graded: {
              value: '34.0',
              api_type: 'read-only',
              display_label: 'Credit Hours'
            },
            date_time_verified: {
              value: '2014-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Verified'
            },
            updated_by_id: {
              value: '764634873',
              api_type: 'system',
              description: 'Bugs Bunny Ithaca',
              display_label: 'Updated by'
            },
            updated_date_time: {
              value: '2014-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Updated'
            }
          }
        ]
      },
      endorsement: {
        links: {
          endorsement__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/endorsement',
            method: 'GET'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        date: {
          value: '2015-05-11',
          api_type: 'system',
          display_label: 'Endorsement Status Date'
        },
        status: {
          value: 'COMPLETE',
          api_type: 'system',
          display_label: 'Endorsement Status'
        },
        type: {
          value: 'L1',
          api_type: 'system',
          display_label: 'Endorsement Type'
        }
      },
      gei_programs: {
        links: {
          gei_programs__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/gei_programs',
            method: 'GET'
          },
          gei_programs__modify: {
            rel: 'gei_programs__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/gei_programs',
            method: 'PUT'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        pw_completion: {
          value: 'May 2018',
          api_type: 'system',
          display_label: 'Pathway Connect Completion'
        },
        pw_credits: {
          value: '15',
          api_type: 'system',
          display_label: 'Pathway Connect Credits'
        },
        pw_gpa: {
          value: '3.42',
          api_type: 'system',
          display_label: 'Pathway Connect GPA'
        },
        pw_site: {
          value: 'Test Stake',
          api_type: 'system',
          display_label: 'Pathway Connect Site'
        },
        srs_certificates: {
          value: 'Education, Finance, Job',
          api_type: 'system',
          display_label: 'SRS Certificates'
        },
        srs_facilitator: {
          value: 'John Smith',
          api_type: 'system',
          display_label: 'SRS Facilitator'
        },
        srs_site: {
          value: 'Test Stake',
          api_type: 'system',
          display_label: 'SRS Site'
        },
        updated_by_id: {
          value: '764634873',
          description: 'Bugs Bunny Ithaca',
          api_type: 'system',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2018-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      government_records: {
        links: {
          government_records__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/government_records',
            method: 'GET'
          },
          government_records__modify: {
            rel: 'government_records__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/government_records',
            method: 'PUT'
          },
          persons__info: {
            rel: 'persons__info',
            href: 'https://api.byu.edu/byuapi/persons/v1/764634873',
            method: 'GET'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        visa_type: {
          value: 'F-1',
          domain: 'https://api.byu.edu/byuapi/meta/visa_types/v1',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Visa Type'
        },
        visa_type_source: {
          value: 'HR',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Visa Verifying Entity'
        },
        citizenship_status: {
          value: 'INTL',
          description: 'International',
          domain: 'https://api.byu.edu/byuapi/meta/citizenship_status/v1',
          api_type: 'related',
          related_resource: 'applicants',
          display_label: 'Citizenship Status'
        },
        citizenship_country_code: {
          value: 'CAN',
          description: 'Canada',
          domain: 'https://api.byu.edu/byuapi/meta/country_codes/v1',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Citizenship Country Code'
        },
        birth_country_code: {
          value: 'CHP',
          description: "China, People's Republic",
          domain: 'https://api.byu.edu/byuapi/meta/country_codes/v1',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Birth Country Code'
        },
        birth_city: {
          value: 'Beijing',
          api_type: 'related',
          related_resource: 'applicants',
          display_label: 'Birth City'
        },
        updated_by_id: {
          value: '764634873',
          description: 'Bugs Bunny Ithaca',
          api_type: 'system',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      high_school_summaries: {
        links: {
          high_school_summaries__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/high_school_summaries',
            method: 'GET'
          }
        },
        metadata: {
          collection_size: 1,
          page_start: 1,
          page_end: 1,
          page_size: 1,
          default_page_size: 50,
          max_page_size: 1000,
          validation_response: { code: 200, message: 'Success' }
        },
        values: [
          {
            links: {
              high_school_summaries__info: {
                rel: 'self',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/high_school_summaries/485934,2013-01,2013-08',
                method: 'GET'
              },
              high_school_summaries__modify: {
                rel: 'high_school_summaries__modify',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/high_school_summaries/485934,2013-01,2013-08',
                method: 'PUT'
              },
              high_school_summaries__remove: {
                rel: 'high_school_summaries__remove',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/high_school_summaries/485934,2013-01,2013-08',
                method: 'DELETE'
              },
              high_school_codes__info: {
                rel: 'high_school_codes__info',
                href: 'https://api.byu.edu/byuapi/meta/high_school_codes/v1/485934',
                method: 'GET'
              }
            },
            metadata: { validation_response: { code: 200, message: 'Success' } },
            application_id: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              key: true,
              display_label: 'Application UUID'
            },
            applicant_id: {
              value: '764634873',
              api_type: 'system',
              key: true,
              display_label: 'Applicant ID'
            },
            high_school_type: {
              value: 'USAC',
              description: 'US-Accredited',
              domain: 'https://api.byu.edu/byuapi/meta/high_school_types/v1',
              api_type: 'modifiable',
              key: true,
              display_label: 'High School Type'
            },
            high_school: {
              value: '485934',
              description: 'Provo High School',
              domain: 'https://api.byu.edu/byuapi/meta/high_schools/v1',
              api_type: 'related',
              key: true,
              related_resource: 'persons',
              display_label: 'High School'
            },
            high_school_city: {
              value: 'Provo',
              api_type: 'related',
              related_resource: 'high_schools',
              display_label: 'High School City'
            },
            high_school_state: {
              value: 'UT',
              description: 'Utah',
              api_type: 'related',
              related_resource: 'high_schools',
              display_label: 'High School State'
            },
            high_school_country: {
              value: 'USA',
              description: 'United States of America',
              api_type: 'related',
              related_resource: 'high_schools',
              display_label: 'High School Country'
            },
            start_month: {
              value: '2013-01',
              api_type: 'read-only',
              display_label: 'Start Month'
            },
            end_month: {
              value: '2013-08',
              api_type: 'read-only',
              display_label: 'End Month'
            },
            graduation_status: {
              value: 'Y',
              api_type: 'modifiable',
              display_label: 'Have you or will you graduate?'
            },
            graduation_date: {
              value: '2015-05',
              api_type: 'read-only',
              display_label: 'High School Graduation Date'
            },
            high_school_gpa: {
              value: '3.1',
              api_type: 'modifiable',
              display_label: 'High School GPA'
            },
            gpa_calculated: {
              value: '3.75',
              api_type: 'read-only',
              display_label: 'Calculated GPA'
            },
            list_of_classes: [
              {
                grade_level: {
                  value: '10',
                  api_type: 'modifiable',
                  display_label: 'Grade Level'
                },
                subject: {
                  value: 'English',
                  api_type: 'modifiable',
                  display_label: 'Subject'
                },
                course_name: {
                  value: 'English 101',
                  api_type: 'modifiable',
                  display_label: 'Course Name'
                },
                ap_ib_flag: {
                  value: 'Y',
                  api_type: 'modifiable',
                  display_label: 'AP/IB Flag'
                },
                repeated: {
                  value: 'N',
                  api_type: 'modifiable',
                  display_label: 'Repeated'
                },
                grading_terms: {
                  value: '4',
                  api_type: 'modifiable',
                  display_label: 'Term'
                },
                grades: [
                  {
                    value: 'A',
                    api_type: 'modifiable',
                    display_label: 'Grade'
                  },
                  {
                    value: 'A',
                    api_type: 'modifiable',
                    display_label: 'Grade'
                  },
                  {
                    value: 'A',
                    api_type: 'modifiable',
                    display_label: 'Grade'
                  },
                  {
                    value: 'A',
                    api_type: 'modifiable',
                    display_label: 'Grade'
                  }
                ],
                grade_final: {
                  value: 'A',
                  api_type: 'modifiable',
                  display_label: 'Grade'
                },
                credits: {
                  value: '6.5',
                  api_type: 'read-only',
                  display_label: 'Credits'
                }
              }
            ],
            list_of_nonaccredited_work: [
              {
                grade_level: {
                  value: '10',
                  api_type: 'modifiable',
                  display_label: 'Grade Level'
                },
                statement: {
                  value: 'Blah, blah, blah',
                  api_type: 'modifiable',
                  display_label: 'Describe your non-accredited school work'
                }
              }
            ],
            transcript_source: {
              value: '1',
              api_type: 'modifiable',
              display_label: 'Transcript Source'
            },
            date_time_verified: {
              value: '2014-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Verified'
            },
            ap_ib_half_classes: {
              value: '1',
              api_type: 'read-only',
              display_label: 'AP/IB Half Classes'
            },
            ap_ib_full_classes: {
              value: '3',
              api_type: 'read-only',
              display_label: 'AP/IB Full Classes'
            },
            concurrent_enrollment: {
              value: 'Y',
              api_type: 'read-only',
              display_label: 'Has the student participated in concurrent enrollment classes?'
            },
            link_to_document_image: {
              value: 'https://api.byu.edu/byuapi/images/v1/5820492',
              api_type: 'modifiable',
              display_label: 'Link to Document Image'
            },
            link_to_secondary_document_image: {
              value: 'https://api.byu.edu/byuapi/images/5820492',
              api_type: 'modifiable',
              display_label: 'Link to Secondary Document Image'
            },
            updated_by_id: {
              value: '764634873',
              api_type: 'system',
              description: 'Bugs Bunny Ithaca',
              display_label: 'Updated by'
            },
            updated_date_time: {
              value: '2014-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Updated'
            }
          }
        ]
      },
      institute_summaries: {
        links: {
          institute_summaries__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/institute_summaries',
            method: 'GET'
          },
          institute_summaries__modify: {
            rel: 'institute_summaries__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/institute_summaries',
            method: 'PUT'
          },
          institute_summaries__remove: {
            rel: 'institute_summaries__remove',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/institute_summaries',
            method: 'DELETE'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        institute_attendance: {
          value: '3',
          api_type: 'read-only',
          display_label: 'Years Attended'
        },
        institute_classes: [
          {
            institute_class: {
              value: 'New Testament',
              domain: 'https://api.byu.edu/byuapi/meta/institute_classes/v1',
              api_type: 'read-only',
              display_label: 'Institute Class Name'
            },
            academic_year: {
              value: '2016 Fall',
              api_type: 'read-only',
              display_label: 'Academic Year'
            },
            grade: {
              value: 'A',
              api_type: 'modifiable',
              display_label: 'Grade'
            },
            for_credit: {
              value: 'Y',
              api_type: 'modifiable',
              display_label: 'For Credit?'
            }
          }
        ],
        institute_explanation: {
          value: 'Blah, blah, blah',
          api_type: 'read-only',
          display_label: 'Explain your Institute Participation'
        },
        date_time_reported: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Reported'
        },
        updated_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      international_records: {
        links: {
          international_records__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/international_records',
            method: 'GET'
          },
          international_records__modify: {
            rel: 'international_records__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/international_records',
            method: 'PUT'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        alien_number: {
          value: '789789789',
          api_type: 'read-only',
          display_label: 'Alien or USCIS Number'
        },
        current_us_resident: {
          value: 'Y',
          api_type: 'read-only',
          display_label: 'Current US Resident'
        },
        visa_change_plan: {
          value: 'Y',
          api_type: 'read-only',
          display_label: 'Will you change the Visa if admitted?'
        },
        updated_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      missions: {
        links: {
          missions__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/missions',
            method: 'GET'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        mission_service: {
          value: 'Y',
          api_type: 'read-only',
          display_label: 'Have you served or are you currently serving a mission?'
        },
        mission_name: {
          value: 'Mexico-Veracruz',
          domain: 'https://api.byu.edu/byuapi/meta/mission_names/v1',
          api_type: 'read-only',
          display_label: 'Mission Name'
        },
        mission_language: {
          value: 'ES',
          description: 'Spanish',
          domain: 'https://api.byu.edu/byuapi/meta/languages/v1',
          api_type: 'read-only',
          display_label: 'Mission Language'
        },
        start_month: {
          value: '2013-01',
          api_type: 'read-only',
          display_label: 'Start Month'
        },
        end_month: {
          value: '2013-08',
          api_type: 'read-only',
          display_label: 'End Month'
        },
        mission_type: {
          value: 'Full-time',
          domain: 'https://api.byu.edu/byuapi/meta/mission_types/v1',
          api_type: 'read-only',
          display_label: 'Mission Type'
        },
        updated_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      personal_records: {
        links: {
          personal_records__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/personal_records',
            method: 'GET'
          },
          personal_records__modify: {
            rel: 'personal_records__modify',
            href: 'https://api.byu.edu/byuapi/persons/v1/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/personal_records',
            method: 'PUT'
          },
          persons__info: {
            rel: 'persons__info',
            href: 'https://api.byu.edu/byuapi/persons/v1/764634873',
            method: 'GET'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        date_of_birth: {
          value: '12/01/1997',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Date of birth'
        },
        marital_status: {
          value: 'S',
          description: 'Single',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Marital Status'
        },
        religion_code: {
          value: 'LDS',
          description: 'Latter-day Saint',
          domain: 'https://api.byu.edu/byuapi/meta/religions/v1',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Religion'
        },
        religion_tenure: {
          value: '8',
          api_type: 'derived',
          display_label: 'How long have you been a member of the church?'
        },
        sex: {
          value: 'M',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Sex'
        },
        updated_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      questions: {
        links: {
          questions__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/questions',
            method: 'GET'
          }
        },
        metadata: {
          collection_size: 1,
          page_start: 1,
          page_end: 1,
          page_size: 1,
          default_page_size: 50,
          max_page_size: 1000,
          validation_response: { code: 200, message: 'Success' }
        },
        values: [
          {
            links: {
              question__info: {
                rel: 'self',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/questions/ad4473d2-e7ed-41d1-d155-5db9b2635f86',
                method: 'GET'
              },
              question__modify: {
                rel: 'question__modify',
                href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/questions/ad4473d2-e7ed-41d1-d155-5db9b2635f86',
                method: 'PUT'
              }
            },
            metadata: { validation_response: { code: 200, message: 'Success' } },
            uuid: {
              value: 'ad4473d2-e7ed-41d1-d155-5db9b2635f86',
              api_type: 'system',
              display_label: 'UUID'
            },
            type: {
              value: 'Essay',
              api_type: 'modifiable',
              display_label: 'Type'
            },
            name: {
              value: 'Passion Essay',
              api_type: 'modifiable',
              display_label: 'Name'
            },
            description: {
              value: 'An essay prompt inviting an applicant to share something about which they are passionate.',
              api_type: 'modifiable',
              display_label: 'Description'
            },
            elements: [
              {
                id: {
                  value: '88dfe659-1e56-4bd5-978c-48863f1eac82',
                  api_type: 'system',
                  display_label: 'Element ID'
                },
                type: {
                  value: 'Text',
                  api_type: 'modifiable',
                  display_label: 'Type'
                },
                prompt: {
                  value: 'What is the airspeed of a laden swallow?',
                  api_type: 'modifiable',
                  display_label: 'Element Prompt'
                },
                explanation: {
                  value: "If you don't recognize this question, you're not a Python.",
                  api_type: 'modifiable',
                  display_label: 'Element Explanation'
                },
                limit: {
                  value: '2000',
                  api_type: 'modifiable',
                  display_label: 'Character Limit'
                },
                ordinal: {
                  value: '1',
                  api_type: 'modifiable',
                  display_label: 'Element Ordinal'
                },
                response: {
                  value: 'The airspeed of a laden swallow depends: is it African or European?',
                  api_type: 'modifiable',
                  display_label: 'Response'
                },
                response_range: {
                  value: '5',
                  api_type: 'modifiable',
                  display_label: 'Response Range'
                },
                response_criteria: [ { label: 'No Basis', value: '0' } ],
                response_set: [ 'drop-down options' ]
              }
            ],
            groups: [
              {
                id: {
                  value: '4060d2e3-42e2-415b-8ddb-357f99ae31ba',
                  api_type: 'system',
                  display_label: 'Group ID'
                },
                name: {
                  value: 'Intellectually Enlarging',
                  api_type: 'modifiable',
                  display_label: 'Name'
                },
                description: {
                  value: "Question elements that explore how an applicant's work has been intellectually enlarging.",
                  api_type: 'modifiable',
                  display_label: 'Description'
                },
                heading: {
                  value: 'Intellectually Enlarging',
                  api_type: 'modifiable',
                  display_label: 'Display Group Heading'
                },
                ordinal: {
                  value: '1',
                  api_type: 'modifiable',
                  display_label: 'Position'
                },
                elements: [
                  {
                    id: '88dfe659-1e56-4bd5-978c-48863f1eac82',
                    label: 'Rigor',
                    ordinal: '1'
                  }
                ]
              }
            ],
            updated_by_id: {
              value: '764634873',
              description: 'Bugs Bunny Ithaca',
              api_type: 'system',
              display_label: 'Updated by'
            },
            updated_date_time: {
              value: '2014-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Updated'
            }
          }
        ]
      },
      seminary_summaries: {
        links: {
          seminary_summaries__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/seminary_summaries',
            method: 'GET'
          },
          seminary_summaries__modify: {
            rel: 'seminary_summaries__modify',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/seminary_summaries',
            method: 'PUT'
          },
          seminary_summaries__remove: {
            rel: 'seminary_summaries__remove',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/seminary_summaries',
            method: 'DELETE'
          }
        },
        metadata: { validation_response: { code: 200, message: 'Success' } },
        application_id: {
          value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
          api_type: 'system',
          key: true,
          display_label: 'Application UUID'
        },
        applicant_id: {
          value: '764634873',
          api_type: 'system',
          key: true,
          display_label: 'Applicant ID'
        },
        seminary_type: {
          value: 'RT',
          description: 'Release Time',
          domain: 'https://api.byu.edu/byuapi/meta/seminary_types',
          api_type: 'read-only',
          display_label: 'Seminary Type'
        },
        years_completed: {
          value: '3.0',
          api_type: 'read-only',
          display_label: 'Years Completed'
        },
        attendance_percentage: {
          value: '82.0',
          api_type: 'read-only',
          display_label: 'Attendance'
        },
        graduation_status: {
          value: 'Y',
          api_type: 'modifiable',
          display_label: 'Have you or will you graduate?'
        },
        teacher_name: {
          value: 'John Doe',
          api_type: 'modifiable',
          display_label: 'Seminary Teacher'
        },
        teacher_email: {
          value: 'daffyduck22@gmail.com',
          api_type: 'related',
          related_resource: 'persons',
          display_label: 'Email'
        },
        seminary_classes: [
          {
            seminary_class: {
              value: 'New Testament',
              domain: 'https://api.byu.edu/byuapi/meta/seminary_classes',
              api_type: 'read-only',
              display_label: 'Seminary Class Name'
            },
            academic_year: {
              value: '2016 Fall',
              api_type: 'read-only',
              display_label: 'Academic Year'
            },
            term_info: [
              {
                term: {
                  value: '1',
                  api_type: 'read-only',
                  display_label: 'Term'
                },
                absences: {
                  value: '3',
                  api_type: 'read-only',
                  display_label: 'Absences'
                },
                sessions: {
                  value: '30',
                  api_type: 'read-only',
                  display_label: 'Sessions'
                },
                attendance: {
                  value: '90%',
                  api_type: 'read-only',
                  display_label: 'Attendance'
                },
                reading: {
                  value: 'Y',
                  api_type: 'read-only',
                  display_label: 'Reading'
                },
                recognition: {
                  value: 'Y',
                  api_type: 'read-only',
                  display_label: 'Recognition'
                },
                credit: {
                  value: 'Y',
                  api_type: 'read-only',
                  display_label: 'Credit'
                },
                grade: {
                  value: 'A',
                  api_type: 'read-only',
                  display_label: 'Grade'
                }
              }
            ]
          }
        ],
        seminary_explanation: {
          value: 'Blah, blah, blah',
          api_type: 'modifiable',
          display_label: 'Explain your Seminary Participation'
        },
        date_time_reported: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Reported'
        },
        updated_by_id: {
          value: '764634873',
          api_type: 'system',
          description: 'Bugs Bunny Ithaca',
          display_label: 'Updated by'
        },
        updated_date_time: {
          value: '2014-05-11T13:45:53.200Z',
          api_type: 'system',
          display_label: 'Updated'
        }
      },
      test_scores: {
        links: {
          test_scores__info: {
            rel: 'self',
            href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/cea9a774-dfe8-4dfd-8a2a-bb2edc984407/test_scores',
            method: 'GET'
          }
        },
        metadata: {
          collection_size: 1,
          page_start: 1,
          page_end: 1,
          page_size: 1,
          default_page_size: 50,
          max_page_size: 1000,
          validation_response: { code: 200, message: 'Success' }
        },
        values: [
          {
            metadata: { validation_response: { code: 200, message: 'Success' } },
            application_id: {
              value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
              api_type: 'system',
              key: true,
              display_label: 'Application UUID'
            },
            applicant_id: {
              value: '764634873',
              api_type: 'system',
              key: true,
              display_label: 'Applicant ID'
            },
            test_name: {
              value: 'ACT',
              domain: 'https://api.byu.edu/byuapi/meta/test_names/v1',
              api_type: 'read-only',
              display_label: 'Test Name'
            },
            test_date: {
              value: '03/12/2015',
              api_type: 'read-only',
              display_label: 'Test Date'
            },
            composite_score: {
              value: '25',
              api_type: 'read-only',
              display_label: 'Composite Test Score'
            },
            test_components: [
              {
                component_name: {
                  value: 'ENG',
                  description: 'Reading and Writing',
                  domain: 'https://api.byu.edu/byuapi/meta/test_component_names/v1',
                  api_type: 'read-only',
                  display_label: 'Component Name'
                },
                component_score: {
                  value: '23',
                  api_type: 'read-only',
                  display_label: 'Component Score'
                }
              }
            ],
            date_time_reported: {
              value: '2014-05-11T13:45:53.200Z',
              api_type: 'system',
              display_label: 'Reported'
            },
            test_version: {
              value: 'N/A',
              api_type: 'read-only',
              display_label: 'Test Version'
            }
          }
        ]
      }
    }
  ]
}
*/
export const ApplicationsSchema = Type.Object({
   metadata: MetadataTopLevelSchema,
   stats: Type.Optional(StatsSchema),
   links: Type.Optional(Type.Object({
      applications__info: Type.Optional(Type.Object({
         rel: Type.Optional(Type.String()),
         href: Type.Optional(Type.String()),
         method: Type.Optional(Type.String())
      })),
      applications__prev: Type.Optional(Type.Object({
         rel: Type.Optional(Type.String()),
         href: Type.Optional(Type.String()),
         method: Type.Optional(Type.String())
      })),
      applications__next: Type.Optional(Type.Object({
         rel: Type.Optional(Type.String()),
         href: Type.Optional(Type.String()),
         method: Type.Optional(Type.String())
      })),
      applications__create: Type.Optional(Type.Object({
         rel: Type.Optional(Type.String()),
         href: Type.Optional(Type.String()),
         method: Type.Optional(Type.String())
      }))
   })),
   values: Type.Optional(Type.Array(ApplicationSchema))
})
export type Applications = Static<typeof ApplicationsSchema>

/**
* EXAMPLE: {
  links: {
    status__info: {
      rel: 'self',
      href: 'https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/status',
      method: 'GET'
    }
  },
  metadata: { validation_response: { code: 200, message: 'Success' } },
  stats: [ { key: 'Total', value: '123' }, { key: 'Average', value: '3.45' } ],
  trends: [
    {
      name: 'test',
      data: [ { date: '4/1', value: '21' }, { date: '4/2', value: '19' } ]
    }
  ]
}
*/
export const StatusSchema = Type.Object({
   metadata: MetadataSimpleSchema,
   stats: Type.Optional(StatsSchema),
   links: Type.Optional(Type.Object({
      status__info: Type.Optional(Type.Object({
         rel: Type.String(),
         href: Type.String(),
         method: Type.String()
      }))
   })),
   trends: Type.Optional(Type.Array(Type.Object({
      name: Type.Optional(Type.String()),
      data: Type.Optional(Type.Array(Type.Object({
         date: Type.Optional(Type.String()),
         value: Type.Optional(Type.String())
      })))
   })))
})
export type Status = Static<typeof StatusSchema>

/**
* DESCRIPTION: A concept about which a claim may be made
* EXAMPLE: { id: 'age', type: 'integer', range: '0-120' }
*/
export const ConceptSchema = Type.Object({
   id: Type.Optional(Type.String()),
   type: Type.Optional(Type.String()),
   range: Type.Optional(Type.String())
})
export type Concept = Static<typeof ConceptSchema>

/**
* DESCRIPTION: A list of concepts
*/
export const ConceptsSchema = Type.Object({
   metadata: MetadataSimpleSchema,
   values: Type.Optional(Type.Array(ConceptSchema))
})
export type Concepts = Static<typeof ConceptsSchema>

/**
* DESCRIPTION: The array of responses for an array of independent claims
* EXAMPLE: {
  subject: '123456789',
  qualifier: 'ALL',
  claims: [
    {
      concept: 'age',
      relationship: 'greater-than-or-equal',
      value: '21'
    }
  ]
}
*/
export const ClaimArrayResponseSchema = Type.Object({
   values: Type.Array(Type.Object({
      claim_id: Type.String(),
      validation_response: Type.Object({
         code: Type.Integer(),
         message: Type.String()
      })
   }))
})
export type ClaimArrayResponse = Static<typeof ClaimArrayResponseSchema>

/**
* DESCRIPTION: A claim for the engine to verify
* EXAMPLE: { concept: 'age', relationship: 'greater-than-or-equal', value: '21' }
*/
export const ClaimSchema = Type.Object({
   concept: Type.Optional(Type.String()),
   relationship: Type.Optional(Type.String()),
   value: Type.String()
}, { additionalProperties: true })
export type Claim = Static<typeof ClaimSchema>

/**
* DESCRIPTION: The PUT body containing a subject identifier and an array of claims to be verified
* EXAMPLE: {
  subject: '123456789',
  qualifier: 'ALL',
  claims: [
    {
      concept: 'age',
      relationship: 'greater-than-or-equal',
      value: '21'
    }
  ]
}
*/
export const ClaimBodySchema = Type.Object({
   subject: Type.String(),
   qualifier: Type.Optional(Type.String()),
   claims: Type.Array(ClaimSchema)
})
export type ClaimBody = Static<typeof ClaimBodySchema>

/**
* DESCRIPTION: An array of independent claims for the engine to verify
* EXAMPLE: {
  values: [
    {
      claim_id: '1',
      subject: '123456789',
      qualifier: 'ALL',
      claims: [
        {
          concept: 'age',
          relationship: 'greater-than-or-equal',
          value: '21'
        }
      ]
    },
    {
      claim_id: '2',
      subject: '987654321',
      qualifier: 'ALL',
      claims: [
        {
          concept: 'age',
          relationship: 'greater-than-or-equal',
          value: '21'
        }
      ]
    }
  ]
}
*/
export const ClaimArraySchema = Type.Object({
   values: Type.Array(Type.Object({
      claim_id: Type.Optional(Type.String()),
      subject: Type.Optional(Type.String()),
      qualifier: Type.Optional(Type.String()),
      claims: Type.Optional(Type.Array(ClaimSchema))
   }))
})
export type ClaimArray = Static<typeof ClaimArraySchema>