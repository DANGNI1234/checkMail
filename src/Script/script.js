class ask
{
    constructor(ecran, inputtext, submit)
    {

        this.ecran = ecran;
        this.inputtext = inputtext;
        this.submit = submit;
        
    }
    Take_nomber()
    {
        console.log("Take_nomber() called");
        this.submit.addEventListener('click',() => {
            console.log("Button clicked")            
            if(this.inputtext.value === "") {
                console.log("Input is empty");
                this.ecran.value = "Entrer l'email"
                this.ecran.classList.add('error');
                return;
            }        
            this.userinput = this.inputtext.value
            console.log("User input:", this.userinput);
            this.validation();
            this.effaceenter();
        })
        
    }
    effaceenter(){
        console.log("Clearing input text");
        this.inputtext.value = '';
    }
    validation(){
        console.log("Validating email:", this.userinput);
        if (this.userinput.includes("@gmail.com") || this.userinput.includes("/\s")){
            console.log("Email is valid");
            this.ecran.value = "Vous avez un email valide";
            this.ecran.classList.add('success');
        } else {
            console.log("Email is not valid");
            this.ecran.value = "Votre email n'est pas valide";
            this.ecran.classList.add('default');
        }
    }
}

document.getElementById("clique").addEventListener('click', function(){
    var container = document.getElementById("container");
    container.classList.toggle("hidden")
})



const outtext = document.getElementById("ecranelement");
const inputtext = document.getElementById("input_text");
const submit = document.getElementById("Valid");

const oper = new ask(outtext, inputtext, submit);

oper.Take_nomber();
console.log("Script loaded successfully");