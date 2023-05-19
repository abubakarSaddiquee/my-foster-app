import traningCourse from '../../../../../assets/svg/training/trainingCourse.svg';
import child1 from '../../../../../assets/svg/training/SCP.svg';
import child2 from '../../../../../assets/svg/training/TSDS.svg';
import child3 from '../../../../../assets/svg/training/addictiveBehaviour.svg';
import child4 from '../../../../../assets/svg/training/complexNeeds.svg';
import child5 from '../../../../../assets/svg/training/firstAid.svg';
import child6 from '../../../../../assets/svg/training/GBPR.svg';
import coreCourses from '../../../../../assets/svg/training/coreCourses.svg';
import child7 from '../../../../../assets/svg/training/parent&Child.svg';
import child8 from '../../../../../assets/svg/training/CN(alternative).svg';
import child9 from '../../../../../assets/svg/training/mentalHealth.svg';
import child10 from '../../../../../assets/svg/training/PFI.svg';
import child11 from '../../../../../assets/svg/training/manageChild.svg';
import child12 from '../../../../../assets/svg/training/countyLine.svg';
import eLearning from '../../../../../assets/svg/training/eLearning.svg';
import child13 from '../../../../../assets/svg/training/preventDuty.svg';
import child14 from '../../../../../assets/svg/training/childSexExploitation.svg';
import child15 from '../../../../../assets/svg/training/safeCaringPolicy.svg';
import child16 from '../../../../../assets/svg/training/supportForCarers.svg';
import child17 from '../../../../../assets/svg/training/safeguardingEscalation.svg';
import child18 from '../../../../../assets/svg/training/safeguardingLegislation.svg';
import AdHocCourses from '../../../../../assets/svg/training/AdHocCourses.svg';
import child19 from '../../../../../assets/svg/training/AFoundationForReParenting.svg';
import child20 from '../../../../../assets/svg/training/fosteringRegulations.svg';
import child21 from '../../../../../assets/svg/training/health&Safety.svg';
import child22 from '../../../../../assets/svg/training/sexualAbuseAwareness.svg';
import child23 from '../../../../../assets/svg/training/reportWritingForFosterCarese.svg';
import child24 from '../../../../../assets/svg/training/addNEwAdHocCourses.svg';


export const SAFEGUARDING_ARRAY = [
    {
        id: '1',
        title: 'Foster Carer Mandatory Training Courses',
        icon: traningCourse,
        background: 'linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)',
        subArray: [
            {
                id: '1',
                icon: child1,
                title: 'Safeguarding and Child Protection',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/foster-carer/safeguarding-child-protection'
            },
            {
                id: '2',
                icon: child2,
                title: '  Training, support and development standards (TSDS)',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/foster-carer/training-support-development-standards'
            },
            {
                id: '3',
                icon: child3,
                title: 'Addictive Behaviour including drug abuse, alcohol abuse',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/foster-carer/addictive-behaviour'
            },
            {
                id: '4',
                icon: child4,
                title: 'Complex Needs',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/foster-carer/complex-needs'
            },
            {
                id: '5',
                icon: child5,
                title: 'First Aid  ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/foster-carer/first-aid'
            },
            {
                id: '6',
                icon: child6,
                title: 'General Data Protection Regulation (GDPR) Act',
                path: '/training/manage-courses/course-resource-pool/foster-carer/general-data-protection-regulation'
            },
        ]
    },
    {
        id: '2',
        title: 'Mandatory Core Courses',
        icon: coreCourses,
        background: 'linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)',
        subArray: [
            {
                id: '1',
                icon: child7,
                title: 'Parent(s) and Child(ren) ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/core-courses/parent-and-child'
            },
            {
                id: '2',
                icon: child8,
                title: 'Complex Needs (alternative to residential care) ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/core-courses/complex-needs'
            },
            {
                id: '3',
                icon: child9,
                title: 'Mental Health Awareness ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/core-courses/mental-health-awareness'
            },
            {
                id: '4',
                icon: child10,
                title: 'Preparation For Independence ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/core-courses/preparation-for-independence'
            },
            {
                id: '5',
                icon: child11,
                title: 'Managing children who abscond ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/core-courses/managing-children-abscond'
            },
            {
                id: '6',
                icon: child12,
                title: 'County Lines and Gangs  ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/core-courses/county-lines-and-gangs'
            },
        ]
    },
    {
        id: '3',
        title: 'E-Learning Only',
        icon: eLearning,
        background: 'linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)',
        subArray: [
            {
                id: '1',
                icon: child13,
                title: 'Prevent Duty e-learning via the Home Office',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/e-learning-only/prevent-duty-e-learning'
            },
            {
                id: '2',
                icon: child14,
                title: `Child Sex Exploitation e-learning via the Children's Trust`,
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/e-learning-only/child-sex-exploitation'
            },
            {
                id: '3',
                icon: child15,
                title: 'Safe Caring Policy for Looked After Children ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/e-learning-only/safe-caring-policy'
            },
            {
                id: '4',
                icon: child16,
                title: 'Support for Carers  → Support for parents ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/e-learning-only/support-carers-parents'
            },
            {
                id: '5',
                icon: child17,
                title: 'Safeguarding Escalation Process Flow',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/e-learning-only/prevent-duty-e-learning'
            },
            {
                id: '6',
                icon: child18,
                title: 'Safeguarding  Legislation ',
                path: '/training/manage-courses/course-resource-pool/foster-carer-resources/e-learning-only/prevent-duty-e-learning'
            },
        ]
    },
    {
        id: '4',
        title: 'Ad-Hoc Courses',
        icon: AdHocCourses,
        background: 'linear-gradient(106.35deg, #1A202E 0%, #424E68 100%)',
        subArray: [
          {
            id: '1',
            icon: child19,
            title: 'A Foundation for Re-Parenting ',
            path: '/training/manage-courses/course-resource-pool/foster-carer-resources/ad-hoc-coureses/foundation-for-re-parenting'
        },
          {
            id: '2',
            icon: child20,
            title: 'Fostering Regulations ',
            path: '/training/manage-courses/course-resource-pool/foster-carer-resources/ad-hoc-coureses/fostering-regulations'
        },
          {
            id: '3',
            icon: child21,
            title: 'Health and Safety in the Foster Home ',
            path: '/training/manage-courses/course-resource-pool/foster-carer-resources/ad-hoc-coureses/health-and-safety-foster-home'
        },
          {
            id: '4',
            icon: child22,
            title: 'Sexual Abuse Awareness ',
            path: '/training/manage-courses/course-resource-pool/foster-carer-resources/ad-hoc-coureses/sexual-abuse-awareness'
        },
          {
            id: '5',
            icon: child23,
            title: 'Report Writing for Foster Carers ',
            path: '/training/manage-courses/course-resource-pool/foster-carer-resources/ad-hoc-coureses/report-writing-foster-carers'
        },
          {
            id: '6',
            icon: child24,
            title: 'Add',
            path: '/training/manage-courses/course-resource-pool/foster-carer-resources/ad-hoc-coureses/foundation-regulations'
        },
        ]
    }
]