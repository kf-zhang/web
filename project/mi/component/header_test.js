import styles from "../styles/header.module.css"
import {useHover} from 'react-use';
import Hidden_content from '../component/header_hidden_content'
export default function Header(){
    const props=[
        {src:"phone1.png",name:"K40 Pro 系列",price:"2799起"},
        {src:"phone2.png",name:"K40 Pro 系列",price:"2799起"},
        {src:"phone3.png",name:"K40 Pro 系列",price:"2799起"},
        {src:"phone4.png",name:"K40 Pro 系列",price:"2799起"},
        {src:"phone5.png",name:"K40 Pro 系列",price:"2799起"},
        {src:"phone6.png",name:"K40 Pro 系列",price:"2799起"}
    ]


    const base_item=(hovered,content)=>
        <div>
            <a className={hovered? styles.a_item_hover:styles.a_item} >
                <span className={styles.content}>
                    {content}
                </span> 
            </a>
        </div>
    let contents=["小米手机","Redmi 红米","电视","笔记本","家电","路由器","智能硬件","服务","社区"]
    let elements=contents.map((content)=>{return (hovered)=>{return base_item(hovered,content)}})
    let hover_list=elements.map((element)=>{return useHover(element)})
    const element = (hovered) =>{
        return base_item(hovered,"小米手机")
    }
    const [hoverable, hovered] = useHover(element);

    return (
        <div className={styles.container}>
            <div className={styles.site_header}>
                <div className={styles.header_logo}>
                    <a href="//www.mi.com/index.html" title="小米官网" class="logo ir">
                        <img src="xiaomi_logo.png" className={styles.xiaomi_logo}>
                        </img>
                    </a>
                </div>
                <div className={styles.header_items}>
                    {hover_list.map((i)=>{return i[0]})}
                </div>
                <div className={styles.header_search} >
                    <input type="search" className={styles.search_input}></input>
                    {/* <input type="submit" value="" className={styles.search_submit} ></input> */}
                    <input type="image" src="search.png" name="search" className={styles.search_submit}></input>
                </div>
            </div>
            <div className={styles.hidden_content}>
            {hover_list.map( (item)=>{return item[1]?Hidden_content(props):null } )}
            </div>
        </div>
    )
}