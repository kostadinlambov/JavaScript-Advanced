function deleteByEmail() {
    let trArray = document.getElementsByTagName('tr');
    let targetValue = document.getElementsByName('email')[0].value.trim();
    for (let i = 0; i < trArray.length; i++) {
        if(targetValue === trArray[i].children[1].textContent){
            trArray[i].parentNode.removeChild(trArray[i]);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}