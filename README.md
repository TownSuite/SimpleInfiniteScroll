# SimpleInfiniteScroll
Super simple infinite scroll


# Example

```html
<div id="infinite-scroll">
	hi all<br />
	</div>

	<script src="http://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
	<script src="iscroll.js" type="text/javascript"></script>
  <script type="text/javascript">
    $(document).ready(function () {
			callback();
		
			infiniteLoad(callback);
    });
		
		function callback()
		{		
		  // do whatever you want to do
			var str="";
			for(var i=0; i<100; i++)
			{			
				str = str + "<p>" + i + "</p>";	
			}
			$(str).appendTo("#infinite-scroll");
		}
    </script>
```
