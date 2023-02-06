const cheerio = require('cheerio');
const axios = require("axios");

exports.handler = async (event, context, callback) => {

    const { id = 0, region = '', type = '' } = event.queryStringParameters;

    const url = `https://myanimelist.net/anime/season`;


    const { data } = await axios.get(url)

    const $ = cheerio.load(data);


    const newAnime = []
    const middleAnime = []

    $(".seasonal-anime-list").each(function (index, element) {

        const header_title = $(element).find('.anime-header').text();

        $(element).find('.seasonal-anime').each(function (i, el) {

            const new_img = $(el).find('.image a img').attr('src');
            const new_title = $(el).find('.title .js-title').text();
            const new_date = $(el).find('.title .js-start_date').text();
            const new_score = $(el).find('.title .js-score').text();
            const new_url = $(el).find('.title .title-text .h2_anime_title a').attr('href');
            const new_blurb = $(el).find('.synopsis p').text();

            if (new_img != undefined) {
                newAnime.push({
                    header: header_title,
                    list: {
                        title: new_title,
                        img: new_img,
                        date: new_date,
                        score: new_score,
                        url: new_url,
                        blurb: new_blurb
                    }
                });
            }

            if (new_img == undefined) {
                const mid_img = $(el).find('.image a img').data('src');
                middleAnime.push({
                    header: header_title,
                    list: {
                        title: new_title,
                        img: mid_img,
                        date: new_date,
                        score: new_score,
                        url: new_url,
                        blurb: new_blurb
                    }

                });
            }

        })
    });

    const allData = [...newAnime, ...middleAnime]
    
    const newair = allData.filter((e) => e.header == 'TV (New)')
    const continueTv = allData.filter((e) => e.header == 'TV (Continuing)')
    const ona = allData.filter((e) => e.header == 'ONA')
    const ova = allData.filter((e) => e.header == 'OVA')
    const special = allData.filter((e) => e.header == 'Special')

    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            status: 200,
            list: {
                newair: newair,
                continue: continueTv,
                ona: ona,
                ova: ova,
                special: special

            }
        })
    })
}