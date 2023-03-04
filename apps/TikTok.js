import { segment } from "oicq";
import fs from 'node:fs'
import https from "https";
import http from "http";
const _path = process.cwd();



if (!fs.existsSync(`${_path}/resources/video`)) {
    fs.mkdirSync(`${_path}/resources/video`);
}

export class Tiktok extends plugin {
    constructor () {
        super({
            /** 功能名称 */
            name: '',
            /** 功能描述 */
            dsc: '',
            /** https://oicqjs.github.io/oicq/#events */
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 5000,
            rule: [
                {
                    /** 命令正则匹配 */
                    reg: '#*(can can need|ccn)', //匹配消息正则，命令正则
                    /** 执行方法 */
                    fnc: 'cancanneed'
                }
            ]
        })
    }





    async cancanneed (e) {
        let url;
        const filemp4 = await downloadMp4(url);
        e.reply(segment.video(filemp4))
    }

    async downloadMp4 () {
        let url = "http://101.33.199.104/api/xjj";
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(`${_path}/resources/video/temp`)) {
                fs.mkdirSync(`${_path}/resources/video/temp`);
            }

            var protocol = url.indexOf("https:") !== -1 ? https : http;

            protocol
                .get(url, (res) => {
                    const file = fs.createWriteStream(
                        `${_path}/resources/video/temp/temp.mp4`
                    );
                    // Write data into local file
                    res.pipe(file);
                    // Close the file
                    file.on("finish", () => {
                        file.close();
                        resolve(`${_path}/resources/video/temp/temp.mp4`);
                    });
                })
                .on("error", (err) => {
                    logger.error(`视频下载失败：${JSON.stringify(err)}`);
                });
        });
    }
}


