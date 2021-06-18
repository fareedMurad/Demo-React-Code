import { observable, action, decorate } from "mobx";
import WhatIsSmartBookContent from "../api/data/language/slovak/what-is-smart-book-content.json";

export class WhatIsSmartBookPageStore {
    parent = null;
    whatIsSmartBookContent;

    constructor(root) {
        this.parent = root;
    }

    async loadWhatIsSmartBookPageContent() {
        return (this.whatIsSmartBookContent = WhatIsSmartBookContent);
    }
}

decorate(WhatIsSmartBookPageStore, {
    whatIsSmartBookContent: observable,
    loadWhatIsSmartBookPageContent: action
});
