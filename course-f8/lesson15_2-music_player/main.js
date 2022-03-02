// Some songs may be faulty due to broken links. Please replace another link so that it can be played


/**
 * 1.Render songs
 * 2.Scroll top
 * 3.Play / pause / seek
 * 4.CD rotate  
 * 5.Next / prev
 * 6.Random
 * 7.Next / Repeat when ended
 * 8.Active song
 * 9.Scroll active song into view
 * 10.Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "IAMSAMSON_PLAYER";
const LIST_STORAGE_KEY = "MUSIC_LIST";

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const preBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $(".playlist");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat:false,
    // config: {},
    // (1/2) Uncomment the line below to use localStorage
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: "Bước Qua Nhau",
            singer: "Vũ",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1024/BuocQuaNhau-Vu-7120388.mp3?st=I9W59X1Odyi9QRGTehWfHg&e=1638708688",
            image: "https://avatar-nct.nixcdn.com/song/2021/11/19/6/d/9/1/1637317177185.jpg"
        },
        {
            name: "Ái Nộ",
            singer: "Masew, Khôi Vũ",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1021/AiNo1-MasewKhoiVu-7078913.mp3?st=ngcoKLRyRorVu8KqUeS1wg&e=1638762705",
            image: "https://avatar-nct.nixcdn.com/song/2021/08/30/2/1/a/e/1630316309035.jpg"
        },
        {
            name: "Muộn Rồi Mà Sao Còn",
            singer: "Sơn Tùng M-TP",
            path: "https://c1-ex-swe.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=tD-Ln6qGqkdH659AeuHsjQ&e=1638782546",
            image: "https://avatar-nct.nixcdn.com/song/2021/04/29/9/1/f/8/1619691182261.jpg"
        },
        {
            name: "Thức Giấc",
            singer: "Da LAB",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1018/ThucGiac-DaLAB-7048212.mp3?st=1LcQhTisk8WrOQuzK4p86Q&e=1638782708",
            image: "https://avatar-nct.nixcdn.com/song/2021/07/14/8/c/f/9/1626231010810.jpg"
        },
        {
            name: "Độ Tộc 2",
            singer: "Masew, Độ Mixi, Phúc Du, Pháo",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1020/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3?st=ehahZN3-iX9xYdBFgDgGcg&e=1638782785",
            image: "https://avatar-nct.nixcdn.com/song/2021/08/10/b/2/e/0/1628579601228.jpg"
        },
        {
            name: "Chúng Ta Sau Này",
            singer: "T.R.I",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=l56Wr1fLE9fMnFehhpo5xg&e=1638782875",
            image: "https://avatar-nct.nixcdn.com/song/2021/01/27/5/2/2/b/1611738358661.jpg"
        },
        {
            name: "Dịu Dàng Em Đến",
            singer: "ERIK, NinjaZ",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1021/DiuDangEmDen-ERIKNinjaZ-7078877.mp3?st=QmjyqbnGv3jClPKm4oA1YQ&e=1638782938",
            image: "https://avatar-nct.nixcdn.com/song/2021/08/30/2/1/a/e/1630307726211.jpg"
        },
        {
            name: "Hương",
            singer: "Văn Mai Hương, Negav",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/Huong-VanMaiHuongNegav-6927340.mp3?st=PvHOWlRnF6TymvggYGding&e=1638783027",
            image: "https://avatar-nct.nixcdn.com/song/2021/01/22/9/f/2/1/1611280898757.jpg"
        },
        {
            name: "Miên Man",
            singer: "DUTZUX",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1024/MienMan-DUTZUX-7120884.mp3?st=yTOFq5aH8FGEvbm-_n_KTA&e=1638783090",
            image: "https://avatar-nct.nixcdn.com/song/2021/11/19/6/d/9/1/1637320885751.jpg"
        },
        {
            name: "Có hẹn với thanh xuân",
            singer: "MONSTAR",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1020/cohenvoithanhxuan-MONSTAR-7050201.mp3?st=PjrrnZ2dZ3ffA6R7dRrppQ&e=1638783161",
            image: "https://avatar-nct.nixcdn.com/song/2021/07/16/f/4/9/8/1626425507034.jpg"
        }
    ],

    // Array stored love song
    love: [],    

    setConfig: function(key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },

    /****************** DEFINE PROPERTIES ******************/
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    /****************** HANDLE EVENTS ******************/
    handleEvents: function () {
        // gan this cho _this => can use in function young
        const _this = this; 
        const cdWidth = cd.offsetWidth;

        // Handle CD spins / stops
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000, //ten seconds
            iterations: Infinity
        })
        cdThumbAnimate.pause();

        // Handles CD zoom enlargement / reduction
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? (newCdWidth + 'px'): 0 + 'px'
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Handle when click play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        // Handle When the song is played
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Handle When the song is pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // Handle When the song progress changes
         audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100)
                progress.value = progressPercent
            }
        }

        // Handling when seek
        progress.oninput = function(e) {
            const seekTime = e.target.value * (audio.duration / 100)
            audio.currentTime = seekTime;
        }

        // Handling When next song
        nextBtn.onclick = function () {
            if(_this.isRandom) {
                _this.randomSong()
            }else {
                _this.nextSong()
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Handling When prev song
        preBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.previousSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Handling on / off random song
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Single-parallel repeat processing
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Handle next song when audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Listen to playlist clicks
        playlist.onclick = function(e) {
            const songNode = e.target.closest(".song:not(.active)");
            if (songNode || e.target.closest(".option")) {
                // Handle when clicking on the song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index); //can use songNote.getAttribute('data-index')
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                // Handle when clicking on the song option
                if (e.target.closest(".option")) {
                    var name = e.target.closest('.option').dataset.name
                    var singer = e.target.closest('.option').dataset.singer
                    var index = e.target.closest('.option').dataset.index
                    var image = e.target.closest('.option').dataset.image
                    var path = e.target.closest('.option').dataset.path
                    const getLocalSongs = _this.love.filter(function(value){
                        return value.name == name
                    })
                    if(getLocalSongs.length >= 1){
                        $('.like').innerText = 'Xóa bài hát khỏi danh sách yêu thích'
                        $('.like').classList.add('active')
                        $('.like').setAttribute('value','unlike')
                    }else {
                        $('.like').innerText = 'Thêm bài hát vào danh sách yêu thích'
                        $('.like').setAttribute('value','like')
                        $('.like').classList.remove('active')
                    }
                    $('.navbar-options').classList.add('active')
                    $('.box').classList.add('active')
                    $('.download a').setAttribute('href', path)
                    var opt = {'data-name':name, 'data-singer': singer, 'data-index':index,'data-image': image,'data-path': path};
                    Object.keys(opt).forEach(function(key){
                        $('.like').setAttribute(key, opt[key])
                    })
                    _this.hendleLikeSongs(opt, isMusic, animateThumb)
                }
            }
            $('.box').onclick = function(e){
                e.target.classList.remove('active')
                $('.navbar-options').classList.remove('active')
            }
        }
    },

    /****************** SCROLL TO ACTIVE SONG ******************/
    scrollToActiveSong: function () {
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 300);
    },

    /****************** LOAD CURRENT SONG ******************/
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },

    previousSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong();
    },

    nextSong: function() {
        this.currentIndex++ 
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },

    randomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    hendleLikeSongs: function(dataSongs, isMusic, animateThumb){
        const name = dataSongs['data-name']
        const singer = dataSongs['data-singer']
        const path = dataSongs['data-path']
        const image = dataSongs['data-image']
        const index = dataSongs['data-index']
        const listArray = {
            name,
            singer,
            path,
            image
        }
        const _this = this
        $('.like').onclick = function(e){
        if(e.target.getAttribute('value') == 'like') {
            if(_this.love.length >= 0 && `isMusic` != 'english' && isMusic != 'korea' && isMusic != 'china'){
                isMusic = 'vietnamese';
            }
            _this.love.push(listArray)
            localStorage.setItem(LIST_STORAGE_KEY, JSON.stringify(_this.love))
            _this.setConfig(name, name)
            _this.renderSongs(isMusic)
            $('.like').classList.add('active')
            $('.like').innerText = 'Xóa bài hát khỏi danh sách yêu thích'
            $('.box').click()
            alert('Đã thêm vào danh sách yêu thích')
        }else if(e.target.getAttribute('value') == 'unlike'){
            const deleteArray = _this.love.filter(function(value){
                return value.name != name
            })
            const storageMusic = JSON.parse(localStorage.getItem(LIST_STORAGE_KEY))
            newArray = deleteArray 
            _this.love = newArray 
            localStorage.setItem(LIST_STORAGE_KEY, JSON.stringify(_this.love))
            _this.setConfig(name,null)
            newArray = []
            _this.renderSongs(isMusic)

            if(storageMusic[_this.currentIndex].name){
                if(storageMusic[_this.currentIndex].name == name && _this.config[isMusic] == 0 && isMusic == 'love'){
                    _this.config[isMusic] = 0
                    player.classList.remove('playing')
                    _this.isPlaying = false
                    progress.value = 0
                    animateThumb.pause()
                    _this.love.length > 0 ? _this.renderSongs(isMusic) : ''
                    _this.love.length > 0 ? _this.loadCurrentSong(isMusic) : ''
                }                
            }
            if(_this.config[isMusic] > 0 && isMusic == 'love'){
                if(storageMusic[_this.currentIndex].name != name && index > _this.config[isMusic]){
                    _this.renderSongs(isMusic)
                }
                if(storageMusic[_this.currentIndex].name != name && index < _this.config[isMusic]){
                    _this.config[isMusic] = _this.config[isMusic] - 1
                    index > _this.currentIndex ? '' : _this.setConfig(isMusic, _this.config[isMusic])
                    _this.currentIndex--
                    _this.renderSongs(isMusic)
                }
                if(storageMusic[_this.currentIndex].name == name && index == storageMusic.length - 1){
                    player.classList.remove('playing')
                    _this.isPlaying = false
                    progress.value = 0
                    animateThumb.pause()
                    _this.currentIndex = --_this.config[isMusic]
                    _this.setConfig(isMusic, _this.currentIndex)
                    _this.loadCurrentSong(isMusic)
                    _this.renderSongs(isMusic)
                }
            }
            if(_this.love.length == 0){
                _this.currentIndex = _this.config[isMusic]
                _this.config[isMusic] = 0
                $('.vietnamese').click()
            }
            $('.like').classList.remove('active')
            $('.like').innerText = 'Thêm bài hát vào danh sách yêu thích'
            $('.box').click()
        }
    }
    },


    /****************** RENDER SONGS ******************/
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                    </div>
                    <div class="option" data-index="${index}" data-path="${song.path}" data-name="${song.name}" data-singer="${song.singer}" data-image="${song.image}">
                        <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
            `;
        })
        playlist.innerHTML = htmls.join('');
    },


    start: function () {

        // Assign configuration from config to application
        this.loadConfig();

        // define custom properties
        this.defineProperties();

        // Listening / handling events (DOM events)
        this.handleEvents();

        // Load the first song information into the UI when running the app
        this.loadCurrentSong();

        // Render playlist
        this.render();

        // Display the initial state of the repeat & random button
        randomBtn.classList.toggle("active", this.isRandom);
        repeatBtn.classList.toggle("active", this.isRepeat);
    }
}

/****************** START APPLICATION ******************/
app.start();