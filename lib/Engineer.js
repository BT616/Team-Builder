
class Engineer{
    constructor (name,id,email,github){
        super(name,id,email)
        this.github;
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    } 
};
    
    module.exports =Engineer.js;