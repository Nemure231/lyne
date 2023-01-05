import puppeteer from 'puppeteer';
// import chromium from 'chrome-aws-lambda'
// const chromium = require('chrome-aws-lambda')

exports.handler = async (event, context) => {
    const { id = 0, region = '' } = event.queryStringParameters;

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        ignoreDefaultArgs: ['--disable-extensions']
    })

    // const executablePath = await chromium.executablePath

    // const browser = await puppeteer.launch({
    //     args: chromium.args,
    //     executablePath: executablePath,
    //     headless: chromium.headless,
    // })

    const page = await browser.newPage();
    await page.goto(`https://store.line.me/stickershop/product/${Number(id)}/${region}`)
    const data = await page.evaluate(() => {
        const list = []
        const pag = document.title


        if (pag !== 'LINE STORE') {
            const checkClass = document.querySelector('.LyMain')?.classList.length;


            if (checkClass <= 1) {
                const items = document.querySelector('.FnStickerList')?.getElementsByTagName("li")
                const store = []
                for (let index = 0; index < items.length; index++) {
                    const data_sticker = items[index].dataset.preview
                    store.push(
                        JSON.parse(data_sticker.substring(data_sticker.indexOf('{'), data_sticker.lastIndexOf('}') + 1))
                    );
                }
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
        } else {
            list.push({
                success: false,
                statusCode: 404,
                message: 'This sticker not found!',
                stickers: [{}]
            })
        }
        return list

    })

    const title = await page.title();
    const icon = await page.$eval("head > meta[property='og:image']", element => element.content);
    const desc = await page.$eval("head > meta[name='description']", element => element.content);
    const data_json = {
        statusCode: 200,
        body: JSON.stringify({
            success: data[0].success,
            message: data[0].message,
            data: {
                title: title,
                icon: icon.replace(';compress=true', ''),
                desc: desc,
                url: `https://store.line.me/stickershop/product/${id}/${region}`,
                stickers: data[0].stickers

            }
        })
    }
    await browser.close();

    return data_json



};