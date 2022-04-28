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

    $('#landing-nav li').hover(function(){
        $(this).css("height","75px")
    }, function(){
        $(this).css("height", "50px")
    })


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

        // //API call to zenquotes for desktop landing page
        let quoteCall = $.ajax({
        
            method: "get",
            url: "https://zenquotes.io/api/random/afd050716de4256d0806a52d07ad783c36594faa"
        })
            quoteCall.then(function(response){
                console.log(response)
                $('#quote').append(`${response[0].h}`)
            })
            .catch(function(){
                console.log("Error")
            })
        // API call to google forms for contact submission 
    $('form').on('submit', function(form){
        // form.preventDefault()
        let baseUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd9-kKE1oDYpb8Q-1Sg8U0OV5Fw6MSCLXJT0gC7ItW3sjIkVw"    
        let url = baseUrl += "/formResponse?"

        let inputs = form.currentTarget.childNodes
        inputs.forEach(element => {
            if ((element.localName === "input" || element.localName === "textarea") && element.type !== "submit") {
                url += element.name
                url += "="
                url += element.value
                url += "&" // Having an extra & at the end has no consequences in this case
            }
        })
        $.ajax({
            url: url,
            dataType: 'jsonp',
            headers: {
                "origin": "https://docs.google.com/forms/d/e/1FAIpQLSd9-kKE1oDYpb8Q-1Sg8U0OV5Fw6MSCLXJT0gC7ItW3sjIkVw/viewform?usp=sf_link"
            }
        }).then(function(e) {
            alert("Thanks for the comment, ill be getting back to you shortly!")
        }).catch(function(e) {
            alert("Thanks for the comment, ill be getting back to you shortly!")
        })

        return false
    })
})