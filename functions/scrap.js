const cheerio = require('cheerio');
const axios = require("axios");

exports.handler = async (event, context, callback) => {

    const { id = 0, region = '' } = event.queryStringParameters;

    const url = `https://store.line.me/stickershop/product/${id}/${region}`;

    const { data } = await axios.get(url)
        .catch(function (error) {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    status: 404,
                    success: false,
                    message: 'This sticker not found!',
                    data: {
                        title: '404',
                        icon: 'https://static.line-scdn.net/line_store/185ec17b50d/pc/img/common/error_404.png',
                        desc: 'Item not found.',
                        url: url,
                        stickers: [{}]
                    }
                })
            })
        })

    const $ = cheerio.load(data);
    const list = []

    const title = $('title').text()

    const splitTitle = title.split('|')

    const checkTitle = splitTitle[1].trim()

    if (checkTitle == 'LINE STORE') {

        const checkClass2 = $(".lyMainError");

        if (checkClass2.length == 0) {
            const store = []

            $(".FnStickerList li").each(function (i, elm) {
                const data_sticker = $(this).data('preview');
                store.push(data_sticker);
            });

            list.push({
                success: true,
                statusCode: 200,
                message: 'The sticker has been found!',
                stickers: store
            })

        } else {
            list.push({
                success: false,
                statusCode: 204,
                message: 'This sticker is default sticker or expired sticker!',
                stickers: [{}]
            })
        }
    }

    const icon = $('[property="og:image"]').attr('content').replace(';compress=true', '');
    const desc = $('[name="description"]').attr('content');

    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            status: list[0].statusCode,
            success: list[0].success,
            message: list[0].message,
            data: {
                title: title,
                icon: icon,
                desc: desc,
                url: url,
                stickers: list[0].stickers
            }
        })
    })
}