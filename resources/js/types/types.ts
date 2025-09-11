export type imagetype = {
      id: number;
      path: string;
}
export type coloroption = {
      id: number;
      hex: string;
}

export type CurrentVariantType = {
      id: number | null,
      colors: {id: number; hex: string}[];
      materials: materialOptionType[];
      fits: fitOptionType[];
      sizes: sizeOptionType[];
      quantity: number ; 
      covers  : string[];
}     

export type VariantType = {
      id:number,
      image: string,
      color:  string,
      materials:  materialOptionType[],
      fits:  fitOptionType[],
      sizes:  sizeOptionType[]
}


export type ProductType = {
     name: string,
      brand: string,
      category: string[],
      tags: string[],
      price: number,
      rate: number,
      thumbnail: string
}


export type SubmitCheckType = {
    bool: boolean;
    name:boolean ;
    brand:boolean ;    
    description: boolean,
    price: boolean,
    tags: boolean,
    inventory: boolean,
}


export type variantsObjectType = {
      color: coloroption | null;
      materials: materialOptionType[];
      fits: fitOptionType[];
      sizes: sizeOptionType[];
}



type OptionType = {
  id: number;
  name: string;
};

type sizeOptionType = OptionType;
type materialOptionType = OptionType;
type fitOptionType = OptionType;