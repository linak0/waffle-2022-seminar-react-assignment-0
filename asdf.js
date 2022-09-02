var help = document.getElementById('help');

help.addEventListener('click',function () {
    alert('입력창에 메뉴를 입력하고 추가 버튼을 클릭하거나 엔터를 입력해주세요.');
  })


var text = document.getElementById('menu');
text.addEventListener('click',function(){
  document.getElementById('input').focus();
})

var button = document.getElementById('button');
button.addEventListener('click',function(event){
  addDiv();
});

var input = document.getElementById('input');
input.addEventListener('keydown',function(event){
  if(!event.isComposing && event.code== 'Enter'){
    event.preventDefault();
    addDiv();
    
  }
});

const addDiv = ()=>{
  var name = document.getElementById('input').value;

  if(name.length<1)
  {
    alert('값을 입력해 주세요.');
  }
  else if(name.length>10)
  {
    alert('10글자를 초과하였습니다.')
  }
  else{
    const newDiv = document.createElement('div');
    const newText = document.createTextNode(name);
    newDiv.appendChild(newText);
    document.getElementById('name_box').appendChild(newDiv);
    document.getElementById('input').value = '';
  }
}
  