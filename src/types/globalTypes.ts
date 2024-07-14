export enum ScreenSize {
    SM = 640,
    MD = 768,
    XL = 1280,
}

export enum Routes {
    INDEX = "/",
    SEARCH_RESULTS_PAGE = "/search/:searchTerm",
    LISTING_PAGE = "/listing/:listingId",
    // EDIT_LISTING_PAGE = "/listing/:id/edit",
    PRIVACY_PAGE = "/privacy-policy",
    ABOUT_PAGE = "/about-us",
    CONTACT_PAGE = "/contact-us",
    ERROR_500 = "/error500",
}
