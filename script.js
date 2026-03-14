const appData = {
    scenes: [
        {
            id: 'start',
            bg: 'assets/her_image_anime.png',
            content: `
                <div style="flex-grow: 1;"></div>
                <button class="btn" style="margin-top:20px;" onclick="nextScene('intro')">Asta e prințesa mea</button>
            `
        },
        {
            id: 'intro',
            bg: 'assets/ich_augen_zu.png',
            content: `
                <h2>Relax with me</h2>
                <p>I know you have a tough time right now. And sometimes all we need is the feeling that someone is on our side.</p>
                <p style="margin-top: 10px;">Take a moment to play this game with me :)</p>
                <button class="btn" style="margin-top:20px" onclick="nextScene('flower_choose')">I am ready</button>
            `
        },
        {
            id: 'flower_choose',
            bg: 'assets/ich_augen_zu.png',
            content: `
                <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: white;">Choose a flower</h2>
                <div class="grid-2x2">
                    <div class="grid-item" onclick="wrongFlowerChoice(this)"><img src="assets/flower1.jpeg" alt="Flower 1" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'%23fbcfe8\\'><rect width=\\'100%\\' height=\\'100%\\'/></svg>'"></div>
                    <div class="grid-item" onclick="wrongFlowerChoice(this)"><img src="assets/flower2.jpeg" alt="Flower 2" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'%23f9a8d4\\'><rect width=\\'100%\\' height=\\'100%\\'/></svg>'"></div>
                    <div class="grid-item" onclick="wrongFlowerChoice(this)"><img src="assets/flower3.jpeg" alt="Flower 3" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'%23fce7f3\\'><rect width=\\'100%\\' height=\\'100%\\'/></svg>'"></div>
                    <div class="grid-item" onclick="wrongFlowerChoice(this)"><img src="assets/flower4.jpeg" alt="Flower 4" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'%23fdf2f8\\'><rect width=\\'100%\\' height=\\'100%\\'/></svg>'"></div>
                </div>
                <div id="flower-msg" style="display:none; flex-direction: column; align-items:center; width: 100%;">
                    <p style="color: white; font-weight: 600; font-size: 1.15rem; margin-top: 16px; text-align:center;">wrong you are the most beautiful one</p>
                    <button class="btn" onclick="nextScene('nature')" style="margin-top:16px;">Continue</button>
                </div>
            `
        },
        {
            id: 'nature',
            bg: 'assets/ich_am_reden.png',
            content: `
                <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: white;">Choose a place</h2>
                <div class="grid-3x1">
                    <div class="grid-item" onclick="chooseLocation('beach.jpeg')">
                        <img src="assets/beach.jpeg" alt="Beach" style="border-radius:16px;">
                        <p style="margin-top:8px; font-weight:600; font-size:1.1rem;">Beach</p>
                    </div>
                    <div class="grid-item" onclick="chooseLocation('field.jpeg')">
                        <img src="assets/field.jpeg" alt="Field" style="border-radius:16px;">
                        <p style="margin-top:8px; font-weight:600; font-size:1.1rem;">Field</p>
                    </div>
                    <div class="grid-item" onclick="chooseLocation('mointain.jpeg')">
                        <img src="assets/mointain.jpeg" alt="Mountain" style="border-radius:16px;">
                        <p style="margin-top:8px; font-weight:600; font-size:1.1rem;">Mountain</p>
                    </div>
                </div>
            `
        },
        {
            id: 'best_place',
            bg: '', // Will be set dynamically by chooseLocation
            content: `
                <h2 style="font-size: 1.6rem; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5); line-height: 1.5; margin-bottom: 20px;">nice choice, but btw the best place for me is the place you are in :)</h2>
                <button class="btn" style="margin-top: auto;" onclick="nextScene('hug_ask')">Choose</button>
            `
        },
        {
            id: 'hug_ask',
            bg: '', // Will be set dynamically by chooseLocation
            content: `
                <h2 style="font-size: 2rem; margin-bottom: 24px; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">Do you want a hug?</h2>
                <div style="display: flex; gap: 16px; width: 100%; justify-content: center;">
                    <button class="btn" style="margin-top:0; flex:1;" onclick="giveHug()">Yes</button>
                    <button id="btn-no-hug" class="btn btn-secondary" style="margin-top:0; flex:1;" onmouseover="dodgeNoHugButton()" onmousedown="dodgeNoHugButton()" onclick="dodgeNoHugButton()">No</button>
                </div>
            `
        },
        {
            id: 'hug_given',
            bg: '', // Will be set dynamically based on location
            content: `
                <button class="btn" style="margin-top: auto; position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); width: 80%;" onclick="nextScene('comfort_1')">Continue</button>
            `
        },
        {
            id: 'comfort_1',
            bg: 'assets/beach.jpeg', // Fallback, will be replaced dynamically
            content: `
                <p>Now let's relax there together and enjoy the view. Just feel free with me. Maybe you want...</p>
                <div style="display:flex; flex-direction:column; gap:12px; width:100%; margin-top: 16px;">
                    <button class="btn btn-secondary" style="font-size:1rem; padding:12px;" onclick="nextScene('option_1')">Just think alone</button>
                    <button class="btn btn-secondary" style="font-size:1rem; padding:12px;" onclick="nextScene('option_2_part1')">Share my problems</button>
                    <button class="btn btn-secondary" style="font-size:1rem; padding:12px;" onclick="nextScene('option_3')">Take your advice</button>
                </div>
            `
        },
        {
            id: 'option_1',
            bg: 'assets/beach.jpeg',
            content: `
                <p style="margin-top:12px; font-size: 1.1rem; line-height: 1.5;">empty your thoughts, feel free. Like I said, I am on your side :)</p>
                <button class="btn" style="margin-top: 24px;" onclick="nextScene('curiosity')">Continue</button>
            `
        },
        {
            id: 'option_3',
            bg: 'assets/beach.jpeg',
            content: `
                <h2 style="font-size: 1.5rem; color: white;">Take my advice</h2>
                <p style="margin-top:12px; font-size: 1.1rem; line-height: 1.5;">trust me when I tell you that I have good advice in life. I have lived 19 years but saw and gone through what others don't experience in 30 years.</p>
                <button class="btn" style="margin-top: 24px;" onclick="nextScene('option_3_part2')">Read more</button>
            `
        },
        {
            id: 'option_3_part2',
            bg: 'assets/beach.jpeg',
            content: `
                <h2 style="font-size: 1.5rem; color: white;">Take my advice</h2>
                <p style="margin-top:12px; font-size: 1.1rem; line-height: 1.5;">I advise you to not attach your happiness to outer things, make it inside out. That's how your soul stays in harmony and away from evil.</p>
                <div style="display:flex; gap:12px; margin-top:24px; width:100%;">
                    <button class="btn btn-secondary" style="margin-top:0; flex:1;" onclick="nextScene('option_3')">Back</button>
                    <button class="btn" style="margin-top:0; flex:1;" onclick="nextScene('curiosity')">Continue</button>
                </div>
            `
        },
        {
            id: 'option_2_part1',
            bg: 'assets/beach.jpeg',
            content: `
                <h2 style="font-size: 1.5rem; color: white;">Share your problems</h2>
                <p style="margin-top:12px; font-size: 1.1rem; line-height: 1.5;">you don't know how much I value this trust. You can write me anytime, I don't try to be childish and not answer when I am on my phone.</p>
                <button class="btn" style="margin-top: 24px;" onclick="nextScene('option_2_part2')">Read more</button>
            `
        },
        {
            id: 'option_2_part2',
            bg: 'assets/beach.jpeg',
            content: `
                <p style="margin-top:12px; font-size: 1.1rem; line-height: 1.5;">However I can't promise because I have a lot of stress and problems and life decisions to make through the next days and weeks.</p>
                <div style="display:flex; gap:12px; margin-top:24px; width:100%;">
                    <button class="btn btn-secondary" style="margin-top:0; flex:1;" onclick="nextScene('option_2_part1')">Back</button>
                    <button class="btn" style="margin-top:0; flex:1;" onclick="nextScene('option_2_part3')">Read more</button>
                </div>
            `
        },
        {
            id: 'option_2_part3',
            bg: 'assets/beach.jpeg',
            content: `
                <p style="margin-top:12px; font-weight: 600; font-size: 1.2rem; color: #fdf2f8;">So you see, you are not alone :)</p>
                <div style="display:flex; gap:12px; margin-top:24px; width:100%;">
                    <button class="btn btn-secondary" style="margin-top:0; flex:1;" onclick="nextScene('option_2_part2')">Back</button>
                    <button class="btn" style="margin-top:0; flex:1;" onclick="nextScene('curiosity')">Continue</button>
                </div>
            `
        },
        {
            id: 'curiosity',
            bg: 'assets/bg-curiosity.jpg',
            content: `
                <h2>Before you go...</h2>
                <p>do you want to see something?</p>
                <div style="display: flex; gap: 12px; margin-top: 24px; width: 100%; justify-content: center;">
                    <button class="btn" style="margin-top:0; flex:1;" onclick="nextScene('heart')">Yes</button>
                    <button id="btn-no" class="btn btn-secondary" style="margin-top:0; flex:1;" onmouseover="dodgeNoButton()" onmousedown="dodgeNoButton()" onclick="dodgeNoButton()">No</button>
                </div>
            `
        },
        {
            id: 'heart',
            bg: 'assets/bg-curiosity.jpg',
            content: `
                <h2>Almost there</h2>
                <p>Please touch my heart to see what's inside:</p>
                <div class="heart-container" onclick="nextScene('finale')">
                    <div class="heart">❤️</div>
                </div>
                <p style="margin-top:12px; font-size: 1rem; color: #fdf2f8;">but be careful it's very soft and breaks easily</p>
            `
        },
        {
            id: 'finale',
            bg: 'assets/bg-finale.jpg',
            content: `
                <h2 style="font-size: 1.8rem; color: white; margin-bottom: 12px;">It's you</h2>
                <img src="assets/xcv.jpg" class="finale-img" alt="You" onerror="this.style.display='none'">
                <p style="margin-top:12px; font-size: 0.95rem; text-align: left; line-height: 1.4;">To be honest, I don't even know how I ended up here, I don't know if you are just playing with me or if you are serious.</p>
                <p style="margin-top:8px; font-size: 0.95rem; text-align: left; line-height: 1.4;">But somehow you made a step into my heart.</p>
                <p style="margin-top:12px; font-weight: 600; color:#ec4899; font-size: 1rem;">If you don't value it, you can't come back ever!</p>
                <div style="display:flex; flex-direction:column; gap:8px; width:100%; margin-top: 16px;">
                    <button class="btn" style="padding: 12px;" onclick="nextScene('stay')">I want to stay</button>
                    <button class="btn btn-secondary" style="padding: 12px; margin-top:0;" onclick="nextScene('leave')">I want to leave</button>
                </div>
            `
        },
        {
            id: 'stay',
            bg: 'assets/ich_am_reden.png',
            content: `
                <div class="heart-container" style="pointer-events: none;">
                    <div class="heart">❤️</div>
                </div>
                <p style="margin-top:24px; font-size: 1.2rem; font-weight: 600; color: white;">Thank you. See you next time</p>
            `
        },
        {
            id: 'leave',
            bg: 'assets/ich_am_reden.png',
            content: `
                <div class="heart-container" style="pointer-events: none;">
                    <div class="heart" style="animation: none;">💔</div>
                </div>
                <p style="margin-top:24px; font-size: 1.2rem; font-weight: 600; color: white;">Thank you. See you next time</p>
            `
        }
    ]
};

const bgLayer = document.getElementById('bg-layer');
const contentCard = document.getElementById('content-card');
const sceneContent = document.getElementById('scene-content');

let currentSceneId = '';

function loadScene(sceneId) {
    if (currentSceneId === sceneId) return;
    const scene = appData.scenes.find(s => s.id === sceneId);
    if (!scene) return;
    currentSceneId = sceneId;

    // Fade out card content
    contentCard.classList.add('hidden');
    
    setTimeout(() => {
        // Handle background
        const img = new Image();
        img.src = scene.bg;
        img.onload = () => {
            bgLayer.style.backgroundImage = "url('" + scene.bg + "')";
        };
        img.onerror = () => {
            // Gradient fallback if image isn't available
            bgLayer.style.backgroundImage = 'linear-gradient(135deg, #fbcfe8, #fbcfe8, #fdf2f8, #fce7f3)';
        };

        // Reset the glass card styles in case they were removed by the 'hug' scene
        contentCard.style.background = 'rgba(255, 255, 255, 0.05)';
        contentCard.style.backdropFilter = 'blur(16px)';
        contentCard.style.webkitBackdropFilter = 'blur(16px)';
        contentCard.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
        contentCard.style.border = '1px solid rgba(255, 255, 255, 0.2)';

        // Only the comfort options should be at the top!
        const topScenes = ['comfort_1', 'option_1', 'option_3', 'option_3_part2', 'option_2_part1', 'option_2_part2', 'option_2_part3'];
        if (topScenes.includes(sceneId)) {
            contentCard.classList.add('glass-card-top');
        } else {
            contentCard.classList.remove('glass-card-top');
        }

        // Inject HTML
        sceneContent.innerHTML = scene.content;
        
        // Fade in card content
        contentCard.classList.remove('hidden');
    }, 500);
}

function wrongFlowerChoice(element) {
    if (element) {
        element.style.border = '3px solid #ef4444';
        element.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.5)';
    }
    const msg = document.getElementById('flower-msg');
    if (msg) {
        msg.style.display = 'flex';
        // Add a small animation effect if desired, or just show it
        msg.style.animation = 'fadeIn 0.5s ease';
    }
}

function dodgeNoButton() {
    const btn = document.getElementById('btn-no');
    if (!btn) return;
    
    // Prevent default click/focus behavior
    event?.preventDefault();

    const signX = Math.random() > 0.5 ? 1 : -1;
    const signY = Math.random() > 0.5 ? 1 : -1;
    
    const x = signX * (30 + Math.random() * 50);
    const y = signY * (30 + Math.random() * 50);
    
    btn.style.transform = "translate(" + x + "px, " + y + "px)";
}

let selectedLocation = '';
let selectedLocationExt = '';

function chooseLocation(imageName) {
    // imageName e.g. "beach.jpeg" -> name="beach", ext=".jpeg"
    const parts = imageName.split('.');
    selectedLocation = parts[0];
    selectedLocationExt = '.' + parts[1];
    
    const bestPlaceScene = appData.scenes.find(s => s.id === 'best_place');
    if (bestPlaceScene) bestPlaceScene.bg = 'assets/' + imageName;

    const hugAskScene = appData.scenes.find(s => s.id === 'hug_ask');
    if (hugAskScene) hugAskScene.bg = 'assets/' + imageName;
    
    // Also set the background for the comfort choices
    const comfortScenes = ['comfort_1', 'option_1', 'option_3', 'option_2_part1', 'option_2_part2', 'option_2_part3'];
    comfortScenes.forEach(cId => {
        const s = appData.scenes.find(s => s.id === cId);
        if (s) s.bg = 'assets/' + imageName;
    });

    nextScene('best_place');
}

function giveHug() {
    const hugScene = appData.scenes.find(s => s.id === 'hug_given');
    if (hugScene) {
        // e.g. "beach_hug.jpeg" or "mountain_hug.png"
        // Note: mointain in folder is mointain.jpeg but mountain_hug.png ... let's handle that edge case just in case
        let locMap = selectedLocation;
        if (locMap === 'mointain') locMap = 'mountain';
        
        // Let's assume the _hug versions have the same extension as the original unless it's mountain
        let ext = selectedLocationExt;
        if (locMap === 'mountain') ext = '.png'; // Hardcoded fix for mountain_hug.png from LS output

        const finalHugImage = 'assets/' + locMap + '_hug' + ext;
        hugScene.bg = finalHugImage;
        
        // Hide glass card for a full-screen image moment
        contentCard.style.background = 'transparent';
        contentCard.style.backdropFilter = 'none';
        contentCard.style.webkitBackdropFilter = 'none';
        contentCard.style.boxShadow = 'none';
        contentCard.style.border = 'none';

        // Also set the background of the curiosity and heart scenes to this hug image
        const curiosityScene = appData.scenes.find(s => s.id === 'curiosity');
        if (curiosityScene) curiosityScene.bg = finalHugImage;
        
        const heartScene = appData.scenes.find(s => s.id === 'heart');
        if (heartScene) heartScene.bg = finalHugImage;
    }
    nextScene('hug_given');
}

function dodgeNoHugButton() {
    const btn = document.getElementById('btn-no-hug');
    if (!btn) return;
    event?.preventDefault();
    const signX = Math.random() > 0.5 ? 1 : -1;
    const signY = Math.random() > 0.5 ? 1 : -1;
    const x = signX * (30 + Math.random() * 50);
    const y = signY * (30 + Math.random() * 50);
    btn.style.transform = "translate(" + x + "px, " + y + "px)";
}

window.nextScene = loadScene;
window.wrongFlowerChoice = wrongFlowerChoice;
window.dodgeNoButton = dodgeNoButton;
window.dodgeNoHugButton = dodgeNoHugButton;
window.chooseLocation = chooseLocation;
window.giveHug = giveHug;

window.onload = () => {
    // Preload
    appData.scenes.forEach(s => {
        new Image().src = s.bg;
    });

    setTimeout(() => {
        loadScene('start');
    }, 400);
};
