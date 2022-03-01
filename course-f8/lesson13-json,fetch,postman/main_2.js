// function get, create, update,delete course
// function start => run chuong trinh chinh
// function: get info courses
// function: create course 
// function: delete course


var courseApi = 'http://localhost:3000/course';

function start() {
  getCourses(renderCourses);
  // diễn giải: getCourses(function(courses) {
  //   renderCourses(courses);
  // });
  handleCreateForm();
}


start();

  
// Function
function getCourses(callback) {
  fetch(courseApi)
    .then(function(response) {
      return response.json();
    })
    .then(callback);
}

// Fetch API Create
function createCourse(data, callback) {
  var options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
  
  fetch(courseApi, options)
    .then(function(response) {
      return response.json();
    })
    .then(callback);

}

// Fetch API Delete
function handleDeleteCourse(id) {
  var options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  };
  fetch(courseApi + '/' + id, options)
    .then(function(response) {
      return response.json();
    })
    .then(function() {
      // call api, de load lai
      // getCourses(renderCourses);

      // thực tế khi làm tránh call api nhiều => gây sập server, chậm lag,... 
      // => dựa vào logic xử lý => khi xóa tag ul => trỏ tới class của ul rồi xóa đi.
      var courseItem = document.querySelector('.course-item-' + id)
      if (courseItem){
        courseItem.remove();
      }
    });
}

// Fetch API Update
function updateCourse(id, data, callback) {
  var options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  };
  
  fetch(courseApi + '/' + id, options)
    .then(function(response) {
      return response.json();
    })
    .then(callback);
}

// Render UI
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector('#list-courses');
  var htmls = courses.map(function(course) {
    return `
      <li class="course-item-${course.id}"> 
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">Delete</button>
        <button onclick="handleUpdateCourse(${course.id})">Update</button>
      </li>
    `;
  })
  listCoursesBlock.innerHTML = htmls.join('');

}

// handle Create
function handleCreateForm() {
  var createBtn = document.querySelector('#create');
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var formData = {
      name: name,
      description: description
    };
    createCourse(formData, function() {
      getCourses(renderCourses);
    });
  }
}

// handle Update
// Khi Click vào update
// Lấy được id của khóa học cần update
// Lấy dữ liệu của khóa học hiện tại điền vào input
// Đổi nút Create thành nút Cập nhật
// Sau khi cập nhật xong đổi nút cập nhật thành nút Create
function handleUpdateCourse(id) {
  const btnElement = document.querySelector('#update');
  var btnCreate = document.querySelector('#create');

  // when press "Update" trong Course => show/hidden
  btnElement.style.display = 'block';
  btnCreate.style.display = 'none';
  // document.querySelector("h2.titleCreate").textContent = "Update Khóa Học";

  fetch(courseApi)
    .then(function(response) {
      return response.json();
    })
    .then(function(courses) {
      var courseById = courses.find(function(course) {
        return course.id === id;
      });
      document.querySelector('input[name="name"]').value = courseById.name;
      document.querySelector('input[name="description"]').value = courseById.description;

    });
    btnElement.onclick = function () {
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector('input[name="description"]').value;
      var formData = {
        name: name,
        description: description,
      };

      updateCourse(id, formData, function () {
        getCourses(renderCourses);
      });

      // Reset values after update
      document.querySelector('input[name="name"]').value = "";
      document.querySelector('input[name="description"]').value = "";

      
      // after update => show/hidden
      btnElement.style.display = 'none';
      btnCreate.style.display = 'block';
    };
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 
function editFormRender(id) {

  // Xóa nút Create khi bấm nút edit
  var createBtn = document.querySelector('#create')
  createBtn.remove()
  
  // Tạo nút Lưu thay đổi
  var btnBox = document.querySelector("#btn-box")
  var newBtn = document.createElement("button")
  var btnText = document.createTextNode("Save changes")
  newBtn.appendChild(btnText);
  newBtn.setAttribute("onclick", `handleEditCourse(${id})`)
  newBtn.setAttribute("id", "save")
  btnBox.appendChild(newBtn);

  // Lấy dữ liệu của phần cần chỉnh sửa và in ra input
  var editInputName = document.querySelector('input[name="name"]')
  var editInputDescription = document.querySelector('input[name="description"]')
  var options = {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    },
  }
  fetch(coursesApi, options)
    .then(function(respond) {
      return respond.json()
    })
    .then(function(data) {
      var rightItem = data.find(function(item) {
        return item.id === id
      })
      editInputName.value = rightItem.name
      editInputDescription.value = rightItem.description
    })
}

function editCourse(id, formData, callback) {
  var options = {
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json' 
    },                                        body: JSON.stringify(formData)
  }
  fetch(coursesApi + '/' + id, options)
    .then(function(respond) {
      return respond.json()
    })
    .then(callback)
}

function handleEditCourse(id) {
  var name = document.querySelector('input[name="name"]').value;                // Lấy dữ liệu name
  var description = document.querySelector('input[name="description"]').value   // và description được điền vào form
  
  var formData = {
    name: name,
    description: description
  };
  editCourse(id, formData, function() {
    getCourses(renderCourses);
  });

  var saveBtn = document.querySelector("#save")
  saveBtn.remove()
  addCreateBtn()
  document.querySelector('input[name="name"]').value = '';
  document.querySelector('input[name="description"]').value = '';
}

function addCreateBtn() {
  var btnBox = document.querySelector("#btn-box")
  var newBtn = document.createElement("button")
  var btnText = document.createTextNode("Create")
  newBtn.appendChild(btnText);
  newBtn.setAttribute("id", "create")
  btnBox.appendChild(newBtn);
}

*/