class Player{
    constructor(){
        let heightMain = document.getElementById('player');
        heightMain.style.height = screen.height + 'px';
        if(screen.width < 620){
            heightMain.style.width = screen.width + 'px';
        }
        let heightDiv = document.getElementById('content');
        heightDiv.style.height = screen.height-300 + 'px';
    }
}
onload = new Player();

class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById('audio_file');
        this.title_audio = document.getElementById('title_radio');
        this.play_pause_button = document.getElementById('play_pause');
        this.isPlayed;
        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause();
        });
        
       
        this.names_radio =[];
        this.names_radio[0]= "CORAN_64K";
        this.names_radio[1]= "DJELFA_64K";
        this.names_radio[2]= "CHAINE1_64K";

        this.sourse_audio =[];
        this.sourse_audio[0]="https://webradio.tda.dz/Coran_64K.mp3";
        this.sourse_audio[1]="https://webradio.tda.dz/Djelfa_64K.mp3";
        this.sourse_audio[2]="https://webradio.tda.dz/Chaine1_64K.mp3";
        
        this.server = 0;

        this.setResource();

        document.getElementById('next').addEventListener("click",()=>{
            if(this.server<this.sourse_audio.length-1){
                ++this.server;
                this.isPlayed = false;
            }else{
                this.server= 0;
            }
            localStorage.setItem("SAVE-POSITION",this.server);
            this.setResource();
        })
        document.getElementById('back').addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isPlayed = false;
            }else{
                this.server= this.sourse_audio.length-1;
            }
            localStorage.setItem("SAVE-POSITION",this.server);
            this.setResource();
        })
    }

    setResource(){
        if(localStorage.getItem("SAVE-POSITION")!=null){
            this.server = localStorage.getItem("SAVE-POSITION");
        }
        this.audio_file.src = this.sourse_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.play_pause();
    }

    play_pause(){
        if(this.isPlayed == false){
            this.play_pause_button.src = './images/pause.png';
            this.audio_file.play();
            this.isPlayed = true;
        }else{
            this.play_pause_button.src = './images/play.png';
            this.audio_file.pause();
            this.isPlayed = false;
        }
    }
}
onload = new Audio_Player();

