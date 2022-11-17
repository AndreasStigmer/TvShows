export interface TvShow {
    id:           number;
    url:          string;
    name:         string;
    type:         string;
    language:     string;
    genres:       string[];
    status:       string;
    runtime:      number;
    premiered:    string;
    officialSite: string|null;
    schedule:     Schedule;
    rating:       Rating;
    weight:       number;
    network:      Network |null;
    webChannel:   WebChannel|null;
    externals:    Externals;
    image:        Image;
    summary:      string;
    updated:      number;
    _links:       Links;
}

export interface Links {
    self:            Previousepisode;
    previousepisode: Previousepisode;
    nextepisode?: Nextepisode;
}

export interface WebChannel {
    id:number,
    name:string,
    country:Country|null

}


export interface Previousepisode {
    href: string;
}


export interface Nextepisode {
    href: string;
}

export interface Externals {
    tvrage:  number;
    thetvdb: number;
    imdb:    string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Network {
    id:      number;
    name:    string;
    country: Country;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number|null;
}

export interface Schedule {
    time: string;
    days: string[];
}