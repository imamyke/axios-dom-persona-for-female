const refresh = document.querySelector('.refresh')
const mainContainer = document.querySelector('.main .container')

refresh.addEventListener('click', function () {
  axios.get('https://webdev.alphacamp.io/api/v1/users/random?results=3&gender=female')
    .then((res) => {
      // 將要增加的 data 資訊存進 addInfoArray
      const infoData = res.data.results
      let addInfoArray = infoData.map(info => {
        return {
          name: info.name,
          avatar: info.avatar,
          gender: info.gender,
          age: info.age,
          birthday: info.birthday,
          region: info.region,
          email: info.email,
        }
      })

      // 將 addInfoArray 資料放進 addNewEle 裡
      let addNewEle = document.createElement('div');
      addNewEle.setAttribute('class', 'row');

      let addPersonaInfo = ''
      for(let i = 0; i < 3; i++) {
        addPersonaInfo = addPersonaInfo + `
          <div class="col-4-12">
            <div class="card">
              <div class="avatar">
                <div class="image__container">
                  <div class="image" style="background-image: url('${addInfoArray[i].avatar}');"></div>
                </div>
              </div>
              <div class="profile">
                <h2 class="profile__title">PROFILE</h2>
                <ul class="list">
                  <li class="item">Name:<span class="info">${addInfoArray[i].name}</span></li>
                  <li class="item">Gender:<span class="info">${addInfoArray[i].gender}</span></li>
                  <li class="item">Age:<span class="info">${addInfoArray[i].age}</span></li>
                  <li class="item">Birth:<span class="info">${addInfoArray[i].birth}</span></li>
                  <li class="item">Region:<span class="info">${addInfoArray[i].region}</span></li>
                  <li class="item">E-mail:<span class="info">${addInfoArray[i].email}</span></li>
                </ul>
              </div>
            </div>
          </div>                     
        `
      }
      addNewEle.innerHTML = addPersonaInfo

      // 往後增加人數
      mainContainer.appendChild(addNewEle) 
      // 清空 addInfoArray
      addInfoArray = []
    })
    .catch((err) => {
      console.log(err);
    })
})

$(document).ready(function () {
  // 導覽列的變化 偵測視窗滾動事件
    $(window).scroll(function(){
      // 抓取滾動距離
      scrolledPx = $(this).scrollTop(); 
      scrolledPx >= 200 ? $('.navbar').addClass('active') : $('.navbar').removeClass('active');
    })
})
