$(function() {
  //お金ボタンの追加・・・・
  $("#moneyBtn10").on("click",function() {
    let ten = $("#scr").val();
    ten = 10 + Number(ten);
    $("#scr").val(ten);
  });
  $("#moneyBtn50").on("click",function() {
    let fifty = $("#scr").val();
    fifty = 50 + Number(fifty);
    $("#scr").val(fifty);
  });
  $("#moneyBtn100").on("click",function() {
    let oneHundret = $("#scr").val();
    oneHundret = 100 + Number(oneHundret);
    $("#scr").val(oneHundret);
  });
  $("#moneyBtn500").on("click",function() {
    let fiveHundret = $("#scr").val();
    fiveHundret = 500 + Number(fiveHundret);
    $("#scr").val(fiveHundret);
  });
  $("#moneyBtn1000").on("click",function() {
    let oneThousand = $("#scr").val();
    oneThousand = 1000 + Number(oneThousand);
    $("#scr").val(oneThousand);
  });
  //おつりボタン
  $("#return-money").on("click",function() {
    let originNumber = $("#scr").val();
    let inputNumber = $("#scr2").val();
    alert("おつりは" + originNumber + "円です");
    alert("合計金額は" + inputNumber + "円です");
    $("#scr").val("0");
    $("#scr2").val("0");
  });
  //値段のボタンを押したら、商品が出てくる。
  $("#drinkBtn-cora").on("click",function() {
    let originNumber = $("#scr").val();
    //コーラを買ったら在庫を減らす処理。
    let count = $("#cora-count").val();
    if (count <= 0) {
      alert("品切れになりました。");
      $("#cora-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 150) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("コーラを買いました。");
      $("#cora-count").val(count - 1);
      $("#scr").val(originNumber - 150);
      $("#list").text(list + "・" + "コーラ");
      $("#scr2").val(total + 150);
    } else {
      alert("お金が足りません");
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-tea").on("click",function() {
    let originNumber = $("#scr").val();
    //紅茶を買ったら在庫を減らす処理。
    let count = $("#tea-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#tea-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 150) {
      let list = $("#list").val()
      let total = $("#scr2").val();
      total = Number(total);
      alert("紅茶を買いました。");
      $("#tea-count").val(count - 1);
      $("#scr").val(originNumber - 150);
      $("#list").text(list + "・" + "紅茶");
      $("#scr2").val(total + 150);
    } else {
      alert("お金が足りません");
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-water").on("click",function() {
    let originNumber = $("#scr").val();
    //水を買ったら在庫を減らす処理。
    let count = $("#water-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#water-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 100) {
　　　 let list = $("#list").val()
      let total = $("#scr2").val();
      total = Number(total);
      alert("水を買いました");
      $("#water-count").val(count - 1);
      $("#scr").val(originNumber - 100);
      $("#list").text(list + "・" + "水");
      $("#scr2").val(total + 100);
    } else {
      alert("お金が足りません");
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-cofee").on("click",function() {
    let originNumber = $("#scr").val();
    //コーヒーを買ったら在庫を減らす処理。
    let count = $("#cofee-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#cofee-count").val("0");
      $("#scr").val(originNumber);
    } else if(originNumber >= 120) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("コーヒーを買いました。");
      $("#cofee-count").val(count - 1);
      $("#scr").val(originNumber - 120);
      $("#list").text(list + "・" + "コーヒー");
      $("#scr2").val(total + 120);
    } else {
      alert("お金が足りません");
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-greenTea").on("click",function() {
    let originNumber = $("#scr").val();
    //お茶を買ったら在庫を減らす処理
    let count = $("#greenTea-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#greenTea-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 140) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("お茶を買いました。");
      $("#greenTea-count").val(count - 1);
      $("#scr").val(originNumber - 140);
      $("#list").text(list + "・" + "お茶");
      $("#scr2").val(total + 140);
    } else {
      alert("お金が足りません");
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-pepusi").on("click",function() {
    let originNumber = $("#scr").val();
    //ペプシを買ったら在庫を減らす処理
    let count = $("#pepusi-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#pepusi-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 150) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("ペプシコーラを買いました。");
      $("#pepusi-count").val(count - 1);
      $("#scr").val(originNumber - 150);
      $("#list").text(list + "・" + "ペプシコーラ");
      $("#scr2").val(total + 150);
    } else {
      alert("お金が足りません");
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-lemonTea").on("click",function() {
    let originNumber = $("#scr").val();
    //レモンティーを買ったら在庫を減らす処理
    let count = $("#lemonTea-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#lemonTea-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 150) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("レモンティーを買いました。");
      $("#scr").val(originNumber - 150);
      $("#lemonTea-count").val(count - 1);
      $("#list").text(list + "・" + "レモンティー");
      $("#scr2").val(total + 150);
    } else {
      alert("お金が足りません。");
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-beer").on("click",function() {
    let originNumber = $("#scr").val();
    //ビールを買ったら在庫を減らす処理
    let count = $("#beer-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#beer-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 250) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("ビールを買いました。");
      $("#scr").val(originNumber - 250);
      $("#beer-count").val(count - 1);
      $("#list").text(list + "・" + "ビール");
      $("#scr2").val(total + 250);
    } else {
      alert("お金が足りません。")
      $("#scr").val(originNumber);
    }
  });
  $("#drinkBtn-milk-Tea").on("click",function() {
    let originNumber = $("#scr").val();
    //ミルクティーを買ったら在庫を減らす処理
    let count = $("#milkTea-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#milkTea-count").val("0");
      $("#scr").val(originNumber);
    } else if (originNumber >= 150) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("ミルクティーを買いました。");
      $("#scr").val(originNumber - 150);
      $("#milkTea-count").val(count - 1);
      $("#list").text(list + "・" + "ミルクティー");
      $("#scr2").val(total + 150);
    } else {
      alert("お金が足りません。");
      $("#scr").val(originNumber);

    }
  });
  $("#drinkBtn-milk").on("click",function() {
    let originNumber = $("#scr").val();
    //牛乳を買ったら在庫を減らす処理
    let count = $("#milk-count").val();
    if (count <= 0) {
      alert("品切れになりました");
      $("#milk-count").val("0");
      $("#scr").val(originNumber);
    } else if(originNumber >= 120) {
      let list = $("#list").val();
      let total = $("#scr2").val();
      total = Number(total);
      alert("牛乳を買いました。");
      $("#scr").val(originNumber - 120);
      $("#milk-count").val(count - 1);
      $("#list").text(list + "・" + "牛乳");
      $("#scr2").val(total + 120);
    } else {
      alert("お金が足りません。");
      $("#scr").val(originNumber);
    }
  });
});
