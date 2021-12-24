// import erKey from './module.js';

$(window).on("load",function(){
   $('#preloader').fadeOut('slow');
    
  });

$(document).ready(function () {
   
        var diag = ["AKI & Motor Starter","Karburator & Busi","Engine / CYLINDER & PISTON","CDI / ECU"];
        var ket = ["AKI/Motor Starter Sudah Usang,Motor Starter Terjadi Konsleting","Karburator sudah kotor & Busi sudah tidak normal",
            "Masa pemakaian kendaraan sudah lama,jarang dilakukan perawatan atau service berkala","Tegangan listrik tidak stabil, Part pendukung CDI dan ECU sudah tidak sesuai standard"];
        var solu = ["Ganti AKI & Servis MOTOR STARTER Anda","Service Karburator & Ganti BUSI Anda","Service Engine(Tune Up) Cek Cylinder & Piston Apakah Kompresi Masih Normal","Ganti CDI/ECU"];
    function errKey() {
    $.confirm({
        columnClass: 'medium',title: '<p class="text-dark fw-bolder">Encountered an error!</p>',
        content: '<p class="text-dark">Data tidak ditemukan, Mohon pilih keyword yang sesuai!</p>',
        type: 'red',typeAnimated: true,
        buttons: {
            tryAgain: {text: 'OK', btnClass: 'btn-red', close: function(){} }
            }
        }) 
    }
    function p01(){
        $('.t-1').show();
        $('.indi .t-1').text( diag[0]);$('.ket .t-1').text( ket[0] ); $('.solu .t-1').text( solu[0]); $('.modall').fadeIn('fast');
    }
    function p02(){
        $('.t-2').show();
        $('.indi .t-2').text( diag[1]);$('.ket .t-2').text( ket[1] ); $('.solu .t-2').text( solu[1]); $('.modall').fadeIn('fast');
    }
    function p03(){
        $('.t-3').show();
        $('.indi .t-3').text( diag[2]);$('.ket .t-3').text( ket[2] ); $('.solu .t-3').text( solu[2]); $('.modall').fadeIn('fast');
    }
    function p04(){
        $('.t-4').show();
        $('.indi .t-4').text( diag[3]);$('.ket .t-4').text( ket[3] ); $('.solu .t-4').text( solu[3]); $('.modall').fadeIn('fast');
    }
    // actions
    $('.modall').hide();
    $( "#f-quest" ).load( "ques1.html" ); //load questions
    $("#page-diag,#brand-home,#page-teams").click(function(){ location.reload();}) //reload
    //alert close
    $(".m-close").click(function () { 
        $(this).parent().parent().parent().fadeOut("fast");
        $('.indikasi').children().remove(); $('.ket').children().remove(); $('.solu').children().remove();
            $('.form-check-input:checked').prop("checked",false);
            location.reload(); //reload
    })
    $('.indi').children().hide();
    // submit
    $( "#submit" ).click(function() {
        var a1 = $("input[name='a1']:checked").val();var a2 = $("input[name='a2']:checked").val();var a3 = $("input[name='a3']:checked").val();
        var a4 = $("input[name='a4']:checked").val();var a5 = $("input[name='a5']:checked").val();var a6 = $("input[name='a6']:checked").val();
        var a7 = $("input[name='a7']:checked").val();var a8 = $("input[name='a8']:checked").val();var a9 = $("input[name='a9']:checked").val();
        var a10 = $("input[name='a10']:checked").val();
        var inp =$('.form-check-input:checked').val();
      // rules
        switch (inp) {
        case undefined:
        errKey()
        break;
        default:
            // if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9&&a10 == 'no'){
            //     $('.modall').hide();
            //     alert("salah dong")
            // }else{
                if(a10=='yes'){
                    p04()
                }
                if((a1 == 'yes'&& a2=='yes')||(a1 == 'no'&& a2=='yes')||(a1 == 'yes'&& a2=='no')||(a1 == 'yes')||(a2=='yes')){
                    p01()
                }
                if((a3=='yes'&&a4=='yes'&&a5=='yes'&&a6=='yes'&&a7=='yes')||(a3=='yes'&&a4=='no'&&a5=='yes'&&a6=='yes'&&a7=='yes')||(a3=='yes'&&a4=='yes'&&a5=='no'&&a6=='yes'&&a7=='yes')
                ||(a3=='yes'&&a4=='yes'&&a5=='yes'&&a6=='no'&&a7=='yes')||(a3=='yes'&&a4=='yes'&&a5=='yes'&&a6=='yes'&&a7=='no')||(a3=='no'&&a4=='yes'&&a5=='yes'&&a6=='yes'&&a7=='yes')
                ||(a3=='no'&&a4=='no'&&a5=='yes'&&a6=='no'&&a7=='yes')||(a3=='yes'&&a4=='no'&&a5=='no'&&a6=='yes'&&a7=='yes')||(a3=='yes'&&a4=='yes'&&a5=='no'&&a6=='no'&&a7=='yes')||(a3=='yes'&&a4=='yes'&&a5=='yes'&&a6=='no'&&a7=='no')
                ||(a3=='no'&&a4=='yes'&&a5=='no'&&a6=='yes'&&a7=='yes')||(a3=='yes'&&a4=='no'&&a5=='yes'&&a6=='no'&&a7=='yes')||(a3=='yes'&&a4=='yes'&&a5=='no'&&a6=='yes'&&a7=='no')
                ||(a3=='yes'&&a4=='no'&&a5=='yes'&&a6=='no'&&a7=='yes')||(a3=='no'&&a4=='yes'&&a5=='yes'&&a6=='yes'&&a7=='no')
                ||(a3=='yes'&&a4=='yes'&&a5=='no'&&a6=='no'&&a7=='no')||(a3=='yes'&&a4=='no'&&a5=='no'&&a6=='no'&&a7=='yes')||(a3=='no'&&a4=='no'&&a5=='no'&&a6=='yes'&&a7=='yes')
                ||(a3=='no'&&a4=='no'&&a5=='yes'&&a6=='no'&&a7=='yes')||(a3=='yes'&&a4=='no'&&a5=='yes'&&a6=='no'&&a7=='no')||(a3=='no'&&a4=='no'&&a5=='yes'&&a6=='yes'&&a7=='no')
                ||(a3=='no'&&a4=='yes'&&a5=='yes'&&a6=='no'&&a7=='no')||(a3=='yes')||(a4=='yes')||(a5=='yes')||(a6=='yes')||(a7=='yes')){
                    p02()
                }//p03
                if((a8=='yes'||a9=='yes')||(a8=='yes'&&a9=='yes')||(a8=='no'&&a9=='yes')(a8=='yes'&&a9=='no')){
                    p03()
                }//p04
            }
        // }
    });
});
