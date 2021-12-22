function onClick1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    var result = parseInt(f1[0].value) * parseInt(f2[0].value)
    r.innerHTML = result;
    let с = document.getElementById("button1");
    return false;
  }
  function onClick2() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    r.innerHTML = "";
    f1.value = "";
    f2.value = "";
    alert("MPX");
    return false;
      
  }
