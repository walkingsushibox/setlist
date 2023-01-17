// import data from './assets/json/2022_12_11.json' assert{type: "json"}


// fetch('../assets/json/2022_12_11.json')
// .then(function (response){
//     return response.json();
// }).then( function (myjson) {
//     makeList(myjson);
// });

function makeList(data){

    let track_list = document.createElement("div");
    track_list.className = "track_list";

    for (let i = 0; i < data.length; i++){
        let track_item = document.createElement("div");
        track_item.className = "track_item";

        let item_id = i+1;
        let id_container = document.createElement("div")
        id_container.innerText = `${item_id}:`;
        id_container.className = "id_container";
        track_item.appendChild(id_container);

        let item_title = data[i].title;
        let title_container = document.createElement("div");
        let sub_links = document.createElement("a");
        sub_links.href = data[i].link;
        sub_links.innerText = item_title;

        title_container.appendChild(sub_links);
        // title_container.innerText = item_title;
        title_container.className = "title_container";
        track_item.appendChild(title_container);

        let item_sub = data[i].sub;
        if (item_sub == ''){
        }else {
            let sub_container = document.createElement("div");
            sub_container.className = "sub_container";
            
            // let sub_links = document.createElement("a");
            // sub_links.href = data[i].link;
            // sub_links.innerText = `(${item_sub})`;
            // sub_container.appendChild(sub_links);
            sub_container.innerText = `(${item_sub})`;
            title_container.appendChild(sub_container);
            track_item.appendChild(sub_container);
        }

        track_list.appendChild(track_item);
        
    };
    document.getElementById('container').appendChild(track_list);
}