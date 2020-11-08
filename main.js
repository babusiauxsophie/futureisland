(() => {
    const app = {
        initialize(){
            console.log("1.Applecation started");
            this.printHoofdNavigatie();
            this.printLineup();
            this.printSocials();
            setInterval(() => {
               this.printCountdownKlok() 
            }, 1000);
            this.openDetails();
            /*this.setInterval();*/
        },

        printHoofdNavigatie() {
            
            this.$navigatie = document.querySelector(".container-mainnav");
            let tempString ="";
            hoofdNavigatie.forEach((nav) => {
                tempString += `<a class="nav-container__item" href="${nav.link}" target="_blank">${nav.naam}</a>`;
            });
            this.$navigatie.innerHTML = tempString;
        },

        printLineup() {
            
            this.$lineup = document.querySelector(".container-lineup");
            let tempString = "";
            lineup.forEach((artist) => {
                tempString += `
                <div class="artist-container" id="${artist.id}">
                    <img src="${artist.picture.small}" id="${artist.id}">
                    <h3>${artist.artist.name}</h3>
                    <p>${this.dagVanDeWeek(artist.from)} ${artist.place.name}</p>
                </div>`;
                
            });
            this.$lineup.innerHTML = tempString;
        },

        openDetails(){
           const artistContainer = document.querySelectorAll(".artist-container");
           artistContainer.forEach((el ,i ) => el.addEventListener('click', (ev) => {
               console.log(ev.target.id)
               this.printDetail(i)
            
           }))
        },


        countDownKlok() {
            const nu = new Date();
            const datumFestival = 1625148000000;
            let restTijd = Math.floor((datumFestival - nu) / 1000);
            const dagFormule = 24 * 60 * 60;
            const dag = Math.floor(restTijd / dagFormule);
            restTijd -= dag * dagFormule; 
            const uurFormule = 60 * 60;
            const uren = Math.floor(restTijd / uurFormule);
            restTijd -= uren * uurFormule; 
            const minuutFormule = 60;
            const minuten = Math.floor(restTijd / minuutFormule);
            restTijd -= minuten * minuutFormule; 
            const seconden = restTijd
            let string = `<p>${dag}days ${uren}hours ${minuten}minutes ${seconden}seconds</p>`
            return string;
            
        },

        printCountdownKlok(){
            const $klok = document.querySelector(".klok");
            $klok.innerHTML = this.countDownKlok();
        },

        printSocials() {
            this.$socials = document.querySelector(".container-socials");
            let tempString ="";
            socials.forEach((socials) => {
                tempString += `<a class="socials__item" href="${socials.link}" target="_blank">${socials.naam}</a>`;
            });
            this.$socials.innerHTML = tempString;
        },

        dagVanDeWeek (datum){
            const dag = new Date(datum).getDay();
            let tempString = ""
            if (dag === 0){
                tempString = "Zondag";
            }else if(dag === 1){
                tempString = "Maandag";
            }else if(dag === 2){
                tempString = "Dinsdag";
            } else if(dag ===3){
                tempString = "Woensdag"
            }else if(dag === 4){
                tempString = "Donderdag"
            }else if(dag === 5){
                tempString = "Vrijdag"
            }else if(dag === 6){
                tempString = "Zaterdag"
            }
            return tempString; 
        
        },

        printDetail(i){
            const naam =  lineup[i].artist.name;
            const picture =  lineup[i].picture.large;
            const synopsis =  lineup[i].artist.synopsis;
            const media = lineup[i].media.sourceId;
            const website = lineup[i].artist.socials.website;
            const facebook = lineup[i].artist.socials.facebook;
            const twitter = lineup[i].artist.socials.twitter;
            const instagram = lineup[i].artist.socials.instagram;
            let tempString = `
            <h2>${naam}</h2>
            <img src="${picture}">
            <p>${synopsis}</p>
            <iframe width="841" height="526" src="https://www.youtube.com/embed/${media}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <ul>
                <li>
                    <a href="${website}" target="_blank">${website}</a>
                </li>
                <li>
                    <a href="${facebook}" target="_blank">${facebook}</a>
                </li>
                <li>
                <a href="${twitter}" target="_blank">${twitter}</a>
                </li>
                <li>
                <a href="${instagram}" target="_blank">${instagram}</a>
                </li>
            </ul>
            `
            const $detail = document.querySelector(".container-detail");
            $detail.innerHTML = tempString;
        },
    }



        app.initialize()
})();


