const loadLeteastPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const posts = await res.json();
    displayLatestPosts(posts);
}
const displayLatestPosts = (latestPosts) =>{
    const latestPostContainer = document.getElementById('latest-post-container');
    latestPosts.forEach(post => {
        console.log(post)
        const cards = document.createElement('div');
        cards.classList = `card card-compact w-96 bg-base-100 shadow-xl border border-[#12132D26] p-5 rounded-xl`;
        cards.innerHTML = `
        <figure><img src="${post.cover_image}" alt="Shoes" /></figure>    
        <div class="card-body">
          <p class="text-base text-[#12132D99]">${post.author.posted_date ? post.author.posted_date : 'No publish date'}</p>
          <h2 class="card-title font-extrabold">${post.title}</h2>
          <p class="text-lg text-[#12132D99]">${post.description}</p>
          <div class="flex gap-4">
                <img class="w-[65px] h-[60px] rounded-full" src="${post.profile_image}" alt="">
            <div>
                <h3 class="font-bold text-lg">${post.author.name}</h3>
                <p class="text-sm font-normal">${post.author.designation ? post.author.designation : 'Unknown'}</p>
            </div>
          </div>
        </div>
        `
        latestPostContainer.appendChild(cards)
    });
}
loadLeteastPost()