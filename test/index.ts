import { FileManager } from "../build/index";
const file = new  FileManager
console.log('>Running');

const run = async()=>{
    var img = './data/imagen.jpg'
    const newImg = file.resizeImgBuffer({buffer:''})
    
}
run()
