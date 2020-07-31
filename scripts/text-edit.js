

//let text = $('#quota');

let select = $('#select-font');
//let quote = document.getElementById('quote');
let quote = $('#quote');


select.change(changeFont);

function changeFont() {
  quote.css("font-family", select.val());
  console.log(select.val());
}


/*teeeeeeeeeeeeeeeeeeeeeeeee*/

$("option").mouseover( liveFontSelect)


function liveFontSelect(event) {
  console.log('hovering')
//  let option = $(event.target);
//  if(option.is("option")) {
//    console.log('optionnnn')
//  }
}