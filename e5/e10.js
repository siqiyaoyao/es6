var transfer = (str)=>{
    return String(str).replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
};

function html(str,...val){
    var arr = str[0];
    for(var i = 0; i <val.length;i++){
        arr = arr + transfer(val[i])+str[i+1];
    }
    //console.log(str);
    //console.log(val);
    return arr;
}



console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);