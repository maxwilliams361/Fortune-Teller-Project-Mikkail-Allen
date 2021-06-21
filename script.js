$(".button1").click(function() {
    let WeeklyAnime = parseInt($(".animePerWeek").val());
    let AverageAnime = parseInt($(".userAnimeLength").val());
    let Age = parseInt($(".UserAge").val());
    let maph = (AverageAnime * 52);
    console.log(maph);
    console.log(AverageAnime);
    let UserAge = 40 - Age;
    let userFortune = maph * UserAge;
    console.log(WeeklyAnime, AverageAnime, Age);
    console.log(userFortune);
    $(".sdiv").append(`<p>You will have watched ${userFortune} episodes of anime by the time you're 40.</p>`);
        $(".img").show();

});