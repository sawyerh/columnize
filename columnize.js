(function( $ ){
	$.fn.columnize = function( options ) {
  	
		var settings = {
			'wrapper' : '<div class="cols-container"></div>',
			'columns' : 2,
			'container' : '<ul></ul>'
		};
	
		if ( options ) { 
			$.extend( settings, options );
		}
	
		return this.each(function(){
			
			var $this = $(this);
			var items = $this.children();
			var cols = settings.columns;
			var perCol = Math.floor( items.length/cols );
			var extras = items.length % cols;

			var wrap = $(settings.wrapper);			
			$this.before(wrap);

			var i = 0;	
			var container;
			var hasExtra;

			for( var col = 0; col < cols; col++){
				container = $(settings.container);
				container.addClass('col col-'+(col+1));
				
				hasExtra = col < extras ? 1 : 0;

				for( var row = 0; row < (perCol + hasExtra); row++){
					container.append( items.get(i++) );
				}

				wrap.append(container);
			}

			$this.remove();
			
		}); // return
	
	};
})( jQuery );