     var urls = document.getElementById("url");
     var app = document.getElementById("app");
     var loading = document.getElementById("loading");
     var loa = document.getElementById("loa");
     var vidio = document.getElementById("vidio");
     var title = document.getElementById("title");
     var info = document.getElementById("info");
     var erro = document.getElementById("error");
     var err = document.getElementById("err");
     var like = document.getElementById("like");
     var komen = document.getElementById("komen");
     var share = document.getElementById("share");
     var music = document.getElementById("music");
     var dvid = document.getElementById("dvid");
     
    
        function send(){
          if (urls.value == "") {
              info.classList.add("input-error")
              urls.value = "masukan url bang !!!!"
                setTimeout(() => {
                   urls.value = ""; 
                   info.classList.remove("input-error");
                }, "1000");
          } else {
            loading.classList.remove("hidden")
            loading.classList.add("block");
            loa.classList.remove("hidden")
            loa.classList.add("block");
            app.classList.add("hidden");
            fetch(`https://tt-api-dl.vercel.app/down?version=v2&link=${urls.value}`)
                 .then((response) => response.json())
                .then(data => {
                    app.classList.remove("hidden")
                    app.classList.add("block");
                    loading.classList.remove("block")
                    loading.classList.add("hidden");
                    loa.classList.remove("block")
                    loa.classList.add("hidden");
                    vidio.src = data.result.video; 
                    music.href = data.result.music;
                    dviv.href = data.result.video; 
                    title.innerHTML = data.result.desc
                    like.innerHTML = data.result.statistics.likeCount
                    komen.innerHTML = data.result.statistics.commentCount
                    share.innerHTML = data.result.statistics.shareCount
                })
                .catch(error => {
                    console.error('Terjadi kesalahan:', error);
                    loading.classList.remove("block")
                    loading.classList.add("hidden");
                    loa.classList.remove("block")
                    loa.classList.add("hidden");
                    erro.classList.remove("hidden")
                    erro.classList.add("block");
                    err.innerHTML = error
                    setTimeout(() => {
                       urls.value = ""; 
                       erro.classList.remove("block")
                       erro.classList.add("hidden");
                    }, "2000");
                });
        }
    }
