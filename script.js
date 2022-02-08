var userList = []

//Lay du lieu tu localStorage ra
var json = localStorage.getItem('userList')
if(json != null && json != '') {
	userList = JSON.parse(json)
}

function registerUser() {
	//Mapping tags trong form register
	var fullname = document.getElementById('fullname_id').value
	var age = document.getElementById('age_id').value
	var email = document.getElementById('email_id').value
	var pwd = document.getElementById('pwd_id').value
	var confirmPwd = document.getElementById('confirm_pwd_id').value

	//Validate pwd
	if(pwd != confirmPwd) {
		alert('Password is not match, Plz check it again!!!')
		return false
	}

	//Luu thong tin
	var isFind = false
	for(var user of userList) {
		if(user.email == email) {
			//update data
			user.fullname = fullname
			user.age = age
			user.pwd = pwd

			isFind = true
			break
		}
	}

	if(!isFind) {
		//insert
		userList.push({
			'fullname': fullname,
			'age': age,
			'email': email,
			'pwd': pwd
		})
	}

	//update & insert
	var json = JSON.stringify(userList)
	//du lieu luu xuong -> int, float, boolean, char, string.
	localStorage.setItem('userList', json)

	return false
}

function loginUser() {
	var email = document.getElementById('email_id').value
	var pwd = document.getElementById('pwd_id').value

	for(var user of userList) {
		if(user.email == email && user.pwd == pwd) {
			//update data
			// alert("Login successfully!!!")
			window.open('show.html', '_self')
			return false
		}
	}

	alert('Login failed!!!')
	return false
}

function showUser() {
	var resultTag = document.getElementById('result')

	//Hien thi thong tin sinh vien len table
	var index = 0
	for(var user of userList) {
		resultTag.innerHTML += `<tr>
				<td>${++index}</td>
				<td>${user.fullname}</td>
				<td>${user.age}</td>
				<td>${user.email}</td>
			</tr>`
	}
}