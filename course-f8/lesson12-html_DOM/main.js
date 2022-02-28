///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Phan 12: HTML DOM

 * 
*/ 
// Giả sử k cho sẵn 2 array users và comments mà phải call 2 api
// để lấy data về, thì mình Promise.all, và xử lí trong đó luôn ^^

// Call api to get Comments
var users = [
    {
        id: 1,
        name: 'Quang Tran'
    },
    {
        id: 2,
        name: 'Tuyet Tran'
    },
    {
        id: 3,
        name: 'be bong'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Mua cho em cai banh my'
    },
    {
        id:2,
        user_id: 2,
        content: 'ok tí tao mua cho'
    },
    {
        id:3,
        user_id:3 ,
        content: 'Oke anh'
    },
  
]
// rút gọn bài toán chỉ có 2 bước lớn là 

// b1 : cho thằng users và comments cần tìm vào 1 object 
// b2 : từ thằng object đấy ta gọi ra thằng thằng comment và user tương ứng và lối chúng với nhau

// các bạn nhớ thêm 'comment-block' vào thẻ ul  bên html
// Fake API

function getComments() {
    return new Promise(function(resolve){
        setTimeout( function () {
            resolve(comments)
        }, 1000) //Fake tốc độ tải của mạng là 1s
    })
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve){
        var result = users.filter(function(user){ // từ list user_Id thì lấy ra list user có id tương ứng
            return userIds.includes(user.id) 
        })
        setTimeout( function(){ // fake tốc độ tải mạng
            resolve(result)// resolve result là để result có thể lọt và thành công khi ta .then ở dưới
        }, 1000)
    })
}

getComments()
.then (function(comments) {
    var userIds = comments.map(function(comment){ // lấy ra 1 list user_Id
        return comment.user_id;
    })
    return getUsersByIds(userIds) // trả về 1 object có chứa thông tin của thằng  users và thằng comment
    .then(function(users){
       return {
           usersNew: users, //  thằng users đàu tiên chỉ là tên tụ viết ra thôi
           commentsNew: comments, // chỗ này tại anh sơn đặt tên giống nhau lên khó hiểu
       }; 
    });
})
/// Để hiện thị ra một cái comment hoàn chỉnh thì ta phải nối user.name: vs commen.content
// trước hết la phải lấy ra được comment ở trong array comments được trả về ở trê thì dùng vòng lặp lặp qua
// từ comment thì ta có thể lấy ra được user tương ứng ở array user được return ở trên
//xong ta dùng innerHTML để add 1 element vào ul là được
.then(function(data){
   var commentBlock = document.getElementById('comment-block');
   var html = '';
   data.commentsNew.forEach(comment => {
       var user = data.usersNew.find(function(user){
           return user.id === comment.user_id
       })
       html += `<li>${user.name}: ${comment.content}</li>`
   });
   commentBlock.innerHTML = html
});




/////////////////////////////////////////////////////// CACH KHAC XEM LAI

var users = [
    {
      id: 1,
      name: 'bac nguyen'
    },
    {
      id: 2,
      name: 'nguyen nguyen'
    },
    {
      id: 3,
      name: 'F8'
    },
    {
      id: 4,
      name: 'JAVascript'
    }
  ];
  
  var comments = [
    {
      id: 1,
      userId: 1,
      content: 'video hay qua anh oi :))'
    },
    {
      id: 2,
      userId: 3,
      content: 'thank you em ^^'
    },
    {
      id: 3,
      userId: 2,
      content: 'hello'
    }
  ];
  
  
  var getComments =  new Promise(function(resolve) {
    setTimeout(function() {
      resolve(comments);
    }, 1000);
  });
  
  var getUsers = new Promise(function(resolve) {
    setTimeout(function() {
      resolve(users);
    }, 2000);
  });
  
  Promise.all([getComments, getUsers])
    // từ comments và users có được, lọc ra các users đã comment
    .then(function([comments, users]) {
      var userIds = comments.map(function(comment) {
        return comment.userId;
      });
  
      var commentUsers = users.filter(function(user) {
        return userIds.includes(user.id);
      });
  
      return [comments, commentUsers];
    })
    // từ danh sách các comment và user, chuyển sang HTML và hiển thị lên website
    .then(function([comments, commentUsers]) {
      var commentsElement = document.getElementById('comments');
  
      var commentsHTML = comments.map(function(comment) {
        var user = commentUsers.find((u) => { return u.id === comment.userId; });
  
        return `<li>${user.name}: ${comment.content}</li>`;
      });
  
      commentsElement.innerHTML = commentsHTML.join('');
    });
  




///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Phan 13: FETCH    ----   PHAN 1

 * 
*/ 

// Khá hay. Bạn có thể sửa citys thành cities thì sẽ rất ổn.


// Test API tỉnh thành, quận huyện Việt Nam
var citys = 'https://provinces.open-api.vn/api/'
var districts = 'https://provinces.open-api.vn/api/d/'

function startProvince() {
    getCitysApi(renderCityApi)
    getDistricts(renderDistrictsApi)
}

startProvince()

function getCitysApi(callBack) {
    fetch(citys)
        .then(function(response) {
            return response.json()
        })
        .then(callBack)
}

function getDistricts(callBack) {
    fetch(districts)
        .then(function(response) {
            return response.json()
        })
        .then(callBack)
}

function renderCityApi(citys) {
    var listCitys = document.querySelector('[name="city"]')
    var opt = '<option selected="true" disabled="true" >Tỉnh thành...</option>'
    var htmls = citys.map((citys) => {
        return `
            <option value="${citys.code}">${citys.name}</option>
        `
    })
    htmls.join('')
    opt += htmls
    listCitys.innerHTML = opt
}

function renderDistrictsApi(districts) {
    var onChange = document.querySelector('[name="city"]');
    onChange.addEventListener('change', function(e) {
        var listDistricts = document.querySelector('[name="district"]')
        var result = districts.filter((districts) => {
            return districts.province_code == e.target.value
        })
        var htmls = result.map((districts) => {
            return `
                <option>${districts.name}</option>
            `
        })
        listDistricts.innerHTML = htmls.join('')
    })
}







///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Phan 13: FETCH    ----   PHAN 2  -  lesson 95

 * 
*/ 

var postApi = 'https://jsonplaceholder.typicode.com/posts'
var userApi = 'https://jsonplaceholder.typicode.com/users'

var postList = fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var userIds = posts.map(function(post) {
            return post.userId
        })
        return fetch(userApi, userIds)
            .then(function(response) {
                return response.json();
            })
            .then(function(users) {
                var result = users.filter(function(user) {
                    return userIds.includes(user.id);
                })
                return {
                    userList: users,
                    postList: posts 
                }
            })
    })
    .then(function(data) {
        var postBlock = document.getElementById('post-block')

        var html = '';
        data.postList.forEach(function(post) {
            var users = data.userList.find(function(user) {
                return user.id === post.userId;
            })
            console.log(users)
            html += `
            <li>
                <h2>UserName: ${users.name}</h2>
                <h3>Title: ${post.title} </h3>
                <p>Body: ${post.body}</p>
            </li>
            `
        })
        postBlock.innerHTML = html;
    })







///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Phan 13: FETCH    ----   PHAN 3 - lesson 96

 * 
*/ 



var coursesApi = "http://localhost:3333/courses"

fetch(coursesApi)
    .then (function(response){
        return response.json();
    })
    .then (function(courses){
        var htmls = courses.map(function(course){
            return `
            <h1 style="color: red;"> ${course.title} </h1>
            <p>${course.description}</p>
            `
        })
       var html = htmls.join(" ");
       document.querySelector(".javascript").innerHTML = html;
    })
 





///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Phan 13: FETCH    ----   PHAN 3 - lesson 98

 * 
*/ 


var postsApi = 'http://localhost:3000/posts';
var usersApi = 'http://localhost:3000/users';

function getPosts(postsApi) {   
  return fetch(postsApi)
    .then(function(responsive) {
      return responsive.json();
    });
}

function getUsers(usersApi) {
  return fetch(usersApi)
    .then(function(responsive) {
      return responsive.json();
    });
}


getPosts(postsApi)
  .then(function(posts) {
    var userIds = posts.map(function(post) {
      return post.userId;
    });

    return getUsers(usersApi)
      .then(function(users) {
        users = users.filter(function(user) {
          return userIds.includes(user.id);
        });

        return [posts, users];
      });
  })
  .then(function([posts, users]) {
    var postsHTML = posts.map(function(post) {
      var user = users.find(function(user) {
        return user.id === post.userId;
      });

      return `
        <div class="post">
          <span class="user">${user.name}</span>
          <h2 class="title">${post.title}</h2>
          <p class="content">${post.body}</p>
        </div>
      `;
    });

    document.getElementById('posts').innerHTML = 
      postsHTML.join('');
  })
  .catch(function(err) {
    console.log(err);
  });




















