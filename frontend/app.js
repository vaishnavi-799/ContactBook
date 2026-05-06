const userId=localStorage.getItem("userId");

async function loadContacts(){
 const res=await fetch(`http://localhost:5000/api/contacts/${userId}`);
 const data=await res.json();
 document.getElementById("list").innerHTML=data.map(c=>`
 <div class="contact">
 <div>${c.name}<br><small>${c.phone} • ${c.category}</small></div>
 <div class="icon-btn" onclick="deleteContact('${c._id}')">
 <i class="fa-solid fa-trash"></i></div>
 </div>`).join("");
}

async function addContact(){
 await fetch("http://localhost:5000/api/contacts",{
 method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify({
 userId,
 name:document.getElementById("name").value,
 phone:document.getElementById("phone").value,
 category:document.getElementById("category").value
 })
 });
 loadContacts();
}

async function deleteContact(id){
 await fetch(`http://localhost:5000/api/contacts/${id}`,{method:"DELETE"});
 loadContacts();
}

async function searchContact(){
 const key=document.getElementById("search").value;
 if(key===""){loadContacts();return;}
 const res=await fetch(`http://localhost:5000/api/contacts/search/${userId}/${key}`);
 const data=await res.json();
 document.getElementById("list").innerHTML=data.map(c=>`
 <div class="contact">
 <div>${c.name}<br><small>${c.phone} • ${c.category}</small></div>
 </div>`).join("");
}

loadContacts();
