//Object
let card =	{heading:"Full Stack Developer (ReactJS & Python)",
			icon:"",
			options:"Financing options",
			para1:"Month-to-month Installments",
			sal:"Average Salary",
			para2:"3.8 LPA",
			batch:"Batch Size / Branch",
			para3:"10",
			duration:"Program Duration",
			para4: "6 Months",
			mode:"Learning Mode",
			para5:"Classroom / Online",
			linkVal:"Learn More",
			link:"https://fabevy.com/full-stack-developer-course.html"
			};

//create an HTML elements.
let cardSec=document.createElement("div");
let cardHead=document.createElement("h2");
let cardIcon=document.createElement("i");
let cardOptions=document.createElement("h4");
let cardPara1=document.createElement("span");
let cardSal=document.createElement("h4");
let cardPara2=document.createElement("span");
let cardBatch=document.createElement("h4");
let cardPara3=document.createElement("span");
let cardDuration=document.createElement("h4");
let cardPara4=document.createElement("span");
let cardMode=document.createElement("h4");
let cardPara5=document.createElement("span");
let cardLink=document.createElement("a");

//add class or id to an element
cardIcon.setAttribute("class","fa fa-star");
cardLink.setAttribute("href","https://fabevy.com/full-stack-developer-course.html");
cardLink.setAttribute("class","display-block");

//add content for created elements
cardHead.innerHTML= card.heading;
cardIcon.innerHTML=card.icon;
cardOptions.innerHTML=card.options;
cardPara1.innerHTML=card.para1;
cardSal.innerHTML=card.sal;
cardPara2.innerHTML=card.para2;
cardBatch.innerHTML=card.batch;
cardPara3.innerHTML=card.para3;
cardDuration.innerHTML=card.duration;
cardPara4.innerHTML=card.para4;
cardMode.innerHTML=card.mode;
cardPara5.innerHTML=card.para5;
cardLink.innerHTML=card.linkVal;

//AppendChild to html Element
cardSec.appendChild(cardHead);
cardSec.appendChild(cardIcon);
cardSec.appendChild(cardOptions);
cardSec.appendChild(cardPara1);
cardSec.appendChild(cardSal);
cardSec.appendChild(cardPara2);
cardSec.appendChild(cardBatch);
cardSec.appendChild(cardPara3);
cardSec.appendChild(cardDuration);
cardSec.appendChild(cardPara4);
cardSec.appendChild(cardMode);
cardSec.appendChild(cardPara5);
cardSec.appendChild(cardLink);

//access an HTML element and append the div
let cardList= document.getElementById("card-list");
cardList.appendChild(cardSec);

//inline Style
cardLink.style.display="block";
cardLink.style.fontSize="20px";

