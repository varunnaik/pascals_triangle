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
    Utils.showTriangle(PascalTriangle.generate(numRows));
    $('#homepagePascalForm').hide();
    $('#pascalExplorerSidebar').show();
    $('#triangleSidebar').show();
    return false;
});

var Utils = {};
Utils.showTriangle = function(triangle) {
    // Given a Pascal's triangle, add it to the display
    var container = $('#triangleDisplay');
    for (var row = 0; row < triangle.length; row++) {
        var row_container = container.append('<div class="pascal-row" id="row-'+row+'"></div>');
        for (var col = 0; col < triangle[row].length; col++) {
            row_container.append('<span class="pascal-col" id="col-'+col+'">'+triangle[row][col]+'</span>');
            row_container.append('&nbsp;');
        }
    }
};

/*
Addressing scheme:
Each row has row-x
Each cell has col-y
onhover, get cell, cell.parent
highlight both
 */