function attachEvents() {
    $('.button').on('click',  (event) => {
        let target = $(event.target);
        $('.selected').removeClass('selected');
        target.addClass('selected');

        // if(!target.hasClass('selected')){
        //     target.addClass('selected');
        // }else{
        //     target.removeClass('selected');
        // }
    })
}