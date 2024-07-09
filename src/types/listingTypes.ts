export enum ListingCondition {
    NEW = 'new',
    LIKENEW = 'likenew',
    USED = 'used',
    WORN = 'worn',
    NA = "na",
}

export enum ListingCategory {
    Cars = 'cars',
    Motorcycles = 'motorcycles',
    CarAccessories = 'caraccessories',
    Property = 'property',
    ComputersTech = 'computerstech',
    MobilePhonesGadgets = 'mobilephonesgadgets',
    Gaming = 'gaming',
    HobbiesToys = 'hobbiestoys',
    Audio = 'audio',
    Photography = 'photography',
    Luxury = 'luxury',
    WomensFashion = 'womensfashion',
    MensFashion = 'mensfashion',
    BabiesKids = 'babieskids',
    TVHomeAppliances = 'tvhomeappliances',
    FurnitureHomeLiving = 'furniturehomeliving',
    FoodDrinks = 'fooddrinks',
    PetSupplies = 'petsupplies',
    HealthNutrition = 'healthnutrition',
    SportsEquipment = 'sportsequipment',
    BeautyPersonalCare = 'beautypersonalcare',
    TicketsVouchers = 'ticketsvouchers',
    EverythingElse = 'everythingelse',
    FreeItems = 'freeitems',
    Jobs = 'jobs',
    HomeServices = 'homeservices',
    LearningEnrichment = 'learningenrichment',
    LifestyleServices = 'lifestyleservices',
    BusinessServices = 'businessservices'
};

export interface IListingDetails {
    id: string
    user_id: string;
    title: string
    description: string
    category: ListingCategory;
    condition: ListingCondition;
    price: number
    image: string
    created_at: string
    updated_at: string //TODO: Remove
}