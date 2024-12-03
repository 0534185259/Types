function resultp()
{
  let n1=  document.getElementById("num1").value
  let n2=  document.getElementById("num2").value
  let res= +n1+(+n2)
  alert( n1+"+"+n2+"="+(res))
}

function resultm()
{
  let n1=  document.getElementById("num1").value
  let n2=  document.getElementById("num2").value
  let res=n1*n2
   alert(n1+"*"+n2+"="+res)
}

function resultpo()
{
  let n1=  document.getElementById("num1").value
  let n2=  document.getElementById("num2").value
  let res=n1**n2
  alert(n1+"^"+n2+"="+res)
}

function save()
{
    let name=  document.getElementById("name").value||"geust"
    let pass=  document.getElementById("pass").value
    alert("name:   "+name+"\n "+"password:   "+pass)
}
function bin()
{
    let n1= (document.getElementById("num1").value) 
    let n2= (document.getElementById("num2").value) 
    
    alert((parseInt(n1,2)+parseInt(n2,2)).toString(2))
}