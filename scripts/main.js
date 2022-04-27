//Each landing page nav iteam should have a button associated with it 
//On click of Landing nav iteam, toggle .hide class on current page and associated page to the button
$(document).ready(function(){
    $('#aboutPg, #skillsPg, #projectPg, #contactPg, #thedrop').toggleClass('hide')
    $('.ddNav' ).slideUp()
    
    $('#landing-nav' ).toggleClass('hide').slideUp()
    window.setTimeout(function(){
        $('#landing-nav' ).slideDown()
    }, 500)

    let currentPage = null

    $('.landing-but').css('cursor','pointer').on('click', function(event){
        let target = event.currentTarget.id
    
        $('#landingContainer').toggleClass('hide')

        switch(target){
            case 'abt':
                $('#aboutPg').toggleClass('hide')
                currentPage = $('#aboutPg')
                
                break;
            case 'skl':             
                $('#skillsPg').toggleClass('hide')
                currentPage = $('#skillsPg')
              
                break;
            case 'prj':
                $('#projectPg').toggleClass('hide')
                currentPage = $('#projectPg')
              
                break;
            case 'cnt':
                $('#contactPg').toggleClass('hide')
                currentPage = $('#contactPg')
               
                break;
        }
    })

    //We need to create the logic behind the dropdown menu
    //this includes noticing when the DD items have been picks
    //and redirecting the user to the proper page after its been clicked
    $('.DD-img').css('cursor', "pointer").on('click',function(){
        console.log('clicked')
        $('.ddNav').slideToggle()

        $('.dd-But').css('cursor', 'pointer').on('click', function(event){
            let target = event.currentTarget.id
            console.log(target)
            switch(target){
                case 'dd-abt':
                    $(currentPage).toggleClass('hide')
                    $('#aboutPg').toggleClass('hide')
                    $('.ddNav').slideUp()
                    currentPage = $('#aboutPg')
                    break;
                case 'dd-skl':
                    $(currentPage).toggleClass('hide')
                    $('#skillsPg').toggleClass('hide')
                    $('.ddNav').slideUp()
                    currentPage = $('#skillsPg')
                    break;
                case 'dd-prj':                  
                    $(currentPage).toggleClass('hide')
                    $('#projectPg').toggleClass('hide')
                    $('.ddNav').slideUp()
                    currentPage = $('#projectPg')
                    break;
                case 'dd-cnt':              
                    $(currentPage).toggleClass('hide')
                    $('#contactPg').toggleClass('hide')
                    $('.ddNav').slideUp()
                    currentPage = $('#contactPg')
                    break;
                case 'dd-home':                
                    $(currentPage).toggleClass('hide')
                    $('#landingContainer').toggleClass('hide')
                    $('.ddNav').slideUp()
                    currentPage = $('#landingContainer')
                    break;
            }
        })
    })

        // API call to zenquotes for desktop landing page
        // let quoteCall = $.ajax({
        
        //     method: "get",
        //     url: "https://zenquotes.io/api/random/afd050716de4256d0806a52d07ad783c36594faa"
        // })
        //     quoteCall.then(function(response){
        //         console.log(response)
        //         $('#quote').append(`${response[0].h}`)
        //     })
        //     .catch(function(){
        //         console.log("Error")
        //     })

})