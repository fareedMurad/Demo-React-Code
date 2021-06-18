import Home from "./screens/Home";
import WhatIsSmartBook from "./screens/what-is-smart-book";
import Parents from "./screens/parents";
import Teachers from "./screens/teachers";
import SmartBooksLook from "./screens/smartbooks-look";
import MakesItUnique from "./screens/makes-it-unique";
import AboutUs from "./screens/about-us";
import Comments from "./screens/comments";
import GeneralTermsConditions from "./screens/general-terms-conditions";
import Privacy from "./screens/privacy";
import GeneralInformation from "./screens/general-information";
import ContentCurriculum from "./screens/curriculum";
import Skolenia from "./screens/skolenia";
import Competition from "./screens/competition";
import Contact from "./screens/contact";
import Faq from "./screens/faq";
import Blog from "./screens/blog";
import Career from "./screens/career";
import BlogIndividualArticle from "./screens/blog-individual-articles"

export const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/parents",
        exact: true,
        component: Parents
    },
    {
        path: "/teachers",
        exact: true,
        component: Teachers
    },
    {
        path: "/smartbooks-look",
        exact: true,
        component: SmartBooksLook
    },
    {
        path: "/curriculum",
        exact: true,
        component: ContentCurriculum
    },
    {
        path: "/makes-unique",
        exact: true,
        component: MakesItUnique
    },
    {
        path: "/about-us",
        exact: true,
        component: AboutUs
    },
    {
        path: "/faq",
        exact: true,
        component: Faq
    },
    {
        path: "/contact",
        exact: true,
        component: Contact
    },
    {
        path:"/blog-individual-article/:id",
        exact: true,
        component: BlogIndividualArticle
    },
    {
        path: "/blog",
        exact: true,
        component: Blog
    },
    {
        path: "/career",
        exact: true,
        component: Career
    },
    {
        path: "/comments",
        exact: true,
        component: Comments
    },
    {
        path: "/what-is-smart-book",
        exact: true,
        component: WhatIsSmartBook
    },
    {
        path: "/gereral-terms-conditions",
        exact: true,
        component: GeneralTermsConditions
    },
    {
        path: "/privacy",
        exact: true,
        component: Privacy
    },
    {
        path: "/general-information",
        exact: true,
        component: GeneralInformation
    },
    {
        path: "/skolenia",
        exact: true,
        component: Skolenia
    },
    {
        path: "/competition",
        exact: true,
        component: Competition
    },
];
