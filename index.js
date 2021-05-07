// $('.card').click(function(){
//   $('.card').addClass('cardclicked');
// })

var cards=document.getElementsByClassName('card');
for(var i=0;i<cards.length;i++)
  cards[i].addEventListener('click',function(){
    this.className='cardclicked';
  })