let volume = 0.5; // default volume to 0.5 because 1 actually destroys ears

const FEED_UNMUTED_SVG = '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"></path>'
const FEED_MUTED_SVG = '<path fill-rule="evenodd" clip-rule="evenodd" d="M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"></path>'
const BROWSE_UNMUTED_SVG = '<circle cx="24" cy="24" r="24"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.9118C21 15.2513 20.8942 15.0909 20.709 15.0221C20.5238 14.9763 20.3122 14.9992 20.1799 15.1138L15.0741 19.5258H11.4762C11.2116 19.5258 11 19.7092 11 19.9384V28.084C11 28.3132 11.2116 28.4965 11.4762 28.4965H15.0741L20.1799 32.8862C20.3122 33.0008 20.5238 33.0237 20.709 32.9779C20.8942 32.9091 21 32.7487 21 32.5882V16.9118Z" fill="white"></path><path d="M30.6653 15C32.7348 17.2304 34.0001 20.2174 34.0001 23.5C34.0001 26.7826 32.7348 29.7696 30.6653 32" stroke="white" stroke-width="2.5" stroke-linecap="round"></path><path d="M26.8799 17.8833C28.1994 19.381 28.9999 21.347 28.9999 23.5C28.9999 25.653 28.1994 27.6191 26.8799 29.1168" stroke="white" stroke-width="2.5" stroke-linecap="round"></path>'
const BROWSE_MUTED_SVG = '<circle cx="24" cy="24" r="24" fill="000" fill-opacity="1"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.9118C21 15.2513 20.8942 15.0909 20.709 15.0221C20.5238 14.9763 20.3122 14.9992 20.1799 15.1138L15.0741 19.5258H11.4762C11.2116 19.5258 11 19.7092 11 19.9384V28.084C11 28.3132 11.2116 28.4965 11.4762 28.4965H15.0741L20.1799 32.8862C20.3122 33.0008 20.5238 33.0237 20.709 32.9779C20.8942 32.9091 21 32.7487 21 32.5882V16.9118Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.098 18.9489C34.5998 18.4508 33.7921 18.4508 33.2939 18.949L30.1368 22.1061L26.9797 18.949C26.4815 18.4508 25.6738 18.4508 25.1756 18.9489C24.6775 19.4471 24.6775 20.2548 25.1756 20.753L28.3327 23.9101L25.1757 27.0672C24.6775 27.5654 24.6775 28.3731 25.1757 28.8713C25.6738 29.3694 26.4815 29.3694 26.9797 28.8713L30.1368 25.7142L33.2939 28.8713C33.7921 29.3694 34.5998 29.3694 35.0979 28.8713C35.5961 28.3731 35.5961 27.5654 35.0979 27.0672L31.9409 23.9101L35.098 20.753C35.5962 20.2548 35.5962 19.4471 35.098 18.9489Z" fill="white"></path>'


const FEED_VOLUMESLIDER_CLASS = 'ttvc-volume-slider-feed';
const BROWSE_VOLUMESLIDER_CLASS = 'ttvc-volume-slider-browse';

const videosToUpdate = []; // videos that were loaded before our storage call resolved, so we need to update the volume once it does
const volumeSlidersToUpdate = []; // see above

// sync fallbacks to local storage if not enabled
function getCurrentVolume() {
    chrome.storage.sync.get('volume', (result) => {
        if ('volume' in result) {
            volume = result.volume;
            while (videosToUpdate.length > 0)
                videosToUpdate.pop().volume = volume;
            while (volumeSlidersToUpdate.length > 0)
                volumeSlidersToUpdate.pop().value = volume * 100;
        }
    });
}

function setCurrentVolume() {
    chrome.storage.sync.set({ 'volume': volume }, () => {
        // we could do some error checking here with runtime.lastError
    });
}

function createVolumeSlider(className) {
    const elem = document.createElement('input');
    elem.type = 'range';
    elem.min = 0;
    elem.max = 100;
    elem.step = 1;
    elem.value = volume * 100;
    elem.classList.add(className);

    let videoElem;
    elem.addEventListener('input', (e) => {
        if (!videoElem || className === BROWSE_VOLUMESLIDER_CLASS)
            videoElem = getParentVideoElement(elem);
        volume = parseInt(elem.value) / 100;
        videoElem.volume = volume;
    });

    elem.addEventListener('change', (e) => {
        setCurrentVolume();
    });

    return elem;
}

function getParentVideoElement(childNode) {
    let depth = 3;
    let currNode = childNode.parentNode;

    while (depth > 0 && currNode) {
        for (const node of currNode.children) {
            if (node.classList && node.classList.contains('video-card-browse')) { // browse html is slightly different
                const OPTIMISM = node.querySelector('video');
                if (OPTIMISM.tagName === 'VIDEO')
                    return OPTIMISM;
            }

            if (node.tagName === 'VIDEO')
                return node;
        }
        currNode = currNode.parentNode;
        depth--;
    }
    return null;
}

/* General structure as of 2/25/2021
For feed view (small scrolling)
.video-feed-item
    .feed-item-content <- Dynamically added to DOM
        .item-video-container
            div
                a
                    .image-card
                        .video-one-column
                            video <- Dynamically added to DOM
                            .mute-icon <- Dynamically added to DOM
                                svg
                                .ttvc-volume-slider <- We inject this on .mute-icon add

Browse (fullscreen) view
.video-card-big .browse-mode <- Added to DOM when we switch from feed view to browse view
    .video-card-container
        .video-card-browse <- Added to DOM when we are browsing in browse mode
            video
        .mute-icon .browse-mode
*/

function addVolumeSlider(muteElem, className, initialLoad = false) {
    for (const child of muteElem.children) { // could get called twice per new entry, so we check if there already is one before adding
        const classList = [...child.classList];
        if (classList.some(x => x === FEED_VOLUMESLIDER_CLASS || x === BROWSE_VOLUMESLIDER_CLASS))
            return;
    }
    const slider = createVolumeSlider(className);
    muteElem.appendChild(slider);
    if (initialLoad)
        volumeSlidersToUpdate.push(slider);

    // add an event listener that prevents the click event from propagating (so when the slider is clicked it doesn't mute the video)
    muteElem.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
    });

    let videoElem;
    // move the mute event onto the svg element
    const svgElem = muteElem.querySelector('svg');
    svgElem.addEventListener('click', (e) => {
        if (!videoElem || className === BROWSE_VOLUMESLIDER_CLASS) { // we need to reget the video everytime for browse items since the videos never get unloaded
            // lost a referenece because video might have been removed and readded to DOM
            videoElem = getParentVideoElement(e.target);
        }

        videoElem.muted = !videoElem.muted;
        if (videoElem.muted) {
            svgElem.innerHTML = (className === FEED_VOLUMESLIDER_CLASS) ? FEED_MUTED_SVG : BROWSE_MUTED_SVG;
        } else {
            svgElem.innerHTML = (className === FEED_VOLUMESLIDER_CLASS) ? FEED_UNMUTED_SVG : BROWSE_UNMUTED_SVG;
        }
    });
}

function addBigVolumeSlider() {

}

function processVideoElem(videoElem, initialLoad = false) { // video
    videoElem.volume = volume;
    if (initialLoad)
        videosToUpdate.push(videoElem);
}

function processFeedItemElem(feedElem, initialLoad = false) { // .feed-item-content
    addVolumeSlider(feedElem.querySelector('.mute-icon'), FEED_VOLUMESLIDER_CLASS, initialLoad);
}

function processMuteElem(muteElem, intialLoad = false) { // .mute-icon
    addVolumeSlider(muteElem, FEED_VOLUMESLIDER_CLASS, intialLoad);
}

function proccessBrowseViewSwitch(cardElem) {
    processBrowseVideoCardElem(cardElem.querySelector('.video-card-browse'));
}

function processBrowseVideoCardElem(videoCardElem) {
    processVideoElem(videoCardElem.querySelector('video'));
    addVolumeSlider(videoCardElem.parentNode.querySelector('.mute-icon'), BROWSE_VOLUMESLIDER_CLASS);
}

const handlers = {
    'feed-item-content': processFeedItemElem,
    'mute-icon': processMuteElem, // doesn't get called if the videos are muted
    'video-card-big': proccessBrowseViewSwitch, // when we go from feed view to browse view
    'video-card-browse': processBrowseVideoCardElem // navigating within browse view
};

(function main() {
    getCurrentVolume();

    // we need to listen for DOM mutations since TT lazy loads videos into the DOM
    const mutationTarget = document.querySelector('.main-body'); // NOTE: Breakable on updates
    const onMutation = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
            for (const addedNode of mutation.addedNodes) {
                if (addedNode.tagName === 'VIDEO') { // will change the volume of ALL videos, but does TT even have non TT videos??
                    processVideoElem(addedNode);
                } else if (addedNode.classList) {
                    const classList = [...addedNode.classList];
                    for (const cls of classList) {
                        const handler = handlers[cls];
                        if (handler)
                            handler(addedNode);
                    }
                }
            }
        }
    };
    const mutationObserver = new MutationObserver(onMutation);
    mutationObserver.observe(mutationTarget, { childList: true, subtree: true });

    for (const videoElem of document.querySelectorAll('video')) {
        processVideoElem(videoElem, true);
    }
    for (const feedElem of document.querySelectorAll('.feed-item-content')) {
        processFeedItemElem(feedElem, true);
    }
    for (const muteElem of document.querySelectorAll('.mute-icon')) {
        processMuteElem(muteElem, true);
    }
})();
