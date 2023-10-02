const { Type } = require('@sinclair/typebox')


/**
* EXAMPLE: {
  priority: '4',
  caller_id: '<netId>',
  short_description: 'My short description',
  description: 'My much longer description',
  u_email: 'my_alt@email.com'
}
*/
const IncidentBodySchema = Type.Object({
    priority: Type.String(),
    caller_id: Type.String(),
    short_description: Type.String(),
    description: Type.String(),
    u_email: Type.String()
})

/**
* DESCRIPTION: A list of decision reason values
*/
const DecisionReasonValueArraySchema = Type.Array(Type.String())

/**
* DESCRIPTION: Entity Name
* EXAMPLE: { value: 'Entity Name', api_type: 'modifiable', display_label: 'Name' }
*/
const NameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Entity Description
* EXAMPLE: {
  value: 'Entity Description',
  api_type: 'modifiable',
  display_label: 'Description'
}
*/
const DescriptionSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: A key/string-value pair
* EXAMPLE: { key: 'location', value: 'CA' }
*/
const AttributeStringSchema = Type.Object({
    key: Type.String(),
    value: Type.String()
})

/**
* DESCRIPTION: ID of the person who made the last update
* EXAMPLE: {
  value: '764634873',
  description: 'Bugs Bunny Ithaca',
  api_type: 'system',
  display_label: 'Updated by'
}
*/
const IdUpdatedBySchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: ID of the person who submitted the object
* EXAMPLE: {
  value: '764634873',
  description: 'Bugs Bunny Ithaca',
  api_type: 'system',
  display_label: 'Submitted by'
}
*/
const IdSubmittedBySchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: ID of the person who created the object
* EXAMPLE: {
  value: '764634873',
  description: 'Bugs Bunny Ithaca',
  api_type: 'system',
  display_label: 'Created by'
}
*/
const IdCreatedBySchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When was the Application's data verified?
*/
const DateTimeVerifiedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When was the data last updated?
* EXAMPLE: {
  value: '2014-05-11T13:45:53.200Z',
  api_type: 'system',
  display_label: 'Updated'
}
*/
const DateTimeUpdatedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When was the object submitted?
*/
const DateTimeSubmittedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When was the object last reported?
*/
const DateTimeReportedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When was the object created?
*/
const DateTimeCreatedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Unique Identifier assigned to each Application
*/
const ApplicationIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Type of Applicant, for example: New Freshman, Transfer
*/
const ApplicantTypeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Synonym for the byu_id
*/
const ApplicantIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Academic Period for which the Applicant is requesting admittance
*/
const AdmitPeriodSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    long_description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Major which the Applicant is requesting admittance
*/
const AdmitMajorSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: First Month for an Enrollment/Service
*/
const SharedStartMonthSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Can texts be sent to this phone?
*/
const SharedPhoneTextsOkSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Letter grade
*/
const SharedGradeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: High school/Seminary/Institute graduation status of the applicant
*/
const SharedGraduationStatusSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Last Month for an Enrollment/Service
*/
const SharedEndMonthSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Hours graded at another college/high school
*/
const SharedCreditHoursGradedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: The academic year during which a seminary or institute class was taught
*/
const SharedAcademicYearSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Version of test
*/
const TestVersionSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Name of test
*/
const TestNameSchema = Type.Object({
    value: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Date test administered
*/
const TestDateSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Composite score of test/evaluation
*/
const TestCompositeScoreSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Score on test component
*/
const TestComponentScoreSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Name of test component
*/
const TestComponentNameSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Years completed in seminary program
*/
const SeminaryYearsCompletedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

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
const SeminaryTypeSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary term number
*/
const SeminaryTermSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Teacher Email Address
*/
const SeminaryTeacherEmailSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Name of Seminary Teacher
* EXAMPLE: {
  value: 'John Doe',
  api_type: 'modifiable',
  display_label: 'Seminary Teacher'
}
*/
const SeminaryTeacherNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary sessions during the term
*/
const SeminarySessionsSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary recognition for the term
*/
const SeminaryRecognitionSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary reading for the term
*/
const SeminaryReadingSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary grade for the term
*/
const SeminaryGradeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Explanation of Seminary Participation/non-Participation
* EXAMPLE: {
  value: 'Blah, blah, blah',
  api_type: 'modifiable',
  display_label: 'Explain your Seminary Participation'
}
*/
const SeminaryExplanationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary credit for the term
*/
const SeminaryCreditSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary Class Name
*/
const SeminaryClassSchema = Type.Object({
    value: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary attendance percentage
*/
const SeminaryAttendancePercentageSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary attendance for the term
*/
const SeminaryAttendanceSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Seminary absences during the term
*/
const SeminaryAbsencesSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: A question UUID
* EXAMPLE: {
  value: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
  api_type: 'system',
  key: true,
  display_label: 'UUID'
}
*/
const QuestionUuidSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question type
* EXAMPLE: { value: 'Essay', api_type: 'modifiable', display_label: 'Type' }
*/
const QuestionTypeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Ordinal position for a question element in a group
* EXAMPLE: { value: '1', api_type: 'modifiable', display_label: 'Position' }
*/
const QuestionGroupOrdinalSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question group ID
* EXAMPLE: {
  value: '4060d2e3-42e2-415b-8ddb-357f99ae31ba',
  api_type: 'system',
  display_label: 'Group ID'
}
*/
const QuestionGroupIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Display heading for a group of question elements
* EXAMPLE: {
  value: 'Intellectually Enlarging',
  api_type: 'modifiable',
  display_label: 'Display Group Heading'
}
*/
const QuestionGroupHeadingSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question element type
* EXAMPLE: { value: 'Text', api_type: 'modifiable', display_label: 'Type' }
*/
const QuestionElementTypeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question element response range
* EXAMPLE: { value: '5', api_type: 'modifiable', display_label: 'Response Range' }
*/
const QuestionElementResponseRangeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question element response
* EXAMPLE: {
  value: 'The airspeed of a laden swallow depends: is it African or European?',
  api_type: 'modifiable',
  display_label: 'Response Range'
}
*/
const QuestionElementResponseSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question element prompt
* EXAMPLE: {
  value: 'What is the airspeed of a laden swallow?',
  api_type: 'modifiable',
  display_label: 'Prompt'
}
*/
const QuestionElementPromptSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question element ordinal
* EXAMPLE: { value: '1', api_type: 'modifiable', display_label: 'Ordinal' }
*/
const QuestionElementOrdinalSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question element character limit
* EXAMPLE: {
  value: '2000',
  api_type: 'modifiable',
  display_label: 'Character Limit'
}
*/
const QuestionElementLimitSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Question element ID
* EXAMPLE: {
  value: '88dfe659-1e56-4bd5-978c-48863f1eac82',
  api_type: 'system',
  display_label: 'Element ID'
}
*/
const QuestionElementIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: An explanation about a question element
* EXAMPLE: {
  value: "If you don't recognize this question, you're not a Python.",
  api_type: 'modifiable',
  display_label: 'Explanation'
}
*/
const QuestionElementExplanationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Sex
*/
const PersonalSexSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: How many years have you been a member of your Church?
*/
const PersonalReligionTenureSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Religious Affiliation
*/
const PersonalReligionCodeSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Marital Status
*/
const PersonalMaritalStatusSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Birthday
*/
const PersonalDateOfBirthSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Type of mission served
*/
const MissionTypeSchema = Type.Object({
    value: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Has the Applicant served a mission?
*/
const MissionServiceSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Name of mission
*/
const MissionNameSchema = Type.Object({
    value: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Language spoken in mission
*/
const MissionLanguageSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Are you planning to change visa type if you are admitted?
*/
const IntlVisaChangePlanSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Are you currently residing in the US?
*/
const IntlCurrentUsResidentSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: US-issued ID for non-citizen residents
*/
const IntlAlienNumberSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Was the institute class taken for credit?
*/
const InstituteForCreditSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Explanation of Institute participation/non-participation
*/
const InstituteExplanationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Name of Institute Course
*/
const InstituteClassSchema = Type.Object({
    value: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Years of Institute Attendance
* EXAMPLE: { value: '3', api_type: 'read-only', display_label: 'Years Attended' }
*/
const InstituteAttendanceSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

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
const HighSchoolTypeSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Source of Transcript
* EXAMPLE: {
  value: '1',
  api_type: 'modifiable',
  display_label: 'Transcript Source'
}
*/
const HighSchoolTranscriptSourceSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: High School Course Subject
* EXAMPLE: { value: 'English', api_type: 'modifiable', display_label: 'Subject' }
*/
const HighSchoolSubjectSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

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
const HighSchoolStateSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: High School Repeated Course Flag
* EXAMPLE: { value: 'Y', api_type: 'modifiable', display_label: 'Repeated' }
*/
const HighSchoolRepeatedFlagSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Will the student complete a home school program?
* EXAMPLE: {
  value: 'Blah, blah, blah',
  api_type: 'modifiable',
  display_label: 'Describe your non-accredited school work'
}
*/
const HighSchoolNonaccreditedStatementSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Link to document image
* EXAMPLE: {
  value: 'https://api.byu.edu/byuapi/images/5820492',
  api_type: 'modifiable',
  display: 'Link to Document Image'
}
*/
const HighSchoolLinkToSecondaryDocumentImageSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Link to document image
* EXAMPLE: {
  value: 'https://api.byu.edu/byuapi/images/5820492',
  api_type: 'modifiable',
  display: 'Link to Document Image'
}
*/
const HighSchoolLinkToDocumentImageSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Date of high school graduation or anticipated date
*/
const HighSchoolGraduationDateSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: High School Grading Terms
* EXAMPLE: { value: 4, api_type: 'modifiable', display_label: 'Term' }
*/
const HighSchoolGradingTermsSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Grade Level
* EXAMPLE: { value: '10', api_type: 'modifiable', display_label: 'Grade Level' }
*/
const HighSchoolGradeLevelSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Final letter grade
*/
const HighSchoolGradeFinalSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Calculated GPA
* EXAMPLE: {
  value: '3.75',
  api_type: 'read-only',
  display_label: 'Calculated GPA'
}
*/
const HighSchoolGpaCalculatedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: GPA earned in High School
* EXAMPLE: {
  value: '3.1',
  api_type: 'modifiable',
  display_label: 'High School GPA'
}
*/
const HighSchoolGpaSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Number of graded high school credits
*/
const HighSchoolCreditsSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Course Name
* EXAMPLE: {
  value: 'English',
  api_type: 'modifiable',
  display_label: 'Course Name'
}
*/
const HighSchoolCourseNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

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
const HighSchoolCountrySchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Did the Applicant participate in concurrent enrollment
*/
const HighSchoolConcurrentEnrollmentSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: City where High School is located
* EXAMPLE: {
  value: 'Orem',
  api_type: 'related',
  related_resource: 'high_schools',
  display_label: 'High School City'
}
*/
const HighSchoolCitySchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Number of half year AP/IB classes on high school transcript
*/
const HighSchoolApIbHalfClassesSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Number of full year AP/IB classes on high school transcript
*/
const HighSchoolApIbFullClassesSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: High School AP/IB Flag
* EXAMPLE: { value: 'Y', api_type: 'modifiable', display_label: 'AP/IB Flag' }
*/
const HighSchoolApIbFlagSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

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
const HighSchoolSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Entity which verified the visa type
*/
const GovVisaTypeSourceSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: US-issued Visa Type
*/
const GovVisaTypeSchema = Type.Object({
    value: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Citizenship Status
*/
const GovCitizenshipStatusSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Country of Citizenship
*/
const GovCitizenshipCountryCodeSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Country of Birth
*/
const GovBirthCountryCodeSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: City of Birth
*/
const GovBirthCitySchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: SRS Site
*/
const GeiProgramsSrsSiteSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: SRS Facilitator
*/
const GeiProgramsSrsFacilitatorSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: SRS Certificates
*/
const GeiProgramsSrsCertificatesSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Pathway Connect site
*/
const GeiProgramsPwSiteSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Pathway Connect GPA
*/
const GeiProgramsPwGpaSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Pathway Connect Credits
*/
const GeiProgramsPwCreditsSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Pathway Connect completion date
*/
const GeiProgramsPwCompletionSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: The endorsement type (i.e., L1, L2)
*/
const EndorsementTypeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: The status of an endorsement
*/
const EndorsementStatusSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: The date of the endorsement status
*/
const EndorsementDateSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Deliverable View Index
*/
const DeliverableViewIdxSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String()
})

/**
* DESCRIPTION: Type of Deliverable - corresponds to section heading on Application Status Page
*/
const DeliverableTypeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Specialization of Deliverable - corresponds to line item on Application Status Page
*/
const DeliverableSubtypeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Status of an Application Deliverable
*/
const DeliverableStatusSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Has the deliverable been satisfied?
*/
const DeliverableSatisfiedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Defines how to handle the Deliverable Qualifier
*/
const DeliverableQualifierTypeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Unique Qualifier assigned to each Deliverable - build to connect to URL
*/
const DeliverableQualifierSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Deliverable display name
*/
const DeliverableNameDisplaySchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Deliverable name
*/
const DeliverableNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Unique deliverable identifier
*/
const DeliverableIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Description of Deliverable for Applicant
*/
const DeliverableDescriptionSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Deliverable Controller Index
*/
const DeliverableControllerIdxSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String()
})

/**
* DESCRIPTION: Date the status of the deliverable last changed
*/
const DeliverableDateTimeStatusSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When the Application Deliverable was satisfied
*/
const DeliverableDateTimeSatisfiedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: State Code
*/
const ContactStateCodeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Postal Code
*/
const ContactPostalCodeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Country Code
*/
const ContactCountryCodeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: City Name
*/
const ContactCitySchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Fifth Line of Deliverable Address
*/
const ContactAddressLine5Schema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Fourth Line of Deliverable Address
*/
const ContactAddressLine4Schema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Third Line of Deliverable Address
*/
const ContactAddressLine3Schema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Second Line of Deliverable Address
*/
const ContactAddressLine2Schema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: First Line of Deliverable Address
*/
const ContactAddressLine1Schema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: College degree major
*/
const CollegeDegreeMajorSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: College degree date
*/
const CollegeDegreeDateSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: College degree type
*/
const CollegeDegreeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: College GPA verified
*/
const CollegeGpaVerifiedSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Total GPA earned at a College
*/
const CollegeGpaSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: College Code
*/
const CollegeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Average GPA in College
*/
const CollegeCumulativeGpaSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Total credit earned in College
*/
const CollegeCumulativeCreditSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Single Parent
*/
const BioSingleParentSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Residing With
*/
const BioResidingWithSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Family Income
*/
const BioFamilyIncomeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Mother's Level of Education
*/
const BioMothersLevelOfEducationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Did the Applicant mark the Hispanic flag?
*/
const BioHispanicFlagSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Father's Level of Education
*/
const BioFathersLevelOfEducationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Discipline Explanation
*/
const BgUniversityDisciplineExplanationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Has the Applicant ever been disciplined by a college or university?
*/
const BgUniversityDisciplineSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Sex Registry Explanation
*/
const BgSexRegistryExplanationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Has the Applicant ever been listed on a sex offender registry?
*/
const BgSexRegistrySchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Explanation for the Plural Marriage Affiliation
*/
const BgPluralMarriageExplanationSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Is the applicant affiliated with any group that currently advocates plural marriage?
*/
const BgPluralMarriageSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Details on each conviction and resolution
*/
const BgCriminalConvictionsSchema = Type.Array(Type.Object({
    crime: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    crime_year: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    courts: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    conditions: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    probation: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    probation_explanation: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    penalties: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    penalties_explanation: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    }),
    additional_explanation: Type.Object({
        value: Type.String(),
        api_type: Type.String(),
        display_label: Type.String()
    })
}))

/**
* DESCRIPTION: Has the Applicant ever been convicted?
*/
const BgConvictionRecordSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Phone Number
*/
const BasicSecondaryPhoneNumberSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Phone Number
*/
const BasicPhoneNumberSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    key: Type.Boolean(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Email Address
*/
const BasicSecondaryEmailAddressSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Email Address
*/
const BasicEmailAddressSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Status of the Application or School Selection
*/
const BasicSchoolPreferenceOrderSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Legal Surname
*/
const BasicSurnameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Legal Suffix added to the Legal Name
*/
const BasicSuffixSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Legal First-Middle-etc Name (everything except for the Surname)
*/
const BasicRestOfNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Primary Language
*/
const BasicPrimaryLanguageSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Previous/Maiden Name
*/
const BasicPreviousNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Complete preferred name - first name first
*/
const BasicPreferredNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Institution-specific net ID.
*/
const BasicNetIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String()
})

/**
* DESCRIPTION: Legal Middle Name(s)
*/
const BasicMiddleNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Institution-specific person ID.
*/
const BasicInstitutionIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String()
})

/**
* DESCRIPTION: Self-identified home town - used primarily for identification purposes
*/
const BasicHomeTownSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Self-identified home state - used primarily for identification purposes
*/
const BasicHomeStateSchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Self-identified home county - used primarily for scholarship considerations
*/
const BasicHomeCountySchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Self-identified home country - used primarily for identification purposes
*/
const BasicHomeCountrySchema = Type.Object({
    value: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Legal First Name
*/
const BasicFirstNameSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: The date time that the decision was made
*/
const BasicDecisionDateTimeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Decision template ID
*/
const BasicDecisionTemplateIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: The reason for the decision made on the application
*/
const BasicDecisionQualifierSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: The decision made on the application
*/
const BasicDecisionSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Date the Application or School Selection was determined
*/
const BasicApplicationStatusDateTimeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Status of the Application or School Selection
*/
const BasicApplicationStatusSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When did the applicant accept financial responsibility?
*/
const BasicAgreementFinancialResponsibilityDateTimeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When did the applicant agree to the information release?
*/
const BasicAgreementInformationReleaseDateTimeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: When was the Application Action taken?
*/
const ActionDateTimeSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Who attempted the Application Action
*/
const ActionByIdSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Results of the Application Action attempt
*/
const ActionResultsSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    description: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Notes added by the Applicant
*/
const ActionMessageSchema = Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    display_label: Type.String()
})

/**
* DESCRIPTION: Elements required to perform an application action
* EXAMPLE: {
  component_id: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
  action: 'Create',
  action_message: 'New Application Created',
  data: {}
}
*/
const ActionSchema = Type.Object({
    action: Type.String(),
    action_message: Type.String(),
    component_id: Type.String(),
    data: Type.Object({
    })
})

/**
*/
const MetadataSimpleSchema = Type.Object({
    validation_response: Type.Object({
        code: Type.Integer(),
        message: Type.String()
    }),
    validation_information: Type.Array(Type.String()),
    cache: Type.Object({
        date_time: Type.String()
    })
})

/**
* DESCRIPTION: A list of decision reasons
*/
const DecisionReasonsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    values: Type.Object({
        admitReasons: DecisionReasonValueArraySchema,
        denyReasons: DecisionReasonValueArraySchema,
        holdReasons: DecisionReasonValueArraySchema,
        archiveReasons: DecisionReasonValueArraySchema
    })
})

/**
*/
const MetadataCollectionSchema = Type.Intersect([
    MetadataSimpleSchema,
    Type.Object({
        collection_size: Type.Integer(),
        page_start: Type.Integer(),
        page_end: Type.Integer(),
        page_size: Type.Integer(),
        default_page_size: Type.Integer(),
        max_page_size: Type.Integer()
    })
])

/**
*/
const MetadataTopLevelSchema = Type.Intersect([
    MetadataCollectionSchema,
    Type.Object({
        field_sets_returned: Type.Array(Type.String()),
        field_sets_available: Type.Array(Type.String()),
        field_sets_default: Type.Array(Type.String()),
        contexts_available: Type.Object({
            admin: Type.Array(Type.String()),
            all: Type.Array(Type.String()),
            application_controls: Type.Array(Type.String()),
            applicant: Type.Array(Type.String()),
            contact: Type.Array(Type.String()),
            education: Type.Array(Type.String()),
            profile: Type.Array(Type.String()),
            religion: Type.Array(Type.String())
        })
    })
])

/**
*/
const ErrorResponseSchema = Type.Object({
    metadata: MetadataSimpleSchema
})

/**
*/
const SeminaryTermInfoSchema = Type.Object({
    term: SeminaryTermSchema,
    absences: SeminaryAbsencesSchema,
    sessions: SeminarySessionsSchema,
    attendance: SeminaryAttendanceSchema,
    reading: SeminaryReadingSchema,
    recognition: SeminaryRecognitionSchema,
    credit: SeminaryCreditSchema,
    grade: SeminaryGradeSchema
})

/**
*/
const SeminaryClassDataSchema = Type.Object({
    seminary_class: SeminaryClassSchema,
    academic_year: SharedAcademicYearSchema,
    term_info: Type.Array(SeminaryTermInfoSchema)
})

/**
* DESCRIPTION: A set of question elements that should be grouped together
*/
const QuestionGroupSchema = Type.Object({
    id: QuestionGroupIdSchema,
    name: NameSchema,
    description: DescriptionSchema,
    ordinal: QuestionGroupOrdinalSchema,
    heading: QuestionGroupHeadingSchema,
    elements: Type.Array(Type.Object({
        id: Type.String(),
        label: Type.String(),
        ordinal: Type.String()
    }))
})

/**
* DESCRIPTION: A question element
*/
const QuestionElementSchema = Type.Object({
    id: QuestionElementIdSchema,
    type: QuestionElementTypeSchema,
    prompt: QuestionElementPromptSchema,
    explanation: QuestionElementExplanationSchema,
    limit: QuestionElementLimitSchema,
    ordinal: QuestionElementOrdinalSchema,
    response: QuestionElementResponseSchema,
    response_range: QuestionElementResponseRangeSchema,
    response_criteria: Type.Array(Type.Object({
        label: Type.String(),
        value: Type.String()
    })),
    response_set: Type.Array(Type.String())
})

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
const QuestionAnswerSchema = Type.Object({
    answers: Type.Array(Type.Object({
        element_id: Type.String(),
        response: Type.String()
    }))
})

/**
* DESCRIPTION: Collection of self-declared racial categories
*/
const RacialCategoriesSchema = Type.Array(Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
}))

/**
* DESCRIPTION: Collection of languages in which the Applicant has declared some proficiency
*/
const LanguagesSchema = Type.Array(Type.Object({
    value: Type.String(),
    api_type: Type.String(),
    related_resource: Type.String(),
    description: Type.String(),
    domain: Type.String(),
    display_label: Type.String()
}))

/**
*/
const HighSchoolNonaccreditedWorkInfoSchema = Type.Object({
    grade_level: HighSchoolGradeLevelSchema,
    statement: HighSchoolNonaccreditedStatementSchema
})

/**
*/
const HighSchoolCourseInfoSchema = Type.Object({
    grade_level: HighSchoolGradeLevelSchema,
    subject: HighSchoolSubjectSchema,
    course_name: HighSchoolCourseNameSchema,
    ap_ib_flag: HighSchoolApIbFlagSchema,
    repeated: HighSchoolRepeatedFlagSchema,
    grading_terms: HighSchoolGradingTermsSchema,
    grade_final: HighSchoolGradeFinalSchema,
    credits: HighSchoolCreditsSchema,
    grades: Type.Array(SharedGradeSchema)
})

/**
* DESCRIPTION: Modifiable International Recordes Information
* EXAMPLE: {
  alien_number: '789789789',
  current_us_resident: 'Y',
  visa_change_plan: 'Y'
}
*/
const InternationalRecordsModifySchema = Type.Object({
    alien_number: Type.String(),
    current_us_resident: Type.String(),
    visa_change_plan: Type.String()
})

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
const MissionsModifySchema = Type.Object({
    mission_type: Type.String(),
    mission_name: Type.String(),
    mission_language: Type.String(),
    start_month: Type.String(),
    end_month: Type.String()
})

/**
*/
const HighSchoolNonaccreditedWorkInfoModifySchema = Type.Object({
    grade_level: Type.String(),
    statement: Type.String()
})

/**
*/
const HighSchoolCourseInfoModifySchema = Type.Object({
    grade_level: Type.String(),
    subject: Type.String(),
    course_name: Type.String(),
    ap_ib_flag: Type.String(),
    repeated: Type.String(),
    grading_terms: Type.String(),
    grades: Type.Array(Type.String()),
    grade_final: Type.String(),
    credits: Type.String()
})

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
const HighSchoolSummaryModifySchema = Type.Object({
    high_school_type: Type.String(),
    high_school_code: Type.String(),
    high_school_name: Type.String(),
    high_school_city: Type.String(),
    high_school_state: Type.String(),
    high_school_country: Type.String(),
    start_month: Type.String(),
    end_month: Type.String(),
    graduation_status: Type.String(),
    graduation_date: Type.String(),
    high_school_gpa: Type.String(),
    list_of_classes: Type.Array(HighSchoolCourseInfoModifySchema),
    list_of_nonaccredited_work: Type.Array(HighSchoolNonaccreditedWorkInfoModifySchema),
    concurrent_enrollment: Type.String(),
    transcript_source: Type.String(),
    verified_by_id: Type.String(),
    date_time_verified: Type.String(),
    link_to_document_image: Type.String(),
    link_to_secondary_document_image: Type.String()
})

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
const GovernmentRecordsModifySchema = Type.Object({
    visa_type: Type.String(),
    visa_type_source: Type.String(),
    citizenship_status: Type.String(),
    citizenship_country_code: Type.String(),
    birth_country_code: Type.String(),
    birth_city: Type.String()
})

/**
* DESCRIPTION: Modifiable GEI Program Information
* EXAMPLE: {
  srs_certificates: 'Finance, Business, Job',
  srs_facilitator: 'John Smith',
  srs_site: 'Test Stake'
}
*/
const GeiProgramModifySchema = Type.Object({
    srs_certificates: Type.String(),
    srs_facilitator: Type.String(),
    srs_site: Type.String()
})

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
const ContactModifySchema = Type.Object({
    preferred_name: Type.String(),
    surname: Type.String(),
    email_address: Type.String(),
    phone_number: Type.String(),
    address_line_1: Type.String(),
    address_line_2: Type.String(),
    address_line_3: Type.String(),
    address_line_4: Type.String(),
    country_code: Type.String(),
    city: Type.String(),
    state_code: Type.String(),
    postal_code: Type.String()
})

/**
* DESCRIPTION: Structure to Modify College Summary Information
*/
const CollegeSummaryModifySchema = Type.Array(Type.Object({
    college_code: Type.String(),
    start_month: Type.String(),
    end_month: Type.String(),
    gpa: Type.String(),
    credit_hours_graded: Type.String()
}))

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
const BiographicalClassificationsModifySchema = Type.Object({
    hispanic_flag: Type.String(),
    racial_categories: Type.String(),
    languages: Type.String(),
    mothers_level_of_education: Type.String(),
    fathers_level_of_education: Type.String(),
    family_income: Type.String(),
    residing_with: Type.String(),
    single_parent: Type.String()
})

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
const BackgroundQuestionsModifySchema = Type.Object({
    conviction_record: Type.String(),
    criminal_convictions: Type.Array(Type.Object({
        crime: Type.String(),
        crime_year: Type.String(),
        courts: Type.String(),
        conditions: Type.String(),
        probation: Type.String(),
        probation_explanation: Type.String(),
        penalties: Type.String(),
        penalties_explanation: Type.String(),
        additional_explanation: Type.String()
    })),
    plural_marriage: Type.String(),
    plural_marriage_explanation: Type.String(),
    sex_registry: Type.String(),
    sex_registry_explanation: Type.String(),
    university_discipline: Type.String(),
    university_discipline_explanation: Type.String()
})

/**
* DESCRIPTION: A Test Score from the applicant
*/
const TestScoreSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    test_name: TestNameSchema,
    test_date: TestDateSchema,
    composite_score: TestCompositeScoreSchema,
    date_time_reported: DateTimeReportedSchema,
    test_version: TestVersionSchema,
    test_components: Type.Array(Type.Object({
        component_name: TestComponentNameSchema,
        component_score: TestComponentScoreSchema
    }))
})

/**
* DESCRIPTION: A collection of Test Scores from the applicant
*/
const TestScoresSchema = Type.Object({
    metadata: MetadataCollectionSchema,
    links: Type.Object({
        test_scores__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    values: Type.Array(TestScoreSchema)
})

/**
* DESCRIPTION: Service or query statistics
*/
const StatsSchema = Type.Array(AttributeStringSchema)

/**
* DESCRIPTION: Seminary information from the applicant API
*/
const SeminarySummariesSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    seminary_type: SeminaryTypeSchema,
    years_completed: SeminaryYearsCompletedSchema,
    attendance_percentage: SeminaryAttendancePercentageSchema,
    graduation_status: SharedGraduationStatusSchema,
    seminary_explanation: SeminaryExplanationSchema,
    teacher_name: SeminaryTeacherNameSchema,
    teacher_email: SeminaryTeacherEmailSchema,
    date_time_reported: DateTimeReportedSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        seminary_summaries__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        seminary_summaries__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        seminary_summaries__remove: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    seminary_classes: Type.Array(SeminaryClassDataSchema)
})

/**
*/
const ReportsMetadataSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    values: Type.Array(Type.Object({
        name: Type.String(),
        description: Type.String(),
        long_description: Type.String(),
        category: Type.String(),
        limit: Type.String(),
        pagination_parameter: Type.String(),
        institutions: Type.Array(Type.String()),
        content_type: Type.Array(Type.String()),
        parameters: Type.Array(Type.String()),
        columns: Type.Array(Type.Object({
            ordinal: Type.String(),
            name: Type.String(),
            qualifier: Type.Array(Type.String()),
            link: Type.String()
        }))
    }))
})

/**
* DESCRIPTION: An application question
*/
const QuestionSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    uuid: QuestionUuidSchema,
    type: QuestionTypeSchema,
    name: NameSchema,
    description: DescriptionSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        question__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        question__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    elements: Type.Array(QuestionElementSchema),
    groups: Type.Array(QuestionGroupSchema)
})

/**
* DESCRIPTION: Admissions questions
*/
const QuestionsSchema = Type.Object({
    metadata: MetadataCollectionSchema,
    links: Type.Object({
        questions__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    values: Type.Array(QuestionSchema)
})

/**
* DESCRIPTION: Confidential personal information on the applicant API
*/
const PersonalRecordsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    date_of_birth: PersonalDateOfBirthSchema,
    marital_status: PersonalMaritalStatusSchema,
    religion_code: PersonalReligionCodeSchema,
    religion_tenure: PersonalReligionTenureSchema,
    sex: PersonalSexSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        personal_records__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        personal_records__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        persons__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: Mission information for Applicant on the Undergradudate Application
*/
const MissionsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    mission_service: MissionServiceSchema,
    mission_name: MissionNameSchema,
    mission_language: MissionLanguageSchema,
    start_month: SharedStartMonthSchema,
    end_month: SharedEndMonthSchema,
    mission_type: MissionTypeSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        missions__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: Confidential International information for Applicant API
*/
const InternationalRecordsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    alien_number: IntlAlienNumberSchema,
    current_us_resident: IntlCurrentUsResidentSchema,
    visa_change_plan: IntlVisaChangePlanSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        international_records__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        international_records__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: Institute Class Enrollment information
*/
const InstituteClassDataSchema = Type.Object({
    institute_class: InstituteClassSchema,
    academic_year: SharedAcademicYearSchema,
    grade: SharedGradeSchema,
    for_credit: InstituteForCreditSchema
})

/**
* DESCRIPTION: Institute information from the Application API
*/
const InstituteSummariesSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    institute_attendance: InstituteAttendanceSchema,
    institute_explanation: InstituteExplanationSchema,
    date_time_reported: DateTimeReportedSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        institute_summaries__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        institute_summaries__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        institute_summaries__remove: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    institute_classes: Type.Array(InstituteClassDataSchema)
})

/**
* DESCRIPTION: High School for Undergraduate Application API
*/
const HighSchoolSummarySchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    high_school_type: HighSchoolTypeSchema,
    high_school: HighSchoolSchema,
    high_school_city: HighSchoolCitySchema,
    high_school_state: HighSchoolStateSchema,
    high_school_country: HighSchoolCountrySchema,
    start_month: SharedStartMonthSchema,
    end_month: SharedEndMonthSchema,
    graduation_status: SharedGraduationStatusSchema,
    graduation_date: HighSchoolGraduationDateSchema,
    high_school_gpa: HighSchoolGpaSchema,
    gpa_calculated: HighSchoolGpaCalculatedSchema,
    ap_ib_half_classes: HighSchoolApIbHalfClassesSchema,
    ap_ib_full_classes: HighSchoolApIbFullClassesSchema,
    concurrent_enrollment: HighSchoolConcurrentEnrollmentSchema,
    transcript_source: HighSchoolTranscriptSourceSchema,
    date_time_verified: DateTimeVerifiedSchema,
    link_to_document_image: HighSchoolLinkToDocumentImageSchema,
    link_to_secondary_document_image: HighSchoolLinkToSecondaryDocumentImageSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        high_school_summaries__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        high_school_summaries__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        high_school_summaries__remove: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        high_school_codes__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    list_of_classes: Type.Array(HighSchoolCourseInfoSchema),
    list_of_nonaccredited_work: Type.Array(HighSchoolNonaccreditedWorkInfoSchema)
})

/**
* DESCRIPTION: High Schools for Undergraduate Application API
*/
const HighSchoolSummariesSchema = Type.Object({
    metadata: MetadataCollectionSchema,
    links: Type.Object({
        high_school_summaries__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    values: Type.Array(HighSchoolSummarySchema)
})

/**
* DESCRIPTION: Confidential Government information for an Applicant
*/
const GovernmentRecordsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    birth_city: GovBirthCitySchema,
    birth_country_code: GovBirthCountryCodeSchema,
    citizenship_country_code: GovCitizenshipCountryCodeSchema,
    citizenship_status: GovCitizenshipStatusSchema,
    visa_type: GovVisaTypeSchema,
    visa_type_source: GovVisaTypeSourceSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        government_records__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        government_records__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        persons__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
*/
const GeiProgramsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    pw_completion: GeiProgramsPwCompletionSchema,
    pw_credits: GeiProgramsPwCreditsSchema,
    pw_gpa: GeiProgramsPwGpaSchema,
    pw_site: GeiProgramsPwSiteSchema,
    srs_certificates: GeiProgramsSrsCertificatesSchema,
    srs_facilitator: GeiProgramsSrsFacilitatorSchema,
    srs_site: GeiProgramsSrsSiteSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        gei_programs__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        gei_programs__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
*/
const EndorsementSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    date: EndorsementDateSchema,
    status: EndorsementStatusSchema,
    type: EndorsementTypeSchema,
    links: Type.Object({
        endorsement__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: College Summary from the applicant
*/
const CollegeSummarySchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    college: CollegeSchema,
    start_month: SharedStartMonthSchema,
    end_month: SharedEndMonthSchema,
    gpa: CollegeGpaSchema,
    gpa_verified: CollegeGpaVerifiedSchema,
    degree: CollegeDegreeSchema,
    degree_date: CollegeDegreeDateSchema,
    degree_major: CollegeDegreeMajorSchema,
    credit_hours_graded: SharedCreditHoursGradedSchema,
    date_time_verified: DateTimeVerifiedSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        college_summaries__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        college_summaries__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        college_summaries__remove: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: College Summaries from the applicant
*/
const CollegeSummariesSchema = Type.Object({
    metadata: MetadataCollectionSchema,
    cumulative_credit: CollegeCumulativeCreditSchema,
    cumulative_gpa: CollegeCumulativeGpaSchema,
    links: Type.Object({
        college_summaries__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    values: Type.Array(CollegeSummarySchema)
})

/**
* DESCRIPTION: Biographical Classifications
*/
const BiographicalClassificationsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    hispanic_flag: BioHispanicFlagSchema,
    racial_categories: RacialCategoriesSchema,
    languages: LanguagesSchema,
    mothers_level_of_education: BioMothersLevelOfEducationSchema,
    fathers_level_of_education: BioFathersLevelOfEducationSchema,
    family_income: BioFamilyIncomeSchema,
    residing_with: BioResidingWithSchema,
    single_parent: BioSingleParentSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        biographical_classifications__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        biographical_classifications__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        ethnicities__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        languages__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: Basic field_set for Application API
*/
const BasicSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    institution_id: BasicInstitutionIdSchema,
    net_id: BasicNetIdSchema,
    admit_period: AdmitPeriodSchema,
    admit_major: AdmitMajorSchema,
    applicant_type: ApplicantTypeSchema,
    primary_language: BasicPrimaryLanguageSchema,
    first_name: BasicFirstNameSchema,
    middle_name: BasicMiddleNameSchema,
    rest_of_name: BasicRestOfNameSchema,
    surname: BasicSurnameSchema,
    suffix: BasicSuffixSchema,
    preferred_name: BasicPreferredNameSchema,
    previous_name: BasicPreviousNameSchema,
    address_line_1: ContactAddressLine1Schema,
    address_line_2: ContactAddressLine2Schema,
    address_line_3: ContactAddressLine3Schema,
    address_line_4: ContactAddressLine4Schema,
    address_line_5: ContactAddressLine5Schema,
    city: ContactCitySchema,
    country_code: ContactCountryCodeSchema,
    postal_code: ContactPostalCodeSchema,
    state_code: ContactStateCodeSchema,
    email_address: BasicEmailAddressSchema,
    phone_number: BasicPhoneNumberSchema,
    secondary_email_address: BasicSecondaryEmailAddressSchema,
    secondary_phone_number: BasicSecondaryPhoneNumberSchema,
    phone_texts_ok: SharedPhoneTextsOkSchema,
    home_town: BasicHomeTownSchema,
    home_county: BasicHomeCountySchema,
    home_state: BasicHomeStateSchema,
    home_country: BasicHomeCountrySchema,
    information_release: BasicAgreementInformationReleaseDateTimeSchema,
    financial_responsibility: BasicAgreementFinancialResponsibilityDateTimeSchema,
    school_preference_order: BasicSchoolPreferenceOrderSchema,
    decision: BasicDecisionSchema,
    decision_qualifier: BasicDecisionQualifierSchema,
    decision_template_id: BasicDecisionTemplateIdSchema,
    decision_date_time: BasicDecisionDateTimeSchema,
    application_status: BasicApplicationStatusSchema,
    application_status_date_time: BasicApplicationStatusDateTimeSchema,
    created_by_id: IdCreatedBySchema,
    created_date_time: DateTimeCreatedSchema,
    submitted_by_id: IdSubmittedBySchema,
    submitted_date_time: DateTimeSubmittedSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        applications__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        applications__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        applications__remove: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        contact__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: Background Questions
*/
const BackgroundQuestionsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    conviction_record: BgConvictionRecordSchema,
    criminal_convictions: BgCriminalConvictionsSchema,
    plural_marriage: BgPluralMarriageSchema,
    plural_marriage_explanation: BgPluralMarriageExplanationSchema,
    sex_registry: BgSexRegistrySchema,
    sex_registry_explanation: BgSexRegistryExplanationSchema,
    university_discipline: BgUniversityDisciplineSchema,
    university_discipline_explanation: BgUniversityDisciplineExplanationSchema,
    updated_by_id: IdUpdatedBySchema,
    updated_date_time: DateTimeUpdatedSchema,
    links: Type.Object({
        background_questions__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        background_questions__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: Structure to Add/Modify an Application Deliverable
* EXAMPLE: { waived: 'N' }
*/
const ApplicationDeliverableModifySchema = Type.Object({
    waived: Type.String()
})

/**
* DESCRIPTION: A deliverable required for an application
*/
const ApplicationDeliverableSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    name: DeliverableNameSchema,
    name_display: DeliverableNameDisplaySchema,
    deliverable_id: DeliverableIdSchema,
    controller_idx: DeliverableControllerIdxSchema,
    view_idx: DeliverableViewIdxSchema,
    type: DeliverableTypeSchema,
    subtype: DeliverableSubtypeSchema,
    qualifier: DeliverableQualifierSchema,
    qualifier_type: DeliverableQualifierTypeSchema,
    description: DeliverableDescriptionSchema,
    satisfied: DeliverableSatisfiedSchema,
    deliverable_date_time_satisfied: DeliverableDateTimeSatisfiedSchema,
    status: DeliverableStatusSchema,
    deliverable_date_time_status: DeliverableDateTimeStatusSchema,
    links: Type.Object({
        application_deliverables__modify: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    })
})

/**
* DESCRIPTION: Deliverables required for an application
*/
const ApplicationDeliverablesSchema = Type.Object({
    metadata: MetadataCollectionSchema,
    links: Type.Object({
        application_deliverables__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        application_deliverables__add: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    values: Type.Array(ApplicationDeliverableSchema)
})

/**
* DESCRIPTION: Elements required to perform an application action
* EXAMPLE: {
  deliverable_id: 'cea9a774-dfe8-4dfd-8a2a-bb2edc984407',
  action: 'Create',
  action_message: 'New Application Created'
}
*/
const ApplicationActionNewSchema = Type.Object({
    action: Type.String(),
    deliverable_id: Type.String(),
    action_message: Type.String()
})

/**
* DESCRIPTION: Application action
*/
const ApplicationActionSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    application_id: ApplicationIdSchema,
    applicant_id: ApplicantIdSchema,
    deliverable_id: DeliverableIdSchema,
    action: ActionSchema,
    action_results: ActionResultsSchema,
    action_message: ActionMessageSchema,
    action_by_id: ActionByIdSchema,
    action_date_time: ActionDateTimeSchema
})

/**
* DESCRIPTION: Actions performed on the application
*/
const ApplicationActionsSchema = Type.Object({
    metadata: MetadataCollectionSchema,
    links: Type.Object({
        application_actions__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        application_actions__submit: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        application_actions__reopen: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        application_actions__withdraw: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    values: Type.Array(ApplicationActionSchema)
})

/**
* DESCRIPTION: Elements required to add a new Application
* EXAMPLE: {
  applicant_id: '764634873',
  admit_period: '20185',
  admit_major: 'Open'
}
*/
const ApplicationNewSchema = Type.Object({
    applicant_id: Type.String(),
    admit_period: Type.String(),
    admit_major: Type.String(),
    applicant_type: Type.String()
})

/**
* DESCRIPTION: An Application
*/
const ApplicationSchema = Type.Object({
    application_actions: ApplicationActionsSchema,
    application_deliverables: ApplicationDeliverablesSchema,
    background_questions: BackgroundQuestionsSchema,
    basic: BasicSchema,
    biographical_classifications: BiographicalClassificationsSchema,
    college_summaries: CollegeSummariesSchema,
    endorsement: EndorsementSchema,
    gei_programs: GeiProgramsSchema,
    government_records: GovernmentRecordsSchema,
    high_school_summaries: HighSchoolSummariesSchema,
    institute_summaries: InstituteSummariesSchema,
    international_records: InternationalRecordsSchema,
    missions: MissionsSchema,
    personal_records: PersonalRecordsSchema,
    seminary_summaries: SeminarySummariesSchema,
    test_scores: TestScoresSchema,
    questions: QuestionsSchema
})

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
const ApplicationsSchema = Type.Object({
    metadata: MetadataTopLevelSchema,
    stats: StatsSchema,
    links: Type.Object({
        applications__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        applications__prev: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        applications__next: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        }),
        applications__create: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    values: Type.Array(ApplicationSchema)
})

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
const StatusSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    stats: StatsSchema,
    links: Type.Object({
        status__info: Type.Object({
            rel: Type.String(),
            href: Type.String(),
            method: Type.String()
        })
    }),
    trends: Type.Array(Type.Object({
        name: Type.String(),
        data: Type.Array(Type.Object({
            date: Type.String(),
            value: Type.String()
        }))
    }))
})

/**
* DESCRIPTION: A concept about which a claim may be made
* EXAMPLE: { id: 'age', type: 'integer', range: '0-120' }
*/
const ConceptSchema = Type.Object({
    id: Type.String(),
    type: Type.String(),
    range: Type.String()
})

/**
* DESCRIPTION: A list of concepts
*/
const ConceptsSchema = Type.Object({
    metadata: MetadataSimpleSchema,
    values: Type.Array(ConceptSchema)
})

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
const ClaimArrayResponseSchema = Type.Object({
    values: Type.Array(Type.Object({
        claim_id: Type.String(),
        validation_response: Type.Object({
            code: Type.Integer(),
            message: Type.String()
        })
    }))
})

/**
* DESCRIPTION: A claim for the engine to verify
* EXAMPLE: { concept: 'age', relationship: 'greater-than-or-equal', value: '21' }
*/
const ClaimSchema = Type.Object({
    concept: Type.String(),
    relationship: Type.String(),
    value: Type.String()
}, { additionalProperties: true })

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
const ClaimBodySchema = Type.Object({
    subject: Type.String(),
    qualifier: Type.String(),
    claims: Type.Array(ClaimSchema)
})

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
const ClaimArraySchema = Type.Object({
    values: Type.Array(Type.Object({
        claim_id: Type.String(),
        subject: Type.String(),
        qualifier: Type.String(),
        claims: Type.Array(ClaimSchema)
    }))
})

module.exports = {
    IncidentBodySchema, DecisionReasonValueArraySchema, NameSchema, 
    DescriptionSchema, AttributeStringSchema, IdUpdatedBySchema, 
    IdSubmittedBySchema, IdCreatedBySchema, DateTimeVerifiedSchema, 
    DateTimeUpdatedSchema, DateTimeSubmittedSchema, DateTimeReportedSchema, 
    DateTimeCreatedSchema, ApplicationIdSchema, ApplicantTypeSchema, 
    ApplicantIdSchema, AdmitPeriodSchema, AdmitMajorSchema, 
    SharedStartMonthSchema, SharedPhoneTextsOkSchema, SharedGradeSchema, 
    SharedGraduationStatusSchema, SharedEndMonthSchema, SharedCreditHoursGradedSchema, 
    SharedAcademicYearSchema, TestVersionSchema, TestNameSchema, 
    TestDateSchema, TestCompositeScoreSchema, TestComponentScoreSchema, 
    TestComponentNameSchema, SeminaryYearsCompletedSchema, SeminaryTypeSchema, 
    SeminaryTermSchema, SeminaryTeacherEmailSchema, SeminaryTeacherNameSchema, 
    SeminarySessionsSchema, SeminaryRecognitionSchema, SeminaryReadingSchema, 
    SeminaryGradeSchema, SeminaryExplanationSchema, SeminaryCreditSchema, 
    SeminaryClassSchema, SeminaryAttendancePercentageSchema, SeminaryAttendanceSchema, 
    SeminaryAbsencesSchema, QuestionUuidSchema, QuestionTypeSchema, 
    QuestionGroupOrdinalSchema, QuestionGroupIdSchema, QuestionGroupHeadingSchema, 
    QuestionElementTypeSchema, QuestionElementResponseRangeSchema, QuestionElementResponseSchema, 
    QuestionElementPromptSchema, QuestionElementOrdinalSchema, QuestionElementLimitSchema, 
    QuestionElementIdSchema, QuestionElementExplanationSchema, PersonalSexSchema, 
    PersonalReligionTenureSchema, PersonalReligionCodeSchema, PersonalMaritalStatusSchema, 
    PersonalDateOfBirthSchema, MissionTypeSchema, MissionServiceSchema, 
    MissionNameSchema, MissionLanguageSchema, IntlVisaChangePlanSchema, 
    IntlCurrentUsResidentSchema, IntlAlienNumberSchema, InstituteForCreditSchema, 
    InstituteExplanationSchema, InstituteClassSchema, InstituteAttendanceSchema, 
    HighSchoolTypeSchema, HighSchoolTranscriptSourceSchema, HighSchoolSubjectSchema, 
    HighSchoolStateSchema, HighSchoolRepeatedFlagSchema, HighSchoolNonaccreditedStatementSchema, 
    HighSchoolLinkToSecondaryDocumentImageSchema, HighSchoolLinkToDocumentImageSchema, HighSchoolGraduationDateSchema, 
    HighSchoolGradingTermsSchema, HighSchoolGradeLevelSchema, HighSchoolGradeFinalSchema, 
    HighSchoolGpaCalculatedSchema, HighSchoolGpaSchema, HighSchoolCreditsSchema, 
    HighSchoolCourseNameSchema, HighSchoolCountrySchema, HighSchoolConcurrentEnrollmentSchema, 
    HighSchoolCitySchema, HighSchoolApIbHalfClassesSchema, HighSchoolApIbFullClassesSchema, 
    HighSchoolApIbFlagSchema, HighSchoolSchema, GovVisaTypeSourceSchema, 
    GovVisaTypeSchema, GovCitizenshipStatusSchema, GovCitizenshipCountryCodeSchema, 
    GovBirthCountryCodeSchema, GovBirthCitySchema, GeiProgramsSrsSiteSchema, 
    GeiProgramsSrsFacilitatorSchema, GeiProgramsSrsCertificatesSchema, GeiProgramsPwSiteSchema, 
    GeiProgramsPwGpaSchema, GeiProgramsPwCreditsSchema, GeiProgramsPwCompletionSchema, 
    EndorsementTypeSchema, EndorsementStatusSchema, EndorsementDateSchema, 
    DeliverableViewIdxSchema, DeliverableTypeSchema, DeliverableSubtypeSchema, 
    DeliverableStatusSchema, DeliverableSatisfiedSchema, DeliverableQualifierTypeSchema, 
    DeliverableQualifierSchema, DeliverableNameDisplaySchema, DeliverableNameSchema, 
    DeliverableIdSchema, DeliverableDescriptionSchema, DeliverableControllerIdxSchema, 
    DeliverableDateTimeStatusSchema, DeliverableDateTimeSatisfiedSchema, ContactStateCodeSchema, 
    ContactPostalCodeSchema, ContactCountryCodeSchema, ContactCitySchema, 
    ContactAddressLine5Schema, ContactAddressLine4Schema, ContactAddressLine3Schema, 
    ContactAddressLine2Schema, ContactAddressLine1Schema, CollegeDegreeMajorSchema, 
    CollegeDegreeDateSchema, CollegeDegreeSchema, CollegeGpaVerifiedSchema, 
    CollegeGpaSchema, CollegeSchema, CollegeCumulativeGpaSchema, 
    CollegeCumulativeCreditSchema, BioSingleParentSchema, BioResidingWithSchema, 
    BioFamilyIncomeSchema, BioMothersLevelOfEducationSchema, BioHispanicFlagSchema, 
    BioFathersLevelOfEducationSchema, BgUniversityDisciplineExplanationSchema, BgUniversityDisciplineSchema, 
    BgSexRegistryExplanationSchema, BgSexRegistrySchema, BgPluralMarriageExplanationSchema, 
    BgPluralMarriageSchema, BgCriminalConvictionsSchema, BgConvictionRecordSchema, 
    BasicSecondaryPhoneNumberSchema, BasicPhoneNumberSchema, BasicSecondaryEmailAddressSchema, 
    BasicEmailAddressSchema, BasicSchoolPreferenceOrderSchema, BasicSurnameSchema, 
    BasicSuffixSchema, BasicRestOfNameSchema, BasicPrimaryLanguageSchema, 
    BasicPreviousNameSchema, BasicPreferredNameSchema, BasicNetIdSchema, 
    BasicMiddleNameSchema, BasicInstitutionIdSchema, BasicHomeTownSchema, 
    BasicHomeStateSchema, BasicHomeCountySchema, BasicHomeCountrySchema, 
    BasicFirstNameSchema, BasicDecisionDateTimeSchema, BasicDecisionTemplateIdSchema, 
    BasicDecisionQualifierSchema, BasicDecisionSchema, BasicApplicationStatusDateTimeSchema, 
    BasicApplicationStatusSchema, BasicAgreementFinancialResponsibilityDateTimeSchema, BasicAgreementInformationReleaseDateTimeSchema, 
    ActionDateTimeSchema, ActionByIdSchema, ActionResultsSchema, 
    ActionMessageSchema, ActionSchema, MetadataSimpleSchema, 
    DecisionReasonsSchema, MetadataCollectionSchema, MetadataTopLevelSchema, 
    ErrorResponseSchema, SeminaryTermInfoSchema, SeminaryClassDataSchema, 
    QuestionGroupSchema, QuestionElementSchema, QuestionAnswerSchema, 
    RacialCategoriesSchema, LanguagesSchema, HighSchoolNonaccreditedWorkInfoSchema, 
    HighSchoolCourseInfoSchema, InternationalRecordsModifySchema, MissionsModifySchema, 
    HighSchoolNonaccreditedWorkInfoModifySchema, HighSchoolCourseInfoModifySchema, HighSchoolSummaryModifySchema, 
    GovernmentRecordsModifySchema, GeiProgramModifySchema, ContactModifySchema, 
    CollegeSummaryModifySchema, BiographicalClassificationsModifySchema, BackgroundQuestionsModifySchema, 
    TestScoreSchema, TestScoresSchema, StatsSchema, 
    SeminarySummariesSchema, ReportsMetadataSchema, QuestionSchema, 
    QuestionsSchema, PersonalRecordsSchema, MissionsSchema, 
    InternationalRecordsSchema, InstituteClassDataSchema, InstituteSummariesSchema, 
    HighSchoolSummarySchema, HighSchoolSummariesSchema, GovernmentRecordsSchema, 
    GeiProgramsSchema, EndorsementSchema, CollegeSummarySchema, 
    CollegeSummariesSchema, BiographicalClassificationsSchema, BasicSchema, 
    BackgroundQuestionsSchema, ApplicationDeliverableModifySchema, ApplicationDeliverableSchema, 
    ApplicationDeliverablesSchema, ApplicationActionNewSchema, ApplicationActionSchema, 
    ApplicationActionsSchema, ApplicationNewSchema, ApplicationSchema, 
    ApplicationsSchema, StatusSchema, ConceptSchema, 
    ConceptsSchema, ClaimArrayResponseSchema, ClaimSchema, 
    ClaimBodySchema, ClaimArraySchema
}