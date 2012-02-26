;jQuery(function() {
    $('.toctree-wrapper ul:not(:has("li")), .contents ul:not(:has("li")), .treeview ul:not(:has("li"))').remove();
    $('.toctree-wrapper > ul, .contents > ul, .treeview').treeview({
        collapsed: true
    });
    $('table').tableHover({colClass: 'hover'});
});
