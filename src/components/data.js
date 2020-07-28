
function randomColor(){
    return  Math.floor(Math.random()*12777215).toString(16)
    
}

function getRandomHeight(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const data = []

for(let i =0; i <30; i++){
    data.push({height:getRandomHeight(100,300),color:randomColor(),key:i})
    //console.log(data)
}

export default {data}

