import SkeletonUI from "./Classes/skeletonUI";

export function main(){
 console.log('Assets Bundled by Webpack!... ');

    new SkeletonUI([]);

}

if (document.readyState === 'complete') {
    main()
} else {
    document.addEventListener('DOMContentLoaded', main);
}