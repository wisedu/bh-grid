$(function () {
    // 上传控件初始化
    var loading = $(".bh-uploading-caption");
    $("#fileUpload").fileupload({
        autoUpload : true,
        dataType : "json",
        add : function(e, data){
        },
        send : function(e, data) {
            loading.show();
        },
        done : function (data) {
            var listHtml = '';
            $(data.files).each(function(){
                listHtml += ' <li><a href="javascript:void (0)"> ' +
                    '<i class="md md-attach-file activity-fd-check-file-list-i">' + this.name + '</i>' +
                    '<i class="md md-cancel"></i> ' +
                    '</a></li>';
            });
            $(".activity-fd-check-file-list").append(listHtml);
            loading.hide();
        }
    });

    // 删除 上传文件
    $(".activity-fd-check-file-list").on("click", "i.md-cancel", function(){
        $(this).closest("li").remove();
    });
});
