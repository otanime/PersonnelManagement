$(document).ready(function () {

    // Sidebar
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('all-width');
    });
    

    // popovers Initialization
    $(function () {
      $('[data-toggle="popover-hover"]').popover()
    });


});
