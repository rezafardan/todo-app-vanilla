document.addEventListener("submit", (event) => {
  event.preventDefault();
  const isi = document.getElementById("input-form").value;
  const priorty = document.getElementById("priority").value;

  console.log(priorty);
  if (isi.length > 50 || priorty === "none") {
    return alert("Terlalu banyak karakter");
  }

  const item = {
    id: new Date().getTime(),
    isi,
    priorty,
  };

  addTodo(item);
});

// fitur menambahkan todo kedalam list
function addTodo(item) {
  const id = item.id;
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;

  const label = document.createElement("label");
  label.setAttribute("for", id);

  const span = document.createElement("span");
  span.textContent = item.isi;

  li.setAttribute("id", id);
  li.appendChild(input);
  li.appendChild(label);
  label.appendChild(span);

  const ul = document.getElementById("task");
  ul.appendChild(li);
}

// fitur
// user bisa daftar lewat gmail
// user bisa daftar lewat email dan password

// user bisa login

// user dapat mengakses menu profile
// user dapat mengganti foto

// seluruh data todo tersimpan di dalam localstorage

// todo
// ada form input list todo maksimal 100 karakter
// ada tombol submit
// ada pilihan prioritas todo
// prioritas 1 - 2 - 3
// akan diurutkan sesuai prioritas

// setiap menambahkan todo akan muncul checkbox penyelesaian
// apabila sudah selesai todo akan dipindah ke list completed todo

// validasi bila isi input kosong

// ada fitur edit todo
// ada fitur hapus todo

// ada fitur hapus seluruh data todo

// ada fitur filter todo berdasarkan hari
