export class Images {
    public albumId;
    public id;
    public title;
    public url;
    public thumbnailUrl;

    constructor(albumId: number, id: number, title: string, url: string, thumbnailUrl: string){
        this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }
}