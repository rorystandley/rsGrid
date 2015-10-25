rsGrid
=======

place a grid over a canvas element. I use this for help positioning things on the canvas.

**Installation**
--
```
npm install rsbackvid
```

**Usage**
--

After including jQuery and the rsGrid plugin, instantiate rsGrid like so:

```javascript
$(function(){
    $('canvas').rsGrid();
});
```

**Options**
--
<table class="table">
    <tbody>
        <tr>
            <th>option</th>
            <th>description</th>
            <th>default</th>
            <th>type</th>
        </tr>
        <tr>
            <td>show</td>
            <td>Show the grid</td>
            <td>true</td>
            <td>boolean</td>
         </tr>
        <tr>
            <td>lineColour</td>
            <td>Line colour of grid</td>
            <td>#f1c40f</td>
            <td>string</td>
        </tr>
        <tr>
            <td>textColour</td>
            <td>Colour of text used n the grid</td>
            <td>#000</td>
            <td>string</td>
        </tr>
        <tr>
            <td>increment</td>
            <td>Increment of the grid</td>
            <td>50</td>
            <td>int</td>
        </tr>
        <tr>
            <td>padding</td>
            <td>padding for canvas element</td>
            <td>0</td>
            <td>int</td>
        </tr>  
        <tr>
            <td>lineSize</td>
            <td>Line thickness of grid</td>
            <td>1</td>
            <td>int</td>
        </tr>  
        <tr>
            <td>showIncrement</td>
            <td>Number at each increment to help work out distance</td>
            <td>true</td>
            <td>boolean</td>
        </tr>
    </tbody>
</table>

**Demo**
--
Click <a href="http://www.rstandley.co.uk/rsgrid-jquery-plugin/" target="_blank">here</a> to view a demo