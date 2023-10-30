
const conceptsTemplate = function (templateData) {
    return {
            values: []
    }
}
const errorResponseTemplate = function (templateData) {
    return {
    }
}
const claimArrayResponseTemplate = function (templateData) {
    return {
            values: []
    }
}
const reportsMetadataTemplate = function (templateData) {
    return {
            values: []
    }
}
const statusTemplate = function (templateData) {
    return {
            links: {
                status__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/status`,
                    method: `GET`
            }
        },
            trends: [],
            stats: []
    }
}
const decisionReasonsTemplate = function (templateData) {
    return {
            values: {
                admitReasons: [],
                denyReasons: [],
                holdReasons: [],
                archiveReasons: []
        }
    }
}
const applicationsTemplate = function (templateData) {
    return {
            links: {
                applications__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications?page_start=${templateData.page_start}&page_size=${templateData.page_size}`,
                    method: `GET`
            },
                applications__prev: {
                    rel: `applications__prev`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications?page_start=${templateData.page_start}&page_size=${templateData.page_size}`,
                    method: `GET`
            },
                applications__next: {
                    rel: `applications__next`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications?page_start=${templateData.page_start}&page_size=${templateData.page_size}`,
                    method: `GET`
            },
                applications__create: {
                    rel: `applications__create`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications`,
                    method: `POST`
            }
        },
            values: [],
            stats: []
    }
}
const applicationTemplate = function (templateData) {
    return {
            application_actions: {
                links: {
                    application_actions__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                        method: `GET`
                },
                    application_actions__submit: {
                        rel: `application_actions__submit`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                        method: `POST`
                },
                    application_actions__reopen: {
                        rel: `application_actions__reopen`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                        method: `POST`
                },
                    application_actions__withdraw: {
                        rel: `application_actions__withdraw`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                        method: `POST`
                }
            },
                values: []
        },
            application_deliverables: {
                links: {
                    application_deliverables__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_deliverables`,
                        method: `GET`
                },
                    application_deliverables__add: {
                        rel: `application_deliverables__add`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_deliverables`,
                        method: `POST`
                }
            },
                values: []
        },
            background_questions: {
                links: {
                    background_questions__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/background_questions`,
                        method: `GET`
                },
                    background_questions__modify: {
                        rel: `background_questions__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/background_questions`,
                        method: `PUT`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                conviction_record: {
                    value: templateData.conviction_record,
                    api_type: `modifiable`,
                    display_label: `Have you ever been convicted of a crime?`
            },
                criminal_convictions: [],
                plural_marriage: {
                    value: templateData.plural_marriage,
                    api_type: `modifiable`,
                    display_label: `Are you affiliated with any group that currently advocates plural marriage?`
            },
                plural_marriage_explanation: {
                    value: templateData.plural_marriage_explanation,
                    api_type: `modifiable`,
                    display_label: `Explanation`
            },
                sex_registry: {
                    value: templateData.sex_registry,
                    api_type: `modifiable`,
                    display_label: `Have you ever been listed on a sex offender registry?`
            },
                sex_registry_explanation: {
                    value: templateData.sex_registry_explanation,
                    api_type: `modifiable`,
                    display_label: `Explanation`
            },
                university_discipline: {
                    value: templateData.university_discipline,
                    api_type: `modifiable`,
                    display_label: `Have you ever been disciplined by a college or university?`
            },
                university_discipline_explanation: {
                    value: templateData.university_discipline_explanation,
                    api_type: `modifiable`,
                    display_label: `Explanation`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            basic: {
                links: {
                    applications__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}`,
                        method: `GET`
                },
                    applications__modify: {
                        rel: `applications__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}`,
                        method: `PUT`
                },
                    applications__remove: {
                        rel: `applications__remove`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}`,
                        method: `DELETE`
                },
                    contact__modify: {
                        rel: `contact__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/contact`,
                        method: `PUT`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                institution_id: {
                    value: templateData.institution_id,
                    api_type: `system`
            },
                net_id: {
                    value: templateData.net_id,
                    api_type: `system`
            },
                admit_period: {
                    value: templateData.admit_period,
                    api_type: `modifiable`,
                    description: templateData.admit_period_description,
                    long_description: templateData.admit_period_long_description,
                    domain: `https://api.byu.edu/cesapi/meta/admit_periods/v1?ces_school=${templateData.ces_school}`,
                    display_label: `Admit Period`
            },
                admit_major: {
                    value: templateData.admit_major,
                    api_type: `read-only`,
                    description: templateData.admit_major_description,
                    domain: `https://api.byu.edu/cesapi/meta/admit_majors/v1?ces_school=${templateData.ces_school}`,
                    display_label: `Major`
            },
                applicant_type: {
                    value: templateData.applicant_type,
                    api_type: `read-only`,
                    description: templateData.applicant_type_description,
                    domain: `https://api.byu.edu/cesapi/meta/applicant_types/v1?ces_school=${templateData.ces_school}`,
                    display_label: `Applicant Type`
            },
                primary_language: {
                    value: templateData.primary_language,
                    api_type: `modifiable`,
                    display_label: `Primary Language`
            },
                first_name: {
                    value: templateData.first_name,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `First Name`
            },
                middle_name: {
                    value: templateData.middle_name,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Middle Name`
            },
                rest_of_name: {
                    value: templateData.rest_of_name,
                    api_type: `derived`,
                    display_label: `First/Middle Names`
            },
                surname: {
                    value: templateData.surname,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Surname`
            },
                suffix: {
                    value: templateData.suffix,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Name Suffix`
            },
                preferred_name: {
                    value: templateData.preferred_name,
                    api_type: `derived`,
                    display_label: `Preferred Name`
            },
                previous_name: {
                    value: templateData.previous_name,
                    api_type: `modifiable`,
                    display_label: `Previous/Maiden Name`
            },
                address_line_1: {
                    value: templateData.address_line_1,
                    api_type: `modifiable`,
                    display_label: `Address Line 1`
            },
                address_line_2: {
                    value: templateData.address_line_2,
                    api_type: `modifiable`,
                    display_label: `Address Line 2`
            },
                address_line_3: {
                    value: templateData.address_line_3,
                    api_type: `modifiable`,
                    display_label: `Address Line 3`
            },
                address_line_4: {
                    value: templateData.address_line_4,
                    api_type: `modifiable`,
                    display_label: `Address Line 4`
            },
                address_line_5: {
                    value: templateData.address_line_5,
                    api_type: `modifiable`,
                    display_label: `Address Line 5`
            },
                city: {
                    value: templateData.city,
                    api_type: `modifiable`,
                    display_label: `City`
            },
                country_code: {
                    value: templateData.country_code,
                    api_type: `modifiable`,
                    description: templateData.country_code_description,
                    domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                    display_label: `Country Code`
            },
                postal_code: {
                    value: templateData.postal_code,
                    api_type: `modifiable`,
                    display_label: `Zip Code`
            },
                state_code: {
                    value: templateData.state_code,
                    api_type: `modifiable`,
                    description: templateData.state_code_description,
                    domain: `https://api.byu.edu/byuapi/meta/state_codes/v1`,
                    display_label: `State`
            },
                email_address: {
                    value: templateData.email_address,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Email`
            },
                phone_number: {
                    value: templateData.phone_number,
                    api_type: `modifiable`,
                    key: true,
                    display_label: `Phone Number`
            },
                secondary_email_address: {
                    value: templateData.secondary_email_address,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Email`
            },
                secondary_phone_number: {
                    value: templateData.secondary_phone_number,
                    api_type: `modifiable`,
                    display_label: `Phone Number`
            },
                phone_texts_ok: {
                    value: templateData.phone_texts_ok,
                    api_type: `modifiable`,
                    display_label: `Texts OK`
            },
                home_town: {
                    value: templateData.home_town,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Home Town`
            },
                home_county: {
                    value: templateData.home_county,
                    api_type: `modifiable`,
                    display_label: `Home County`
            },
                home_state: {
                    value: templateData.home_state,
                    description: templateData.home_state_description,
                    domain: `https://api.byu.edu/byuapi/meta/state_codes/v1`,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Home State`
            },
                home_country: {
                    value: templateData.home_country,
                    description: templateData.home_country_description,
                    domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Home Country`
            },
                information_release: {
                    value: templateData.information_release,
                    api_type: `read-only`,
                    display_label: `Information Release Agreement`
            },
                financial_responsibility: {
                    value: templateData.financial_responsibility,
                    api_type: `read-only`,
                    display_label: `Financial Responsibility Agreement`
            },
                school_preference_order: {
                    value: templateData.school_preference_order,
                    api_type: `modifiable`,
                    display_label: `CES School Preference Order`
            },
                decision: {
                    value: templateData.decision,
                    api_type: `derived`,
                    description: templateData.decision_description,
                    domain: `https://api.byu.edu/cesapi/meta/decision/v1`,
                    display_label: `Application Decision`
            },
                decision_qualifier: {
                    value: templateData.decision_qualifier,
                    api_type: `derived`,
                    display_label: `Application Decision Qualifier`
            },
                decision_template_id: {
                    value: templateData.decision_template_id,
                    api_type: `derived`,
                    domain: `https://api.byu.edu/cesapi/meta/decision/v1`,
                    display_label: `Application Status`
            },
                decision_date_time: {
                    value: templateData.decision_date_time,
                    api_type: `derived`,
                    domain: `https://api.byu.edu/cesapi/meta/decision/v1`,
                    display_label: `Application Status`
            },
                application_status: {
                    value: templateData.application_status,
                    api_type: `derived`,
                    description: templateData.application_status_description,
                    domain: `https://api.byu.edu/cesapi/meta/application_status/v1`,
                    display_label: `Application Status`
            },
                application_status_date_time: {
                    value: templateData.application_status_date_time,
                    api_type: `system`,
                    display_label: `Date/Time that current Application Status was determined`
            },
                created_by_id: {
                    value: templateData.created_by_id,
                    description: templateData.created_by_id_description,
                    api_type: `system`,
                    display_label: `Created by`
            },
                created_date_time: {
                    value: templateData.created_date_time,
                    api_type: `system`,
                    display_label: `Created`
            },
                submitted_by_id: {
                    value: templateData.submitted_by_id,
                    description: templateData.submitted_by_id_description,
                    api_type: `system`,
                    display_label: `Submitted By`
            },
                submitted_date_time: {
                    value: templateData.submitted_date_time,
                    api_type: `system`,
                    display_label: `Application submitted when?`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            biographical_classifications: {
                links: {
                    biographical_classifications__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/biographical_classifications`,
                        method: `GET`
                },
                    biographical_classifications__modify: {
                        rel: `biographical_classifications__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/biographical_classifications`,
                        method: `PUT`
                },
                    ethnicities__modify: {
                        rel: `ethnicities__modify`,
                        href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}/ethnicities`,
                        method: `GET`
                },
                    languages__modify: {
                        rel: `languages__modify`,
                        href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}/languages`,
                        method: `GET`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                hispanic_flag: {
                    value: templateData.hispanic_flag,
                    api_type: `modifiable`,
                    display_label: `Do you consider yourself Hispanic/Latino?`
            },
                racial_categories: [],
                languages: [],
                mothers_level_of_education: {
                    value: templateData.mothers_level_of_education,
                    api_type: `modifiable`,
                    domain: `https://api.byu.edu/cesapi/meta/levels_of_education/v1`,
                    display_label: `Mother's Level of Education`
            },
                fathers_level_of_education: {
                    value: templateData.fathers_level_of_education,
                    api_type: `modifiable`,
                    domain: `https://api.byu.edu/cesapi/meta/levels_of_education/v1`,
                    display_label: `Father's Level of Education`
            },
                family_income: {
                    value: templateData.family_income,
                    api_type: `modifiable`,
                    domain: `https://api.byu.edu/cesapi/meta/family_income_levels/v1`,
                    display_label: `Family Income`
            },
                residing_with: {
                    value: templateData.residing_with,
                    api_type: `modifiable`,
                    domain: `https://api.byu.edu/cesapi/meta/residing_with_options/v1`,
                    display_label: `Residing With`
            },
                single_parent: {
                    value: templateData.single_parent,
                    api_type: `modifiable`,
                    display_label: `Single Parent`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            college_summaries: {
                links: {
                    college_summaries__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/college_summaries`,
                        method: `GET`
                }
            },
                values: [],
                cumulative_credit: {
                    value: templateData.cumulative_credit,
                    api_type: `derived`,
                    display_label: `Cumulative College Credit`
            },
                cumulative_gpa: {
                    value: templateData.cumulative_gpa,
                    api_type: `derived`,
                    display_label: `Cumulative College GPA`
            }
        },
            endorsement: {
                links: {
                    endorsement__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/endorsement`,
                        method: `GET`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                date: {
                    value: templateData.date,
                    api_type: `system`,
                    display_label: `Endorsement Status Date`
            },
                status: {
                    value: templateData.status,
                    api_type: `system`,
                    display_label: `Endorsement Status`
            },
                type: {
                    value: templateData.type,
                    api_type: `system`,
                    display_label: `Endorsement Type`
            }
        },
            gei_programs: {
                links: {
                    gei_programs__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/gei_programs`,
                        method: `GET`
                },
                    gei_programs__modify: {
                        rel: `gei_programs__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/gei_programs`,
                        method: `PUT`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                pw_completion: {
                    value: templateData.pw_completion,
                    api_type: `system`,
                    display_label: `Pathway Connect Completion`
            },
                pw_credits: {
                    value: templateData.pw_credits,
                    api_type: `system`,
                    display_label: `Pathway Connect Credits`
            },
                pw_gpa: {
                    value: templateData.pw_gpa,
                    api_type: `system`,
                    display_label: `Pathway Connect GPA`
            },
                pw_site: {
                    value: templateData.pw_site,
                    api_type: `system`,
                    display_label: `Pathway Connect Site`
            },
                srs_certificates: {
                    value: templateData.srs_certificates,
                    api_type: `system`,
                    display_label: `SRS Certificates`
            },
                srs_facilitator: {
                    value: templateData.srs_facilitator,
                    api_type: `system`,
                    display_label: `SRS Facilitator`
            },
                srs_site: {
                    value: templateData.srs_site,
                    api_type: `system`,
                    display_label: `SRS Site`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            government_records: {
                links: {
                    government_records__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/government_records`,
                        method: `GET`
                },
                    government_records__modify: {
                        rel: `government_records__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/government_records`,
                        method: `PUT`
                },
                    persons__info: {
                        rel: `persons__info`,
                        href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}`,
                        method: `GET`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                birth_city: {
                    value: templateData.birth_city,
                    api_type: `related`,
                    related_resource: `applicants`,
                    display_label: `Birth City`
            },
                birth_country_code: {
                    value: templateData.birth_country_code,
                    description: templateData.birth_country_code_description,
                    domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Birth Country Code`
            },
                citizenship_country_code: {
                    value: templateData.citizenship_country_code,
                    description: templateData.citizenship_country_code_description,
                    domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Citizenship Country Code`
            },
                citizenship_status: {
                    value: templateData.citizenship_status,
                    description: templateData.citizenship_status_description,
                    domain: `https://api.byu.edu/byuapi/meta/citizenship_status/v1`,
                    api_type: `related`,
                    related_resource: `applicants`,
                    display_label: `Citizenship Status`
            },
                visa_type: {
                    value: templateData.visa_type,
                    domain: `https://api.byu.edu/byuapi/meta/visa_types/v1`,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Visa Type`
            },
                visa_type_source: {
                    value: templateData.visa_type_source,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Visa Verifying Entity`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            high_school_summaries: {
                links: {
                    high_school_summaries__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/high_school_summaries`,
                        method: `GET`
                }
            },
                values: []
        },
            institute_summaries: {
                links: {
                    institute_summaries__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/institute_summaries`,
                        method: `GET`
                },
                    institute_summaries__modify: {
                        rel: `institute_summaries__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/institute_summaries`,
                        method: `PUT`
                },
                    institute_summaries__remove: {
                        rel: `institute_summaries__remove`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/institute_summaries`,
                        method: `DELETE`
                }
            },
                institute_classes: [],
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                institute_attendance: {
                    value: templateData.institute_attendance,
                    api_type: `read-only`,
                    display_label: `Years Attended`
            },
                institute_explanation: {
                    value: templateData.institute_explanation,
                    api_type: `read-only`,
                    display_label: `Explain your Institute Participation`
            },
                date_time_reported: {
                    value: templateData.date_time_reported,
                    api_type: `system`,
                    display_label: `Reported`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            international_records: {
                links: {
                    international_records__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/international_records`,
                        method: `GET`
                },
                    international_records__modify: {
                        rel: `international_records__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/international_records`,
                        method: `PUT`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                alien_number: {
                    value: templateData.alien_number,
                    api_type: `read-only`,
                    display_label: `Alien or USCIS Number`
            },
                current_us_resident: {
                    value: templateData.current_us_resident,
                    api_type: `read-only`,
                    display_label: `Current US Resident`
            },
                visa_change_plan: {
                    value: templateData.visa_change_plan,
                    api_type: `read-only`,
                    display_label: `Will you change the Visa if admitted?`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            missions: {
                links: {
                    missions__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/missions`,
                        method: `GET`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                mission_service: {
                    value: templateData.mission_service,
                    api_type: `read-only`,
                    display_label: `Have you served or are you currently serving a mission?`
            },
                mission_name: {
                    value: templateData.mission_name,
                    domain: `https://api.byu.edu/byuapi/meta/mission_names/v1`,
                    api_type: `read-only`,
                    display_label: `Mission Name`
            },
                mission_language: {
                    value: templateData.mission_language,
                    description: templateData.mission_language_description,
                    domain: `https://api.byu.edu/byuapi/meta/languages/v1`,
                    api_type: `read-only`,
                    display_label: `Mission Language`
            },
                start_month: {
                    value: templateData.start_month,
                    api_type: `read-only`,
                    display_label: `Start Month`
            },
                end_month: {
                    value: templateData.end_month,
                    api_type: `read-only`,
                    display_label: `End Month`
            },
                mission_type: {
                    value: templateData.mission_type,
                    domain: `https://api.byu.edu/byuapi/meta/mission_types/v1`,
                    api_type: `read-only`,
                    display_label: `Mission Type`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            personal_records: {
                links: {
                    personal_records__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/personal_records`,
                        method: `GET`
                },
                    personal_records__modify: {
                        rel: `personal_records__modify`,
                        href: `https://api.byu.edu/byuapi/persons/v1/${templateData.application_id}/personal_records`,
                        method: `PUT`
                },
                    persons__info: {
                        rel: `persons__info`,
                        href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}`,
                        method: `GET`
                }
            },
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                date_of_birth: {
                    value: templateData.date_of_birth,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Date of birth`
            },
                marital_status: {
                    value: templateData.marital_status,
                    description: templateData.marital_status_description,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Marital Status`
            },
                religion_code: {
                    value: templateData.religion_code,
                    description: templateData.religion_code_description,
                    domain: `https://api.byu.edu/byuapi/meta/religions/v1`,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Religion`
            },
                religion_tenure: {
                    value: templateData.religion_tenure,
                    api_type: `derived`,
                    display_label: `How long have you been a member of the church?`
            },
                sex: {
                    value: ``,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Sex`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            seminary_summaries: {
                links: {
                    seminary_summaries__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/seminary_summaries`,
                        method: `GET`
                },
                    seminary_summaries__modify: {
                        rel: `seminary_summaries__modify`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/seminary_summaries`,
                        method: `PUT`
                },
                    seminary_summaries__remove: {
                        rel: `seminary_summaries__remove`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/seminary_summaries`,
                        method: `DELETE`
                }
            },
                seminary_classes: [],
                application_id: {
                    value: templateData.application_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Application UUID`
            },
                applicant_id: {
                    value: templateData.applicant_id,
                    api_type: `system`,
                    key: true,
                    display_label: `Applicant ID`
            },
                seminary_type: {
                    value: templateData.seminary_type,
                    description: templateData.seminary_type_description,
                    domain: `https://api.byu.edu/byuapi/meta/seminary_types`,
                    api_type: `read-only`,
                    display_label: `Seminary Type`
            },
                years_completed: {
                    value: templateData.years_completed,
                    api_type: `read-only`,
                    display_label: `Years Completed`
            },
                attendance_percentage: {
                    value: templateData.attendance_percentage,
                    api_type: `read-only`,
                    display_label: `Attendance`
            },
                graduation_status: {
                    value: templateData.graduation_status,
                    api_type: `modifiable`,
                    display_label: `Have you or will you graduate?`
            },
                seminary_explanation: {
                    value: templateData.seminary_explanation,
                    api_type: `modifiable`,
                    display_label: `Explain your Seminary Participation`
            },
                teacher_name: {
                    value: templateData.teacher_name,
                    api_type: `modifiable`,
                    display_label: `Seminary Teacher`
            },
                teacher_email: {
                    value: templateData.teacher_email,
                    api_type: `related`,
                    related_resource: `persons`,
                    display_label: `Email`
            },
                date_time_reported: {
                    value: templateData.date_time_reported,
                    api_type: `system`,
                    display_label: `Reported`
            },
                updated_by_id: {
                    value: templateData.updated_by_id,
                    description: templateData.updated_by_id_description,
                    api_type: `system`,
                    display_label: `Updated by`
            },
                updated_date_time: {
                    value: templateData.updated_date_time,
                    api_type: `system`,
                    display_label: `Updated`
            }
        },
            test_scores: {
                links: {
                    test_scores__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/test_scores`,
                        method: `GET`
                }
            },
                values: []
        },
            questions: {
                links: {
                    questions__info: {
                        rel: `self`,
                        href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/questions`,
                        method: `GET`
                }
            },
                values: []
        }
    }
}
const applicationActionsTemplate = function (templateData) {
    return {
            links: {
                application_actions__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                    method: `GET`
            },
                application_actions__submit: {
                    rel: `application_actions__submit`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                    method: `POST`
            },
                application_actions__reopen: {
                    rel: `application_actions__reopen`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                    method: `POST`
            },
                application_actions__withdraw: {
                    rel: `application_actions__withdraw`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_actions`,
                    method: `POST`
            }
        },
            values: []
    }
}
const applicationActionTemplate = function (templateData) {
    return {
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            deliverable_id: {
                value: templateData.deliverable_id,
                api_type: `system`,
                key: true,
                display_label: `Deliverable ID`
        },
            action: {
                value: templateData.action,
                api_type: `read-only`,
                display_label: `Application action`
        },
            action_results: {
                value: templateData.action_results,
                api_type: `read-only`,
                description: templateData.action_results_description,
                display_label: `Application action results`
        },
            action_message: {
                value: templateData.action_message,
                api_type: `read-only`,
                display_label: `Notes on application action`
        },
            action_by_id: {
                value: templateData.action_by_id,
                api_type: `system`,
                description: templateData.action_by_id_description,
                display_label: `Action by`
        },
            action_date_time: {
                value: templateData.action_date_time,
                api_type: `system`,
                display_label: `Action date`
        }
    }
}
const applicationDeliverablesTemplate = function (templateData) {
    return {
            links: {
                application_deliverables__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_deliverables`,
                    method: `GET`
            },
                application_deliverables__add: {
                    rel: `application_deliverables__add`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_deliverables`,
                    method: `POST`
            }
        },
            values: []
    }
}
const applicationDeliverableTemplate = function (templateData) {
    return {
            links: {
                application_deliverables__modify: {
                    rel: `application_deliverables__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/application_deliverables/${templateData.deliverable_id}`,
                    method: `PUT`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            name: {
                value: templateData.name,
                api_type: `system`,
                display_label: `Name`
        },
            name_display: {
                value: templateData.name_display,
                api_type: `system`,
                display_label: `Display name`
        },
            deliverable_id: {
                value: templateData.deliverable_id,
                api_type: `system`,
                key: true,
                display_label: `Deliverable ID`
        },
            controller_idx: {
                value: templateData.controller_idx,
                api_type: `system`
        },
            view_idx: {
                value: templateData.view_idx,
                api_type: `system`
        },
            type: {
                value: templateData.type,
                api_type: `read-only`,
                description: templateData.type_description,
                domain: `https://api.byu.edu/cesapi/meta/application_deliverables/v1`,
                display_label: `Deliverable type`
        },
            subtype: {
                value: templateData.subtype,
                api_type: `read-only`,
                description: templateData.subtype_description,
                domain: `https://api.byu.edu/cesapi/meta/application_deliverables/v1`,
                display_label: `Deliverable subtype`
        },
            qualifier: {
                value: templateData.qualifier,
                api_type: `read-only`,
                display_label: `Deliverable Qualifier`
        },
            qualifier_type: {
                value: templateData.qualifier_type,
                api_type: `system`,
                display_label: `How is the deliverable qualifier used?`
        },
            description: {
                value: templateData.description,
                api_type: `read-only`,
                display_label: `Deliverable Description`
        },
            satisfied: {
                value: templateData.satisfied,
                api_type: `system`,
                display_label: `Deliverable Satisfied?`
        },
            deliverable_date_time_satisfied: {
                value: templateData.deliverable_date_time_satisfied,
                api_type: `system`,
                display_label: `Date the deliverable was satisfied`
        },
            status: {
                value: templateData.status,
                api_type: `read-only`,
                display_label: `Status`
        },
            deliverable_date_time_status: {
                value: templateData.deliverable_date_time_status,
                api_type: `read-only`,
                display_label: `Date the status of the deliverable last changed`
        }
    }
}
const backgroundQuestionsTemplate = function (templateData) {
    return {
            links: {
                background_questions__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/background_questions`,
                    method: `GET`
            },
                background_questions__modify: {
                    rel: `background_questions__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/background_questions`,
                    method: `PUT`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            conviction_record: {
                value: templateData.conviction_record,
                api_type: `modifiable`,
                display_label: `Have you ever been convicted of a crime?`
        },
            criminal_convictions: [],
            plural_marriage: {
                value: templateData.plural_marriage,
                api_type: `modifiable`,
                display_label: `Are you affiliated with any group that currently advocates plural marriage?`
        },
            plural_marriage_explanation: {
                value: templateData.plural_marriage_explanation,
                api_type: `modifiable`,
                display_label: `Explanation`
        },
            sex_registry: {
                value: templateData.sex_registry,
                api_type: `modifiable`,
                display_label: `Have you ever been listed on a sex offender registry?`
        },
            sex_registry_explanation: {
                value: templateData.sex_registry_explanation,
                api_type: `modifiable`,
                display_label: `Explanation`
        },
            university_discipline: {
                value: templateData.university_discipline,
                api_type: `modifiable`,
                display_label: `Have you ever been disciplined by a college or university?`
        },
            university_discipline_explanation: {
                value: templateData.university_discipline_explanation,
                api_type: `modifiable`,
                display_label: `Explanation`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const biographicalClassificationsTemplate = function (templateData) {
    return {
            links: {
                biographical_classifications__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/biographical_classifications`,
                    method: `GET`
            },
                biographical_classifications__modify: {
                    rel: `biographical_classifications__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/biographical_classifications`,
                    method: `PUT`
            },
                ethnicities__modify: {
                    rel: `ethnicities__modify`,
                    href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}/ethnicities`,
                    method: `GET`
            },
                languages__modify: {
                    rel: `languages__modify`,
                    href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}/languages`,
                    method: `GET`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            hispanic_flag: {
                value: templateData.hispanic_flag,
                api_type: `modifiable`,
                display_label: `Do you consider yourself Hispanic/Latino?`
        },
            racial_categories: [],
            languages: [],
            mothers_level_of_education: {
                value: templateData.mothers_level_of_education,
                api_type: `modifiable`,
                domain: `https://api.byu.edu/cesapi/meta/levels_of_education/v1`,
                display_label: `Mother's Level of Education`
        },
            fathers_level_of_education: {
                value: templateData.fathers_level_of_education,
                api_type: `modifiable`,
                domain: `https://api.byu.edu/cesapi/meta/levels_of_education/v1`,
                display_label: `Father's Level of Education`
        },
            family_income: {
                value: templateData.family_income,
                api_type: `modifiable`,
                domain: `https://api.byu.edu/cesapi/meta/family_income_levels/v1`,
                display_label: `Family Income`
        },
            residing_with: {
                value: templateData.residing_with,
                api_type: `modifiable`,
                domain: `https://api.byu.edu/cesapi/meta/residing_with_options/v1`,
                display_label: `Residing With`
        },
            single_parent: {
                value: templateData.single_parent,
                api_type: `modifiable`,
                display_label: `Single Parent`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const basicTemplate = function (templateData) {
    return {
            links: {
                applications__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}`,
                    method: `GET`
            },
                applications__modify: {
                    rel: `applications__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}`,
                    method: `PUT`
            },
                applications__remove: {
                    rel: `applications__remove`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}`,
                    method: `DELETE`
            },
                contact__modify: {
                    rel: `contact__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/contact`,
                    method: `PUT`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            institution_id: {
                value: templateData.institution_id,
                api_type: `system`
        },
            net_id: {
                value: templateData.net_id,
                api_type: `system`
        },
            admit_period: {
                value: templateData.admit_period,
                api_type: `modifiable`,
                description: templateData.admit_period_description,
                long_description: templateData.admit_period_long_description,
                domain: `https://api.byu.edu/cesapi/meta/admit_periods/v1?ces_school=${templateData.ces_school}`,
                display_label: `Admit Period`
        },
            admit_major: {
                value: templateData.admit_major,
                api_type: `read-only`,
                description: templateData.admit_major_description,
                domain: `https://api.byu.edu/cesapi/meta/admit_majors/v1?ces_school=${templateData.ces_school}`,
                display_label: `Major`
        },
            applicant_type: {
                value: templateData.applicant_type,
                api_type: `read-only`,
                description: templateData.applicant_type_description,
                domain: `https://api.byu.edu/cesapi/meta/applicant_types/v1?ces_school=${templateData.ces_school}`,
                display_label: `Applicant Type`
        },
            primary_language: {
                value: templateData.primary_language,
                api_type: `modifiable`,
                display_label: `Primary Language`
        },
            first_name: {
                value: templateData.first_name,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `First Name`
        },
            middle_name: {
                value: templateData.middle_name,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Middle Name`
        },
            rest_of_name: {
                value: templateData.rest_of_name,
                api_type: `derived`,
                display_label: `First/Middle Names`
        },
            surname: {
                value: templateData.surname,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Surname`
        },
            suffix: {
                value: templateData.suffix,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Name Suffix`
        },
            preferred_name: {
                value: templateData.preferred_name,
                api_type: `derived`,
                display_label: `Preferred Name`
        },
            previous_name: {
                value: templateData.previous_name,
                api_type: `modifiable`,
                display_label: `Previous/Maiden Name`
        },
            address_line_1: {
                value: templateData.address_line_1,
                api_type: `modifiable`,
                display_label: `Address Line 1`
        },
            address_line_2: {
                value: templateData.address_line_2,
                api_type: `modifiable`,
                display_label: `Address Line 2`
        },
            address_line_3: {
                value: templateData.address_line_3,
                api_type: `modifiable`,
                display_label: `Address Line 3`
        },
            address_line_4: {
                value: templateData.address_line_4,
                api_type: `modifiable`,
                display_label: `Address Line 4`
        },
            address_line_5: {
                value: templateData.address_line_5,
                api_type: `modifiable`,
                display_label: `Address Line 5`
        },
            city: {
                value: templateData.city,
                api_type: `modifiable`,
                display_label: `City`
        },
            country_code: {
                value: templateData.country_code,
                api_type: `modifiable`,
                description: templateData.country_code_description,
                domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                display_label: `Country Code`
        },
            postal_code: {
                value: templateData.postal_code,
                api_type: `modifiable`,
                display_label: `Zip Code`
        },
            state_code: {
                value: templateData.state_code,
                api_type: `modifiable`,
                description: templateData.state_code_description,
                domain: `https://api.byu.edu/byuapi/meta/state_codes/v1`,
                display_label: `State`
        },
            email_address: {
                value: templateData.email_address,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Email`
        },
            phone_number: {
                value: templateData.phone_number,
                api_type: `modifiable`,
                key: true,
                display_label: `Phone Number`
        },
            secondary_email_address: {
                value: templateData.secondary_email_address,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Email`
        },
            secondary_phone_number: {
                value: templateData.secondary_phone_number,
                api_type: `modifiable`,
                display_label: `Phone Number`
        },
            phone_texts_ok: {
                value: templateData.phone_texts_ok,
                api_type: `modifiable`,
                display_label: `Texts OK`
        },
            home_town: {
                value: templateData.home_town,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Home Town`
        },
            home_county: {
                value: templateData.home_county,
                api_type: `modifiable`,
                display_label: `Home County`
        },
            home_state: {
                value: templateData.home_state,
                description: templateData.home_state_description,
                domain: `https://api.byu.edu/byuapi/meta/state_codes/v1`,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Home State`
        },
            home_country: {
                value: templateData.home_country,
                description: templateData.home_country_description,
                domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Home Country`
        },
            information_release: {
                value: templateData.information_release,
                api_type: `read-only`,
                display_label: `Information Release Agreement`
        },
            financial_responsibility: {
                value: templateData.financial_responsibility,
                api_type: `read-only`,
                display_label: `Financial Responsibility Agreement`
        },
            school_preference_order: {
                value: templateData.school_preference_order,
                api_type: `modifiable`,
                display_label: `CES School Preference Order`
        },
            decision: {
                value: templateData.decision,
                api_type: `derived`,
                description: templateData.decision_description,
                domain: `https://api.byu.edu/cesapi/meta/decision/v1`,
                display_label: `Application Decision`
        },
            decision_qualifier: {
                value: templateData.decision_qualifier,
                api_type: `derived`,
                display_label: `Application Decision Qualifier`
        },
            decision_template_id: {
                value: templateData.decision_template_id,
                api_type: `derived`,
                domain: `https://api.byu.edu/cesapi/meta/decision/v1`,
                display_label: `Application Status`
        },
            decision_date_time: {
                value: templateData.decision_date_time,
                api_type: `derived`,
                domain: `https://api.byu.edu/cesapi/meta/decision/v1`,
                display_label: `Application Status`
        },
            application_status: {
                value: templateData.application_status,
                api_type: `derived`,
                description: templateData.application_status_description,
                domain: `https://api.byu.edu/cesapi/meta/application_status/v1`,
                display_label: `Application Status`
        },
            application_status_date_time: {
                value: templateData.application_status_date_time,
                api_type: `system`,
                display_label: `Date/Time that current Application Status was determined`
        },
            created_by_id: {
                value: templateData.created_by_id,
                description: templateData.created_by_id_description,
                api_type: `system`,
                display_label: `Created by`
        },
            created_date_time: {
                value: templateData.created_date_time,
                api_type: `system`,
                display_label: `Created`
        },
            submitted_by_id: {
                value: templateData.submitted_by_id,
                description: templateData.submitted_by_id_description,
                api_type: `system`,
                display_label: `Submitted By`
        },
            submitted_date_time: {
                value: templateData.submitted_date_time,
                api_type: `system`,
                display_label: `Application submitted when?`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const governmentRecordsTemplate = function (templateData) {
    return {
            links: {
                government_records__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/government_records`,
                    method: `GET`
            },
                government_records__modify: {
                    rel: `government_records__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/government_records`,
                    method: `PUT`
            },
                persons__info: {
                    rel: `persons__info`,
                    href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}`,
                    method: `GET`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            birth_city: {
                value: templateData.birth_city,
                api_type: `related`,
                related_resource: `applicants`,
                display_label: `Birth City`
        },
            birth_country_code: {
                value: templateData.birth_country_code,
                description: templateData.birth_country_code_description,
                domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Birth Country Code`
        },
            citizenship_country_code: {
                value: templateData.citizenship_country_code,
                description: templateData.citizenship_country_code_description,
                domain: `https://api.byu.edu/byuapi/meta/country_codes/v1`,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Citizenship Country Code`
        },
            citizenship_status: {
                value: templateData.citizenship_status,
                description: templateData.citizenship_status_description,
                domain: `https://api.byu.edu/byuapi/meta/citizenship_status/v1`,
                api_type: `related`,
                related_resource: `applicants`,
                display_label: `Citizenship Status`
        },
            visa_type: {
                value: templateData.visa_type,
                domain: `https://api.byu.edu/byuapi/meta/visa_types/v1`,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Visa Type`
        },
            visa_type_source: {
                value: templateData.visa_type_source,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Visa Verifying Entity`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const internationalRecordsTemplate = function (templateData) {
    return {
            links: {
                international_records__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/international_records`,
                    method: `GET`
            },
                international_records__modify: {
                    rel: `international_records__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/international_records`,
                    method: `PUT`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            alien_number: {
                value: templateData.alien_number,
                api_type: `read-only`,
                display_label: `Alien or USCIS Number`
        },
            current_us_resident: {
                value: templateData.current_us_resident,
                api_type: `read-only`,
                display_label: `Current US Resident`
        },
            visa_change_plan: {
                value: templateData.visa_change_plan,
                api_type: `read-only`,
                display_label: `Will you change the Visa if admitted?`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const personalRecordsTemplate = function (templateData) {
    return {
            links: {
                personal_records__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/personal_records`,
                    method: `GET`
            },
                personal_records__modify: {
                    rel: `personal_records__modify`,
                    href: `https://api.byu.edu/byuapi/persons/v1/${templateData.application_id}/personal_records`,
                    method: `PUT`
            },
                persons__info: {
                    rel: `persons__info`,
                    href: `https://api.byu.edu/byuapi/persons/v1/${templateData.applicant_id}`,
                    method: `GET`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            date_of_birth: {
                value: templateData.date_of_birth,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Date of birth`
        },
            marital_status: {
                value: templateData.marital_status,
                description: templateData.marital_status_description,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Marital Status`
        },
            religion_code: {
                value: templateData.religion_code,
                description: templateData.religion_code_description,
                domain: `https://api.byu.edu/byuapi/meta/religions/v1`,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Religion`
        },
            religion_tenure: {
                value: templateData.religion_tenure,
                api_type: `derived`,
                display_label: `How long have you been a member of the church?`
        },
            sex: {
                value: ``,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Sex`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const collegeSummariesTemplate = function (templateData) {
    return {
            links: {
                college_summaries__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/college_summaries`,
                    method: `GET`
            }
        },
            values: [],
            cumulative_credit: {
                value: templateData.cumulative_credit,
                api_type: `derived`,
                display_label: `Cumulative College Credit`
        },
            cumulative_gpa: {
                value: templateData.cumulative_gpa,
                api_type: `derived`,
                display_label: `Cumulative College GPA`
        }
    }
}
const collegeSummaryTemplate = function (templateData) {
    return {
            links: {
                college_summaries__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/college_summaries/${templateData.college},${templateData.start_month},${templateData.end_month}`,
                    method: `GET`
            },
                college_summaries__modify: {
                    rel: `college_summaries__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/college_summaries/${templateData.college},${templateData.start_month},${templateData.end_month}`,
                    method: `PUT`
            },
                college_summaries__remove: {
                    rel: `college_summaries__remove`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/college_summaries/${templateData.college},${templateData.start_month},${templateData.end_month}`,
                    method: `DELETE`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            college: {
                value: templateData.college,
                api_type: `read-only`,
                key: true,
                description: templateData.college_description,
                domain: `https://api.byu.edu/byuapi/meta/colleges/v1`,
                display_label: `College Attended`
        },
            start_month: {
                value: templateData.start_month,
                api_type: `read-only`,
                display_label: `Start Month`
        },
            end_month: {
                value: templateData.end_month,
                api_type: `read-only`,
                display_label: `End Month`
        },
            gpa: {
                value: templateData.gpa,
                api_type: `derived`,
                display_label: `GPA`
        },
            gpa_verified: {
                value: templateData.gpa_verified,
                api_type: `derived`,
                display_label: `GPA Verified`
        },
            degree: {
                value: templateData.degree,
                api_type: `system`,
                display_label: `College Degree`
        },
            degree_date: {
                value: templateData.degree_date,
                api_type: `system`,
                display_label: `College Degree Date`
        },
            degree_major: {
                value: templateData.degree_major,
                api_type: `system`,
                display_label: `College Major`
        },
            credit_hours_graded: {
                value: templateData.credit_hours_graded,
                api_type: `read-only`,
                display_label: `Credit Hours`
        },
            date_time_verified: {
                value: templateData.date_time_verified,
                api_type: `system`,
                display_label: `Verified`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const highSchoolSummariesTemplate = function (templateData) {
    return {
            links: {
                high_school_summaries__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/high_school_summaries`,
                    method: `GET`
            }
        },
            values: []
    }
}
const highSchoolSummaryTemplate = function (templateData) {
    return {
            links: {
                high_school_summaries__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/high_school_summaries/${templateData.high_school_code},${templateData.start_month},${templateData.end_month}`,
                    method: `GET`
            },
                high_school_summaries__modify: {
                    rel: `high_school_summaries__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/high_school_summaries/${templateData.high_school_code},${templateData.start_month},${templateData.end_month}`,
                    method: `PUT`
            },
                high_school_summaries__remove: {
                    rel: `high_school_summaries__remove`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/high_school_summaries/${templateData.high_school_code},${templateData.start_month},${templateData.end_month}`,
                    method: `DELETE`
            },
                high_school_codes__info: {
                    rel: `high_school_codes__info`,
                    href: `https://api.byu.edu/byuapi/meta/high_school_codes/v1/${templateData.high_school_code}`,
                    method: `GET`
            }
        },
            list_of_classes: [],
            list_of_nonaccredited_work: [],
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            high_school_type: {
                value: templateData.high_school_type,
                description: templateData.high_school_type_description,
                domain: `https://api.byu.edu/byuapi/meta/high_school_types/v1`,
                api_type: `modifiable`,
                key: true,
                display_label: `High School Type`
        },
            high_school: {
                value: templateData.high_school,
                description: templateData.high_school_description,
                domain: `https://api.byu.edu/byuapi/meta/high_schools/v1`,
                api_type: `related`,
                key: true,
                related_resource: `persons`,
                display_label: `High School`
        },
            high_school_city: {
                value: templateData.high_school_city,
                api_type: `related`,
                related_resource: `high_schools`,
                display_label: `High School City`
        },
            high_school_state: {
                value: templateData.high_school_state,
                description: templateData.high_school_state_description,
                api_type: `related`,
                related_resource: `high_schools`,
                display_label: `High School State`
        },
            high_school_country: {
                value: templateData.high_school_country,
                description: templateData.high_school_country_description,
                api_type: `related`,
                related_resource: `high_schools`,
                display_label: `High School Country`
        },
            start_month: {
                value: templateData.start_month,
                api_type: `read-only`,
                display_label: `Start Month`
        },
            end_month: {
                value: templateData.end_month,
                api_type: `read-only`,
                display_label: `End Month`
        },
            graduation_status: {
                value: templateData.graduation_status,
                api_type: `modifiable`,
                display_label: `Have you or will you graduate?`
        },
            graduation_date: {
                value: templateData.graduation_date,
                api_type: `read-only`,
                display_label: `High School Graduation Date`
        },
            high_school_gpa: {
                value: templateData.high_school_gpa,
                api_type: `modifiable`,
                display_label: `High School GPA`
        },
            gpa_calculated: {
                value: templateData.gpa_calculated,
                api_type: `read-only`,
                display_label: `Calculated GPA`
        },
            ap_ib_half_classes: {
                value: templateData.ap_ib_half_classes,
                api_type: `read-only`,
                display_label: `AP/IB Half Classes`
        },
            ap_ib_full_classes: {
                value: templateData.ap_ib_full_classes,
                api_type: `read-only`,
                display_label: `AP/IB Full Classes`
        },
            concurrent_enrollment: {
                value: templateData.concurrent_enrollment,
                api_type: `read-only`,
                display_label: `Has the student participated in concurrent enrollment classes?`
        },
            transcript_source: {
                value: templateData.transcript_source,
                api_type: `modifiable`,
                display_label: `Transcript Source`
        },
            date_time_verified: {
                value: templateData.date_time_verified,
                api_type: `system`,
                display_label: `Verified`
        },
            link_to_document_image: {
                value: templateData.link_to_document_image,
                api_type: `modifiable`,
                display_label: `Link to Document Image`
        },
            link_to_secondary_document_image: {
                value: templateData.link_to_secondary_document_image,
                api_type: `modifiable`,
                display_label: `Link to Secondary Document Image`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const testScoresTemplate = function (templateData) {
    return {
            links: {
                test_scores__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/test_scores`,
                    method: `GET`
            }
        },
            values: []
    }
}
const endorsementTemplate = function (templateData) {
    return {
            links: {
                endorsement__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/endorsement`,
                    method: `GET`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            date: {
                value: templateData.date,
                api_type: `system`,
                display_label: `Endorsement Status Date`
        },
            status: {
                value: templateData.status,
                api_type: `system`,
                display_label: `Endorsement Status`
        },
            type: {
                value: templateData.type,
                api_type: `system`,
                display_label: `Endorsement Type`
        }
    }
}
const geiProgramsTemplate = function (templateData) {
    return {
            links: {
                gei_programs__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/gei_programs`,
                    method: `GET`
            },
                gei_programs__modify: {
                    rel: `gei_programs__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/gei_programs`,
                    method: `PUT`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            pw_completion: {
                value: templateData.pw_completion,
                api_type: `system`,
                display_label: `Pathway Connect Completion`
        },
            pw_credits: {
                value: templateData.pw_credits,
                api_type: `system`,
                display_label: `Pathway Connect Credits`
        },
            pw_gpa: {
                value: templateData.pw_gpa,
                api_type: `system`,
                display_label: `Pathway Connect GPA`
        },
            pw_site: {
                value: templateData.pw_site,
                api_type: `system`,
                display_label: `Pathway Connect Site`
        },
            srs_certificates: {
                value: templateData.srs_certificates,
                api_type: `system`,
                display_label: `SRS Certificates`
        },
            srs_facilitator: {
                value: templateData.srs_facilitator,
                api_type: `system`,
                display_label: `SRS Facilitator`
        },
            srs_site: {
                value: templateData.srs_site,
                api_type: `system`,
                display_label: `SRS Site`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const missionsTemplate = function (templateData) {
    return {
            links: {
                missions__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/missions`,
                    method: `GET`
            }
        },
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            mission_service: {
                value: templateData.mission_service,
                api_type: `read-only`,
                display_label: `Have you served or are you currently serving a mission?`
        },
            mission_name: {
                value: templateData.mission_name,
                domain: `https://api.byu.edu/byuapi/meta/mission_names/v1`,
                api_type: `read-only`,
                display_label: `Mission Name`
        },
            mission_language: {
                value: templateData.mission_language,
                description: templateData.mission_language_description,
                domain: `https://api.byu.edu/byuapi/meta/languages/v1`,
                api_type: `read-only`,
                display_label: `Mission Language`
        },
            start_month: {
                value: templateData.start_month,
                api_type: `read-only`,
                display_label: `Start Month`
        },
            end_month: {
                value: templateData.end_month,
                api_type: `read-only`,
                display_label: `End Month`
        },
            mission_type: {
                value: templateData.mission_type,
                domain: `https://api.byu.edu/byuapi/meta/mission_types/v1`,
                api_type: `read-only`,
                display_label: `Mission Type`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const seminarySummariesTemplate = function (templateData) {
    return {
            links: {
                seminary_summaries__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/seminary_summaries`,
                    method: `GET`
            },
                seminary_summaries__modify: {
                    rel: `seminary_summaries__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/seminary_summaries`,
                    method: `PUT`
            },
                seminary_summaries__remove: {
                    rel: `seminary_summaries__remove`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/seminary_summaries`,
                    method: `DELETE`
            }
        },
            seminary_classes: [],
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            seminary_type: {
                value: templateData.seminary_type,
                description: templateData.seminary_type_description,
                domain: `https://api.byu.edu/byuapi/meta/seminary_types`,
                api_type: `read-only`,
                display_label: `Seminary Type`
        },
            years_completed: {
                value: templateData.years_completed,
                api_type: `read-only`,
                display_label: `Years Completed`
        },
            attendance_percentage: {
                value: templateData.attendance_percentage,
                api_type: `read-only`,
                display_label: `Attendance`
        },
            graduation_status: {
                value: templateData.graduation_status,
                api_type: `modifiable`,
                display_label: `Have you or will you graduate?`
        },
            seminary_explanation: {
                value: templateData.seminary_explanation,
                api_type: `modifiable`,
                display_label: `Explain your Seminary Participation`
        },
            teacher_name: {
                value: templateData.teacher_name,
                api_type: `modifiable`,
                display_label: `Seminary Teacher`
        },
            teacher_email: {
                value: templateData.teacher_email,
                api_type: `related`,
                related_resource: `persons`,
                display_label: `Email`
        },
            date_time_reported: {
                value: templateData.date_time_reported,
                api_type: `system`,
                display_label: `Reported`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const instituteSummariesTemplate = function (templateData) {
    return {
            links: {
                institute_summaries__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/institute_summaries`,
                    method: `GET`
            },
                institute_summaries__modify: {
                    rel: `institute_summaries__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/institute_summaries`,
                    method: `PUT`
            },
                institute_summaries__remove: {
                    rel: `institute_summaries__remove`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/institute_summaries`,
                    method: `DELETE`
            }
        },
            institute_classes: [],
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            institute_attendance: {
                value: templateData.institute_attendance,
                api_type: `read-only`,
                display_label: `Years Attended`
        },
            institute_explanation: {
                value: templateData.institute_explanation,
                api_type: `read-only`,
                display_label: `Explain your Institute Participation`
        },
            date_time_reported: {
                value: templateData.date_time_reported,
                api_type: `system`,
                display_label: `Reported`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const questionsTemplate = function (templateData) {
    return {
            links: {
                questions__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/questions`,
                    method: `GET`
            }
        },
            values: []
    }
}
const questionTemplate = function (templateData) {
    return {
            links: {
                question__info: {
                    rel: `self`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/questions/${templateData.question_id}`,
                    method: `GET`
            },
                question__modify: {
                    rel: `question__modify`,
                    href: `https://api.byu.edu/domain/applications/ldsbc/admission/v1/applications/${templateData.application_id}/questions/${templateData.question_id}`,
                    method: `PUT`
            }
        },
            elements: [],
            groups: [],
            uuid: {
                value: templateData.uuid,
                api_type: `system`,
                key: templateData.uuid_key,
                display_label: `UUID`
        },
            type: {
                value: templateData.type,
                api_type: `modifiable`,
                display_label: `Type`
        },
            name: {
                value: templateData.name,
                api_type: `modifiable`,
                display_label: `Name`
        },
            description: {
                value: templateData.description,
                api_type: `modifiable`,
                display_label: `Description`
        },
            updated_by_id: {
                value: templateData.updated_by_id,
                description: templateData.updated_by_id_description,
                api_type: `system`,
                display_label: `Updated by`
        },
            updated_date_time: {
                value: templateData.updated_date_time,
                api_type: `system`,
                display_label: `Updated`
        }
    }
}
const conceptTemplate = function (templateData) {
    return {
            id: templateData.concept_id,
            type: templateData.concept_type,
            range: templateData.concept_range
    }
}
const valueTemplate = function (templateData) {
    return {
            name: templateData.value_name,
            description: templateData.value_description,
            long_description: templateData.value_long_description,
            category: templateData.value_category,
            limit: templateData.value_limit,
            pagination_parameter: templateData.value_pagination_parameter,
            institutions: [],
            content_type: [],
            parameters: [],
            columns: []
    }
}
const trendTemplate = function (templateData) {
    return {
            name: templateData.trend_name,
            data: []
    }
}
const attributeStringTemplate = function (templateData) {
    return {
            key: templateData.std_attribute_string_key,
            value: templateData.std_attribute_string
    }
}
const criminalConvictionTemplate = function (templateData) {
    return {
            crime: {
                value: templateData.crime,
                api_type: `modifiable`,
                display_label: `What was the specific crime?`
        },
            crime_year: {
                value: templateData.crime_year,
                api_type: `modifiable`,
                display_label: `What year was the crime committed?`
        },
            courts: {
                value: templateData.courts,
                api_type: `modifiable`,
                display_label: `What were the name(s) and location(s) of the court(s) involved?`
        },
            conditions: {
                value: templateData.conditions,
                api_type: `modifiable`,
                display_label: `What were the terms or conditions of any plea, penalty, punishment, sentence, probation, or parole?`
        },
            probation: {
                value: templateData.probation,
                api_type: `modifiable`,
                display_label: `Are you currently on probation, parole, or under any ongoing penalty, punishment, or restriction with any court or law enforcement agency?`
        },
            probation_explanation: {
                value: templateData.probation_explanation,
                api_type: `modifiable`,
                display_label: `Explanation`
        },
            penalties: {
                value: templateData.penalties,
                api_type: `modifiable`,
                display_label: `Have all prison terms, penalties, fines, restitution, community service hours, any other part of your criminal sentence been completed?`
        },
            penalties_explanation: {
                value: templateData.penalties_explanation,
                api_type: `modifiable`,
                display_label: `Explanation`
        },
            additional_explanation: {
                value: templateData.additional_explanation,
                api_type: `modifiable`,
                display_label: `Explanation`
        }
    }
}
const racialCategoryTemplate = function (templateData) {
    return {
            value: templateData.racial_category,
            api_type: `related`,
            related_resource: `ethnicities`,
            domain: `https://api.byu.edu/byuapi/meta/racial_categories/v1`,
            display_label: `Which racial categories describe you?`
    }
}
const languageTemplate = function (templateData) {
    return {
            value: templateData.language,
            api_type: `related`,
            related_resource: `languages`,
            description: templateData.language_description,
            domain: `https://api.byu.edu/byuapi/meta/languages/v1`,
            display_label: `Language Skills`
    }
}
const instituteClassDataTemplate = function (templateData) {
    return {
            institute_class: {
                value: templateData.institute_class,
                domain: `https://api.byu.edu/byuapi/meta/institute_classes/v1`,
                api_type: `read-only`,
                display_label: `Institute Class Name`
        },
            academic_year: {
                value: templateData.academic_year,
                api_type: `read-only`,
                display_label: `Academic Year`
        },
            grade: {
                value: templateData.grade,
                api_type: `modifiable`,
                display_label: `Grade`
        },
            for_credit: {
                value: templateData.for_credit,
                api_type: `modifiable`,
                display_label: `For Credit?`
        }
    }
}
const seminaryClassDataTemplate = function (templateData) {
    return {
            term_info: [],
            seminary_class: {
                value: templateData.seminary_class,
                domain: `https://api.byu.edu/byuapi/meta/seminary_classes`,
                api_type: `read-only`,
                display_label: `Seminary Class Name`
        },
            academic_year: {
                value: templateData.academic_year,
                api_type: `read-only`,
                display_label: `Academic Year`
        }
    }
}
const testScoreTemplate = function (templateData) {
    return {
            test_components: [],
            application_id: {
                value: templateData.application_id,
                api_type: `system`,
                key: true,
                display_label: `Application UUID`
        },
            applicant_id: {
                value: templateData.applicant_id,
                api_type: `system`,
                key: true,
                display_label: `Applicant ID`
        },
            test_name: {
                value: templateData.test_name,
                domain: `https://api.byu.edu/byuapi/meta/test_names/v1`,
                api_type: `read-only`,
                display_label: `Test Name`
        },
            test_date: {
                value: templateData.test_date,
                api_type: `read-only`,
                key: templateData.test_date_key,
                display_label: `Test Date`
        },
            composite_score: {
                value: templateData.composite_score,
                api_type: `read-only`,
                display_label: `Composite Test Score`
        },
            date_time_reported: {
                value: templateData.date_time_reported,
                api_type: `system`,
                display_label: `Reported`
        },
            test_version: {
                value: templateData.test_version,
                api_type: `read-only`,
                display_label: `Test Version`
        }
    }
}
const highSchoolCourseInfoTemplate = function (templateData) {
    return {
            grades: [],
            grade_level: {
                value: templateData.grade_level,
                api_type: `modifiable`,
                display_label: `Grade Level`
        },
            subject: {
                value: templateData.subject,
                api_type: `modifiable`,
                display_label: `Subject`
        },
            course_name: {
                value: templateData.course_name,
                api_type: `modifiable`,
                display_label: `Course Name`
        },
            ap_ib_flag: {
                value: templateData.ap_ib_flag,
                api_type: `modifiable`,
                display_label: `AP/IB Flag`
        },
            repeated: {
                value: templateData.repeated,
                api_type: `modifiable`,
                display_label: `Repeated`
        },
            grading_terms: {
                value: templateData.grading_terms,
                api_type: `modifiable`,
                display_label: `Term`
        },
            grade_final: {
                value: templateData.grade_final,
                api_type: `modifiable`,
                display_label: `Grade`
        },
            credits: {
                value: templateData.credits,
                api_type: `read-only`,
                display_label: `Credits`
        }
    }
}
const highSchoolNonaccreditedWorkInfoTemplate = function (templateData) {
    return {
            grade_level: {
                value: templateData.grade_level,
                api_type: `modifiable`,
                display_label: `Grade Level`
        },
            statement: {
                value: templateData.statement,
                api_type: `modifiable`,
                display_label: `Describe your non-accredited school work`
        }
    }
}
const questionElementTemplate = function (templateData) {
    return {
            response_criteria: [],
            response_set: [],
            id: {
                value: templateData.id,
                api_type: `system`,
                display_label: `Element ID`
        },
            type: {
                value: templateData.type,
                api_type: `modifiable`,
                display_label: `Type`
        },
            prompt: {
                value: templateData.prompt,
                api_type: `modifiable`,
                display_label: `Element Prompt`
        },
            explanation: {
                value: templateData.explanation,
                api_type: `modifiable`,
                display_label: `Element Explanation`
        },
            limit: {
                value: templateData.limit,
                api_type: `modifiable`,
                display_label: `Character Limit`
        },
            ordinal: {
                value: templateData.ordinal,
                api_type: `modifiable`,
                display_label: `Element Ordinal`
        },
            response: {
                value: templateData.response,
                api_type: `modifiable`,
                display_label: `Response`
        },
            response_range: {
                value: templateData.response_range,
                api_type: `modifiable`,
                display_label: `Response Range`
        }
    }
}
const questionGroupTemplate = function (templateData) {
    return {
            elements: [],
            id: {
                value: templateData.id,
                api_type: `system`,
                display_label: `Group ID`
        },
            name: {
                value: templateData.name,
                api_type: `modifiable`,
                display_label: `Name`
        },
            description: {
                value: templateData.description,
                api_type: `modifiable`,
                display_label: `Description`
        },
            ordinal: {
                value: templateData.ordinal,
                api_type: `modifiable`,
                display_label: `Position`
        },
            heading: {
                value: templateData.heading,
                api_type: `modifiable`,
                display_label: `Display Group Heading`
        }
    }
}
const columnTemplate = function (templateData) {
    return {
            ordinal: templateData.column_ordinal,
            name: templateData.column_name,
            qualifier: [],
            link: templateData.column_link
    }
}
const datumTemplate = function (templateData) {
    return {
            date: templateData.datum_date,
            value: templateData.datum
    }
}
const seminaryTermInfoTemplate = function (templateData) {
    return {
            term: {
                value: templateData.term,
                api_type: `read-only`,
                display_label: `Term`
        },
            absences: {
                value: templateData.absences,
                api_type: `read-only`,
                display_label: `Absences`
        },
            sessions: {
                value: templateData.sessions,
                api_type: `read-only`,
                display_label: `Sessions`
        },
            attendance: {
                value: templateData.attendance,
                api_type: `read-only`,
                display_label: `Attendance`
        },
            reading: {
                value: templateData.reading,
                api_type: `read-only`,
                display_label: `Reading`
        },
            recognition: {
                value: templateData.recognition,
                api_type: `read-only`,
                display_label: `Recognition`
        },
            credit: {
                value: templateData.credit,
                api_type: `read-only`,
                display_label: `Credit`
        },
            grade: {
                value: templateData.grade,
                api_type: `read-only`,
                display_label: `Grade`
        }
    }
}
const testComponentTemplate = function (templateData) {
    return {
            component_name: {
                value: templateData.component_name,
                description: templateData.component_name_description,
                domain: `https://api.byu.edu/byuapi/meta/test_component_names/v1`,
                api_type: `read-only`,
                display_label: `Component Name`
        },
            component_score: {
                value: templateData.component_score,
                api_type: `read-only`,
                display_label: `Component Score`
        }
    }
}
const sharedGradeTemplate = function (templateData) {
    return {
            value: templateData.shared_grade,
            api_type: `modifiable`,
            display_label: `Grade`
    }
}
const responseCriterionTemplate = function (templateData) {
    return {
            label: templateData.response_criterion_label,
            value: templateData.response_criterion
    }
}
const elementTemplate = function (templateData) {
    return {
            id: templateData.element_id,
            label: templateData.element_label,
            ordinal: templateData.element_ordinal
    }
}

module.exports = {
    conceptsTemplate, 
    errorResponseTemplate, 
    claimArrayResponseTemplate, 
    reportsMetadataTemplate, 
    statusTemplate, 
    decisionReasonsTemplate, 
    applicationsTemplate, 
    applicationTemplate, 
    applicationActionsTemplate, 
    applicationActionTemplate, 
    applicationDeliverablesTemplate, 
    applicationDeliverableTemplate, 
    backgroundQuestionsTemplate, 
    biographicalClassificationsTemplate, 
    basicTemplate, 
    governmentRecordsTemplate, 
    internationalRecordsTemplate, 
    personalRecordsTemplate, 
    collegeSummariesTemplate, 
    collegeSummaryTemplate, 
    highSchoolSummariesTemplate, 
    highSchoolSummaryTemplate, 
    testScoresTemplate, 
    endorsementTemplate, 
    geiProgramsTemplate, 
    missionsTemplate, 
    seminarySummariesTemplate, 
    instituteSummariesTemplate, 
    questionsTemplate, 
    questionTemplate, 
    conceptTemplate, 
    valueTemplate, 
    trendTemplate, 
    attributeStringTemplate, 
    criminalConvictionTemplate, 
    racialCategoryTemplate, 
    languageTemplate, 
    instituteClassDataTemplate, 
    seminaryClassDataTemplate, 
    testScoreTemplate, 
    highSchoolCourseInfoTemplate, 
    highSchoolNonaccreditedWorkInfoTemplate, 
    questionElementTemplate, 
    questionGroupTemplate, 
    columnTemplate, 
    datumTemplate, 
    seminaryTermInfoTemplate, 
    testComponentTemplate, 
    sharedGradeTemplate, 
    responseCriterionTemplate, 
    elementTemplate
}