import { Url } from "url";

export type Movie = {
id:string
url:Url
title:string
primaryTitle:string
originalTitle:string
primaryImage?: string
description:string
startYear:number
endYear:null
runtimeMinutes:number
contentRating:string
averageRating:number
numVotes:number
type:string
};

export type MovieDetail = {
id:string
url:string
primaryTitle:string
originalTitle:string
primaryImage?: string
interests:string[]
description:string
startYear:number
isAdult: boolean
endYear:null
runtimeMinutes:number
contentRating:string
averageRating:number
numVotes:number
type:string
directors:director[]
cast:casts[]
genres:string[]
tags:string[]
imdbRating:number
imdbVotes:number
imdbID:string
imdbURL:string
plot:string
releaseDate: releaseDates
trailerURL:string
ratingsCount:number
reviewsCount:number
top250:boolean
year:number | null          
episodes:episode[]
totalEpisodes:number
totalSeasons:number
}

type director = {
 fullName: string
}

type casts = {
 fullName: string
 job: string
}

type releaseDates = { 
  day: number
  month: number
  year: number
}

type episode = {
  id: string
  originalTitle: string
  runtimeMinutes: number
  seasonNumber: number
  episodeNumber: number
}