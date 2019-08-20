export class RecipeModel {
  public _id: string;
  public publishDate: Date;
  public slug: string;
  public title: string;
  public description?: string;
  public ingredients?: string;
  public image?: RecipeImageModel;


  constructor() {
    this._id = null;
    this.publishDate = null;
    this.slug = null;
    this.title = null;
    this.description = null;
    this.ingredients = null;
    this.image = new RecipeImageModel();
  }
}


export class RecipeImageModel {
  format: string;
  height: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  url: string;
  version: number;
  width: number;

  constructor() {
    this.format = null;
    this.height = null;
    this.public_id = null;
    this.resource_type = null;
    this.secure_url = null;
    this.signature = null;
    this.url = null;
    this.version = null;
    this.width = null;
  }
}
