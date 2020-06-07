var albumInfo = [
  {name: "THE STORY BEGINS", subtitle: "The 1st Mini Album"},
  {name: "PAGE TWO", subtitle: "The 2nd Mini Album"},
  {name: "TWICEcoaster: LANE 1", subtitle: "The 3rd Mini Album"},
  {name: "TWICEcoaster: LANE 2", subtitle: "The 1st Special Album"},
  {name: "SIGNAL", subtitle: "The 4th Mini Album"},
  {name: "Twicetagram", subtitle: "The 1st Album"},
  {name: "Merry & Happy", subtitle: "The 1st Album: Repackage"},
  {name: "What is Love", subtitle: "The 5th Mini Album"},
  {name: "Summer Nights", subtitle: "The 2nd Special Album"},
  {name: "YES or YES", subtitle: "The 6th Mini Album"},
  {name: "The Year of \"Yes\"", subtitle: "The 3rd Special Album"},
  {name: "FANCY YOU", subtitle: "The 7th Mini Album"},
  {name: "Feel Special", subtitle: "The 8th Mini Album"},
  {name: "MORE & MORE", subtitle: "The 9th Mini Album"},
]

$("document").ready(function(){
    $('.carousel').carousel(
      {
        duration: 200,
        indicators: true,
        //find id of active class
        onCycleTo: function(ele){
          var index = $(ele).index();
          var imageUrl = "assets/backgrounds/background" + index + ".jpg";
          var chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
          var winNav = window.navigator;
          var isEdge = winNav.userAgent.indexOf("Edge") > -1;
          if(chrome && isEdge === false){
            $(".b-image").css({
              display: "inline-block",
              backgroundImage: "url(" + imageUrl + ")",
              transition: "all ease-in",
              WebkitTransition: "all ease-in",
              transitionDelay: "1s",
              transitionDuration: "1s",
            })
          } else {
            $(".b-image").css({
              display: "inline-block",
              backgroundImage: "url('assets/backgrounds/background-no-chrome.png')",
            })
          }
          $('#albumName').text(albumInfo[index].name);
          $('#albumSubtitle').text(albumInfo[index].subtitle);
        }
      }
    );
    $('#btnRight').click(function() {
      $('.carousel').carousel('next');
    });
    $('#btnLeft').click(function() {
      $('.carousel').carousel('prev');
    });
  });

//wait for transformation to complete

//change background based on id  

// $(function(){  // $(document).ready shorthand
//   $('.carousel').fadeIn('slow');
// });
