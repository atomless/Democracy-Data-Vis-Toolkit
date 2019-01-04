// URL: https://beta.observablehq.com/@atomless/emojiocracy
// Title: Emojiocracy
// Author: James Tindall (@atomless)
// Version: 2634
// Runtime version: 1

const m0 = {
  id: "c7b1a3f70bc116b2@2634",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Emojiocracy`
)})
    },
    {
      name: "header",
      inputs: ["vote","html","thumbVoteElement"],
      value: (function(vote,html,thumbVoteElement)
{
  vote;
  return html`<div class="project-header">${Array(92).fill(0).map(d => thumbVoteElement()).join("")}<h1 style="text-align: center; font-size: 2.5rem; line-height: 1.25rem; width: 16rem; display: inline-block;">Emojiocracy</h1>${Array(110).fill(0).map(d => thumbVoteElement()).join("")}</div>`
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`*Opensource data & visualisations towards a post post-truth politics*`
)})
    },
    {
      name: "viewof vote",
      inputs: ["html"],
      value: (function(html)
{
  const form = html`<form><h3 style="display:inline-block; line-height: 2.25rem;">👍 Vote!</h3>&nbsp;<button class="aye vote" name="aye">Aye<span>✓</span></button><button class="no vote" name="no">No ❌</button></form>`;
  const voteHandler = e => {
    e.preventDefault();
    form.dispatchEvent(new CustomEvent("input"));
  };
  form.aye.onclick = voteHandler;
  form.no.onclick = voteHandler;
  form.aye.click();
  window.setTimeout(e => document.querySelector("button.aye").click(), 17);
  return form;
}
)
    },
    {
      name: "vote",
      inputs: ["Generators","viewof vote"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### [📖Read](#read), [📊Use](#use), [🔎Help](#help), [👷🏽‍♀Build](#build) & 🔄`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
---
*Or* ⬇️ *Skip to [visualisations](#table_of_contents)*`
)})
    },
    {
      name: "read",
      inputs: ["md"],
      value: (function(md){return(
md`
---
<br>
### 📖 Read
---
It would be remiss not to start by bringing your attention, dear reader, to the hugely important work being done by many in service and defence of our democracy. From those working to deliver open governmental data. Data that provides greater parliamentary transparency 🔎 and brings public scrutiny 👀 of our democracy into the digital realm. To those building equally important services that connect us, over the network, to our parliamentary representatives, that we might call upon them to represent our wishes or tackle issues in our constituencies. And lastly, but certainly not leastly, those brave journalists working tirelessly to shine the light of public scrutiny into the corridors of power, to uncover crimes and corruption and hold those responsible to account.

Please show your appreciation to those who helped to build [data.parliament.uk](http://www.data.parliament.uk/) and the [newer parliamentary data platform](https://api.parliament.uk/search/) and go follow them on twitter at [@UKParliData](https://twitter.com/UKParliData), [@ParliDigital](https://twitter.com/ParliDigital), [@digiminster](https://twitter.com/digiminster), [@MattStutely](https://twitter.com/MattStutely), [@dasbarrett](https://twitter.com/dasbarrett), [@fantasticlife](https://twitter.com/fantasticlife), [@langsamu](https://twitter.com/langsamu), [@chrisalcockdev](https://twitter.com/chrisalcockdev), [@cognithive](https://twitter.com/cognithive), [@bitten_](https://twitter.com/bitten_)... 👏🙏

Also, the towering work of [@mySociety](https://twitter.com/mysociety), especially the essential [#writetothem](https://twitter.com/hashtag/writetothem?src=hash), [@WhatDoTheyKnow](https://twitter.com/WhatDoTheyKnow) and [@TheyWorkForYou](https://twitter.com/theyworkforyou). 👏🙇

Finally, please show your support to the journalists and researchers without whom we'd be in an even darker place than we currently are. In particular, [@CaroleCadwalladr](https://twitter.com/carolecadwalla) and [@JamesPatrick](https://twitter.com/J_amesp). As well as many, many others too numerous to mention here, but a selection of whom are collected together in [this twitter list](https://twitter.com/atomless/lists/defenders-of-democracy).👏🙇

<p class="large-text">Despite all of this good work, when our politics is all too accurately symbolised by this 🤡, this 🦄, this 😱, or this 💩, clearly *something* has gone awry.</p>

There are forces distorting and disfiguring our democracy. Forces that twist our politics away from the interests of the poor, the vulnerable, away from what is best for all of us.

At this point, what can we actually do in order to regain a politics that even remotely resembles a **kind**, **fair**, **rational** and **honest** democracy (for which I really can't find a good emoji)?

Well, for starters, how about proper public scrutiny of our dysfunctional system of representative democratic rule? Our MPs don't cast their votes in a vacuum. On all parliamentary divisions, there are of course huge pressures and interests at play. Most of which remain, at present, largely inscrutable.

How can we uncover these hidden pressures? From the under representation of minorities to the over representation of wealthy oxbridge elites. From the tentacular reach of global financialism and corporate money, lobbies and thinktanks, to the rising influence of dark foreign powers. New tools and new measures are required to enable us to discern and deflect these forces.

<p class="large-text">We need to be able to collectively verify what's going, before we have any hope of changing it.</p>

Some of the data we need is already out there and easily accessible. However, with the currently available records of how our MPs vote on issues or even how they have historically voted on those same issues, we still lack information crucial to the level of public scrutiny required if we are to salvage our democracy.

<p class="large-text">We need to gain an understanding of the influencing factors, like our MP's net worth, their annual income, their social background and their corporate connections; important factors that form the essential context from which each MP casts their votes and devises policies.</p>

What's more, we need to find ways to concisely and effectively visualise and communicate this additional contextual information, ways that fit into the fleeting attention spans of today's news reporting.

Emojiocracy is just a small fraction of a tiny step up a huge mountain. Publishing this work on the wonderful [Observable](https://beta.observablehq.com) platform, will hopefully promote, the sharing, tinkering, and collaboration, essential if we hope to succeed in gathering the data and building the necessary tools and visualisations.`
)})
    },
    {
      name: "use",
      inputs: ["md"],
      value: (function(md){return(
md`---
<br>
### 📊 Use
---
Emojiocracy [aspires](https://beta.observablehq.com/@atomless/the-house-of-commons) 🌱 to contribute to the work of reducing friction, in access to and understanding 🤓 of, public domain political data. Also, to provide a repository and tools for collaborative collation of data. Data that provides a deeper public scrutiny of our democratic process. The aim 🎯 is to empower 💪 people to make effective use of their ownership of this public record and public interest data, by providing reusable, easily composable 🍰, [opensource visualisations](#table_of_contents) and [UI components](#tools_and_components), along with simple access to [normalised datasets](#mps_data), that inform us about the workings and the very foundations of our democracy.

To that end, data for the [Members of the UK Parliament](#mps_data), [their parties](#parties_data) and how they voted in each parliamentary vote (available via government APIs) has been combined here with data from other sources. For example, [ethnicity](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom) and [LGBT](https://en.wikipedia.org/wiki/List_of_LGBT_politicians_in_the_United_Kingdom) data from [wikipedia](http://wikipedia.org), and financial data from the [IPSA](http://www.theipsa.org.uk). This data is used in the existing [Emojiocracy charts](https://beta.observablehq.com/collection/@atomless/emojiocracy-visualisations) and is made available in an accessible, normalised format below, ready for you to use in remixes of emojiocracy charts or entirely new visualisations of your own.

`
)})
    },
    {
      name: "help",
      inputs: ["md"],
      value: (function(md){return(
md`---
<br>
### 🔎 Help
---
**Essential data is missing**! Data that is dearly needed, in order to provide true public oversight and understanding of how our democracy functions. Data like our politicians' net worth, their education, public or private school they attended, corporate connections; each crucial in understanding the background and context from which an MP's voting and policy decisions are made. This data exists somewhere, as a matter of public record, but as yet is not collated or readily available from a single source. Please help, either by locating sources of any of this data, or simply by helping to collate it, from whatever disparate sources it can be found. All contributions (including corrections!), however small, gratefully received!

##### Missing Data

- *MPs*
  - 💰 *Net worth*
  - 👩‍🎓 *Education*
  - 🏰 *Social background*
  - 💲 *Corporate connections*
  - 🗞️ *Media outlet connections*
  - ⛔ *Memberships of political private clubs*
  - 👁️‍🗨️ *Policy lobbies & think tank connections*

- *Political Parties*
  - 💎 *Major donors*
  - 👁️‍🗨️ *Associated policy lobbies & think tanks*

- *MP Voting Records Aggregated By Topic*
  - 💸 *Taxation on corporations and the most wealthy*
  - 🚑 *NHS funding*
  - 📚 *Education funding*
  - 👼 *Social benefits*
  - 💲 *Privatisation of public services & infrastructure*
  - 👩‍⚖ *Human rights*
  - ❓ *Other topics...*
<br><br>

*As mentioned above, contributions of charts, code or data, along with improvements and fixes, all **very** gratefully received. See the fork and merge process outlined here: 
[@observablehq/fork-share-merge](https://beta.observablehq.com/@observablehq/fork-share-merge)*<br>

`
)})
    },
    {
      name: "build",
      inputs: ["md"],
      value: (function(md){return(
md`---
<br>
### 👷🏽‍♀ Build
---
*Hugely keen to see things built on Emojiocracy!<br>Please use the hash tag [#Emojiocracy](https://twitter.com/hashtag/emojiocracy) and tweet me a link at [@atomless](http://twitter.com/@atomless)*

`
)})
    },
    {

    },
    {
      name: "table_of_contents",
      inputs: ["md"],
      value: (function(md){return(
md`

---
<br>
## 📒 Contents
<hr>`
)})
    },
    {
      name: "available_visualisations",
      inputs: ["md"],
      value: (function(md){return(
md`#### Visualisations
  - 🏛️ *[The House of Commons](https://beta.observablehq.com/@atomless/the-house-of-commons)*
  - 👩‍💼 *[Members of Parliament](https://beta.observablehq.com/@atomless/members-of-parliament)*
`
)})
    },
    {
      name: "available_data_sets",
      inputs: ["md"],
      value: (function(md){return(
md`#### Data Sets
  - 👍 *[Votes](#votes_data)*
  - 👩‍💼 *[MPs](#mps_data)*
  - 🏰 *[Lords](#lords_data)*
  - 🏛️ *[Political Parties](#parties_data)*
`
)})
    },
    {
      name: "tools_and_components",
      inputs: ["md"],
      value: (function(md){return(
md`#### Components and Dependencies
- 📈 *[UI Components](#ui_components)*
- 🔧 *[Dependecies](#dependencies)*`
)})
    },
    {
      name: "important_resources",
      inputs: ["md"],
      value: (function(md){return(
md`#### Important Resources
  - *[@mySociety](https://twitter.com/mysociety) & [mysociety.org](https://www.mysociety.org/)*
  - *[#writetothem](https://twitter.com/hashtag/writetothem?src=hash) & [writetothem.com](https://www.writetothem.com)*
  - *[@WhatDoTheyKnow](https://twitter.com/WhatDoTheyKnow) & [whatdotheyknow.com](https://www.whatdotheyknow.com/)*
  - *[@TheyWorkForYou](https://twitter.com/theyworkforyou) & [theyworkforyou.com](https://www.theyworkforyou.com/)*
  - *[@PublicWhip](https://twitter.com/PublicWhip) & [publicwhip.org.uk](https://www.publicwhip.org.uk)*
  - *[@LittleSis](https://twitter.com/twittlesis) & [littlesis.org](https://littlesis.org)*
<br><br>`
)})
    },
    {
      name: "votes_data",
      inputs: ["md"],
      value: (function(md){return(
md`---
## 👍 Votes
*Data loaded from : [data.parliament.uk](http://lda.data.parliament.uk/commonsdivisions.json?_view=Commons+Divisions&_pageSize=10&_page=0)*`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### Data`
)})
    },
    {
      name: "selected_vote_result_from_hansard",
      inputs: ["requestCommonsVoteResultFromHansard","vote_list_from_hansard","selected_vote_index"],
      value: (async function(requestCommonsVoteResultFromHansard,vote_list_from_hansard,selected_vote_index){return(
await requestCommonsVoteResultFromHansard(vote_list_from_hansard[selected_vote_index])
)})
    },
    {
      name: "selected_vote_result_from_data_api",
      inputs: ["requestCommonsVoteResultFromDataAPI","vote_list_from_data_api","selected_vote_index"],
      value: (async function(requestCommonsVoteResultFromDataAPI,vote_list_from_data_api,selected_vote_index){return(
await requestCommonsVoteResultFromDataAPI(vote_list_from_data_api[selected_vote_index])
)})
    },
    {
      name: "selected_vote_index",
      value: (function(){return(
0
)})
    },
    {
      name: "vote_list_from_data_api",
      inputs: ["requestListOfCommonsVotesIDsAndTitlesFromDataAPI"],
      value: (function(requestListOfCommonsVotesIDsAndTitlesFromDataAPI){return(
requestListOfCommonsVotesIDsAndTitlesFromDataAPI()
)})
    },
    {
      name: "vote_list_from_hansard",
      inputs: ["requestListOfCommonsVotesIDsAndTitlesFromHansard"],
      value: (function(requestListOfCommonsVotesIDsAndTitlesFromHansard){return(
requestListOfCommonsVotesIDsAndTitlesFromHansard()
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### Helper Functions`
)})
    },
    {
      name: "requestCommonsVoteResultFromHansard",
      inputs: ["soFetch","d3"],
      value: (function(soFetch,d3){return(
async (vote) => {

  const vote_type_enums = {"No": -1, "Abstention": 0, "Aye": 1};
  const vote_html = await (await soFetch(vote.URL)).text();

  let doc, ayes, noes, title, votes;
  
  if (vote_html) {
    doc = (new window.DOMParser()).parseFromString(vote_html, "text/html")
    title = doc.querySelector(".division-header").textContent;
  }
    
  let csv_url = `https://hansard.parliament.uk/division/${vote.ID}/downloadcsv?isEvel=False`;
  let csv_result = await (await soFetch(csv_url)).text();

  csv_result = d3.csvParse(csv_result);

  if (csv_result) {
    // filter out the undefined rows
    csv_result = csv_result.filter(v => Object.entries(v)[1][1]).map(vote => {
      // for some reason decodeURIComponent is not working on this unicode string so ...
      const r = {};
      for (let [k,v] of Object.entries(vote)) {
        r[k.replace(/[^a-zA-Z0-9]/g, '')] = v.replace(/[^a-zA-Z0-9]/g, '');
      }
      return r;
    });
    ayes = parseInt(csv_result.filter(v => v.Vote === "Aye").length || 0);
    noes = parseInt(csv_result.filter(v => v.Vote === "No").length || 0);
    votes = csv_result.map(v => ({
      MemberID: v.MnisId,
      ListAs: v.ListAs, 
      Party: v.Party, 
      Type: vote_type_enums[v.Vote] || 0
    }));
    
  } else {
    // TODO: implement fallback to scrape hansard page DOM elements for vote results
  }
    
  return {
    Title: title,
    Ayes: ayes,
    Noes: noes,
    DidNotVote: 650 - (ayes + noes),
    Date: new URL(vote.URL).pathname.split("/")[2],
    Votes: votes
  };
}
)})
    },
    {
      name: "requestCommonsVoteResultFromDataOldAPI",
      inputs: ["soFetch","MPs"],
      value: (function(soFetch,MPs){return(
async (vote) => {

  const vote_type_enums = {"NoVote": -1, "Abstains": 0, "AyeVote": 1};
  const result_json = await (await soFetch(`http://lda.data.parliament.uk/commonsdivisions/id/${vote.ID}.json?&_properties=title,description`)).json();

  let result = {};
  
  if (result_json && result_json.result) {

    result = {
      Title: result_json.result.primaryTopic.title,
      Description: result_json.result.primaryTopic.description || "",
      Ayes: parseInt(result_json.result.primaryTopic.AyesCount[0]._value || 0),
      Noes: parseInt(result_json.result.primaryTopic.Noesvotecount[0]._value || 0),
      DidNotVote: MPs.length - (parseInt(result_json.result.primaryTopic.AbstainCount[0]._value || 0) + parseInt(result_json.result.primaryTopic.Noesvotecount[0]._value || 0) + parseInt(result_json.result.primaryTopic.AyesCount[0]._value || 0)),
      Date: result_json.result.primaryTopic.date._value,
      Votes: result_json.result.primaryTopic.vote
        .filter(v => v.member && !Array.isArray(v.memberPrinted) && v.member[0].hasOwnProperty("_about"))
        .map(v => ({
          MemberID: v.member[0]._about.split("/").pop(),
          FullTitle: v.memberPrinted._value, 
          Party: v.memberParty, 
          Type: vote_type_enums[v.type.split("#").pop()]
        }))
    };
    
    let abstentions = result_json.result.primaryTopic.vote.filter(v => 
       (v.type && v.type.split("#").pop() === "Abstains" &&
       (Array.isArray(v.memberPrinted) && v._about && v._about.split("/").pop() === "NaN"))
    );
    
    for (let a of abstentions) {
      for (let v of a.member) {
        if (v._about) {
          result.votes.push({ 
            MemberID: v._about.split("/").pop(), 
            VoteType: 0
          });
        }
      }
    }
  }
  
  return result;
}
)})
    },
    {
      name: "requestCommonsVoteResultFromDataAPI",
      inputs: ["soFetch","MPs"],
      value: (function(soFetch,MPs){return(
async (vote) => {
debugger;
  const vote_type_enums = {"NoVote": -1, "Abstains": 0, "AyeVote": 1};
  const result_json = await (await soFetch(`https://commonsvotes-services.digiminster.com/data/division/${vote.ID}.json`)).json();

  let result = {};
  debugger;
  if (result_json) {
    let votes = [
      ...result_json.Ayes.map(v => Object.assign({}, v, { Type: 1})), 
      ...result_json.Noes.map(v => Object.assign({}, v, { Type: -1}))
    ];
    result = {
      Title: vote.Title,
      Description: vote.FriendlyDescription || "",
      Ayes: vote.AyeCount || 0,
      Noes: vote.NoCount || 0,
      DidNotVote: MPs.length - (parseInt(vote.AyeCount || 0) + parseInt(vote.NoCount || 0)),
      Date: vote.Date,
      Votes: votes
        .map(v => (Object.assign({}, v, {
          MemberID: `${v.MemberId}`,
          FirstAndLastName: v.Name.trim().replace(/(mr|mr|ms|miss|mrs|dr|sir|rt hon|mp)(\.?)\s/, "")
        })))
    };
  }
  
  return result;
}
)})
    },
    {
      name: "requestListOfCommonsVotesIDsAndTitlesFromHansard",
      inputs: ["soFetch"],
      value: (function(soFetch){return(
async ({
  limit = 10, 
  date_iso = false,
  length_of_period_in_days = 90,
  sort = "-date"} = {}) => {

  let end_date = date_iso? new Date(date_iso) : "Invalid Date";
  end_date = (end_date === "Invalid Date")? new Date : end_date;

  let start_date = new Date(new Date(end_date).setDate(end_date.getDate() - length_of_period_in_days));

  let start_date_iso = `${start_date.getFullYear()}-${(`${start_date.getMonth() + 1}`).padStart(2, "0")}-${(`${start_date.getDate()}`).padStart(2, "0")}`;

  let end_date_iso = `${end_date.getFullYear()}-${(`${end_date.getMonth() + 1}`).padStart(2, "0")}-${(`${end_date.getDate()}`).padStart(2, "0")}`;

  let vote_node_list;
  let url = `https://hansard.parliament.uk/search/Divisions?endDate=${end_date_iso}&house=Commons&partial=True&startDate=${start_date_iso}&page=1`; //&includeCommitteeDivisions=True
  
  try {
    vote_node_list = (new window.DOMParser()).parseFromString(await (await soFetch(url)).text(), "text/html").querySelectorAll(".results-list .result-outer > a");
  } catch(e) { console.warn(e) }

  return (vote_node_list)
    ? Array.from(vote_node_list).map(r => {
        
        let URL = r.getAttribute("href");
        let segs = URL.split("/");
                                     
        return { 
          ID: segs[4], 
          Title: r.querySelector(".title > span").textContent,
          URL: `https://hansard.parliament.uk${URL}`,
          Date: (new Date(segs[2]).toLocaleDateString("en-UK", { year: 'numeric', month: 'long', day: 'numeric' })) 
        };
      })
    : [];
}
)})
    },
    {
      name: "requestListOfCommonsVotesIDsAndTitlesFromOldDataAPI",
      inputs: ["soFetch"],
      value: (function(soFetch){return(
async ({
  limit = 20, 
  date_iso = false,
  length_of_period_in_days = 90,
  sort = "-date"} = {}) => {

  let end_date = date_iso? new Date(date_iso) : "Invalid Date";
  end_date = (end_date === "Invalid Date")? new Date : end_date;

  let start_date = new Date(new Date(end_date).setDate(end_date.getDate() - length_of_period_in_days));

  let start_date_iso = `${start_date.getFullYear()}-${(`${start_date.getMonth() + 1}`).padStart(2, "0")}-${(`${start_date.getDate()}`).padStart(2, "0")}`;

  let end_date_iso = `${end_date.getFullYear()}-${(`${end_date.getMonth() + 1}`).padStart(2, "0")}-${(`${end_date.getDate()}`).padStart(2, "0")}`;

  let result_json = {};

  try {
    result_json = await (await soFetch(`http://lda.data.parliament.uk/commonsdivisions.json?max-date=${end_date_iso}&min-date=${start_date_iso}&_view=Commons+Divisions&_pageSize=${limit}${/*&_page=0*/''}${/*&_sort=${sort}*/''}&_properties=title,description`)).json();
  } catch(e) { console.warn(e) }

  return (result_json.result && result_json.result.items && result_json.result.items.length)
    ? result_json.result.items.map(r => ({ 
        ID: r._about.split("/").pop(), 
        Title: r.title, 
        Description: r.description || '', 
        Date: (new Date(r.date._value)).toLocaleDateString("en-UK", { year: 'numeric', month: 'long', day: 'numeric' }) 
    }))
    : [];
}
)})
    },
    {
      name: "requestListOfCommonsVotesIDsAndTitlesFromDataAPI",
      inputs: ["soFetch"],
      value: (function(soFetch){return(
async ({
  limit = 20, 
  date_iso = false,
  length_of_period_in_days = 90,
  sort = "-date"} = {}) => {

  let end_date = date_iso? new Date(date_iso) : "Invalid Date";
  end_date = (end_date === "Invalid Date")? new Date : end_date;

  let start_date = new Date(new Date(end_date).setDate(end_date.getDate() - length_of_period_in_days));

  let start_date_iso = `${start_date.getFullYear()}-${(`${start_date.getMonth() + 1}`).padStart(2, "0")}-${(`${start_date.getDate()}`).padStart(2, "0")}`;

  let end_date_iso = `${end_date.getFullYear()}-${(`${end_date.getMonth() + 1}`).padStart(2, "0")}-${(`${end_date.getDate()}`).padStart(2, "0")}`;

  let result_json = {};

  try {
    result_json = await (await soFetch(`https://commonsvotes-services.digiminster.com/data/divisions.json/search?startDate=${start_date_iso}&endDate=${end_date_iso}&take=${limit}`)).json();
  } catch(e) { console.warn(e) }

  return (result_json && result_json.length)
    ? result_json.map(r => (Object.assign({}, r, { 
        ID: `${r.DivisionId}`,
        Description: r.FriendlyDescription || '', 
        Date: (new Date(r.Date)).toLocaleDateString("en-UK", { year: 'numeric', month: 'long', day: 'numeric' }) 
    })))
    : [];
}
)})
    },
    {

    },
    {
      name: "mps_data",
      inputs: ["md"],
      value: (function(md){return(
md`---
## 👩‍💼 MPs (Cached)
*Data originally loaded from : [data.parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7CIsEligible=true/) & [en.wikipedia.org](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom)*

*Use the data below in preference to the uncached MPs data. The MP data will not change very often and when it does, the cached versions will be quickly be updated.*

---`
)})
    },
    {
      name: "MPs_cached",
      value: (async function(){return(
await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/MPs.json?cachekiller=1")).json()
)})
    },
    {
      name: "MPs_minorities_cached",
      value: (async function(){return(
await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/MPs_minorities.json?cachekiller=1")).json()
)})
    },
    {
      name: "MPs_with_voting",
      inputs: ["applyVoteResultToMPs","MPs_minorities_cached","MPs_cached","selected_vote_result_from_data_api"],
      value: (function(applyVoteResultToMPs,MPs_minorities_cached,MPs_cached,selected_vote_result_from_data_api){return(
applyVoteResultToMPs({ 
  mps: JSON.parse(JSON.stringify(MPs_minorities_cached || MPs_cached)), 
  vote_result: selected_vote_result_from_data_api
})
)})
    },
    {
      name: "frontbench_MPs_cached",
      inputs: ["cabinet_MPs_cached","shadow_cabinet_MPs_cached"],
      value: (function(cabinet_MPs_cached,shadow_cabinet_MPs_cached){return(
[...cabinet_MPs_cached, ...shadow_cabinet_MPs_cached]
)})
    },
    {
      name: "cabinet_MPs_cached",
      value: (async function(){return(
await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/cabinet_MPs.json")).json()
)})
    },
    {
      name: "shadow_cabinet_MPs_cached",
      value: (async function(){return(
await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/shadow_cabinet_MPs.json")).json()
)})
    },
    {
      name: "LGBT_MPs_cached",
      value: (async function(){return(
await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/LGBT_MPs.json")).json()
)})
    },
    {
      name: "ethnic_MPs_cached",
      value: (async function(){return(
await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/ethnic_MPs.json")).json()
)})
    },
    {
      name: "MP_familynames_fuzzy_set",
      inputs: ["fuzzySet","MPs_cached"],
      value: (function(fuzzySet,MPs_cached){return(
fuzzySet(Array.from(MPs_cached.reduce((names, mp) => { 
  names.add(mp.ListAs.split(",")[0]); 
  return names;
}, new Set())), false, 1, 2)
)})
    },
    {
      name: "MP_names_fuzzy_set",
      inputs: ["fuzzySet","MPs_cached"],
      value: (function(fuzzySet,MPs_cached){return(
fuzzySet(Array.from(MPs_cached.reduce((names, mp) => { 
  names.add(mp.FirstAndLastName); 
  return names;
}, new Set())), false, 1, 2)
)})
    },
    {
      name: "MP_constituencies_fuzzy_set",
      inputs: ["fuzzySet","MPs_cached"],
      value: (function(fuzzySet,MPs_cached){return(
fuzzySet(Array.from(MPs_cached.reduce((constituencies, mp) => { 
  constituencies.add(mp.MemberFrom); 
  return constituencies;
}, new Set())), false, 1, 2)
)})
    },
    {
      name: "MP_ethnicities_fuzzy_set",
      inputs: ["fuzzySet","MPs_minorities_cached"],
      value: (function(fuzzySet,MPs_minorities_cached){return(
fuzzySet(Array.from(MPs_minorities_cached.reduce((ethnicities, mp) => { 
  ethnicities.add(mp.DisplayAs); 
  return ethnicities;
}, new Set())), false, 1, 2)
)})
    },
    {
      name: "conservative_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Conservative')
)})
    },
    {
      name: "labour_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Labour')
)})
    },
    {
      name: "snp_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Scottish National Party')
)})
    },
    {
      name: "lib_dem_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Liberal Democrat')
)})
    },
    {
      name: "dup_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Democratic Unionist Party')
)})
    },
    {
      name: "sinn_féin_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Sinn Féin')
)})
    },
    {
      name: "plaid_cymru_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Plaid Cymru')
)})
    },
    {
      name: "green_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Green Party')
)})
    },
    {
      name: "independent_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Party === 'Independent')
)})
    },
    {
      name: "female_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Gender === "F")
)})
    },
    {
      name: "male_MPs",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.filter(mp => mp.Gender === "M")
)})
    },
    {
      name: "enabled_MPs_orderby_dimensions",
      value: (function(){return(
["ListAs", "Gender", "Age", "EthnicityIndex", "LGBT", "Vote"]
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
## 👩‍💼 MPs
*Data loaded from : [data.parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7CIsEligible=true/) & [en.wikipedia.org](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom)*

*Advisable to use the cached MPs data above. This dataset is included mainly in order to highlight both the original source data and to catch updates that show up as differences between these and the cached versions.*`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### Data`
)})
    },
    {
      name: "MPs",
      inputs: ["fastXmlParser","soFetch","yearsSinceDateString","MPs_data_corrections","partyNameMap"],
      value: (async function(fastXmlParser,soFetch,yearsSinceDateString,MPs_data_corrections,partyNameMap){return(
(fastXmlParser.parse(await (await soFetch(
'https://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons|IsEligible=true/GovernmentPosts|OppositionPosts|Addresses/'
    )).text(), { ignoreAttributes: false })
)
.Members.Member
.map(mp => {
  
  mp.MemberID = mp["@_Member_Id"];
  mp.Age = yearsSinceDateString(typeof mp.DateOfBirth === "string"? mp.DateOfBirth : `${(new Date).getFullYear()}-${(new Date).getMonth()}-${(new Date).getDate()}T00:00:00`);
  mp.Party = mp.Party["#text"];
  mp.FirstAndLastName = mp.DisplayAs.toLowerCase().replace(/(mr|mr|ms|miss|mrs|dr|sir|rt hon|mp)(\.?)\s/, "");
  if (mp.FirstAndLastName.split(" ").length > 2) {
    mp.FirstAndLastName = `${mp.FirstAndLastName.split(" ")[0]} ${mp.FirstAndLastName.split(" ").pop()}`;
  }
  mp.FrontBench = (mp.hasOwnProperty("GovernmentPosts") && mp.GovernmentPosts.hasOwnProperty("GovernmentPost")) 
    || (mp.hasOwnProperty("OppositionPosts") && mp.OppositionPosts.hasOwnProperty("OppositionPost"));
  
  if (mp.FrontBench === true) {
    if (mp.hasOwnProperty("GovernmentPosts") && mp.GovernmentPosts.hasOwnProperty("GovernmentPost")) {
      mp.GovernmentPosts.GovernmentPost = Array.isArray(mp.GovernmentPosts.GovernmentPost)
        ? mp.GovernmentPosts.GovernmentPost
        : [mp.GovernmentPosts.GovernmentPost];
    } else {
      mp.OppositionPosts.OppositionPost = Array.isArray(mp.OppositionPosts.OppositionPost)
        ? mp.OppositionPosts.OppositionPost
        : [mp.OppositionPosts.OppositionPost];
    }
    mp.Post = mp.hasOwnProperty("GovernmentPosts") && mp.GovernmentPosts.hasOwnProperty("GovernmentPost")
      ? mp.GovernmentPosts.GovernmentPost[0].Name 
      : mp.OppositionPosts.OppositionPost[0].Name;
  }
  
  if (MPs_data_corrections.hasOwnProperty(mp.FullTitle)) {
    for (let key of Object.keys(MPs_data_corrections[mp.FullTitle])) {
      mp[key] = MPs_data_corrections[mp.FullTitle][key];
    }
  }
  
  if (partyNameMap.hasOwnProperty(mp.Party)) {
     mp.Party = partyNameMap[mp.Party];
  }
  
  if (mp.Addresses && Array.isArray(mp.Addresses.Address)) {
    for (let a of mp.Addresses.Address) {
      switch (a.Type) {
        case "Twitter": mp.Twitter = `@${a.Address1.split("/").pop()}`; break;
        case "Website": mp.Website = a.Address1; break;
        case "Constituency": 
          mp.EmailConstituency = a.Email;
          mp.TelConstituency = a.Phone;
        break;
        case "Parliamentary": 
          mp.EmailParliamentary = a.Email;
          mp.TelParliamentary = a.Phone;
        break;
      }
    }
  }
  
  [
    "@_Member_Id",
    "@_Dods_Id",
    "@_Pims_Id",
    "@_Clerks_Id",
    "LayingMinisterName",
    "DateOfDeath",
    "DateOfBirth",
    "HouseStartDate",
    "HouseEndDate",
    "CurrentStatus",
    "House",
    "GovernmentPosts",
    "OppositionPosts",
    "Addresses"
  ].forEach(p => delete mp[p]);

  return mp;
})
)})
    },
    {
      name: "MPs_minorities",
      inputs: ["MPs","default_ethnicity","ethnic_MPs","fuzzySet","MP_ethnicities_count","LGBT_MPs"],
      value: (function(MPs,default_ethnicity,ethnic_MPs,fuzzySet,MP_ethnicities_count,LGBT_MPs){return(
JSON.parse(JSON.stringify(MPs)).map(mp => {
  
  let ethnicity = default_ethnicity;

  ethnic_MPs.some(emp => {
    let fuzzyName = fuzzySet();
    fuzzyName.add(emp.FirstAndLastName);
    let n_score = fuzzyName.get(mp.FirstAndLastName);
    if (n_score && n_score[0][0] >= 0.85) {
      // emp.found = true;
      ethnicity = emp.Ethnicity;
      return true;
    }
    return false;
  });
  
  mp.Ethnicity = ethnicity;
  mp.EthnicityIndex = MP_ethnicities_count[ethnicity];
  
  mp.LGBT = LGBT_MPs.some(lgbtmp => {
    let fuzzyName = fuzzySet();
    fuzzyName.add(lgbtmp.FirstAndLastName);
    let n_score = fuzzyName.get(mp.FirstAndLastName);
    if (n_score && n_score[0][0] > 0.5) {
      let fuzzyConstit = fuzzySet();
      fuzzyConstit.add(lgbtmp.MemberFrom);
      let c_score = fuzzyConstit.get(mp.MemberFrom);
      if (c_score && c_score[0][0] > 0.65) {
        // lgbtmp.found += 1;
        return true;
      }
    }
    return false;
  });
  
  return mp;
})
)})
    },
    {
      name: "MPs_data_corrections",
      value: (function(){return(
{
  "Stephen Lloyd MP": {
    Party: "Liberal Democrat"
  }
}
)})
    },
    {
      name: "MPs_expenses",
      value: (function(){return(
"TODO: fetch and merge this into MPs dataset http://www.theipsa.org.uk/media/185048/total-spend-2017-18.csv"
)})
    },
    {
      name: "frontbench_MPs",
      inputs: ["cabinet_MPs","shadow_cabinet_MPs"],
      value: (function(cabinet_MPs,shadow_cabinet_MPs){return(
[...cabinet_MPs, ...shadow_cabinet_MPs]
)})
    },
    {
      name: "cabinet_MPs",
      inputs: ["cabinet_MPs_cached","fastXmlParser"],
      value: (async function(cabinet_MPs_cached,fastXmlParser){return(
cabinet_MPs_cached || fastXmlParser.parse(
  await (
    await fetch(
      'https://observable-cors.glitch.me/https://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons|IsEligible=true|holdscabinetpost=true/GovernmentPosts/'
    )
  ).text()
)
.Members.Member
)})
    },
    {
      name: "shadow_cabinet_MPs",
      inputs: ["shadow_cabinet_MPs_cached","fastXmlParser"],
      value: (async function(shadow_cabinet_MPs_cached,fastXmlParser){return(
shadow_cabinet_MPs_cached || fastXmlParser.parse(
  await (
    await fetch(
      'https://observable-cors.glitch.me/https://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons|IsEligible=true|holdsshadowcabinetpost=true/OppositionPosts/'
    )
  ).text()
)
.Members.Member
)})
    },
    {
      name: "ethnic_MPs_found_in_MPs",
      inputs: ["MPs_minorities"],
      value: (function(MPs_minorities){return(
MPs_minorities.filter(mp => !mp.Ethnicity.includes('Caucasion'))
)})
    },
    {
      name: "LGBT_MPs_found_in_MPs",
      inputs: ["MPs_minorities"],
      value: (function(MPs_minorities){return(
MPs_minorities.filter(mp => mp.LGBT)
)})
    },
    {
      name: "MP_ethnicities_count",
      inputs: ["MP_ethnicities","MPs","ethnic_MPs"],
      value: (function(MP_ethnicities,MPs,ethnic_MPs){return(
Array.from(MP_ethnicities).reduce((ec, e) => { 
  ec[`${e}`] = (e === "British Caucasion")
    ? MPs.length - ethnic_MPs.length
    : ethnic_MPs.filter(mp => mp.Ethnicity === e).length;
  return ec;
}, {})
)})
    },
    {
      name: "MP_ethnicities",
      inputs: ["ethnic_MPs"],
      value: (function(ethnic_MPs){return(
ethnic_MPs.reduce((set, mp) => set.add(mp.Ethnicity), new Set().add("British Caucasion"))
)})
    },
    {
      name: "default_ethnicity",
      value: (function(){return(
"British Caucasion"
)})
    },
    {
      name: "ethnicNamesMap",
      value: (function(){return(
(name) => ({
  "suella fernandes": "suella braverman",
  "preet gill": "preet kaur gill"
}[name.toLowerCase()] || name)
)})
    },
    {
      name: "LGBTNamesMap",
      value: (function(){return(
(name) => ({}[name.toLowerCase()] || name)
)})
    },
    {
      name: "ethnic_MPs",
      inputs: ["ethnic_MPs_cached","soFetch","ethnicNamesMap"],
      value: (async function(ethnic_MPs_cached,soFetch,ethnicNamesMap){return(
ethnic_MPs_cached || Array.from(
(new window.DOMParser()).parseFromString(
  await soFetch(
  "https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom"
  )
  .then(res => res.text()), 
"text/html").querySelector("#List_of_ethnic_minority_Members_of_Parliament")
  .parentNode.nextElementSibling
      .querySelector("tbody")
      .querySelectorAll("tr")
)
.filter(tr => {
  let tds = tr.querySelectorAll("td");

  return (tds && tds.length > 5)? tds.item(6).textContent.includes("Serving") : false;
})
.map(tr => {
  let tds = tr.querySelectorAll("td");
  let name = ethnicNamesMap(tds.item(2).querySelector("a").textContent.trim().replace(/(mr|mr|ms|miss|mrs|dr|sir|rt hon|mp)(\.?)\s/, ""));
  
  return (tds && tds.length > 7)? {
    Party: tds.item(0).querySelector("a").textContent.trim(),
    FullTitle: tds.item(2).querySelector("a").textContent.trim(),
    FirstAndLastName: name,
    MemberFrom: tds.item(3).querySelector("a").textContent.trim(),
    Ethnicity: tds.item(7).querySelector("a").textContent.trim()
  } : {};
})
)})
    },
    {
      name: "LGBT_MPs",
      inputs: ["LGBT_MPs_cached","soFetch","LGBTNamesMap"],
      value: (async function(LGBT_MPs_cached,soFetch,LGBTNamesMap){return(
LGBT_MPs_cached || Array.from(
(new window.DOMParser()).parseFromString(
  await soFetch(
  "https://en.wikipedia.org/wiki/List_of_LGBT_politicians_in_the_United_Kingdom"
  )
  .then(res => res.text()), 
'text/html').querySelector('#List_of_LGBT_Members_of_Parliament')
  .parentNode.nextElementSibling
      .querySelector('tbody')
      .querySelectorAll('tr')
)
.filter(tr => {
  let tds = tr.querySelectorAll('td');
  return (tds && tds.length > 4)? tds.item(4).textContent.includes('present') : false;
})
.map(tr => {
  let tds = tr.querySelectorAll('td');
  let name = LGBTNamesMap(tds.item(2).querySelector("a").textContent.trim().toLowerCase().replace(/(mr|mr|ms|miss|mrs|dr|sir|rt hon|mp)(\.?)\s/, ""));
  return (tds && tds.length > 4)? {
    Party: tds.item(0).querySelector('a').textContent.trim(),
    FullTitle: tds.item(2).querySelector('a').textContent.trim(),
    FirstAndLastName: name,
    MemberFrom: tds.item(3).querySelector('a').textContent.trim()
  } : {};
})
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### Helper Functions`
)})
    },
    {
      name: "yearsSinceDateString",
      value: (function(){return(
(date_string) => Math.abs(new Date(Date.now() - (new Date(date_string)).getTime()).getUTCFullYear() - 1970)
)})
    },
    {
      name: "applyVoteResultToMPs",
      value: (function(){return(
({ mps, vote_result } = {}) => {
  debugger;
  mps.forEach(mp => { mp.Vote = 0; });
  for (let v of vote_result.Votes) {
    let mp = mps.find(mp => mp.MemberID === v.MemberID);
    if (mp) {
      mp.Vote = v.Type
    }
  }
  return mps;
}
)})
    },
    {
      name: "findMPsByName",
      inputs: ["MPs_cached","MP_names_fuzzy_set"],
      value: (function(MPs_cached,MP_names_fuzzy_set){return(
(name, mps = MPs_cached, accuracy = 0.1, set = MP_names_fuzzy_set) => (set.get(name, accuracy) || []).reduce((mmps, m) => [...mmps, ...mps.filter(mp => mp.FirstAndLastName === m[1])], new Array())
)})
    },
    {
      name: "findMPsByFamilyName",
      inputs: ["MPs_cached","MP_familynames_fuzzy_set"],
      value: (function(MPs_cached,MP_familynames_fuzzy_set){return(
(familyname, mps = MPs_cached, accuracy = 0.1, set = MP_familynames_fuzzy_set) => (set.get(familyname, accuracy) || []).reduce((mmps, m) => [...mmps, ...mps.filter(mp => mp.ListAs.split(",")[0] === m[1])], [])
)})
    },
    {
      name: "findMPsByConstituency",
      inputs: ["MPs_cached","MP_constituencies_fuzzy_set"],
      value: (function(MPs_cached,MP_constituencies_fuzzy_set){return(
(constituency, mps = MPs_cached, accuracy = 0.1, set = MP_constituencies_fuzzy_set) => (set.get(constituency, accuracy) || []).reduce((mcmps, m) => [...mcmps, ...mps.filter(mp => mp.MemberFrom === m[1])], [])
)})
    },
    {
      name: "findMPsByEthnicity",
      inputs: ["MPs_cached","MP_ethnicities_fuzzy_set"],
      value: (function(MPs_cached,MP_ethnicities_fuzzy_set){return(
(ethnicity, mps = MPs_cached, set = MP_ethnicities_fuzzy_set) => (set.get(ethnicity) || []).reduce((mmps, m) => [...mmps, ...mps.filter(mp => mp.Ethnicity === m[1])], [])
)})
    },
    {

    },
    {
      name: "lords_data",
      inputs: ["md"],
      value: (function(md){return(
md`---
## 🏰 Lords
*Data loaded from : [data.parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Lords%7CIsEligible=true/) & [en.wikipedia.org](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom)*

---`
)})
    },
    {
      inputs: ["lords"],
      value: (function(lords){return(
lords.filter(l => l.DisplayAs.includes("Earl"))
)})
    },
    {
      name: "lords",
      inputs: ["fastXmlParser","soFetch","yearsSinceDateString","partyNameMap"],
      value: (async function(fastXmlParser,soFetch,yearsSinceDateString,partyNameMap){return(
(fastXmlParser.parse(await (await soFetch(
'https://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Lords|IsEligible=true/GovernmentPosts|OppositionPosts|Addresses/'
    )).text(), { ignoreAttributes: false })
)
.Members.Member
.map(lord => {

  lord.MemberID = lord["@_Member_Id"];
  lord.Age = yearsSinceDateString(typeof lord.DateOfBirth === "string"? lord.DateOfBirth : `${(new Date).getFullYear()}-${(new Date).getMonth()}-${(new Date).getDate()}T00:00:00`);
  lord.Party = lord.Party["#text"];
  lord.Name = lord.FullTitle.split(",").shift().replace(/(Rt|Hon|The|OBE|CBE|KBE)(\.?)(\b|\s)/ig, "").trim();

  lord.FrontBench = (lord.hasOwnProperty("GovernmentPosts") && lord.GovernmentPosts.hasOwnProperty("GovernmentPost")) 
    || (lord.hasOwnProperty("OppositionPosts") && lord.OppositionPosts.hasOwnProperty("OppositionPost"));
  
  if (lord.FrontBench === true) {
    if (lord.hasOwnProperty("GovernmentPosts") && lord.GovernmentPosts.hasOwnProperty("GovernmentPost")) {
      lord.GovernmentPosts.GovernmentPost = Array.isArray(lord.GovernmentPosts.GovernmentPost)
        ? lord.GovernmentPosts.GovernmentPost
        : [lord.GovernmentPosts.GovernmentPost];
    } else {
      lord.OppositionPosts.OppositionPost = Array.isArray(lord.OppositionPosts.OppositionPost)
        ? lord.OppositionPosts.OppositionPost
        : [lord.OppositionPosts.OppositionPost];
    }
    lord.Post = lord.hasOwnProperty("GovernmentPosts") && lord.GovernmentPosts.hasOwnProperty("GovernmentPost")
      ? lord.GovernmentPosts.GovernmentPost[0].Name 
      : lord.OppositionPosts.OppositionPost[0].Name;
  }
  
  if (partyNameMap.hasOwnProperty(lord.Party)) {
     lord.Party = partyNameMap[lord.Party["#text"]];
  }
  
  if (lord.Addresses && Array.isArray(lord.Addresses.Address)) {
    for (let a of lord.Addresses.Address) {
      switch (a.Type) {
        case "Twitter": lord.Twitter = `@${a.Address1.split("/").pop()}`; break;
        case "Website": lord.Website = a.Address1; break;
        case "Constituency": 
          lord.EmailConstituency = a.Email;
          lord.TelConstituency = a.Phone;
        break;
        case "Parlimentary": 
          lord.EmailParlimentary = a.Email;
          lord.TelParlimentary = a.Phone;
        break;
      }
    }
  }
  
  [
    "@_Member_Id",
    "@_Dods_Id",
    "@_Pims_Id",
    "@_Clerks_Id",
    "LayingMinisterName",
    "DateOfDeath",
    "DateOfBirth",
    "HouseStartDate",
    "HouseEndDate",
    "CurrentStatus",
    "House",
    "GovernmentPosts",
    "OppositionPosts",
    "Addresses"
  ].forEach(p => delete lord[p]);

  return lord;
})
)})
    },
    {
      name: "lords_minorities",
      inputs: ["lords"],
      value: (function(lords){return(
lords
)})
    },
    {
      name: "ethnic_lords_found_in_lords",
      inputs: ["lords_minorities"],
      value: (function(lords_minorities){return(
lords_minorities.filter(lord => lord.Ethnicity && !lord.Ethnicity.includes('Caucasion'))
)})
    },
    {
      name: "ethnic_lords_not_found_in_lords",
      inputs: ["ethnic_lords"],
      value: (function(ethnic_lords){return(
ethnic_lords.filter(elord => elord.LordDataMatchScore === 0)
)})
    },
    {
      name: "LGBT_lords_found_in_lords",
      inputs: ["lords_minorities"],
      value: (function(lords_minorities){return(
lords_minorities.filter(lord => lord.LGBT)
)})
    },
    {
      name: "lord_ethnicities",
      inputs: ["ethnic_lords"],
      value: (function(ethnic_lords){return(
ethnic_lords.reduce((set, lord) => set.add(lord.Ethnicity), new Set().add("British Caucasion"))
)})
    },
    {
      name: "lord_ethnicities_count",
      inputs: ["lord_ethnicities","lords","ethnic_lords"],
      value: (function(lord_ethnicities,lords,ethnic_lords){return(
Array.from(lord_ethnicities).reduce((ec, e) => { 
  ec[`${e}`] = (e === "British Caucasion")
    ? lords.length - ethnic_lords.length
    : ethnic_lords.filter(lord => lord.Ethnicity === e).length;
  return ec;
}, {})
)})
    },
    {
      name: "ethnic_lords",
      inputs: ["soFetch","ethnicNamesMap"],
      value: (async function(soFetch,ethnicNamesMap){return(
Array.from(
(new window.DOMParser()).parseFromString(
  await soFetch(
  "https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom"
  )
  .then(res => res.text()), 
"text/html").querySelector("#List_of_ethnic_minority_Members_of_the_House_of_Lords")
  .parentNode.nextElementSibling
      .querySelector("tbody")
      .querySelectorAll("tr")
)
.filter(tr => {
  let tds = tr.querySelectorAll("td");

  return (tds && tds.length > 5)? tds.item(5).textContent.includes("Serving") : false;
})
.map(tr => {
  let tds = tr.querySelectorAll("td");
  let name = tds.item(2).querySelector("a").textContent;
  
  return (tds && tds.length > 6)? {
    Party: tds.item(0).querySelector("a").textContent.trim(),
    DisplayAs: ethnicNamesMap(name.split(",").pop().trim().replace(/(The)(\.?)\s/, "")),
    FirstAndLastName: ethnicNamesMap(name.split(",").shift().trim()),
    Name: name.split(",").pop().replace(/(Rt|Hon|The|OBE|CBE|KBE)(\.?)(\b|\s)/ig, "").trim(),
    Ethnicity: tds.item(6).querySelector("a").textContent.trim(),
    LordDataMatchScore: 0
  } : {};
})
)})
    },
    {
      name: "LGBT_lords",
      inputs: ["soFetch","LGBTNamesMap"],
      value: (async function(soFetch,LGBTNamesMap){return(
Array.from(
(new window.DOMParser()).parseFromString(
  await soFetch(
  "https://en.wikipedia.org/wiki/List_of_LGBT_politicians_in_the_United_Kingdom"
  )
  .then(res => res.text()), 
'text/html').querySelector('#List_of_LGBT_Members_of_the_House_of_Lords')
  .parentNode.nextElementSibling
      .querySelector('tbody')
      .querySelectorAll('tr')
)
.filter(tr => {
  let tds = tr.querySelectorAll('td');
  return (tds && tds.length > 4)? tds.item(4).textContent.includes('present') : false;
})
.map(tr => {
  let tds = tr.querySelectorAll('td');
  let name = tds.item(2).querySelector("a").textContent.trim().replace(/(The)(\.?)\s/, "");
  name = LGBTNamesMap(name);
  return (tds && tds.length > 4)? {
    Party: tds.item(0).querySelector('a').textContent.trim(),
    FullTitle: name,
    FirstAndLastName: name.toLowerCase()
  } : {};
})
)})
    },
    {

    },
    {
      name: "parties_data",
      inputs: ["md"],
      value: (function(md){return(
md`---
## 🏛️ Political Parties (Cached)
*Data originally loaded from : [data.parliament.uk](http://data.parliament.uk)*`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### Data`
)})
    },
    {
      name: "political_parties_cached",
      inputs: ["MPs_cached","governing_party","party_alliances","MPs","partyPoliticalOrientation","partyPoliticalOrientationScore","partyParliamentarySeatingOrder"],
      value: (function(MPs_cached,governing_party,party_alliances,MPs,partyPoliticalOrientation,partyPoliticalOrientationScore,partyParliamentarySeatingOrder){return(
Array.from(MPs_cached.reduce((ps, mp) => { ps.add(mp.Party); return ps; }, new Set())).map(p => ({
  FullTitle: p, 
  SideOfHouse: (p === governing_party
    || (party_alliances.hasOwnProperty(governing_party) && party_alliances[governing_party].includes(p)))
    ? 'Right'
    : p === 'Speaker'? 'Centre' : 'Left',
  MPCount: MPs.filter(mp => mp.Party === p).length,
  Orientation: partyPoliticalOrientation(p), 
  OrientationScore: partyPoliticalOrientationScore(p),
  SeatingOrder: partyParliamentarySeatingOrder(p)
})).sort((a, b) => (a.SeatingOrder < b.SeatingOrder)? -1 : (a.SeatingOrder > b.SeatingOrder)? 1 : 0)
)})
    },
    {
      name: "governing_party_cached",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.find(mp => mp.Post && mp.Post.includes("Prime Minister")).Party
)})
    },
    {
      name: "party_alliances",
      value: (function(){return(
{ "Conservative": ["Democratic Unionist Party"] }
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### Helper Functions`
)})
    },
    {
      name: "partyNameMap",
      value: (function(){return(
{
  "Labour (Co-op)": "Labour"
}
)})
    },
    {
      name: "partyPoliticalOrientation",
      value: (function(){return(
(party = "") => ({
  "Conservative": "Right",
  "Labour": "Left",
  "Labour (Co-op)": "Left",
  "Liberal Democrat": "Centre",
  "Green Party": "Left",
  "Plaid Cymru": "Left",
  "Sinn Féin": "Left",
  "Scottish National Party": "Centre-Right",
  "Democratic Unionist Party": "Right",
  "Speaker": "Center"
}[party] || "Unknown")
)})
    },
    {
      name: "partyPoliticalOrientationScore",
      value: (function(){return(
(party = "") => ({
  "Conservative": 9,
  "Labour": -9,
  "Labour (Co-op)": -9,
  "Liberal Democrat": 1,
  "Green Party": -9,
  "Plaid Cymru": -9,
  "Sinn Féin": -9,
  "Scottish National Party": 3,
  "Democratic Unionist Party": 10,
  "Speaker": 0
}[party] || "Unknown")
)})
    },
    {
      name: "partyParliamentarySeatingOrder",
      value: (function(){return(
(party = "") => ({
  "Democratic Unionist Party": -1,
  "Conservative": 1,
  "Speaker": 2,
  "Labour": 3,
  "Liberal Democrat": 4,
  "Scottish National Party": 5,
  "Plaid Cymru": 6,
  "Sinn Féin": 7,
  "Green Party": 8
}[party] || 11)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
## 🏛️ Political Parties
*Data loaded from : [data.parliament.uk](http://data.parliament.uk)*`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
#### Data`
)})
    },
    {
      name: "political_parties",
      inputs: ["MPs","governing_party","party_alliances","partyPoliticalOrientation","partyPoliticalOrientationScore","partyParliamentarySeatingOrder"],
      value: (function(MPs,governing_party,party_alliances,partyPoliticalOrientation,partyPoliticalOrientationScore,partyParliamentarySeatingOrder){return(
Array.from(MPs.reduce((ps, mp) => { ps.add(mp.Party); return ps; }, new Set())).map(p => ({
  FullTitle: p, 
  SideOfHouse: (p === governing_party
    || (party_alliances.hasOwnProperty(governing_party) && party_alliances[governing_party].includes(p)))
    ? 'Right'
    : p === 'Speaker'? 'Centre' : 'Left',
  MPCount: MPs.filter(mp => mp.Party === p).length,
  Orientation: partyPoliticalOrientation(p), 
  OrientationScore: partyPoliticalOrientationScore(p),
  SeatingOrder: partyParliamentarySeatingOrder(p)
})).sort((a, b) => (a.SeatingOrder < b.SeatingOrder)? -1 : (a.SeatingOrder > b.SeatingOrder)? 1 : 0)
)})
    },
    {
      name: "governing_party",
      inputs: ["MPs"],
      value: (function(MPs){return(
MPs.find(mp => mp.Post && mp.Post.includes("Prime Minister")).Party
)})
    },
    {

    },
    {
      name: "ui_components",
      inputs: ["md"],
      value: (function(md){return(
md`---
## 📈 UI Components
*For useage examples, see available visualisations listed above*

---`
)})
    },
    {
      name: "emoji",
      value: (function(){return(
symbol => ({
    "British Caucasion F Old": "&#x1F475&#x1F3FB",
    "British Caucasion M Old": "&#x1F474&#x1F3FB",
    "Black British F Old": "&#x1F475&#x1F3FF",
    "Black British M Old": "&#x1F474&#x1F3FF", 
    "British Indian F Old": "&#x1F475&#x1F3FD",
    "British Indian M Old": "&#x1F474&#x1F3FD",
    "Somali F Old": "&#x1F469&#x1F3FE",
    "Somali M Old": "&#x1F468&#x1F3FE",
    "British Pakistani F Old": "&#x1F475&#x1F3FD",
    "British Pakistani M Old": "&#x1F474&#x1F3FD",
    "British Bangladeshi F Old": "&#x1F475&#x1F3FE",
    "British Bangladeshi M Old": "&#x1F474&#x1F3FE",
    "Anglo-Indian F Old": "&#x1F475&#x1F3FD",
    "Anglo-Indian M Old": "&#x1F474&#x1F3FD",
    "British Iraqi F Old": "&#x1F475&#x1F3FD",
    "British Iraqi M Old": "&#x1F474&#x1F3FD",
    "British Sri Lankan F Old": "&#x1F475&#x1F3FD",
    "British Sri Lankan M Old": "&#x1F474&#x1F3FD",
    "British Iranian F Old": "&#x1F475&#x1F3FD",
    "British Iranian M Old": "&#x1F474&#x1F3FD",
    "British Chinese F Old": "&#x1F475&#x1F3FD",
    "British Chinese M Old": "&#x1F474&#x1F3FD",
    "British Cypriot F Old": "&#x1F475&#x1F3FC",
    "British Cypriot M Old": "&#x1F474&#x1F3FC",
    "British Arab F Old": "&#x1F475&#x1F3FD",
    "British Arab M Old": "&#x1F474&#x1F3FD",
  
    "British Caucasion F": "&#x1F469&#x1F3FB",
    "British Caucasion M": "&#x1F468&#x1F3FB",
    "Black British F": "&#x1F469&#x1F3FF",
    "Black British M": "&#x1F468&#x1F3FF", 
    "British Indian F": "&#x1F469&#x1F3FD",
    "British Indian M": "&#x1F468&#x1F3FD",
    "Somali F": "&#x1F469&#x1F3FE",
    "Somali M": "&#x1F468&#x1F3FE",
    "British Pakistani F": "&#x1F469&#x1F3FD",
    "British Pakistani M": "&#x1F468&#x1F3FD",
    "British Bangladeshi F": "&#x1F469&#x1F3FE",
    "British Bangladeshi M": "&#x1F468&#x1F3FE",
    "Anglo-Indian F": "&#x1F469&#x1F3FD",
    "Anglo-Indian M": "&#x1F468&#x1F3FD",
    "British Iraqi F": "&#x1F469&#x1F3FD",
    "British Iraqi M": "&#x1F468&#x1F3FD",
    "British Sri Lankan F": "&#x1F469&#x1F3FD",
    "British Sri Lankan M": "&#x1F468&#x1F3FD",
    "British Iranian F": "&#x1F469&#x1F3FD",
    "British Iranian M": "&#x1F468&#x1F3FD",
    "British Chinese F": "&#x1F469&#x1F3FD",
    "British Chinese M": "&#x1F468&#x1F3FD",
    "British Cypriot F": "&#x1F469&#x1F3FC",
    "British Cypriot M": "&#x1F468&#x1F3FC",
    "British Arab F": "&#x1F469&#x1F3FD",
    "British Arab M": "&#x1F468&#x1F3FD",
  
    "Thumbs Down": "&#x1F44E",
    "Thumbs Up": "&#x1F44D",
    "Eyes": "&#x1F440",
    "Rainbow Flag": "&#x1F3F3&#xFE0F&#x200D&#x1F308"
  }[symbol])
)})
    },
    {
      name: "thumbVoteElement",
      value: (function(){return(
(yellow = true, up_or_down = false) => `<span class="thumb-vote">&#x1F44${["D","E"][(!up_or_down)? Math.floor(Math.random() * 2) : (up_or_down === "up")? 0 : 1]}${yellow? "" : "&#x1F3F" + ["B","C","D","E","F"][Math.floor(Math.random() * 5)]}</span>`
)})
    },
    {
      name: "MPChart",
      inputs: ["parliamentElementFromPartiesAndMPsObjs","_","tooltips"],
      value: (function(parliamentElementFromPartiesAndMPsObjs,_,tooltips){return(
function({ parties, mps, order = "DisplayAs", with_votes = false } = {}) {
    
  let container_el = parliamentElementFromPartiesAndMPsObjs({
    parties,
    mps: _.orderBy(mps, [order], ["asc"]),
    with_votes
  });
  
  tooltips.addToSelector(".parliament");
  
  return container_el;
}
)})
    },
    {
      name: "MPTooltipContent",
      value: (function(){return(
el => `<div class="mp-tooltip">
    <h4>${el.getAttribute("data-full-title")}<span>${el.getAttribute("data-post")? " - " + el.getAttribute("data-post") : ""}</span></h4>
    <small>${el.getAttribute("data-constituency")}</small>
    <ul class="mp-contact-details">
      <li class="mp-website${el.getAttribute("data-website")? "" : " missing-data"}">
        <a href="${el.getAttribute("data-website")}" tabindex="-1">${el.getAttribute("data-website")}</a>
      </li>
      <li class="mp-twitter${el.getAttribute("data-twitter")? "" : " missing-data"}">
        <a href="https://twitter.com/${el.getAttribute("data-twitter")}" tabindex="-1">${el.getAttribute("data-twitter").split("?").shift()}</a>
      </li>
      <li class="mp-tel${el.getAttribute("data-tel")? "" : " missing-data"}">
        <a href="tel:${el.getAttribute("data-tel")}" tabindex="-1">${el.getAttribute("data-tel")? "&#x260E&#xFE0F" : ""}</a>
      </li>
      <li class="mp-email${el.getAttribute("data-email")? "" : " missing-data"}">
        <a href="mailto:${el.getAttribute("data-email")}" tabindex="-1">${el.getAttribute("data-email")? "&#x1F4E7" : ""}</a>
      </li>
    </ul>
  </div>`
)})
    },
    {
      name: "MPElementFromMPObj",
      inputs: ["html","emoji"],
      value: (function(html,emoji){return(
(mp) => html`<span class="mp" id="member${mp.MemberID}" tabindex="1" data-name="${mp.FullTitle}" data-list-name="${mp.ListAs}" data-search-name="${mp.FirstAndLastName}" data-party="${mp.Party}" data-lgbt="${mp.LGBT}" data-gender="${mp.Gender}" data-age="${mp.Age}" data-ethnicity="${mp.Ethnicity}" data-vote="${(mp.Vote===1)? "Aye" : (mp.Vote < 0? "Noe" : "DidNotVote")}" data-full-title="${mp.FullTitle}" data-post="${mp.Post? mp.Post : ""}" data-constituency="Member for ${mp.MemberFrom}" data-twitter="${mp.Twitter? mp.Twitter : ""}" data-email="${(mp.EmailConstituency || mp.EmailParliamentary)? (mp.EmailConstituency || mp.EmailParliamentary) : ""}" data-website="${mp.Website? mp.Website : ""}" data-tel="${(mp.TelConstituency || mp.TelParliamentary)? (mp.TelConstituency || mp.TelParliamentary) : ""}">${emoji(`${mp.Ethnicity || 'British Caucasion'} ${mp.Gender}${mp.Age > 55? " Old" : ""}`)}</span>`
)})
    },
    {
      name: "MPsOrderByForm",
      inputs: ["radio","enabled_MPs_orderby_dimensions"],
      value: (function(radio,enabled_MPs_orderby_dimensions){return(
(with_vote = false) => {
  let opts = [
    { label: "Name", value: "ListAs" },
    { label: "Gender", value: "Gender" },
    { label: "Age", value: "Age" },
    { label: "Ethnicity", value: "EthnicityIndex" },
    { label: "LGBT", value: "LGBT" }
  ];
  if (with_vote) {
    opts.push({ label: "Vote", value: "Vote" });
  }
  opts = [
    ...opts,
    ...[{ label: "Expenses Claimed", value: "Expenses" },
        { label: "Net Worth", value: "NetWorth" },
        { label: "Education", value: "Education" },
        { label: "Social Background", value: "SocialBG" }]
  ];
  const reorder = radio({
    title: "Order By",
    options: opts,
    value: "ListAs"
  });

  Array.from(reorder.querySelectorAll("input") || [])
    .filter(d => !enabled_MPs_orderby_dimensions.includes(d.value))
    .forEach(d => { 
      d.disabled = true; 
      d.parentNode.title = "Coming Soon. See the request for help on the Emojiocracy page";
      d.parentNode.classList.add("disabled");
    });
  
  return reorder;
}
)})
    },
    {
      name: "parliamentElementFromPartiesAndMPsObjs",
      inputs: ["html","partyElementFromPartyObj","MPElementFromMPObj"],
      value: (function(html,partyElementFromPartyObj,MPElementFromMPObj){return(
({ parties, mps, with_votes = false } = {}) => {
  
  let container_el = html`<div class="parliament" data-with-votes="${!!with_votes}"></div>`;
  
  let tabindex = 0;
  let party_elements = {};
  
  for (const party of parties) {
    let party_element = partyElementFromPartyObj(party);
    container_el.appendChild(party_element);
    party_elements[`${party.FullTitle}-frontbench`] = party_element.querySelector(`.mps.frontbench`);
    party_elements[`${party.FullTitle}-backbench`] = party_element.querySelector(`.mps.backbench`);
  }
  
  for (const mp of mps) {
    party_elements[`${mp.Party}-${mp.FrontBench? 'frontbench' : 'backbench'}`].appendChild(MPElementFromMPObj(mp));
  }
  
  return container_el;
}
)})
    },
    {
      name: "partyElementFromPartyObj",
      inputs: ["html"],
      value: (function(html){return(
party => html`
    <div class="party" data-party="${party.FullTitle}" data-side-of-house="${party.SideOfHouse}" data-political-orientation="${party.Orientation}">
      <h5 class="party-name">${party.FullTitle}</h5>
      <div class="backbench mps"></div>
      <div class="frontbench mps"></div>
    </div>`
)})
    },
    {
      name: "voteResultElementFromVoteResultObj",
      inputs: ["html","emoji"],
      value: (function(html,emoji){return(
result => html`<p class="vote-result">
<span class="vote ayes"><span class="vote-type">Ayes</span><span class="vote-count">${result.Ayes} ${emoji('Thumbs Up')}</span></span>
<span class="vote noes"><span class="vote-type">Noes</span><span class="vote-count">${result.Noes} ${emoji('Thumbs Down')}</span></span>
<span class="vote did-not-vote">${Math.abs(result.Ayes - result.Noes)} vote margin & <strong>${result.DidNotVote} MPs</strong>, did not vote. ${emoji('Eyes')}</span>
</p>
<style>
.vote-result {
  max-width: 760px;
}

.vote-result * {
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
}

.vote {
  margin: 0 1rem 0 0;
  border-radius: 0.25rem;
  background-color: hsl(0, 0%, 96%);
}

.vote-type {
  width: auto;
  height: 3rem;
  font-family: var(--serif);
  font-style: italic;
  font-weight: bold;
  color: white;
  line-height: 3.5rem;
  text-align: right;
  white-space: nowrap;
  padding: 0 0.5rem 0 1rem;
  border-radius: 0.25rem 0 0 0.25rem;
}

.ayes .vote-type {
  background-color: var(--aye_clr);
}

.noes .vote-type {
  background-color: var(--no_clr);
}

.vote-count {
  width: auto;
  height: 3rem;
  font-size: 2rem;
  line-height: 3rem;
  text-align: left;
  white-space: nowrap;
  padding: 0 1rem 0 0.5rem;
  border-radius: 0 0.25rem 0.25rem 0;
}

.ayes .vote-count {
  color: hsl(108, 100%, 38%);
}

.noes .vote-count {
  color: hsl(0, 100%, 45%);
}

.did-not-vote {
  margin: 0;
  font-style: italic;
  line-height: 3.5rem;
  height: 3rem;
  background-color: transparent;
}
</style>`
)})
    },
    {
      name: "search",
      inputs: ["input"],
      value: (function(input){return(
({
    value,
    title,
    description,
    maxlength,
    minlength,
    pattern,
    placeholder,
    submit,
    size,
    list,
    listid = "list" + Date.now(),
    id = "input" + Date.now(),
    autocomplete = "on",
    type = "search"
  } = {}) => {
  const form = input({
    type,
    title,
    description,
    submit,
    attributes: {
      value,
      autocomplete,
      maxlength,
      minlength,
      pattern,
      placeholder,
      size
    }
  });
  form.setAttribute("id", id + "-form");
  form.setAttribute("style", "position: relative");
  form.input.setAttribute("id", id);
  if (list && list.length) {
    const datalist_el = document.createElement("datalist");
    datalist_el.setAttribute("id", listid);
    datalist_el.setAttribute("style", "text-transform: capitalize;");
    for (let opt of list) {
      let option_el = document.createElement("option");
      option_el.textContent = opt;
      datalist_el.appendChild(option_el);
    }
    form.input.setAttribute("list", listid);
    form.appendChild(datalist_el);
  }
  form.output.remove();
  form.onblur = e => console.log(e);
  return form;
}
)})
    },
    {
      name: "sources",
      value: (function()
{ 
  return `
 *Built on [Emojiocracy](https://beta.observablehq.com/@atomless/emojiocracy), with data from [wikipedia](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom), [data.parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7CIsEligible=true/) & [theipsa.org.uk](http://theipsa.org.uk)*

---`
}
)
    },
    {

    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
## 👁️ CSS Stylesheets
*For useage examples, see available visualisations listed above*

---`
)})
    },
    {
      name: "varsCSS",
      inputs: ["html"],
      value: (function(html){return(
() => html`<style>
:root {
  --emojiocracy_clr_1: hsl(288, 100%, 25%);
  --emojiocracy_clr_2: hsl(288, 60%, 23%);
  --emojiocracy_clr_3: hsl(288, 100%, 85%);
  --emojiocracy_clr_4: hsl(288, 100%, 95%);

  --party_clr_bg: hsl(0, 0%, 96%);
  --party_clr_conservative: hsl(196, 100%, 45%);
  --party_clr_labour: hsl(0, 100%, 45%);
  --party_clr_liberal_democrat: hsl(38, 96%, 54%);
  --party_clr_green_party: hsl(87, 64%, 44%);
  --party_clr_plaid_cymru: hsl(109, 51%, 35%);
  --party_clr_sinn_féin: hsl(280, 90%, 50%);
  --party_clr_scottish_national_party: hsl(54, 96%, 77%);
  --party_clr_democratic_unionist_party: hsl(236, 66%, 30%);
  --party_clr_independent: hsl(0, 0%, 85%);

  --aye_clr: hsl(108, 100%, 30%);
  --no_clr: hsl(0, 100%, 35%);
}
</style>`
)})
    },
    {
      name: "baseCSS",
      inputs: ["html"],
      value: (function(html){return(
() => html`<style>
h1 {
  color: var(--emojiocracy_clr_1);
  position: relative;
  font-family: Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -0.1rem;
  font-weight: 700;
  z-index: 20 !important;
}

h2, h3, h4, h5, h6, strong {
  color: var(--emojiocracy_clr_2);
}

.large-text {
  font-size: 1.35rem;
  line-height: 2rem;
  color: var(--emojiocracy_clr_1);
}

hr {
  height: 1px;
  margin: 0 0 1rem 0;
  padding: 0;
  border: none;
  background: none;
  border-bottom: 1px dashed hsl(0, 0%, 80%);
}

.loading-bar {
  overflow: hidden;
  white-space: nowrap;
  height: 3rem;
}

.loading-label {
  display:inline;
  line-height: 0.95rem;
}

.disabled {
  opacity: 0.5;
}

a:link,
a:visited,
a:focus,
a:hover,
a:active {
  color: hsl(288, 100%, 25%);
  outline: none !important;
}

h4 a:focus,
h4 a:hover {
  text-decoration: none !important;
}

button.vote {
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-block;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: 2rem;
  font-family: var(--serif);
  font-size: 1rem;
  font-style: italic;
  font-weight: bold;
  vertical-align: top;
  line-height: 2rem;
  text-align: center;
  white-space: nowrap;
  padding: 0 0.75rem 0;
  margin: 0 0.75rem 0 0;
  border-radius: 0.25rem;
  background-color: hsl(0, 0%, 92%);
  cursor: pointer;
  outline: none;
  border: 1px solid hsl(0, 0%, 86%);
  box-shadow: inset 0 0 0.5rem 0.1rem hsl(0, 0%, 100%);
}

button.vote:hover {
  text-decoration: none;
  background-color: hsl(0, 0%, 93%);
}

button.vote:active {
  background-color: hsl(0, 0%, 93%);
  border: 1px solid hsl(0, 0%, 76%);
  box-shadow: inset 0 0 0.25rem hsl(0, 0%, 84%);
}

button.aye {
  color: var(--aye_clr);
}

button.aye > span {
  font-size: 1.75rem;
  line-height: 2rem;
  vertical-align: sub;
}

button.no {
  color: var(--no_clr);
}

.thumb-vote {
  font-size: 2rem;
  line-height: 2rem;
  z-index: 1;
}

.loading-bar .thumb-vote {
  font-size: 0.75rem !important;
  line-height: 0.75rem !important;
  display: inline-block;
}

input[type="radio"],
label {
  cursor: pointer;
}

output {
  visibility: hidden;
  pointer-events: none;
}
</style>`
)})
    },
    {
      name: "MPChartCSS",
      inputs: ["html"],
      value: (function(html){return(
() => html`<style>

.party {
  position: relative;
  width: 100%;
  padding: 2rem 0.7rem 0.5rem 0.7rem;
  margin: 0 0 2px -0.85rem;
  border: 0 solid var(--party_clr_independent);
  border-left-width: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--party_clr_bg);
}

.party h5 {
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  font-weight: 200;
}

.party[data-side-of-house="Left"] {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}

.party[data-party="Speaker"] {
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 0.25rem);
  background: hsl(0, 0%, 100%);
  border-left-width: 0;
  border-right-width: 0.5rem;
}

.party[data-party="Speaker"] h5 {
  left: auto;
  right: 0.7rem;
  text-align: right;
}

.mps {
  box-sizing: border-box;
  margin: 0.15rem 0 0.15rem 0;
  max-width: 100%;
}

.party[data-side-of-house="Right"] .backbench:not(:empty) + .frontbench {
  border-top: 2px solid white;
  width: 100%;
}

.party[data-side-of-house="Left"] .backbench:not(:empty) + .frontbench {
  border-bottom: 2px solid white;
  width: 100%;
}

.frontbench:empty {
  display: none;
}

.mp {
  box-sizing: border-box;
  display: inline-flex;    
  position: relative;
  font-size: 1.25rem;
  line-height: 1.25rem;
  height: 1.3rem;
  text-align: center;
  user-select: none;
  border: 0 solid transparent;
  border-bottom-width: 3px;
  background-color: transparent;
  cursor: pointer;
}

.mp[data-matching-constituency="true"],
.mp[data-matching-name="true"] {
  font-size: 3rem;
}

.mp:focus {
  outline: none;
  border-color: lightgrey;
}

.parliament[data-with-votes="true"] .mp[data-vote="DidNotVote"]:not(:hover) {
  opacity: 0.4;
}

.mp[data-vote="Aye"]::after {
  content: "✓";
  font-weight: 600;
  color: hsl(108, 100%, 40%);
  position: absolute;
  top: -0.65rem;
  left: 0;
}

.mp[data-vote="Noe"]::after {
  content: "❌";
  font-size: 0.65rem;
  position: absolute;
  top: -0.65rem;
  right: 0;
}

.mp[data-party*="Labour"]:focus,
.party[data-party*="Labour"] {
  border-color: var(--party_clr_labour);
}

.mp[data-party="Conservative"]:focus,
.party[data-party="Conservative"] {
  border-color: var(--party_clr_conservative);
}

.mp[data-party="Liberal Democrat"]:focus,
.party[data-party="Liberal Democrat"] {
  border-color: var(--party_clr_liberal_democrat);
}

.mp[data-party="Green Party"]:focus,
.party[data-party="Green Party"] {
  border-color: var(--party_clr_green_party);
}

.mp[data-party="Plaid Cymru"]:focus,
.party[data-party="Plaid Cymru"] {
  border-color: var(--party_clr_plaid_cymru);
}

.mp[data-party*="Sinn"]:focus,
.party[data-party="Sinn Féin"] {
  border-color: var(--party_clr_sinn_féin);
}

.mp[data-party="Scottish National Party"]:focus,
.party[data-party="Scottish National Party"] {
  border-color: var(--party_clr_scottish_national_party);
}

.mp[data-party="Democratic Unionist Party"]:focus,
.party[data-party="Democratic Unionist Party"] {
  border-color: var(--party_clr_democratic_unionist_party);
}

.mp[data-lgbt="true"]::before {
  content: "🏳‍🌈";
  display: block;
  position: absolute;
  top: 0.7rem;
  left: 0;
  width: 0.4rem;
  height: 0.4rem;
  font-size: 0.5rem;
  line-height: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;
}

.mp-tooltip .missing-data {
  display: none !important;
}

.mp-tooltip h4, .mp-tooltip small, .mp-tooltip ul, .mp-tooltip a {
  color: white;
}

.mp-tooltip h4 {
  line-height: 1.25rem;
}

.mp-tooltip h4 span {
  color: lightgrey;
}

.mp-twitter,
.mp-website,
.mp-tooltip small {
 font-size: 1rem !important;
 font-style: italic;
}

.mp-contact-details {
  list-style: none !important;
  list-style-type: none !important;
  padding: 0.25rem 0 0 0;
  margin: 0.25rem 0 0.5rem;
}

.mp-contact-details li {
  padding: 0 0.25rem;
  display: inline;
}

.mp-contact-details li::before {
  content: "";
  display: none;
}

.mp-website {
  list-style: none !important;
  position: relative;
  display: block !important;
  width: 100%;
  overflow: hidden;
}

.mp-website a {
  display: block;
  max-width: 13rem;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  height: 1.5rem;
  white-space: nowrap;
}

.mp-tel a {
  font-size: 0.8rem;
}

.mp-contact-details a {
  text-transform: lowercase;
  text-decoration: none !important;
  vertical-align: middle;
  color: var(--emojiocracy_clr_3);
  pointer-events: all;
}

.mp-contact-details a:focus,
.mp-contact-details a:hover,
.mp-contact-details a:active {
  color: var(--emojiocracy_clr_4);
}
</style>`
)})
    },
    {
      inputs: ["html","varsCSS","baseCSS"],
      value: (function(html,varsCSS,baseCSS){return(
html`${varsCSS()}${baseCSS()}<style> h1 { display: none; }</style>`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
## 💬 Tooltips`
)})
    },
    {
      inputs: ["html"],
      value: (function(html){return(
html`<link href="https://unpkg.com/tippy.js@3.3.0/dist/themes/google.css" rel="stylesheet" />`
)})
    },
    {
      name: "tooltips",
      inputs: ["tippyTooltipDefaults","tippy"],
      value: (function(tippyTooltipDefaults,tippy){return(
{
  addToSelector: (selector, settings = tippyTooltipDefaults) => new Promise(resolve => window.setTimeout(e => {
    if (window[`${selector}-tooltips`] && window[`${selector}-tooltips`].destroyAll) {
      window[`${selector}-tooltips`].destroyAll();
    }
    window[`${selector}-tooltips`] = tippy(selector, settings);
    resolve();
  }, 17))
}
)})
    },
    {
      name: "tippyTooltipDefaults",
      inputs: ["MPTooltipContent"],
      value: (function(MPTooltipContent){return(
{
  onShow: tt => {
    [...document.querySelectorAll('.tippy-popper')].forEach(tt => tt._tippy.hide(0));
    tt.setContent(MPTooltipContent(tt.reference)); 
  },
  hideOnClick: true,
  performance: true,
  multiple: false,
  target: ".mp",
  animation: "shift-toward",
  inertia: true,
  interactive: true,
  interactiveBorder: 15,
  hideOnClick: false,
  arrow: true,
  arrowType: "round",
  duration: 500,
  size: "large",
  theme: "google"
}
)})
    },
    {
      name: "dependencies",
      inputs: ["md"],
      value: (function(md){return(
md`---
## 🔧 Dependencies`
)})
    },
    {
      from: "@alecglassford/so-fetch",
      name: "soFetch",
      remote: "soFetch"
    },
    {
      from: "@jashkenas/inputs",
      name: "input",
      remote: "input"
    },
    {
      from: "@jashkenas/inputs",
      name: "text",
      remote: "text"
    },
    {
      from: "@jashkenas/inputs",
      name: "radio",
      remote: "radio"
    },
    {
      from: "@jashkenas/inputs",
      name: "date",
      remote: "date"
    },
    {
      from: "@jashkenas/inputs",
      name: "select",
      remote: "select"
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: (function(require){return(
require("d3-format")
)})
    },
    {
      name: "tippy",
      inputs: ["require"],
      value: (function(require){return(
require('https://unpkg.com/tippy.js@3/dist/tippy.all.min.js')
)})
    },
    {
      name: "fastXmlParser",
      inputs: ["require"],
      value: (function(require){return(
require("https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/3.10.0/parser.min.js")
)})
    },
    {
      name: "fuzzySet",
      inputs: ["require"],
      value: (function(require){return(
require('fuzzyset.js/lib/fuzzyset.js').catch(() => window.FuzzySet)
)})
    },
    {
      name: "_",
      inputs: ["require"],
      value: (function(require){return(
require('lodash')
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    }
  ]
};

const m1 = {
  id: "@alecglassford/so-fetch",
  variables: [
    {
      name: "soFetch",
      value: (function(){return(
function soFetch(url) {
  return fetch(`https://sofetch.glitch.me/${encodeURI(url)}`);
}
)})
    }
  ]
};

const m2 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "input",
      inputs: ["html","d3format"],
      value: (function(html,d3format){return(
function input(config) {
  let {
    form,
    type = "text",
    attributes = {},
    action,
    getValue,
    title,
    description,
    format,
    display,
    submit,
    options
  } = config;
  if (!form)
    form = html`<form>
  <input name=input type=${type} />
  </form>`;
  const input = form.input;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) input.setAttribute(key, val);
  });
  if (submit)
    form.append(
      html`<input name=submit type=submit style="margin: 0 0.75em" value="${
        typeof submit == "string" ? submit : "Submit"
      }" />`
    );
  form.append(
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`
  );
  if (title)
    form.prepend(
      html`<div style="font: 700 0.9rem sans-serif;">${title}</div>`
    );
  if (description)
    form.append(
      html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`
    );
  if (format) format = d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit
      ? "onsubmit"
      : type == "button"
        ? "onclick"
        : type == "checkbox" || type == "radio"
          ? "onchange"
          : "oninput";
    form[verb] = e => {
      e && e.preventDefault();
      const value = getValue ? getValue(input) : input.value;
      if (form.output)
        form.output.value = display
          ? display(value)
          : format
            ? format(value)
            : value;
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      input.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  return form;
}
)})
    },
    {
      name: "text",
      inputs: ["input"],
      value: (function(input){return(
function text(config = {}) {
  const {
    value,
    title,
    description,
    autocomplete = "off",
    maxlength,
    minlength,
    pattern,
    placeholder,
    size,
    submit
  } = config;
  if (typeof config == "string") value = config;
  const form = input({
    type: "text",
    title,
    description,
    submit,
    attributes: {
      value,
      autocomplete,
      maxlength,
      minlength,
      pattern,
      placeholder,
      size
    }
  });
  form.output.remove();
  form.input.style.fontSize = "1em";
  return form;
}
)})
    },
    {
      name: "radio",
      inputs: ["input","html"],
      value: (function(input,html){return(
function radio(config = {}) {
  let { value: formValue, title, description, submit, options } = config;
  if (Array.isArray(config)) options = config;
  options = options.map(
    o => (typeof o === "string" ? { value: o, label: o } : o)
  );
  const form = input({
    type: "radio",
    title,
    description,
    submit,
    getValue: input => {
      const checked = Array.prototype.find.call(input, radio => radio.checked);
      return checked ? checked.value : undefined;
    },
    form: html`
      <form>
        ${options.map(({ value, label }) => {
          const input = html`<input type=radio name=input ${
            value === formValue ? "checked" : ""
          } style="vertical-align: baseline;" />`;
          input.setAttribute("value", value);
          const tag = html`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${input}
           ${label}
          </label>`;
          return tag;
        })}
      </form>
    `
  });
  form.output.remove();
  return form;
}
)})
    },
    {
      name: "date",
      inputs: ["input"],
      value: (function(input){return(
function date(config = {}) {
  let {min, max, value, title, description, display} = config;
  if (typeof config == "string") value = config;
  return input({
    type: "date", title, description, display,
    attributes: {min, max, value}
  });
}
)})
    },
    {
      name: "select",
      inputs: ["input","html"],
      value: (function(input,html){return(
function select(config = {}) {
  let {
    value: formValue,
    title,
    description,
    submit,
    multiple,
    size,
    options
  } = config;
  if (Array.isArray(config)) options = config;
  options = options.map(
    o => (typeof o === "object" ? o : { value: o, label: o })
  );
  const form = input({
    type: "select",
    title,
    description,
    submit,
    getValue: input => {
      const selected = Array.prototype.filter
        .call(input.options, i => i.selected)
        .map(i => i.value);
      return multiple ? selected : selected[0];
    },
    form: html`
      <form>
        <select name="input" ${
          multiple ? `multiple size="${size || options.length}"` : ""
        }>
          ${options.map(({ value, label }) => Object.assign(html`<option>`, {
              value,
              selected: Array.isArray(formValue)
                ? formValue.includes(value)
                : formValue === value,
              textContent: label
            }))}
        </select>
      </form>
    `
  });
  form.output.remove();
  return form;
}
)})
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: (function(require){return(
require("d3-format")
)})
    }
  ]
};

const notebook = {
  id: "c7b1a3f70bc116b2@2634",
  modules: [m0,m1,m2]
};

export default notebook;