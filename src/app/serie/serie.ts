export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;

  constructor(
    pId: number,
    pName: string,
    pChannel: string,
    pSeasons: number,
    pDescription: string,
    pWebpage: string,
    pPoster: string
  ) {
    this.id = pId;
    this.name = pName;
    this.channel = pChannel;
    this.seasons = pSeasons;
    this.description = pDescription;
    this.webpage = pWebpage;
    this.poster = pPoster;
  }
}
