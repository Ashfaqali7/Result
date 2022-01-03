var student1 = {
  name:"Zahoor",
  fatherName:"Noor ali",
  
  age : 28,
  contact:"031534552073",
  isclearallsubject:"True",
 
};
var student2 = {
  name:"Ashfaq Ali Mazahir",
  fatherName:"Jaffer Ali",
  age : 15,
  contact:"03155432073",
  isclearallsubject:"True",
};
var student3 = {
  name:"Yousuf",
  fatherName:"Imran Yusuf",
  age : 66,
  contact:"03060152073",
  isclearallsubject:"True",
};
var student4 = {
  name:"Muhammad ali",
  fatherName:"Jibran",
  age : 29,
  contact:"034420736664", 
  isclearallsubject:"True",
};
var student5 = {
  name:"Muhammad Muneer",
  fatherName:"Ghulam ALi",
  age : 22,
  contact:"03442073754",
  isclearallsubject:"True",
};

var studentList = [student1,student2,student3,student4,student5];
for(var i = 0; i < studentList.length; i++){
studentList[i].rollNo = i+1;

}
var studentdata = document.getElementById("showlist");
for(var i = 0; i< studentList.length;i++){
   var obj = studentList[i];
  //  console.log(obj)
   studentdata.innerHTML += "<tr><td>"+ obj.rollNo +"</td><td>"+ obj.name +"</td><td>"+ obj.fatherName +"</td><td>"+ obj.contact +"</td><td>"+ obj.isclearallsubject +"</td></tr>"

}


   var input1 = document.getElementById("input1");
  var showrollno = document.getElementById("showrollno");
  var showname = document.getElementById("showname");
  var showfathername = document.getElementById("showfathername");
  var showcontact =document.getElementById("showcontact");
  var showresult =  document.getElementById("showresult");
 
function hello(){
 
  for (var i = 0; i < studentList.length; i++) {
  var std = studentList[i];
  if (input1.value == std.rollNo) {
      showrollno.innerHTML = std.rollNo;
      showname.innerHTML = std.name;
      showfathername.innerHTML = std.fatherName;
    showcontact.innerHTML = std.contact;
    showresult.innerHTML = std.isclearallsubject;
  }
 
}
}