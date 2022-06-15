import MicroUI from "./Classes/microUI";

export function main(){
 console.log('Assets Bundled by Webpack!... ');

    let elements: any = [
        {target: 'back', speed: '*(-1.5)'},
        {target: 'logo', speed: '*(1.5)'}
    ];
    new MicroUI(elements);


}
// Callback for parallax effects
function setTranslate( el:any, xPos:any, yPos:any, realY:any) {

    // console.log('setTranslate ',xPos, yPos, realY);
    if(el.className === 'figure2'){
        let scale = 1+(yPos/100)*(-1)+(-1*(yPos/90));
        if(scale === 0 ){scale=1}
        el.style.transform = "scale("+scale+")";
        el.style.transform += "translate3d("+(xPos)+"px, "+(-yPos)+"px, 0)";
    }else if(el.className === 'bottle parallax'){
        el.style.transform = "translate3d("+yPos+"px, "+(yPos)+"px, 0)";
        el.style.transform += "rotate("+(realY/2)+"deg)";
    } else if(el.className === 'figure1'){
        el.style.transform = "translate3d("+(yPos*7)+"px, "+(yPos)+"px, 0)";
        el.style.transform += "rotate(-"+(realY/4)+"deg)";
    }else {
        el.style.transform = "translate3d("+xPos+"px, "+(yPos)+"px, 0)";
    }
}


if (document.readyState === 'complete') {
    main()
} else {
    document.addEventListener('DOMContentLoaded', main);
}