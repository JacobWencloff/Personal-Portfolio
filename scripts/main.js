//Each landing page nav iteam should have a button associated with it 
//On click of Landing nav iteam, toggle .hide class on current page and associated page to the button
$(document).ready(function(){
    $('#aboutPg, #skillsPg, #projectPg, #contactPg, #thedrop').toggleClass('hide')

    $('li').css('cursor','pointer').on('click', function(event){
        let target = event.currentTarget.id
        console.log(target)
        $('#landingContainer').toggleClass('hide')

        switch(target){
            case 'abt':
                $('#aboutPg').toggleClass('hide')
                break;
            case 'skl':             
                $('#skillsPg').toggleClass('hide')
                break;
            case 'prj':
                $('#projectPg').toggleClass('hide')
                break;
            case 'cnt':
                $('#contactPg').toggleClass('hide')
                break;
        }
    })
  
    $('.DD-img').css('cursor', "pointer").on('click', function(){
        console.log('clicked')
    })
})