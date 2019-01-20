// URL: https://beta.observablehq.com/@atomless/emojiocracy
// Title: Emojiocracy
// Author: James Tindall (@atomless)
// Version: 4081
// Runtime version: 1

const m0 = {
  id: "c7b1a3f70bc116b2@4081",
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
md`*Opensource data & visualisations, in defence of democracy, towards a post post-truth politics.*`
)})
    },
    {
      name: "viewof vote",
      inputs: ["html"],
      value: (function(html)
{
  const form = html`<form><h3 style="display:inline-block; line-height: 2.25rem;">👍Vote!</h3>&nbsp;<button class="aye vote" name="aye">Aye<span>✓</span></button><button class="no vote" name="no">No ❌</button></form>`;
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
#### [📖Read](#read), [📊Use](#use), [🔎Help](#help), [👷🏽‍♀Build](#build), 💬[Share](#share) <span>&nbsp;</span>|<span>&nbsp;</span> 📚[Contents](#table_of_contents)`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
---
*Emojiocracy is a collective effort to gather data towards greater public scrutiny of how our democracy (dys)functions. - tl;dr* ⬇️ *skip to [visualisations](#table_of_contents)*`
)})
    },
    {
      name: "read",
      inputs: ["md"],
      value: (function(md){return(
md`
---
<br>
### <span style="font-size:4rem">📖</span> Read
---
It would be remiss not to start by bringing your attention, dear reader, to the hugely important work being done by many in service and defence of our democracy. From those working to deliver open governmental data. Data that provides greater parliamentary transparency 🔎 and brings public scrutiny 👀 of our democracy into the digital realm. To those building equally important services that connect us, over the network, to our parliamentary representatives, that we might call upon them to represent our wishes or tackle issues in our constituencies. And lastly, but certainly not leastly, those brave journalists working tirelessly to shine the light of public scrutiny into the corridors of power, to uncover crimes and corruption in the hope that those responsible will be held to account.

Please show your appreciation to those who helped to build [data.parliament.uk](http://www.data.parliament.uk/) and the [newer parliamentary data platform](https://api.parliament.uk/search/) and go follow them on twitter at [@UKParliData](https://twitter.com/UKParliData), [@ParliDigital](https://twitter.com/ParliDigital), [@digiminster](https://twitter.com/digiminster), [@MattStutely](https://twitter.com/MattStutely), [@dasbarrett](https://twitter.com/dasbarrett), [@fantasticlife](https://twitter.com/fantasticlife), [@langsamu](https://twitter.com/langsamu), [@chrisalcockdev](https://twitter.com/chrisalcockdev), [@cognithive](https://twitter.com/cognithive), [@bitten_](https://twitter.com/bitten_)... 👏🙏

Also, the towering work of [@mySociety](https://twitter.com/mysociety), especially the essential [#writetothem](https://twitter.com/hashtag/writetothem?src=hash), [@WhatDoTheyKnow](https://twitter.com/WhatDoTheyKnow) and [@TheyWorkForYou](https://twitter.com/theyworkforyou). 👏🙇

Finally, please show your support to the journalists and researchers without whom we'd be in an even darker place than we currently are. In particular, [@CaroleCadwalladr](https://twitter.com/carolecadwalla) and [@JamesPatrick](https://twitter.com/J_amesp). As well as many, many others, too numerous to mention here, but a selection of whom are collected together in [this twitter list](https://twitter.com/atomless/lists/defenders-of-democracy).👏🙇

<p class="large-text">Despite all of this good work, when our politics is all too accurately symbolised by this 🤡, this 🦄, this 😱, or this 💩, clearly *something* has gone awry.</p>

There are forces distorting and disfiguring our democracy. Forces that twist our politics away from the interests of the poor, the vulnerable, the nurses, the teachers, the workers, away from what is best for all of us.

At this point, what can we actually do in order to regain a politics that even remotely resembles a **kind**, **fair**, **rational** and **honest** democracy (for which I really can't find a good emoji)?

Well, obviously a change of personel wouldn't hurt, but how about ensuring far greater public scrutiny of our dysfunctional system of representative democratic rule? Our MPs don't cast their votes in a vacuum. On all parliamentary divisions, there are of course huge pressures and interests at play. Most of which, at present, remain largely inscrutable.

How can we uncover these hidden pressures? From the under representation of minorities to the over representation of wealthy Oxbridge elites. From the tentacular reach of global financialism, corporate money, lobbies and thinktanks, to the rising influence of malignant foreign powers. New tools and new measures are required to enable us to discern and deflect these forces.

<p class="large-text">We need to be able to collectively verify what's going on, before we have any hope of changing it.</p>

Some of the data we need is already out there and easily accessible. However, with the currently available records detailing how our MPs vote on issues or even how they have historically voted on those same issues, we still lack information crucial to the level of public scrutiny required if we are to salvage our democracy.

<p class="large-text">We need to gain an understanding of the influencing factors, like our MP's net worth, their annual income, their social background and their corporate connections; important factors that form the essential context from which each MP casts their votes and devises policies.</p>

What's more, we need to find ways to concisely and effectively visualise and communicate this additional contextual information, ways that fit into the fleeting attention spans of today's news reporting.

Emojiocracy is just a small fraction, of a tiny step <small>👟</small>, in a collective effort to scale a huge mountain <span style="font-size:4rem; line-height: 0rem; z-index: -100;vertical-align:middle">🏔️</span>. 

Publishing this work on the wonderful [Observable](https://beta.observablehq.com) platform, will hopefully promote, the sharing, tinkering, and collaboration, essential if we hope to succeed in gathering the data and building the necessary tools and visualisations.`
)})
    },
    {
      name: "use",
      inputs: ["md"],
      value: (function(md){return(
md`---
<br>
### <span style="font-size:4rem">📊</span> Use
---
Emojiocracy [aspires](https://beta.observablehq.com/@atomless/the-house-of-commons) 🌱 to contribute to the work of reducing friction, in access to and understanding 🤓 of, public domain political data. Also, to provide a repository and tools for collaborative collation of political data. Data that provides a deeper public scrutiny of our democratic process. The aim 🎯 is to empower 💪 people to make effective use of their ownership of this public record and public interest data, by providing reusable, easily composable 🍰, [opensource visualisations](#table_of_contents) and [UI components](#tools_and_components), along with simple access to [datasets](#datasets_cached_and_combined) that inform us about the workings and the very foundations of our democracy.

To that end, data for the [Members of the UK Parliament](#mps_data_cached), [their parties](#political_parties_data_cached) and [how they voted](#votes_data) in each parliamentary vote (available via government APIs) has been [combined here](#datasets_cached_and_combined) with data from other machine-readable sources as well as data contributed manually from verified but non-machine-readable sources. For example, [ethnicity](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom) and [LGBT](https://en.wikipedia.org/wiki/List_of_LGBT_politicians_in_the_United_Kingdom) data from [wikipedia](http://wikipedia.org), and financial data from the [IPSA](http://www.theipsa.org.uk). This data is used in the existing [Emojiocracy charts](https://beta.observablehq.com/collection/@atomless/emojiocracy-visualisations) and is made available in an accessible, normalised format below, ready for you to [use in remixes of emojiocracy charts or entirely new visualisations of your own](#build).

`
)})
    },
    {
      name: "help",
      inputs: ["md"],
      value: (function(md){return(
md`---
<br>
### <span style="font-size:4rem">🙌</span> Help
---
**Essential data is missing**! Data that is dearly needed, in order to provide true public oversight and understanding of how our democracy functions. Data like our politicians' net worth, their education, public or private school they attended, corporate connections; each crucial in understanding the background and context from which an MP's voting and policy decisions are made. This data exists somewhere, as a matter of public record, but as yet is not collated or readily available from a single source. 

Please help, either by locating machine readable sources of any of this data, or simply by helping to collate it, from whatever disparate manually readable sources it can be found. All contributions (including corrections!), however small, gratefully received! Spread the word by embedding the [available visualisations](#available_visualisations) on your website, improve and remix them, create new visualisations of your own using [Emojiocracy datasets](#datasets_cached_and_combined), help out in the collective effort to gather and collate the data we need. Get involved in any way you can!

*See the [manually collated data sections](#datasets_manually_collated) and follow the [instructions detailing how to use the templates](#how_to_manually_collate_mps_data) provided : [manullay collated MPs data](#mps_data_manually_collated), [manually collated Lords data](#lords_data_manually_collated) & [manually collated political parties data](#political_parties_data_manually_collated).*

##### 🆘 Missing Data

- *MPs*
  - 💰 *Net worth*
  - 👩‍🎓 *Education level*
  - 👩‍🎓 *Privately educated*
  - 👩‍🎓 *Oxbridge graduate*
  - 🏰 *Social background*
  - 💲 *Corporate connections*
  - 🗞️ *Media outlet connections*
  - ⛔ *Memberships of political private clubs*
  - 👁️‍🗨️ *Policy lobbies & think tank connections*

- *Political Parties*
  - 💎 *Major donors*
  - 💰 *Amount & date of major donations*
  - 💲 *Business interests of each major donor*
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

*As mentioned above, contributions of charts, code or data, along with improvements and fixes, all **very** gratefully received. Tweet me on twitter ([@atomless](https://twitter.com/atomless)) if you want to get involved in any way at all. Or see the fork and merge process outlined here: 
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
### <span style="font-size:4rem">👷🏽‍♀</span> Build
---
The revolutionary [Observable](https://beta.observablehq.com) platform enables all those using these visualisations to easily inspect the underlying code and data and equally importantly to also, edit them and make them their own. So please, as well as [helping to gather data](#help), also [fork](https://beta.observablehq.com/@observablehq/fork-share-merge) the [visualisations](#visualisations), change them, improve them! Build entirely new visualisations using the [datasets](#datasets_cached_and_combined). Either way, you can then [submit a merge request](https://beta.observablehq.com/@observablehq/fork-share-merge). Or, of course, if you'd rather maintain your own visualisations under your own Observable projects, while populating them by requiring Emojiocracy datasets and components, please let us know so that we can link to them in the [available visualisations list](#available_visualisations).

`
)})
    },
    {
      inputs: ["Promises","md"],
      value: (function*(Promises,md)
{
  const flags = ["🇺🇸","🇷🇺","🇵🇱","🇹🇷","🇭🇺","🇧🇷","🇵🇰","🇲🇾","🇸🇦","🇻🇪"];
  let i = 0;
  
  while (true) {
    i = (i + 1) % flags.length;
    yield Promises.tick(700, md`*Don't live in the UK? Why not [fork](https://beta.observablehq.com/@observablehq/fork-share-merge) the entire Emojiocracy project and change it to pull in datasets for your ${flags[i]} country's politicians?*`);
  }
}
)
    },
    {

    },
    {
      name: "share",
      inputs: ["md"],
      value: (function(md){return(
md`---
<br>
### <span style="font-size:4rem">💬</span> Share
---
*To share your work or spread the word, please use the hash tag [#Emojiocracy](https://twitter.com/hashtag/emojiocracy) and/or tweet me a link at [@atomless](http://twitter.com/@atomless). You can also follow [@emojiocracy](https://twitter.com/emojiocracy) on twitter for news & updates.*`
)})
    },
    {
      name: "table_of_contents",
      inputs: ["md"],
      value: (function(md){return(
md`

---
<br>
## <span style="font-size:4rem">📚</span> Contents
<hr>`
)})
    },
    {
      name: "available_visualisations",
      inputs: ["md"],
      value: (function(md){return(
md`#### Visualisations
  - 🏛️ *[The House of Commons](https://beta.observablehq.com/@atomless/the-house-of-commons)<br>Group & order MPs by various criteria then choose a division to see how they voted.*
  - 👩‍💼 *[Members of Parliament](https://beta.observablehq.com/@atomless/members-of-parliament)<br>Group & order MPs by various criteria, search for your MP by name or constituency (mispellings are fine!) & assess the representative quality of our democracy (includes links for each MP's twitter, email, telephone and website).*
`
)})
    },
    {
      name: "datasets_cached_and_combined",
      inputs: ["md"],
      value: (function(md){return(
md`#### Datasets (combined & cached, machine readable & manually collated sources)
  - 👩‍💼 *[MPs](#mps_data_cached_and_combined)*
  - 🏛️ *[Political Parties](#political_parties_data_cached_and_combined)*
`
)})
    },
    {
      name: "datasets_uncached",
      inputs: ["md"],
      value: (function(md){return(
md`#### Datasets (uncached, machine readable sources)
  - 👍 *[Votes](#votes_data_uncached)*
  - 👩‍💼 *[MPs](#mps_data_uncached)*
  - 🏰 *[Lords](#lords_data_uncached)*
  - 🏛️ *[Political Parties](#political_parties_data_uncached)*
`
)})
    },
    {
      name: "datasets_manually_collated",
      inputs: ["md"],
      value: (function(md){return(
md`#### Datasets (manually collated sources)
  - 👩‍💼 *[MPs](#mps_data_manually_collated)*
  - 🏰 *[Lords](#lords_data_manually_collated)*
  - 🏛️ *[Political Parties](#political_parties_data_manually_collated)*
`
)})
    },
    {
      name: "contribution_guides_and_templates",
      inputs: ["md"],
      value: (function(md){return(
md`#### Contribution Guides and Templates
  - 👩‍💼 *[How To Contribute Manually Collated MPs Data](#how_to_manually_collate_mps_data)*
  - 🏰 *[How To Contribute Manually Collated Lords Data](#how_to_manually_collate_lords_data)*
  - 🏛️ *[How To Contribute Manually Collated Political Parties Data](#how_to_manually_collate_political_parties_data)*
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
  - *[@digiminster](https://twitter.com/digiminster) & [api.parliament.uk/search](https://api.parliament.uk/search/)*
  - *[@UKParliData](https://twitter.com/@UKParliData) & [data.parliament.uk](https://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons|IsEligible=true/GovernmentPosts|OppositionPosts|Addresses/)*
  - *[@mySociety](https://twitter.com/mysociety) & [mysociety.org](https://www.mysociety.org/)*
  - *[#writetothem](https://twitter.com/hashtag/writetothem?src=hash) & [writetothem.com](https://www.writetothem.com)*
  - *[@WhatDoTheyKnow](https://twitter.com/WhatDoTheyKnow) & [whatdotheyknow.com](https://www.whatdotheyknow.com/)*
  - *[@TheyWorkForYou](https://twitter.com/theyworkforyou) & [theyworkforyou.com](https://www.theyworkforyou.com/)*
  - *[@PublicWhip](https://twitter.com/PublicWhip) & [publicwhip.org.uk](https://www.publicwhip.org.uk)*
  - *[@LittleSis](https://twitter.com/twittlesis) & [littlesis.org](https://littlesis.org)*
  - *[@ipsaUK](https://twitter.com/ipsaUK) & [theipsa.org.uk](http://www.theipsa.org.uk)*`
)})
    },
    {
      name: "other_opensource_parliamentary_tools_and_libraries",
      inputs: ["md"],
      value: (function(md){return(
md`#### Other Opensource Tools & Libraries
  - *[@MySociety](https://twitter.com/MySociety)'s [Many Projects](https://github.com/mysociety)*
  - *[@olihawkins](https://twitter.com/olihawkins)'s [R package for parliamentary data](https://github.com/olihawkins/pdpr)*
  - *[@olihawkins](https://twitter.com/olihawkins)'s [Python package for parliamentary data](https://github.com/olihawkins/pdpy)*
<br><br>`
)})
    },
    {
      name: "votes_data",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">👍</span> Votes <small>(from machine readable sources)</small>
*From verified and authoratative sources : [parliament.uk](http://lda.data.parliament.uk/commonsdivisions.json?_view=Commons+Divisions&_pageSize=10&_page=0)*`
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

    },
    {

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
      inputs: ["required","letTheLightIn","d3"],
      value: (function(required,letTheLightIn,d3){return(
async (vote = required("vote", "Object", "requestCommonsVoteResultFromHansard")) => {

  const vote_type_enums = {"No": -1, "Abstention": 0, "Aye": 1};
  const vote_html = await (await letTheLightIn(vote.URL)).text();

  let doc, ayes, noes, title, votes;
  
  if (vote_html) {
    doc = (new window.DOMParser()).parseFromString(vote_html, "text/html")
    title = doc.querySelector(".division-header").textContent;
  }
    
  let csv_url = `https://hansard.parliament.uk/division/${vote.ID}/downloadcsv?isEvel=False`;
  let csv_result = await (await letTheLightIn(csv_url)).text();

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
      inputs: ["MPs_combined_cached"],
      value: (function(MPs_combined_cached){return(
async (vote) => {

  const vote_type_enums = {"NoVote": -1, "Abstains": 0, "AyeVote": 1};
  const result_json = await (await fetch(`http://lda.data.parliament.uk/commonsdivisions/id/${vote.ID}.json?&_properties=title,description`)).json();

  let result = {};
  
  if (result_json && result_json.result) {

    result = {
      Title: result_json.result.primaryTopic.title,
      Description: result_json.result.primaryTopic.description || "",
      Ayes: parseInt(result_json.result.primaryTopic.AyesCount[0]._value || 0),
      Noes: parseInt(result_json.result.primaryTopic.Noesvotecount[0]._value || 0),
      DidNotVote: MPs_combined_cached.length - (parseInt(result_json.result.primaryTopic.AbstainCount[0]._value || 0) + parseInt(result_json.result.primaryTopic.Noesvotecount[0]._value || 0) + parseInt(result_json.result.primaryTopic.AyesCount[0]._value || 0)),
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
      inputs: ["required","MPs_combined_cached"],
      value: (function(required,MPs_combined_cached){return(
async (vote = required()) => {
  
  const vote_type_enums = {"NoVote": -1, "Abstains": 0, "AyeVote": 1};
  const result_json = await (await fetch(`https://commonsvotes-services.digiminster.com/data/division/${vote.ID}.json`)).json();

  let result = { ID: vote.ID, Title: `Vote: ${vote.ID}, Not Found`, Date: "" };

  if (result_json && result_json.Title) {
    let votes = [
      ...result_json.Ayes.map(v => Object.assign({}, v, { Type: 1})), 
      ...result_json.Noes.map(v => Object.assign({}, v, { Type: -1}))
    ];
    result = {
      ID: vote.ID,
      Title: result_json.Title,
      Description: result_json.FriendlyDescription || "",
      Ayes: result_json.AyeCount || 0,
      Noes: result_json.NoCount || 0,
      DidNotVote: MPs_combined_cached.length - (parseInt(result_json.AyeCount || 0) + parseInt(result_json.NoCount || 0)),
      Date: result_json.Date,
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
      inputs: ["letTheLightIn"],
      value: (function(letTheLightIn){return(
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
    vote_node_list = (new window.DOMParser()).parseFromString(await (await letTheLightIn(url)).text(), "text/html").querySelectorAll(".results-list .result-outer > a");
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
      value: (function(){return(
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
    result_json = await (await fetch(`http://lda.data.parliament.uk/commonsdivisions.json?max-date=${end_date_iso}&min-date=${start_date_iso}&_view=Commons+Divisions&_pageSize=${limit}${/*&_page=0*/''}${/*&_sort=${sort}*/''}&_properties=title,description`)).json();
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
      value: (function(){return(
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
    result_json = await (await fetch(`https://commonsvotes-services.digiminster.com/data/divisions.json/search?startDate=${start_date_iso}&endDate=${end_date_iso}&take=${limit}`)).json();
  } catch(e) { console.warn(e) }
debugger;
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
      name: "mps_data_cached_and_combined",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">👩‍💼</span> MPs <small>(cached & combined)</small>
*From verified and authoratative sources, including : [parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7CIsEligible=true/) & [en.wikipedia.org](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom). See below for full list of sources.*

*Use this data in preference to the uncached MPs data (it will be much faster!).<br>MP data will not change very often and when it does, the cached versions will quickly be updated.*

---`
)})
    },
    {
      name: "MPs_combined_cached_data_version",
      value: (function(){return(
"1.0.3"
)})
    },
    {
      name: "MPs_cached",
      inputs: ["MPsCachedAndCombinedDataStore"],
      value: (async function(MPsCachedAndCombinedDataStore)
{

  let mps_data = MPsCachedAndCombinedDataStore.getItem("MPs_cached");

  if (!mps_data) {
    try {
      mps_data = await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/MPs.json?cachekiller=1")).json();
    } catch (e) {
      mps_data = "";
      console.warn("MPs_cached", e);
    }
    MPsCachedAndCombinedDataStore.setItem("MPs_cached", mps_data);
  }
  return mps_data;
}
)
    },
    {
      name: "MPs_constituencies_hex_cached",
      inputs: ["MPsCachedAndCombinedDataStore"],
      value: (async function(MPsCachedAndCombinedDataStore)
{

  let mps_data = MPsCachedAndCombinedDataStore.getItem("MPs_constituencies_hex_cached");

  if (!mps_data) {
    try {
      mps_data = await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/MPs_constituencies_hex.json?cachekiller=2")).json();
    } catch (e) {
      mps_data = "";
      console.warn("MPs_constituencies_hex", e);
    }
    MPsCachedAndCombinedDataStore.setItem("MPs_constituencies_hex_cached", mps_data);
  }
  return mps_data;
}
)
    },
    {
      name: "MPs_combined_cached",
      inputs: ["MPsCachedAndCombinedDataStore","yearsSinceDateString"],
      value: (async function(MPsCachedAndCombinedDataStore,yearsSinceDateString)
{

  let mps_data = MPsCachedAndCombinedDataStore.getItem("MPs_combined_cached");

  if (!mps_data) {
    try {
      mps_data = await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/MPs_combined.json?cachekiller=1")).json();
    } catch (e) {
      mps_data = "";
      console.warn("MPs_combined_cached", e);
    }
    MPsCachedAndCombinedDataStore.setItem("MPs_combined_cached", mps_data);
  }
  return mps_data.map(mp => 
    Object.assign(mp, {
      Age: yearsSinceDateString(typeof mp.DateOfBirth === "string"
        ? mp.DateOfBirth 
        : `${(new Date).getFullYear()}-${(new Date).getMonth()}-${(new Date).getDate()}T00:00:00`
      )
    })
  );;
}
)
    },
    {
      name: "MPs_with_voting",
      inputs: ["MPsCachedAndCombinedDataStore","applyVoteResultToMPs","MPs_combined_cached","selected_vote_result_from_data_api"],
      value: (function(MPsCachedAndCombinedDataStore,applyVoteResultToMPs,MPs_combined_cached,selected_vote_result_from_data_api)
{

  let mps_data = MPsCachedAndCombinedDataStore.getItem("MPs_with_voting");

  if (!mps_data) {
    try {
      mps_data = applyVoteResultToMPs({ 
        mps: JSON.parse(JSON.stringify(MPs_combined_cached)), 
        vote_result: selected_vote_result_from_data_api
      });
    } catch (e) {
      mps_data = "";
      console.warn("MPs_with_voting", e);
    }
    MPsCachedAndCombinedDataStore.setItem("MPs_with_voting", mps_data);
  }
  return mps_data;            
}
)
    },
    {
      name: "MPs_expenses_cached",
      inputs: ["MPsCachedAndCombinedDataStore","MPs_combined_cached_data_version"],
      value: (async function(MPsCachedAndCombinedDataStore,MPs_combined_cached_data_version)
{
  
  let mps_data = MPsCachedAndCombinedDataStore.getItem("MPs_expenses_cached");

  if (!mps_data) {
    try {
      mps_data = await (await fetch(`https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/MPs_expense_claims_2017_2018-sourced_from_IPSA.json?g=19&v=${MPs_combined_cached_data_version}`)).json();
    } catch (e) {
      mps_data = "";
      console.warn("MPs_expenses_cached", e);
    }
    MPsCachedAndCombinedDataStore.setItem("MPs_expenses_cached", mps_data);
  }
  return mps_data;            
}
)
    },
    {
      name: "MPs_expenses_index",
      value: (function(){return(
[50000, 100000, 150000, 200000, 250000, 300000]
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
      inputs: ["MPsCachedAndCombinedDataStore"],
      value: (async function(MPsCachedAndCombinedDataStore)
{
  let mps_data = MPsCachedAndCombinedDataStore.getItem("cabinet_MPs_cached");

  if (!mps_data) {
    try {
      mps_data = await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/cabinet_MPs.json")).json();
    } catch (e) {
      mps_data = "";
      console.warn("cabinet_MPs_cached", e);
    }
    MPsCachedAndCombinedDataStore.setItem("cabinet_MPs_cached", mps_data);
  }
  return mps_data;
}
)
    },
    {
      name: "shadow_cabinet_MPs_cached",
      inputs: ["MPsCachedAndCombinedDataStore"],
      value: (async function(MPsCachedAndCombinedDataStore)
{
  let mps_data = MPsCachedAndCombinedDataStore.getItem("shadow_cabinet_MPs_cached");

  if (!mps_data) {
    try {
      mps_data = await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/shadow_cabinet_MPs.json")).json();
    } catch (e) {
      mps_data = "";
      console.warn("shadow_cabinet_MPs_cached", e);
    }
    MPsCachedAndCombinedDataStore.setItem("shadow_cabinet_MPs_cached", mps_data);
  }
  return mps_data;
}
)
    },
    {
      name: "LGBT_MPs_cached",
      inputs: ["MPsCachedAndCombinedDataStore"],
      value: (async function(MPsCachedAndCombinedDataStore)
{
  let mps_data = MPsCachedAndCombinedDataStore.getItem("LGBT_MPs_cached");
  if (!mps_data) {
    try {
      mps_data = await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/LGBT_MPs.json")).json();
    } catch (e) {
      mps_data = "";
      console.warn("LGBT_MPs_cached", e);
    }
    MPsCachedAndCombinedDataStore.setItem("LGBT_MPs_cached", mps_data);
  }
  return mps_data;
}
)
    },
    {
      name: "ethnic_MPs_cached",
      inputs: ["MPsCachedAndCombinedDataStore"],
      value: (async function(MPsCachedAndCombinedDataStore)
{
  let mps_data = MPsCachedAndCombinedDataStore.getItem("ethnic_MPs_cached");
  if (!mps_data) {
    try {
      mps_data = await (await fetch("https://raw.githubusercontent.com/atomless/Democracy-Data-Vis-Toolkit/master/ethnic_MPs.json")).json();
    } catch (e) {
      mps_data = "";
      console.warn("ethnic_MPs_cached", e);
    }
    MPsCachedAndCombinedDataStore.setItem("ethnic_MPs_cached", mps_data);
  }
  return mps_data;
}
)
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
      inputs: ["fuzzySet","MPs_combined_cached"],
      value: (function(fuzzySet,MPs_combined_cached){return(
fuzzySet(Array.from(MPs_combined_cached.reduce((ethnicities, mp) => { 
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
["ListAs", "Party", "Gender", "Age", "EthnicityIndex", "Sexuality", "Vote", "Expenses"]
)})
    },
    {
      name: "enabled_MPs_groupby_dimensions",
      value: (function(){return(
["Party", "Bench", "Gender", "Generation", "Ethnicity", "Sexuality", "Vote", "ExpensesIndex", "None"]
)})
    },
    {
      name: "generations",
      value: (function(){return(
[
    { name: "Silent", start: 1928, end: 1945 },
    { name: "Baby Boomer", start: 1946, end: 1964 },
    { name: "Generation X", start: 1965, end: 1980 },
    { name: "Millenial", start: 1981, end: 1996 },
    { name: "Generation Z", start: 1997, end: 2013 }
  ]
)})
    },
    {
      name: "genders",
      value: (function(){return(
["F", "M", "Non-Cisgender or Non-Binary"]
)})
    },
    {
      name: "MPs_sexual_orientations",
      value: (function(){return(
["Heterosexual", "LGBTQIA"]
)})
    },
    {
      name: "MPs_ethnicities_count",
      inputs: ["MPs_ethnicities","MPs_cached","ethnic_MPs_cached"],
      value: (function(MPs_ethnicities,MPs_cached,ethnic_MPs_cached){return(
Array.from(MPs_ethnicities).reduce((ec, e) => { 
  ec[`${e}`] = (e === "British Caucasion")
    ? MPs_cached.length - ethnic_MPs_cached.length
    : ethnic_MPs_cached.filter(mp => mp.Ethnicity === e).length;
  return ec;
}, {})
)})
    },
    {
      name: "MPs_ethnicities",
      inputs: ["ethnic_MPs_cached"],
      value: (function(ethnic_MPs_cached){return(
(ethnic_MPs_cached).reduce((set, mp) => set.add(mp.Ethnicity), new Set().add("British Caucasion"))
)})
    },
    {
      name: "default_ethnicity",
      value: (function(){return(
"British Caucasion"
)})
    },
    {
      name: "mps_data_uncached",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">👩‍💼</span> MPs <small>(from machine readable sources)</small>
*From verified and authoritative sources : [data.parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7CIsEligible=true/) & [en.wikipedia.org](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom)*

*Advisable to use the cached MPs data above, all the below data has been merged into the cached versions above. Uncached data will be slower as the various sources must be loaded seperately and then procedurally combined. This dataset is included mainly in order to highlight both the original source data and to catch updates that show up as differences between these and the cached versions.*`
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
      name: "MPs_uncached_data_version",
      value: (function(){return(
"1.0.2"
)})
    },
    {
      name: "MPs",
      inputs: ["MPs_cached","MPsUncachedDataStore","fastXmlParser","getGenerationFromDOB","MPs_data_corrections","partyNameMap"],
      value: (async function(MPs_cached,MPsUncachedDataStore,fastXmlParser,getGenerationFromDOB,MPs_data_corrections,partyNameMap)
{

  let mps_data = MPs_cached || MPsUncachedDataStore.getItem("MPs_uncached");
  
  if (!mps_data) {
    try {
      
      mps_data = (fastXmlParser.parse(await (await fetch(
'https://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons|IsEligible=true/GovernmentPosts|OppositionPosts|Addresses/'
          )).text(), { ignoreAttributes: false })
      )
      .Members.Member
      .map(mp => {

        mp.MemberID = mp["@_Member_Id"];

        mp.Generation = getGenerationFromDOB(mp.DateOfBirth);
        
        if (typeof mp.DateOfBirth !== "string") {
          mp.DateOfBirth = `${(new Date).getFullYear()}-${(`${(new Date).getMonth() + 1}`).padStart(2, 0)}-${`${(new Date).getDate()}`.padStart(2, 0)}T00:00:00`;
        }
        
        mp.Party = mp.Party["#text"];
        mp.FirstAndLastName = mp.DisplayAs.toLowerCase().replace(/(mr|mr|ms|miss|mrs|dr|sir|rt hon|mp)(\.?)\s/, "");
        if (mp.FirstAndLastName.split(" ").length > 2) {
          mp.FirstAndLastName = `${mp.FirstAndLastName.split(" ").shift()} ${mp.FirstAndLastName.split(" ").pop()}`;
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

        if (MPs_data_corrections.hasOwnProperty(mp.FirstAndLastName)) {
          for (let key of Object.keys(MPs_data_corrections[mp.FirstAndLastName])) {
            mp[key] = MPs_data_corrections[mp.FirstAndLastName][key];
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
          "HouseStartDate",
          "HouseEndDate",
          "CurrentStatus",
          "House",
          "GovernmentPosts",
          "OppositionPosts",
          "Addresses"
        ].forEach(p => delete mp[p]);

        return mp;
      });

    } catch (e) {
      mps_data = [];
      console.warn("MPs_uncached", e);
    }
    
    MPsUncachedDataStore.setItem("MPs_uncached", mps_data);
  }
  return mps_data;
}
)
    },
    {
      name: "MPs_combined",
      inputs: ["MPs_combined_cached","MPsUncachedDataStore","ethnic_MPs","LGBT_MPs","MPs_expenses_cached","MPs","default_ethnicity","fuzzySet","MPs_ethnicities_count","MPs_expenses_index"],
      value: (function(MPs_combined_cached,MPsUncachedDataStore,ethnic_MPs,LGBT_MPs,MPs_expenses_cached,MPs,default_ethnicity,fuzzySet,MPs_ethnicities_count,MPs_expenses_index)
{
  
  let mps_data = MPs_combined_cached || MPsUncachedDataStore.getItem("MPs_combined_uncached");
  
  if (!mps_data) {
    
    try {
      let ethnic_mps_copy = JSON.parse(JSON.stringify(ethnic_MPs));
      let lgbt_mps_copy = JSON.parse(JSON.stringify(LGBT_MPs));
      let mps_expenses_copy = JSON.parse(JSON.stringify(MPs_expenses_cached));
      let mps_copy = JSON.parse(JSON.stringify(MPs));

      return mps_copy.map(mp => {

        let ethnicity = default_ethnicity;

        ethnic_mps_copy.some(emp => {
          if (emp.found) {
            return false;
          }
          let fuzzyName = fuzzySet();
          fuzzyName.add(emp.FirstAndLastName);
          let n_score = fuzzyName.get(mp.FirstAndLastName);
          if (n_score && n_score[0][0] >= 0.85) {
            let fuzzyConstit = fuzzySet();
            fuzzyConstit.add(emp.MemberFrom);
            let c_score = fuzzyConstit.get(mp.MemberFrom);
            if (c_score && c_score[0][0] > 0.5) {
              //console.log(emp.FirstAndLastName);
              ethnicity = emp.Ethnicity;
              emp.found = true;//emp.found? emp.found + 1 : 1;
              return true;
            }
          }
          return false;
        });

        //console.log("Ethnic minority MPs not found in MPs dataset", ethnic_mps_copy.filter(emp => !emp.found));

        mp.Ethnicity = ethnicity;
        mp.EthnicityIndex = MPs_ethnicities_count[ethnicity];

        mp.LGBTQIA = lgbt_mps_copy.some(lgbtmp => {
          if (lgbtmp.found) {
            return false;
          }
          let fuzzyName = fuzzySet();
          fuzzyName.add(lgbtmp.FirstAndLastName);
          let n_score = fuzzyName.get(mp.FirstAndLastName);
          if (n_score && n_score[0][0] > 0.5) {
            let fuzzyConstit = fuzzySet();
            fuzzyConstit.add(lgbtmp.MemberFrom);
            let c_score = fuzzyConstit.get(mp.MemberFrom);
            if (c_score && c_score[0][0] > 0.65) {
              lgbtmp.found = true;//lgbtmp.found? lgbtmp.found + 1 : 1;
              return true;
            }
          }
          return false;
        });

        //console.log("LGBTQIA mps not found", lgbt_mps_copy.filter(mp => !mp.found));
        mp.Expenses = 0;
        mp.ExpensesIndex = 0;
    
        mps_expenses_copy.some(exp_mp => {
          if (exp_mp.found) {
            return false;
          }
          let fuzzyName = fuzzySet();
          fuzzyName.add(exp_mp.FirstAndLastName);
          let n_score = fuzzyName.get(mp.FirstAndLastName);
          if (n_score && n_score[0][0] > 0.5) {
            let fuzzyConstit = fuzzySet();
            fuzzyConstit.add(exp_mp.MemberFrom);
            let c_score = fuzzyConstit.get(mp.MemberFrom);
            if (c_score && c_score[0][0] > 0.65) {
              exp_mp.found = true;//exp_mp.found? exp_mp.found + 1 : 1;
              mp.Expenses_17_18 = exp_mp.Claim;
              mp.Expenses = parseInt((exp_mp.Claim || "").replace(/[£\,]/g,""));
              return true;
            }
          }
          return false;
        });
        
        MPs_expenses_index.some((v, i) => {
          if (mp.Expenses > v) {
            mp.ExpensesIndex = i + 1;
            return false;
          } else {
            return true;
          }
        });

        //console.log("expenses mps not found", mps_expenses_copy.filter(mp => !mp.found));

        mp.Sexuality = mp.LGBTQIA? "LGBTQIA" : "Heterosexual";

        return mp;
      });
      
    } catch (e) {
      mps_data = [];
      console.warn("MPs_combined_uncached", e);
    }
    
    MPsUncachedDataStore.setItem("MPs_combined_uncached", mps_data);
  }
  
  return mps_data;
}
)
    },
    {
      name: "MPs_data_corrections",
      value: (function(){return(
{
  "stephen lloyd": {
    Party: "Liberal Democrat"
  }
}
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
      name: "expenses_MPs_found_in_MPs",
      inputs: ["MPs_combined"],
      value: (function(MPs_combined){return(
MPs_combined.filter(mp => mp.Expenses_17_18)
)})
    },
    {
      name: "ethnic_MPs_found_in_MPs",
      inputs: ["MPs_combined"],
      value: (function(MPs_combined){return(
MPs_combined.filter(mp => !mp.Ethnicity.includes('Caucasion'))
)})
    },
    {
      name: "LGBT_MPs_found_in_MPs",
      inputs: ["MPs_combined"],
      value: (function(MPs_combined){return(
MPs_combined.filter(mp => mp.LGBTQIA)
)})
    },
    {
      name: "ethnicNamesMap",
      value: (function(){return(
(name) => ({
  "suella fernandes": "suella braverman"
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
      name: "ethnic_MPs_data_corrections",
      value: (function(){return(
{
  "rishi sunak": {
    MemberFrom: "Richmond (Yorks)"
  }
}
)})
    },
    {
      name: "ethnic_MPs",
      inputs: ["ethnic_MPs_cached","letTheLightIn","ethnicNamesMap","ethnic_MPs_data_corrections"],
      value: (async function(ethnic_MPs_cached,letTheLightIn,ethnicNamesMap,ethnic_MPs_data_corrections){return(
ethnic_MPs_cached || Array.from(
(new window.DOMParser()).parseFromString(
  await letTheLightIn(
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
  let name = ethnicNamesMap(tds.item(2).querySelector("a").textContent.trim().toLowerCase().replace(/(mr|mr|ms|miss|mrs|dr|sir|rt hon|mp)(\.?)\s/, ""));
  
  let emp = (tds && tds.length > 7)? {
    Party: tds.item(0).querySelector("a").textContent.trim(),
    FullTitle: tds.item(2).querySelector("a").textContent.trim(),
    FirstAndLastName: name.split(" ").shift() + " " + name.split(" ").pop(),
    MemberFrom: tds.item(3).querySelector("a").textContent.trim(),
    Ethnicity: tds.item(7).querySelector("a").textContent.trim()
  } : {};
  
  let corrections = (ethnic_MPs_data_corrections[emp.FirstAndLastName]);
  
  if (corrections) {
    for (let k of Object.keys(corrections)) {
      emp[k] = corrections[k];
    }
  }
  
  return emp;
})
)})
    },
    {
      name: "LGBT_MPs",
      inputs: ["LGBT_MPs_cached","letTheLightIn","LGBTNamesMap"],
      value: (async function(LGBT_MPs_cached,letTheLightIn,LGBTNamesMap){return(
LGBT_MPs_cached || Array.from(
(new window.DOMParser()).parseFromString(
  await letTheLightIn(
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
      name: "getGenerationFromDOB",
      inputs: ["generations"],
      value: (function(generations){return(
DOB => {
  let generation = "Unknown";
  if (typeof DOB === "string") {
    let YOB = (new Date(DOB)).getUTCFullYear();
    let gen_matches = generations.filter(g => YOB >= g.start && YOB <= g.end);
    if (gen_matches && gen_matches.length) {
      generation = gen_matches.pop().name;
    }
  }
  return generation;                     
}
)})
    },
    {
      name: "applyVoteResultToMPs",
      value: (function(){return(
({ mps, vote_result } = {}) => {

  mps.forEach(mp => { mp.Vote = 0; });
  for (let v of vote_result.Votes) {
    let mp = mps.find(mp => mp.MemberID === v.MemberID);
    if (mp) {
      mp.Vote = v.Type;
    }
  }
  return mps;
}
)})
    },
    {
      name: "findMPsByName",
      inputs: ["MPs_combined_cached","MP_names_fuzzy_set"],
      value: (function(MPs_combined_cached,MP_names_fuzzy_set){return(
(name, mps = MPs_combined_cached, accuracy = 0.1, set = MP_names_fuzzy_set) => (set.get(name, accuracy) || []).reduce((mmps, m) => [...mmps, ...mps.filter(mp => mp.FirstAndLastName === m[1])], new Array())
)})
    },
    {
      name: "findMPsByFamilyName",
      inputs: ["MPs_combined_cached","MP_familynames_fuzzy_set"],
      value: (function(MPs_combined_cached,MP_familynames_fuzzy_set){return(
(familyname, mps = MPs_combined_cached, accuracy = 0.1, set = MP_familynames_fuzzy_set) => (set.get(familyname, accuracy) || []).reduce((mmps, m) => [...mmps, ...mps.filter(mp => mp.ListAs.split(",")[0] === m[1])], [])
)})
    },
    {
      name: "findMPsByConstituency",
      inputs: ["MPs_combined_cached","MP_constituencies_fuzzy_set"],
      value: (function(MPs_combined_cached,MP_constituencies_fuzzy_set){return(
(constituency, mps = MPs_combined_cached, accuracy = 0.1, set = MP_constituencies_fuzzy_set) => (set.get(constituency, accuracy) || []).reduce((mcmps, m) => [...mcmps, ...mps.filter(mp => mp.MemberFrom === m[1])], [])
)})
    },
    {
      name: "findMPsByEthnicity",
      inputs: ["MPs_combined_cached","MP_ethnicities_fuzzy_set"],
      value: (function(MPs_combined_cached,MP_ethnicities_fuzzy_set){return(
(ethnicity, mps = MPs_combined_cached, set = MP_ethnicities_fuzzy_set) => (set.get(ethnicity) || []).reduce((mmps, m) => [...mmps, ...mps.filter(mp => mp.Ethnicity === m[1])], [])
)})
    },
    {
      name: "mps_data_manually_collated",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">👩‍💼</span> MPs <small>(manually collated)</small>
*From verified and authoratative sources. See below for a full list of sources.*

*This dataset is included in order to facilitate collaborative collation and correction of data from disperate, verified sources, that are not practically machine readable. Once verified, data added here will be merged into the cached combined source above. Once you're done adding data, see the [Fork & Merge](https://beta.observablehq.com/@observablehq/fork-share-merge) process for details on how to get your work included into the datasets used in the Emojiocracy visualisations (or just ping me for help on twitter [@atomless](https://twitter.com/@atomless)).*

---`
)})
    },
    {
      name: "how_to_manually_collate_mps_data",
      inputs: ["md"],
      value: (function(md){return(
md`##### ** How To Manually Collate & contribute MP Data **
*Copy all of the [MPs_manually_collated_data_template](#MPs_manually_collated_data_template) cell below to a new Observable cell, rename the variable assigned (eg. from "MPs_manually_collated_example" to "MPs_manually_collated_important_data"), then add the new property to each MP as shown below...
(change the name of "NewProperty" & "NewPropertySourceURL",* 🤦 *obvs!)*
<pre>
MPs_manually_collated_example = [
  {
    "MemberID": "172",
    "FullTitle": "Rt Hon Diane Abbott MP",
    "NewProperty": "Bla bla",
    "NewPropertySourceURL": "http://example.com..."
  },...
]
</pre>
`
)})
    },
    {
      name: "MPs_manually_collated_data_template",
      value: (function(){return(
[
  {
    "MemberID": "172",
    "FullTitle": "Rt Hon Diane Abbott MP"
  },
  {
    "MemberID": "4212",
    "FullTitle": "Debbie Abrahams MP"
  },
  {
    "MemberID": "4057",
    "FullTitle": "Nigel Adams MP"
  },
  {
    "MemberID": "4639",
    "FullTitle": "Bim Afolami MP"
  },
  {
    "MemberID": "1586",
    "FullTitle": "Adam Afriyie MP"
  },
  {
    "MemberID": "4069",
    "FullTitle": "Peter Aldous MP"
  },
  {
    "MemberID": "4138",
    "FullTitle": "Rushanara Ali MP"
  },
  {
    "MemberID": "4411",
    "FullTitle": "Lucy Allan MP"
  },
  {
    "MemberID": "4516",
    "FullTitle": "Heidi Allen MP"
  },
  {
    "MemberID": "4573",
    "FullTitle": "Dr Rosena Allin-Khan MP"
  },
  {
    "MemberID": "4667",
    "FullTitle": "Mike Amesbury MP"
  },
  {
    "MemberID": "44",
    "FullTitle": "Sir David Amess MP"
  },
  {
    "MemberID": "4032",
    "FullTitle": "Stuart Andrew MP"
  },
  {
    "MemberID": "4623",
    "FullTitle": "Tonia Antoniazzi MP"
  },
  {
    "MemberID": "4362",
    "FullTitle": "Edward Argar MP"
  },
  {
    "MemberID": "4244",
    "FullTitle": "Jonathan Ashworth MP"
  },
  {
    "MemberID": "4399",
    "FullTitle": "Victoria Atkins MP"
  },
  {
    "MemberID": "1511",
    "FullTitle": "Ian Austin MP"
  },
  {
    "MemberID": "1451",
    "FullTitle": "Mr Richard Bacon MP"
  },
  {
    "MemberID": "4597",
    "FullTitle": "Mrs Kemi Badenoch MP"
  },
  {
    "MemberID": "320",
    "FullTitle": "Mr Adrian Bailey MP"
  },
  {
    "MemberID": "4064",
    "FullTitle": "Mr Steve Baker MP"
  },
  {
    "MemberID": "4107",
    "FullTitle": "Harriett Baldwin MP"
  },
  {
    "MemberID": "4095",
    "FullTitle": "Rt Hon Stephen Barclay MP"
  },
  {
    "MemberID": "4486",
    "FullTitle": "Hannah Bardell MP"
  },
  {
    "MemberID": "1390",
    "FullTitle": "Mr John Baron MP"
  },
  {
    "MemberID": "392",
    "FullTitle": "Rt Hon Sir Kevin Barron MP"
  },
  {
    "MemberID": "3910",
    "FullTitle": "Guto Bebb MP"
  },
  {
    "MemberID": "328",
    "FullTitle": "Rt Hon Margaret Beckett MP"
  },
  {
    "MemberID": "4697",
    "FullTitle": "Órfhlaith Begley MP"
  },
  {
    "MemberID": "1441",
    "FullTitle": "Sir Henry Bellingham MP"
  },
  {
    "MemberID": "413",
    "FullTitle": "Rt Hon Hilary Benn MP"
  },
  {
    "MemberID": "1547",
    "FullTitle": "Rt Hon Richard Benyon MP"
  },
  {
    "MemberID": "17",
    "FullTitle": "Rt Hon John Bercow MP"
  },
  {
    "MemberID": "103",
    "FullTitle": "Sir Paul Beresford MP"
  },
  {
    "MemberID": "4036",
    "FullTitle": "Luciana Berger MP"
  },
  {
    "MemberID": "4060",
    "FullTitle": "Jake Berry MP"
  },
  {
    "MemberID": "394",
    "FullTitle": "Mr Clive Betts MP"
  },
  {
    "MemberID": "4421",
    "FullTitle": "Mhairi Black MP"
  },
  {
    "MemberID": "4390",
    "FullTitle": "Rt Hon Ian Blackford MP"
  },
  {
    "MemberID": "4005",
    "FullTitle": "Bob Blackman MP"
  },
  {
    "MemberID": "4357",
    "FullTitle": "Kirsty Blackman MP"
  },
  {
    "MemberID": "1501",
    "FullTitle": "Dr Roberta Blackman-Woods MP"
  },
  {
    "MemberID": "4058",
    "FullTitle": "Paul Blomfield MP"
  },
  {
    "MemberID": "104",
    "FullTitle": "Crispin Blunt MP"
  },
  {
    "MemberID": "3995",
    "FullTitle": "Nick Boles MP"
  },
  {
    "MemberID": "1581",
    "FullTitle": "Mr Peter Bone MP"
  },
  {
    "MemberID": "117",
    "FullTitle": "Sir Peter Bottomley MP"
  },
  {
    "MemberID": "4601",
    "FullTitle": "Andrew Bowie MP"
  },
  {
    "MemberID": "4588",
    "FullTitle": "Tracy Brabin MP"
  },
  {
    "MemberID": "4663",
    "FullTitle": "Ben Bradley MP"
  },
  {
    "MemberID": "4110",
    "FullTitle": "Rt Hon Karen Bradley MP"
  },
  {
    "MemberID": "230",
    "FullTitle": "Rt Hon Ben Bradshaw MP"
  },
  {
    "MemberID": "435",
    "FullTitle": "Sir Graham Brady MP"
  },
  {
    "MemberID": "4373",
    "FullTitle": "Mickey Brady MP"
  },
  {
    "MemberID": "151",
    "FullTitle": "Rt Hon Tom Brake MP"
  },
  {
    "MemberID": "4475",
    "FullTitle": "Suella Braverman MP"
  },
  {
    "MemberID": "1400",
    "FullTitle": "Kevin Brennan MP"
  },
  {
    "MemberID": "4643",
    "FullTitle": "Jack Brereton MP"
  },
  {
    "MemberID": "4133",
    "FullTitle": "Andrew Bridgen MP"
  },
  {
    "MemberID": "4067",
    "FullTitle": "Steve Brine MP"
  },
  {
    "MemberID": "4417",
    "FullTitle": "Deidre Brock MP"
  },
  {
    "MemberID": "1530",
    "FullTitle": "Rt Hon James Brokenshire MP"
  },
  {
    "MemberID": "4470",
    "FullTitle": "Alan Brown MP"
  },
  {
    "MemberID": "1583",
    "FullTitle": "Lyn Brown MP"
  },
  {
    "MemberID": "523",
    "FullTitle": "Rt Hon Nicholas Brown MP"
  },
  {
    "MemberID": "3958",
    "FullTitle": "Fiona Bruce MP"
  },
  {
    "MemberID": "1446",
    "FullTitle": "Chris Bryant MP"
  },
  {
    "MemberID": "199",
    "FullTitle": "Ms Karen Buck MP"
  },
  {
    "MemberID": "4106",
    "FullTitle": "Robert Buckland MP"
  },
  {
    "MemberID": "301",
    "FullTitle": "Richard Burden MP"
  },
  {
    "MemberID": "4613",
    "FullTitle": "Alex Burghart MP"
  },
  {
    "MemberID": "4493",
    "FullTitle": "Richard Burgon MP"
  },
  {
    "MemberID": "3922",
    "FullTitle": "Conor Burns MP"
  },
  {
    "MemberID": "1201",
    "FullTitle": "Rt Hon Alistair Burt MP"
  },
  {
    "MemberID": "1489",
    "FullTitle": "Dawn Butler MP"
  },
  {
    "MemberID": "1171",
    "FullTitle": "Rt Hon Liam Byrne MP"
  },
  {
    "MemberID": "207",
    "FullTitle": "Rt Hon Sir Vince Cable MP"
  },
  {
    "MemberID": "4389",
    "FullTitle": "Ruth Cadbury MP"
  },
  {
    "MemberID": "4086",
    "FullTitle": "Rt Hon Alun Cairns MP"
  },
  {
    "MemberID": "4412",
    "FullTitle": "Dr Lisa Cameron MP"
  },
  {
    "MemberID": "529",
    "FullTitle": "Sir Alan Campbell MP"
  },
  {
    "MemberID": "1409",
    "FullTitle": "Mr Gregory Campbell MP"
  },
  {
    "MemberID": "514",
    "FullTitle": "Mr Ronnie Campbell MP"
  },
  {
    "MemberID": "4651",
    "FullTitle": "Dan Carden MP"
  },
  {
    "MemberID": "1442",
    "FullTitle": "Rt Hon Alistair Carmichael MP"
  },
  {
    "MemberID": "4519",
    "FullTitle": "James Cartlidge MP"
  },
  {
    "MemberID": "288",
    "FullTitle": "Sir William Cash MP"
  },
  {
    "MemberID": "4492",
    "FullTitle": "Maria Caulfield MP"
  },
  {
    "MemberID": "4481",
    "FullTitle": "Alex Chalk MP"
  },
  {
    "MemberID": "4267",
    "FullTitle": "Sarah Champion MP"
  },
  {
    "MemberID": "4402",
    "FullTitle": "Douglas Chapman MP"
  },
  {
    "MemberID": "3972",
    "FullTitle": "Jenny Chapman MP"
  },
  {
    "MemberID": "4610",
    "FullTitle": "Bambos Charalambous MP"
  },
  {
    "MemberID": "4419",
    "FullTitle": "Joanna Cherry QC MP"
  },
  {
    "MemberID": "3987",
    "FullTitle": "Rehman Chishti MP"
  },
  {
    "MemberID": "242",
    "FullTitle": "Sir Christopher Chope MP"
  },
  {
    "MemberID": "4380",
    "FullTitle": "Jo Churchill MP"
  },
  {
    "MemberID": "4650",
    "FullTitle": "Colin Clark MP"
  },
  {
    "MemberID": "1578",
    "FullTitle": "Rt Hon Greg Clark MP"
  },
  {
    "MemberID": "366",
    "FullTitle": "Rt Hon Kenneth Clarke QC MP"
  },
  {
    "MemberID": "4655",
    "FullTitle": "Mr Simon Clarke MP"
  },
  {
    "MemberID": "4366",
    "FullTitle": "James Cleverly MP"
  },
  {
    "MemberID": "249",
    "FullTitle": "Sir Geoffrey Clifton-Brown MP"
  },
  {
    "MemberID": "553",
    "FullTitle": "Rt Hon Ann Clwyd MP"
  },
  {
    "MemberID": "360",
    "FullTitle": "Vernon Coaker MP"
  },
  {
    "MemberID": "458",
    "FullTitle": "Ann Coffey MP"
  },
  {
    "MemberID": "4098",
    "FullTitle": "Dr Thérèse Coffey MP"
  },
  {
    "MemberID": "3986",
    "FullTitle": "Damian Collins MP"
  },
  {
    "MemberID": "4405",
    "FullTitle": "Julie Cooper MP"
  },
  {
    "MemberID": "1538",
    "FullTitle": "Rosie Cooper MP"
  },
  {
    "MemberID": "420",
    "FullTitle": "Rt Hon Yvette Cooper MP"
  },
  {
    "MemberID": "185",
    "FullTitle": "Rt Hon Jeremy Corbyn MP"
  },
  {
    "MemberID": "4439",
    "FullTitle": "Alberto Costa MP"
  },
  {
    "MemberID": "4589",
    "FullTitle": "Robert Courts MP"
  },
  {
    "MemberID": "4465",
    "FullTitle": "Ronnie Cowan MP"
  },
  {
    "MemberID": "1508",
    "FullTitle": "Rt Hon Geoffrey Cox QC MP"
  },
  {
    "MemberID": "4368",
    "FullTitle": "Neil Coyle MP"
  },
  {
    "MemberID": "1554",
    "FullTitle": "Rt Hon Stephen Crabb MP"
  },
  {
    "MemberID": "437",
    "FullTitle": "Sir David Crausby MP"
  },
  {
    "MemberID": "4469",
    "FullTitle": "Angela Crawley MP"
  },
  {
    "MemberID": "1579",
    "FullTitle": "Mary Creagh MP"
  },
  {
    "MemberID": "4088",
    "FullTitle": "Stella Creasy MP"
  },
  {
    "MemberID": "3950",
    "FullTitle": "Tracey Crouch MP"
  },
  {
    "MemberID": "1406",
    "FullTitle": "Jon Cruddas MP"
  },
  {
    "MemberID": "181",
    "FullTitle": "John Cryer MP"
  },
  {
    "MemberID": "4391",
    "FullTitle": "Judith Cummins MP"
  },
  {
    "MemberID": "4122",
    "FullTitle": "Alex Cunningham MP"
  },
  {
    "MemberID": "308",
    "FullTitle": "Mr Jim Cunningham MP"
  },
  {
    "MemberID": "4698",
    "FullTitle": "Janet Daby MP"
  },
  {
    "MemberID": "4056",
    "FullTitle": "Nic Dakin MP"
  },
  {
    "MemberID": "188",
    "FullTitle": "Rt Hon Sir Edward Davey MP"
  },
  {
    "MemberID": "1398",
    "FullTitle": "Wayne David MP"
  },
  {
    "MemberID": "4376",
    "FullTitle": "Chris Davies MP"
  },
  {
    "MemberID": "1545",
    "FullTitle": "David T. C. Davies MP"
  },
  {
    "MemberID": "155",
    "FullTitle": "Geraint Davies MP"
  },
  {
    "MemberID": "4041",
    "FullTitle": "Glyn Davies MP"
  },
  {
    "MemberID": "4513",
    "FullTitle": "Mims Davies MP"
  },
  {
    "MemberID": "1565",
    "FullTitle": "Philip Davies MP"
  },
  {
    "MemberID": "373",
    "FullTitle": "Rt Hon David Davis MP"
  },
  {
    "MemberID": "4488",
    "FullTitle": "Martyn Day MP"
  },
  {
    "MemberID": "4676",
    "FullTitle": "Marsha De Cordova MP"
  },
  {
    "MemberID": "3915",
    "FullTitle": "Gloria De Piero MP"
  },
  {
    "MemberID": "4433",
    "FullTitle": "Thangam Debbonaire MP"
  },
  {
    "MemberID": "4683",
    "FullTitle": "Emma Dent Coad MP"
  },
  {
    "MemberID": "4638",
    "FullTitle": "Mr Tanmanjeet Singh Dhesi MP"
  },
  {
    "MemberID": "4008",
    "FullTitle": "Caroline Dinenage MP"
  },
  {
    "MemberID": "1425",
    "FullTitle": "Mr Jonathan Djanogly MP"
  },
  {
    "MemberID": "4600",
    "FullTitle": "Leo Docherty MP"
  },
  {
    "MemberID": "4374",
    "FullTitle": "Martin Docherty-Hughes MP"
  },
  {
    "MemberID": "4657",
    "FullTitle": "Anneliese Dodds MP"
  },
  {
    "MemberID": "1388",
    "FullTitle": "Rt Hon Nigel Dodds MP"
  },
  {
    "MemberID": "650",
    "FullTitle": "Rt Hon Sir Jeffrey M. Donaldson MP"
  },
  {
    "MemberID": "4530",
    "FullTitle": "Michelle Donelan MP"
  },
  {
    "MemberID": "1481",
    "FullTitle": "Ms Nadine Dorries MP"
  },
  {
    "MemberID": "4452",
    "FullTitle": "Steve Double MP"
  },
  {
    "MemberID": "4264",
    "FullTitle": "Stephen Doughty MP"
  },
  {
    "MemberID": "4397",
    "FullTitle": "Peter Dowd MP"
  },
  {
    "MemberID": "4441",
    "FullTitle": "Oliver Dowden MP"
  },
  {
    "MemberID": "4065",
    "FullTitle": "Jackie Doyle-Price MP"
  },
  {
    "MemberID": "4132",
    "FullTitle": "Richard Drax MP"
  },
  {
    "MemberID": "252",
    "FullTitle": "Dr David Drew MP"
  },
  {
    "MemberID": "3913",
    "FullTitle": "Jack Dromey MP"
  },
  {
    "MemberID": "1559",
    "FullTitle": "James Duddridge MP"
  },
  {
    "MemberID": "4616",
    "FullTitle": "Rosie Duffield MP"
  },
  {
    "MemberID": "4606",
    "FullTitle": "David Duguid MP"
  },
  {
    "MemberID": "343",
    "FullTitle": "Rt Hon Sir Alan Duncan MP"
  },
  {
    "MemberID": "152",
    "FullTitle": "Rt Hon Iain Duncan Smith MP"
  },
  {
    "MemberID": "1542",
    "FullTitle": "Rt Hon Philip Dunne MP"
  },
  {
    "MemberID": "491",
    "FullTitle": "Ms Angela Eagle MP"
  },
  {
    "MemberID": "483",
    "FullTitle": "Maria Eagle MP"
  },
  {
    "MemberID": "3943",
    "FullTitle": "Jonathan Edwards MP"
  },
  {
    "MemberID": "165",
    "FullTitle": "Clive Efford MP"
  },
  {
    "MemberID": "4127",
    "FullTitle": "Julie Elliott MP"
  },
  {
    "MemberID": "4116",
    "FullTitle": "Michael Ellis MP"
  },
  {
    "MemberID": "484",
    "FullTitle": "Dame Louise Ellman MP"
  },
  {
    "MemberID": "1487",
    "FullTitle": "Rt Hon Tobias Ellwood MP"
  },
  {
    "MemberID": "4572",
    "FullTitle": "Chris Elmore MP"
  },
  {
    "MemberID": "3971",
    "FullTitle": "Charlie Elphicke MP"
  },
  {
    "MemberID": "4061",
    "FullTitle": "Bill Esterson MP"
  },
  {
    "MemberID": "3934",
    "FullTitle": "George Eustice MP"
  },
  {
    "MemberID": "4040",
    "FullTitle": "Chris Evans MP"
  },
  {
    "MemberID": "474",
    "FullTitle": "Mr Nigel Evans MP"
  },
  {
    "MemberID": "1198",
    "FullTitle": "Rt Hon Sir David Evennett MP"
  },
  {
    "MemberID": "280",
    "FullTitle": "Michael Fabricant MP"
  },
  {
    "MemberID": "88",
    "FullTitle": "Rt Hon Sir Michael Fallon MP"
  },
  {
    "MemberID": "1436",
    "FullTitle": "Paul Farrelly MP"
  },
  {
    "MemberID": "1591",
    "FullTitle": "Tim Farron MP"
  },
  {
    "MemberID": "4440",
    "FullTitle": "Marion Fellows MP"
  },
  {
    "MemberID": "478",
    "FullTitle": "Rt Hon Frank Field MP"
  },
  {
    "MemberID": "1405",
    "FullTitle": "Rt Hon Mark Field MP"
  },
  {
    "MemberID": "197",
    "FullTitle": "Jim Fitzpatrick MP"
  },
  {
    "MemberID": "4378",
    "FullTitle": "Colleen Fletcher MP"
  },
  {
    "MemberID": "389",
    "FullTitle": "Rt Hon Caroline Flint MP"
  },
  {
    "MemberID": "545",
    "FullTitle": "Paul Flynn MP"
  },
  {
    "MemberID": "4674",
    "FullTitle": "Vicky Ford MP"
  },
  {
    "MemberID": "4451",
    "FullTitle": "Kevin Foster MP"
  },
  {
    "MemberID": "4034",
    "FullTitle": "Yvonne Fovargue MP"
  },
  {
    "MemberID": "223",
    "FullTitle": "Rt Hon Dr Liam Fox MP"
  },
  {
    "MemberID": "4491",
    "FullTitle": "Vicky Foxcroft MP"
  },
  {
    "MemberID": "1444",
    "FullTitle": "Rt Hon Mark Francois MP"
  },
  {
    "MemberID": "4517",
    "FullTitle": "Lucy Frazer MP"
  },
  {
    "MemberID": "4020",
    "FullTitle": "George Freeman MP"
  },
  {
    "MemberID": "4004",
    "FullTitle": "Mike Freer MP"
  },
  {
    "MemberID": "4637",
    "FullTitle": "James Frith MP"
  },
  {
    "MemberID": "4571",
    "FullTitle": "Gill Furniss MP"
  },
  {
    "MemberID": "4446",
    "FullTitle": "Mr Marcus Fysh MP"
  },
  {
    "MemberID": "4614",
    "FullTitle": "Hugh Gaffney MP"
  },
  {
    "MemberID": "87",
    "FullTitle": "Rt Hon Sir Roger Gale MP"
  },
  {
    "MemberID": "184",
    "FullTitle": "Mike Gapes MP"
  },
  {
    "MemberID": "146",
    "FullTitle": "Barry Gardiner MP"
  },
  {
    "MemberID": "4074",
    "FullTitle": "Mark Garnier MP"
  },
  {
    "MemberID": "1529",
    "FullTitle": "Rt Hon David Gauke MP"
  },
  {
    "MemberID": "4662",
    "FullTitle": "Ruth George MP"
  },
  {
    "MemberID": "4434",
    "FullTitle": "Stephen Gethins MP"
  },
  {
    "MemberID": "4460",
    "FullTitle": "Ms Nusrat Ghani MP"
  },
  {
    "MemberID": "111",
    "FullTitle": "Rt Hon Nick Gibb MP"
  },
  {
    "MemberID": "4435",
    "FullTitle": "Patricia Gibson MP"
  },
  {
    "MemberID": "1416",
    "FullTitle": "Michelle Gildernew MP"
  },
  {
    "MemberID": "4603",
    "FullTitle": "Preet Kaur Gill MP"
  },
  {
    "MemberID": "18",
    "FullTitle": "Rt Hon Dame Cheryl Gillan MP"
  },
  {
    "MemberID": "4633",
    "FullTitle": "Paul Girvan MP"
  },
  {
    "MemberID": "4051",
    "FullTitle": "John Glen MP"
  },
  {
    "MemberID": "4126",
    "FullTitle": "Mary Glindon MP"
  },
  {
    "MemberID": "304",
    "FullTitle": "Mr Roger Godsiff MP"
  },
  {
    "MemberID": "4062",
    "FullTitle": "Zac Goldsmith MP"
  },
  {
    "MemberID": "1484",
    "FullTitle": "Helen Goodman MP"
  },
  {
    "MemberID": "1562",
    "FullTitle": "Rt Hon Robert Goodwill MP"
  },
  {
    "MemberID": "1571",
    "FullTitle": "Rt Hon Michael Gove MP"
  },
  {
    "MemberID": "4432",
    "FullTitle": "Patrick Grady MP"
  },
  {
    "MemberID": "4622",
    "FullTitle": "Luke Graham MP"
  },
  {
    "MemberID": "3990",
    "FullTitle": "Richard Graham MP"
  },
  {
    "MemberID": "4605",
    "FullTitle": "Bill Grant MP"
  },
  {
    "MemberID": "4018",
    "FullTitle": "Mrs Helen Grant MP"
  },
  {
    "MemberID": "4466",
    "FullTitle": "Peter Grant MP"
  },
  {
    "MemberID": "261",
    "FullTitle": "James Gray MP"
  },
  {
    "MemberID": "4365",
    "FullTitle": "Neil Gray MP"
  },
  {
    "MemberID": "1413",
    "FullTitle": "Rt Hon Chris Grayling MP"
  },
  {
    "MemberID": "4398",
    "FullTitle": "Chris Green MP"
  },
  {
    "MemberID": "76",
    "FullTitle": "Rt Hon Damian Green MP"
  },
  {
    "MemberID": "4120",
    "FullTitle": "Kate Green MP"
  },
  {
    "MemberID": "1555",
    "FullTitle": "Rt Hon Justine Greening MP"
  },
  {
    "MemberID": "4029",
    "FullTitle": "Lilian Greenwood MP"
  },
  {
    "MemberID": "4400",
    "FullTitle": "Margaret Greenwood MP"
  },
  {
    "MemberID": "16",
    "FullTitle": "Rt Hon Dominic Grieve QC MP"
  },
  {
    "MemberID": "1541",
    "FullTitle": "Nia Griffith MP"
  },
  {
    "MemberID": "3936",
    "FullTitle": "Andrew Griffiths MP"
  },
  {
    "MemberID": "382",
    "FullTitle": "John Grogan MP"
  },
  {
    "MemberID": "1506",
    "FullTitle": "Andrew Gwynne MP"
  },
  {
    "MemberID": "3980",
    "FullTitle": "Mr Sam Gyimah MP"
  },
  {
    "MemberID": "4473",
    "FullTitle": "Louise Haigh MP"
  },
  {
    "MemberID": "4675",
    "FullTitle": "Kirstene Hair MP"
  },
  {
    "MemberID": "3985",
    "FullTitle": "Rt Hon Robert Halfon MP"
  },
  {
    "MemberID": "4450",
    "FullTitle": "Luke Hall MP"
  },
  {
    "MemberID": "415",
    "FullTitle": "Fabian Hamilton MP"
  },
  {
    "MemberID": "105",
    "FullTitle": "Rt Hon Philip Hammond MP"
  },
  {
    "MemberID": "1585",
    "FullTitle": "Stephen Hammond MP"
  },
  {
    "MemberID": "4070",
    "FullTitle": "Rt Hon Matt Hancock MP"
  },
  {
    "MemberID": "1526",
    "FullTitle": "Rt Hon Greg Hands MP"
  },
  {
    "MemberID": "533",
    "FullTitle": "Rt Hon David Hanson MP"
  },
  {
    "MemberID": "4645",
    "FullTitle": "Emma Hardy MP"
  },
  {
    "MemberID": "150",
    "FullTitle": "Rt Hon Harriet Harman QC MP"
  },
  {
    "MemberID": "1520",
    "FullTitle": "Rt Hon Mark Harper MP"
  },
  {
    "MemberID": "4068",
    "FullTitle": "Richard Harrington MP"
  },
  {
    "MemberID": "4480",
    "FullTitle": "Carolyn Harris MP"
  },
  {
    "MemberID": "3948",
    "FullTitle": "Rebecca Harris MP"
  },
  {
    "MemberID": "4593",
    "FullTitle": "Trudy Harrison MP"
  },
  {
    "MemberID": "3944",
    "FullTitle": "Simon Hart MP"
  },
  {
    "MemberID": "4510",
    "FullTitle": "Helen Hayes MP"
  },
  {
    "MemberID": "350",
    "FullTitle": "Sir John Hayes MP"
  },
  {
    "MemberID": "4395",
    "FullTitle": "Sue Hayman MP"
  },
  {
    "MemberID": "4636",
    "FullTitle": "Chris Hazzard MP"
  },
  {
    "MemberID": "69",
    "FullTitle": "Rt Hon Sir Oliver Heald QC MP"
  },
  {
    "MemberID": "400",
    "FullTitle": "Rt Hon John Healey MP"
  },
  {
    "MemberID": "4528",
    "FullTitle": "James Heappey MP"
  },
  {
    "MemberID": "3977",
    "FullTitle": "Chris Heaton-Harris MP"
  },
  {
    "MemberID": "4524",
    "FullTitle": "Peter Heaton-Jones MP"
  },
  {
    "MemberID": "4050",
    "FullTitle": "Gordon Henderson MP"
  },
  {
    "MemberID": "473",
    "FullTitle": "Sir Mark Hendrick MP"
  },
  {
    "MemberID": "4467",
    "FullTitle": "Drew Hendry MP"
  },
  {
    "MemberID": "520",
    "FullTitle": "Mr Stephen Hepburn MP"
  },
  {
    "MemberID": "1479",
    "FullTitle": "Rt Hon Nick Herbert MP"
  },
  {
    "MemberID": "1437",
    "FullTitle": "Lady Hermon MP"
  },
  {
    "MemberID": "4644",
    "FullTitle": "Mike Hill MP"
  },
  {
    "MemberID": "1524",
    "FullTitle": "Meg Hillier MP"
  },
  {
    "MemberID": "3969",
    "FullTitle": "Rt Hon Damian Hinds MP"
  },
  {
    "MemberID": "4494",
    "FullTitle": "Simon Hoare MP"
  },
  {
    "MemberID": "4602",
    "FullTitle": "Wera Hobhouse MP"
  },
  {
    "MemberID": "140",
    "FullTitle": "Rt Hon Dame Margaret Hodge MP"
  },
  {
    "MemberID": "1521",
    "FullTitle": "Mrs Sharon Hodgson MP"
  },
  {
    "MemberID": "210",
    "FullTitle": "Kate Hoey MP"
  },
  {
    "MemberID": "4363",
    "FullTitle": "Kate Hollern MP"
  },
  {
    "MemberID": "4016",
    "FullTitle": "George Hollingbery MP"
  },
  {
    "MemberID": "4474",
    "FullTitle": "Kevin Hollinrake MP"
  },
  {
    "MemberID": "1537",
    "FullTitle": "Mr Philip Hollobone MP"
  },
  {
    "MemberID": "1522",
    "FullTitle": "Adam Holloway MP"
  },
  {
    "MemberID": "2",
    "FullTitle": "Kelvin Hopkins MP"
  },
  {
    "MemberID": "1514",
    "FullTitle": "Stewart Hosie MP"
  },
  {
    "MemberID": "481",
    "FullTitle": "Rt Hon George Howarth MP"
  },
  {
    "MemberID": "1606",
    "FullTitle": "John Howell MP"
  },
  {
    "MemberID": "467",
    "FullTitle": "Rt Hon Sir Lindsay Hoyle MP"
  },
  {
    "MemberID": "4407",
    "FullTitle": "Nigel Huddleston MP"
  },
  {
    "MemberID": "4635",
    "FullTitle": "Eddie Hughes MP"
  },
  {
    "MemberID": "1572",
    "FullTitle": "Rt Hon Jeremy Hunt MP"
  },
  {
    "MemberID": "4511",
    "FullTitle": "Dr Rupa Huq MP"
  },
  {
    "MemberID": "1561",
    "FullTitle": "Rt Hon Nick Hurd MP"
  },
  {
    "MemberID": "4394",
    "FullTitle": "Imran Hussain MP"
  },
  {
    "MemberID": "4619",
    "FullTitle": "Mr Alister Jack MP"
  },
  {
    "MemberID": "4115",
    "FullTitle": "Margot James MP"
  },
  {
    "MemberID": "4634",
    "FullTitle": "Christine Jardine MP"
  },
  {
    "MemberID": "4243",
    "FullTitle": "Dan Jarvis MP"
  },
  {
    "MemberID": "3945",
    "FullTitle": "Rt Hon Sajid Javid MP"
  },
  {
    "MemberID": "4498",
    "FullTitle": "Mr Ranil Jayawardena MP"
  },
  {
    "MemberID": "40",
    "FullTitle": "Sir Bernard Jenkin MP"
  },
  {
    "MemberID": "4490",
    "FullTitle": "Andrea Jenkyns MP"
  },
  {
    "MemberID": "4320",
    "FullTitle": "Robert Jenrick MP"
  },
  {
    "MemberID": "1423",
    "FullTitle": "Rt Hon Boris Johnson MP"
  },
  {
    "MemberID": "4592",
    "FullTitle": "Dr Caroline Johnson MP"
  },
  {
    "MemberID": "1533",
    "FullTitle": "Diana Johnson MP"
  },
  {
    "MemberID": "3970",
    "FullTitle": "Gareth Johnson MP"
  },
  {
    "MemberID": "4039",
    "FullTitle": "Joseph Johnson MP"
  },
  {
    "MemberID": "3996",
    "FullTitle": "Andrew Jones MP"
  },
  {
    "MemberID": "4621",
    "FullTitle": "Darren Jones MP"
  },
  {
    "MemberID": "1502",
    "FullTitle": "Rt Hon David Jones MP"
  },
  {
    "MemberID": "4501",
    "FullTitle": "Gerald Jones MP"
  },
  {
    "MemberID": "3999",
    "FullTitle": "Graham P Jones MP"
  },
  {
    "MemberID": "432",
    "FullTitle": "Helen Jones MP"
  },
  {
    "MemberID": "1438",
    "FullTitle": "Rt Hon Kevan Jones MP"
  },
  {
    "MemberID": "4024",
    "FullTitle": "Mr Marcus Jones MP"
  },
  {
    "MemberID": "4631",
    "FullTitle": "Sarah Jones MP"
  },
  {
    "MemberID": "3956",
    "FullTitle": "Susan Elan Jones MP"
  },
  {
    "MemberID": "4316",
    "FullTitle": "Mike Kane MP"
  },
  {
    "MemberID": "1566",
    "FullTitle": "Daniel Kawczynski MP"
  },
  {
    "MemberID": "4680",
    "FullTitle": "Gillian Keegan MP"
  },
  {
    "MemberID": "1588",
    "FullTitle": "Barbara Keeley MP"
  },
  {
    "MemberID": "4026",
    "FullTitle": "Liz Kendall MP"
  },
  {
    "MemberID": "4455",
    "FullTitle": "Seema Kennedy MP"
  },
  {
    "MemberID": "4604",
    "FullTitle": "Stephen Kerr MP"
  },
  {
    "MemberID": "4671",
    "FullTitle": "Afzal Khan MP"
  },
  {
    "MemberID": "4672",
    "FullTitle": "Ged Killen MP"
  },
  {
    "MemberID": "4359",
    "FullTitle": "Stephen Kinnock MP"
  },
  {
    "MemberID": "1200",
    "FullTitle": "Rt Hon Sir Greg Knight MP"
  },
  {
    "MemberID": "4410",
    "FullTitle": "Julian Knight MP"
  },
  {
    "MemberID": "4134",
    "FullTitle": "Kwasi Kwarteng MP"
  },
  {
    "MemberID": "4505",
    "FullTitle": "Peter Kyle MP"
  },
  {
    "MemberID": "36",
    "FullTitle": "Rt Hon Dame Eleanor Laing MP"
  },
  {
    "MemberID": "4660",
    "FullTitle": "Lesley Laird MP"
  },
  {
    "MemberID": "4630",
    "FullTitle": "Ben Lake MP"
  },
  {
    "MemberID": "1439",
    "FullTitle": "Rt Hon Norman Lamb MP"
  },
  {
    "MemberID": "206",
    "FullTitle": "Rt Hon David Lammy MP"
  },
  {
    "MemberID": "4608",
    "FullTitle": "John Lamont MP"
  },
  {
    "MemberID": "1544",
    "FullTitle": "Rt Hon Mark Lancaster MP"
  },
  {
    "MemberID": "4025",
    "FullTitle": "Mrs Pauline Latham MP"
  },
  {
    "MemberID": "4139",
    "FullTitle": "Ian Lavery MP"
  },
  {
    "MemberID": "4403",
    "FullTitle": "Chris Law MP"
  },
  {
    "MemberID": "4117",
    "FullTitle": "Rt Hon Andrea Leadsom MP"
  },
  {
    "MemberID": "4664",
    "FullTitle": "Karen Lee MP"
  },
  {
    "MemberID": "3921",
    "FullTitle": "Dr Phillip Lee MP"
  },
  {
    "MemberID": "4109",
    "FullTitle": "Jeremy Lefroy MP"
  },
  {
    "MemberID": "345",
    "FullTitle": "Rt Hon Sir Edward Leigh MP"
  },
  {
    "MemberID": "422",
    "FullTitle": "Mr Chris Leslie MP"
  },
  {
    "MemberID": "247",
    "FullTitle": "Rt Hon Sir Oliver Letwin MP"
  },
  {
    "MemberID": "4277",
    "FullTitle": "Mrs Emma Lewell-Buck MP"
  },
  {
    "MemberID": "4659",
    "FullTitle": "Andrew Lewer MP"
  },
  {
    "MemberID": "4009",
    "FullTitle": "Rt Hon Brandon Lewis MP"
  },
  {
    "MemberID": "4500",
    "FullTitle": "Clive Lewis MP"
  },
  {
    "MemberID": "441",
    "FullTitle": "Mr Ivan Lewis MP"
  },
  {
    "MemberID": "54",
    "FullTitle": "Rt Hon Dr Julian Lewis MP"
  },
  {
    "MemberID": "1396",
    "FullTitle": "Mr Ian Liddell-Grainger MP"
  },
  {
    "MemberID": "15",
    "FullTitle": "Rt Hon David Lidington MP"
  },
  {
    "MemberID": "4640",
    "FullTitle": "David Linden MP"
  },
  {
    "MemberID": "4611",
    "FullTitle": "Emma Little Pengelly MP"
  },
  {
    "MemberID": "3968",
    "FullTitle": "Stephen Lloyd MP"
  },
  {
    "MemberID": "450",
    "FullTitle": "Tony Lloyd MP"
  },
  {
    "MemberID": "4396",
    "FullTitle": "Rebecca Long Bailey MP"
  },
  {
    "MemberID": "4647",
    "FullTitle": "Julia Lopez MP"
  },
  {
    "MemberID": "3989",
    "FullTitle": "Jack Lopresti MP"
  },
  {
    "MemberID": "4090",
    "FullTitle": "Mr Jonathan Lord MP"
  },
  {
    "MemberID": "114",
    "FullTitle": "Tim Loughton MP"
  },
  {
    "MemberID": "3930",
    "FullTitle": "Caroline Lucas MP"
  },
  {
    "MemberID": "1470",
    "FullTitle": "Ian C. Lucas MP"
  },
  {
    "MemberID": "4472",
    "FullTitle": "Holly Lynch MP"
  },
  {
    "MemberID": "298",
    "FullTitle": "Steve McCabe MP"
  },
  {
    "MemberID": "4624",
    "FullTitle": "Elisha McCallion MP"
  },
  {
    "MemberID": "1491",
    "FullTitle": "Kerry McCarthy MP"
  },
  {
    "MemberID": "193",
    "FullTitle": "Siobhain McDonagh MP"
  },
  {
    "MemberID": "4269",
    "FullTitle": "Andy McDonald MP"
  },
  {
    "MemberID": "4461",
    "FullTitle": "Stewart Malcolm McDonald MP"
  },
  {
    "MemberID": "4393",
    "FullTitle": "Stuart C. McDonald MP"
  },
  {
    "MemberID": "178",
    "FullTitle": "Rt Hon John McDonnell MP"
  },
  {
    "MemberID": "1587",
    "FullTitle": "Rt Hon Pat McFadden MP"
  },
  {
    "MemberID": "4458",
    "FullTitle": "Conor McGinn MP"
  },
  {
    "MemberID": "4083",
    "FullTitle": "Alison McGovern MP"
  },
  {
    "MemberID": "4342",
    "FullTitle": "Liz McInnes MP"
  },
  {
    "MemberID": "4529",
    "FullTitle": "Craig Mackinlay MP"
  },
  {
    "MemberID": "4125",
    "FullTitle": "Catherine McKinnell MP"
  },
  {
    "MemberID": "4668",
    "FullTitle": "Rachel Maclean MP"
  },
  {
    "MemberID": "333",
    "FullTitle": "Rt Hon Sir Patrick McLoughlin MP"
  },
  {
    "MemberID": "4569",
    "FullTitle": "Jim McMahon MP"
  },
  {
    "MemberID": "4632",
    "FullTitle": "Anna McMorrin MP"
  },
  {
    "MemberID": "4424",
    "FullTitle": "John McNally MP"
  },
  {
    "MemberID": "1546",
    "FullTitle": "Angus Brendan MacNeil MP"
  },
  {
    "MemberID": "4093",
    "FullTitle": "Stephen McPartland MP"
  },
  {
    "MemberID": "4084",
    "FullTitle": "Rt Hon Esther McVey MP"
  },
  {
    "MemberID": "4418",
    "FullTitle": "Justin Madders MP"
  },
  {
    "MemberID": "1392",
    "FullTitle": "Mr Khalid Mahmood MP"
  },
  {
    "MemberID": "3914",
    "FullTitle": "Shabana Mahmood MP"
  },
  {
    "MemberID": "1568",
    "FullTitle": "Mrs Anne Main MP"
  },
  {
    "MemberID": "4484",
    "FullTitle": "Alan Mak MP"
  },
  {
    "MemberID": "4253",
    "FullTitle": "Seema Malhotra MP"
  },
  {
    "MemberID": "4495",
    "FullTitle": "Kit Malthouse MP"
  },
  {
    "MemberID": "1387",
    "FullTitle": "John Mann MP"
  },
  {
    "MemberID": "4496",
    "FullTitle": "Scott Mann MP"
  },
  {
    "MemberID": "465",
    "FullTitle": "Gordon Marsden MP"
  },
  {
    "MemberID": "4678",
    "FullTitle": "Sandy Martin MP"
  },
  {
    "MemberID": "4471",
    "FullTitle": "Rachael Maskell MP"
  },
  {
    "MemberID": "4245",
    "FullTitle": "Paul Maskey MP"
  },
  {
    "MemberID": "4625",
    "FullTitle": "Paul Masterton MP"
  },
  {
    "MemberID": "4408",
    "FullTitle": "Christian Matheson MP"
  },
  {
    "MemberID": "8",
    "FullTitle": "Rt Hon Theresa May MP"
  },
  {
    "MemberID": "3926",
    "FullTitle": "Paul Maynard MP"
  },
  {
    "MemberID": "4000",
    "FullTitle": "Ian Mearns MP"
  },
  {
    "MemberID": "3998",
    "FullTitle": "Mark Menzies MP"
  },
  {
    "MemberID": "4485",
    "FullTitle": "Johnny Mercer MP"
  },
  {
    "MemberID": "4442",
    "FullTitle": "Huw Merriman MP"
  },
  {
    "MemberID": "4092",
    "FullTitle": "Stephen Metcalfe MP"
  },
  {
    "MemberID": "1510",
    "FullTitle": "Rt Hon Edward Miliband MP"
  },
  {
    "MemberID": "1480",
    "FullTitle": "Rt Hon Maria Miller MP"
  },
  {
    "MemberID": "4454",
    "FullTitle": "Amanda Milling MP"
  },
  {
    "MemberID": "4136",
    "FullTitle": "Nigel Mills MP"
  },
  {
    "MemberID": "1523",
    "FullTitle": "Rt Hon Anne Milton MP"
  },
  {
    "MemberID": "1211",
    "FullTitle": "Rt Hon Andrew Mitchell MP"
  },
  {
    "MemberID": "4274",
    "FullTitle": "Francie Molloy MP"
  },
  {
    "MemberID": "4443",
    "FullTitle": "Carol Monaghan MP"
  },
  {
    "MemberID": "1490",
    "FullTitle": "Mrs Madeleine Moon MP"
  },
  {
    "MemberID": "4669",
    "FullTitle": "Damien Moore MP"
  },
  {
    "MemberID": "4656",
    "FullTitle": "Layla Moran MP"
  },
  {
    "MemberID": "4017",
    "FullTitle": "Rt Hon Penny Mordaunt MP"
  },
  {
    "MemberID": "1548",
    "FullTitle": "Jessica Morden MP"
  },
  {
    "MemberID": "4027",
    "FullTitle": "Rt Hon Nicky Morgan MP"
  },
  {
    "MemberID": "4653",
    "FullTitle": "Stephen Morgan MP"
  },
  {
    "MemberID": "4249",
    "FullTitle": "Anne Marie Morris MP"
  },
  {
    "MemberID": "4135",
    "FullTitle": "David Morris MP"
  },
  {
    "MemberID": "3973",
    "FullTitle": "Grahame Morris MP"
  },
  {
    "MemberID": "3992",
    "FullTitle": "James Morris MP"
  },
  {
    "MemberID": "4358",
    "FullTitle": "Wendy Morton MP"
  },
  {
    "MemberID": "1512",
    "FullTitle": "Rt Hon David Mundell MP"
  },
  {
    "MemberID": "3966",
    "FullTitle": "Ian Murray MP"
  },
  {
    "MemberID": "4100",
    "FullTitle": "Mrs Sheryll Murray MP"
  },
  {
    "MemberID": "1466",
    "FullTitle": "Dr Andrew Murrison MP"
  },
  {
    "MemberID": "4082",
    "FullTitle": "Lisa Nandy MP"
  },
  {
    "MemberID": "1601",
    "FullTitle": "Robert Neill MP"
  },
  {
    "MemberID": "4420",
    "FullTitle": "Gavin Newlands MP"
  },
  {
    "MemberID": "4071",
    "FullTitle": "Sarah Newton MP"
  },
  {
    "MemberID": "4048",
    "FullTitle": "Rt Hon Caroline Nokes MP"
  },
  {
    "MemberID": "3991",
    "FullTitle": "Jesse Norman MP"
  },
  {
    "MemberID": "4641",
    "FullTitle": "Alex Norris MP"
  },
  {
    "MemberID": "4679",
    "FullTitle": "Neil O'Brien MP"
  },
  {
    "MemberID": "4006",
    "FullTitle": "Dr Matthew Offord MP"
  },
  {
    "MemberID": "4371",
    "FullTitle": "Brendan O'Hara MP"
  },
  {
    "MemberID": "4661",
    "FullTitle": "Jared O'Mara MP"
  },
  {
    "MemberID": "4629",
    "FullTitle": "Fiona Onasanya MP"
  },
  {
    "MemberID": "4464",
    "FullTitle": "Melanie Onn MP"
  },
  {
    "MemberID": "4124",
    "FullTitle": "Chi Onwurah MP"
  },
  {
    "MemberID": "4142",
    "FullTitle": "Guy Opperman MP"
  },
  {
    "MemberID": "4515",
    "FullTitle": "Kate Osamor MP"
  },
  {
    "MemberID": "1474",
    "FullTitle": "Albert Owen MP"
  },
  {
    "MemberID": "4129",
    "FullTitle": "Ian Paisley MP"
  },
  {
    "MemberID": "4072",
    "FullTitle": "Neil Parish MP"
  },
  {
    "MemberID": "4066",
    "FullTitle": "Rt Hon Priti Patel MP"
  },
  {
    "MemberID": "274",
    "FullTitle": "Rt Hon Owen Paterson MP"
  },
  {
    "MemberID": "4052",
    "FullTitle": "Mark Pawsey MP"
  },
  {
    "MemberID": "4607",
    "FullTitle": "Stephanie Peacock MP"
  },
  {
    "MemberID": "4003",
    "FullTitle": "Teresa Pearce MP"
  },
  {
    "MemberID": "1528",
    "FullTitle": "Rt Hon Sir Mike Penning MP"
  },
  {
    "MemberID": "4520",
    "FullTitle": "Matthew Pennycook MP"
  },
  {
    "MemberID": "1584",
    "FullTitle": "John Penrose MP"
  },
  {
    "MemberID": "3939",
    "FullTitle": "Andrew Percy MP"
  },
  {
    "MemberID": "3952",
    "FullTitle": "Toby Perkins MP"
  },
  {
    "MemberID": "3974",
    "FullTitle": "Rt Hon Claire Perry MP"
  },
  {
    "MemberID": "4370",
    "FullTitle": "Jess Phillips MP"
  },
  {
    "MemberID": "4046",
    "FullTitle": "Bridget Phillipson MP"
  },
  {
    "MemberID": "4503",
    "FullTitle": "Chris Philp MP"
  },
  {
    "MemberID": "4665",
    "FullTitle": "Laura Pidcock MP"
  },
  {
    "MemberID": "4075",
    "FullTitle": "Rt Hon Christopher Pincher MP"
  },
  {
    "MemberID": "4673",
    "FullTitle": "Jo Platt MP"
  },
  {
    "MemberID": "4682",
    "FullTitle": "Luke Pollard MP"
  },
  {
    "MemberID": "3932",
    "FullTitle": "Dr Dan Poulter MP"
  },
  {
    "MemberID": "161",
    "FullTitle": "Stephen Pound MP"
  },
  {
    "MemberID": "4522",
    "FullTitle": "Rebecca Pow MP"
  },
  {
    "MemberID": "4263",
    "FullTitle": "Lucy Powell MP"
  },
  {
    "MemberID": "4401",
    "FullTitle": "Victoria Prentis MP"
  },
  {
    "MemberID": "1424",
    "FullTitle": "Mr Mark Prisk MP"
  },
  {
    "MemberID": "1576",
    "FullTitle": "Mark Pritchard MP"
  },
  {
    "MemberID": "4369",
    "FullTitle": "Tom Pursglove MP"
  },
  {
    "MemberID": "4507",
    "FullTitle": "Jeremy Quin MP"
  },
  {
    "MemberID": "4423",
    "FullTitle": "Will Quince MP"
  },
  {
    "MemberID": "3924",
    "FullTitle": "Yasmin Qureshi MP"
  },
  {
    "MemberID": "4007",
    "FullTitle": "Rt Hon Dominic Raab MP"
  },
  {
    "MemberID": "4670",
    "FullTitle": "Faisal Rashid MP"
  },
  {
    "MemberID": "4356",
    "FullTitle": "Angela Rayner MP"
  },
  {
    "MemberID": "14",
    "FullTitle": "Rt Hon John Redwood MP"
  },
  {
    "MemberID": "4268",
    "FullTitle": "Mr Steve Reed MP"
  },
  {
    "MemberID": "4525",
    "FullTitle": "Christina Rees MP"
  },
  {
    "MemberID": "4099",
    "FullTitle": "Mr Jacob Rees-Mogg MP"
  },
  {
    "MemberID": "4620",
    "FullTitle": "Ellie Reeves MP"
  },
  {
    "MemberID": "4031",
    "FullTitle": "Rachel Reeves MP"
  },
  {
    "MemberID": "4077",
    "FullTitle": "Emma Reynolds MP"
  },
  {
    "MemberID": "4119",
    "FullTitle": "Jonathan Reynolds MP"
  },
  {
    "MemberID": "4457",
    "FullTitle": "Ms Marie Rimmer MP"
  },
  {
    "MemberID": "253",
    "FullTitle": "Mr Laurence Robertson MP"
  },
  {
    "MemberID": "4360",
    "FullTitle": "Gavin Robinson MP"
  },
  {
    "MemberID": "307",
    "FullTitle": "Mr Geoffrey Robinson MP"
  },
  {
    "MemberID": "4406",
    "FullTitle": "Mary Robinson MP"
  },
  {
    "MemberID": "4654",
    "FullTitle": "Matt Rodda MP"
  },
  {
    "MemberID": "1447",
    "FullTitle": "Andrew Rosindell MP"
  },
  {
    "MemberID": "4627",
    "FullTitle": "Douglas Ross MP"
  },
  {
    "MemberID": "4628",
    "FullTitle": "Danielle Rowley MP"
  },
  {
    "MemberID": "4652",
    "FullTitle": "Lee Rowley MP"
  },
  {
    "MemberID": "534",
    "FullTitle": "Chris Ruane MP"
  },
  {
    "MemberID": "3983",
    "FullTitle": "Rt Hon Amber Rudd MP"
  },
  {
    "MemberID": "4615",
    "FullTitle": "Lloyd Russell-Moyle MP"
  },
  {
    "MemberID": "4033",
    "FullTitle": "David Rutley MP"
  },
  {
    "MemberID": "166",
    "FullTitle": "Rt Hon Joan Ryan MP"
  },
  {
    "MemberID": "4506",
    "FullTitle": "Antoinette Sandbach MP"
  },
  {
    "MemberID": "4521",
    "FullTitle": "Liz Saville Roberts MP"
  },
  {
    "MemberID": "4414",
    "FullTitle": "Paul Scully MP"
  },
  {
    "MemberID": "4681",
    "FullTitle": "Mr Bob Seely MP"
  },
  {
    "MemberID": "1453",
    "FullTitle": "Andrew Selous MP"
  },
  {
    "MemberID": "4409",
    "FullTitle": "Naz Shah MP"
  },
  {
    "MemberID": "4131",
    "FullTitle": "Jim Shannon MP"
  },
  {
    "MemberID": "1582",
    "FullTitle": "Rt Hon Grant Shapps MP"
  },
  {
    "MemberID": "4014",
    "FullTitle": "Alok Sharma MP"
  },
  {
    "MemberID": "1604",
    "FullTitle": "Mr Virendra Sharma MP"
  },
  {
    "MemberID": "411",
    "FullTitle": "Mr Barry Sheerman MP"
  },
  {
    "MemberID": "3997",
    "FullTitle": "Alec Shelbrooke MP"
  },
  {
    "MemberID": "4453",
    "FullTitle": "Tommy Sheppard MP"
  },
  {
    "MemberID": "4426",
    "FullTitle": "Paula Sherriff MP"
  },
  {
    "MemberID": "4013",
    "FullTitle": "Mr Gavin Shuker MP"
  },
  {
    "MemberID": "4518",
    "FullTitle": "Tulip Siddiq MP"
  },
  {
    "MemberID": "1597",
    "FullTitle": "David Simpson MP"
  },
  {
    "MemberID": "126",
    "FullTitle": "Rt Hon Keith Simpson MP"
  },
  {
    "MemberID": "4021",
    "FullTitle": "Chris Skidmore MP"
  },
  {
    "MemberID": "325",
    "FullTitle": "Mr Dennis Skinner MP"
  },
  {
    "MemberID": "1516",
    "FullTitle": "Andy Slaughter MP"
  },
  {
    "MemberID": "4508",
    "FullTitle": "Ruth Smeeth MP"
  },
  {
    "MemberID": "1564",
    "FullTitle": "Angela Smith MP"
  },
  {
    "MemberID": "4436",
    "FullTitle": "Cat Smith MP"
  },
  {
    "MemberID": "1609",
    "FullTitle": "Chloe Smith MP"
  },
  {
    "MemberID": "4609",
    "FullTitle": "Eleanor Smith MP"
  },
  {
    "MemberID": "3960",
    "FullTitle": "Henry Smith MP"
  },
  {
    "MemberID": "4456",
    "FullTitle": "Jeff Smith MP"
  },
  {
    "MemberID": "4118",
    "FullTitle": "Rt Hon Julian Smith MP"
  },
  {
    "MemberID": "4648",
    "FullTitle": "Laura Smith MP"
  },
  {
    "MemberID": "3928",
    "FullTitle": "Nick Smith MP"
  },
  {
    "MemberID": "4042",
    "FullTitle": "Owen Smith MP"
  },
  {
    "MemberID": "4478",
    "FullTitle": "Royston Smith MP"
  },
  {
    "MemberID": "4444",
    "FullTitle": "Karin Smyth MP"
  },
  {
    "MemberID": "4595",
    "FullTitle": "Gareth Snell MP"
  },
  {
    "MemberID": "116",
    "FullTitle": "Rt Hon Sir Nicholas Soames MP"
  },
  {
    "MemberID": "4658",
    "FullTitle": "Alex Sobel MP"
  },
  {
    "MemberID": "3938",
    "FullTitle": "Rt Hon Anna Soubry MP"
  },
  {
    "MemberID": "318",
    "FullTitle": "Rt Hon John Spellar MP"
  },
  {
    "MemberID": "312",
    "FullTitle": "Rt Hon Dame Caroline Spelman MP"
  },
  {
    "MemberID": "4055",
    "FullTitle": "Mark Spencer MP"
  },
  {
    "MemberID": "4514",
    "FullTitle": "Rt Hon Keir Starmer MP"
  },
  {
    "MemberID": "4463",
    "FullTitle": "Chris Stephens MP"
  },
  {
    "MemberID": "4044",
    "FullTitle": "Andrew Stephenson MP"
  },
  {
    "MemberID": "4425",
    "FullTitle": "Jo Stevens MP"
  },
  {
    "MemberID": "3942",
    "FullTitle": "John Stevenson MP"
  },
  {
    "MemberID": "3919",
    "FullTitle": "Bob Stewart MP"
  },
  {
    "MemberID": "4015",
    "FullTitle": "Iain Stewart MP"
  },
  {
    "MemberID": "4137",
    "FullTitle": "Rory Stewart MP"
  },
  {
    "MemberID": "4612",
    "FullTitle": "Jamie Stone MP"
  },
  {
    "MemberID": "234",
    "FullTitle": "Sir Gary Streeter MP"
  },
  {
    "MemberID": "4504",
    "FullTitle": "Wes Streeting MP"
  },
  {
    "MemberID": "3935",
    "FullTitle": "Rt Hon Mel Stride MP"
  },
  {
    "MemberID": "449",
    "FullTitle": "Graham Stringer MP"
  },
  {
    "MemberID": "1482",
    "FullTitle": "Graham Stuart MP"
  },
  {
    "MemberID": "4079",
    "FullTitle": "Julian Sturdy MP"
  },
  {
    "MemberID": "4483",
    "FullTitle": "Rishi Sunak MP"
  },
  {
    "MemberID": "55",
    "FullTitle": "Rt Hon Sir Desmond Swayne MP"
  },
  {
    "MemberID": "4642",
    "FullTitle": "Mr Paul Sweeney MP"
  },
  {
    "MemberID": "1513",
    "FullTitle": "Jo Swinson MP"
  },
  {
    "MemberID": "1408",
    "FullTitle": "Rt Hon Sir Hugo Swire MP"
  },
  {
    "MemberID": "245",
    "FullTitle": "Sir Robert Syms MP"
  },
  {
    "MemberID": "1383",
    "FullTitle": "Rt Hon Mark Tami MP"
  },
  {
    "MemberID": "4430",
    "FullTitle": "Alison Thewliss MP"
  },
  {
    "MemberID": "4532",
    "FullTitle": "Derek Thomas MP"
  },
  {
    "MemberID": "177",
    "FullTitle": "Gareth Thomas MP"
  },
  {
    "MemberID": "4479",
    "FullTitle": "Nick Thomas-Symonds MP"
  },
  {
    "MemberID": "4599",
    "FullTitle": "Ross Thomson MP"
  },
  {
    "MemberID": "1536",
    "FullTitle": "Rt Hon Emily Thornberry MP"
  },
  {
    "MemberID": "4447",
    "FullTitle": "Maggie Throup MP"
  },
  {
    "MemberID": "163",
    "FullTitle": "Rt Hon Stephen Timms MP"
  },
  {
    "MemberID": "4487",
    "FullTitle": "Kelly Tolhurst MP"
  },
  {
    "MemberID": "4105",
    "FullTitle": "Justin Tomlinson MP"
  },
  {
    "MemberID": "4497",
    "FullTitle": "Michael Tomlinson MP"
  },
  {
    "MemberID": "4509",
    "FullTitle": "Craig Tracey MP"
  },
  {
    "MemberID": "335",
    "FullTitle": "David Tredinnick MP"
  },
  {
    "MemberID": "4531",
    "FullTitle": "Anne-Marie Trevelyan MP"
  },
  {
    "MemberID": "410",
    "FullTitle": "Jon Trickett MP"
  },
  {
    "MemberID": "4097",
    "FullTitle": "Rt Hon Elizabeth Truss MP"
  },
  {
    "MemberID": "4462",
    "FullTitle": "Tom Tugendhat MP"
  },
  {
    "MemberID": "4449",
    "FullTitle": "Anna Turley MP"
  },
  {
    "MemberID": "4030",
    "FullTitle": "Karl Turner MP"
  },
  {
    "MemberID": "429",
    "FullTitle": "Derek Twigg MP"
  },
  {
    "MemberID": "167",
    "FullTitle": "Stephen Twigg MP"
  },
  {
    "MemberID": "4618",
    "FullTitle": "Liz Twist MP"
  },
  {
    "MemberID": "4128",
    "FullTitle": "Chuka Umunna MP"
  },
  {
    "MemberID": "1580",
    "FullTitle": "Rt Hon Edward Vaizey MP"
  },
  {
    "MemberID": "1496",
    "FullTitle": "Mr Shailesh Vara MP"
  },
  {
    "MemberID": "338",
    "FullTitle": "Rt Hon Keith Vaz MP"
  },
  {
    "MemberID": "4076",
    "FullTitle": "Valerie Vaz MP"
  },
  {
    "MemberID": "3957",
    "FullTitle": "Martin Vickers MP"
  },
  {
    "MemberID": "1500",
    "FullTitle": "Rt Hon Theresa Villiers MP"
  },
  {
    "MemberID": "1493",
    "FullTitle": "Mr Charles Walker MP"
  },
  {
    "MemberID": "4091",
    "FullTitle": "Mr Robin Walker MP"
  },
  {
    "MemberID": "4649",
    "FullTitle": "Thelma Walker MP"
  },
  {
    "MemberID": "1539",
    "FullTitle": "Rt Hon Ben Wallace MP"
  },
  {
    "MemberID": "4526",
    "FullTitle": "David Warburton MP"
  },
  {
    "MemberID": "4361",
    "FullTitle": "Matt Warman MP"
  },
  {
    "MemberID": "4677",
    "FullTitle": "Giles Watling MP"
  },
  {
    "MemberID": "1463",
    "FullTitle": "Tom Watson MP"
  },
  {
    "MemberID": "4523",
    "FullTitle": "Catherine West MP"
  },
  {
    "MemberID": "4617",
    "FullTitle": "Matt Western MP"
  },
  {
    "MemberID": "4527",
    "FullTitle": "Helen Whately MP"
  },
  {
    "MemberID": "4053",
    "FullTitle": "Mrs Heather Wheeler MP"
  },
  {
    "MemberID": "62",
    "FullTitle": "Dr Alan Whitehead MP"
  },
  {
    "MemberID": "4626",
    "FullTitle": "Martin Whitfield MP"
  },
  {
    "MemberID": "4385",
    "FullTitle": "Dr Philippa Whitford MP"
  },
  {
    "MemberID": "3940",
    "FullTitle": "Craig Whittaker MP"
  },
  {
    "MemberID": "39",
    "FullTitle": "Rt Hon John Whittingdale MP"
  },
  {
    "MemberID": "1428",
    "FullTitle": "Bill Wiggin MP"
  },
  {
    "MemberID": "1397",
    "FullTitle": "Hywel Williams MP"
  },
  {
    "MemberID": "4666",
    "FullTitle": "Dr Paul Williams MP"
  },
  {
    "MemberID": "3976",
    "FullTitle": "Chris Williamson MP"
  },
  {
    "MemberID": "4108",
    "FullTitle": "Rt Hon Gavin Williamson MP"
  },
  {
    "MemberID": "1603",
    "FullTitle": "Phil Wilson MP"
  },
  {
    "MemberID": "1593",
    "FullTitle": "Rt Hon Sammy Wilson MP"
  },
  {
    "MemberID": "390",
    "FullTitle": "Rt Hon Dame Rosie Winterton MP"
  },
  {
    "MemberID": "1440",
    "FullTitle": "Pete Wishart MP"
  },
  {
    "MemberID": "4073",
    "FullTitle": "Dr Sarah Wollaston MP"
  },
  {
    "MemberID": "4384",
    "FullTitle": "Mike Wood MP"
  },
  {
    "MemberID": "3917",
    "FullTitle": "John Woodcock MP"
  },
  {
    "MemberID": "4429",
    "FullTitle": "Mr William Wragg MP"
  },
  {
    "MemberID": "1560",
    "FullTitle": "Rt Hon Jeremy Wright QC MP"
  },
  {
    "MemberID": "4598",
    "FullTitle": "Mohammad Yasin MP"
  },
  {
    "MemberID": "4113",
    "FullTitle": "Nadhim Zahawi MP"
  },
  {
    "MemberID": "4382",
    "FullTitle": "Daniel Zeichner MP"
  }
]
)})
    },
    {
      name: "ethnic_MPs_names_array_alt_source",
      value: (function(){return(
["Tulip Siddiq","Rupa Huq","Dawn Butler","Diane Abbott","David Lammy","Mark Hendrick","Vireda Sharma","Rushnara Ali","Shabana Mahmood","Lisa Nandy","Chuka Ummuna","Chi Onwurah","Yasmin Qureshi","Keith Vaz","Khalid Mahmood","Seema Malhotra","Kate Osamor","Naz Shah","Valerie Vaz","Clive Lewis","Imran Hussain","Thangnam Debbonaire","Rosena Allin-Khan","Eleanor Smith","Preet Gill","Tan Dhesi","Afzal Khan","Mohammad Yasin","Marsha de Cordova","Fiona Onasanya","Faisal Rashid","Bambos Charalambos","Adam Afriye","Shailesh Vara","Nadim Zahawi","Sam Gyimah","Priti Patel","Sajid Javid","Kwasi Kwarteng","Helen Grant","Rehman Chisti","Ranil Jayawardena","Nusrat Ghani","Suella Fernandes","Rishi Sunak","James Cleverly","Alan Mak","Alok Sharma","Seema Kennedy","Kemi Badenoch","Bim Alofami","Layla Moran"]
)})
    },
    {

    },
    {
      name: "lords_data_uncached",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">🏰</span> Lords <small>(from machine readable sources)</small>
*From verified and authoratative sources, including : [parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Lords%7CIsEligible=true/) & [en.wikipedia.org](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom)*

---`
)})
    },
    {
      name: "lords_uncached_data_version",
      value: (function(){return(
"1.0.0"
)})
    },
    {
      name: "lords",
      inputs: ["fastXmlParser","yearsSinceDateString","partyNameMap"],
      value: (async function(fastXmlParser,yearsSinceDateString,partyNameMap){return(
(fastXmlParser.parse(await (await fetch(
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
      name: "lords_combined",
      inputs: ["lords"],
      value: (function(lords){return(
lords
)})
    },
    {
      name: "ethnic_lords_found_in_lords",
      inputs: ["lords_combined"],
      value: (function(lords_combined){return(
lords_combined.filter(lord => lord.Ethnicity && !lord.Ethnicity.includes('Caucasion'))
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
      inputs: ["lords_combined"],
      value: (function(lords_combined){return(
lords_combined.filter(lord => lord.LGBT)
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
      inputs: ["letTheLightIn","ethnicNamesMap"],
      value: (async function(letTheLightIn,ethnicNamesMap){return(
Array.from(
(new window.DOMParser()).parseFromString(
  await letTheLightIn(
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
      inputs: ["letTheLightIn","LGBTNamesMap"],
      value: (async function(letTheLightIn,LGBTNamesMap){return(
Array.from(
(new window.DOMParser()).parseFromString(
  await letTheLightIn(
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
      name: "lords_data_manually_collated",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">🏰</span> Lords <small>(manually collated)</small>
*From verified and authoratative sources. See below for a full list of sources.*

*This dataset is included in order to facilitate collaborative collation and correction of data from disperate, verified sources, that are not practically machine readable. Once verified, data added here will be merged into the cached combined source above. Once you're done adding data, see the [Fork & Merge](https://beta.observablehq.com/@observablehq/fork-share-merge) process for details on how to get your work included into the data sets used in the Emojiocracy visualisations.*

---`
)})
    },
    {
      name: "how_to_manually_collate_lords_data",
      inputs: ["md"],
      value: (function(md){return(
md`##### ** How To Manually Collate & Contribute Lords Data **
*Copy all of the [lords_manually_collated_data_template](#lords_manually_collated_data_template) cell below to a new Observable cell, rename the variable assigned, 
 then add the new property to each Lord as shown below...<br>
(change the name of "NewProperty" & "NewPropertySourceURL",* 🤦 *obvs!)*:
 <pre>
lords_manually_collated_example = [
  {
    "MemberID": "3898",
    "FullTitle": "The Lord Aberdare",
    "NewProperty": "Bla bla",
    "NewPropertySourceURL": "http://example.com..."
  },...
]</pre>
`
)})
    },
    {
      name: "lords_manually_collated_data_template",
      value: (function(){return(
[
  {
    "MemberID": "3898",
    "FullTitle": "The Lord Aberdare"
  },
  {
    "MemberID": "631",
    "FullTitle": "The Baroness Adams of Craigielea"
  },
  {
    "MemberID": "3453",
    "FullTitle": "The Lord Addington"
  },
  {
    "MemberID": "2175",
    "FullTitle": "The Lord Adebowale CBE"
  },
  {
    "MemberID": "3743",
    "FullTitle": "The Rt Hon. the Lord Adonis"
  },
  {
    "MemberID": "3847",
    "FullTitle": "The Baroness Afshar OBE"
  },
  {
    "MemberID": "4689",
    "FullTitle": "The Lord Agnew of Oulton DL"
  },
  {
    "MemberID": "4210",
    "FullTitle": "The Lord Ahmad of Wimbledon"
  },
  {
    "MemberID": "3470",
    "FullTitle": "The Lord Ahmed"
  },
  {
    "MemberID": "3478",
    "FullTitle": "The Lord Alderdice"
  },
  {
    "MemberID": "397",
    "FullTitle": "The Lord Allan of Hallam"
  },
  {
    "MemberID": "4304",
    "FullTitle": "The Lord Allen of Kensington CBE"
  },
  {
    "MemberID": "3482",
    "FullTitle": "The Lord Alli"
  },
  {
    "MemberID": "3710",
    "FullTitle": "The Lord Alliance CBE"
  },
  {
    "MemberID": "4533",
    "FullTitle": "The Baroness Altmann CBE"
  },
  {
    "MemberID": "738",
    "FullTitle": "The Lord Alton of Liverpool"
  },
  {
    "MemberID": "3477",
    "FullTitle": "The Rt Hon. the Baroness Amos"
  },
  {
    "MemberID": "4705",
    "FullTitle": "The  Lord Anderson of Ipswich KBE, QC"
  },
  {
    "MemberID": "568",
    "FullTitle": "The Rt Hon. the Lord Anderson of Swansea"
  },
  {
    "MemberID": "2534",
    "FullTitle": "The Baroness Andrews OBE"
  },
  {
    "MemberID": "3474",
    "FullTitle": "The Rt Hon. the Baroness Anelay of St Johns DBE"
  },
  {
    "MemberID": "56",
    "FullTitle": "The Rt Hon. the Lord Arbuthnot of Edrom"
  },
  {
    "MemberID": "1612",
    "FullTitle": "The Lord Archer of Weston-Super-Mare"
  },
  {
    "MemberID": "4150",
    "FullTitle": "The Rt Hon. the Baroness Armstrong of Hill Top"
  },
  {
    "MemberID": "3434",
    "FullTitle": "The Lord Armstrong of Ilminster GCB CVO"
  },
  {
    "MemberID": "3433",
    "FullTitle": "The Earl of Arran"
  },
  {
    "MemberID": "4247",
    "FullTitle": "The Lord Ashton of Hyde"
  },
  {
    "MemberID": "3429",
    "FullTitle": "The Viscount Astor"
  },
  {
    "MemberID": "3428",
    "FullTitle": "The Rt Hon. the Lord Astor of Hever DL"
  },
  {
    "MemberID": "3425",
    "FullTitle": "The Earl Attlee"
  },
  {
    "MemberID": "3451",
    "FullTitle": "The Lord Bach"
  },
  {
    "MemberID": "1028",
    "FullTitle": "The Rt Hon. the Lord Baker of Dorking CH"
  },
  {
    "MemberID": "4223",
    "FullTitle": "The Baroness Bakewell DBE"
  },
  {
    "MemberID": "4285",
    "FullTitle": "The Baroness Bakewell of Hardington Mandeville MBE"
  },
  {
    "MemberID": "4302",
    "FullTitle": "The Lord Balfe"
  },
  {
    "MemberID": "4305",
    "FullTitle": "The Lord Bamford DL"
  },
  {
    "MemberID": "2501",
    "FullTitle": "The Baroness Barker"
  },
  {
    "MemberID": "1389",
    "FullTitle": "The Rt Hon. the Lord Barker of Battle"
  },
  {
    "MemberID": "4703",
    "FullTitle": "The Baroness Barran MBE"
  },
  {
    "MemberID": "3504",
    "FullTitle": "The Rt Hon. the Lord Bassam of Brighton"
  },
  {
    "MemberID": "1091",
    "FullTitle": "The Rt Hon. the Lord Bates"
  },
  {
    "MemberID": "4181",
    "FullTitle": "The Lord Beecham"
  },
  {
    "MemberID": "513",
    "FullTitle": "The Rt Hon. the Lord Beith"
  },
  {
    "MemberID": "3531",
    "FullTitle": "The Lord Bell"
  },
  {
    "MemberID": "4167",
    "FullTitle": "The Baroness Benjamin OBE"
  },
  {
    "MemberID": "3526",
    "FullTitle": "The Lord Berkeley OBE"
  },
  {
    "MemberID": "4276",
    "FullTitle": "The Lord Berkeley of Knighton CBE"
  },
  {
    "MemberID": "4218",
    "FullTitle": "The Baroness Berridge"
  },
  {
    "MemberID": "4577",
    "FullTitle": "The Baroness Bertin"
  },
  {
    "MemberID": "3605",
    "FullTitle": "The Lord Best OBE DL"
  },
  {
    "MemberID": "4708",
    "FullTitle": "The Lord Bethell"
  },
  {
    "MemberID": "3832",
    "FullTitle": "The Lord Bew"
  },
  {
    "MemberID": "2165",
    "FullTitle": "The Lord Bhatia OBE"
  },
  {
    "MemberID": "3672",
    "FullTitle": "The Lord Bhattacharyya CBE"
  },
  {
    "MemberID": "3863",
    "FullTitle": "The Lord Bichard KCB"
  },
  {
    "MemberID": "3809",
    "FullTitle": "The Lord Bilimoria CBE DL"
  },
  {
    "MemberID": "2538",
    "FullTitle": "The Baroness Billingham JP"
  },
  {
    "MemberID": "4564",
    "FullTitle": "The Lord Bird MBE"
  },
  {
    "MemberID": "4187",
    "FullTitle": "The Rt Rev. the Lord Bishop of Birmingham"
  },
  {
    "MemberID": "2533",
    "FullTitle": "The Lord Birt"
  },
  {
    "MemberID": "4171",
    "FullTitle": "The Lord Black of Brentwood"
  },
  {
    "MemberID": "3561",
    "FullTitle": "The Rt Hon. the Baroness Blackstone"
  },
  {
    "MemberID": "3550",
    "FullTitle": "The Lord Blackwell"
  },
  {
    "MemberID": "4182",
    "FullTitle": "The Lord Blair of Boughton QPM"
  },
  {
    "MemberID": "497",
    "FullTitle": "The Rt Hon. the Lord Blencathra"
  },
  {
    "MemberID": "4582",
    "FullTitle": "The Baroness Bloomfield of Hinton Waldrist"
  },
  {
    "MemberID": "395",
    "FullTitle": "The Rt Hon. the Lord Blunkett"
  },
  {
    "MemberID": "147",
    "FullTitle": "The Rt Hon. the Lord Boateng"
  },
  {
    "MemberID": "3699",
    "FullTitle": "The Baroness Bonham-Carter of Yarnbury"
  },
  {
    "MemberID": "679",
    "FullTitle": "The Rt Hon. the Baroness Boothroyd OM"
  },
  {
    "MemberID": "4281",
    "FullTitle": "The Lord Borwick"
  },
  {
    "MemberID": "352",
    "FullTitle": "The Lord Boswell of Aynho"
  },
  {
    "MemberID": "106",
    "FullTitle": "The Rt Hon. the Baroness Bottomley of Nettlestone"
  },
  {
    "MemberID": "4282",
    "FullTitle": "The Lord Bourne of Aberystwyth"
  },
  {
    "MemberID": "4562",
    "FullTitle": "The Baroness Bowles of Berkhamsted"
  },
  {
    "MemberID": "3496",
    "FullTitle": "The Lord Bowness CBE DL"
  },
  {
    "MemberID": "3630",
    "FullTitle": "The Admiral of the Fleet the Lord Boyce KG GCB OBE DL"
  },
  {
    "MemberID": "4704",
    "FullTitle": "The Baroness Boycott"
  },
  {
    "MemberID": "3493",
    "FullTitle": "The Rt Hon. the Lord Brabazon of Tara DL"
  },
  {
    "MemberID": "452",
    "FullTitle": "The Rt Hon. the Lord Bradley"
  },
  {
    "MemberID": "2483",
    "FullTitle": "The Lord Bradshaw"
  },
  {
    "MemberID": "4339",
    "FullTitle": "The Baroness Brady CBE"
  },
  {
    "MemberID": "3514",
    "FullTitle": "The Lord Bragg CH"
  },
  {
    "MemberID": "2550",
    "FullTitle": "The Lord Brennan QC"
  },
  {
    "MemberID": "3515",
    "FullTitle": "The Viscount Bridgeman"
  },
  {
    "MemberID": "4535",
    "FullTitle": "The Lord Bridges of Headley MBE"
  },
  {
    "MemberID": "4241",
    "FullTitle": "The Baroness Brinton"
  },
  {
    "MemberID": "4709",
    "FullTitle": "The Rt Rev. the Lord Bishop of Bristol"
  },
  {
    "MemberID": "3695",
    "FullTitle": "The Lord Broers"
  },
  {
    "MemberID": "3335",
    "FullTitle": "The Lord Brooke of Alverthorpe"
  },
  {
    "MemberID": "3333",
    "FullTitle": "The Viscount Brookeborough DL"
  },
  {
    "MemberID": "3331",
    "FullTitle": "The Lord Brookman"
  },
  {
    "MemberID": "3329",
    "FullTitle": "The Lord Brougham and Vaux CBE"
  },
  {
    "MemberID": "4565",
    "FullTitle": "The Baroness Brown of Cambridge DBE FREng FRS"
  },
  {
    "MemberID": "3654",
    "FullTitle": "The Rt Hon. the Lord Brown of Eaton-under-Heywood"
  },
  {
    "MemberID": "3801",
    "FullTitle": "The Lord Browne of Belmont"
  },
  {
    "MemberID": "620",
    "FullTitle": "The Rt Hon. the Lord Browne of Ladyton"
  },
  {
    "MemberID": "236",
    "FullTitle": "The Baroness Browning"
  },
  {
    "MemberID": "615",
    "FullTitle": "The Rt Hon. the Lord Bruce of Bennachie"
  },
  {
    "MemberID": "4701",
    "FullTitle": "The Baroness Bryan of Partick"
  },
  {
    "MemberID": "4706",
    "FullTitle": "The Baroness Bull CBE"
  },
  {
    "MemberID": "238",
    "FullTitle": "The Lord Burnett"
  },
  {
    "MemberID": "3351",
    "FullTitle": "The Lord Burns GCB"
  },
  {
    "MemberID": "1567",
    "FullTitle": "The Baroness Burt of Solihull"
  },
  {
    "MemberID": "3349",
    "FullTitle": "The Baroness Buscombe"
  },
  {
    "MemberID": "3337",
    "FullTitle": "The Rt Hon. the Lord Butler of Brockwell KG GCB CVO"
  },
  {
    "MemberID": "3804",
    "FullTitle": "The Rt Hon. the Baroness Butler-Sloss GBE"
  },
  {
    "MemberID": "3343",
    "FullTitle": "The Baroness Byford DBE"
  },
  {
    "MemberID": "4581",
    "FullTitle": "The Lord Caine"
  },
  {
    "MemberID": "3310",
    "FullTitle": "The Rt Hon. the Earl of Caithness"
  },
  {
    "MemberID": "4336",
    "FullTitle": "The Lord Callanan"
  },
  {
    "MemberID": "3705",
    "FullTitle": "The Lord Cameron of Dillington"
  },
  {
    "MemberID": "3871",
    "FullTitle": "The Baroness Campbell of Loughborough CBE"
  },
  {
    "MemberID": "627",
    "FullTitle": "The Rt Hon. the Lord Campbell of Pittenweem CH CBE QC"
  },
  {
    "MemberID": "3831",
    "FullTitle": "The Baroness Campbell of Surbiton"
  },
  {
    "MemberID": "499",
    "FullTitle": "The Lord Campbell-Savours"
  },
  {
    "MemberID": "4252",
    "FullTitle": "The Most Rev. and the Rt Hon. the Lord Archbishop of Canterbury"
  },
  {
    "MemberID": "2205",
    "FullTitle": "The Rt Rev. and the Rt Hon. the Lord Carey of Clifton"
  },
  {
    "MemberID": "1138",
    "FullTitle": "The Lord Carlile of Berriew CBE QC"
  },
  {
    "MemberID": "4307",
    "FullTitle": "The Rt Rev. the Lord Bishop of Carlisle"
  },
  {
    "MemberID": "4712",
    "FullTitle": "The Lord Carrington"
  },
  {
    "MemberID": "1206",
    "FullTitle": "The Lord Carrington of Fulham"
  },
  {
    "MemberID": "3653",
    "FullTitle": "The Rt Hon. the Lord Carswell"
  },
  {
    "MemberID": "3868",
    "FullTitle": "The Lord Carter of Barnes CBE"
  },
  {
    "MemberID": "3680",
    "FullTitle": "The Lord Carter of Coles"
  },
  {
    "MemberID": "4340",
    "FullTitle": "The Lord Cashman CBE"
  },
  {
    "MemberID": "2463",
    "FullTitle": "The Earl Cathcart"
  },
  {
    "MemberID": "3312",
    "FullTitle": "The Lord Cavendish of Furness DL"
  },
  {
    "MemberID": "4578",
    "FullTitle": "The Baroness Cavendish of Little Venice"
  },
  {
    "MemberID": "3318",
    "FullTitle": "The Lord Chadlington"
  },
  {
    "MemberID": "4579",
    "FullTitle": "The Baroness Chakrabarti CBE"
  },
  {
    "MemberID": "778",
    "FullTitle": "The Rt Hon. the Baroness Chalker of Wallasey"
  },
  {
    "MemberID": "3308",
    "FullTitle": "The Viscount Chandos"
  },
  {
    "MemberID": "1946",
    "FullTitle": "The Rt Rev. and the Rt Hon. Lord Chartres KCVO"
  },
  {
    "MemberID": "4315",
    "FullTitle": "The Rt Rev. the Lord Bishop of Chelmsford"
  },
  {
    "MemberID": "3616",
    "FullTitle": "The Rt Rev. the Lord Bishop of Chester"
  },
  {
    "MemberID": "4695",
    "FullTitle": "The Rt Rev. the Lord Bishop of Chichester"
  },
  {
    "MemberID": "50",
    "FullTitle": "The Lord Chidgey"
  },
  {
    "MemberID": "4330",
    "FullTitle": "The Baroness Chisholm of Owlpen"
  },
  {
    "MemberID": "3395",
    "FullTitle": "The Lord Christopher CBE"
  },
  {
    "MemberID": "3391",
    "FullTitle": "The Earl of Clancarty"
  },
  {
    "MemberID": "525",
    "FullTitle": "The Rt Hon. the Lord Clark of Windermere"
  },
  {
    "MemberID": "3413",
    "FullTitle": "The Lord Clarke of Hampstead CBE"
  },
  {
    "MemberID": "3890",
    "FullTitle": "The Rt Hon. the Lord Clarke of Stone-cum-Ebony"
  },
  {
    "MemberID": "3396",
    "FullTitle": "The Lord Clement-Jones CBE"
  },
  {
    "MemberID": "783",
    "FullTitle": "The Lord Coe CH KBE"
  },
  {
    "MemberID": "2535",
    "FullTitle": "The Baroness Cohen of Pimlico"
  },
  {
    "MemberID": "4596",
    "FullTitle": "The Lord Colgrain DL"
  },
  {
    "MemberID": "4222",
    "FullTitle": "The Lord Collins of Highbury"
  },
  {
    "MemberID": "3886",
    "FullTitle": "The Rt Hon. the Lord Collins of Mapesbury"
  },
  {
    "MemberID": "4248",
    "FullTitle": "The Viscount Colville of Culross"
  },
  {
    "MemberID": "3394",
    "FullTitle": "The Lord Colwyn CBE"
  },
  {
    "MemberID": "4327",
    "FullTitle": "The Lord Cooper of Windrush"
  },
  {
    "MemberID": "787",
    "FullTitle": "The Rt Hon. the Lord Cope of Berkeley"
  },
  {
    "MemberID": "4574",
    "FullTitle": "The Earl of Cork and Orrery"
  },
  {
    "MemberID": "282",
    "FullTitle": "The Lord Cormack"
  },
  {
    "MemberID": "215",
    "FullTitle": "The Rt Hon. the Baroness Corston"
  },
  {
    "MemberID": "3786",
    "FullTitle": "The Lord Cotter"
  },
  {
    "MemberID": "3359",
    "FullTitle": "The Earl of Courtown"
  },
  {
    "MemberID": "3829",
    "FullTitle": "The Baroness Coussins"
  },
  {
    "MemberID": "4583",
    "FullTitle": "The Baroness Couttie"
  },
  {
    "MemberID": "4266",
    "FullTitle": "The Rt Rev. the Lord Bishop of Coventry"
  },
  {
    "MemberID": "3364",
    "FullTitle": "The Baroness Cox"
  },
  {
    "MemberID": "3385",
    "FullTitle": "The Lord Craig of Radley GCB OBE"
  },
  {
    "MemberID": "3384",
    "FullTitle": "The Viscount Craigavon"
  },
  {
    "MemberID": "3380",
    "FullTitle": "The Lord Crathorne KCVO"
  },
  {
    "MemberID": "3386",
    "FullTitle": "The Baroness Crawley"
  },
  {
    "MemberID": "3783",
    "FullTitle": "The Lord Crisp KCB"
  },
  {
    "MemberID": "2594",
    "FullTitle": "The Lord Cromwell"
  },
  {
    "MemberID": "3631",
    "FullTitle": "The Rt Hon. the Lord Cullen of Whitekirk KT"
  },
  {
    "MemberID": "2729",
    "FullTitle": "The Baroness Cumberlege CBE DL"
  },
  {
    "MemberID": "496",
    "FullTitle": "The Rt Hon. the Lord Cunningham of Felling DL"
  },
  {
    "MemberID": "2727",
    "FullTitle": "The Lord Currie of Marylebone"
  },
  {
    "MemberID": "4250",
    "FullTitle": "The Lord Curry of Kirkharle CBE"
  },
  {
    "MemberID": "4220",
    "FullTitle": "The Lord Dannatt GCB CBE MC"
  },
  {
    "MemberID": "596",
    "FullTitle": "The Rt Hon. the Lord Darling of Roulanish"
  },
  {
    "MemberID": "3779",
    "FullTitle": "The Rt Hon. the Lord Darzi of Denham OM KBE"
  },
  {
    "MemberID": "3781",
    "FullTitle": "The Lord Davidson of Glen Clova"
  },
  {
    "MemberID": "3879",
    "FullTitle": "The Lord Davies of Abersoch CBE"
  },
  {
    "MemberID": "987",
    "FullTitle": "The Rt Hon. the Lord Davies of Oldham"
  },
  {
    "MemberID": "346",
    "FullTitle": "The Lord Davies of Stamford"
  },
  {
    "MemberID": "2202",
    "FullTitle": "The Lord De Mauley"
  },
  {
    "MemberID": "3808",
    "FullTitle": "The Lord Dear Kt QPM DL"
  },
  {
    "MemberID": "4154",
    "FullTitle": "The Rt Hon. the Lord Deben"
  },
  {
    "MemberID": "3756",
    "FullTitle": "The Baroness Deech DBE QC"
  },
  {
    "MemberID": "4262",
    "FullTitle": "The Lord Deighton KBE"
  },
  {
    "MemberID": "2696",
    "FullTitle": "The Rt Hon. the Lord Denham KBE"
  },
  {
    "MemberID": "2699",
    "FullTitle": "The Lord Desai"
  },
  {
    "MemberID": "4707",
    "FullTitle": "The Earl of Devon"
  },
  {
    "MemberID": "2685",
    "FullTitle": "The Rt Hon. the Lord Dholakia OBE DL"
  },
  {
    "MemberID": "2713",
    "FullTitle": "The Lord Dixon-Smith DL"
  },
  {
    "MemberID": "4192",
    "FullTitle": "The Lord Dobbs"
  },
  {
    "MemberID": "4166",
    "FullTitle": "The Baroness Donaghy CBE FRSA"
  },
  {
    "MemberID": "2709",
    "FullTitle": "The Lord Donoughue"
  },
  {
    "MemberID": "4197",
    "FullTitle": "The Baroness Doocey OBE"
  },
  {
    "MemberID": "4155",
    "FullTitle": "The Baroness Drake CBE"
  },
  {
    "MemberID": "3669",
    "FullTitle": "The Rt Hon. the Lord Drayson"
  },
  {
    "MemberID": "3709",
    "FullTitle": "The Rt Hon. the Baroness D'Souza CMG"
  },
  {
    "MemberID": "805",
    "FullTitle": "The Lord Dubs"
  },
  {
    "MemberID": "4686",
    "FullTitle": "The Lord Duncan of Springbank"
  },
  {
    "MemberID": "2735",
    "FullTitle": "The Earl of Dundee"
  },
  {
    "MemberID": "4534",
    "FullTitle": "The Lord Dunlop"
  },
  {
    "MemberID": "4312",
    "FullTitle": "The Rt Rev. the Lord Bishop of Durham"
  },
  {
    "MemberID": "810",
    "FullTitle": "The Lord Dykes"
  },
  {
    "MemberID": "2793",
    "FullTitle": "The Rt Rev. the Lord Eames OM"
  },
  {
    "MemberID": "4184",
    "FullTitle": "The Baroness Eaton DBE DL"
  },
  {
    "MemberID": "2802",
    "FullTitle": "The Lord Eatwell"
  },
  {
    "MemberID": "2447",
    "FullTitle": "The Viscount Eccles"
  },
  {
    "MemberID": "2790",
    "FullTitle": "The Baroness Eccles of Moulton"
  },
  {
    "MemberID": "2481",
    "FullTitle": "The Lord Elder"
  },
  {
    "MemberID": "2816",
    "FullTitle": "The Rt Hon. the Lord Elis-Thomas"
  },
  {
    "MemberID": "2812",
    "FullTitle": "The Lord Elton TD"
  },
  {
    "MemberID": "4319",
    "FullTitle": "The Rt Rev. the Lord Bishop of Ely"
  },
  {
    "MemberID": "2809",
    "FullTitle": "The Lord Elystan-Morgan"
  },
  {
    "MemberID": "2808",
    "FullTitle": "The Baroness Emerton DBE DL"
  },
  {
    "MemberID": "4216",
    "FullTitle": "The Lord Empey Kt, OBE"
  },
  {
    "MemberID": "2804",
    "FullTitle": "The Earl of Erroll"
  },
  {
    "MemberID": "4329",
    "FullTitle": "The Baroness Evans of Bowes Park"
  },
  {
    "MemberID": "2766",
    "FullTitle": "The Lord Evans of Watford"
  },
  {
    "MemberID": "4348",
    "FullTitle": "The Lord Evans of Weardale KCB DL"
  },
  {
    "MemberID": "2760",
    "FullTitle": "The Lord Fairfax of Cameron"
  },
  {
    "MemberID": "4690",
    "FullTitle": "The Baroness Fairhead CBE"
  },
  {
    "MemberID": "2758",
    "FullTitle": "The Rt Hon. the Lord Falconer of Thoroton"
  },
  {
    "MemberID": "2757",
    "FullTitle": "The Baroness Falkender CBE"
  },
  {
    "MemberID": "2756",
    "FullTitle": "The Viscount Falkland"
  },
  {
    "MemberID": "3670",
    "FullTitle": "The Baroness Falkner of Margravine"
  },
  {
    "MemberID": "4561",
    "FullTitle": "The Baroness Fall"
  },
  {
    "MemberID": "4321",
    "FullTitle": "The Lord Farmer"
  },
  {
    "MemberID": "2472",
    "FullTitle": "The Lord Faulkner of Worcester"
  },
  {
    "MemberID": "4183",
    "FullTitle": "The Lord Faulks QC"
  },
  {
    "MemberID": "1531",
    "FullTitle": "The Rt Hon. the Baroness Featherstone"
  },
  {
    "MemberID": "4193",
    "FullTitle": "The Rt Hon. the Lord Feldman of Elstree"
  },
  {
    "MemberID": "2473",
    "FullTitle": "The Rt Hon. the Lord Fellowes GCB GCVO"
  },
  {
    "MemberID": "4208",
    "FullTitle": "The Lord Fellowes of West Stafford"
  },
  {
    "MemberID": "2491",
    "FullTitle": "The Lord Filkin CBE"
  },
  {
    "MemberID": "4219",
    "FullTitle": "The Lord Fink"
  },
  {
    "MemberID": "4283",
    "FullTitle": "The Lord Finkelstein OBE"
  },
  {
    "MemberID": "3609",
    "FullTitle": "The Baroness Finlay of Llandaff"
  },
  {
    "MemberID": "4567",
    "FullTitle": "The Baroness Finn"
  },
  {
    "MemberID": "2769",
    "FullTitle": "The Baroness Flather DL"
  },
  {
    "MemberID": "4211",
    "FullTitle": "The Lord Flight"
  },
  {
    "MemberID": "830",
    "FullTitle": "The Baroness Fookes DBE"
  },
  {
    "MemberID": "3791",
    "FullTitle": "The Baroness Ford"
  },
  {
    "MemberID": "1141",
    "FullTitle": "The Rt Hon. the Lord Forsyth of Drumlean"
  },
  {
    "MemberID": "214",
    "FullTitle": "The Rt Hon. the Lord Foster of Bath"
  },
  {
    "MemberID": "506",
    "FullTitle": "The Rt Hon. the Lord Foster of Bishop Auckland DL"
  },
  {
    "MemberID": "579",
    "FullTitle": "The Rt Hon. the Lord Foulkes of Cumnock"
  },
  {
    "MemberID": "315",
    "FullTitle": "The Rt Hon. the Lord Fowler"
  },
  {
    "MemberID": "4322",
    "FullTitle": "The Lord Fox"
  },
  {
    "MemberID": "134",
    "FullTitle": "The Lord Framlingham"
  },
  {
    "MemberID": "4585",
    "FullTitle": "The Lord Fraser of Corriegarth"
  },
  {
    "MemberID": "836",
    "FullTitle": "The Rt Hon. the Lord Freeman"
  },
  {
    "MemberID": "3893",
    "FullTitle": "The Rt Hon. the Lord Freud"
  },
  {
    "MemberID": "2593",
    "FullTitle": "The Lord Freyberg"
  },
  {
    "MemberID": "3738",
    "FullTitle": "The Baroness Fritchie DBE"
  },
  {
    "MemberID": "4575",
    "FullTitle": "The Lord Gadhia"
  },
  {
    "MemberID": "2503",
    "FullTitle": "The Baroness Gale"
  },
  {
    "MemberID": "3842",
    "FullTitle": "The Rt Hon. the Baroness Garden of Frognal"
  },
  {
    "MemberID": "4161",
    "FullTitle": "The Lord Gardiner of Kimble"
  },
  {
    "MemberID": "3596",
    "FullTitle": "The Baroness Gardner of Parkes"
  },
  {
    "MemberID": "840",
    "FullTitle": "The Rt Hon. the Lord Garel-Jones"
  },
  {
    "MemberID": "337",
    "FullTitle": "The Rt Hon. the Lord Garnier QC"
  },
  {
    "MemberID": "2595",
    "FullTitle": "The Lord Geddes"
  },
  {
    "MemberID": "4692",
    "FullTitle": "The Rt Hon. the Lord Geidt GCB GCVO OBE"
  },
  {
    "MemberID": "4163",
    "FullTitle": "The Lord German OBE"
  },
  {
    "MemberID": "3688",
    "FullTitle": "The Lord Giddens"
  },
  {
    "MemberID": "4543",
    "FullTitle": "The Lord Gilbert of Panteg"
  },
  {
    "MemberID": "2608",
    "FullTitle": "The Earl of Glasgow DL"
  },
  {
    "MemberID": "4240",
    "FullTitle": "The Lord Glasman"
  },
  {
    "MemberID": "2607",
    "FullTitle": "The Lord Glenarthur DL"
  },
  {
    "MemberID": "4236",
    "FullTitle": "The Lord Glendonbrook CBE"
  },
  {
    "MemberID": "4540",
    "FullTitle": "The Rt Rev. the Lord Bishop of Gloucester"
  },
  {
    "MemberID": "4334",
    "FullTitle": "The Lord Goddard of Stockport"
  },
  {
    "MemberID": "4237",
    "FullTitle": "The Lord Gold"
  },
  {
    "MemberID": "4306",
    "FullTitle": "The Baroness Goldie DL"
  },
  {
    "MemberID": "281",
    "FullTitle": "The Baroness Golding"
  },
  {
    "MemberID": "2490",
    "FullTitle": "The Rt Hon. the Lord Goldsmith QC"
  },
  {
    "MemberID": "670",
    "FullTitle": "The Rt Hon. the Lord Goodlad KCMG"
  },
  {
    "MemberID": "2598",
    "FullTitle": "The Lord Gordon of Strathblane CBE"
  },
  {
    "MemberID": "3602",
    "FullTitle": "The Viscount Goschen"
  },
  {
    "MemberID": "3575",
    "FullTitle": "The Baroness Goudie"
  },
  {
    "MemberID": "3573",
    "FullTitle": "The Baroness Gould of Potternewton"
  },
  {
    "MemberID": "2496",
    "FullTitle": "The Lord Grabiner QC"
  },
  {
    "MemberID": "4228",
    "FullTitle": "The Lord Grade of Yarmouth CBE"
  },
  {
    "MemberID": "3577",
    "FullTitle": "The Lord Grantchester"
  },
  {
    "MemberID": "2569",
    "FullTitle": "The Lord Greaves"
  },
  {
    "MemberID": "4346",
    "FullTitle": "The Lord Green of Deddington KCMG"
  },
  {
    "MemberID": "4191",
    "FullTitle": "The Lord Green of Hurstpierpoint"
  },
  {
    "MemberID": "2166",
    "FullTitle": "The Baroness Greenfield CBE"
  },
  {
    "MemberID": "2518",
    "FullTitle": "The Baroness Greengross OBE"
  },
  {
    "MemberID": "3569",
    "FullTitle": "The Lord Greenway"
  },
  {
    "MemberID": "4291",
    "FullTitle": "The Baroness Grender MBE"
  },
  {
    "MemberID": "3862",
    "FullTitle": "The Baroness Grey-Thompson DBE"
  },
  {
    "MemberID": "3707",
    "FullTitle": "The Lord Griffiths of Burry Port"
  },
  {
    "MemberID": "3595",
    "FullTitle": "The Lord Griffiths of Fforestfach"
  },
  {
    "MemberID": "276",
    "FullTitle": "The Rt Hon. the Lord Grocott"
  },
  {
    "MemberID": "3608",
    "FullTitle": "The Lord Guthrie of Craigiebank GCB LVO OBE DL"
  },
  {
    "MemberID": "379",
    "FullTitle": "The Rt Hon. the Lord Hague of Richmond"
  },
  {
    "MemberID": "349",
    "FullTitle": "The Rt Hon. the Viscount Hailsham QC"
  },
  {
    "MemberID": "567",
    "FullTitle": "The Rt Hon. the Lord Hain"
  },
  {
    "MemberID": "3765",
    "FullTitle": "The Lord Hall of Birkenhead CBE"
  },
  {
    "MemberID": "3767",
    "FullTitle": "The Lord Hameed CBE"
  },
  {
    "MemberID": "100",
    "FullTitle": "The Rt Hon. the Lord Hamilton of Epsom"
  },
  {
    "MemberID": "2652",
    "FullTitle": "The Baroness Hamwee"
  },
  {
    "MemberID": "2477",
    "FullTitle": "The Baroness Hanham CBE"
  },
  {
    "MemberID": "2167",
    "FullTitle": "The Lord Hannay of Chiswick GCMG"
  },
  {
    "MemberID": "2650",
    "FullTitle": "The Lord Hanningfield DL"
  },
  {
    "MemberID": "2648",
    "FullTitle": "The Viscount Hanworth"
  },
  {
    "MemberID": "4324",
    "FullTitle": "The Baroness Harding of Winscombe"
  },
  {
    "MemberID": "3813",
    "FullTitle": "The Rt Rev. the Lord Harries of Pentregarth DD"
  },
  {
    "MemberID": "2671",
    "FullTitle": "The Lord Harris of Haringey"
  },
  {
    "MemberID": "2669",
    "FullTitle": "The Lord Harris of Peckham"
  },
  {
    "MemberID": "2505",
    "FullTitle": "The Baroness Harris of Richmond DL"
  },
  {
    "MemberID": "2488",
    "FullTitle": "The Lord Harrison"
  },
  {
    "MemberID": "43",
    "FullTitle": "The Rt Hon. the Lord Haselhurst"
  },
  {
    "MemberID": "2665",
    "FullTitle": "The Lord Haskel"
  },
  {
    "MemberID": "2644",
    "FullTitle": "The Lord Haskins"
  },
  {
    "MemberID": "3759",
    "FullTitle": "The Lord Hastings of Scarisbrick CBE"
  },
  {
    "MemberID": "4296",
    "FullTitle": "The Lord Haughey OBE"
  },
  {
    "MemberID": "3704",
    "FullTitle": "The Lord Haworth"
  },
  {
    "MemberID": "4352",
    "FullTitle": "The Lord Hay of Ballyore"
  },
  {
    "MemberID": "1649",
    "FullTitle": "The Rt Hon. the Baroness Hayman GBE"
  },
  {
    "MemberID": "4159",
    "FullTitle": "The Baroness Hayter of Kentish Town"
  },
  {
    "MemberID": "863",
    "FullTitle": "Lord Hayward OBE"
  },
  {
    "MemberID": "4179",
    "FullTitle": "The Baroness Healy of Primrose Hill"
  },
  {
    "MemberID": "4331",
    "FullTitle": "The Baroness Helic"
  },
  {
    "MemberID": "3679",
    "FullTitle": "The Baroness Henig CBE"
  },
  {
    "MemberID": "2616",
    "FullTitle": "The Rt Hon. the Lord Henley"
  },
  {
    "MemberID": "4189",
    "FullTitle": "The Lord Hennessy of Nympsfield"
  },
  {
    "MemberID": "94",
    "FullTitle": "The Rt Hon. the Lord Heseltine CH"
  },
  {
    "MemberID": "4144",
    "FullTitle": "The Rt Hon. the Lord Hill of Oareford CBE"
  },
  {
    "MemberID": "2637",
    "FullTitle": "The Baroness Hilton of Eggardon QPM"
  },
  {
    "MemberID": "4301",
    "FullTitle": "The Baroness Hodgson of Abinger CBE"
  },
  {
    "MemberID": "1651",
    "FullTitle": "The Lord Hodgson of Astley Abbotts CBE"
  },
  {
    "MemberID": "2633",
    "FullTitle": "The Rt Hon. the Lord Hoffmann"
  },
  {
    "MemberID": "4693",
    "FullTitle": "The Lord Hogan-Howe QPM"
  },
  {
    "MemberID": "2632",
    "FullTitle": "The Baroness Hogg"
  },
  {
    "MemberID": "2732",
    "FullTitle": "The Lord Hollick"
  },
  {
    "MemberID": "4190",
    "FullTitle": "The Baroness Hollins"
  },
  {
    "MemberID": "4294",
    "FullTitle": "The Lord Holmes of Richmond MBE"
  },
  {
    "MemberID": "2007",
    "FullTitle": "The Earl of Home  KT CVO CBE"
  },
  {
    "MemberID": "2005",
    "FullTitle": "The Baroness Hooper CMG"
  },
  {
    "MemberID": "2004",
    "FullTitle": "The Rt Hon. the Lord Hope of Craighead KT"
  },
  {
    "MemberID": "196",
    "FullTitle": "The Lord Horam"
  },
  {
    "MemberID": "4694",
    "FullTitle": "The Lord Houghton of Richmond GCB CBE DL"
  },
  {
    "MemberID": "82",
    "FullTitle": "The Rt Hon. the Lord Howard of Lympne CH QC"
  },
  {
    "MemberID": "3674",
    "FullTitle": "The Lord Howard of Rising"
  },
  {
    "MemberID": "3607",
    "FullTitle": "The Baroness Howarth of Breckland OBE"
  },
  {
    "MemberID": "544",
    "FullTitle": "The Rt Hon. the Lord Howarth of Newport CBE"
  },
  {
    "MemberID": "2000",
    "FullTitle": "The Rt Hon. the Earl Howe"
  },
  {
    "MemberID": "3610",
    "FullTitle": "The Baroness Howe of Idlicote CBE"
  },
  {
    "MemberID": "993",
    "FullTitle": "The Rt Hon. the Lord Howell of Guildford"
  },
  {
    "MemberID": "2486",
    "FullTitle": "The Baroness Howells of St Davids OBE"
  },
  {
    "MemberID": "1000",
    "FullTitle": "The Lord Hoyle"
  },
  {
    "MemberID": "459",
    "FullTitle": "The Rt Hon. the Baroness Hughes of Stretford"
  },
  {
    "MemberID": "1051",
    "FullTitle": "The Lord Hughes of Woodside"
  },
  {
    "MemberID": "4300",
    "FullTitle": "The Baroness Humphreys"
  },
  {
    "MemberID": "2543",
    "FullTitle": "The Lord Hunt of Chesterton CB FRS"
  },
  {
    "MemberID": "2024",
    "FullTitle": "The Rt Hon. the Lord Hunt of Kings Heath OBE"
  },
  {
    "MemberID": "994",
    "FullTitle": "The Rt Hon. the Lord Hunt of Wirral MBE"
  },
  {
    "MemberID": "4221",
    "FullTitle": "The Lord Hussain"
  },
  {
    "MemberID": "4164",
    "FullTitle": "The Baroness Hussein-Ece OBE"
  },
  {
    "MemberID": "494",
    "FullTitle": "The Rt Hon. the Lord Hutton of Furness"
  },
  {
    "MemberID": "2018",
    "FullTitle": "The Lord Hylton"
  },
  {
    "MemberID": "1980",
    "FullTitle": "The Lord Inglewood MRICS"
  },
  {
    "MemberID": "1976",
    "FullTitle": "The Rt Hon. the Lord Irvine of Lairg"
  },
  {
    "MemberID": "3799",
    "FullTitle": "The Lord James of Blackheath CBE"
  },
  {
    "MemberID": "4337",
    "FullTitle": "The Baroness Janke"
  },
  {
    "MemberID": "3838",
    "FullTitle": "The Rt Hon. the Lord Janvrin GCB GCVO QSO"
  },
  {
    "MemberID": "3818",
    "FullTitle": "The Lord Jay of Ewelme GCMG"
  },
  {
    "MemberID": "1970",
    "FullTitle": "The Rt Hon. the Baroness Jay of Paddington"
  },
  {
    "MemberID": "4229",
    "FullTitle": "The Baroness Jenkin of Kennington"
  },
  {
    "MemberID": "4203",
    "FullTitle": "The Baroness Jolly"
  },
  {
    "MemberID": "530",
    "FullTitle": "The Rt Hon. the Lord Jones"
  },
  {
    "MemberID": "3775",
    "FullTitle": "The Lord Jones of Birmingham"
  },
  {
    "MemberID": "248",
    "FullTitle": "The Lord Jones of Cheltenham"
  },
  {
    "MemberID": "4297",
    "FullTitle": "The Baroness Jones of Moulsecoomb"
  },
  {
    "MemberID": "3792",
    "FullTitle": "The Baroness Jones of Whitchurch"
  },
  {
    "MemberID": "883",
    "FullTitle": "The Rt Hon. the Lord Jopling DL"
  },
  {
    "MemberID": "2552",
    "FullTitle": "The Lord Jordan CBE"
  },
  {
    "MemberID": "1660",
    "FullTitle": "The Lord Judd"
  },
  {
    "MemberID": "3867",
    "FullTitle": "The Rt Hon. the Lord Judge"
  },
  {
    "MemberID": "3766",
    "FullTitle": "The Rt Hon. the Lord Kakkar"
  },
  {
    "MemberID": "3668",
    "FullTitle": "The Lord Kalms"
  },
  {
    "MemberID": "4538",
    "FullTitle": "The Rt Hon. the Lord Keen of Elie QC"
  },
  {
    "MemberID": "4303",
    "FullTitle": "The Baroness Kennedy of Cradley"
  },
  {
    "MemberID": "4153",
    "FullTitle": "The Lord Kennedy of Southwark"
  },
  {
    "MemberID": "1987",
    "FullTitle": "The Baroness Kennedy of The Shaws QC"
  },
  {
    "MemberID": "3708",
    "FullTitle": "The Lord Kerr of Kinlochard GCMG"
  },
  {
    "MemberID": "4355",
    "FullTitle": "The Lord Kerslake"
  },
  {
    "MemberID": "4225",
    "FullTitle": "The Lord Kestenbaum"
  },
  {
    "MemberID": "4258",
    "FullTitle": "The Baroness Kidron OBE"
  },
  {
    "MemberID": "657",
    "FullTitle": "The Rt Hon. the Lord Kilclooney"
  },
  {
    "MemberID": "254",
    "FullTitle": "The Rt Hon. the Lord King of Bridgwater CH"
  },
  {
    "MemberID": "4280",
    "FullTitle": "The Lord King of Lothbury KG GBE"
  },
  {
    "MemberID": "3788",
    "FullTitle": "The Baroness Kingsmill CBE"
  },
  {
    "MemberID": "693",
    "FullTitle": "The Rt Hon. the Lord Kinnock"
  },
  {
    "MemberID": "3895",
    "FullTitle": "The Baroness Kinnock of Holyhead"
  },
  {
    "MemberID": "4354",
    "FullTitle": "The Earl of Kinnoull"
  },
  {
    "MemberID": "2495",
    "FullTitle": "The Lord Kirkham CVO"
  },
  {
    "MemberID": "891",
    "FullTitle": "The Lord Kirkhope of Harrogate"
  },
  {
    "MemberID": "635",
    "FullTitle": "The Lord Kirkwood of Kirkhope"
  },
  {
    "MemberID": "4160",
    "FullTitle": "The Rt Hon. the Lord Knight of Weymouth"
  },
  {
    "MemberID": "1557",
    "FullTitle": "The Rt Hon. the Baroness Kramer"
  },
  {
    "MemberID": "3736",
    "FullTitle": "The Lord Krebs"
  },
  {
    "MemberID": "2079",
    "FullTitle": "The Rt Hon. the Lord Laming CBE DL"
  },
  {
    "MemberID": "895",
    "FullTitle": "The Rt Hon. the Lord Lamont of Lerwick"
  },
  {
    "MemberID": "4275",
    "FullTitle": "The Baroness Lane-Fox of Soho CBE"
  },
  {
    "MemberID": "896",
    "FullTitle": "The Rt Hon. the Lord Lang of Monkton DL"
  },
  {
    "MemberID": "123",
    "FullTitle": "The Rt Hon. the Lord Lansley CBE"
  },
  {
    "MemberID": "4290",
    "FullTitle": "The Baroness Lawrence of Clarendon OBE"
  },
  {
    "MemberID": "1039",
    "FullTitle": "The Rt Hon. the Lord Lawson of Blaby"
  },
  {
    "MemberID": "2540",
    "FullTitle": "The Lord Layard"
  },
  {
    "MemberID": "2482",
    "FullTitle": "The Lord Lea of Crondall OBE"
  },
  {
    "MemberID": "1132",
    "FullTitle": "The Lord Lee of Trafford DL"
  },
  {
    "MemberID": "4349",
    "FullTitle": "The Rt Rev. the Lord Bishop of Leeds"
  },
  {
    "MemberID": "4295",
    "FullTitle": "The Lord Leigh of Hurley"
  },
  {
    "MemberID": "3677",
    "FullTitle": "The Lord Leitch"
  },
  {
    "MemberID": "4338",
    "FullTitle": "The Lord Lennie"
  },
  {
    "MemberID": "2035",
    "FullTitle": "The Lord Levene of Portsoken KBE"
  },
  {
    "MemberID": "2033",
    "FullTitle": "The Lord Levy"
  },
  {
    "MemberID": "4202",
    "FullTitle": "The Lord Lexden OBE"
  },
  {
    "MemberID": "573",
    "FullTitle": "The Rt Hon. the Baroness Liddell of Coatdyke"
  },
  {
    "MemberID": "4156",
    "FullTitle": "The Lord Liddle"
  },
  {
    "MemberID": "68",
    "FullTitle": "The Rt. Hon the Lord Lilley"
  },
  {
    "MemberID": "4688",
    "FullTitle": "The Rt Rev. the Lord Bishop of Lincoln"
  },
  {
    "MemberID": "2059",
    "FullTitle": "The Earl of Lindsay"
  },
  {
    "MemberID": "4194",
    "FullTitle": "The Lord Lingfield"
  },
  {
    "MemberID": "2492",
    "FullTitle": "The Lord Lipsey"
  },
  {
    "MemberID": "4234",
    "FullTitle": "The Baroness Lister of Burtersett CBE"
  },
  {
    "MemberID": "2054",
    "FullTitle": "The Earl of Listowel"
  },
  {
    "MemberID": "4351",
    "FullTitle": "The Lord Lisvane KCB DL"
  },
  {
    "MemberID": "4559",
    "FullTitle": "The Lord Livermore"
  },
  {
    "MemberID": "2045",
    "FullTitle": "The Earl of Liverpool"
  },
  {
    "MemberID": "4278",
    "FullTitle": "The Lord Livingston of Parkhead"
  },
  {
    "MemberID": "4696",
    "FullTitle": "Rt Rev. and Rt Hon. the Lord Bishop of London DBE"
  },
  {
    "MemberID": "4209",
    "FullTitle": "The Lord Loomba CBE"
  },
  {
    "MemberID": "259",
    "FullTitle": "The Most Hon. the Rt Hon. the Marquess of Lothian QC"
  },
  {
    "MemberID": "3803",
    "FullTitle": "The Lord Low of Dalston CBE"
  },
  {
    "MemberID": "1879",
    "FullTitle": "The Lord Lucas"
  },
  {
    "MemberID": "908",
    "FullTitle": "The Rt Hon. the Lord Luce KG GCVO DL"
  },
  {
    "MemberID": "1867",
    "FullTitle": "The Baroness Ludford"
  },
  {
    "MemberID": "4550",
    "FullTitle": "The Lord Lupton CBE"
  },
  {
    "MemberID": "1864",
    "FullTitle": "The Earl of Lytton"
  },
  {
    "MemberID": "4158",
    "FullTitle": "The Rt Hon. the Lord McAvoy"
  },
  {
    "MemberID": "1892",
    "FullTitle": "The Lord McColl of Dulwich CBE"
  },
  {
    "MemberID": "4168",
    "FullTitle": "The Rt Hon. the Lord McConnell of Glenscorrodale"
  },
  {
    "MemberID": "655",
    "FullTitle": "The Rev. Dr the Lord McCrea of Magherafelt and Cookstown"
  },
  {
    "MemberID": "3701",
    "FullTitle": "The Baroness McDonagh"
  },
  {
    "MemberID": "4172",
    "FullTitle": "The Lord Macdonald of River Glaven QC"
  },
  {
    "MemberID": "4148",
    "FullTitle": "The Rt Hon. the Lord McFall of Alcluith"
  },
  {
    "MemberID": "131",
    "FullTitle": "The Rt Hon. the Lord MacGregor of Pulham Market OBE"
  },
  {
    "MemberID": "4554",
    "FullTitle": "The Baroness McGregor-Smith CBE"
  },
  {
    "MemberID": "4576",
    "FullTitle": "The Lord McInnes of Kilwinning CBE"
  },
  {
    "MemberID": "2506",
    "FullTitle": "The Baroness McIntosh of Hudnall"
  },
  {
    "MemberID": "384",
    "FullTitle": "The Baroness McIntosh of Pickering"
  },
  {
    "MemberID": "1883",
    "FullTitle": "The Rt Hon. the Lord Mackay of Clashfern KT"
  },
  {
    "MemberID": "2507",
    "FullTitle": "The Lord MacKenzie of Culkein"
  },
  {
    "MemberID": "1881",
    "FullTitle": "The Lord Mackenzie of Framwellgate OBE"
  },
  {
    "MemberID": "3694",
    "FullTitle": "The Lord McKenzie of Luton"
  },
  {
    "MemberID": "578",
    "FullTitle": "The Rt Hon. the Lord Maclennan of Rogart"
  },
  {
    "MemberID": "919",
    "FullTitle": "The Rt Hon. the Lord McNally"
  },
  {
    "MemberID": "4702",
    "FullTitle": "The Lord McNicol of West Kilbride"
  },
  {
    "MemberID": "4586",
    "FullTitle": "The Lord Macpherson of Earl's Court GCB"
  },
  {
    "MemberID": "685",
    "FullTitle": "The Baroness Maddock"
  },
  {
    "MemberID": "4227",
    "FullTitle": "The Lord Magan of Castletown"
  },
  {
    "MemberID": "648",
    "FullTitle": "The Lord Maginnis of Drumglass"
  },
  {
    "MemberID": "4563",
    "FullTitle": "The Lord Mair CBE"
  },
  {
    "MemberID": "1846",
    "FullTitle": "The Baroness Mallalieu QC"
  },
  {
    "MemberID": "3774",
    "FullTitle": "The Rt Hon. the Lord Malloch-Brown KCMG"
  },
  {
    "MemberID": "3754",
    "FullTitle": "The Rt Hon. the Lord Mance"
  },
  {
    "MemberID": "1833",
    "FullTitle": "The Lord Mancroft"
  },
  {
    "MemberID": "500",
    "FullTitle": "The Rt Hon. the Lord Mandelson"
  },
  {
    "MemberID": "3857",
    "FullTitle": "The Baroness Manningham-Buller LG DCB"
  },
  {
    "MemberID": "4289",
    "FullTitle": "The Baroness Manzoor CBE"
  },
  {
    "MemberID": "1861",
    "FullTitle": "The Countess of Mar"
  },
  {
    "MemberID": "4206",
    "FullTitle": "The Lord Marks of Henley-on-Thames QC"
  },
  {
    "MemberID": "3797",
    "FullTitle": "The Lord Marland"
  },
  {
    "MemberID": "1854",
    "FullTitle": "The Lord Marlesford DL"
  },
  {
    "MemberID": "1850",
    "FullTitle": "The Baroness Masham of Ilton DL"
  },
  {
    "MemberID": "2489",
    "FullTitle": "The Baroness Massey of Darwen"
  },
  {
    "MemberID": "115",
    "FullTitle": "The Rt Hon. the Lord Maude of Horsham"
  },
  {
    "MemberID": "3830",
    "FullTitle": "The Lord Mawson OBE"
  },
  {
    "MemberID": "607",
    "FullTitle": "The Lord Maxton"
  },
  {
    "MemberID": "3810",
    "FullTitle": "The Baroness Meacher"
  },
  {
    "MemberID": "4286",
    "FullTitle": "The Lord Mendelsohn"
  },
  {
    "MemberID": "4699",
    "FullTitle": "The Baroness Meyer CBE"
  },
  {
    "MemberID": "1934",
    "FullTitle": "The Baroness Miller of Chilthorne Domer"
  },
  {
    "MemberID": "2570",
    "FullTitle": "The Lord Mitchell"
  },
  {
    "MemberID": "3855",
    "FullTitle": "The Lord Mogg KCMG"
  },
  {
    "MemberID": "4544",
    "FullTitle": "The Baroness Mone OBE"
  },
  {
    "MemberID": "4186",
    "FullTitle": "The Lord Monks"
  },
  {
    "MemberID": "1922",
    "FullTitle": "The Duke of Montrose"
  },
  {
    "MemberID": "621",
    "FullTitle": "The Lord Moonie"
  },
  {
    "MemberID": "1022",
    "FullTitle": "The Rt Hon. the Lord Moore of Lower Marsh"
  },
  {
    "MemberID": "2555",
    "FullTitle": "The Lord Morgan"
  },
  {
    "MemberID": "3685",
    "FullTitle": "The Baroness Morgan of Drefelin"
  },
  {
    "MemberID": "4226",
    "FullTitle": "The Baroness Morgan of Ely"
  },
  {
    "MemberID": "2168",
    "FullTitle": "The Baroness Morgan of Huyton"
  },
  {
    "MemberID": "565",
    "FullTitle": "The Rt Hon. the Lord Morris of Aberavon KG QC"
  },
  {
    "MemberID": "3681",
    "FullTitle": "The Baroness Morris of Bolton OBE"
  },
  {
    "MemberID": "3796",
    "FullTitle": "The Lord Morris of Handsworth OJ"
  },
  {
    "MemberID": "305",
    "FullTitle": "The Rt Hon. the Baroness Morris of Yardley"
  },
  {
    "MemberID": "3795",
    "FullTitle": "The Lord Morrow"
  },
  {
    "MemberID": "4539",
    "FullTitle": "The Lord Mountevans"
  },
  {
    "MemberID": "924",
    "FullTitle": "The Lord Moynihan"
  },
  {
    "MemberID": "3692",
    "FullTitle": "The Baroness Murphy"
  },
  {
    "MemberID": "546",
    "FullTitle": "The Rt Hon. the Lord Murphy of Torfaen"
  },
  {
    "MemberID": "3869",
    "FullTitle": "The Lord Myners CBE"
  },
  {
    "MemberID": "1251",
    "FullTitle": "The Rt Hon. the Lord Naseby"
  },
  {
    "MemberID": "4270",
    "FullTitle": "The Lord Nash"
  },
  {
    "MemberID": "3690",
    "FullTitle": "The Baroness Neuberger DBE"
  },
  {
    "MemberID": "3827",
    "FullTitle": "The Rt Hon. the Lord Neuberger of Abbotsbury"
  },
  {
    "MemberID": "3840",
    "FullTitle": "The Rt Hon. the Baroness Neville-Jones DCMG"
  },
  {
    "MemberID": "4284",
    "FullTitle": "The Baroness Neville-Rolfe DBE CMG"
  },
  {
    "MemberID": "1916",
    "FullTitle": "The Rt Hon. the Lord Newby OBE"
  },
  {
    "MemberID": "4568",
    "FullTitle": "The Rt Rev. the Lord Bishop of Newcastle"
  },
  {
    "MemberID": "4177",
    "FullTitle": "The Baroness Newlove"
  },
  {
    "MemberID": "1164",
    "FullTitle": "The Baroness Nicholson of Winterbourne"
  },
  {
    "MemberID": "2554",
    "FullTitle": "The Baroness Noakes DBE"
  },
  {
    "MemberID": "2194",
    "FullTitle": "The Duke of Norfolk"
  },
  {
    "MemberID": "3191",
    "FullTitle": "The Lord Northbrook"
  },
  {
    "MemberID": "2539",
    "FullTitle": "The Rt Hon. the Baroness Northover"
  },
  {
    "MemberID": "3187",
    "FullTitle": "The Lord Norton of Louth"
  },
  {
    "MemberID": "3655",
    "FullTitle": "The Rt Rev. the Lord Bishop of Norwich"
  },
  {
    "MemberID": "4180",
    "FullTitle": "The Baroness Nye"
  },
  {
    "MemberID": "2536",
    "FullTitle": "The Lord Oakeshott of Seagrove Bay"
  },
  {
    "MemberID": "4549",
    "FullTitle": "The Lord Oates"
  },
  {
    "MemberID": "3217",
    "FullTitle": "The Baroness O'Cathain OBE"
  },
  {
    "MemberID": "4255",
    "FullTitle": "The Lord O'Donnell GCB"
  },
  {
    "MemberID": "3902",
    "FullTitle": "The Baroness O'Loan DBE"
  },
  {
    "MemberID": "2441",
    "FullTitle": "The Baroness O'Neill of Bengarve CH CBE FBA"
  },
  {
    "MemberID": "629",
    "FullTitle": "The Lord O'Neill of Clackmannan"
  },
  {
    "MemberID": "4536",
    "FullTitle": "The Lord O'Neill of Gatley"
  },
  {
    "MemberID": "3210",
    "FullTitle": "The Rt Hon. the Baroness Oppenheim-Barnes"
  },
  {
    "MemberID": "4711",
    "FullTitle": "The Baroness Osamor"
  },
  {
    "MemberID": "4545",
    "FullTitle": "The Lord O'Shaughnessy"
  },
  {
    "MemberID": "2170",
    "FullTitle": "The Lord Ouseley"
  },
  {
    "MemberID": "992",
    "FullTitle": "The Rt Hon. the Lord Owen CH"
  },
  {
    "MemberID": "2494",
    "FullTitle": "The Lord Oxburgh KBE"
  },
  {
    "MemberID": "4279",
    "FullTitle": "The Rt. Rev the Lord Bishop of Oxford"
  },
  {
    "MemberID": "4343",
    "FullTitle": "The Earl of Oxford and Asquith OBE"
  },
  {
    "MemberID": "4288",
    "FullTitle": "The Lord Paddick"
  },
  {
    "MemberID": "3192",
    "FullTitle": "The Lord Palmer"
  },
  {
    "MemberID": "4214",
    "FullTitle": "The Lord Palmer of Childs Hill OBE"
  },
  {
    "MemberID": "3167",
    "FullTitle": "The Lord Palumbo"
  },
  {
    "MemberID": "4310",
    "FullTitle": "The Lord Palumbo of Southwark"
  },
  {
    "MemberID": "3870",
    "FullTitle": "The Lord Pannick QC"
  },
  {
    "MemberID": "2545",
    "FullTitle": "The Lord Parekh"
  },
  {
    "MemberID": "4178",
    "FullTitle": "The Baroness Parminter"
  },
  {
    "MemberID": "2443",
    "FullTitle": "The Lord Patel KT"
  },
  {
    "MemberID": "2526",
    "FullTitle": "The Lord Patel of Blackburn"
  },
  {
    "MemberID": "3798",
    "FullTitle": "The Lord Patel of Bradford OBE"
  },
  {
    "MemberID": "1137",
    "FullTitle": "The Rt Hon. the Lord Patten"
  },
  {
    "MemberID": "1136",
    "FullTitle": "The Rt Hon. the Lord Patten of Barnes CH"
  },
  {
    "MemberID": "3163",
    "FullTitle": "The Rt Hon. the Lord Paul"
  },
  {
    "MemberID": "3153",
    "FullTitle": "The Lord Pearson of Rannoch"
  },
  {
    "MemberID": "3161",
    "FullTitle": "The Rt Hon. the Earl Peel DL"
  },
  {
    "MemberID": "457",
    "FullTitle": "The Rt Hon. the Lord Pendry"
  },
  {
    "MemberID": "4313",
    "FullTitle": "The Rt Rev. the Lord Bishop of Peterborough"
  },
  {
    "MemberID": "2439",
    "FullTitle": "The Rt Hon. the Lord Phillips of Worth Matravers KG"
  },
  {
    "MemberID": "33",
    "FullTitle": "The Rt Hon. the Lord Pickles"
  },
  {
    "MemberID": "4552",
    "FullTitle": "The Baroness Pidding CBE"
  },
  {
    "MemberID": "4341",
    "FullTitle": "The Baroness Pinnock"
  },
  {
    "MemberID": "3179",
    "FullTitle": "The Baroness Pitkeathley OBE"
  },
  {
    "MemberID": "3169",
    "FullTitle": "The Lord Plant of Highfield"
  },
  {
    "MemberID": "4547",
    "FullTitle": "The Lord Polak CBE"
  },
  {
    "MemberID": "3154",
    "FullTitle": "The Lord Ponsonby of Shulbrede"
  },
  {
    "MemberID": "4173",
    "FullTitle": "The Lord Popat"
  },
  {
    "MemberID": "4555",
    "FullTitle": "The Lord Porter of Spalding CBE"
  },
  {
    "MemberID": "4314",
    "FullTitle": "The Rt Rev. the Lord Bishop of Portsmouth"
  },
  {
    "MemberID": "2527",
    "FullTitle": "The Lord Powell of Bayswater KCMG"
  },
  {
    "MemberID": "2476",
    "FullTitle": "The Rt Hon. the Baroness Prashar CBE"
  },
  {
    "MemberID": "374",
    "FullTitle": "The Lord Prescott"
  },
  {
    "MemberID": "4570",
    "FullTitle": "The Lord Price CVO"
  },
  {
    "MemberID": "217",
    "FullTitle": "The Rt Hon. the Baroness Primarolo"
  },
  {
    "MemberID": "127",
    "FullTitle": "The Lord Prior of Brampton"
  },
  {
    "MemberID": "3684",
    "FullTitle": "The Baroness Prosser OBE"
  },
  {
    "MemberID": "4293",
    "FullTitle": "The Lord Purvis of Tweed"
  },
  {
    "MemberID": "3268",
    "FullTitle": "The Lord Puttnam CBE"
  },
  {
    "MemberID": "518",
    "FullTitle": "The Rt Hon. the Baroness Quin"
  },
  {
    "MemberID": "510",
    "FullTitle": "The Rt Hon. the Lord Radice"
  },
  {
    "MemberID": "3276",
    "FullTitle": "The Baroness Ramsay of Cartvale"
  },
  {
    "MemberID": "3744",
    "FullTitle": "The Lord Ramsbotham GCB CBE"
  },
  {
    "MemberID": "3689",
    "FullTitle": "The Lord Rana MBE"
  },
  {
    "MemberID": "209",
    "FullTitle": "The Rt Hon. the Lord Randall of Uxbridge"
  },
  {
    "MemberID": "4230",
    "FullTitle": "The Baroness Randerson"
  },
  {
    "MemberID": "3278",
    "FullTitle": "The Baroness Rawlings"
  },
  {
    "MemberID": "3275",
    "FullTitle": "The Lord Razzall CBE"
  },
  {
    "MemberID": "3274",
    "FullTitle": "The Lord Rea"
  },
  {
    "MemberID": "4332",
    "FullTitle": "The Baroness Rebuck DBE"
  },
  {
    "MemberID": "3271",
    "FullTitle": "The Lord Redesdale"
  },
  {
    "MemberID": "4551",
    "FullTitle": "The Baroness Redfern"
  },
  {
    "MemberID": "3751",
    "FullTitle": "The Lord Rees of Ludlow OM"
  },
  {
    "MemberID": "617",
    "FullTitle": "The Rt Hon. the Lord Reid of Cardowan"
  },
  {
    "MemberID": "3234",
    "FullTitle": "The Lord Renfrew of Kaimsthorn FBA FSA"
  },
  {
    "MemberID": "2484",
    "FullTitle": "The Lord Rennard MBE"
  },
  {
    "MemberID": "4195",
    "FullTitle": "The Lord Ribeiro CBE"
  },
  {
    "MemberID": "4317",
    "FullTitle": "The Lord Richards of Herstmonceux GCB CBE DSO"
  },
  {
    "MemberID": "4587",
    "FullTitle": "The Lord Ricketts GCMG GCVO"
  },
  {
    "MemberID": "4272",
    "FullTitle": "The Viscount Ridley DL"
  },
  {
    "MemberID": "139",
    "FullTitle": "The Lord Risby"
  },
  {
    "MemberID": "334",
    "FullTitle": "The Rt Hon. the Lord Robathan"
  },
  {
    "MemberID": "3691",
    "FullTitle": "The Lord Roberts of Llandudno"
  },
  {
    "MemberID": "672",
    "FullTitle": "The Rt Hon. the Lord Robertson of Port Ellen KT"
  },
  {
    "MemberID": "4318",
    "FullTitle": "The Rt Rev. the Lord Bishop of Rochester"
  },
  {
    "MemberID": "4556",
    "FullTitle": "The Baroness Rock"
  },
  {
    "MemberID": "940",
    "FullTitle": "The Rt Hon. the Lord Rodgers of Quarry Bank"
  },
  {
    "MemberID": "2478",
    "FullTitle": "The Lord Rogan"
  },
  {
    "MemberID": "3242",
    "FullTitle": "The Lord Rogers of Riverside CH"
  },
  {
    "MemberID": "302",
    "FullTitle": "The Rt Hon. the Lord Rooker"
  },
  {
    "MemberID": "4326",
    "FullTitle": "The Lord Rose of Monewden"
  },
  {
    "MemberID": "3687",
    "FullTitle": "The Lord Rosser"
  },
  {
    "MemberID": "3135",
    "FullTitle": "The Earl of Rosslyn"
  },
  {
    "MemberID": "2143",
    "FullTitle": "The Lord Rotherwick"
  },
  {
    "MemberID": "3806",
    "FullTitle": "The Lord Rowe-Beddoe"
  },
  {
    "MemberID": "554",
    "FullTitle": "The Lord Rowlands CBE"
  },
  {
    "MemberID": "3703",
    "FullTitle": "The Rt Hon. the Baroness Royall of Blaisdon"
  },
  {
    "MemberID": "2134",
    "FullTitle": "The Lord Russell of Liverpool"
  },
  {
    "MemberID": "1250",
    "FullTitle": "The Rt Hon. the Lord Ryder of Wensum OBE"
  },
  {
    "MemberID": "2154",
    "FullTitle": "The Lord Saatchi"
  },
  {
    "MemberID": "3901",
    "FullTitle": "The Lord Sacks"
  },
  {
    "MemberID": "4308",
    "FullTitle": "The Rt Rev. the Lord Bishop of St Albans"
  },
  {
    "MemberID": "2155",
    "FullTitle": "The Lord St John of Bletso"
  },
  {
    "MemberID": "4350",
    "FullTitle": "The Rt Rev. the Lord Bishop of Salisbury"
  },
  {
    "MemberID": "2109",
    "FullTitle": "The Earl of Sandwich"
  },
  {
    "MemberID": "4146",
    "FullTitle": "The Lord Sassoon"
  },
  {
    "MemberID": "4700",
    "FullTitle": "The Baroness Sater"
  },
  {
    "MemberID": "2106",
    "FullTitle": "The Rt Hon. the Lord Saville of Newdigate"
  },
  {
    "MemberID": "2105",
    "FullTitle": "The Lord Sawyer"
  },
  {
    "MemberID": "4553",
    "FullTitle": "Baroness Scott of Bybrook OBE"
  },
  {
    "MemberID": "2542",
    "FullTitle": "The Baroness Scott of Needham Market"
  },
  {
    "MemberID": "4333",
    "FullTitle": "The Lord Scriven"
  },
  {
    "MemberID": "2097",
    "FullTitle": "The Baroness Seccombe DBE JP"
  },
  {
    "MemberID": "2102",
    "FullTitle": "The Earl of Selborne GBE FRS DL"
  },
  {
    "MemberID": "802",
    "FullTitle": "The Rt Hon. the Lord Selkirk of Douglas"
  },
  {
    "MemberID": "2127",
    "FullTitle": "The Lord Selsdon"
  },
  {
    "MemberID": "4198",
    "FullTitle": "The Baroness Shackleton of Belgravia LVO"
  },
  {
    "MemberID": "4196",
    "FullTitle": "The Lord Sharkey"
  },
  {
    "MemberID": "4548",
    "FullTitle": "The Baroness Sheehan"
  },
  {
    "MemberID": "3794",
    "FullTitle": "The Lord Sheikh"
  },
  {
    "MemberID": "132",
    "FullTitle": "The Rt Hon. the Baroness Shephard of Northwold"
  },
  {
    "MemberID": "4287",
    "FullTitle": "The Lord Sherbourne of Didsbury CBE"
  },
  {
    "MemberID": "4147",
    "FullTitle": "The Baroness Sherlock OBE"
  },
  {
    "MemberID": "4557",
    "FullTitle": "The Lord Shinkwin"
  },
  {
    "MemberID": "4176",
    "FullTitle": "The Lord Shipley OBE"
  },
  {
    "MemberID": "2147",
    "FullTitle": "The Earl of Shrewsbury DL"
  },
  {
    "MemberID": "2546",
    "FullTitle": "The Rt Hon. the Lord Shutt of Greetland OBE"
  },
  {
    "MemberID": "3128",
    "FullTitle": "The Viscount Simon"
  },
  {
    "MemberID": "4251",
    "FullTitle": "The Lord Singh of Wimbledon CBE"
  },
  {
    "MemberID": "3120",
    "FullTitle": "The Lord Skidelsky"
  },
  {
    "MemberID": "3118",
    "FullTitle": "The Viscount Slim OBE DL"
  },
  {
    "MemberID": "4170",
    "FullTitle": "The Rt Hon. the Baroness Smith of Basildon"
  },
  {
    "MemberID": "3144",
    "FullTitle": "The Lord Smith of Clifton"
  },
  {
    "MemberID": "186",
    "FullTitle": "The Rt Hon. the Lord Smith of Finsbury"
  },
  {
    "MemberID": "3125",
    "FullTitle": "The Baroness Smith of Gilmorehill DL"
  },
  {
    "MemberID": "4542",
    "FullTitle": "The Lord Smith of Hindhead CBE"
  },
  {
    "MemberID": "3856",
    "FullTitle": "The Lord Smith of Kelvin KT CH"
  },
  {
    "MemberID": "2509",
    "FullTitle": "The Lord Smith of Leigh"
  },
  {
    "MemberID": "4323",
    "FullTitle": "The Baroness Smith of Newnham"
  },
  {
    "MemberID": "319",
    "FullTitle": "The Lord Snape"
  },
  {
    "MemberID": "160",
    "FullTitle": "The Lord Soley"
  },
  {
    "MemberID": "3147",
    "FullTitle": "The Duke of Somerset DL"
  },
  {
    "MemberID": "4345",
    "FullTitle": "The Rt Rev. the Lord Bishop of Southwark"
  },
  {
    "MemberID": "270",
    "FullTitle": "The Rt Hon. the Lord Spicer"
  },
  {
    "MemberID": "3137",
    "FullTitle": "The Earl of Stair"
  },
  {
    "MemberID": "4174",
    "FullTitle": "The Baroness Stedman-Scott OBE"
  },
  {
    "MemberID": "949",
    "FullTitle": "The Rt Hon. the Lord Steel of Aikwood KT KBE PC"
  },
  {
    "MemberID": "4239",
    "FullTitle": "The Lord Stephen"
  },
  {
    "MemberID": "2228",
    "FullTitle": "The Lord Sterling of Plaistow GCVO CBE"
  },
  {
    "MemberID": "2475",
    "FullTitle": "The Baroness Stern CBE"
  },
  {
    "MemberID": "3846",
    "FullTitle": "The Lord Stern of Brentford CH"
  },
  {
    "MemberID": "3733",
    "FullTitle": "The Lord Stevens of Kirkwhelpington QPM"
  },
  {
    "MemberID": "2227",
    "FullTitle": "The Lord Stevens of Ludgate"
  },
  {
    "MemberID": "4175",
    "FullTitle": "The Lord Stevenson of Balmacara"
  },
  {
    "MemberID": "2474",
    "FullTitle": "The Lord Stevenson of Coddenham CBE"
  },
  {
    "MemberID": "4233",
    "FullTitle": "The Lord Stirrup GCB AFC"
  },
  {
    "MemberID": "950",
    "FullTitle": "The Lord Stoddart of Swindon"
  },
  {
    "MemberID": "2222",
    "FullTitle": "The Lord Stone of Blackheath"
  },
  {
    "MemberID": "4215",
    "FullTitle": "The Lord Stoneham of Droxford"
  },
  {
    "MemberID": "4238",
    "FullTitle": "The Lord Storey CBE"
  },
  {
    "MemberID": "4205",
    "FullTitle": "The Rt Hon. the Baroness Stowell of Beeston MBE"
  },
  {
    "MemberID": "4204",
    "FullTitle": "The Lord Strasburger"
  },
  {
    "MemberID": "2221",
    "FullTitle": "The Rt Hon. the Lord Strathclyde CH"
  },
  {
    "MemberID": "4546",
    "FullTitle": "The Baroness Stroud"
  },
  {
    "MemberID": "445",
    "FullTitle": "The Rt Hon. the Lord Stunell OBE"
  },
  {
    "MemberID": "3897",
    "FullTitle": "The Lord Sugar"
  },
  {
    "MemberID": "4584",
    "FullTitle": "The Baroness Sugg CBE"
  },
  {
    "MemberID": "4328",
    "FullTitle": "The Lord Suri"
  },
  {
    "MemberID": "4298",
    "FullTitle": "The Baroness Suttie"
  },
  {
    "MemberID": "2235",
    "FullTitle": "The Lord Swinfen"
  },
  {
    "MemberID": "2233",
    "FullTitle": "The Rt Hon. the Baroness Symons of Vernham Dean"
  },
  {
    "MemberID": "1696",
    "FullTitle": "The Lord Taverne QC"
  },
  {
    "MemberID": "407",
    "FullTitle": "The Rt Hon. the Baroness Taylor of Bolton"
  },
  {
    "MemberID": "228",
    "FullTitle": "The Lord Taylor of Goss Moor"
  },
  {
    "MemberID": "3787",
    "FullTitle": "The Rt Hon. the Lord Taylor of Holbeach CBE"
  },
  {
    "MemberID": "1796",
    "FullTitle": "The Lord Taylor of Warwick"
  },
  {
    "MemberID": "952",
    "FullTitle": "The Rt Hon. the Lord Tebbit CH"
  },
  {
    "MemberID": "3789",
    "FullTitle": "The Lord Teverson"
  },
  {
    "MemberID": "4309",
    "FullTitle": "The Rt Hon. the Lord Thomas of Cwmgiedd"
  },
  {
    "MemberID": "1804",
    "FullTitle": "The Lord Thomas of Gresford OBE QC"
  },
  {
    "MemberID": "3785",
    "FullTitle": "The Baroness Thomas of Winchester MBE"
  },
  {
    "MemberID": "4558",
    "FullTitle": "The Baroness Thornhill MBE"
  },
  {
    "MemberID": "1782",
    "FullTitle": "The Baroness Thornton"
  },
  {
    "MemberID": "4353",
    "FullTitle": "The Lord Thurlow"
  },
  {
    "MemberID": "1399",
    "FullTitle": "The Rt Hon. the Viscount Thurso"
  },
  {
    "MemberID": "1702",
    "FullTitle": "The Lord Tomlinson"
  },
  {
    "MemberID": "200",
    "FullTitle": "The Baroness Tonge"
  },
  {
    "MemberID": "1703",
    "FullTitle": "The Lord Tope CBE"
  },
  {
    "MemberID": "542",
    "FullTitle": "The Rt Hon. the Lord Touhig"
  },
  {
    "MemberID": "4260",
    "FullTitle": "The Lord Trees"
  },
  {
    "MemberID": "1813",
    "FullTitle": "The Rt Hon. the Lord Trefgarne"
  },
  {
    "MemberID": "1829",
    "FullTitle": "The Viscount Trenchard"
  },
  {
    "MemberID": "4560",
    "FullTitle": "The Lord Trevethin and Oaksey QC"
  },
  {
    "MemberID": "3651",
    "FullTitle": "The Lord Triesman"
  },
  {
    "MemberID": "658",
    "FullTitle": "The Rt Hon. the Lord Trimble"
  },
  {
    "MemberID": "4200",
    "FullTitle": "The Lord True CBE"
  },
  {
    "MemberID": "3682",
    "FullTitle": "The Lord Truscott"
  },
  {
    "MemberID": "1705",
    "FullTitle": "The Lord Tugendhat"
  },
  {
    "MemberID": "3671",
    "FullTitle": "The Lord Tunnicliffe CBE"
  },
  {
    "MemberID": "2537",
    "FullTitle": "The Lord Turnberg"
  },
  {
    "MemberID": "3758",
    "FullTitle": "The Lord Turnbull KCB CVO"
  },
  {
    "MemberID": "3752",
    "FullTitle": "The Lord Turner of Ecchinswell"
  },
  {
    "MemberID": "225",
    "FullTitle": "The Rt Hon. the Lord Tyler"
  },
  {
    "MemberID": "4231",
    "FullTitle": "The Baroness Tyler of Enfield"
  },
  {
    "MemberID": "112",
    "FullTitle": "The Rt Hon. the Lord Tyrie"
  },
  {
    "MemberID": "1827",
    "FullTitle": "The Baroness Uddin"
  },
  {
    "MemberID": "1828",
    "FullTitle": "The Rt Hon. the Viscount Ullswater LVO"
  },
  {
    "MemberID": "3757",
    "FullTitle": "The Baroness Valentine"
  },
  {
    "MemberID": "3697",
    "FullTitle": "The Lord Vallance of Tummel"
  },
  {
    "MemberID": "4687",
    "FullTitle": "Lord Vaux of Harrowden"
  },
  {
    "MemberID": "4580",
    "FullTitle": "The Baroness Vere of Norbiton"
  },
  {
    "MemberID": "4299",
    "FullTitle": "The Lord Verjee CBE"
  },
  {
    "MemberID": "3790",
    "FullTitle": "The Baroness Verma"
  },
  {
    "MemberID": "1807",
    "FullTitle": "The Lord Vinson LVO DL"
  },
  {
    "MemberID": "1278",
    "FullTitle": "The Rt Hon. the Lord Wakeham DL"
  },
  {
    "MemberID": "957",
    "FullTitle": "The Rt Hon. the Lord Waldegrave of North Hill"
  },
  {
    "MemberID": "3825",
    "FullTitle": "The Lord Walker of Aldringham GCB CMG CBE"
  },
  {
    "MemberID": "2199",
    "FullTitle": "The Rt Hon. the Lord Walker of Gestingthorpe"
  },
  {
    "MemberID": "1816",
    "FullTitle": "The Rt Hon. the Lord Wallace of Saltaire"
  },
  {
    "MemberID": "630",
    "FullTitle": "The Rt Hon. the Lord Wallace of Tankerness QC"
  },
  {
    "MemberID": "2547",
    "FullTitle": "The Baroness Walmsley"
  },
  {
    "MemberID": "1732",
    "FullTitle": "The Rt Hon. the Lord Warner"
  },
  {
    "MemberID": "3839",
    "FullTitle": "The Rt Hon. the Baroness Warsi"
  },
  {
    "MemberID": "2471",
    "FullTitle": "The Baroness Warwick of Undercliffe"
  },
  {
    "MemberID": "4207",
    "FullTitle": "The Lord Wasserman"
  },
  {
    "MemberID": "4566",
    "FullTitle": "The Baroness Watkins of Tavistock"
  },
  {
    "MemberID": "1241",
    "FullTitle": "The Lord Watson of Invergowrie"
  },
  {
    "MemberID": "2487",
    "FullTitle": "The Lord Watson of Richmond CBE"
  },
  {
    "MemberID": "489",
    "FullTitle": "The Lord Watts"
  },
  {
    "MemberID": "1744",
    "FullTitle": "The Viscount Waverley"
  },
  {
    "MemberID": "4145",
    "FullTitle": "The Lord Wei"
  },
  {
    "MemberID": "4541",
    "FullTitle": "The Duke of Wellington"
  },
  {
    "MemberID": "3834",
    "FullTitle": "The Rt Hon. the Lord West of Spithead GCB DSC"
  },
  {
    "MemberID": "4199",
    "FullTitle": "The Baroness Wheatcroft"
  },
  {
    "MemberID": "4157",
    "FullTitle": "The Baroness Wheeler MBE"
  },
  {
    "MemberID": "2510",
    "FullTitle": "The Baroness Whitaker"
  },
  {
    "MemberID": "4292",
    "FullTitle": "The Lord Whitby"
  },
  {
    "MemberID": "2444",
    "FullTitle": "The Rt Hon. the Lord Whitty"
  },
  {
    "MemberID": "547",
    "FullTitle": "The Rt Hon. the Lord Wigley"
  },
  {
    "MemberID": "1727",
    "FullTitle": "The Baroness Wilcox"
  },
  {
    "MemberID": "53",
    "FullTitle": "The Rt Hon. the Lord Willetts"
  },
  {
    "MemberID": "1728",
    "FullTitle": "The Rt Hon. the Lord Williams of Elvel CBE"
  },
  {
    "MemberID": "3620",
    "FullTitle": "The Rt Rev. and the Rt Hon. the Lord Williams of Oystermouth"
  },
  {
    "MemberID": "4311",
    "FullTitle": "The Baroness Williams of Trafford"
  },
  {
    "MemberID": "4151",
    "FullTitle": "The Lord Willis of Knaresborough"
  },
  {
    "MemberID": "1775",
    "FullTitle": "The Lord Willoughby de Broke DL"
  },
  {
    "MemberID": "260",
    "FullTitle": "The Rt Hon. the Lord Wills"
  },
  {
    "MemberID": "2206",
    "FullTitle": "The Lord Wilson of Dinton GCB"
  },
  {
    "MemberID": "1763",
    "FullTitle": "The Lord Wilson of Tillyorn KT GCMG"
  },
  {
    "MemberID": "4256",
    "FullTitle": "The Rt Rev. the Lord Bishop of Winchester"
  },
  {
    "MemberID": "1770",
    "FullTitle": "The Lord Winston"
  },
  {
    "MemberID": "4347",
    "FullTitle": "The Baroness Wolf of Dulwich CBE"
  },
  {
    "MemberID": "4152",
    "FullTitle": "The Lord Wolfson of Aspley Guise"
  },
  {
    "MemberID": "4217",
    "FullTitle": "The Lord Wood of Anfield"
  },
  {
    "MemberID": "1773",
    "FullTitle": "The Rt Hon. the Lord Woolf"
  },
  {
    "MemberID": "964",
    "FullTitle": "The Lord Woolmer of Leeds"
  },
  {
    "MemberID": "4257",
    "FullTitle": "The Rt Rev. the Lord Bishop of Worcester"
  },
  {
    "MemberID": "4235",
    "FullTitle": "The Baroness Worthington"
  },
  {
    "MemberID": "965",
    "FullTitle": "The Lord Wrigglesworth"
  },
  {
    "MemberID": "1767",
    "FullTitle": "The Lord Wright of Richmond GCMG"
  },
  {
    "MemberID": "4685",
    "FullTitle": "The Baroness Wyld"
  },
  {
    "MemberID": "3762",
    "FullTitle": "The Most Rev. and the Rt Hon. the Lord Archbishop of York"
  },
  {
    "MemberID": "57",
    "FullTitle": "The Rt Hon. the Lord Young of Cookham CH"
  },
  {
    "MemberID": "1754",
    "FullTitle": "The Rt Hon. the Lord Young of Graffham CH DL"
  },
  {
    "MemberID": "3696",
    "FullTitle": "The Baroness Young of Hornsey OBE"
  },
  {
    "MemberID": "3702",
    "FullTitle": "The Lord Young of Norwood Green"
  },
  {
    "MemberID": "1755",
    "FullTitle": "The Baroness Young of Old Scone"
  },
  {
    "MemberID": "4169",
    "FullTitle": "The Viscount Younger of Leckie"
  }
]
)})
    },
    {

    },
    {
      name: "political_parties_data_cached_and_combined",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">🏛️</span> Political Parties <small>(cached & combined)</small>
*From verified and authoratative sources, including : [parliament.uk](http://data.parliament.uk). See below for full list of sources.*`
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
      name: "political_parties_combined_cached_data_version",
      value: (function(){return(
"1.0.0"
)})
    },
    {
      name: "political_parties_cached",
      inputs: ["MPs_cached","governing_party","party_alliances","partyPoliticalOrientation","partyPoliticalOrientationScore","partyParliamentarySeatingOrder"],
      value: (function(MPs_cached,governing_party,party_alliances,partyPoliticalOrientation,partyPoliticalOrientationScore,partyParliamentarySeatingOrder){return(
Array.from(MPs_cached.reduce((ps, mp) => { ps.add(mp.Party); return ps; }, new Set())).map(p => ({
  FullTitle: p, 
  SideOfHouse: (p === governing_party
    || (party_alliances.hasOwnProperty(governing_party) && party_alliances[governing_party].includes(p)))
    ? 'Right'
    : p === 'Speaker'? 'Centre' : 'Left',
  MPCount: MPs_cached.filter(mp => mp.Party === p).length,
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
      name: "political_party_data_uncached",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">🏛️</span> Political Parties <small>(from machine readable sources)</small>
*From verified and authoratative sources, including : [parliament.uk](http://data.parliament.uk).*`
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
      inputs: ["MPs_cached","governing_party","party_alliances","partyPoliticalOrientation","partyPoliticalOrientationScore","partyParliamentarySeatingOrder"],
      value: (function(MPs_cached,governing_party,party_alliances,partyPoliticalOrientation,partyPoliticalOrientationScore,partyParliamentarySeatingOrder){return(
Array.from(MPs_cached.reduce((ps, mp) => { ps.add(mp.Party); return ps; }, new Set())).map(p => ({
  FullTitle: p, 
  SideOfHouse: (p === governing_party
    || (party_alliances.hasOwnProperty(governing_party) && party_alliances[governing_party].includes(p)))
    ? 'Right'
    : p === 'Speaker'? 'Centre' : 'Left',
  MPCount: MPs_cached.filter(mp => mp.Party === p).length,
  Orientation: partyPoliticalOrientation(p), 
  OrientationScore: partyPoliticalOrientationScore(p),
  SeatingOrder: partyParliamentarySeatingOrder(p)
})).sort((a, b) => (a.SeatingOrder < b.SeatingOrder)? -1 : (a.SeatingOrder > b.SeatingOrder)? 1 : 0)
)})
    },
    {
      name: "governing_party",
      inputs: ["MPs_cached"],
      value: (function(MPs_cached){return(
MPs_cached.find(mp => mp.Post && mp.Post.includes("Prime Minister")).Party
)})
    },
    {
      name: "political_parties_data_manually_collated",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">🏛️</span> Political Parties <small>(manually collated)</small>
*From verified and authoratative sources. See below for a full list of sources.*

*This dataset is included in order to facilitate collaborative collation and correction of data from disperate, verified sources, that are not practically machine readable. Once verified, data added here will be merged into the cached combined source above. Once you're done adding data, see the [Fork & Merge](https://beta.observablehq.com/@observablehq/fork-share-merge) process for details on how to get your work included into the data sets used in the Emojiocracy visualisations.*

---`
)})
    },
    {
      name: "how_to_manually_collate_political_parties_data",
      inputs: ["md"],
      value: (function(md){return(
md`##### ** How To Manually Collate & contribute MP Data **
*Copy all of the [political_parties_manually_collated_data_template](#political_parties_manually_collated_data_template) cell below to a new Observable cell, rename the variable assigned, then add the new property to each political party as shown below...<br>
(change the name of "NewProperty" & "NewPropertySourceURL",* 🤦 *obvs!)*:
 <pre>
political_parties_manually_collated_newimportantstuff = [
  {
    "MemberID": "172",
    "FullTitle": "Rt Hon Diane Abbott MP",
    "NewProperty": "Bla bla",
    "NewPropertySourceURL": "http://example.com..."
  },...
]</pre>
`
)})
    },
    {
      name: "political_parties_manually_collated_data_template",
      value: (function(){return(
[
  {
    "FullTitle": "Democratic Unionist Party"
  },
  {
    "FullTitle": "Conservative"
  },
  {
    "FullTitle": "Speaker"
  },
  {
    "FullTitle": "Labour"
  },
  {
    "FullTitle": "Liberal Democrat"
  },
  {
    "FullTitle": "Scottish National Party"
  },
  {
    "FullTitle": "Plaid Cymru"
  },
  {
    "FullTitle": "Sinn Féin"
  },
  {
    "FullTitle": "Green Party"
  },
  {
    "FullTitle": "Independent"
  }
]
)})
    },
    {

    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---
<br><br><br>`
)})
    },
    {
      name: "ui_components",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">📈</span> UI Components
*For useage examples, see available click through to one of the [visualisations](#available_visualisations) listed above.*

---`
)})
    },
    {
      name: "required",
      value: (function(){return(
(arg, type, fn_name = "Invoked") => { 
  // TODO find a way to get the invoked function name in Observable.
  throw new Error(`The ${fn_name} function requires a ${arg || ""} arg${(type)? " of type " + type : ""}.`);
}
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
      inputs: ["parliamentElementFromPartiesAndMPsObjs","_","parliamentElementFromMPsObjs","tooltips"],
      value: (function(parliamentElementFromPartiesAndMPsObjs,_,parliamentElementFromMPsObjs,tooltips){return(
function({ parties, mps, order = "DisplayAs", group = "Bench", with_vote = false, compact = false } = {}) {

  let container_el = (["Party","Bench"].includes(group))
  ? parliamentElementFromPartiesAndMPsObjs({
      parties,
      mps: _.orderBy(mps, [order], ["asc"]),
      group,
      with_vote,
      compact
    })
  : parliamentElementFromMPsObjs({
      mps: _.orderBy(mps, [order], ["asc"]),
      group,
      with_vote,
      compact
    })
  ;
  
  tooltips.addToSelector(".parliament");
  
  return container_el;
}
)})
    },
    {
      name: "MPsConstituenciesHexMap",
      inputs: ["d3","DOM","MPs_constituencies_hex_cached"],
      value: (function(d3,DOM,MPs_constituencies_hex_cached){return(
(w = 960, h = 580) => {
  
  const svg = d3.select(DOM.svg(w, h)).style("background-color", "#F9F9F9");
  const hexes = d3.renderHexJSON(MPs_constituencies_hex_cached, w, h);
    
  svg
    .append("g")
    .attr("transform", `translate(10,10)`);

  svg
    .selectAll("g")
    .data(hexes)
    .enter()
    .append("g")
    .attr("transform", hex => `translate(${hex.x},${hex.y})`)
      .append("polygon")
      .attr("points", hex => hex.points)
      .attr("stroke", "white")
      .attr("stroke-width", "2")
      .attr("fill", d => "blue");

  return svg.node();
}
)})
    },
    {
      name: "MPTooltipContent",
      value: (function(){return(
el => `<div class="mp-tooltip">
    <h4><a href="https://hansard.parliament.uk/search/MemberContributions?memberId=${el.id.replace("member","")}" rel="nofollow noopener" target="_blank">${el.getAttribute("data-full-title")}</a><span>${el.getAttribute("data-post")? " - " + el.getAttribute("data-post") : ""}</span></h4>
    <small>${el.getAttribute("data-party")} ${el.getAttribute("data-constituency")}</small>
    <small>Expenses Claimed: <a href="http://www.theipsa.org.uk/mp-costs/annual-publication/" tabindex="-1" rel="nofollow noopener" target="_blank">£${el.getAttribute("data-expenses")}</a></small>
    <ul class="mp-contact-details">
      <li class="mp-website${el.getAttribute("data-website")? "" : " missing-data"}">
        <a href="${el.getAttribute("data-website")}" tabindex="-1" rel="nofollow noopener" target="_blank">${el.getAttribute("data-website")}</a>
      </li>
      <li class="mp-twitter${el.getAttribute("data-twitter")? "" : " missing-data"}">
        <a href="https://twitter.com/${el.getAttribute("data-twitter")}" tabindex="-1" rel="nofollow noopener" target="_blank">${el.getAttribute("data-twitter").split("?").shift()}</a>
      </li>
      <li class="mp-tel${el.getAttribute("data-tel")? "" : " missing-data"}">
        <a href="tel:${el.getAttribute("data-tel")}" tabindex="-1" rel="nofollow noopener" target="_blank">${el.getAttribute("data-tel")? "&#x260E&#xFE0F" : ""}</a>
      </li>
      <li class="mp-email${el.getAttribute("data-email")? "" : " missing-data"}">
        <a href="mailto:${el.getAttribute("data-email")}" tabindex="-1" rel="nofollow noopener" target="_blank">${el.getAttribute("data-email")? "&#x1F4E7" : ""}</a>
      </li>
    </ul>
  </div>`
)})
    },
    {
      name: "MPElementFromMPObj",
      inputs: ["html","emoji"],
      value: (function(html,emoji){return(
(mp) => html`<span class="mp" id="member${mp.MemberID}" tabindex="1" data-name="${mp.FullTitle}" data-list-name="${mp.ListAs}" data-search-name="${mp.FirstAndLastName}" data-party="${mp.Party}" data-lgbtqia="${mp.LGBTQIA}" data-gender="${mp.Gender}" data-age="${mp.Age}" data-ethnicity="${mp.Ethnicity}" data-vote="${(mp.Vote===1)? "Aye" : (mp.Vote < 0? "Noe" : "DidNotVote")}" data-full-title="${mp.FullTitle}" data-post="${mp.Post? mp.Post : ""}" data-constituency="Member for ${mp.MemberFrom}" data-expenses="${mp.Expenses? new Intl.NumberFormat("en-GB", {}).format(mp.Expenses) : "Uknown"}" data-twitter="${mp.Twitter? mp.Twitter : ""}" data-email="${(mp.EmailConstituency || mp.EmailParliamentary)? (mp.EmailConstituency || mp.EmailParliamentary) : ""}" data-website="${mp.Website? mp.Website : ""}" data-tel="${(mp.TelConstituency || mp.TelParliamentary)? (mp.TelConstituency || mp.TelParliamentary) : ""}">${emoji(`${mp.Ethnicity || 'British Caucasion'} ${mp.Gender}${mp.Age > 53? " Old" : ""}`)}</span>`
)})
    },
    {
      name: "MPsOrderByForm",
      inputs: ["radio","enabled_MPs_orderby_dimensions"],
      value: (function(radio,enabled_MPs_orderby_dimensions){return(
({ with_name = false, with_vote = false, value, opts } = {}) => {
  
  if (!opts) {
    opts = [
      { label: "Gender", value: "Gender" },
      { label: "Age", value: "Age" },
      { label: "Ethnicity", value: "EthnicityIndex" },
      { label: "Sexuality", value: "Sexuality" },
      { label: "Party", value: "Party" }
    ];
    if (with_vote) {
      opts.push({ label: "Vote", value: "Vote" });
    }
    if (with_name) {
      opts.unshift({ label: "Name", value: "ListAs" });
    }
    opts = [
      ...opts,
      ...[{ label: "Expenses", value: "Expenses" },
          { label: "Net Worth", value: "NetWorth" },
          { label: "Edu. Level", value: "EducationLevelIndex" }]
    ];
  }
  
  value = (!value || !opts.find(opt => opt.value === value))? opts[0].value : value;
  
  const reorder = radio({
    title: "Order By",
    options: opts,
    value
  });

  Array.from(reorder.querySelectorAll("input") || [])
    .filter(d => !enabled_MPs_orderby_dimensions.includes(d.value))
    .forEach(d => { 
      d.disabled = true; 
      d.parentNode.title = "Coming Soon. See the request for help on the Emojiocracy page linked up top ^";
      d.parentNode.classList.add("disabled");
    });
  
  return reorder;
}
)})
    },
    {
      name: "MPsGroupByForm",
      inputs: ["radio","enabled_MPs_groupby_dimensions"],
      value: (function(radio,enabled_MPs_groupby_dimensions){return(
({ with_vote = false, with_bench = false, value, opts } = {}) => {
  
  if (!opts) {
    opts = [
      { label: "Gender", value: "Gender" },
      { label: "Generation", value: "Generation" },
      { label: "Ethnicity", value: "Ethnicity" },
      { label: "Sexuality", value: "Sexuality" }
    ];

    if (with_bench) {
        opts.unshift({ label: "Party & Bench", value: "Bench" });
    }

    if (with_vote) {
      opts.push({ label: "Vote", value: "Vote" });
    }

    opts = [
      { label: "Party", value: "Party" },
      ...opts,
      ...[
      { label: "Expenses", value: "ExpensesIndex" },
      { label: "Edu. Level", value: "EducationLevel" },
      { label: "Edu. Private", value: "PrivatelyEducated" },
      { label: "Oxbridge", value: "OxbridgeGraduate" }
      ],
      { label: "None", value: "None" }
    ];
  }
  
  value = (!value || !opts.find(opt => opt.value === value))? opts[0].value : value;
  
  const regroup = radio({
    title: "Group By",
    options: opts,
    value
  });

  Array.from(regroup.querySelectorAll("input") || [])
    .filter(d => !enabled_MPs_groupby_dimensions.includes(d.value))
    .forEach(d => { 
      d.disabled = true; 
      d.parentNode.title = "Coming Soon. See the request for help on the Emojiocracy page linked up top ^";
      d.parentNode.classList.add("disabled");
    });
  
  return regroup;
}
)})
    },
    {
      name: "parliamentElementFromMPsObjs",
      inputs: ["html","genders","generations","MPs_ethnicities","MPs_sexual_orientations","MPs_expenses_index","MPElementFromMPObj"],
      value: (function(html,genders,generations,MPs_ethnicities,MPs_sexual_orientations,MPs_expenses_index,MPElementFromMPObj){return(
({ mps, group = "None", with_vote = false, compact = false } = {}) => {
  
  let container_el = html`<div class="parliament${compact? " compact" : ""}" data-with-votes="${!!with_vote}" data-grouped-by="${group}" data-grouped-by-party="false"></div>`;
  let group_elements = {};
  
  switch (group) {
    case "Gender":
      let gender_label_map = { F: "Female", M: "Male" };
      for (const gender of genders) {
        let element = html`<div class="mps-group"><h5 class="mps-group-label">${gender_label_map[gender] || gender}</h5><div class="mps"></div></div>`;
        container_el.appendChild(element);
        group_elements[gender] = element.querySelector(".mps");
      }
    break;
    case "Generation": 
      for (const generation of [...generations, { name: "Unknown", start: 1928, end: 2013 }]) {
        let element = html`<div class="mps-group"><h5 class="mps-group-label">${generation.name} (${generation.start}-${generation.end})</h5><div class="mps"></div></div>`;
        container_el.appendChild(element);
        group_elements[generation.name] = element.querySelector(".mps");
      }
    break;
    case "Ethnicity":
      for (const ethnicity of MPs_ethnicities) {
        let element = html`<div class="mps-group" style="order:-${mps.filter(mp=>mp[group]===ethnicity).length}"><h5 class="mps-group-label">${ethnicity}</h5><div class="mps"></div></div>`;
        container_el.appendChild(element);
        group_elements[ethnicity] = element.querySelector(".mps");
      }
    break;
    case "Sexuality":
      for (const sexuality of MPs_sexual_orientations) {
        let element = html`<div class="mps-group" style="order:-${mps.filter(mp=>mp[group]===sexuality).length}"><h5 class="mps-group-label">${sexuality}</h5><div class="mps"></div></div>`;
        container_el.appendChild(element);
        group_elements[sexuality] = element.querySelector(".mps");
      }
    break;
    case "Vote":
      for (const v of [-1, 0, 1]) {
        let vote_label_map = { "-1": "No", "0": "Did Not Vote", "1": "Aye" };
        let element = html`<div class="mps-group" style="order:-${mps.filter(mp=>mp[group]===v).length}"><h5 class="mps-group-label">${vote_label_map[`${v}`]}</h5><div class="mps"></div></div>`;
        container_el.appendChild(element);
        group_elements[`${v}`] = element.querySelector(".mps");
      }
    break;
    case "ExpensesIndex":
      MPs_expenses_index.forEach((v, i) => {
        let expenses_label_map = { "50000": "£0.00 to £50k", "100000": "£50k to £100k", "150000": "£100k to £150k", "200000": "£150k to £200k", "250000": "£200k to £250k", "300000": "£250k to £300k" };
        let element = html`<div class="mps-group" style="order:-v"><h5 class="mps-group-label" title="Expenses claimed, 2017-18">${expenses_label_map[`${v}`]} <small>(expenses claimed 2017-2018)</small></h5><div class="mps"></div></div>`;
        container_el.appendChild(element);
        group_elements[`${i}`] = element.querySelector(".mps");
      });
    break;
  }
  
  if (group !== "None") {
    for (const mp of mps) {
      group_elements[`${mp[group]}`].appendChild(MPElementFromMPObj(mp));
    }
  } else {
    for (const mp of mps) {
      container_el.appendChild(MPElementFromMPObj(mp));
    }
  }
  
  return container_el;
}
)})
    },
    {
      name: "parliamentElementFromPartiesAndMPsObjs",
      inputs: ["html","partyElementFromPartyObj","MPElementFromMPObj"],
      value: (function(html,partyElementFromPartyObj,MPElementFromMPObj){return(
({ parties, mps, group = "Bench", with_vote = false, compact = false } = {}) => {
  
  let container_el = html`<div class="parliament${compact? " compact" : ""}" data-with-votes="${!!with_vote}" data-grouped-by="${group}" data-grouped-by-party="true"></div>`;
  let party_elements = {};
  
  for (const party of parties) {
    let party_element = partyElementFromPartyObj({ party, group });
    container_el.appendChild(party_element);
    if (group === "Bench") {
      party_elements[`${party.FullTitle}-frontbench`] = party_element.querySelector(`.mps.frontbench`);
      party_elements[`${party.FullTitle}-backbench`] = party_element.querySelector(`.mps.backbench`);
    } else {
      party_elements[`${party.FullTitle}`] = party_element.querySelector(`.mps`);
    }
  }

  if (group === "Bench") {
    for (const mp of mps) {
      party_elements[`${mp.Party}-${mp.FrontBench? 'frontbench' : 'backbench'}`]
        .appendChild(MPElementFromMPObj(mp));
    }
  } else {
    for (const mp of mps) {
      party_elements[`${mp.Party}`].appendChild(MPElementFromMPObj(mp));
    }
  }
  
  return container_el;
}
)})
    },
    {
      name: "partyElementFromPartyObj",
      inputs: ["html"],
      value: (function(html){return(
({ party, group }) => html`
    <div class="mps-group" data-party="${party.FullTitle}" data-side-of-house="${party.SideOfHouse}" data-political-orientation="${party.Orientation}">
      <h5 class="mps-group-label">${party.FullTitle}</h5>
      ${
      (group === "Bench")
      ? `<div class="backbench mps"></div><div class="frontbench mps"></div>`
      : `<div class="mps"></div>`
      }
    </div>`
)})
    },
    {
      name: "voteResultElementFromVoteResultObj",
      inputs: ["html","emoji"],
      value: (function(html,emoji){return(
result => html`<div class="vote-result">
<span class="vote ayes"><span class="vote-type">Ayes</span><span class="vote-count">${result.Ayes} ${emoji('Thumbs Up')}</span></span>
<span class="vote noes"><span class="vote-type">Noes</span><span class="vote-count">${result.Noes} ${emoji('Thumbs Down')}</span></span>
<span class="vote did-not-vote">${Math.abs(result.Ayes - result.Noes)} vote margin & <strong>${result.DidNotVote} MPs</strong>, did not vote. ${emoji('Eyes')}</span>
</div>
<br>
<hr>
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
      name: "searchWithOptions",
      inputs: ["required","input","html"],
      value: (function(required,input,html){return(
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
    options = required("options", `array of objects: [{ value: "FirstAndLastName", label="First and last name"},...]`, "searchWithOptions"),
    id = "input" + Date.now(),
    autocomplete = "on",
    type = "search"
  } = {}) => {
  const getValue = input => {
    const search_by = input.parentNode.querySelector('input[name="search-by"]:checked') || options[0];
    if (search_by) {
      input.setAttribute("placeholder", search_by.parentNode? search_by.parentNode.textContent : search_by.label);
    }
    return {
      for: input.value, 
      by: (search_by || {}).value
    }
  };
  const form = input({
    type,
    title,
    description,
    submit,
    getValue,
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
    form.append(datalist_el);
  }
  form.output.remove();
  form.onblur = e => console.log(e);
  if (options) {
    let i = 0;
    for (let opt of options) {
      form.append(html`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;"><input type="radio" name="search-by" style="vertical-align: baseline;" value="${opt.value}" ${i===0? "checked" : ""}>${opt.label}</label>`);
      i++;
    }
  }
  form.append(html`<br><br><hr>`);
  return form;
}
)})
    },
    {
      name: "dataStoreFactory",
      value: (function(){return(
(name = "data", storage = window.localStorage) => {

  let store_name = `emojoicracy-${name}-datastore`;

  const key = item_key => store_name + ':' + item_key;
  
  const parse = result => {

    if (result) {
      try {
        result = JSON.parse(result).data;
      } catch(e) {
        console.warn(`ERROR : failed to parse ${store_name} stored json:`, result);
      }
    } else {
      result = false;
    }
    return result;
  };
  
  const isQuotaExceeded = e => {

    let quota_exceeded = false;

    if (e) {
      if (e.code) {
        switch (e.code) {
          case 22:
            // modern browsers
            quota_exceeded = true;
          break;
          case 1014:
            // Firefox
            if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                quota_exceeded = true;
            }
          break;
        }
      } else if (e.number === -2147024882) {
        // Internet Explorer 8
        quota_exceeded = true;
      }
    }
    
    if (quota_exceeded) {
      console.warn("STORAGE ERROR : Quota exceeded");
      try {
        storage.clear();
        console.warn("STORAGE : Cleared localStorage to make space for data version updates.");
      } catch(e) {
        console.warn("STORAGE : Failed to clear localStorage.");
      }
    }
    
    return quota_exceeded;
  };

  const setItem = (_item_key, data) => {

    let item_key = key(_item_key);

    console.debug(`STORAGE : attempting to save to ${store_name} with key: ${item_key}`, data);

    if (typeof data === 'undefined') {
      throw "STORAGE ERROR : Failed to save to storage, data : undefined";
    }
    try {
      storage.setItem(item_key, JSON.stringify({ data: data }));
      //console.debug(`STORAGE : set item : ${item_key}`, data);
    } catch(e) {
      if (isQuotaExceeded(e)) {
        setItem(_item_key, data);
      } else {
        console.warn("STORAGE ERROR : Failed to save to storage, data : ", data);
      }
    }
  };
  
  const getItem = (_item_key) => {

    let item_key = key(_item_key);
    let result;

    //console.debug(`STORAGE - attempting to load from ${store_name} storage with key : ${item_key}`);

    try {
      result = parse(storage.getItem(item_key));
    } catch(e) {
      //console.log(`STORAGE ERROR - getItem : ${item_key}`, e);
    }
    if (!result) {
      console.warn(`STORAGE ERROR - getItem : ${item_key} NOT FOUND.`);
    } else {
      //console.debug(`STORAGE SUCCESS - got item : ${item_key}`, result);
    }
    return result;
  };
  
  const removeItem = (_item_key) => {

    let item_key = key(_item_key);

    try {
      storage.removeItem(item_key);
      console.info("STORAGE : removed item", item_key);
    } catch(e) {
      throw "STORAGE ERROR : Failed to remove from storage, key : " + e;
    }
    return true;
  };
  
  return {
    setItem,
    getItem,
    removeItem
  };
}
)})
    },
    {
      name: "MPsUncachedDataStore",
      inputs: ["dataStoreFactory","MPs_uncached_data_version"],
      value: (function(dataStoreFactory,MPs_uncached_data_version){return(
dataStoreFactory(`MPs_uncached_v${MPs_uncached_data_version}`)
)})
    },
    {
      name: "MPsCachedAndCombinedDataStore",
      inputs: ["dataStoreFactory","MPs_combined_cached_data_version"],
      value: (function(dataStoreFactory,MPs_combined_cached_data_version){return(
dataStoreFactory(`MPs_combined_and_cached_v${MPs_combined_cached_data_version}`)
)})
    },
    {
      name: "PoliticalPartiesCombinedAndCachedDataStore",
      inputs: ["dataStoreFactory","political_parties_combined_cached_data_version"],
      value: (function(dataStoreFactory,political_parties_combined_cached_data_version){return(
dataStoreFactory(`political_parties_combined_and_cached_v${political_parties_combined_cached_data_version}`)
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
      name: "getConstrainedDateISO",
      value: (function(){return(
(date_string, min = new Date("2000-01-01"), max = new Date)  => {
  let d = date_string? new Date(date_string) : new Date;
  if (d.getTime() > max.getTime()) {
    d = max;
  }
  if (d.getTime() < min.getTime()) {
    d = min;
  }
  return `${d.getFullYear()}-${(`${d.getMonth() + 1}`).padStart(2, "0")}-${(`${d.getDate()}`).padStart(2, "0")}`;
}
)})
    },
    {
      name: "today_iso",
      inputs: ["getConstrainedDateISO"],
      value: (function(getConstrainedDateISO){return(
getConstrainedDateISO()
)})
    },
    {
      name: "sources",
      value: (function()
{ 
  return `
 *Built on [Emojiocracy](https://beta.observablehq.com/@atomless/emojiocracy), with data from [wikipedia](https://en.wikipedia.org/wiki/List_of_ethnic_minority_politicians_in_the_United_Kingdom), [parliament.uk](http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7CIsEligible=true/) & [theipsa.org.uk](http://theipsa.org.uk)*

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
## <span style="font-size:4rem">👁️</span> CSS Stylesheets
*For useage examples, see available click through to one of the [visualisations](#available_visualisations) listed above.*

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
  --party_clr_independent: hsl(0, 0%, 80%);

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
form {
  position: relative;
}

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

label {
  font-style: italic;
  position: relative;
}

label.disabled:hover::after {
  content: "⤹ help to gather missing data!";
  position: absolute;
  display: block;
  width: 18rem;
  top: -1.5rem;
  left: 0.5rem;
  color: var(--emojiocracy_clr_1);
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

.parliament {
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  margin-left: -14px;
  overflow: hidden;
}

.parliament[data-grouped-by="None"] {
  display: block;
  width: 100%;
  padding: 14px;
}

.mps-group {
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 0.7rem 0.5rem 0.7rem;
  margin: 0 1px 2px 0;
  border: 0 solid var(--party_clr_independent);
  border-left-width: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--party_clr_bg);
}

.mps-group[data-side-of-house="Left"] {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}

.mps-group[data-party="Speaker"] {
  display: flex;
  align-items: flex-end;
  align-items 
  border-left-width: 0;
  border-right-width: 0.5rem;
}

.mps-group[data-party="Speaker"],
.mps-group[data-party="Speaker"] .mps {
  background: hsl(0, 0%, 100%);
}

.parliament:not([data-grouped-by="Bench"]) .mp[data-party="Speaker"],
.parliament:not([data-grouped-by="Bench"]) .mps-group[data-party="Speaker"] {
  display: none;
}

.mps-group-label {
  margin: 0 1rem 0 0;
  line-height: 2rem;
  font-weight: 600;
  flex-basis: 100%;
}

.mps-group[data-side-of-house="Left"] .mps-group-label {
  order: 1000;
}

.mps-group[data-party="Speaker"] .mps-group-label {
  text-align: right;
  margin-right: 0;
  align-self: flex-end;
}

.mps {
  box-sizing: border-box;
  margin: 0.15rem 0 0.15rem 0;
  max-width: 100%;
  border-radius: 0.25rem;
  background-color: var(--party_clr_bg);
}

.mps-group[data-side-of-house="Right"] .backbench:not(:empty) + .frontbench {
  border-top: 2px solid white;
  width: 100%;
}

.mps-group[data-side-of-house="Left"] .backbench:not(:empty) + .frontbench {
  border-bottom: 2px solid white;
  width: 100%;
}

.mps:empty {
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

.parliament[data-grouped-by-party="false"] .mp {
  border-bottom-width: 6px;
}

.mp[data-matching="true"] {
  font-size: 3rem;
}

.mp:focus {
  outline: none;
  border-color: lightgrey;
}

.parliament:not(.compact)[data-with-votes="true"] .mp[data-vote="DidNotVote"]:not(:hover) {
  opacity: 0.4;
}

.mp[data-vote="Aye"]::after {
  content: "✓";
  text-shadow: 0.05rem 0.15rem 0.35rem hsl(0, 0%, 20%);
  font-weight: 700;
  color: hsl(108, 100%, 45%);
  position: absolute;
  top: -0.65rem;
  left: -0.05rem;
  pointer-events: none;
}

.mp[data-vote="Noe"]::after {
  content: "❌";
  text-shadow: -0.05rem 0.1rem 0.25rem hsl(0, 0%, 10%);
  font-size: 0.65rem;
  position: absolute;
  top: -0.65rem;
  right: 0;
  pointer-events: none;
}

.mp[data-party*="Labour"]:focus,
.mps-group[data-party*="Labour"],
.parliament.compact .mp[data-party*="Labour"],
.parliament[data-grouped-by-party="false"] .mp[data-party*="Labour"] {
  border-color: var(--party_clr_labour);
}

.mp[data-party="Conservative"]:focus,
.mps-group[data-party="Conservative"],
.parliament.compact .mp[data-party="Conservative"],
.parliament[data-grouped-by-party="false"] .mp[data-party="Conservative"]  {
  border-color: var(--party_clr_conservative);
}

.mp[data-party="Liberal Democrat"]:focus,
.mps-group[data-party="Liberal Democrat"],
.parliament.compact .mp[data-party="Liberal Democrat"],
.parliament[data-grouped-by-party="false"] .mp[data-party="Liberal Democrat"] {
  border-color: var(--party_clr_liberal_democrat);
}

.mp[data-party="Green Party"]:focus,
.mps-group[data-party="Green Party"],
.parliament.compact .mp[data-party="Green Party"],
.parliament[data-grouped-by-party="false"] .mp[data-party="Green Party"] {
  border-color: var(--party_clr_green_party);
}

.mp[data-party="Plaid Cymru"]:focus,
.mps-group[data-party="Plaid Cymru"],
.parliament.compact .mp[data-party="Plaid Cymru"],
.parliament[data-grouped-by-party="false"] .mp[data-party="Plaid Cymru"] {
  border-color: var(--party_clr_plaid_cymru);
}

.mp[data-party*="Sinn"]:focus,
.mps-group[data-party="Sinn Féin"],
.parliament.compact .mp[data-party="Sinn Féin"],
.parliament[data-grouped-by-party="false"] .mp[data-party="Sinn Féin"] {
  border-color: var(--party_clr_sinn_féin);
}

.mp[data-party="Scottish National Party"]:focus,
.mps-group[data-party="Scottish National Party"],
.parliament.compact .mp[data-party="Scottish National Party"],
.parliament[data-grouped-by-party="false"] .mp[data-party="Scottish National Party"] {
  border-color: var(--party_clr_scottish_national_party);
}

.mp[data-party="Democratic Unionist Party"]:focus,
.mps-group[data-party="Democratic Unionist Party"],
.parliament.compact .mp[data-party="Democratic Unionist Party"],
.parliament[data-grouped-by-party="false"] .mp[data-party="Democratic Unionist Party"] {
  border-color: var(--party_clr_democratic_unionist_party);
}

.mp[data-party*="Independent"]:focus,
.mps-group[data-party*="Independent"],
.parliament.compact .mp[data-party*="Independent"],
.parliament[data-grouped-by-party="false"] .mp[data-party*="Independent"] {
  border-color: var(--party_clr_independent);
}

.mp[data-lgbtqia="true"]::before {
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
  margin-top: 0.5rem;
  line-height: 1.25rem;
}

.mp-tooltip h4 span {
  color: lightgrey;
}

.mp-tooltip small {
  display: block;
}

.mp-tooltip small + small {
  margin-top: 1rem;
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
  pointer-events: all;
}

.mp-tooltip h4 a,
.mp-tooltip a {
  position: relative;
  color: var(--emojiocracy_clr_3);
}

.mp-tooltip a:focus,
.mp-tooltip a:hover,
.mp-tooltip a:active {
  color: var(--emojiocracy_clr_4);
}

.compact .mp {
  border-width: 0 0 0 1px;
  max-width: 1px;
  height: 3rem;
  line-height: 3rem;
  overflow: hidden;
}

.compact .mp:focus,
.compact .mp:hover {
  max-width: 1.5rem;
  overflow: visible;
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
      inputs: ["html"],
      value: (function(html){return(
html`<link href="https://unpkg.com/tippy.js@3.3.0/dist/themes/google.css" rel="stylesheet" />`
)})
    },
    {

    },
    {
      name: "dependencies",
      inputs: ["md"],
      value: (function(md){return(
md`---
## <span style="font-size:4rem">🔧</span> Dependencies`
)})
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
      name: "letTheLightIn",
      value: (function(){return(
async url => fetch(`https://cors.io/?${encodeURI(url)}`)
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
require("d3@5", "d3-hexjson", "d3-format")
)})
    },
    {

    },
    {
      name: "license_markup",
      inputs: ["html"],
      value: (function(html){return(
html`<br><br><br><p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#"><em>
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="https://beta.observablehq.com/@atomless/emojiocracy">
    <span property="dct:title">James Tindall</span></a>
  has waived all copyright and related or neighboring rights to
  <a href="https://beta.observablehq.com/@atomless/emojiocracy"><span property="dct:title">Emojiocracy</span></a>.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="GB" about="https://beta.observablehq.com/@atomless/emojiocracy">The United Kingdom</span>.
</em></p>`
)})
    }
  ]
};

const m1 = {
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
  id: "c7b1a3f70bc116b2@4081",
  modules: [m0,m1]
};

export default notebook;