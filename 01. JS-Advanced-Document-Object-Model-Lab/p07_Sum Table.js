function sum() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < rows.length; i++) {
        let cols = rows[i].children;
        sum += Number(cols[cols.length - 1].textContent);
    }
    document.getElementById('sum').textContent = sum;
    // alert(sum);
}