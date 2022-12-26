
import { getQuery } from 'ufo'

import puppeteer from 'puppeteer';


export default defineEventHandler(async (event) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    const req: any = getQuery(event.req.url as string)

    const page = await browser.newPage();
    await page.goto(`https://store.line.me/stickershop/product/${req.id}/${req.region}`)
    const data = await page.evaluate(() => {
        const list = []
        const pag = document.title
        if (pag !== 'LINE STORE') {
            const checkClass:any = document.querySelector('.LyMain')?.classList.length;

            if (checkClass <= 1) {
                const items:any = document.querySelector('.FnStickerList')?.getElementsByTagName("li")
                const store = []
                for (let index = 0; index < items.length; index++) {
                    const data_sticker = items[index].dataset.preview
                    store.push(
                        JSON.parse(data_sticker.substring(data_sticker.indexOf('{'), data_sticker.lastIndexOf('}') + 1))
                    );
                }
                list.push({
                    success: true,
                    status: 200,
                    message: 'The sticker has been found!',
                    stickers: store
                })
            } else {
                list.push({
                    success: false,
                    status: 204,
                    message: 'This sticker is default sticker or expired sticker!',
                    stickers: [{}]
                })
            }
        } else {
            list.push({
                success: false,
                status: 404,
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
        success: data[0].success,
        message: data[0].message,
        status: data[0].status,
        data: {
            title: title,
            icon: icon.replace(';compress=true', ''),
            desc: desc,
            url: `https://store.line.me/stickershop/product/${req.id}/${req.region}`,
            stickers: data[0].stickers
        }
    }
    await browser.close();

    return data_json

})




