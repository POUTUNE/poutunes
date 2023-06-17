$(function() {
    var faqTrigger = $('.faq-question'),
        faqItems = $('.faq-items'),
        lenFaqItems = faqItems.length,
        prevButton = $('.faq-prev-button'),
        nextButton = $('.faq-next-button'),
        moreButton = $('.faq-more-button');

    faqTrigger.on('click', function(event){
		event.preventDefault();
		$(this).next('.faq-answer').slideToggle(200).end()
        .parent('li').toggleClass('content-visible').end()
        .children('p').toggleClass('color-gray').end()
        .children('div').toggleClass('answer_image_visible');
	});

    moreButton.on('click', function(e){
        e.preventDefault();
        let activeItem = $('.faq-items--active');
        let activeItemIndex = activeItem.attr('data-id');
        let nextItem = $(faqItems[activeItemIndex]);

        activeItem.removeClass('faq-items--active');
        nextItem.toggleClass('faq-items--active');
        moreButton.css('display', 'none');
        prevButton.css({'opacity': 1, 'cursor': 'pointer'});
        nextButton.css('display', 'block')

    })

    nextButton.on('click', function(event){
        event.preventDefault();
        let activeItem = $('.faq-items--active');
        let activeItemIndex = activeItem.attr('data-id');
        let nextItem = $(faqItems[activeItemIndex]);
        if (activeItemIndex < lenFaqItems) {
            prevButton.css('color', '#FF67A2');
            activeItem.removeClass('faq-items--active');
            nextItem.toggleClass('faq-items--active');
            if (activeItemIndex == lenFaqItems - 1){
                nextButton.css('color', '#FFFFFF');
            }
        } 
    });

    prevButton.on('click', function(event){
        event.preventDefault();
        let activeItem = $('.faq-items--active');
        let activeItemIndex = activeItem.attr('data-id');
        let prevItem = $(faqItems[activeItemIndex - 2]);
        if (activeItemIndex > 1) {
            nextButton.css('color', '#FF67A2');
            activeItem.removeClass('faq-items--active');
            prevItem.toggleClass('faq-items--active');
            if (activeItemIndex == 2){
                prevButton.css({'opacity': '0', 'cursor': 'pointer'});
                nextButton.css('display', 'none');
                moreButton.css('display', 'block');
            }
        } 
    });
});
