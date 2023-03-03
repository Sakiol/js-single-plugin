import { segment } from "oicq";
const _path = process.cwd();

// 根据群里的派蒙语音修改

export const rule = {
    回复文本: {
        reg: "noCheck", //匹配消息正则，命令正则
        priority: 20001, //优先级，越小优先度越高
        describe: "文本消息1", //【命令】功能说明

    },
    回复表情: {
        reg: "noCheck", //匹配消息正则，命令正则
        priority: 20002, //优先级，越小优先度越高，这个等级低于表情的等级！！！
        describe: "表情消息2", //【命令】功能说明
    },
    回复语音: {
        reg: "noCheck", //匹配消息正则，命令正则
        priority: 20003, //优先级，越小优先度越高
        describe: "语音消息3", //【命令】功能说明
    },
    回复视频: {
        reg: "noCheck", //匹配消息正则，命令正则
        priority: 20004, //优先级，越小优先度越高
        describe: "视频消息4", //【命令】功能说明

    },

};

let 完全匹配 = false; //是否完全匹配 true:完全 false:只要有这个词
// 匹配列表
// 可以使用|分割关键词



let 匹配列表1 = [
    { 关键词1: "瑶瑶", 发送的内容: ["遥遥无期！"] },
];
export function 回复文本(e) {
    if (e.msg) {
        for (var 子项1 of 匹配列表1) {
            // console.log(子项.关键词);
            if (完全匹配) {
                // 需要分割关键词
                if (子项1.关键词1.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项1.关键词1.split("|").some((i) => {
                        if (e.msg === i) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出文本(e, 子项1);
                        return true;
                    }
                } else {
                    // 不需要分割关键词
                    if (子项1.关键词1 === e.msg) {
                        发出文本(e, 子项1);
                        return true;
                    }
                }
            } else if (!完全匹配) {
                // 需要分割关键词
                if (子项1.关键词1.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项1.关键词1.split("|").some((i) => {
                        if (e.msg.indexOf(i) !== -1) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出文本(e, 子项1);
                        return true;
                    }
                } else {
                    // 不需要分割关键词
                    if (e.msg.indexOf(子项1.关键词1) !== -1) {
                        发出文本(e, 子项1);
                        return true;
                    }
                }
            }
        }
    }
}
function 发出文本(e, 子项1) {
    e.reply(子项1.发送的内容[Math.floor(Math.random() * 子项1.发送的内容.length)]);
    return true;
}


let 匹配列表2 = [
    { 关键词2: "em", 图片: ["69a8ef38fe7c1f8c5f1d1147bf0e9b29.png"] },
    { 关键词2: "上班", 图片: ["0b31c28cde6e1400444d7db8834b7361e2afbb4d.jpg"] },
    { 关键词2: "??", 图片: ["0af44474f39afbfd93068c06a68d607002820907.jpg"] },
    { 关键词2: "喵", 图片: ["ec43126fgy1gyw4yjsqsuj22bm3h5hdx.jpg"] },
    { 关键词2: "乐", 图片: ["ellye (51).jpg"] },
    { 关键词2: "什么", 图片: ["挠头-甘雨挠头-？-？？-？？-什么情况-咋回事-不造啊-不知道.gif"] },
    { 关键词2: "呜呜呜", 图片: ["QQ图片20220517092411.gif"] },
    { 关键词2: "搜索|涩图|白毛|萝莉", 图片: ["派蒙表情包-死.gif","QQ图片20220510133149.gif","QQ图片20220407093851.gif","QQ图片20220701163457.gif","神子表情包-八重表情包-八重神子表情包-打你-打-坏东西-臭东西.gif"] },


];
export function 回复表情(e) {
    if (e.msg) {
        for (var 子项2 of 匹配列表2) {
            // console.log(子项2.关键词2);
            if (完全匹配) {
                // 需要分割关键词2
                if (子项2.关键词2.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项2.关键词2.split("|").some((i) => {
                        if (e.msg === i) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出图片(e, 子项2);
                        return true;
                    }
                } else {
                    // 不需要分割关键词2
                    if (子项2.关键词2 === e.msg) {
                        发出图片(e, 子项2);
                        return true;
                    }
                }
            } else if (!完全匹配) {
                // 需要分割关键词2
                if (子项2.关键词2.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项2.关键词2.split("|").some((i) => {
                        if (e.msg.indexOf(i) !== -1) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出图片(e, 子项2);
                        return true;
                    }
                } else {
                    // 不需要分割关键词2
                    if (e.msg.indexOf(子项2.关键词2) !== -1) {
                        发出图片(e, 子项2);
                        return true;
                    }
                }
            }
        }
    }
}
function 发出图片(e, 子项2) {
    e.reply(segment.image(`${_path}/resources/reply/` + 子项2.图片[Math.floor(Math.random() * 子项2.图片.length)]));
    return true;
}

let 匹配列表3 = [
    { 关键词3: "嘟嘟可", 语音: ["可莉嘟嘟可.silk"] },
    { 关键词3: "魔王", 语音: ["大魔王我来抓你了-可莉.amr"] },
    { 关键词3: "不知道", 语音: ["可莉不知道哦.silk"] },
    { 关键词3: "你好", 语音: ["可莉你好.silk"] },
    { 关键词3: "好人", 语音: ["可莉你是好人.silk"] },

];
export function 回复语音(e) {
    if (e.msg) {
        for (var 子项3 of 匹配列表3) {
            // console.log(子项3.关键词3);
            if (完全匹配) {
                // 需要分割关键词3
                if (子项3.关键词3.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项3.关键词3.split("|").some((i) => {
                        if (e.msg === i) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出语音(e, 子项3);
                        return true;
                    }
                } else {
                    // 不需要分割关键词3
                    if (子项3.关键词3 === e.msg) {
                        发出语音(e, 子项3);
                        return true;
                    }
                }
            } else if (!完全匹配) {
                // 需要分割关键词3
                if (子项3.关键词3.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项3.关键词3.split("|").some((i) => {
                        if (e.msg.indexOf(i) !== -1) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出语音(e, 子项3);
                        return true;
                    }
                } else {
                    // 不需要分割关键词3
                    if (e.msg.indexOf(子项3.关键词3) !== -1) {
                        发出语音(e, 子项3);
                        return true;
                    }
                }
            }
        }
    }
}
function 发出语音(e, 子项3) {
    e.reply(segment.record(`${_path}/resources/reply/record/` + 子项3.语音[Math.floor(Math.random() * 子项3.语音.length)]));
    return true;
}


let 匹配列表4 = [
    { 关键词4: "女朋友", 视频: ["你还没有找到女朋友吗.mp4"] },
    { 关键词4: "要涩涩", 视频: ["不可以涩涩 .mp4"] },
    { 关键词4: "阿晴", 视频: ["今夜我能留在你身边吗？.mp4"] },
    { 关键词4: "嗨", 视频: ["嗨嗨嗨.mp4"] },
    { 关键词4: "摆", 视频: ["希望你对你的人生也是这个态度-开摆就完了.mp4"] },
    { 关键词4: "早上好", 视频: ["早上好.mp4"] },
];
export function 回复视频(e) {
    if (e.msg) {
        for (var 子项4 of 匹配列表4) {
            // console.log(子项4.关键词4);
            if (完全匹配) {
                // 需要分割关键词4
                if (子项4.关键词4.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项4.关键词4.split("|").some((i) => {
                        if (e.msg === i) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出视频(e, 子项4);
                        return true;
                    }
                } else {
                    // 不需要分割关键词4
                    if (子项4.关键词4 === e.msg) {
                        发出视频(e, 子项4);
                        return true;
                    }
                }
            } else if (!完全匹配) {
                // 需要分割关键词4
                if (子项4.关键词4.indexOf("|") !== -1) {
                    // 判断是否存在
                    let 存在 = 子项4.关键词4.split("|").some((i) => {
                        if (e.msg.indexOf(i) !== -1) {
                            return true;
                        }
                    });
                    if (存在) {
                        发出视频(e, 子项4);
                        return true;
                    }
                } else {
                    // 不需要分割关键词4
                    if (e.msg.indexOf(子项4.关键词4) !== -1) {
                        发出视频(e, 子项4);
                        return true;
                    }
                }
            }
        }
    }
}
function 发出视频(e, 子项4) {
    e.reply(segment.video(`${_path}/resources/reply/video/` + 子项4.视频[Math.floor(Math.random() * 子项4.视频.length)]));
    return true;
}










