var test = document.getElementById('tab2')
var text = document.getElementById('input')
var A= []
function render(){
    test.innerHTML = ''
    for(let key in A){
        const a = A[key]
        test.innerHTML += `<li id = ${key}> ${a}<i class="fa-solid fa-xmark"  onclick="removesm(${key})"></i></li>`
    }
}
render()
function add(){
    if(text.value == ''){return alert('Nhap di nao')}
    A.push(text.value.trim())
    render()
}
function functiontest(){
    add()
    render()
    text.value = ''
}
function removesm(index){
    A.splice(index, 1)
    render()
}
function functiontest1(){
    if(A.length == 0){return alert('Nhap di nao')}
    var random = Math.random(A) *(A.length - 1)
    var randomcheck = document.getElementById(`${Math.round(random)}`)
    console.log(randomcheck);
    randomcheck.setAttribute('class', 'goal')
}
render()
