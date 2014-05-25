/**
 * Created by varun on 21/5/14.
 */
$('#homepagePascalForm').submit(function (event) {
    $('#homepagePascalError').hide();
    var numRows = parseInt($('#homepagePascalRowInput').val());
    if (!numRows || numRows > 2000) {
        $('#homepagePascalRowInput').val("");
        $('#homepagePascalError').show();
        return false;
    }

    Utils.showTriangle(numRows);
    $('#numberOfRows').val(numRows);
    $('#homepagePascalForm').hide();
    $('#pascalExplorerSidebar').show();
    $('#triangleSidebar').show();
    return false;
});

$('#pascalRowsForm').submit(function(event) {
    var numRows = parseInt($('#numberOfRows').val());
    if (!numRows || numRows > 2000) {
        return false;
    }
    Utils.showTriangle(numRows);
    return false;
});

var Utils = {};
Utils.showTriangle = function(numRows) {
    var triangle = PascalTriangle.generate(numRows);
    if (!triangle || triangle.length === 0) return false;
    Utils.setUpDisplay();
    Utils.drawTriangle(triangle);
    return true;
};

Utils.drawTriangle = function(triangle) {
    // Given a Pascal's triangle, add it to the display

    var container = $('<div></div>');
    for (var row = 0; row < triangle.length; row++) {
        var row_container = container.append('<div class="pascal-row" id="row-'+row+'"></div>');
        for (var col = 0; col < triangle[row].length; col++) {
            row_container.append('<span class="C" id="col-'+col+'">'+triangle[row][col]+'</span>');
            row_container.append('&nbsp;');
        }
    }
    $('#triangleDisplay').empty().append(container);
};

Utils.setUpDisplay = function() {
    // Set up the display for optimum usage
    // If num rows < available space
    // If num rows > available space
    var minFontSize = 9;
    var maxFontSize = 22;
    //alert($('#triangleDisplay').width())
};

/*
Addressing scheme:
Each row has row-x
Each cell has col-y
onhover, get cell, cell.parent
highlight both
 */