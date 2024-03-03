const loadPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const posts = data.posts;
    displayPosts(posts);
}
const displayPosts = (posts) => {     
    const postContainer = document.getElementById('post-container')
    posts.forEach(post => {
        console.log(post)
        const postCard = document.createElement('div');
        postCard.classList = `flex flex-col lg:flex-row bg-[#797DFC1A] w-full p-3 lg:p-10 rounded-3xl`;
        postCard.innerHTML = `
        <div class="">
        <img class="w-1/12 h-1/4" src="${post.image}" alt="">
        <div class="w-full mx-2 lg:mx-5 space-y-4">
            <div class="flex items-center w-full gap-4 lg:gap-10">
                <span class="text-sm font-medium text-[#12132DCC]">${post.category}</span>
                <span>Author: ${post.author.name}</span>
            </div>
            <h3 class="text-xl font-bold">1${post.title}</h3>
            <p class="text-base font-normal text-[#12132D99]">${post.description}</p>
            <div
                class="flex items-center justify-center gap-4 lg:justify-between border-t-2 border-[#12132D40] border-dashed py-4">
                <div class="flex gap-5">
                    <div class="flex gap-3 items-center text-[#12132D99]">
                        <span><i class="fa-regular fa-message"></i></span>
                        <span>${post.comment_count}</span>
                    </div>
                    <div class="flex gap-3 items-center text-[#12132D99]">
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span>${post.view_count}</span>
                    </div>
                    <div class="flex gap-3 items-center text-[#12132D99]">
                        <span><i class="fa-regular fa-clock"></i></span>
                        <span>${post.posted_time}min</span>
                    </div>
                </div>
                <img class="w-6 lg:w-10 cursor-pointer" src="./images/msg.png" alt="">
            </div>
        </div>
    </div>
`
    postContainer.appendChild(postCard);
    });
        

    
}
loadPosts()