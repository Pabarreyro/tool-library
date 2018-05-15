export class Tool {
  constructor(
    public pk: number,
    public title: string,
    public createDate: any,
    public status: string,
    public description: string,
    public brand: string,
    public lateFee: number,
    public active: boolean,
    public featured: boolean,
    public dueDate: any,
    public imgUrl: string
  ) { }
}
