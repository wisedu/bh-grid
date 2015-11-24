/**
 * Created by Administrator on 2015/11/21 0021.
 */
$(document).on("click", "i.consultant-menu-flag", function(){

    var $item = $(this);
    $item.closest(".activity-zxs-cz-icon").find(".activity-zxs-cz").toggle();
});
$(document).on("click", "a.activity-zxs-pb", function(){

    var $item = $(this);
    $item.closest(".activity-col-zxs-bottom").find(".activity-zxs-pbxq").toggle();
});
$(document).on("click","")