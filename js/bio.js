var config = {
  branch: {
    lineWidth: 5,
    spacingX: 30,
    showLabel: true,
  },
  commit: {
    spacingY:3-50,
    dot: {
      size: 8
    },
    message: {
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
    },
  }
};

var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical",
  author: "Itsuki Sakitsu <itsuki.sakitsu@gmail.com>",
  template: config
});

let emptyCommit = {dotSize: 1, message: " "};

// 1990
var master = gitgraph.branch("master");
master.commit("1990 - Born in Japan");

// 2009
var keio = gitgraph.branch("Keio Univ");
keio.commit("2009 - Enroll in Keio Univ, Faculty of Environment and Information Studies");

// 2010
var jklab = gitgraph.branch("JKlab");
jklab.commit("2010 - Joined Kokuryo Lab");

// 2012
keio.checkout();
var hhlab = gitgraph.branch("HHlab");
hhlab.commit("2012 - Joined Hagino Hattori allied Lab");
jklab.merge(keio, "2012 - Left Kokuryo Lab");

// 2013
hhlab.merge(keio, "2013 - Graduated Keio Univ");
keio.merge(master, "2013 - Graduated Keio Univ")

var recruit = master.branch({
  parentBranch: master,
  name: "Recruit Holdings Co., Ltd.",
  column: 4
});
recruit.checkout();
gitgraph.commit("2013 - Joined Recruit Holdings Co., Ltd.")

// 2015
gitgraph.commit("2015 - Assigned as Techlead")

// 2017
gitgraph.commit("2017 - Assigned as Group manager")

// 2018
master.checkout();
master.commit(emptyCommit);
var keio = gitgraph.branch({
  parentBranch: master,
  name: "Keio Univ",
  column: 1
})
keio.commit("2018 - Joined Keio Univ as a part-time teacher")

recruit.checkout();
recruit.merge(master, "2018 - Left Recruit Lifestyle Co., Ltd.")

master.checkout();
var studist = master.branch("Studist Co., Ltd.");
studist.commit("2018 - Joined Studist Co., Ltd. as CTO")

master.commit(emptyCommit)
keio.commit(emptyCommit)

// 2019
