function getModel() {
    //alert('Function loaded');
    let input1, input2, result;

    function init(num1Sel, num2Sel, resultSel) {
       // alert('init');
        input1 = $(num1Sel);
        input2 = $(num2Sel);
        result = $(resultSel);
    }

    function add() {
        //alert('add');
        result.val(Number(input1.val()) + Number(input2.val()));
    }

    function subtract() {
        result.val(Number(input1.val()) - Number(input2.val()));
    }

    return {
        init,
        add,
        subtract
    }
}