const app = Vue.createApp({
    data() {
        return {
            nome: "Luis",
            idade: 32,
            profissao: "programador",
            showProfile: true,
            profiles: [
                {
                    name: "Luis", 
                    occupation: "programador", 
                    photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.askmen.com%2Ft%2Faskmen_in%2Farticle%2Ff%2Ffacebook-p%2Ffacebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg&f=1&nofb=1&ipt=bff2e7df825ff24ec9ce68a230f0ce3119736d0007851bc7ab82bd5f5f4d6e83&ipo=images", 
                    isFav: false},
                {
                    name: "Maria", 
                    occupation: "engenheiro",
                    photo: "http://thispix.com/wp-content/uploads/2015/06/Copy-of-Edit-1798-1.jpg", 
                    isFav: true},
                {
                    name: "João", 
                    occupation: "pedreiro", 
                    photo: "https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/SmileModifiedKRAK.jpg",
                    isFav: false
                },
                {
                    name: "Oliver", 
                    occupation: "programador", 
                    photo: "https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/SmileModifiedKRAK.jpg",
                    isFav: true
                }
            ],
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeName(name) {
            console.log(this);
            this.nome = name;
        },
        toogleShowProfile() {
            this.showProfile = !this.showProfile;
        },
        handleEvent(e, number) {
            console.log(e);
            if (number) {
                console.log(number);
            }
        },
        handleMouseMove(e) {
            console.log(e);
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toogleFav(profile) {
            profile.isFav = !profile.isFav; 
        }
    },
    computed: {
        filteredProfiles() {
            return this.profiles.filter((profile) => profile.isFav ==  true)
        }
    }
})

app.mount("#app");
console.log("Hello, vue!");