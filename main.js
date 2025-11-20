function loginStudent(){
    const roll=document.getElementById("rollInput").value.trim();
    if(!roll){ alert("Enter Roll Number!"); return; }
    const student=students.find(s=>s.roll===roll);
    if(!student){ alert("Student not found!"); return; }
    localStorage.setItem("currentRoll",roll);
    window.location.href="result.html";
}

function displayResult(student){
    const subjects=student.subjects;
    let total=0,isFail=false;
    const maxMarks=Object.keys(subjects).length*100;
    for(let sub in subjects){
        total+=subjects[sub];
        if(subjects[sub]<33) isFail=true;
    }
    const percentage=((total/maxMarks)*100).toFixed(2);
    const grade=isFail?"Fail":(percentage>=90?"A+":percentage>=80?"A":percentage>=70?"B":percentage>=60?"C":"D");
    const status=isFail?"Fail":"Pass";
    const resultBox=document.getElementById("result");
    resultBox.innerHTML=`
        <div class="result-card">
            <img src="${student.image}" class="student-img">
            <h2>${student.name}</h2>
            <p><strong>Roll:</strong> ${student.roll}</p>
            <hr>
            <h3>Subjects & Marks</h3>
            <table>
                <tr><th>Subject</th><th>Marks</th></tr>
                ${Object.keys(subjects).map(s=>`<tr><td>${s}</td><td>${subjects[s]}</td></tr>`).join("")}
            </table>
            <hr>
            <p><strong>Total:</strong> ${total}/${maxMarks}</p>
            <p><strong>Percentage:</strong> ${percentage}%</p>
            <p><strong>Status:</strong> <span style="color:${status==="Pass"?"green":"red"}">${status}</span></p>
            <p><strong>Grade:</strong> ${grade}</p>
        </div>
    `;
}

function adminLogin(){
    const user=document.getElementById("adminUser").value;
    const pass=document.getElementById("adminPass").value;
    if(user==="admin" && pass==="admin123"){
        window.location.href="dashboard.html";
    } else { alert("Invalid admin credentials!"); }
}
function adminLogin() {
  const username = document.getElementById("admin").value.trim();
  const password = document.getElementById("pass").value.trim();
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }
  const adminUser = "admin";
  const adminPass = "1234";
 if (username === adminUser && password === adminPass) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Try again.");
  }
}

