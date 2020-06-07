
(function($) {
    // This function is only responsible for the function of a carousel picture each time it is called
    // In other words, only one carousel image will be generated, and the scope of this function can only be assigned to one carousel image
    // It is required to pass the root label of the current carousel when calling this function
    // The formal parameter ele here is the root label of a carousel
    var slide = function(ele,options) {
        var $ele = $(ele);
        // default setting options
        var setting = {
        		// Control the animation time of the carousel
            speed: 700,
            // Control the interval time (rotation speed)
            interval: 2000,
            
        };
        // Object merge
        $.extend(true, setting, options);
        // Specify the position and status of each picture
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 288, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // Event
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        })

        move();
        autoPlay();

        // Let each li correspond to each state of the above states
        // Let li expand from the middle
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        // switch to the next one
        function next() {
        // Principle: Move the last element of the array to the first
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
        // Find the root label of the carousel image to be rotated and call slide ()
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        // return value to support chained calls
        return this;
    }
})(jQuery);
