export class PsaSet {
    public listName: string;
    public listId: number;   
    public data: any;   
    constructor(listName: string, listId: number, data: any) {
        this.listName = listName;
        this.listId = listId;
        this.data = data;
    }
  }

export class PsaSetData {
    public CardNumber!: string
    public CardNumberSort!: string;
    public Grade1!: number;
    public Grade1Q!: number;
    public Grade1_5!: number;
    public Grade1_5Q!: number;
    public Grade2!: number;
    public Grade2Q!: number;
    public Grade2_5!: number;
    public Grade3!: number;
    public Grade3Q!: number;
    public Grade3_5!: number;
    public Grade4!: number;
    public Grade4Q!: number;
    public Grade4_5!: number;
    public Grade5!: number;
    public Grade5Q!: number;
    public Grade5_5!: number;
    public Grade6!: number;
    public Grade6Q!: number;
    public Grade6_5!: number;
    public Grade7!: number;
    public Grade7Q!: number;
    public Grade7_5!: number;
    public Grade8!: number;
    public Grade8Q!: number;
    public Grade8_5!: number;
    public Grade9!: number;
    public Grade9Q!: number;
    public Grade10!: number;
    public GradeN0!: number;
    public GradeTotal!: number;
    public HalfGradeTotal!: number;
    public QualifiedGradeTotal!: number;
    public SortOrder!: number;
    public SpecID!: number;
    public SubjectName!: string;
    public Total!: number;
    public Variety!: string;
}