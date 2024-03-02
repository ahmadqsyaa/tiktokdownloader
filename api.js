     var urls = document.getElementById("url");
     var app = document.getElementById("app");
     var loading = document.getElementById("loading");
     var loa = document.getElementById("loa");
     var vidio = document.getElementById("vidio");
     var title = document.getElementById("title");
     var info = document.getElementById("info");
     var erro = document.getElementById("error");
     var err = document.getElementById("err");
     var play = document.getElementById("play");
     var like = document.getElementById("like");
     var komen = document.getElementById("komen");
     var share = document.getElementById("share");
     var music = document.getElementById("music");
     
    
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
            fetch(`https://downtiktok-tau.vercel.app/down?link=${urls.value}`)
                 .then((response) => {
                       response.json();
                      console.log(response)
                  })
                .then(data => {
                    console.log(data.status);
                    app.classList.remove("hidden")
                    app.classList.add("block");
                    loading.classList.remove("block")
                    loading.classList.add("hidden");
                    loa.classList.remove("block")
                    loa.classList.add("hidden");
                    vidio.src = data.video; 
                    music.href = data.music; 
                    title.innerHTML = data.title
                    play.innerHTML = data.play
                    like.innerHTML = data.like
                    komen.innerHTML = data.comment
                    share.innerHTML = data.share
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
