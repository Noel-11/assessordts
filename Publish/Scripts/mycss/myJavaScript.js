

$(function () {

    $('.gridviewPager').closest('tr').find('table tbody tr').
    prepend('<td><a href="javascript:__doPostBack(' +
    "'_gv'" + ',' + "'Page$First'" + ')">First</a></td>');

    $('.gridviewPager').closest("tr").find("table tbody tr")
    .append('<td><a href="javascript:__doPostBack(' +
    "'_gv'" + ',' + "'Page$Last'" + ')">Last</a></td>');
})