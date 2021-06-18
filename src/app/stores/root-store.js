import { createContext } from "react";
import { WhatIsSmartBookPageStore } from "./what-is-smart-book-store";
import { HomePageStore } from "./home-store";
import { HeaderStore } from "./header-store";
import {FooterStore} from "./footer-store";
import {ParentsStore} from "./parents-store";
import {TeachersStore} from "./teachers-store";
import {SmartBooksLookStore} from "./smartbooks-look-store";
import {MakesUniqueStore} from "./makes-unique-store";
import {AboutUsStore} from "./about-us-store"
import {CommentsStore} from "./comments-store"
import {GeneralTermsConditionsStore} from "./general-terms-conditions-store";
import {PrivacyStore} from "./privacy-store";
import {GeneralInformationStore} from "./general-information-store";
import {CurriculumStore} from "./curriculum-store";
import {SkoleniaStore} from "./skolenia-store";
import {CompetitionStore} from "./competition-store";
import {ContactStore} from "./contact-store";
import {FaqStore} from "./faq-store";
import {BlogStore} from "./blog-store";
import {CareerStore} from "./career-store";
import {BlogIndividualArticleStore} from "./blog-individual-article-store";

export class RootStore {
    WhatIsSmartBookPageContent;
    HeaderContent;
    FooterContent;
    HomeContent;
    ParentsContent;
    TeachersContent;
    SmartBooksLookStore;
    MakesUniqueStore;
    AboutUsStore;
    CommentsStore;
    GeneralTermsConditionsStore;
    PrivacyContent;
    GeneralInformationContent;
    CurriculumContent;
    SkoleniaContent;
    CompetitionContent;
    ContactContent;
    FaqContent;
    BlogContent;
    CareerContent;
    BlogIndividualArticleContent
    

    defaultLanguageChnaged;

    constructor() {
        this.WhatIsSmartBookPageContent = new WhatIsSmartBookPageStore(this);
        this.HeaderContent = new HeaderStore(this);
        this.FooterContent = new FooterStore(this);
        this.HomeContent = new HomePageStore(this);
        this.ParentsContent = new ParentsStore(this);
        this.TeachersContent = new TeachersStore(this);
        this.SmartbooksLookContent = new SmartBooksLookStore(this);
        this.MakesUniqueContent = new MakesUniqueStore(this);
        this.AboutUsContent = new AboutUsStore(this);
        this.CommentsStore = new CommentsStore(this);
        this.GeneralTermsConditionsStore = new GeneralTermsConditionsStore(this);
        this.PrivacyContent = new PrivacyStore(this);
        this.GeneralInformationContent = new GeneralInformationStore(this);
        this.CurriculumContent = new CurriculumStore(this);
        this.SkoleniaContent = new SkoleniaStore(this);
        this.CompetitionContent = new CompetitionStore(this);
        this.ContactContent = new ContactStore(this);
        this.FaqContent = new FaqStore(this);
        this.BlogContent = new BlogStore(this);
        this.CareerContent = new CareerStore(this);
        this.BlogIndividualArticleContent = new BlogIndividualArticleStore(this);
    }
}

export const StoreContext = createContext(new RootStore());
