const Octokit = require('@octokit/rest');
const octokit = new Octokit ();

let PerPage = 5;

let Names = [];
let Links = [];
let Descriptions = [];
//TODO add stars counters
let Forks = [];

octokit.repos.listForUser({
    username:'KevenImbeault',
    sort:'updated',
    per_page:PerPage,
    page:1
}).then(({data}) => {
    // handle data
    for (var i = 0; i < PerPage; i++) {
        Names.push(data[i]['name']);
        Links.push(data[i]['html_url']);
        Descriptions.push(data[i]['description']);
        Forks.push(data[i]['forks_count']);
    }

    console.log(Names,Links,Descriptions,Forks);
});