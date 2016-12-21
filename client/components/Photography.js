import React, { Component, ExecutionEnvironment } from 'react';
import Helmet from 'react-helmet'; // document head manager
import $ from 'jquery';

export default class Photography extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      document.documentElement.addEventListener('scroll', this.handleScroll);
    }

    // Disable right-click on images
    $('img.copyright').bind('contextmenu', function(e) {
        return false;
    });
    

    // Open collection links in same window in iOS
    if (("standalone" in window.navigator) && window.navigator.standalone) {
      // For iOS Apps
      $('a').on('click', function(e) {
        e.preventDefault();
        var new_location = $(this).attr('href');
        if (new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined) {
          window.location = new_location;
        }
      });
    }
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.refs.nav.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
    console.log('scrolling', document.documentElement.scrollTop + 'px');
  }

  resize() {
    // var headerHeight = $('header').outerHeight();
    // var footerHeight = $('footer').outerHeight();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var availableHeight = windowHeight - headerHeight - footerHeight;
    var photoHeight = availableHeight;
    
    if ( windowWidth / availableHeight < (7/8) ) { // Portrait orientation
      photoHeight = windowWidth * 8 / 7;
      $('.photowrapper').css('margin-top', (availableHeight - photoHeight + 10)/2 );
    } else if ( windowWidth / availableHeight < (17/9) ) { // Landscape: maximum 16:9 photos plus a little extra
      photoHeight = windowWidth * 9 / 17;
      $('.photowrapper').css('margin-top', (availableHeight - photoHeight + 10)/2 );
    } else {
      $('.photowrapper').css('margin-top','0');
    }
    $('.infopage, #photos').css('height', availableHeight);
    
    $('.photo').css('height', photoHeight - 20);
  }

  getCurrentPhoto(scrollPosition) {
    var i = 0;
    var totalPhotoWidth = 0;
    var photoPositions = [];
    var currentPhotoIndex = 0;
    var photoMargin = parseInt($('.photowrapper').css('margin-right'));
    
    $('.photowrapper').each(function() {
      photoPositions[++i] = totalPhotoWidth;
      // console.log(i + ': ' + totalPhotoWidth);
      
      photoWidth = $(this).outerWidth() + photoMargin;
      totalPhotoWidth = totalPhotoWidth + photoWidth;
      
      if ( scrollPosition >= photoPositions[i] ) {
        currentPhotoIndex = i;
      }
    });
    return currentPhotoIndex;
  }

  getPhotoPosition(photoIndex) {
    var i = 0;
    var totalPhotoWidth = 0;
    var photoPositions = [];
    var photoPosition;
    var photoMargin = parseInt($('.photowrapper').css('margin-right'));
    
    $('.photowrapper').each(function() {
      photoPositions[++i] = totalPhotoWidth;
      // console.log(i + ': ' + totalPhotoWidth);
      photoWidth = $(this).outerWidth() + photoMargin;
      totalPhotoWidth = totalPhotoWidth + photoWidth;
    });
    return photoPositions[photoIndex];
  }

  handleKeyDownEvent(event) {
    if (event.keyCode == 37) {
      // Left arrow
      event.preventDefault();
    } else if (event.keyCode == 39) {
      // Right arrow
      event.preventDefault();
    }
  }

  handleKeyUpEvent(event) {
    // Keyboard events
    var currentPhoto;
    var scrollPosition;
    var destinationPhotoPosition;
    
    scrollPosition = $('.photography').scrollLeft();
    currentPhoto = this.getCurrentPhoto(scrollPosition);
    console.log(scrollPosition + ' / ' + this.getPhotoPosition(currentPhoto) );
    
    // left/right arrows
    if (event.keyCode == 37) {
      // Left arrow
      if ( scrollPosition == this.getPhotoPosition(currentPhoto) ) {
        destinationPhotoPosition = this.getPhotoPosition(currentPhoto - 1)
      } else {
        destinationPhotoPosition = this.getPhotoPosition(currentPhoto)
      }
      $('.photography').animate({ scrollLeft: destinationPhotoPosition}, 150);
    } 
    if (event.keyCode == 39) {
      // Right arrow
      destinationPhotoPosition = this.getPhotoPosition(currentPhoto + 1);
      $('.photography').animate({ scrollLeft: destinationPhotoPosition}, 150);
    }
  }

  handleScrollEvent(event) {
    console.log(event);
    
    // Re-bind vertical mouse wheel scrolling to horizontal scrolling
    // $('.photography').mousewheel(function(event, delta, deltaX, deltaY) {
    //   event.preventDefault();
    //     var scrollPosition = $('.photography').scrollLeft() - deltaY*2 + deltaX*2;
    //     $('.photography').scrollLeft(scrollPosition);
    // });
    
  }

  render() {
    const photos = source.map((photo, i) => {
      return (
        <div className="photo-wrapper">
          <img className="photo" src={photo.url} key="i" />
        </div>
      )
    });

    return (
      <div class="photography" onKeyDown={this.handleKeyDownEvent} onScroll={this.handleScrollEvent}>
        <Helmet title="The Photography of Simeon Lee" />
        <div id="photos">{photos}</div>
      </div>
    )
  }



}