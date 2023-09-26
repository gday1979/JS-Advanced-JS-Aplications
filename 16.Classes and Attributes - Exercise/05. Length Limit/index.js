class lengthLimit{
    constructor(maxLength){
        this.maxLength = maxLength;
        this.innerString = '';
    }

    set innerString(value){
        if(value.length > this.maxLength){
            this._innerString = value.substring(0,this.maxLength);
        }else{
            this._innerString = value;
        }
    }

    get innerString(){
        return this._innerString;
    }

    toString(){
        return this.innerString;
    }
}