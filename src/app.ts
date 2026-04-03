// const firstName:string= "Ali";
// console.log(firstName);


// let Information: {
//     Name: string,
//     Age: number,
//     Cnic: number,    
// }={
//     Name:"Sheharyar",
//     Age:18,
//     Cnic:432144234234
// }
// console.log(Information);




interface IManagment {
    staffId?: number | string,
    staffName?: string
}
interface IStudent {
    studentId?: number | string,
    studentName?: string
}


type interset = IManagment & IStudent


let Data:interset={
    studentId:1234,
    studentName:"Danish",
    staffId:1001,
    staffName:"Gulzar",
}
console.log(Data)