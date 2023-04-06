function do_pinout(colors,text,n,x,is_black){var svg=document.getElementById("my-svg");var size=50;var padding=10;var totalSize=(size+padding)*n;var startX=0;var startY=30;for(var i=0;i<n;i++){for(var j=0;j<x;j++){var square=document.createElementNS("http://www.w3.org/2000/svg","rect");square.setAttribute("x",startX+i*size);square.setAttribute("y",startY+j*size);square.setAttribute("width",size);square.setAttribute("height",size);square.setAttribute("fill","none");square.setAttribute("stroke","black");var circle=document.createElementNS("http://www.w3.org/2000/svg","circle");circle.setAttribute("cx",startX+i*size+size/2);circle.setAttribute("cy",startY+j*size+size/2);circle.setAttribute("r",size/2-2);circle.setAttribute("fill",colors[(i+j)%colors.length]);var letter=document.createElementNS("http://www.w3.org/2000/svg","text");var letter=document.createElementNS("http://www.w3.org/2000/svg","text");letter.setAttribute("x",startX+i*size+size/2);letter.setAttribute("y",startY+j*size+size/2);letter.setAttribute("text-anchor","middle");letter.setAttribute("alignment-baseline","central");letter.textContent=text[(i+j)%text.length];var color_now=colors[(i+j)%colors.length];console.log(invertColor(color_now,is_black));letter.setAttribute("fill",invertColor(color_now,is_black));var number=document.createElementNS("http://www.w3.org/2000/svg","text");number.setAttribute("x",startX+i*size+size/2);number.setAttribute("y",startY+j*size-15);number.setAttribute("text-anchor","middle");number.setAttribute("alignment-baseline","central");number.setAttribute("fill","black");number.setAttribute("font-size","24");number.textContent=(j*n+i+1).toString();svg.appendChild(square);svg.appendChild(circle);svg.appendChild(letter);svg.appendChild(number)}}}function invertColor(str,is_black){var hash=0;for(var i=0;i<str.length;i++){hash=str.charCodeAt(i)+((hash<<5)-hash)}var colour="#";for(var i=0;i<3;i++){var value=255-(hash>>i*8)&255;colour+=("00"+value.toString(16)).substr(-2)}if(is_black==true){return"black"}else{return colour}}function table_generate(colors,text){var pinTexts=text;var pinColors=colors;var tableBody=document.getElementById("pin-table-body");for(var i=0;i<pinTexts.length;i++){var row=document.createElement("tr");var pinNumberCell=document.createElement("td");pinNumberCell.textContent=(i+1).toString();row.appendChild(pinNumberCell);var pinTextCell=document.createElement("td");pinTextCell.textContent=pinTexts[i];row.appendChild(pinTextCell);var pinColorCell=document.createElement("td");pinColorCell.textContent=pinColors[i];row.appendChild(pinColorCell);var pinColorCell=document.createElement("td");pinColorCell.style.backgroundColor=pinColors[i];row.appendChild(pinColorCell);tableBody.appendChild(row)}}