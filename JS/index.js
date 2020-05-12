// Eye Hover Display
const eyeDisplay = document.querySelectorAll('.eye-hover');
const eyeIcon = document.querySelectorAll('.portfolio .fa')
// add event listener
eyeDisplay.forEach(eyeHover => eyeHover.addEventListener('mouseenter', displayEye));
function displayEye(e){
    // removeEye();
    // // addEye();
    // var icon = document.getElementsByTagName('i')
    // icon.classList.add('d-block')
    addIcon = document.querySelector('this.classList')
    
    
    // e.target.classList.contains('d-block');
}
function addEye(){
    // e.target.classList.contains('d-block');
    
}

// Remove Eye Show
// function removeEye(){
//      eyeIcon.forEach(item =>item.classList.remove('d-none'));
     
// }

// Tab Section
const tabItems= document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e){
        removeBorder()

        removeShow()
        // Add border to selected Tab Item
        this.classList.add('tab-border');

        // Grab the Id from DOM
        const  tabContentItem = document.querySelector(`#${this.id}-content`);
        // Add show class
        tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}


// Add EventListener to the Tab item
tabItems.forEach(item => item.addEventListener('click', selectItem))
