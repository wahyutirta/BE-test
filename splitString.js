

const s = "nama, saya;                wawan"
const reg = /[\b\s,.;]+/
const list_ = s.split(reg)

for (const item of list_) {
    console.log(item)
}