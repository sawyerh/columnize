# What's It Do?

Columnize.js takes a parent element and dynamically splits it into "columns" (requires some CSS knowledge). For example, if you want to dynamically split a list into multiple columns while still preserving the vertical order, you could follow the example below. 

## Your HTML

<pre>
&lt;ul>
    &lt;li>List item&lt;/li>
    &lt;li>List item&lt;/li>
    &lt;li>List item&lt;/li>
    &lt;li>List item&lt;/li>
&lt;/ul>
</pre>

## HTML After Columized (using default settings)

<pre>
&lt;div class="col-container">
    &lt;ul class="col col-1">
        &lt;li>List item&lt;/li>
        &lt;li>List item&lt;/li>
    &lt;/ul>

    &lt;ul class="col col-2">
        &lt;li>List item&lt;/li>
        &lt;li>List item&lt;/li>
    &lt;/ul>
&lt;/div>
</pre>