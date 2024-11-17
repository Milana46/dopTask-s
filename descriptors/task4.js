

const worker={
    name:"Ben",
    age:25,
    language:{
        level:"c1",
        experience:"5 years in England"
    },
    motivation:"100%"
}

const copy={...worker}
copy.language.level="c2"
console.log(worker.language.level)
