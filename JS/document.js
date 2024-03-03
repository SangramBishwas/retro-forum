const loadPosts = async (value = '6') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${value}`);
    const data = await res.json();
    const posts = data.posts;
    displayPosts(posts);
}
const displayPosts = (posts) => {
    const postContainer = document.getElementById('post-container')
    posts.forEach(post => {
        // console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = `flex flex-col lg:flex-row bg-[#797DFC1A] w-full p-3 lg:p-10 rounded-3xl`;
        postCard.innerHTML = `
        <div class="flex w-full">
        <div class="relative">
        <img class="w-[70px] h-[63px] rounded" src="${post.image}" alt="" />
        <div class="absolute -top-1 left-12 h-[20px] w-[20px] rounded-full ${post.isActive ? 'bg-green-500' : 'bg-red-700'}"></div>
        </div>
        <div class="w-full mx-2 lg:mx-5 space-y-4">
            <div class="flex items-center w-full gap-4 lg:gap-10">
                <span class="text-sm font-medium text-[#12132DCC]">${post.category}</span>
                <span>Author: ${post.author.name}</span>
            </div>
            <h3 id="post-title" class="text-xl font-bold">1${post.title}</h3>
            <p class="text-base font-normal text-[#12132D99]">${post.description}</p>
            <div class="flex items-center justify-center gap-4 lg:justify-between border-t-2 border-[#12132D40] border-dashed pt-4">
                <div class="flex gap-5">
                    <div class="flex gap-3 items-center text-[#12132D99]">
                        <span><i class="fa-regular fa-message"></i></span>
                        <span>${post.comment_count}</span>
                    </div>
                    <div id="view-count" class="text-[#12132D99]">
                        <span><i class="fa-regular fa-eye"></i> ${post.view_count}</span>
                    </div>
                    <div class="flex gap-3 items-center text-[#12132D99]">
                        <span><i class="fa-regular fa-clock"></i></span>
                        <span>${post.posted_time}min</span>
                    </div>
                </div>
                <button onclick="messageButton('${post.title}', '${post.view_count}')" class="btn"><img class="w-6 lg:w-10 cursor-pointer" src="./images/msg.png" alt="">
                </button>
            </div>
        </div>
    </div>
`
        postContainer.appendChild(postCard);

    });
}

let number = 0;
const messageButton = (title, view) => {
    number += 1;
    getNumberById('msg-number', number);
    const messageContainer = document.getElementById('msg-container');
    const messageCard = document.createElement('div');
    messageCard.classList = `card bg-base-100 shadow-xl mx-6 mb-4`;
    messageCard.innerHTML = `
   <div class="flex justify-between p-4">
   <h3 class="card-title">${title}</h3>
   <div id="view-count" class="text-[#12132D99]">
   <span><i class="fa-regular fa-eye"></i> ${view}</span>
   </div>
  </div>   
`
    messageContainer.appendChild(messageCard);
}
const getNumberById = (elementId, value) => {
    const element = document.getElementById(elementId);
    element.innerHTML = value;
}

const controlSearch = () => {
    console.log('clicked')
    const searchInput = document.getElementById('search-input-value');
    const searchTextValue = searchInput.value;
    loadPosts(searchTextValue);
}
loadPosts()