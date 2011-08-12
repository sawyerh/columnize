# What's It Do?

Columnize.js takes a parent element and dynamically splits it into "columns" (requires some CSS knowledge). For example, if you want to dynamically split a list into multiple columns while still preserving the vertical order, you could follow the example below. 

# Why not just use CSS?

If you don't care about the vertical ordering of your list items, and are okay with them being ordered horizontally first and then moving to the next row, definitely use CSS instead of this plugin. However, if you want your columns to be ordered vertically (ex. First column = A, B, C | Second column = D, E, F), then this is the best approach I've found. Of course you could use CSS3 multi-columns, however I've found that it's still not that reliable, especially when you want to have a bottom border on each list item.

## Your HTML

<pre>
&lt;ul>
    &lt;li>A. List item&lt;/li>
    &lt;li>B. List item&lt;/li>
    &lt;li>C. List item&lt;/li>
    &lt;li>D. List item&lt;/li>
&lt;/ul>
</pre>

## HTML After Columized (using default settings)

<pre>
&lt;div class="cols-container">
    &lt;ul class="col col-1">
        &lt;li>A. List item&lt;/li>
        &lt;li>B. List item&lt;/li>
    &lt;/ul>

    &lt;ul class="col col-2">
        &lt;li>C. List item&lt;/li>
        &lt;li>D. List item&lt;/li>
    &lt;/ul>
&lt;/div>
</pre>

## Example CSS
<pre>
.cols-container ul{
    width: 50%; /* Obviously this would change depending on how many columns you have */
    float: left;
}
</pre>

# Basic Initialization
<pre>
&lt;script>
    $(function(){
        $('.columnize-me').columnize();
    });
&lt;/script>
</pre>

# Options

**wrapper** (string)<br />
Default: `<div class="cols-container"></div>`<br />
The element that wraps around your columns

**columns** (int)<br />
Default: `2`<br />
Number of columns<br />

**container** (string)<br />
Default: `<ul></ul>`<br />
What type of element each column is.

# Advanced Usage
<pre>
&lt;script>
    $(function(){
        $('.columnize-me').columnize({
            'container': '&lt;ol>',
            'columns': 4,
            'wrap': '&lt;div class="numbered-menus">'
        });
    });
&lt;/script>
</pre>

# Credits
Big thanks to [stevelosh](https://github.com/sjl/) who helped me out a lot on this