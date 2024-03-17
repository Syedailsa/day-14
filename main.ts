function albums(artist: string, title: string, track?: number){
    if(track == undefined){
         return `${artist}: ${title}`         
    }else{
        return`${artist}: ${title}, ${track}`
    }
};

console.log(albums("Atif Aslam", "Tajdary haram"));