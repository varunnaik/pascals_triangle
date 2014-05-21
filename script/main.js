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
    PascalTriangle.generate(numRows);
    $('#homepagePascalForm').hide();
    $('#pascalExplorerSidebar').show();
    return false;
});