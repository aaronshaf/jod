# Journal of Discourses: quote validation report

Quotes cited by evangelical, countercult and critic sources (Mormonism Research Ministry, Utah Lighthouse Ministry, IRR, CARM, GotQuestions, MormonThink and similar) were compared with the text in this site's database (https://jod.mrm.org/data/). Only passages whose cited words match our text exactly are used on the site, and the site always shows **our** text verbatim, never the citing source's wording. The site presents the quotes neutrally (quote, speaker, discourse reference, portrait) with no commentary.

## Summary

- **The daily rotation is these 282 quotes and nothing else** (`gen/quotes-priority.json`; no automatically picked filler). The quote of the day is the day of the year in America/Denver modulo 282 (list order); each quote has a permanent number (`/quotes/<n>/`, 1-381 with gaps), the Atom feed and `/quotes.json` use the same list. Numbers that were dropped in the October 2026 audit (see below) redirect to `/quotes/`. The rotation repeats every 282 days.
- Candidate passages: after a second research pass (about 3,800 source pages crawled: the mrm.org sitemap, all UTLM site posts and book chapters, CARM, IRR, GotQuestions Mormon pages, MormonThink, Wikipedia; 624 pages that cite the Journal of Discourses were matched against the database) there were **1,249** distinct exact-matching passages (previous pass: 402). Of these **282** are used after the checks below and the October 2026 audit.
- Every used quote appears in at least one cited evangelical/countercult/critic source (listed per quote in the table). Wikipedia is listed where it also documents the passage but never counts alone (6 quotes from the earlier list that were cited only by Wikipedia were removed).
- Distinct citing pages across the used quotes: **309** (mrm.org 171, utlm.org 112, en.wikipedia.org 12, irr.org 6, mormonthink.com 3, carm.org 3, gotquestions.org 1, en.fairmormon.org 1).
- Earlier validation of the first pass (kept below): 566 clusters, 402 exact, 128 near (not used), 35 not found at the cited location (not used).

## Method

- Source pages were reduced to text and compared with every discourse by token n-gram (6-gram) matching after normalizing whitespace, case, quotation marks, dashes and ellipses; bracketed editorial insertions and footnote numbers in sources were treated as breaks, not as words. Runs of at least 14 matching words were kept, then grouped into passages per discourse.
- **exact**: each quoted fragment (split at ellipses, brackets and parentheses; up to 12 words of attribution framing trimmed) occurs contiguously in the discourse, same words in the same order. Near matches (a word added, dropped or changed by the source) are not used.
- Excerpts are sentence-bounded verbatim substrings of one paragraph of our text. When a passage began with a pronoun or connective ("He", "That", "And"…), the preceding sentence of the same paragraph was included so that it is not misleading. Excerpts are mostly 150 to 450 characters (a few with the extra context up to about 600). No words are altered; `gen/build.js` re-verifies every quote against the database at build time and fails the build on a mismatch, a missing speaker/page, a missing cited source, a duplicate, or an extraction artifact (hyphenation, brackets).
- Excluded: excerpts with extraction or hyphenation artifacts, unbalanced quotation marks, greetings and pleasantries, pure scripture quotations without commentary, anecdotes and administrative remarks that carry no teaching, heavily overlapping passages (word overlap above 50%, same paragraph), and quotes found only on Wikipedia or only on apologetic pages.
- The order spreads topics and speakers across the year (no two neighbours on the same discourse; topic and speaker repeats are separated where possible).
- Citations point at our own page for the discourse (JD volume:start–end pages); `gen/quotes-priority.json` also records the page where the passage occurs and the citing sources (`source_notes`).
- Source names are the cited page's address.

## Quotes in the rotation (day order)

| # | JD (page) | Speaker | Text begins | Cited by |
|---|---|---|---|---|
| 1 | 4:259 | Orson Hyde | It will be borne in mind that once on a time, there was a ma… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy, mit.irr.org/polygamy, mrm.org/jesus-quotes |
| 2 | 15:117 | George Q. Cannon | I have not the right to say that a man can enter into the ki… | utlm.org/mormon-claims-answered-chapter-8-salvation |
| 3 | 24:194 | Joseph F. Smith | If we begin to cut off this one and that one, and set their… | mrm.org/gospel-doctrine-quotes |
| 4 | 2:216 | George A. Smith | You never felt such a shock go through any house or company… | archive.utlm.org/onlinebooks/changech18.htm, archive.utlm.org/onlinebooks/changech19.htm, utlm.org/the-changing-world-of-mormonism-chapter-18, utlm.org/the-changing-world-of-mormonism-chapter-19 |
| 5 | 3:247 | Brigham Young | Let me suppose a case. Suppose you found your brother in bed… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, mrm.org/blood-atonement, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 6 | 16:348 | Orson Pratt | Go and ask any of these fallen churches—go to the oldest amo… | utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy |
| 8 | 13:320 | Wilford Woodruff | The first quorum of Apostles were all put to death, except J… | mrm.org/calling-apostle-john, mrm.org/surviving-apostles, mrm.org/wilford-woodruff-quotes |
| 10 | 3:93 | Brigham Young | The Lord created you and me for the purpose of becoming Gods… | mrm.org/as-god-or-like-god, mrm.org/becoming-like-god, mrm.org/discourses-brigham-young-quotes, mrm.org/exaltation, mrm.org/godhood-quotes |
| 11 | 5:133 | Heber C. Kimball | Will the President that sits in the chair of state be tipped… | archive.utlm.org/onlinebooks/changech19.htm, utlm.org/the-changing-world-of-mormonism-chapter-19 |
| 367 | 1:346 | Jedediah M. Grant | The grand reason of the burst of public sentiment in anathem… | archive.utlm.org/onlinebooks/changech9b.htm, mrm.org/lds-church-on-the-marriages-of-jesus, utlm.org/mother-god, utlm.org/the-changing-world-of-mormonism-chapter-9, utlm.org/the-gods-of-mormonism |
| 12 | 20:276 | George Q. Cannon | If you are sentenced to prison for marrying more wives than… | archive.utlm.org/onlinebooks/changech9c.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 13 | 24:304 | Charles W. Penrose | Our organization is a very glorious one. It is a perfect org… | mit.irr.org/authority-claims-of-lds-leaders |
| 14 | 26:133 | John Taylor | We are told that if we cannot abide the law of the celestial… | mrm.org/tithing |
| 15 | 1:50 | Brigham Young | Now hear it, O inhabitants of the earth, Jew and Gentile, Sa… | en.wikipedia.org/wiki/Adam–God_doctrine, en.wikipedia.org/wiki/Brigham_Young, mit.irr.org/adam-god-doctrine, mrm.org/a-doctrine-god-revealed-to-brigham-young, mrm.org/adam-god, mrm.org/adam-god-teaching, www.mormonthink.com/QUOTES/adamgod.htm |
| 17 | 18:117 | Wilford Woodruff | I am willing to exchange all the errors and false notions I… | mit.irr.org/authority-claims-of-lds-leaders, mrm.org/wilford-woodruff-quotes |
| 18 | 20:188 | Lorenzo Snow | We may think that we cannot live up to the perfect law, that… | mrm.org/lds-apostle-tries-to-comfort-discouraged-mormons, mrm.org/perfectionism, mrm.org/quotes-lorenzo-snow |
| 19 | 23:361 | George Q. Cannon | If we get our salvation we shall have to pass by him; if we… | mrm.org/authority-quotes, mrm.org/joseph-smith-is-triggering-faith-crises-among-mormons, mrm.org/joseph-smith-quotes, mrm.org/no-salvation-without-joseph-smith, mrm.org/starr-katich, utlm.org/importance-of-joseph-smith-in-mormonism |
| 20 | 2:210 | Orson Hyde | I discover that some of the Eastern papers represent me as a… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy, mrm.org/jesus-quotes |
| 21 | 21:370 | John Taylor | Abraham came through Shem, and the Savior came through this… | archive.utlm.org/onlinebooks/curseofcain_part2.htm |
| 25 | 10:110 | Brigham Young | Shall I tell you the law of God in regard to the African rac… | archive.utlm.org/onlinebooks/changech20.htm, archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism, en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Brigham_Young, mit.irr.org/brigham-young-on-race-later-comments, mrm.org/blood-atonement, mrm.org/lds-citations-blacks, mrm.org/why-priesthood-ban |
| 27 | 20:29 | Joseph F. Smith | If, then, this principle was of such great importance that t… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/polygamy-and-truth, utlm.org/problems-in-the-lds-essays-on-plural-marriage, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 29 | 3:247 | Brigham Young | There is not a man or woman, who violates the covenants made… | archive.utlm.org/onlinebooks/changech20.htm, carm.org/interesting-quotes-from-brigham-young-the-second-prophet-of-the-mormon-church, en.wikipedia.org/wiki/Blood_atonement, mrm.org/discourses-brigham-young-quotes, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 30 | 13:181 | Orson Hyde | “Am I mistaken?” said I, “or is it really the voice of Josep… | mrm.org/transfiguration-brigham |
| 31 | 17:104 | Orson Pratt | I do not wonder that the world say that the Latter-day Saint… | archive.utlm.org/onlinebooks/changech18.htm, mrm.org/wisdom-starr, utlm.org/the-changing-world-of-mormonism-chapter-18 |
| 32 | 12:334 | George A. Smith | When the holy angel appeared, Joseph inquired which of all t… | archive.utlm.org/onlinebooks/changech6.htm, mrm.org/first-vision-accounts, mrm.org/first-vision-stories, utlm.org/evolution-of-the-first-vision, utlm.org/first-vision-200-years-later, utlm.org/grappling, utlm.org/jerald-2, utlm.org/the-changing-world-of-mormonism-chapter-6 |
| 33 | 24:372 | George Q. Cannon | Joseph saw that the Father had a form; that He had a head; t… | archive.utlm.org/onlinebooks/changech6.htm, utlm.org/examining-the-first-vision, utlm.org/the-changing-world-of-mormonism-chapter-6, utlm.org/the-gods-of-mormonism |
| 34 | 6:3 | Joseph Smith | If the veil was rent today, and the great God who holds this… | mrm.org/eternal-progression-quotes, mrm.org/god-of-mormonism, mrm.org/god-quotes, mrm.org/godhood-quotes, mrm.org/regress |
| 35 | 5:22 | Heber C. Kimball | For a man of God to be confined to one woman is small busine… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 36 | 7:299 | Amasa M. Lyman | We may talk of men being redeemed by the efficacy of his blo… | www.mormonthink.com/QUOTES/bloodatonement.htm |
| 368 | 2:182 | Brigham Young | I answer, they are first-rate, and we will prove it too, as… | mrm.org/discourses-brigham-young-quotes, mrm.org/the-white-horse-prophecy-rides-again, mrm.org/white-horse-prophecy, utlm.org/joseph-smiths-white-horse-prophecy |
| 38 | 2:338 | Orson Pratt | I am inclined to think, from some things in the revelations,… | archive.utlm.org/onlinebooks/changech7.htm, utlm.org/the-changing-world-of-mormonism-chapter-7 |
| 39 | 1:50 | Brigham Young | When the Virgin Mary conceived the child Jesus, the Father h… | en.wikipedia.org/wiki/Adam–God_doctrine, mrm.org/a-doctrine-god-revealed-to-brigham-young |
| 40 | 14:320 | George Q. Cannon | Why is it that we are so anxious to build temples? It is tha… | mrm.org/temple-quotes |
| 41 | 13:38 | George A. Smith | The Latter-day Saints believe the Bible. An agent of the Ame… | mrm.org/bible-quotes |
| 42 | 13:18 | John Taylor | Our religion binds men and women for time and all eternity.… | mrm.org/marriage-quotes |
| 44 | 2:82 | Orson Hyde | Now there was actually a marriage; and if Jesus was not the… | mrm.org/jesus-quotes |
| 45 | 18:179 | Orson Pratt | Who is Babylon? I have already explained that Babylon is a g… | mrm.org/we-never-criticize |
| 46 | 1:238 | Brigham Young | Here I shall have to disagree with you, to begin with; for I… | mormonthink.com/QUOTES/adamgod.htm, mrm.org/virgin-birth |
| 47 | 24:189 | Joseph F. Smith | Whenever you see a man rise up claiming to have received dir… | mrm.org/gospel-doctrine-quotes, mrm.org/revelation-modern-day |
| 48 | 22:173 | Wilford Woodruff | The Lamanites, now a downtrodden people, are a remnant of th… | mrm.org/dna |
| 49 | 4:51 | Jedediah M. Grant | Brethren and sisters, we want you to repent and forsake your… | archive.utlm.org/onlinebooks/changech20.htm, mrm.org/blood-atonement, utlm.org/brigham-youngs-wives-, utlm.org/jedediah-m-grant-sermon-blood-atonement-, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 50 | 5:90 | Heber C. Kimball | You might as well go and be baptized for a devil as for a ma… | mrm.org/historical-baptism-dead |
| 53 | 3:266 | Brigham Young | Now if any of you will deny the plurality of wives, and cont… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy, mit.irr.org/polygamy |
| 54 | 18:50 | Orson Pratt | If you have been pretty good people and have kept the comman… | mrm.org/godhood-quotes |
| 55 | 13:166 | Wilford Woodruff | If we were to do away with polygamy, it would only be one fe… | archive.utlm.org/onlinebooks/changech9c.htm, mrm.org/book-of-mormon-doctrines, mrm.org/end-plural-marriage, mrm.org/manifesto, mrm.org/policy-or-gods-directive, mrm.org/polygamy, mrm.org/polygamy-quotes, mrm.org/salt-lake-tribune-editorials, mrm.org/warren-jeffs, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 56 | 6:35 | Heber C. Kimball | We shall clean the platter of all such scoundrels; and if me… | archive.utlm.org/onlinebooks/changech20.htm, utlm.org/blood-flows-in-utah, utlm.org/brigham-young-sermon-blood-atonement-3, utlm.org/heber-c-kimball-sermon-blood-atonement, utlm.org/kimballs-journal-confirms-oath-of-vengeance, utlm.org/new-light-on-blood-atonement, utlm.org/the-changing-world-of-mormonism-chapter-20 |
| 57 | 11:53 | John Taylor | We do believe it, and we honestly acknowledge that this is t… | mrm.org/notable-teachings-from-john-taylor, utlm.org/the-mormon-kingdom, utlm.org/top-stories |
| 58 | 6:4 | Joseph Smith | Here, then, is eternal life—to know the only wise and true G… | mrm.org/before-god-was-god, mrm.org/god-of-mormonism, mrm.org/godhood-quotes |
| 59 | 24:185 | George Q. Cannon | I do not wish to say anything in relation to other forms of… | mrm.org/april-general-conference-reaffirms-mormonisms-love-hate-relationship-with-christianity, mrm.org/are-baptists-christian, mrm.org/christian-or-not, mrm.org/christianity-quotes, mrm.org/mormon-official-equates-christianity-with-a-false-cult, mrm.org/we-never-criticize |
| 369 | 8:318 | Brigham Young | There are many here that are acquainted with brother Joseph'… | archive.utlm.org/onlinebooks/changech17.htm, utlm.org/changing-world-of-mormonism-chapter-17, utlm.org/farms, utlm.org/legacy-distorted-view |
| 62 | 8:234 | Orson Hyde | Some persons say that Brigham does not give revelations as d… | mrm.org/the-doctrine-of-christ |
| 63 | 13:264 | Brigham Young | I say now, when they are copied and approved by me they are… | carm.org/interesting-quotes-from-brigham-young-the-second-prophet-of-the-mormon-church, en.wikipedia.org/wiki/Journal_of_Discourses, mrm.org/authority-quotes, www.gotquestions.org/Journal_of_Discourses.html |
| 65 | 1:155 | John Taylor | Now I come to us, “Mormons.” We are the only true Church, so… | mrm.org/gospel-kingdom-quotes, mrm.org/nelsons-mandate, mrm.org/nicknames-of-the-church |
| 67 | 3:125 | Heber C. Kimball | The principle of plurality of wives never will be done away… | archive.utlm.org/onlinebooks/changech9c.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 68 | 1:51 | Brigham Young | What a learned idea! Jesus, our elder brother, was begotten… | en.wikipedia.org/wiki/Adam–God_doctrine, mit.irr.org/adam-god-doctrine, mrm.org/a-doctrine-god-revealed-to-brigham-young, mrm.org/adam-god, mrm.org/pinning-down-mormon-doctrine, www.mormonthink.com/QUOTES/adamgod.htm |
| 69 | 16:349 | Orson Pratt | Consequently if they, in their zeal towards God, say that th… | utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy |
| 70 | 19:229 | Wilford Woodruff | I straightway went into the baptismal font and called upon b… | archive.utlm.org/onlinebooks/changech22a.htm, mrm.org/baptism-for-the-dead-quotes, mrm.org/rendezvousing-with-spirits, mrm.org/st-george-temple-scare, mrm.org/temple-mcguire, utlm.org/mormon-claims-answered-chapter-9-temples-and-temple-ordinances, utlm.org/the-changing-world-of-mormonism-chapter-22 |
| 71 | 4:260 | Orson Hyde | How much soever of holy horror this doctrine may excite in p… | utlm.org/lds-leaders-claim-to-be-descended-from-christ-and-his-apostles |
| 72 | 22:44 | Joseph F. Smith | Notwithstanding, the disciples of Jesus, excepting John the… | mrm.org/we-never-criticize, utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy |
| 73 | 5:203 | Heber C. Kimball | You might as well deny “Mormonism,” and turn away from it, a… | mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 75 | 23:343 | Charles W. Penrose | The God whom the “Christians” worship is a being of their ow… | mrm.org/god-quotes, mrm.org/million-dollar-question |
| 77 | 7:30 | Orson Pratt | We defy the world to produce a true copy of the original of… | archive.utlm.org/onlinebooks/changech12a.htm, utlm.org/the-changing-world-of-mormonism-chapter-12 |
| 78 | 7:290 | Brigham Young | How long is that race to endure the dreadful curse that is u… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, mit.irr.org/brigham-young-on-race-later-comments, mrm.org/lds-citations-blacks, mrm.org/race-and-priesthood, mrm.org/why-priesthood-ban, utlm.org/brigham-young-sermon-blacks-and-the-priesthood-, www.mormonthink.com/QUOTES/adamgod.htm |
| 79 | 6:335 | Orson Hyde | Someone may say, “If this work of the last days be true, why… | mrm.org/first-vision-accounts, utlm.org/evolution-of-the-first-vision, utlm.org/grappling |
| 80 | 26:7 | George Q. Cannon | There has been some agitation in years past respecting plura… | archive.utlm.org/onlinebooks/changech9c.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 81 | 5:275 | Heber C. Kimball | When the United States have done their best, then other nati… | utlm.org/the-thinking-has-been-done-the-mountain-meadows-to-guyana |
| 82 | 4:53 | Brigham Young | I do know that there are sins committed, of such a nature th… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Mormon_Reformation, mrm.org/blood-atonement, utlm.org/brigham-youngs-wives-, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 83 | 19:228 | Wilford Woodruff | I look upon this portion of our ministry as a mission of as… | mrm.org/awake-or-asleep, utlm.org/mormon-claims-answered-chapter-9-temples-and-temple-ordinances |
| 84 | 6:24 | John Taylor | Was the kingdom that the Prophets talked about, that should… | utlm.org/the-mormon-kingdom |
| 370 | 4:178 | Heber C. Kimball | There is a great deal of quarrelling in the houses, and cont… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 87 | 6:120 | Wilford Woodruff | If there was a point where man in his progression could not… | mrm.org/eternal-progression-quotes, mrm.org/god-learning, mrm.org/god-quotes, mrm.org/pinning-down-mormon-doctrine, mrm.org/wilford-woodruff-quotes |
| 88 | 25:368 | George Q. Cannon | What I mean by this is: if a man apostatizes and breaks cove… | mrm.org/gospel-topics-women, mrm.org/marriage-quotes |
| 89 | 6:38 | Heber C. Kimball | The President of the United States and his coadjutors that h… | archive.utlm.org/onlinebooks/changech19.htm, utlm.org/the-changing-world-of-mormonism-chapter-19 |
| 92 | 9:322 | Brigham Young | Why do we believe in and practice polygamy? Because the Lord… | mrm.org/journalgems, mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 93 | 2:14 | Jedediah M. Grant | What would a man of God say, who felt aright, when Joseph as… | archive.utlm.org/onlinebooks/changech9b.htm, mrm.org/joseph-smith-quotes, mrm.org/polygamy-quotes, mrm.org/starr-katich, utlm.org/abuse, utlm.org/covering-up-mormon-polygamy, utlm.org/joseph-smith-and-polygamy, utlm.org/legacy-distorted-view, utlm.org/new-joseph-smith-movie-history-or-propaganda, utlm.org/polygamist-sentenced-to-five-years-in-prison, utlm.org/polygamy-and-truth, utlm.org/problems-in-the-lds-essays-on-plural-marriage, utlm.org/sacred-marriage-secret-affair, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 94 | 20:99 | Orson Hyde | Polygamy is a principle revealed from heaven with a commandm… | mrm.org/polygamy |
| 95 | 6:167 | John Taylor | Myself and hundreds of the Elders around me have seen its po… | mit.irr.org/authority-claims-of-lds-leaders, mrm.org/mormonisms-only-true-church-doctrine-does-not-feel-loving, mrm.org/mormonisms-were-not-weird-campaign, mrm.org/we-never-criticize, utlm.org/excerpts-from-letters-and-emails-7, utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy, utlm.org/letters-november-2005 |
| 96 | 13:125 | Orson Pratt | Jesus made his appearance on the earth in the meridian of ti… | archive.utlm.org/onlinebooks/changech23.htm, mrm.org/christianity-quotes, mrm.org/great-apostasy, utlm.org/jerald-and-sandra-tanners-testimonies, utlm.org/mormon-claims-answered-chapter-7-the-church, utlm.org/the-changing-world-of-mormonism-chapter-23 |
| 97 | 2:6 | Brigham Young | You believe Adam was made of the dust of this earth. This I… | mit.irr.org/adam-god-doctrine, mrm.org/bible-quotes, www.mormonthink.com/QUOTES/adamgod.htm |
| 99 | 2:106 | Heber C. Kimball | When brother Joseph Smith lived, he was our Prophet, our See… | mrm.org/topicsrebuttals-rejoindersmormonism-201church-and-its-leadership-johnson, utlm.org/the-thinking-has-been-done-the-mountain-meadows-to-guyana |
| 101 | 3:291 | George A. Smith | We breathe the free air, we have the best looking men and ha… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 102 | 4:53 | Brigham Young | There are sins that men commit for which they cannot receive… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, mrm.org/blood-atonement, utlm.org/brigham-youngs-wives- |
| 105 | 25:21 | George Teasdale | I believe in plural marriage as a part of the Gospel, just a… | archive.utlm.org/onlinebooks/changech9c.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 106 | 11:269 | Brigham Young | The only men who become Gods, even the Sons of God, are thos… | en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 107 | 2:82 | Orson Hyde | I shall say here, that before the Savior died, he looked upo… | utlm.org/mormon-claims-answered-chapter-2-god |
| 108 | 2:196 | Wilford Woodruff | The ancient doctrine and power will unlock the mysteries of… | mrm.org/we-never-criticize |
| 109 | 24:193 | Joseph F. Smith | The moment a man says he will not submit to legally constitu… | mrm.org/authority-quotes, mrm.org/gospel-doctrine-quotes, mrm.org/is-lds-doctrinal-purity, mrm.org/mormon-missionaries-bicycles, mrm.org/priesthood-quotes |
| 110 | 6:351 | Orson Pratt | The Book of Mormon, therefore, is the only record (professin… | archive.utlm.org/onlinebooks/changech9a.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 111 | 7:333 | Brigham Young | How many Gods there are, I do not know. But there never was… | mrm.org/discourses-brigham-young-quotes, mrm.org/god-quotes, mrm.org/kfd, mrm.org/regress |
| 371 | 7:19 | Heber C. Kimball | We will not have them in this valley, unless they repent; fo… | archive.utlm.org/onlinebooks/changech20.htm, utlm.org/the-changing-world-of-mormonism-chapter-20 |
| 113 | 17:224 | Orson Pratt | I did hope there was more intelligence among the Latter-day… | archive.utlm.org/onlinebooks/changech9c.htm, archive.utlm.org/onlinebooks/curseofcain_part2.htm, mrm.org/mormonisms-prophetic-authority-and-selective-disobedience, mrm.org/polygamy, mrm.org/polygamy-quotes, mrm.org/the-new-and-everlasting-covenant, mrm.org/why-would-five-wives-brand-offend-mormons, utlm.org/polygamy-and-truth, utlm.org/temple-ritual-altered, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 114 | 6:32 | Heber C. Kimball | WAKE UP, YE ELDERS OF ISRAEL, AND LIVE TO GOD and none else;… | archive.utlm.org/onlinebooks/changech15.htm, mrm.org/september-dawn, mrm.org/when-salt-lake-city-calls, utlm.org/mormons-hughes-cia, utlm.org/the-changing-world-of-mormonism-chapter-15, utlm.org/the-thinking-has-been-done, utlm.org/the-thinking-has-been-done-the-mountain-meadows-to-guyana |
| 115 | 14:10 | Orson Pratt | Let me here observe that the Book of Mormon, which has been… | utlm.org/lamanites |
| 116 | 11:269 | Brigham Young | I heard the revelation on polygamy, and I believed it with a… | mrm.org/polygamy-quotes |
| 117 | 5:266 | John Taylor | We used to have a difference between Church and State, but i… | utlm.org/the-mormon-kingdom |
| 118 | 20:65 | Orson Pratt | The Prophet translated the part of these writings which, as… | utlm.org/prophet-seer-and-revelator |
| 119 | 13:207 | George Q. Cannon | Under the system of Patriarchal Marriage, the offspring, bes… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 120 | 17:159 | Brigham Young | Brother George A. Smith has been reading a little out of the… | archive.utlm.org/onlinebooks/changech9a.htm, mrm.org/brigham-young, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 121 | 4:220 | Brigham Young | I have known a great many men who have left this Church for… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Mountain_Meadows_massacre, mrm.org/blood-atonement, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 123 | 5:22 | Heber C. Kimball | I have noticed that a man who has but one wife, and is incli… | archive.utlm.org/onlinebooks/changech9b.htm, en.wikipedia.org/wiki/Heber_C_Kimball, utlm.org/mormon-claims-answered-chapter-9-temples-and-temple-ordinances, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 124 | 5:265 | John Taylor | Nothing but obedience to his law, obedience in families, obe… | mrm.org/mountain-meadows |
| 125 | 8:12 | Brigham Young | When a man begins to find fault, inquiring in regard to this… | mrm.org/discourses-brigham-young-quotes |
| 126 | 5:83 | Wilford Woodruff | Now, whatever I might have obtained in the shape of learning… | mit.irr.org/authority-claims-of-lds-leaders |
| 127 | 14:58 | George Q. Cannon | We close the door on one side, and say that whoredoms, seduc… | mrm.org/polygamy-quotes |
| 128 | 1:339 | Brigham Young | Will all the people be damned who are not Latter-day Saints?… | mrm.org/brigham-young |
| 129 | 18:343 | Orson Pratt | The whole term means Valley of God, where Adam dwelt. It is… | mrm.org/eden |
| 130 | 11:272 | Brigham Young | Why are so many of the inhabitants of the earth cursed with… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism, mit.irr.org/brigham-young-on-race-later-comments, mrm.org/lds-citations-blacks, mrm.org/why-priesthood-ban |
| 131 | 4:174 | Heber C. Kimball | Are there men in our midst who will court other men's wives?… | en.wikipedia.org/wiki/Blood_atonement, utlm.org/heber-c-kimball-sermon-blood-atonement |
| 132 | 16:161 | Brigham Young | If there is an Elder here, or any member of this Church, cal… | mit.irr.org/authority-claims-of-lds-leaders, mrm.org/authority-quotes, mrm.org/brigham-young, mrm.org/brigham-young-jerk, mrm.org/heaven-schindler, mrm.org/jacobson-on-questions, mrm.org/pinning-down-mormon-doctrine, mrm.org/president-monsons-views-dont-represent-the-mormon-church, mrm.org/pyle-on-questions, utlm.org/did-brigham-young-teach-false-doctrine |
| 372 | 5:32 | Heber C. Kimball | There is a poor curse who has written the bigger part of tho… | archive.utlm.org/onlinebooks/changech19.htm, utlm.org/the-changing-world-of-mormonism-chapter-19 |
| 133 | 25:21 | George Teasdale | I bear my solemn testimony that plural marriage is as true a… | archive.utlm.org/onlinebooks/changech9c.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 134 | 18:259 | Brigham Young | When they receive their crowns, their dominions, they then w… | mrm.org/becoming-like-god, mrm.org/exaltation-speculation, mrm.org/godhood-quotes, mrm.org/kfd |
| 135 | 11:337 | George Q. Cannon | Men have supposed that because the Ark rested on Ararat that… | mrm.org/eden |
| 136 | 21:296 | Orson Pratt | All these principles that I have treated upon, pertaining to… | archive.utlm.org/onlinebooks/changech22a.htm, mrm.org/polygamy, utlm.org/covering-up-mormon-polygamy, utlm.org/temple-ritual-altered, utlm.org/the-changing-world-of-mormonism-chapter-22, utlm.org/the-gods-of-mormonism |
| 137 | 8:222 | Brigham Young | I doubt whether it can be found, from the revelations that a… | archive.utlm.org/onlinebooks/changech21.htm, utlm.org/mormon-claims-answered-chapter-10-the-eternal-state-of-mankind, utlm.org/the-changing-world-of-mormonism-chapter-21 |
| 139 | 12:97 | Brigham Young | Be careful, O, ye mothers in Israel, and do not teach your d… | mrm.org/discourses-brigham-young-quotes, mrm.org/lds-citations-blacks, mrm.org/marriage-quotes |
| 140 | 1:219 | Brigham Young | Gold and silver grow, and so does every other kind of metal,… | mrm.org/brigham-young |
| 141 | 13:40 | George A. Smith | The opposers of Celestial Marriage sometimes quote a passage… | mrm.org/polygamy-quotes |
| 142 | 19:269 | Erastus Snow | John, the Apostle, in writing the history of Jesus, speaks i… | en.wikipedia.org/wiki/Heavenly_Mother_Mormonism, mrm.org/a-mormon-apostle-explains-the-component-parts-of-god |
| 143 | 16:175 | Orson Pratt | I said their baptisms are illegal. Now let me go a little fa… | mrm.org/marriage-quotes |
| 144 | 4:219 | Brigham Young | The time has been in Israel under the law of God, the celest… | www.mormonthink.com/QUOTES/bloodatonement.htm |
| 145 | 7:333 | Brigham Young | The people called Christians are shrouded in ignorance, and… | mrm.org/baptist-preacher, mrm.org/christianity, mrm.org/christianity-quotes, mrm.org/first-vision-accounts, mrm.org/scott-christianity |
| 146 | 23:278 | George Q. Cannon | Now, I want to say for myself personally, if I had not obeye… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 147 | 8:223 | Brigham Young | Every intelligent person under the heavens that does not, wh… | mit.irr.org/authority-claims-of-lds-leaders, mrm.org/allegiance-to-joseph-smith, mrm.org/joseph-smith-quotes |
| 148 | 22:206 | Wilford Woodruff | I believe that God Almighty reserved a certain class of men… | mrm.org/joseph-smith-quotes, mrm.org/wilford-woodruff-quotes |
| 149 | 5:331 | Brigham Young | Some have grumbled because I believe our God to be so near t… | www.mormonthink.com/QUOTES/adamgod.htm |
| 150 | 17:223 | Orson Pratt | I stated in the beginning of my remarks, that polygamy, or a… | mrm.org/polygamy |
| 153 | 9:247 | Brigham Young | Many of us have been taught the doctrine of total depravity—… | mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes |
| 373 | 5:89 | Heber C. Kimball | Christians—those poor, miserable priests brother Brigham was… | mrm.org/mormon-official-equates-christianity-with-a-false-cult, mrm.org/we-never-criticize |
| 154 | 4:56 | Brigham Young | This is the reason why the doctrine of plurality of wives wa… | mrm.org/discourses-brigham-young-quotes, utlm.org/brigham-youngs-wives- |
| 156 | 18:55 | Orson Pratt | Everybody knows that in this respect there is a difference b… | mrm.org/polygamy-quotes |
| 157 | 3:212 | Brigham Young | I am a witness that those are the revelations of the Lord th… | archive.utlm.org/onlinebooks/changech17.htm, mrm.org/brigham-young, utlm.org/acceptance-of-joseph-smith-necessary-for-eternal-life, utlm.org/changing-world-of-mormonism-chapter-17 |
| 158 | 8:160 | Brigham Young | Intelligent beings are organized to become Gods, even the so… | mrm.org/discourses-brigham-young-quotes, mrm.org/godhood-quotes |
| 159 | 17:227 | Orson Pratt | Has God joined them together? No, a civil magistrate has don… | mrm.org/marriage-quotes |
| 160 | 10:111 | Brigham Young | I am neither an abolitionist nor a pro-slavery man. If I cou… | en.wikipedia.org/wiki/Blood_atonement, mit.irr.org/brigham-young-on-race-later-comments |
| 162 | 12:310 | Brigham Young | You may ask the question: Has no one Elder in Israel ever ta… | mrm.org/the-doctrine-of-christ |
| 163 | 4:375 | Heber C. Kimball | I wish they would go this fall: it might relieve us from muc… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, mrm.org/blood-atonement, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 164 | 14:244 | Orson Pratt | Does not everything that is consistent and reasonable, and e… | archive.utlm.org/onlinebooks/changech9c.htm, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 169 | 13:225 | John Taylor | What does the Christian world know about God? Nothing; yet t… | mrm.org/are-baptists-christian, mrm.org/baptist-preacher, mrm.org/christianity, mrm.org/christianity-quotes, mrm.org/first-vision-accounts, mrm.org/gospel-topics-women, mrm.org/mormon-official-equates-christianity-with-a-false-cult, mrm.org/music-of-the-faiths, mrm.org/scott-christianity, mrm.org/the-exclusiveness-of-mormonisms-truth-claims, mrm.org/we-never-criticize |
| 170 | 2:268 | Brigham Young | Take a family of ten children, for instance, and you may fin… | utlm.org/excommunication-mormon-leader-expelled-after-charging-church-with-racism |
| 171 | 2:345 | Orson Pratt | If we should take a million of worlds like this and number t… | archive.utlm.org/onlinebooks/changech7.htm, mrm.org/testaments, utlm.org/major-problems-of-mormonism, utlm.org/mormon-claims-answered-chapter-2-god, utlm.org/the-changing-world-of-mormonism-chapter-7, utlm.org/the-gods-of-mormonism |
| 173 | 7:285 | Brigham Young | Here let me state to all philosophers of every class upon th… | www.mormonthink.com/QUOTES/adamgod.htm |
| 174 | 12:173 | Brigham Young | We declare it to all the inhabitants of the earth from the v… | mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes |
| 175 | 26:29 | Charles W. Penrose | We will comprehend everything we learned when we dwelt in th… | mrm.org/jacobson-on-questions |
| 177 | 5:192 | John Taylor | Now, brother Brigham has said all is right, and he is the re… | mrm.org/mormons-believe-a-study-in-scarlet-is-inaccurate, mrm.org/mountain-meadows |
| 178 | 2:143 | Brigham Young | When all the other children of Adam have had the privilege o… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Brigham_Young, mrm.org/race-and-the-priesthood |
| 179 | 1:68 | Brigham Young | Teach them to keep your commandments, and you will learn the… | mrm.org/brigham-young |
| 182 | 2:179 | Brigham Young | We ask where Christ's Church is. My conclusive answer is, if… | mrm.org/brigham-young |
| 374 | 5:110 | George A. Smith | You must know that I love my friends, and God Almighty knows… | archive.utlm.org/onlinebooks/changech19.htm, utlm.org/the-changing-world-of-mormonism-chapter-19 |
| 183 | 1:123 | Orson Hyde | Remember that God, our heavenly Father, was perhaps once a c… | mrm.org/god-learning, mrm.org/god-quotes, mrm.org/regress |
| 184 | 9:149 | Brigham Young | “Mormonism” embraces all truth that is revealed and that is… | mrm.org/nicknames-of-the-church |
| 185 | 23:342 | Lorenzo Snow | God intends to make us saviors not only of many that now dwe… | mrm.org/quotes-lorenzo-snow |
| 186 | 4:57 | Brigham Young | Prepare yourselves for two weeks from tomorrow; and I will t… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/brigham-youngs-wives, utlm.org/early-secrets, utlm.org/problems-in-the-lds-essays-on-plural-marriage, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 187 | 13:95 | Brigham Young | I have never yet preached a sermon and sent it out to the ch… | en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/adam-god |
| 188 | 3:226 | Brigham Young | The time is coming when justice will be laid to the line and… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Mormon_Reformation |
| 189 | 18:293 | Orson Pratt | We would find, were we to carry this subject from world to w… | utlm.org/mormons-hope-to-become-gods-of-their-own-worlds-procreating-endless-numbers-of-children |
| 190 | 5:73 | Brigham Young | The Christian world, I discovered, was like the captain and… | mrm.org/april-general-conference-reaffirms-mormonisms-love-hate-relationship-with-christianity, mrm.org/brigham-young, mrm.org/christian-or-not, mrm.org/we-never-criticize |
| 191 | 6:25 | John Taylor | What! Are Christians ignorant? Yes, as ignorant of the thing… | mrm.org/we-never-criticize |
| 192 | 13:271 | Brigham Young | When we view its face we may see what is termed “the man in… | archive.utlm.org/onlinebooks/changech1.htm, mrm.org/aliens, mrm.org/brigham-young, mrm.org/inhabitants-of-the-moon-truth-or-fiction, mrm.org/moon-men, utlm.org/deseret-almanacs-god, utlm.org/mormon-claims-answered-more-lds-scripture-revelation, utlm.org/the-changing-world-of-mormonism-chapter-1 |
| 195 | 7:164 | Brigham Young | Some of the witnesses of the Book of Mormon, who handled the… | archive.utlm.org/onlinebooks/changech5a.htm, utlm.org/mean, utlm.org/roper, utlm.org/the-changing-world-of-mormonism-chapter-5, utlm.org/the-seer |
| 197 | 1:108 | Brigham Young | If you want to know what to do with a thief that you may fin… | archive.utlm.org/onlinebooks/changech20.htm, mrm.org/blood-atonement, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 198 | 5:88 | Heber C. Kimball | You call us fools; but the day will be, gentlemen and ladies… | archive.utlm.org/onlinebooks/changech17.htm, mrm.org/allegiance-to-joseph-smith, mrm.org/joseph-smith-quotes, mrm.org/praise-to-the-man, mrm.org/salvific-role, utlm.org/acceptance-of-joseph-smith-necessary-for-eternal-life, utlm.org/changing-world-of-mormonism-chapter-17 |
| 199 | 14:71 | Brigham Young | Consequently every earth has its redeemer, and every earth h… | mrm.org/eternal-progression-quotes, mrm.org/exaltation, mrm.org/god-never-sinned, mrm.org/is-jesus-the-one-in-mormonism, mrm.org/jesus-of-mormonism, mrm.org/john-5-19, mrm.org/regress, mrm.org/the-adam-god-challenge, utlm.org/major-problems-of-mormonism |
| 200 | 11:268 | Brigham Young | The man Joseph, the husband of Mary, did not, that we know o… | archive.utlm.org/onlinebooks/changech7.htm, mrm.org/celebrate-christmas-by-rejecting-mormon-leaders-who-have-rejected-the-virgin-birth, mrm.org/mormonisms-grinch-and-a-response-to-james-of-lehis-library, mrm.org/virgin-birth, mrm.org/what-child-is-this-the-lds-christmas-story, utlm.org/deseret-almanacs-god, utlm.org/embarrassing-doctrine, utlm.org/is-adam-christs-father, utlm.org/the-changing-world-of-mormonism-chapter-7, utlm.org/the-gods-of-mormonism |
| 201 | 7:53 | Orson Hyde | What the world calls “Mormonism” will rule every nation. Jos… | mrm.org/nicknames-of-the-church, utlm.org/the-mormon-kingdom |
| 202 | 26:368 | Lorenzo Snow | As man now is, God once was—even the babe of Bethlehem, adva… | mrm.org/eternal-progression-quotes, mrm.org/quotes-lorenzo-snow |
| 203 | 13:309 | Brigham Young | The Scripture says that He, the Lord, came walking in the Te… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/mother-god, utlm.org/problems-in-the-lds-essays-on-plural-marriage, utlm.org/the-changing-world-of-mormonism-chapter-9, utlm.org/the-gods-of-mormonism |
| 205 | 13:250 | Brigham Young | Take the Bible, then, as it is. If it is not translated corr… | mit.irr.org/authority-of-lds-scriptures |
| 206 | 5:179 | Heber C. Kimball | Well, let me tell you, the Holy Ghost is a man; he is one of… | archive.utlm.org/onlinebooks/changech7.htm, mrm.org/holy-ghost, utlm.org/the-changing-world-of-mormonism-chapter-7 |
| 207 | 9:147 | Brigham Young | The punishment of God is Godlike. It endures forever, becaus… | mrm.org/brigham-young |
| 208 | 2:75 | Orson Hyde | The words contained in this Bible are merely a history of wh… | mrm.org/bible-quotes, mrm.org/the-bible-through-mormon-eyes, mrm.org/what-do-mormons-believe-about-the-bible-2 |
| 209 | 3:212 | Brigham Young | What an uproar it would make in the Christian world to say,… | mrm.org/brigham-young |
| 210 | 1:109 | Brigham Young | If you will cause all those whom you know to be thieves, to… | archive.utlm.org/onlinebooks/changech20.htm, utlm.org/the-changing-world-of-mormonism-chapter-20, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 213 | 22:209 | Wilford Woodruff | We are now upon our second estate, and our eternal destiny d… | mrm.org/eternal-progression-quotes, mrm.org/wilford-woodruff-quotes |
| 214 | 3:360 | Brigham Young | Elders, never love your wives one hair's breadth further tha… | mrm.org/brigham-young, mrm.org/marriage-quotes |
| 215 | 25:309 | John Taylor | God has given us a revelation in regard to celestial marriag… | archive.utlm.org/onlinebooks/changech9c.htm, utlm.org/temple-ritual-altered, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 216 | 1:83 | Brigham Young | I say, rather than that apostates should flourish here, I wi… | archive.utlm.org/onlinebooks/changech20.htm, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 217 | 4:218 | Brigham Young | When the time came that His firstborn, the Savior, should co… | carm.org/questions-for-mormons-gods, mrm.org/brigham-young, mrm.org/virgin-birth, utlm.org/lds-leaders-define-their-concept-of-jesus-christ |
| 218 | 20:28 | Joseph F. Smith | In other words, some of the Saints have said, and believe, t… | archive.utlm.org/onlinebooks/changech9b.htm, mrm.org/polygamy-abanes, utlm.org/polygamy-and-truth, utlm.org/problems-in-the-lds-essays-on-plural-marriage, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 375 | 8:69 | Brigham Young | The brethren testify that brother Brigham is brother Joseph'… | mrm.org/brigham-young, utlm.org/joseph-as-a-prophet-an-important-new-document-comes-to-light |
| 220 | 6:207 | Joseph Young | Who is it that is at the head of this? It is the Devil, the… | mrm.org/lucifers-brother, mrm.org/prince-of-angels-brother-of-jesus, utlm.org/lucifer |
| 221 | 17:225 | Orson Pratt | I want to prophesy that all men and women who oppose the rev… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, mrm.org/polygamy-quotes |
| 222 | 3:266 | Brigham Young | Some of these my brethren know what my feelings were at the… | mrm.org/gospel-topics-polygamy, mrm.org/polygamy-quotes, utlm.org/sacred-marriage-secret-affair |
| 223 | 13:95 | Brigham Young | I know just as well what to teach this people and just what… | archive.utlm.org/onlinebooks/changech15.htm, mit.irr.org/authority-claims-of-lds-leaders, mrm.org/adam-god, mrm.org/are-their-words-really-scripture, mrm.org/brigham-young, mrm.org/brigham-young-jerk, mrm.org/topicsrebuttals-rejoindersmormonism-201church-and-its-leadership-johnson, utlm.org/did-brigham-young-teach-false-doctrine, utlm.org/mormon-claims-answered-chapter-2-god, utlm.org/mormon-claims-answered-chapter-9-temples-and-temple-ordinances, utlm.org/mormon-claims-answered-more-lds-scripture-revelation, utlm.org/prophet-seer-and-revelator, utlm.org/the-changing-world-of-mormonism-chapter-15, utlm.org/will-benson-be-king |
| 224 | 4:126 | Jedediah M. Grant | Men have to be rewarded according to their works; if a man c… | utlm.org/orson-pratts-troubles |
| 225 | 13:282 | Brigham Young | You will be the man that will say to the thief on the cross,… | mrm.org/brigham-young |
| 226 | 25:58 | Joseph F. Smith | God designed this in the beginning. We are the children of G… | mrm.org/eternal-progression-quotes, mrm.org/god-quotes, mrm.org/regress |
| 229 | 6:176 | Brigham Young | Brother Taylor has just said that the religions of the day w… | mrm.org/april-general-conference-reaffirms-mormonisms-love-hate-relationship-with-christianity, mrm.org/mormonisms-only-true-church-doctrine-does-not-feel-loving, mrm.org/the-exclusiveness-of-mormonisms-truth-claims, mrm.org/we-never-criticize, utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy |
| 230 | 26:22 | Charles W. Penrose | Not only those that now dwell on the earth, but all people w… | mrm.org/we-are-christians-just-like-you |
| 231 | 10:250 | Brigham Young | Treat the slaves kindly and let them live, for Ham must be t… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism |
| 232 | 11:298 | Brigham Young | Now ask the Father in the name of Jesus whether I am telling… | mrm.org/authority-quotes, mrm.org/brigham-young, utlm.org/early-secrets |
| 233 | 25:59 | Joseph F. Smith | We expect our children will acknowledge us as their fathers… | mrm.org/gospel-doctrine-quotes, mrm.org/heavenly-mother-renlund |
| 376 | 9:143 | Brigham Young | Will it be over in six months or in three years? No; it will… | archive.utlm.org/onlinebooks/changech14.htm, utlm.org/the-changing-world-of-mormonism-chapter-14 |
| 235 | 24:371 | George Q. Cannon | Though Jesus had appeared on the earth as a personage having… | utlm.org/the-gods-of-mormonism |
| 236 | 11:125 | Brigham Young | The sectarian doctrine of final rewards and punishments is a… | mrm.org/discourses-brigham-young-quotes |
| 239 | 8:195 | Brigham Young | In the beginning, after this earth was prepared for man, the… | carm.org/questions-for-mormons-gods, mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes, mrm.org/eden, utlm.org/eden |
| 240 | 1:97 | George A. Smith | The principle, the only one that beats and throbs through th… | archive.utlm.org/onlinebooks/changech20.htm, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 241 | 6:167 | John Taylor | The world has been apostate for generations past: it has bee… | utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy |
| 242 | 7:336 | Brigham Young | When the Lord has a people, he makes covenants with them and… | mit.irr.org/brigham-young-on-race-later-comments, mrm.org/white-and-delightsome |
| 245 | 17:225 | Orson Pratt | Sisters, you begin to say before your husbands, or husbands… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, mrm.org/polygamy-quotes |
| 247 | 19:259 | Joseph F. Smith | The object of our earthly existence is that we may have a fu… | mrm.org/become-a-god, mrm.org/exaltation-quotes |
| 248 | 12:127 | Brigham Young | What man or woman on the earth, what spirit in the spirit wo… | mit.irr.org/authority-claims-of-lds-leaders, mrm.org/authority-quotes, mrm.org/brigham-young-jerk |
| 249 | 23:65 | John Taylor | Man is a dual being, possessed of body and spirit, made in t… | mrm.org/gospel-kingdom-quotes, mrm.org/notable-teachings-from-john-taylor |
| 250 | 14:71 | Brigham Young | How many earths are there? I observed this morning that you… | mrm.org/eternal-progression-quotes, mrm.org/exaltation, mrm.org/god-never-sinned |
| 252 | 1:106 | Brigham Young | Do you pray for Israel? You will no doubt answer in the affi… | utlm.org/lamanites |
| 253 | 14:275 | Orson Pratt | We just as much expect that a city will be built, called Zio… | archive.utlm.org/onlinebooks/changech14.htm, utlm.org/the-changing-world-of-mormonism-chapter-14 |
| 254 | 3:368 | Brigham Young | Do you suppose that one-third part of all the beings that ex… | mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes |
| 377 | 13:362 | Orson Pratt | We believe in these promises as much as we believe in any pr… | archive.utlm.org/onlinebooks/changech14.htm, utlm.org/the-changing-world-of-mormonism-chapter-14 |
| 255 | 20:29 | Joseph F. Smith | To put this matter more correctly before you, I here declare… | mit.irr.org/polygamy, mrm.org/polygamy-quotes |
| 256 | 24:372 | George Q. Cannon | Faith was again restored to the earth, the true faith and th… | archive.utlm.org/onlinebooks/changech6.htm, utlm.org/examining-the-first-vision, utlm.org/the-changing-world-of-mormonism-chapter-6, utlm.org/the-gods-of-mormonism |
| 257 | 12:313 | Brigham Young | I will now say to my friends—and I call you all, and all man… | mrm.org/discourses-brigham-young-quotes |
| 259 | 2:31 | Brigham Young | Your endowment is, to receive all those ordinances in the Ho… | mrm.org/brigham-young, mrm.org/cultic-characteristics-of-mormonism, mrm.org/discourses-brigham-young-quotes, mrm.org/mormonisms-washington-d-c-temple-remains-a-mystery, mrm.org/temple-ceremony, mrm.org/temple-mcguire, utlm.org/temple-ritual-altered, utlm.org/temple-ritual-changed-again |
| 260 | 2:186 | Brigham Young | I will tell you how much I love those characters. If they ha… | www.mormonthink.com/QUOTES/bloodatonement.htm |
| 261 | 12:338 | Orson Pratt | We may, however, observe, that so far as new revelation has… | mrm.org/eden |
| 263 | 4:271 | Brigham Young | If we can pass the sentinel Joseph the Prophet, we shall go… | mrm.org/because-joseph-smith-was-a-prophet, mrm.org/boast-of-joseph, mrm.org/brigham-young, mrm.org/joseph-smith-quotes, mrm.org/salvific-role, mrm.org/starr-katich, mrm.org/the-boast-of-joseph, utlm.org/importance-of-joseph-smith-in-mormonism |
| 264 | 4:1 | Heber C. Kimball | I have learned by experience that there is but one God that… | en.wikipedia.org/wiki/Adam–God_doctrine, mrm.org/adam-god, mrm.org/pinning-down-mormon-doctrine, www.mormonthink.com/QUOTES/adamgod.htm |
| 265 | 8:199 | Brigham Young | With regard to true theology, a more ignorant people never l… | mrm.org/mormonisms-were-not-weird-campaign, mrm.org/we-never-criticize, utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy |
| 267 | 9:102 | Brigham Young | Angels are those beings who have been on an earth like this,… | mrm.org/angelic-or-human, mrm.org/angels-and-humans |
| 269 | 20:31 | Joseph F. Smith | It is an additional privilege for that same man and wife to… | mit.irr.org/polygamy, mrm.org/polygamy-quotes |
| 271 | 9:289 | Brigham Young | The Lord Almighty leads this Church, and he will never suffe… | archive.utlm.org/onlinebooks/changech15.htm, mit.irr.org/authority-claims-of-lds-leaders, utlm.org/dunn-in-the-name-of-god, utlm.org/prophet-seer-and-revelator, utlm.org/the-changing-world-of-mormonism-chapter-15, utlm.org/the-thinking-has-been-done, utlm.org/the-thinking-has-been-done-the-mountain-meadows-to-guyana |
| 272 | 6:29 | Heber C. Kimball | Do you suppose that God in person called upon Joseph Smith,… | utlm.org/evolution-of-the-first-vision, utlm.org/grappling |
| 273 | 10:250 | Brigham Young | Ham will continue to be the servant of servants, as the Lord… | archive.utlm.org/onlinebooks/changech10a.htm, archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism, utlm.org/did-brigham-young-teach-false-doctrine, utlm.org/important-document-on-negroes, utlm.org/jerald-1, utlm.org/the-changing-world-of-mormonism-chapter-10 |
| 274 | 6:2 | Joseph Smith | My first object is to find out the character of the only wis… | mrm.org/kfd, mrm.org/regress |
| 275 | 16:186 | Brigham Young | We also have the privilege of sealing women to men, without… | utlm.org/early-secrets, utlm.org/women |
| 276 | 22:124 | George Q. Cannon | When we talk about celestial glory, we talk of the condition… | mrm.org/god-quotes, utlm.org/mormons-hope-to-become-gods-of-their-own-worlds-procreating-endless-numbers-of-children |
| 277 | 4:56 | Brigham Young | Sisters, I am not joking, I do not throw out my proposition… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/brigham-youngs-wives, utlm.org/early-secrets, utlm.org/problems-in-the-lds-essays-on-plural-marriage, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 279 | 1:73 | Orson Hyde | I believe it is right; it is the law and practice of our nei… | archive.utlm.org/onlinebooks/changech20.htm, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 378 | 10:206 | Brigham Young | When there was no whiskey to be had here, and we needed it f… | archive.utlm.org/onlinebooks/changech18.htm, utlm.org/the-changing-world-of-mormonism-chapter-18 |
| 280 | 23:173 | Joseph F. Smith | The man who passes through this probation, and is faithful,… | mrm.org/regress |
| 281 | 13:143 | Brigham Young | We must believe that this same Jesus was crucified for the s… | mrm.org/brigham-young |
| 282 | 6:38 | Heber C. Kimball | Yea, I bless the earth and everything that is on this earth;… | archive.utlm.org/onlinebooks/changech19.htm, utlm.org/the-changing-world-of-mormonism-chapter-19 |
| 283 | 19:38 | Brigham Young | Joseph did not translate all of the plates; there was a port… | archive.utlm.org/onlinebooks/changech4.htm, mrm.org/cumorah-cave, mrm.org/plates-of-gold-book-quotes, mrm.org/where-are-the-gold-plates, utlm.org/book-of-mormon-plates-artifact-vision-or-hoax, utlm.org/the-changing-world-of-mormonism-chapter-4 |
| 284 | 14:86 | Brigham Young | There is a curse on these aborigines of our country who roam… | mit.irr.org/brigham-young-on-race-later-comments, mrm.org/discourses-brigham-young-quotes, mrm.org/lds-citations-blacks |
| 286 | 1:361 | Brigham Young | If I had forty wives in the United States, they did not know… | archive.utlm.org/onlinebooks/changech9a.htm, mrm.org/polygamy-quotes, utlm.org/the-changing-world-of-mormonism-chapter-9 |
| 288 | 16:167 | Brigham Young | Now, sisters, do not say, “I do not want a husband when I ge… | mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 289 | 6:34 | Heber C. Kimball | God designs we should be pure men, holding the oracles of Go… | archive.utlm.org/onlinebooks/changech20.htm, utlm.org/blood-flows-in-utah, utlm.org/brigham-young-sermon-blood-atonement-3, utlm.org/heber-c-kimball-sermon-blood-atonement, utlm.org/kimballs-journal-confirms-oath-of-vengeance, utlm.org/new-light-on-blood-atonement, utlm.org/the-changing-world-of-mormonism-chapter-20 |
| 290 | 1:38 | Brigham Young | There is not that person on the face of the earth who has ha… | mrm.org/bible-quotes, mrm.org/book-of-mormon-index, mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes, mrm.org/joseph-smith-quotes |
| 291 | 14:86 | Brigham Young | In ancient days old Israel was the chosen people in whom the… | mit.irr.org/brigham-young-on-race-later-comments, mrm.org/brigham-young-jerk, mrm.org/discourses-brigham-young-quotes, mrm.org/lds-citations-blacks, mrm.org/seed-of-cain, mrm.org/was-ban-a-theory |
| 293 | 5:19 | Heber C. Kimball | We must be grafted into the true vine, and continue to parta… | mrm.org/god-quotes, mrm.org/regress |
| 294 | 9:319 | Brigham Young | I have not time now to dwell upon all the points of Abraham'… | mrm.org/everlasting-covenant |
| 297 | 26:246 | George Q. Cannon | A Wesley, a Luther, a Calvin, a Wycliffe, and a host of othe… | mrm.org/introduction-hopkins, mrm.org/mormon-priesthood |
| 298 | 17:143 | Brigham Young | We shall go on from one step to another, reaching forth into… | mrm.org/becoming-like-god, mrm.org/godhood-quotes |
| 300 | 12:100 | Brigham Young | Instead of receiving the gospel to become the sons of God, m… | mrm.org/do-we-need-to-become-children-of-god |
| 301 | 1:50 | Brigham Young | Our God and Father in heaven, is a being of tabernacle, or,… | mrm.org/10-reasons-god, mrm.org/adam-god, mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes, mrm.org/god-quotes |
| 303 | 9:312 | Brigham Young | I have taught for thirty years, and still teach, that he tha… | carm.org/interesting-quotes-from-brigham-young-the-second-prophet-of-the-mormon-church, en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses |
| 304 | 9:150 | Brigham Young | Let every man and woman know, by the whispering of the Spiri… | mrm.org/revelation-modern-day |
| 305 | 8:171 | Brigham Young | The Christian world, so called, are heathens as to their kno… | mrm.org/brigham-young |
| 306 | 1:349 | Brigham Young | All organized existence is in progress, either to an endless… | mrm.org/eternal-progression-mormonism |
| 308 | 2:307 | Brigham Young | When was there a beginning? There never was one; if there wa… | mrm.org/discourses-brigham-young-quotes |
| 309 | 6:95 | Brigham Young | We believe that we have a correct idea of the character of t… | mrm.org/brigham-young, mrm.org/different-jesus, mrm.org/jesus-of-mormonism, mrm.org/jesus-quotes |
| 311 | 9:37 | Brigham Young | Sisters, do you wish to make yourselves happy? Then what is… | archive.utlm.org/onlinebooks/changech9b.htm, utlm.org/brigham-youngs-wives, utlm.org/the-changing-world-of-mormonism-chapter-9, utlm.org/women |
| 312 | 6:38 | Heber C. Kimball | We live to let live, and we will treat them with kindness an… | archive.utlm.org/onlinebooks/changech20.htm |
| 316 | 9:286 | Brigham Young | Brother Kimball quoted a saying of Joseph the Prophet, that… | en.wikipedia.org/wiki/Heavenly_Mother_Mormonism, mrm.org/god-quotes |
| 317 | 4:268 | Brigham Young | Are all spirits endowed alike? No, not by any means. Will al… | mrm.org/discourses-brigham-young-quotes |
| 318 | 8:115 | Brigham Young | The birth of the Savior was as natural as are the births of… | archive.utlm.org/onlinebooks/changech7.htm, carm.org/was-the-lds-jesus-born-of-the-virgin-mary, mrm.org/brigham-young, mrm.org/virgin-birth, mrm.org/virgin-birth-doctrine, utlm.org/book-of-abraham-translation-or-invention, utlm.org/embarrassing-doctrine, utlm.org/mother-god, utlm.org/the-changing-world-of-mormonism-chapter-7, utlm.org/the-gods-of-mormonism, utlm.org/the-virgin-birth-according-to-lds-leaders |
| 319 | 4:297 | Brigham Young | Had I not thoroughly understood this and believed it, I much… | mrm.org/brigham-young, mrm.org/joseph-smith-quotes |
| 320 | 13:144 | Brigham Young | Now I would ask the Christian world a question, and in doing… | mrm.org/10-reasons-god, mrm.org/brigham-young, mrm.org/god-quotes |
| 321 | 20:276 | George Q. Cannon | If plural marriage be divine, as the Latter-day Saints say i… | mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 322 | 6:345 | Brigham Young | Some would have us believe that God is present everywhere. I… | mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes, mrm.org/elohim-2, mrm.org/god-quotes |
| 323 | 6:332 | Brigham Young | The Apostles and Prophets, when speaking of our relationship… | mrm.org/10-reasons-jesus, mrm.org/discourses-brigham-young-quotes |
| 324 | 4:56 | Brigham Young | I have told you many times that there are multitudes of pure… | mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes, mrm.org/unequally-yoked, utlm.org/mormon-claims-answered-chapter-8-salvation |
| 326 | 14:116 | Brigham Young | God never made something out of nothing; it is not in the ec… | en.wikipedia.org/wiki/Mormon_cosmology, mrm.org/discourses-brigham-young-quotes |
| 328 | 7:289 | Brigham Young | From the day that the Priesthood was taken from the earth to… | archive.utlm.org/onlinebooks/changech17.htm, mrm.org/assurances-and-promises, mrm.org/because-joseph-smith-was-a-prophet, mrm.org/brigham-young, mrm.org/cultic-characteristics-of-mormonism, mrm.org/for-mormons-christmastime-is-for-honoring-jesus-and-joseph-smith, mrm.org/joseph-smith-quotes, mrm.org/mormon-missionaries-bicycles, mrm.org/mormonisms-different-jesus, mrm.org/no-salvation-without-joseph-smith, mrm.org/praise-to-the-man, mrm.org/president-resurrection, mrm.org/restoration-review, mrm.org/salvific-role, mrm.org/something-crucial-is-missing-from-the-mormon-churchs-official-name, mrm.org/starr-katich, mrm.org/testaments, mrm.org/the-plan-of-salvation, mrm.org/the-plan-of-salvation-2, mrm.org/we-are-christians-just-like-you, utlm.org/acceptance-of-joseph-smith-necessary-for-eternal-life, utlm.org/brigham-young-sermon-joseph-smiths-consent, utlm.org/changing-world-of-mormonism-chapter-17, utlm.org/did-brigham-young-teach-false-doctrine, utlm.org/importance-of-joseph-smith-in-mormonism, utlm.org/jesus-and-joseph-smith, utlm.org/mormon-claims-answered-chapter-8-salvation, utlm.org/the-thinking-has-been-done-the-mountain-meadows-to-guyana |
| 329 | 3:365 | Brigham Young | We were created upright, pure, and holy, in the image of our… | mrm.org/brigham-young |
| 331 | 10:265 | Brigham Young | The religion of God embraces every fact that exists in all t… | mrm.org/we-never-criticize, utlm.org/lds-church-leaders-declare-christianity-to-be-in-a-state-of-total-apostasy |
| 332 | 10:312 | Brigham Young | Some may regret that our first parents sinned. This is nonse… | mrm.org/fall |
| 334 | 1:50 | Brigham Young | Our Father in Heaven begat all the spirits that ever were, o… | utlm.org/did-brigham-young-teach-false-doctrine |
| 336 | 15:127 | Brigham Young | If anybody wants to know what the priesthood of the Son of G… | mit.irr.org/mormon-priesthood-do-mormons-alone-have-power |
| 338 | 6:275 | Brigham Young | After men have got their exaltations and their crowns—have b… | mrm.org/govern-worlds |
| 340 | 7:2 | Brigham Young | Astronomers estimate that there is between us and the neares… | mrm.org/discourses-brigham-young-quotes |
| 341 | 10:223 | Brigham Young | Though we are in the world, yet we should be as perfect as m… | mrm.org/brigham-young, mrm.org/brigham-youngs-kings-of-kings, mrm.org/godhood-quotes |
| 342 | 18:213 | Brigham Young | Our fathers cannot be made perfect without us; we cannot be… | mrm.org/awake-or-asleep, mrm.org/baptism-for-the-dead-quotes, mrm.org/discourses-brigham-young-quotes, mrm.org/historical-baptism-dead |
| 343 | 1:350 | Brigham Young | Nothing less than the privilege of increasing eternally, in… | mrm.org/eternal-progression-mormonism |
| 346 | 11:122 | Brigham Young | God has made His children like Himself to stand erect, and h… | mrm.org/eternal-increase, mrm.org/virgin-birth, utlm.org/mormon-claims-answered-chapter-2-god |
| 347 | 5:331 | Brigham Young | Nobles once told a Methodist priest, after hearing him descr… | archive.utlm.org/onlinebooks/changech7.htm, utlm.org/the-changing-world-of-mormonism-chapter-7 |
| 348 | 10:192 | Brigham Young | We are the sons and daughters of celestial beings, and the g… | mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes |
| 349 | 5:313 | Lorenzo Snow | Through a continual course of progression, our heavenly Fath… | mrm.org/quotes-lorenzo-snow |
| 350 | 9:102 | Brigham Young | All the difference between men and angels is, men are passin… | mrm.org/angelic-or-human |
| 351 | 1:93 | Brigham Young | When we use the term perfection, it applies to man in his pr… | archive.utlm.org/onlinebooks/changech7.htm, mrm.org/brigham-young, mrm.org/discourses-brigham-young-quotes, utlm.org/orson-pratts-troubles, utlm.org/the-changing-world-of-mormonism-chapter-7 |
| 381 | 12:28 | Brigham Young | If a person is weary, worn out, cast down, fainting, or dyin… | mrm.org/blueprint-church |
| 380 | 9:332 | Brigham Young | Did the Devil believe that Joseph Smith was an impostor? He… | mrm.org/joseph-smith-quotes |
| 379 | 5:236 | Brigham Young | If they persist in sending troops here, I want the people in… | mrm.org/mountain-meadows |

## Quote audit (October 2026)

### Why quote 299 was in the rotation

Former quote 299 was Joseph Smith's own first-person First Vision narrative ("I at length came to the determination to 'ask of God,' ... early in the spring of 1820"), attributed to George Q. Cannon (JD 25:148-160), who reads Joseph Smith's 1838 account aloud in that sermon. Its "cited by" list was five pages: archive.utlm.org/onlinebooks/changech6.htm, utlm.org/the-changing-world-of-mormonism-chapter-6, utlm.org/examining-the-first-vision, utlm.org/dunn-in-the-name-of-god and utlm.org/the-gods-of-mormonism. Those are legitimate countercult pages, but **they quote Joseph Smith's own account (from the Pearl of Great Price / History of the Church); none cites Cannon's sermon or JD 25.** The first validation pass matched source pages to our database by word sequence only (6-gram), so the same words in JD 25:148 counted as "cited". That was a text match, not a citation match. The pass therefore could not tell Cannon speaking from Cannon reading.

### What changed

- Every one of the 351 quotes was re-read in full (with the sentences before and after) and re-checked: does a cited page cite this *Journal of Discourses* location (volume and page near the matched words)? (`verified` = a JD citation within the discourse's pages; `other_jd_cite` = the page cites JD but a different location; `nocite` = no JD citation found, text match only.)
- Dropped when the speaker is quoting or reading someone else (Joseph Smith's narratives, scripture, hymns, revelations) so that the attribution would mislead (**A**); when the passage is narrative or benign and carries no doctrinal claim a critic would cite, or the match is text-only (**B**); when it is truncated, begins mid-thought, or only makes sense with an unquoted question or antecedent (**C**); or has an OCR/formatting artifact (**D**: none found in the final scan, which also checked every quote for a lowercase start, a missing sentence end, spacing, odd characters and hyphenation).
- Kept quotes where the speaker states a claim in his own words, even if the discourse also quotes others elsewhere.
- Backfill: 15 passages from the exact pool were read in full and added (numbers 367-381); the others in the pool were rejected under the same A/B/C screens, or had no JD citation at the cited location.
- Quote numbers are permanent permalinks, so kept quotes keep their numbers. A dropped number (and any unused number up to 366) redirects to `/quotes/`. The rotation follows the list order in `gen/quotes-priority.json` (day of year in America/Denver modulo the list length), and prev/next links follow that order.
- Truncation: titles, meta descriptions, list previews and share images (og.png) are now cut at the end of a sentence or at a whole word, never in the middle of a word; the quote page itself always shows the full quote.

### Counts

- Before: 351. Dropped: **84** (A 18, B 38, C 28, D 0). Added: **15**. After: **282**.
- One quote (#291) was lengthened by its preceding sentence so that "they" is identified; the words are unchanged.

### Dropped quotes (with reason)

| # (old) | Cat. | JD (page) | Speaker | Text begins | Reason |
|---|---|---|---|---|---|
| 7 | B | 10:127 | John Taylor | How did this state of things called Mormonism originate? We… | Taylor: First Vision paraphrase ('an angel came down...'); narrative without a doctrinal claim |
| 9 | B | 23:300 | Erastus Snow | The Book of Mormon contains the fullness of the everlasting… | Erastus Snow: general statement of what the Book of Mormon is; only a text-only match to the cited index page |
| 16 | C | 7:36 | Orson Pratt | Therefore, the testimony establishing the truth of the Book… | Pratt: starts 'Therefore, the testimony...' (conclusion of an argument that is not included) |
| 22 | A | 24:96 | Charles W. Penrose | The Apostle Paul asks this question in the fifteenth chapter… | Penrose: mainly 1 Cor 15:29 quoted with a note that Corinthians knew baptism for the dead; text-only match to the cited page |
| 23 | A | 7:181 | Orson Pratt | About six hundred years before Christ, a Prophet was raised… | Orson Pratt retelling Lehi and Nephi from the Book of Mormon |
| 24 | C | 3:109 | Heber C. Kimball | Yes, they will, but they will be saved as I have told you ma… | Kimball: starts 'Yes, they will, but they will be saved...' (the question 'Will they be saved?' and who 'they' are is not included) |
| 26 | A | 25:157 | George Q. Cannon | I was answered that I must join none of them, for they were… | Cannon reading Joseph Smith's First Vision account ("I was answered that I must join none of them..."): first-person words of Joseph Smith |
| 28 | B | 21:163 | John Taylor | Who was Joseph Smith? The Book of Mormon tells us he was of… | Taylor: Joseph Smith was of the seed of Joseph; biographical, cited page cites another JD page |
| 37 | A | 13:320 | Wilford Woodruff | On the occasion of that visit we are informed that Jesus cho… | Woodruff retelling the Book of Mormon (3 Nephi: the Twelve and the Three Nephites) |
| 43 | B | 23:292 | Lorenzo Snow | Well, what have we to fear with regard to persecution and wi… | Lorenzo Snow: persecution cannot destroy 'Mormonism'; no doctrinal claim critics rely on; cited page cites another sermon |
| 51 | C | 16:305 | John Taylor | We call ourselves Christians, that is, we Methodists, Baptis… | Taylor: 'We call ourselves Christians...' cut before 'Well, perhaps we are, and then, perhaps we are not' |
| 52 | C | 6:155 | Orson Hyde | If it is all right with him, it is all right with me. Then i… | Hyde: 'If it is all right with him' starts mid-thought, 'him' undefined |
| 60 | C | 2:13 | Jedediah M. Grant | When the family organization was revealed from heaven—the pa… | Grant: staged dialogue between others, cut off before the answer ('I would tell him to go to hell') |
| 61 | A | 3:347 | Orson Pratt | You recollect that when the Book of Mormon was translated fr… | Orson Pratt retelling the sealed portion of the Book of Mormon plates |
| 64 | A | 12:278 | Wilford Woodruff | Jesus told His disciples to go into all the world and preach… | Woodruff paraphrasing Mark 16:15-16 |
| 66 | A | 23:360 | George Q. Cannon | Jesus said to him, “Suffer it to be so now; for thus it beco… | Cannon retelling Jesus's baptism (Matthew 3:15) |
| 74 | C | 3:360 | Brigham Young | No, for you ought to love a woman only so far as she adorns… | Brigham Young: starts 'No, for you ought to love a woman only so far...' answering an unquoted question |
| 76 | C | 20:167 | John Taylor | None of them was right, just as it was when the Prophet Jose… | Taylor: 'None of them was right' without the question it answers |
| 85 | C | 15:188 | Orson Pratt | Because the Book of Mormon reveals the mode as it was given… | Pratt: starts 'Because the Book of Mormon reveals the mode...' answering a rhetorical question that is not included |
| 86 | C | 4:260 | Orson Hyde | Is there no way provided for those to come into this covenan… | Hyde: answer to a question, does not state the claim it is cited for |
| 90 | C | 18:44 | Orson Pratt | No; it is in accordance with the Scriptures, for they forete… | Pratt: starts 'No; it is in accordance with the Scriptures' answering a question that is not included |
| 91 | A | 23:173 | Joseph F. Smith | I have shown what Christ is like, and he is like his Father,… | Joseph F. Smith quoting Doctrine and Covenants 130:22 as 'an undoubted authority' |
| 98 | A | 13:320 | Wilford Woodruff | After the death and resurrection of the Savior, when he mini… | Woodruff retelling Jesus's words in 3 Nephi / describing the Book of Mormon |
| 100 | B | 23:362 | George Q. Cannon | There was no end scarcely, in many respects, to the knowledg… | Cannon: Joseph Smith was visited by angels; biographical narrative |
| 103 | C | 16:344 | Orson Pratt | The people had entirely apostatized from that ancient order… | Orson Pratt: ends on an unanswered rhetorical question; text-only match |
| 104 | B | 20:257 | John Taylor | When the Father and the Son and Moroni and others came to Jo… | Taylor: priesthood conferred on Joseph; narrative |
| 112 | B | 18:241 | Brigham Young | Hundreds and thousands, I suppose, were baptized before any… | Brigham Young on baptism records; administrative, no claim |
| 122 | C | 16:344 | Orson Pratt | In other words, where is the church? It is said by some that… | Orson Pratt: starts 'In other words, where is the church?'; text-only match |
| 138 | B | 2:82 | Orson Hyde | We will turn over to the account of the marriage in Cana of… | Hyde: transitional sentence ('We will turn over to the account of the marriage in Cana') |
| 151 | B | 8:39 | Brigham Young | More will prove faithful than will apostatize. A certain cla… | Brigham Young: 'more will prove faithful'; text-only match, benign |
| 152 | B | 5:191 | John Taylor | What is a man's duty here? It is obedience to the oracles of… | Taylor: duty is obedience to the oracles of God; benign |
| 155 | B | 13:324 | Wilford Woodruff | While in this state of uncertainty he turned to the Bible, a… | Woodruff: First Vision retelling; narrative, no claim |
| 161 | B | 14:341 | John Taylor | We are after the truth. We commenced searching for it, and w… | Taylor: 'we are after the truth'; benign |
| 165 | B | 6:10 | Joseph Smith | A question may be asked—“Will mothers have their children in… | Joseph Smith (King Follett): mothers will have their children; pastoral, cut before its point |
| 166 | B | 1:243 | Brigham Young | Are you a Calvinist, or a Wesleyan? It is no matter, if you… | Brigham Young: 'that truth is mine'; rhetorical, benign |
| 167 | C | 3:116 | Brigham Young | I will remark that brother Orson has clearly shown how the B… | Brigham Young: refers to 'brother Orson' argument not shown; citing page does not locate this passage |
| 168 | C | 4:209 | Heber C. Kimball | In the spirit world there is an increase of males and female… | Kimball: imagined dialogue with Joseph Smith, cut off mid-scene |
| 172 | B | 3:372 | Brigham Young | A man is ordained and receives his washings, anointings, and… | Brigham Young: endowments for the dead described; text-only match, no claim |
| 176 | C | 9:269 | Brigham Young | “Oh, be sealed to me, brother; I care not what you do, you m… | Brigham Young: starts inside an imitated quotation |
| 180 | B | 13:65 | Orson Pratt | By and by an obscure individual, a young man, rose up, and,… | Orson Pratt: First Vision retelling; narrative, no claim |
| 181 | B | 4:269 | Brigham Young | We are placed on this earth to prove whether we are worthy t… | Brigham Young: probation; text-only match, benign |
| 193 | C | 9:37 | Brigham Young | Do you look forward to that? Or are you tormenting yourselve… | Brigham Young: starts 'Do you look forward to that?' with unreferenced 'that' |
| 194 | B | 6:237 | Joseph Smith | The Priesthood is an everlasting principle, and existed with… | Joseph Smith: the priesthood is everlasting; text-only match, benign |
| 196 | B | 21:308 | Orson Pratt | In a great and glorious open vision, in answer to his prayer… | Orson Pratt: First Vision retelling; narrative, no claim |
| 204 | B | 5:195 | Parley P. Pratt | Also that he will hold those keys to all eternity; and no po… | Parley Pratt: Joseph Smith will hold the keys; testimony, text-only match |
| 211 | C | 19:264 | Joseph F. Smith | Not until he has redeemed and saved every son and daughter o… | Joseph F. Smith: starts 'Not until he has redeemed...' with unreferenced 'he' |
| 212 | B | 8:197 | Brigham Young | All will not have part in the first resurrection, and perhap… | Brigham Young: kingdoms of glory; text-only match, begins mid-thought |
| 219 | C | 14:208 | Brigham Young | By revelation. How do we know that Joseph Smith was called o… | Brigham Young: starts 'By revelation.' answering an unquoted question; text-only match |
| 227 | B | 10:286 | Brigham Young | When the holy Priesthood is upon the earth, and the fulness… | Brigham Young: strict obedience; benign |
| 228 | A | 24:374 | George Q. Cannon | Joseph Smith taught a different doctrine even before the Chu… | Cannon relating a D&C revelation to Martin Harris and quoting it ('eternal punishment is God's punishment') |
| 234 | B | 12:165 | Brigham Young | The ordinance of sealing must be performed here man to man,… | Brigham Young: the ordinance of sealing; benign |
| 237 | B | 6:237 | Joseph Smith | The Priesthood was first given to Adam. He obtained the Firs… | Joseph Smith: priesthood first given to Adam; text-only match, benign |
| 238 | B | 18:239 | Brigham Young | Do we believe that the Lord sent his messengers to Joseph Sm… | Brigham Young: question-and-answer about the messengers sent to Joseph; narrative |
| 243 | B | 24:371 | George Q. Cannon | There was no man scarcely upon the earth that had a true con… | Cannon: sectarian ignorance of God; weak, same discourse as other kept quotes |
| 244 | B | 9:91 | Brigham Young | In trying all matters of doctrine, to make a decision valid,… | Brigham Young: unanimous decisions of quorums; administrative |
| 246 | A | 4:215 | Brigham Young | The Scriptures teach that this is eternal life, to “know the… | Brigham Young quoting John 17:3 with a one-line comment |
| 251 | C | 17:159 | Brigham Young | You have heard me say, a great many times, that there is not… | Brigham Young: ends 'I expect one thing will be true that Joseph said' (cut mid-thought) |
| 258 | B | 17:347 | Daniel H. Wells | Without Temples they could not have the privilege and opport… | Wells: temples and the plan of salvation; text-only match, benign |
| 262 | C | 4:78 | Brigham Young | If he acts like a devil, he has brought forth a doctrine tha… | Brigham Young: starts 'If he acts like a devil' with unreferenced 'he' |
| 266 | B | 24:372 | George Q. Cannon | In one moment all the darkness disappeared, and once more th… | Cannon: First Vision narrative ('In one moment all the darkness disappeared'); narrative |
| 268 | A | 7:322 | John Taylor | There was one man that had a little good sense and a spark o… | Taylor retelling Joseph Smith and quoting James 1:5 |
| 270 | B | 8:81 | Brigham Young | God will gather his children from all nations, and bring the… | Brigham Young: gathering to Zion; text-only match, benign |
| 278 | B | 14:147 | Brigham Young | For he who is not able to abide the law of a celestial kingd… | Brigham Young: law of each kingdom; text-only match, benign |
| 285 | C | 17:231 | George Q. Cannon | Yes, it is man's privilege, the Latter-day Saints believe, t… | Cannon: starts 'Yes, it is man's privilege...' answering a question that is not included; includes Matthew 5:48 |
| 287 | C | 16:344 | Orson Pratt | If I cannot, I have no authority to pronounce any such churc… | Orson Pratt: begins 'If I cannot...' answering an unquoted question; text-only match |
| 292 | A | 25:169 | George Q. Cannon | When I first looked upon him, I was afraid; but the fear soo… | Cannon reading Joseph Smith's account of Moroni's visit (first-person Joseph Smith) |
| 295 | B | 13:235 | Brigham Young | Now, excuse me everybody that does not believe in the Bible,… | Brigham Young: 'we are so foolish as to believe the Bible'; sarcasm, benign |
| 296 | A | 5:139 | Orson Hyde | The one is the church of the Lamb of God, and the other is t… | Hyde restating Nephi's vision of two churches (1 Nephi 14), begins mid-quote |
| 299 | A | 25:156 | George Q. Cannon | I at length came to the determination to “ask of God,” concl… | Cannon reading Joseph Smith's 1838 First Vision narrative ("I at length came to the determination..."): first-person words of Joseph Smith; the cited UTLM pages quote Joseph Smith's account, not this sermon |
| 302 | C | 8:321 | Brigham Young | What did they bestow upon him in return? They made a martyr… | Brigham Young: starts 'What did they bestow upon him in return?' ('they' and 'him' not identified in the excerpt) |
| 307 | C | 3:93 | Brigham Young | The very heathen we were talking about; if they have a law,… | Brigham Young: starts 'The very heathen we were talking about' (context missing) |
| 310 | C | 18:215 | Brigham Young | Still, it is our duty to send the Gospel to all nations, and… | Brigham Young: starts 'Still, it is our duty...' (context missing) |
| 313 | B | 14:200 | Brigham Young | The doctrine that we preach is the doctrine of the Bible, it… | Brigham Young: the doctrine is the Bible's; benign |
| 314 | B | 7:284 | Brigham Young | There is an eternity of life, from which we were composed by… | Brigham Young: eternity of life, gnat simile; benign |
| 315 | B | 13:263 | Brigham Young | Our young men and women should consider their obligations to… | Brigham Young: young people's obligations; benign |
| 325 | B | 9:149 | Brigham Young | Our religion is called “Mormonism” because the ancient recor… | Brigham Young: why it is called Mormonism; text-only match, benign |
| 327 | B | 1:81 | Brigham Young | I will ask them if Joseph lived and died a Prophet of God, a… | Brigham Young: all know Joseph was a prophet; text-only match, benign |
| 330 | A | 5:332 | Brigham Young | If we can pass Joseph and have him say, “Here; you have been… | Brigham Young: imagined speech of Joseph Smith plus John 17:3; starts and ends mid-thought |
| 333 | C | 15:220 | Brigham Young | Not but that we should find a great many who do not exactly… | Brigham Young: starts 'Not but that...' (context missing) |
| 335 | C | 10:2 | Brigham Young | Yes, he is one of us, flesh of our flesh, bone of our bone,… | Brigham Young: starts 'Yes, he is one of us' (the question is not included) |
| 337 | A | 9:286 | Brigham Young | Our former religious traditions have taught us that our Fath… | Brigham Young: quotes Habakkuk 3 / scripture, ends inside the quotation |
| 339 | B | 10:105 | Brigham Young | The spirits that live in these tabernacles were as pure as t… | Brigham Young: spirits were pure; one line without its point |
| 344 | C | 6:238 | Joseph Smith | He will call his children together and hold a council with t… | Joseph Smith: starts 'He will call his children together' with unreferenced 'He'; text-only match |
| 345 | A | 3:83 | Brigham Young | Wherefore, as it is written, they are gods, even the sons of… | Brigham Young reading D&C 76:58-59 (scripture only) |

### Added in the audit

- #367: Jedediah M. Grant, JD 1:346, "The grand reason of the burst of public sentiment in anathem…"
- #368: Brigham Young, JD 2:182, "I answer, they are first-rate, and we will prove it too, as…"
- #369: Brigham Young, JD 8:318, "There are many here that are acquainted with brother Joseph'…"
- #370: Heber C. Kimball, JD 4:178, "There is a great deal of quarrelling in the houses, and cont…"
- #371: Heber C. Kimball, JD 7:19, "We will not have them in this valley, unless they repent; fo…"
- #372: Heber C. Kimball, JD 5:32, "There is a poor curse who has written the bigger part of tho…"
- #373: Heber C. Kimball, JD 5:89, "Christians—those poor, miserable priests brother Brigham was…"
- #374: George A. Smith, JD 5:110, "You must know that I love my friends, and God Almighty knows…"
- #375: Brigham Young, JD 8:69, "The brethren testify that brother Brigham is brother Joseph'…"
- #376: Brigham Young, JD 9:143, "Will it be over in six months or in three years? No; it will…"
- #377: Orson Pratt, JD 13:362, "We believe in these promises as much as we believe in any pr…"
- #378: Brigham Young, JD 10:206, "When there was no whiskey to be had here, and we needed it f…"
- #381: Brigham Young, JD 12:28, "If a person is weary, worn out, cast down, fainting, or dyin…"
- #380: Brigham Young, JD 9:332, "Did the Devil believe that Joseph Smith was an impostor? He…"
- #379: Brigham Young, JD 5:236, "If they persist in sending troops here, I want the people in…"

## Exact, not prioritized

Each is a verbatim match; kept out of the priority set to avoid duplicates, length, or topic balance.

- JD 1:25 John Taylor: "I believe the English Bible is translated as well as any book could be…" (mrm.org/journalgems)
- JD 1:38 Brigham Young: "That is strong testimony, but it is true. No man can say that this book…" (mrm.org/bible-quotes, mrm.org/discourses-brigham-young-quotes +1)
- JD 1:46 Brigham Young: "It is my intention to preach several discourses this evening, but how…" (mrm.org/adam-god)
- JD 1:49 Brigham Young: "“Whither shall I go from thy spirit? or whither shall I flee from thy…" (mrm.org/our-father-adam)
- JD 1:50 Brigham Young: "I was trying to think of the place where God is not, but it is…" (mrm.org/our-father-adam)
- JD 1:50 Brigham Young: "Our God and Father in heaven, is a being of tabernacle, or, in other…" (mrm.org/adam-god, mrm.org/discourses-brigham-young-quotes +1)
- JD 1:57 Orson Pratt: "And while they were yet gazing upon things as they were before the…" (en.wikipedia.org/wiki/Mormon_cosmology)
- JD 1:57 Orson Pratt: "Among the great and numerous family of spirits—“the begotten sons and…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 1:73 Orson Hyde: "I believe it to be pleasing in the sight of heaven to sanctify…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 1:93 Brigham Young: "All creation, visible and invisible, is the workmanship of our God, the…" (mrm.org/our-father-adam)
- JD 1:93 Brigham Young: "When we use the term perfection, it applies to man in his present…" (mrm.org/discourses-brigham-young-quotes)
- JD 1:108 Brigham Young: "Notwithstanding this, if I caught a man stealing on my premises I…" (archive.utlm.org/onlinebooks/changech20.htm, mrm.org/blood-atonement)
- JD 1:109 Brigham Young: "If you will cause all those whom you know to be thieves, to be placed…" (archive.utlm.org/onlinebooks/changech20.htm, www.mormonthink.com/QUOTES/bloodatonement.htm)
- JD 1:158 John Taylor: "But such will find it is a fearful thing to fall into the hands of the…" (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 1:158 John Taylor: "It is said in Scripture, that “it is a fearful thing to fall into the…" (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 1:238 Brigham Young: "Here I shall have to disagree with you, to begin with; for I believe…" (www.mormonthink.com/QUOTES/adamgod.htm)
- JD 1:239 Brigham Young: "But I want to know if we agree with the teachings of the Bible, in our…" (mrm.org/discourses-brigham-young-quotes)
- JD 1:244 Brigham Young: "Now let me say to you, my hearers, to Saints and sinners: there is the…" (mrm.org/bible-quotes)
- JD 1:361 Brigham Young: "Yes! They have trampled the Constitution under their feet with…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/polygamy-quotes)
- JD 2:13 Jedediah M. Grant: "If Joseph had a right to dictate me in relation to salvation, in…" (mrm.org/joseph-smith-quotes)
- JD 2:14 Jedediah M. Grant: "You know in fishing with the hook and line, if you draw out suddenly on…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/joseph-smith-quotes +1)
- JD 2:31 Brigham Young: "Your endowment is, to receive all those ordinances in the House of the…" (mrm.org/discourses-brigham-young-quotes)
- JD 2:75 Orson Hyde: "The words contained in this Bible are merely a history of what is gone…" (mrm.org/bible-quotes)
- JD 2:81 Orson Hyde: "In old times, and it is common in this day, the women, even as Sarah,…" (mrm.org/jesus-quotes)
- JD 2:81 Orson Hyde: "She, supposing him to be the gardener, saith unto him, Sir, if thou…" (mrm.org/jesus-quotes)
- JD 2:128 Brigham Young: "Again, I say if “Mormonism” is not all I anticipated it to be, it is…" (mrm.org/discourses-brigham-young-quotes)
- JD 2:137 Brigham Young: "Any person knowing and understanding the Scriptures as they are, and…" (mrm.org/discourses-brigham-young-quotes)
- JD 2:148 Jedediah M. Grant: "It is no matter how much they deal in compromised measures, or how…" (en.wikipedia.org/wiki/Mountain_Meadows_massacre)
- JD 2:148 Jedediah M. Grant: "Consequently I look for the Lord to use His whip on the refractory son…" (en.wikipedia.org/wiki/Mountain_Meadows_massacre)
- JD 2:175 Brigham Young: "To accuse us of being unfriendly to the Government, is to accuse us of…" (mrm.org/discourses-brigham-young-quotes)
- JD 2:182 Brigham Young: "I answer, they are first-rate, and we will prove it too, as you will…" (mrm.org/discourses-brigham-young-quotes)
- JD 2:184 Brigham Young: "Formerly the rumor was that “they were agoing to tamper with the…" (mit.irr.org/brigham-young-on-race-later-comments, mrm.org/discourses-brigham-young-quotes +1)
- JD 2:269 Brigham Young: "The Book of Mormon came to Ephraim, for Joseph Smith was a pure…" (mrm.org/joseph-smith-quotes)
- JD 2:307 Brigham Young: "When was there a beginning? There never was one; if there was, there…" (mrm.org/discourses-brigham-young-quotes)
- JD 2:311 Brigham Young: "To diverge a little, in regard to those who have persecuted this people…" (en.wikipedia.org/wiki/Mountain_Meadows_massacre)
- JD 2:311 Brigham Young: "It was asked this morning how we could obtain redress for our wrongs; I…" (en.wikipedia.org/wiki/Mountain_Meadows_massacre)
- JD 2:317 Brigham Young: "When the day comes in which the Kingdom of God will bear rule, the flag…" (mrm.org/discourses-brigham-young-quotes)
- JD 2:342 Orson Pratt: "I will give you our Savior's own words: “Neither pray I for these…" (mrm.org/becoming-like-god)
- JD 3:29 George A. Smith: "For the last hundred years, philanthropists, who were ignorant of the…" (mrm.org/lds-citations-blacks)
- JD 3:82 Brigham Young: "For we saw him, even on the right hand of God; and we heard the voice…" (en.wikipedia.org/wiki/Mormon_cosmology)
- JD 3:83 Brigham Young: "Wherefore, he saves all except them—they shall go away into everlasting…" (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 3:83 Brigham Young: "These are they who are just men made perfect through Jesus the mediator…" (mrm.org/becoming-like-god)
- JD 3:93 Brigham Young: "The very heathen we were talking about; if they have a law, no matter…" (mrm.org/discourses-brigham-young-quotes)
- JD 3:116 Brigham Young: "I will remark that brother Orson has clearly shown how the Bible has…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 3:116 Brigham Young: "The Bible is good enough as it is, to point out the way we should walk,…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 3:245 Brigham Young: "From what is at times said here, it might be inferred that everyone who…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 3:246 Brigham Young: "For example, one obligation is, “I will never have anything to do with…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 3:256 Brigham Young: "Is the spirit of the government and rule here despotic? In their use of…" (en.wikipedia.org/wiki/Mountain_Meadows_massacre)
- JD 3:356 Brigham Young: "It is brought together, organized, and capacitated to receive knowledge…" (mrm.org/kfd)
- JD 3:360 Brigham Young: "No, for you ought to love a woman only so far as she adorns the…" (mrm.org/discourses-brigham-young-quotes, mrm.org/doctrine-quotes)
- JD 3:360 Brigham Young: "Elders, never love your wives one hair's breadth further than they…" (mrm.org/marriage-quotes)
- JD 3:367 Brigham Young: "We understand, for it has long been told us, that we had an existence…" (mrm.org/discourses-brigham-young-quotes)
- JD 3:368 Brigham Young: "Do you suppose that one-third part of all the beings that existed in…" (mrm.org/discourses-brigham-young-quotes)
- JD 3:372 Brigham Young: "A man is ordained and receives his washings, anointings, and endowments…" (mrm.org/discourses-brigham-young-quotes)
- JD 4:24 Brigham Young: "To explain how much confidence we should have in God, were I using a…" (mrm.org/discourses-brigham-young-quotes, mrm.org/salvation-quotes)
- JD 4:52 Brigham Young: "We need a reformation in the midst of this people; we need a thorough…" (en.wikipedia.org/wiki/Brigham_Young, en.wikipedia.org/wiki/Mormon_Reformation)
- JD 4:54 Brigham Young: "There are sins that can be atoned for by an offering upon an altar, as…" (archive.utlm.org/onlinebooks/changech20.htm, utlm.org/brigham-youngs-wives-)
- JD 4:56 Brigham Young: "Sisters, I am not joking, I do not throw out my proposition to banter…" (utlm.org/brigham-youngs-wives-)
- JD 4:57 Brigham Young: "“But,” says one, “I want to have my paradise now.” And says another, “I…" (utlm.org/brigham-youngs-wives-)
- JD 4:57 Brigham Young: "But the women come and say, “Really brother John, and brother William,…" (utlm.org/brigham-youngs-wives-)
- JD 4:57 Brigham Young: "Prepare yourselves for two weeks from tomorrow; and I will tell you…" (utlm.org/brigham-youngs-wives-)
- JD 4:78 Brigham Young: "If he acts like a devil, he has brought forth a doctrine that will save…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 4:91 Brigham Young: "My faith is, when we have done all we can, then the Lord is under…" (mrm.org/discourses-brigham-young-quotes, mrm.org/salvation-quotes)
- JD 4:174 Heber C. Kimball: "That time is nearby, and God has spoken from the heavens, and when…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 4:176 Heber C. Kimball: "Ye cannot say, when ye are brought to that awful crisis, that I will…" (mrm.org/repentance-quotes, mrm.org/temple-quotes)
- JD 4:177 Heber C. Kimball: "It is for you to arouse yourselves from these things and pay all you…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 4:178 Heber C. Kimball: "Brother James Brown, has it not been good for you to be here today?…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 4:178 Heber C. Kimball: "Why do I keep talking these things over? Because I want you to…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 4:178 Heber C. Kimball: "What do those women think? They believe that I am guilty of the same…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 4:193 Wilford Woodruff: "In paying our tithing, in obeying every law that is given to exalt us…" (mrm.org/obedience-quotes)
- JD 4:209 Heber C. Kimball: "I have known men from Nauvoo, men who were there worth $150 or…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 4:215 Brigham Young: "The Scriptures teach that this is eternal life, to “know thee the only…" (en.wikipedia.org/wiki/Adam–God_doctrine)
- JD 4:219 Brigham Young: "But now I say, in the name of the Lord, that if this people will sin no…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 4:219 Brigham Young: "Now take a person in this congregation who has knowledge with regard to…" (archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement +2)
- JD 4:268 Brigham Young: "Are all spirits endowed alike? No, not by any means. Will all be equal…" (mrm.org/discourses-brigham-young-quotes)
- JD 4:269 Brigham Young: "We are placed on this earth to prove whether we are worthy to go into…" (mrm.org/discourses-brigham-young-quotes)
- JD 4:271 Brigham Young: "If we can pass the sentinel Joseph the Prophet, we shall go into the…" (mrm.org/joseph-smith-quotes)
- JD 4:297 Brigham Young: "It was not for me to question whether Joseph was dictated by the Lord…" (mrm.org/joseph-smith-quotes)
- JD 4:297 Brigham Young: "He was called of God; God dictated him, and if He had a mind to leave…" (mrm.org/joseph-smith-quotes)
- JD 4:298 Brigham Young: "And I wish we had more Elders to go and preach just such sermons by the…" (mrm.org/joseph-smith-quotes)
- JD 4:345 Brigham Young: "He also tells about the Danites, and asserts that they are in every…" (en.wikipedia.org/wiki/Danites)
- JD 5:4 Brigham Young: "This American continent will be Zion; for it is so spoken of by the…" (mrm.org/discourses-brigham-young-quotes)
- JD 5:6 Brigham Young: "There have been men here who have had their plans arranged for robbing;…" (en.wikipedia.org/wiki/Danites)
- JD 5:6 Brigham Young: "I want the people in the States to know that there are a few poor…" (en.wikipedia.org/wiki/Danites)
- JD 5:22 Heber C. Kimball: "I have noticed that a man who has but one wife, and is inclined to that…" (en.wikipedia.org/wiki/Heber_C_Kimball)
- JD 5:55 Brigham Young: "It is written that they were cast down to the earth. They were cast…" (mrm.org/discourses-brigham-young-quotes, mrm.org/mormon-rebels-and-eternal-punishment)
- JD 5:87 Heber C. Kimball: "When Joseph was here, he was the head of the vine in the flesh; but…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 5:87 Heber C. Kimball: "What! Of those that do not belong to this Church? Yes, just as much as…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 5:88 Heber C. Kimball: "You call us fools; but the day will be, gentlemen and ladies, whether…" (mrm.org/joseph-smith-quotes)
- JD 5:210 Brigham Young: "Why it should have troubled an infirm old man like him is not for me to…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/discourses-brigham-young-quotes)
- JD 5:223 George A. Smith: "There was only one thing that I dreaded, and that was a spirit in the…" (en.wikipedia.org/wiki/Mountain_Meadows_massacre)
- JD 5:312 Lorenzo Snow: "We do not fully comprehend and we do not have before our view the…" (mrm.org/exaltation-quotes)
- JD 5:332 Brigham Young: "But those are ideas which do not concern us at present, although it is…" (en.wikipedia.org/wiki/Adam–God_doctrine)
- JD 5:332 Brigham Young: "Look at them, and see the difference from their condition a few years…" (archive.utlm.org/onlinebooks/curseofcain_part2.htm)
- JD 6:2 Joseph Smith: "If men do not comprehend the character of God, they do not comprehend…" (mrm.org/becoming-like-god)
- JD 6:3 Joseph Smith: "These are incomprehensible ideas to some; but they are simple. It is…" (mrm.org/exaltation-quotes, mrm.org/god-quotes)
- JD 6:4 Joseph Smith: "When you climb a ladder, you must begin at the bottom, and ascend step…" (mrm.org/exaltation-quotes, mrm.org/god-quotes)
- JD 6:7 Joseph Smith: "God himself, finding he was in the midst of spirits and glory, because…" (mrm.org/becoming-like-god)
- JD 6:29 Heber C. Kimball: "Do you suppose that God in person called upon Joseph Smith, our…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 6:29 Heber C. Kimball: "Why did he not come along? Because he has agents to attend to his…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 6:34 Heber C. Kimball: "God designs we should be pure men, holding the oracles of God in holy…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 6:35 Heber C. Kimball: "We shall clean the platter of all such scoundrels; and if men and women…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 6:100 Brigham Young: "If they had been sanctified and holy, the children of Israel would not…" (mrm.org/discourses-brigham-young-quotes)
- JD 6:125 Heber C. Kimball: "Jesus meant to say, “If you have lost the saving principles, you Twelve…" (archive.utlm.org/onlinebooks/changech20.htm, mrm.org/blood-atonement)
- JD 6:126 Heber C. Kimball: "Judas was like salt that had lost its saving principles—good for…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 6:126 Heber C. Kimball: "It is so with you, ye Elders of Israel, when you forfeit your covenants." (archive.utlm.org/onlinebooks/changech20.htm)
- JD 6:126 Heber C. Kimball: "I know the day is right at hand when men will forfeit their Priesthood…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 6:162 John Taylor: "When we reflect upon the myriads of human beings that crowd the earth…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 6:237 Joseph Smith: "The Priesthood is an everlasting principle, and existed with God from…" (mrm.org/priesthood-quotes)
- JD 6:256 Heber C. Kimball: "I say to those who are elected to go on missions, Go, if you never…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 6:282 Brigham Young: "It is all connected with the exaltation of man, showing how he becomes…" (mrm.org/polygamy-quotes)
- JD 6:287 Brigham Young: "For, behold, I am endless, and the punishment which is given from my…" (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 6:331 Brigham Young: "If I should hear a man advocate the erroneous principles he had imbibed…" (mrm.org/discourses-brigham-young-quotes)
- JD 6:332 Brigham Young: "The Apostles and Prophets, when speaking of our relationship to God,…" (mrm.org/discourses-brigham-young-quotes)
- JD 6:345 Brigham Young: "Some would have us believe that God is present everywhere. It is not…" (mrm.org/discourses-brigham-young-quotes, mrm.org/god-quotes)
- JD 6:351 Orson Pratt: "The Book of Mormon, therefore, is the only record (professing to be…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 7:2 Brigham Young: "Astronomers estimate that there is between us and the nearest fixed…" (mrm.org/discourses-brigham-young-quotes)
- JD 7:19 Heber C. Kimball: "Well, in one sense they are common—that is, they are like all other…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 7:19 Heber C. Kimball: "We will not have them in this valley, unless they repent; for, so help…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 7:20 Heber C. Kimball: "These are my views, and the Lord knows that I believe in the principles…" (archive.utlm.org/onlinebooks/changech20.htm)
- JD 7:143 Brigham Young: "As it is written, we have line upon line, precept upon precept, here a…" (mrm.org/doctrine-quotes)
- JD 7:145 Brigham Young: "Every time you kick ‘Mormonism,’ you kick it upstairs: you never kick…" (mrm.org/discourses-brigham-young-quotes)
- JD 7:193 Brigham Young: "The Apostles and Prophets, when speaking of our relationship to God,…" (mrm.org/discourses-brigham-young-quotes)
- JD 7:252 Orson Pratt: "Wherefore teach it unto your children, that all men, everywhere, must…" (www.mormonthink.com/QUOTES/adamgod.htm)
- JD 7:276 Brigham Young: "Neither pray I for these alone, but for them also which shall believe…" (mrm.org/becoming-like-god)
- JD 7:290 Brigham Young: "The great majority of those who are now before me are the descendants…" (utlm.org/brigham-young-sermon-blacks-and-the-priesthood-)
- JD 7:298 Amasa M. Lyman: "The chief of what he has done is that he has revealed the plan of the…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- JD 7:333 Brigham Young: "The people called Christians are shrouded in ignorance, and read the…" (mrm.org/christianity-quotes)
- JD 7:336 Brigham Young: "You may inquire of the intelligent of the world whether they can tell…" (mit.irr.org/brigham-young-on-race-later-comments)
- JD 8:12 Brigham Young: "When a man begins to find fault, inquiring in regard to this, that, and…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:39 Brigham Young: "More will prove faithful than will apostatize. A certain class of this…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:59 Brigham Young: "To please our Father in heaven, and do his will in all things, to walk…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:81 Brigham Young: "This is the land of Zion—this is the continent whereon the Lord has…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:129 Brigham Young: "But “Mormonism” has opened up light. Removing the curtain from the…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:162 Brigham Young: "I feel happy. “Mormonism” has made me all I am, and the grace, the…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:176 Brigham Young: "I will now give my scripture—“Whosoever confesseth that Joseph Smith…" (mrm.org/discourses-brigham-young-quotes, mrm.org/joseph-smith-quotes)
- JD 8:178 Brigham Young: "Send and bring home the poor. I forbid your coming home in your…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 8:195 Brigham Young: "In the beginning, after this earth was prepared for man, the Lord…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:197 Brigham Young: "All will not have part in the first resurrection, and perhaps many will…" (mrm.org/discourses-brigham-young-quotes)
- JD 8:223 Brigham Young: "Every intelligent person under the heavens that does not, when…" (mrm.org/joseph-smith-quotes)
- JD 8:264 Wilford Woodruff: "There is one particular feature connected with the preaching of the…" (mrm.org/doctrine-quotes)
- JD 8:265 Wilford Woodruff: "Our union and oneness of sentiment constitutes one of the prominent…" (mrm.org/doctrine-quotes)
- JD 8:275 Heber C. Kimball: "There will always be a head, and members of the Church of Jesus Christ…" (en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy)
- JD 8:324 Brigham Young: "The present Constitution, with a few alterations of a trifling nature,…" (mrm.org/discourses-brigham-young-quotes)
- JD 9:37 Brigham Young: "Sisters, do you wish to make yourselves happy? Then what is your duty?…" (utlm.org/brigham-youngs-wives-)
- JD 9:37 Brigham Young: "Or are you tormenting yourselves by thinking that your husbands do not…" (utlm.org/brigham-youngs-wives-)
- JD 9:41 Heber C. Kimball: "This brings to my mind the vision that Joseph Smith had, when he saw…" (www.mormonthink.com/QUOTES/adamgod.htm)
- JD 9:147 Brigham Young: "For, behold, I am endless, and the punishment which is given from my…" (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 9:149 Brigham Young: "Our religion is called “Mormonism” because the ancient records revealed…" (mrm.org/discourses-brigham-young-quotes)
- JD 9:151 Heber C. Kimball: "And now, behold, I speak unto the church. Thou shalt not kill; and he…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 9:157 Brigham Young: "I can tell all the world that we mean to sustain the Constitution of…" (mrm.org/discourses-brigham-young-quotes)
- JD 9:195 Brigham Young: "I know of no community where females enjoy the privileges they do here.…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, utlm.org/brigham-youngs-wives-)
- JD 9:243 Brigham Young: "Whither shall I go from thy spirit? or whither shall I flee from thy…" (mrm.org/our-father-adam)
- JD 9:247 Brigham Young: "Many of us have been taught the doctrine of total depravity—that man is…" (mrm.org/discourses-brigham-young-quotes)
- JD 9:332 Brigham Young: "He knew that Joseph Smith was a true Prophet. Did the first priest who…" (mrm.org/joseph-smith-quotes)
- JD 10:11 Wilford Woodruff: "And also those to whom these commandments were given, might have power…" (mrm.org/repentance-quotes)
- JD 10:41 Brigham Young: "We will cling to the Constitution of our country, and to the Government…" (mrm.org/discourses-brigham-young-quotes)
- JD 10:105 Brigham Young: "The spirits that live in these tabernacles were as pure as the heavens,…" (archive.utlm.org/onlinebooks/curseofcain_part2.htm)
- JD 10:108 Brigham Young: "I am a human being, and I have the care of human beings. I wish to save…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 10:111 Brigham Young: "I am neither an abolitionist nor a pro-slavery man. If I could have…" (en.wikipedia.org/wiki/Blood_atonement, mit.irr.org/brigham-young-on-race-later-comments)
- JD 10:114 John Taylor: "It is not fully comprehended why it was necessary that Jesus Christ…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- JD 10:114 John Taylor: "It is not fully comprehended why it was necessary that Jesus Christ…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- JD 10:115 John Taylor: "What sins of the world did he take away? We are told that it is the sin…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- JD 10:192 Brigham Young: "We are the sons and daughters of celestial beings, and the germ of the…" (mrm.org/discourses-brigham-young-quotes)
- JD 10:223 Brigham Young: "We are not required in our sphere to be as perfect as Gods and angels…" (mrm.org/godhood-quotes)
- JD 10:230 Brigham Young: "Should you ask why we differ from other Christians, as they are called,…" (mrm.org/christianity-quotes)
- JD 10:242 Heber C. Kimball: "“And now, behold, I speak unto the church. Thou shalt not kill; and he…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 10:250 Brigham Young: "To tell it in a plain, truthful way, one portion of the country wish to…" (archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism)
- JD 10:251 Brigham Young: "It is the only system of religion known in heaven or on earth that can…" (mrm.org/godhood-quotes)
- JD 10:265 Brigham Young: "“Eye hath not seen, nor ear heard, neither have entered into the heart…" (mrm.org/becoming-like-god, mrm.org/exaltation)
- JD 10:345 George Q. Cannon: "Read the discourses of the first Presidency and the Twelve, and you…" (mrm.org/journal-of-discourses)
- JD 10:345 George Q. Cannon: "There has not been a single minute that this people has been left…" (mrm.org/journal-of-discourses)
- JD 10:355 Brigham Young: "And the Lord administered comfort unto Adam, and said unto him: I have…" (mrm.org/our-father-adam)
- JD 11:3 George A. Smith: "There was at this time in Kirtland, a society that had undertaken to…" (archive.utlm.org/onlinebooks/curseofcain_part2.htm)
- JD 11:4 George A. Smith: "Others also manifested wonderful developments; they could see angels,…" (archive.utlm.org/onlinebooks/curseofcain_part2.htm)
- JD 11:117 Brigham Young: "You may remember it and lay it to heart, and if you wish, write it in…" (mrm.org/discourses-brigham-young-quotes)
- JD 11:125 Brigham Young: "The sectarian doctrine of final rewards and punishments is as strange…" (mrm.org/discourses-brigham-young-quotes)
- JD 11:128 Brigham Young: "Polygamy did not have its origin with Joseph Smith, but it existed from…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/polygamy-quotes)
- JD 11:268 Brigham Young: "We wish to obtain all that father Abraham obtained. I wish here to say…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 11:271 Brigham Young: "None will become angels to the devil except those who have sinned…" (mrm.org/discourses-brigham-young-quotes)
- JD 11:273 Brigham Young: "Jesus prayed, “Neither pray I for these alone, but for them also which…" (mrm.org/becoming-like-god)
- JD 11:286 Brigham Young: "Some men seem as if they could learn so much and no more. They appear…" (mrm.org/discourses-brigham-young-quotes, mrm.org/eternal-progression-quotes +2)
- JD 11:290 Brigham Young: "David has expressed himself; “Whither shall I go from thy spirit? or…" (mrm.org/our-father-adam)
- JD 11:298 Brigham Young: "Now ask the Father in the name of Jesus whether I am telling you the…" (mrm.org/authority-quotes)
- JD 11:357 John Taylor: "We could progress a great deal faster, and could prosper a thousand…" (mrm.org/authority-quotes)
- JD 12:127 Brigham Young: "What man or woman on the earth, what spirit in the spirit world can say…" (mrm.org/authority-quotes)
- JD 12:163 Brigham Young: "It is absolutely necessary that the Saints should receive the further…" (mrm.org/discourses-brigham-young-quotes, mrm.org/temple-quotes)
- JD 12:173 Brigham Young: "We declare it to all the inhabitants of the earth from the valleys in…" (mrm.org/discourses-brigham-young-quotes)
- JD 12:204 Brigham Young: "How long will it be before the words of the prophet Joseph will be…" (mrm.org/discourses-brigham-young-quotes)
- JD 12:313 Brigham Young: "Whenever we get into the kingdom of Heaven, where God and Christ dwell,…" (mrm.org/discourses-brigham-young-quotes)
- JD 12:313 Brigham Young: "I will now say to my friends—and I call you all, and all mankind,…" (mrm.org/discourses-brigham-young-quotes)
- JD 12:364 George Q. Cannon: "And said He, “Neither pray I for these alone, but for them also which…" (mrm.org/becoming-like-god)
- JD 13:3 Brigham Young: "I know that some say the revelations upon these points are not given by…" (mrm.org/discourses-brigham-young-quotes)
- JD 13:18 John Taylor: "This is the religion that Jesus taught—it had power to bind on earth…" (mrm.org/marriage-quotes)
- JD 13:38 George A. Smith: "The Latter-day Saints believe the Bible. An agent of the American Bible…" (mrm.org/bible-quotes)
- JD 13:40 George A. Smith: "The opposers of Celestial Marriage sometimes quote a passage in the…" (mrm.org/polygamy-quotes)
- JD 13:76 Brigham Young: "This is the plan of salvation. Jesus will never cease his work until…" (mrm.org/discourses-brigham-young-quotes)
- JD 13:125 Orson Pratt: "Jesus made his appearance on the earth in the meridian of time, and he…" (mrm.org/christianity-quotes)
- JD 13:144 Brigham Young: "Now I would ask the Christian world a question, and in doing so I do…" (mrm.org/god-quotes)
- JD 13:145 Brigham Young: "The Apostle Paul has also said, “For as many as are led by the Spirit…" (mrm.org/becoming-like-god)
- JD 13:166 Wilford Woodruff: "Do away with that, then we must do away with prophets and Apostles,…" (mrm.org/polygamy-quotes)
- JD 13:195 Orson Pratt: "This law of monogamy, or the monogamic system, laid the foundation for…" (mrm.org/marriage-quotes)
- JD 13:215 Brigham Young: "Every ordinance, every commandment and requirement is necessary for the…" (mrm.org/discourses-brigham-young-quotes, mrm.org/salvation-quotes)
- JD 13:216 Brigham Young: "I honor and revere the name of Joseph Smith. I delight to hear it; I…" (mrm.org/discourses-brigham-young-quotes, mrm.org/joseph-smith-quotes)
- JD 13:262 Brigham Young: "We cannot go into any town or little village in the Territory but we…" (mrm.org/marriage-quotes)
- JD 13:263 Brigham Young: "Our young men and women should consider their obligations to each…" (mrm.org/marriage-quotes)
- JD 13:271 Brigham Young: "But these sayings are very vague, and amount to nothing; and when you…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 13:277 Brigham Young: "And this Word of Wisdom prohibits the use of hot drinks and tobacco. I…" (mrm.org/discourses-brigham-young-quotes)
- JD 13:320 Wilford Woodruff: "After the death and resurrection of the Savior, when he ministered to…" (mrm.org/wilford-woodruff-quotes)
- JD 13:320 Wilford Woodruff: "On the occasion of that visit we are informed that Jesus chose Twelve…" (mrm.org/wilford-woodruff-quotes)
- JD 13:320 Wilford Woodruff: "The first quorum of Apostles were all put to death, except John, and we…" (mrm.org/wilford-woodruff-quotes)
- JD 14:54 George Q. Cannon: "“Neither pray I for these alone; but for them also which shall believe…" (mrm.org/becoming-like-god)
- JD 14:58 George Q. Cannon: "We close the door on one side, and say that whoredoms, seductions and…" (mrm.org/polygamy-quotes)
- JD 14:160 Brigham Young: "Our doctrine and practice is, and I have made it mine through life—to…" (mrm.org/discourses-brigham-young-quotes)
- JD 14:200 Brigham Young: "The doctrine that we preach is the doctrine of the Bible, it is the…" (mrm.org/bible-quotes, mrm.org/discourses-brigham-young-quotes)
- JD 14:202 Brigham Young: "Not that Joseph was the Savior, but he was a prophet. As he said once,…" (mrm.org/discourses-brigham-young-quotes)
- JD 14:208 Brigham Young: "By revelation. How do we know that Joseph Smith was called of God to…" (mrm.org/discourses-brigham-young-quotes)
- JD 14:216 George A. Smith: "If a faith will not bear to be investigated; if its preachers and…" (mrm.org/pinning-down-mormon-doctrine)
- JD 14:225 Brigham Young: "“No, sir,” said I, “if I sign the temperance pledge I feel that I am…" (en.wikipedia.org/wiki/Brigham_Young)
- JD 14:242 Orson Pratt: "But another and still greater object the Lord had in view in sending us…" (mrm.org/godhood-quotes)
- JD 14:320 George Q. Cannon: "Why is it that we are so anxious to build temples? It is that we may…" (mrm.org/temple-quotes)
- JD 15:83 Brigham Young: "Gradually, little by little, little by little, the spirit of their…" (mrm.org/discourses-brigham-young-quotes)
- JD 15:113 George Q. Cannon: "When I say repent, I mean a complete forsaking of sin, and turning from…" (mrm.org/repentance-quotes)
- JD 15:220 Brigham Young: "Not but that we should find a great many who do not exactly understand…" (mrm.org/salvation-quotes)
- JD 16:46 Brigham Young: "Take up the Bible, compare the religion of the Latter-day Saints with…" (mrm.org/bible-quotes, mrm.org/discourses-brigham-young-quotes)
- JD 16:161 Brigham Young: "If there is an Elder here, or any member of this Church, called the…" (mrm.org/authority-quotes, mrm.org/pinning-down-mormon-doctrine)
- JD 16:162 Brigham Young: "Every blessing the Lord proffers to his people is on conditions. These…" (mrm.org/discourses-brigham-young-quotes)
- JD 16:166 Brigham Young: "He has had a talent that he has hid up. He will come forward and say,…" (mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes)
- JD 16:175 Orson Pratt: "I said their baptisms are illegal. Now let me go a little farther, and…" (mrm.org/marriage-quotes)
- JD 16:237 George A. Smith: "I feel like exhorting my brethren and sisters to abstain from…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 16:238 George A. Smith: "I say, brethren and sisters, let us observe the Word of Wisdom. We are…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 16:238 George A. Smith: "It was very soon discovered that unless they sold tobacco, so many…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 16:305 John Taylor: "We call ourselves Christians, that is, we Methodists, Baptists,…" (mrm.org/christianity-quotes)
- JD 17:206 John Taylor: "We are not connected with a something that will exist only for a few…" (mrm.org/regress)
- JD 17:227 Orson Pratt: "Has God joined them together? No, a civil magistrate has done it; and…" (mrm.org/marriage-quotes)
- JD 18:39 Wilford Woodruff: "But for all this they will receive their reward—they will become Gods,…" (mrm.org/godhood-quotes)
- JD 18:50 Orson Pratt: "If you have been pretty good people and have kept the commandments of…" (mrm.org/godhood-quotes)
- JD 18:55 Orson Pratt: "And hence, God has strictly forbidden, in this Bible, plurality of…" (mrm.org/polygamy-quotes)
- JD 18:114 Wilford Woodruff: "The Lord holds us responsible for going to and building Temples, that…" (mrm.org/temple-quotes)
- JD 18:117 Wilford Woodruff: "I am willing to exchange all the errors and false notions I have for…" (mrm.org/wilford-woodruff-quotes)
- JD 18:213 Brigham Young: "They have done their work and now sleep. We are now called upon to do…" (mrm.org/baptism-for-the-dead-quotes, mrm.org/discourses-brigham-young-quotes)
- JD 18:241 Brigham Young: "Hundreds and thousands, I suppose, were baptized before any record was…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 18:283 John Taylor: "Says Jesus, “That they all may be one, as thou, Father, art in me, and…" (mrm.org/becoming-like-god)
- JD 18:295 Orson Pratt: "And God shall wipe away all tears from their eyes; and there shall be…" (mrm.org/exaltation)
- JD 18:322 Orson Pratt: "And God shall wipe away all tears from their eyes, and there shall be…" (mrm.org/exaltation)
- JD 18:336 Orson Pratt: "“And there was given him dominion, and glory, and a kingdom, that all…" (mrm.org/adam-god, mrm.org/our-father-adam)
- JD 18:343 Orson Pratt: "And the Lord administered comfort to Adam, and said unto him: I have…" (mrm.org/our-father-adam)
- JD 19:36 Brigham Young: "No, you do not. These treasures that are in the earth are carefully…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses)
- JD 19:152 John Taylor: "And this heavenly messenger did come and did so ordain them, on May…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 19:163 Charles C. Rich: "It is a fearful thing to fall into the hands of the living God." (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 19:177 Orson Pratt: "“And God shall wipe away all tears from their eyes; and there shall be…" (mrm.org/exaltation)
- JD 19:190 Joseph F. Smith: "Then what is true repentance? True repentance is not only sorrow for…" (mrm.org/repentance-quotes)
- JD 19:191 Joseph F. Smith: "“For prophecy came not in old time by the will of man: but holy men of…" (mrm.org/official-mormon-doctrine)
- JD 19:193 Joseph F. Smith: "Marriage, is also a principle or ordinance of the Gospel, most vital to…" (mrm.org/marriage-quotes)
- JD 19:210 Orson Pratt: "“Behold, I am Jesus Christ. I am the Father and the Son. In me shall…" (en.wikipedia.org/wiki/Jesus_in_Mormonism)
- JD 19:229 Wilford Woodruff: "I straightway went into the baptismal font and called upon brother…" (en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/baptism-for-the-dead-quotes)
- JD 19:260 Joseph F. Smith: "“There is a law, irrevocably decreed in heaven before the foundations…" (mrm.org/obedience-quotes)
- JD 19:264 Joseph F. Smith: "Not until he has redeemed and saved every son and daughter of our…" (mrm.org/baptism-for-the-dead-quotes, mrm.org/jesus-quotes)
- JD 19:362 Wilford Woodruff: "If I ever obtain a full salvation it will be by my keeping the laws of…" (mrm.org/salvation-quotes, mrm.org/wilford-woodruff-quotes)
- JD 20:144 Orson Pratt: "We read about two priesthoods in the Bible; one was called, the “higher…" (mrm.org/priesthood-quotes)
- JD 21:81 Charles W. Penrose: "But we find this distinction in their teaching in regard to original…" (mrm.org/adam-god)
- JD 21:81 Charles W. Penrose: "But we find this distinction in their teaching in regard to original…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- JD 21:124 Wilford Woodruff: "For the prophecy came not in old time by the will of man; but holy men…" (mrm.org/official-mormon-doctrine)
- JD 21:163 John Taylor: "Who was Joseph Smith? The Book of Mormon tells us he was of the seed of…" (mrm.org/joseph-smith-quotes)
- JD 21:320 Orson Pratt: "“And God shall wipe away all tears from their eyes; and there shall be…" (mrm.org/exaltation)
- JD 21:346 John Taylor: "And this Spirit has borne witness to our spirits as it has been said by…" (mrm.org/becoming-like-god)
- JD 21:361 John Taylor: "“But, as a high priest of the Melchizedek Priesthood has authority to…" (mrm.org/priesthood-quotes)
- JD 21:364 John Taylor: "I again quote: “There are, in the church, two priesthoods, namely, the…" (mrm.org/priesthood-quotes)
- JD 21:370 John Taylor: "Abraham came through Shem, and the Savior came through this lineage;…" (archive.utlm.org/onlinebooks/curseofcain_part2.htm)
- JD 22:124 George Q. Cannon: "When we talk about celestial glory, we talk of the condition of endless…" (mrm.org/god-quotes)
- JD 22:194 John Taylor: "And if they be literal descendants of Aaron, they have a legal right to…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 22:195 John Taylor: "There are, in the church, two priesthoods, namely, the Melchizedek and…" (mrm.org/priesthood-quotes)
- JD 22:195 John Taylor: "But out of respect or reverence to the name of the Supreme Being, to…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 22:206 Wilford Woodruff: "I believe that God Almighty reserved a certain class of men to carry on…" (mrm.org/joseph-smith-quotes, mrm.org/wilford-woodruff-quotes)
- JD 22:209 Wilford Woodruff: "We are now upon our second estate, and our eternal destiny depends upon…" (mrm.org/eternal-progression-quotes, mrm.org/wilford-woodruff-quotes)
- JD 22:299 John Taylor: "Some of our folks nowadays feel and say sometimes, they have a portion…" (mrm.org/authority-quotes)
- JD 22:305 John Taylor: "They conferred on him first the Priesthood of Aaron, a descendant of…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 22:345 Wilford Woodruff: "Because God Almighty holds in His hands the destiny of this people, and…" (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 23:32 John Taylor: "Hence John the Baptist, who held the keys of the Aaronic Priesthood,…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 23:70 Joseph F. Smith: "And that law of the land which is constitutional, supporting that…" (en.wikipedia.org/wiki/Danites)
- JD 23:125 Wilford Woodruff: "I wish to say a few words on one of the verses I have read, the 22nd:…" (mrm.org/adam-god)
- JD 23:126 Wilford Woodruff: "“What shall we do to be saved” was the cry of the people who heard the…" (mrm.org/salvation-quotes)
- JD 23:169 Joseph F. Smith: "And the Lord further says, “But, behold I say unto you that I, the Lord…" (mrm.org/our-father-adam)
- JD 23:171 Joseph F. Smith: "He further declared, “Behold, I am he who was prepared from the…" (en.wikipedia.org/wiki/Jesus_in_Mormonism)
- JD 23:173 Joseph F. Smith: "The man who passes through this probation, and is faithful, being…" (mrm.org/regress)
- JD 23:173 Joseph F. Smith: "I have shown what Christ is like, and he is like his Father, but I will…" (en.wikipedia.org/wiki/Jesus_in_Mormonism)
- JD 23:292 Lorenzo Snow: "Well, what have we to fear with regard to persecution and with regard…" (mrm.org/quotes-lorenzo-snow)
- JD 23:322 John Taylor: "Thus John the Baptist appeared, and laying his hands upon Joseph Smith…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 23:331 Wilford Woodruff: "Our forefathers are looking to us to attend to this work. They are…" (mrm.org/baptism-for-the-dead-quotes)
- JD 23:336 John Taylor: "He needed the devil and a great many of those who do his bidding just…" (archive.utlm.org/onlinebooks/curseofcain_part2.htm, mrm.org/lds-citations-blacks +1)
- JD 23:342 Lorenzo Snow: "God intends to make us saviors not only of many that now dwell on the…" (mrm.org/quotes-lorenzo-snow)
- JD 23:343 Charles W. Penrose: "The God whom the “Christians” worship is a being of their own…" (mrm.org/god-quotes)
- JD 24:66 Erastus Snow: "“And now, verily I say unto you concerning the laws of the land, it is…" (en.wikipedia.org/wiki/Danites)
- JD 24:66 Erastus Snow: "“And as pertaining to the law of man, whatsoever is more or less than…" (en.wikipedia.org/wiki/Danites)
- JD 24:164 Erastus Snow: "And in the same connection the Lord said: “For if I will, saith the…" (mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes)
- JD 24:185 George Q. Cannon: "You look in vain for those features that distinguished it, and that…" (mrm.org/christianity-quotes)
- JD 24:192 Joseph F. Smith: "If any man in that position should become unfaithful, God would remove…" (mrm.org/official-mormon-doctrine)
- JD 24:229 John Taylor: "“Verily, thus saith the Lord unto you my servant Joseph, that inasmuch…" (mrm.org/polygamy-quotes)
- JD 24:232 John Taylor: "And in another place it says, “they shall be destroyed in the flesh,…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 24:264 John Taylor: "Who was Joseph Smith, the Prophet of God, raised up in these last days?…" (mrm.org/joseph-smith-quotes)
- JD 24:269 John Taylor: "“And again, as pertaining to the law of the priesthood—if any man…" (mrm.org/polygamy-quotes)
- JD 25:120 George Q. Cannon: "“But thus saith the Lord God: O fools, they shall have a Bible; and it…" (mrm.org/bible-quotes)
- JD 25:120 George Q. Cannon: "“Thou fool, that shall say: A Bible, we have got a Bible, and we need…" (mrm.org/bible-quotes)
- JD 25:120 George Q. Cannon: "“Wherefore, because that ye have a Bible ye need not suppose that it…" (mrm.org/bible-quotes)
- JD 25:157 George Q. Cannon: "I was answered that I must join none of them, for they were all wrong;…" (en.wikipedia.org/wiki/Mormonism_and_Christianity)
- JD 25:157 George Q. Cannon: "“That by him, and through him, and of him the worlds are and were…" (en.wikipedia.org/wiki/Mormon_cosmology)
- JD 25:162 John Taylor: "There are certain things that men may commit according to the…" (en.wikipedia.org/wiki/Blood_atonement)
- JD 25:173 George Q. Cannon: "“Behold, the time has fully come, which was spoken of by the mouth of…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 25:177 John Taylor: "Because there was no Priesthood on the earth; there was nobody who was…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 25:179 John Taylor: "“The heavens were again opened unto us; and Moses appeared before us,…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 25:180 John Taylor: "“After this, Elias appeared, and committed the dispensation of the…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 25:181 John Taylor: "“Behold, the time has fully come, which was spoken of by the mouth of…" (en.wikipedia.org/wiki/Priesthood_Latter_Day_Saints)
- JD 25:272 George Q. Cannon: "“Nevertheless, thine enemy is in thine hands; and if thou rewardest him…" (en.wikipedia.org/wiki/Danites)
- JD 25:291 George Q. Cannon: "Referring to the words of the Psalmist, where he said: “Ye are gods;…" (mrm.org/becoming-like-god, mrm.org/god-quotes)
- JD 25:306 John Taylor: "It is a fearful thing to fall into the hands of the living God—a…" (mrm.org/mormon-rebels-and-eternal-punishment)
- JD 25:368 George Q. Cannon: "What I mean by this is: if a man apostatizes and breaks covenants and…" (mrm.org/marriage-quotes)
- JD 26:19 Charles W. Penrose: "In the opening book of the Bible, in the very first chapter of that…" (mrm.org/becoming-like-god)
- JD 26:23 Charles W. Penrose: "But if He is an organized Being, there must have been a time when that…" (mrm.org/regress)
- JD 26:24 Charles W. Penrose: "He is the perfect embodiment and expression of the eternal principles…" (mrm.org/regress)
- JD 26:29 Charles W. Penrose: "“To him that overcometh will I grant to sit with me in my throne, even…" (mrm.org/becoming-like-god)
- JD 26:54 George Teasdale: "It is our duty to walk in the light, even as the beloved Apostle said:…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- JD 26:214 Erastus Snow: "“In the heavens are parents single? No; the thought makes reason stare!…" (en.wikipedia.org/wiki/Heavenly_Mother_Mormonism)
- JD 26:305 Moses Thatcher: "There is a spirit in man and the inspiration of the Almighty giveth it…" (mrm.org/godhood-quotes)
- JD 26:341 Franklin D. Richards: "This was the obligation that was laid upon the Prophet Joseph, and…" (mrm.org/polygamy-quotes)
- JD 26:350 John Taylor: "“And now, verily I say unto you concerning the laws of the land, it is…" (en.wikipedia.org/wiki/Danites)
- JD 26:360 John Taylor: "And so He will bless all men who seek unto Him, for as many as are led…" (mrm.org/becoming-like-god)

## Near matches (not used)

- JD 1:39 Brigham Young: "His scrutinizing eye will not suffer a hair of your head to…" | unmatched fragment(s): the lord almighty is in the midst of all his creatures that are scattered abroad | mrm.org/our-father-adam
- JD 1:122 Orson Hyde: "It says, “Him that overcometh will I make a pillar in the…" | unmatched fragment(s): that is he shall have exaltation and godhood as deity now is he shall become he | mrm.org/godhood-quotes
- JD 1:300 Parley P. Pratt: "Suppose that some persons hearken and repent, and he should…" | unmatched fragment(s): without that divine priesthood no man could receive or would receive a remission | mrm.org/priesthood-quotes
- JD 1:302 Parley P. Pratt: "Third, that all those that hear them, believe their words,…" | unmatched fragment(s): without that divine priesthood no man could receive or would receive a remission | mrm.org/priesthood-quotes
- JD 1:312 Brigham Young: "If brother Brigham and I shall take a wrong track, and be…" | mrm_org_discourses_brigham_you: unmatched fragment(s): if brother brigham shall take a wrong track and be shut out of the kingdom of he | mrm.org/discourses-brigham-young-quotes
- JD 1:352 Brigham Young: "You hear some of them preach and teach that which I never…" | mrm_org_discourses_brigham_you: unmatched fragment(s): you hear some of them preach and teach that which i never taught you hear them p | mrm.org/discourses-brigham-young-quotes
- JD 1:352 Brigham Young: "Such a doctrine never en- tered into my heart; but you hear…" | mrm_org_discourses_brigham_you: unmatched fragment(s): you hear some of them preach and teach that which i never taught you hear them p | mrm.org/discourses-brigham-young-quotes
- JD 2:81 Orson Hyde: "“He was oppressed, and he was afflicted, yet he opened not…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): during his short life joseph was frequently harassed by false legal charges but | joseph's… | mrm.org/joseph-smith-quotes
- JD 3:83 Brigham Young: "These are they whose bodies are celestial, whose glory is…" | unmatched fragment(s): the celestial glory there are some who have striven to obey all the divine comma | mrm.org/exaltation-quotes
- JD 3:84 Brigham Young: "They who dwell in his presence are the church of the…" | mrm_org_eternal_progression_qu: unmatched fragment(s): they who dwell in his presence are the church of the firstborn and they see as t | mrm.org/eternal-progression-quotes
- JD 3:266 Brigham Young: "Some of these my brethren know what my feelings were at the…" | unmatched fragment(s): his first recorded plural marriage in nauvoo was to louisa beaman it was perform | mrm.org/polygamy-quotes
- JD 3:320 Brigham Young: "“Mormonism” has done everything for me that ever has been…" | mrm_org_discourses_brigham_you: unmatched fragment(s): mormonism has done everything for me that ever has been done for me on the earth | mrm.org/discourses-brigham-young-quotes
- JD 3:369 Brigham Young: "The devil with one-third part of the spirits of our…" | mrm_org_discourses_brigham_you: unmatched fragment(s): the devil with one third part of the spirits of our father's kingdom got here be | mrm.org/discourses-brigham-young-quotes
- JD 3:370 Brigham Young: "They can see us, but we cannot see them unless our eyes…" | mrm_org_discourses_brigham_you: unmatched fragment(s): father smith and carlos and brother partridge yes and every other good saint are | mrm.org/discourses-brigham-young-quotes
- JD 4:56 Brigham Young: "I have told you many times that there are multitudes of…" | mrm_org_discourses_brigham_you: unmatched fragment(s): birth control there are multitudes of pure and holy spirits waiting to take tabe | mrm.org/discourses-brigham-young-quotes
- JD 4:77 Brigham Young: "But you may go through all the sectarian world, and you…" | unmatched fragment(s): i have many a time in this stand dared the world to produce as mean devils as we | mrm.org/priesthood-quotes
- JD 4:168 Heber C. Kimball: "Greater love hath no man than this, that a man lay down his…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): joseph smith's last great act here upon the earth was one of selflessness he cro | and sprang… | mrm.org/joseph-smith-quotes
- JD 4:176 Heber C. Kimball: "For behold, this life is the time for men to prepare to…" | unmatched fragment(s): no soul is justified in postponing his efforts to repent because of this assuran | mrm.org/repentance-quotes
- JD 5:291 Erastus Snow: "Have any of you been there? You will remember that you…" | unmatched fragment(s): do you uphold your husband before god as your lord what my husband to be my lord | mrm.org/marriage-quotes
- JD 5:323 Lorenzo Snow: "You, brethren, that have been baptized for the remission of…" | unmatched fragment(s): eternal life is a higher state than immortality alone and means to live forever | eternal life is exaltation into the type and… | mrm.org/exaltation-quotes
- JD 5:329 Brigham Young: "There is no clash in the principles revealed in the Bible,…" | mrm_org_discourses_brigham_you: unmatched fragment(s): there is no clash in the principles revealed in the bible the book of mormon and | mrm.org/discourses-brigham-young-quotes
- JD 6:3 Joseph Smith: "We have imagined and supposed that God was God from all…" | unmatched fragment(s): we have imagined and supposed that god was god from all eternity i will refute t | mrm.org/god-quotes
- JD 6:3 Joseph Smith: "Jesus, what are you going to do? To lay down my life, as my…" | unmatched fragment(s): kfd 5 1 jesus what are you going to do to lay down my life as my father did jose | responding to those who wanted to argue… | mrm.org/god-never-sinned
- JD 6:7 Joseph Smith: "This is good doctrine. It tastes good. I can taste the…" | unmatched fragment(s): this is good doctrine it tastes good i can taste the principles of eternal life | mrm.org/kfd
- JD 6:7 Joseph Smith: "The greatest responsibility in this world that God has laid…" | mrm_org_baptism_for_the_dead_q: unmatched fragment(s): but greater than all this so far as our individual responsibilities are concerne | mrm.org/baptism-for-the-dead-quotes
- JD 6:9 Joseph Smith: "He gets the spirit of the Devil—the same spirit that they…" | unmatched fragment(s): after a man has sinned the sin against the holy spirit there is no repentance fo | mrm.org/kfd
- JD 6:95 Brigham Young: "But while he was tabernacling in the flesh, he was more or…" | unmatched fragment(s): we believe we have a correct idea of the character of the son from the writings | mrm.org/jesus-quotes
- JD 6:155 Orson Hyde: "He has laid down his life for his brethren; and greater…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): joseph smith's last great act here upon the earth was one of selflessness he cro | and sprang… | mrm.org/joseph-smith-quotes
- JD 6:229 Joseph Young: "Now, brethren, this is a consolation to us all. Believe in…" | unmatched fragment(s): now brethren this is a consolation to us all believe in god believe in jesus and | mrm.org/salvation-quotes
- JD 6:237 Joseph Smith: "The Priesthood was first given to Adam. He obtained the…" | unmatched fragment(s): the priesthood was first given to adam he obtained the first presidency and held | mrm.org/priesthood-quotes
- JD 6:237 Joseph Smith: "20, 26, 28. He had dominion given him over every living…" | unmatched fragment(s): the priesthood was first given to adam he obtained the first presidency and held | mrm.org/priesthood-quotes
- JD 6:237 Joseph Smith: "Daniel vii. speaks of the Ancient of Days. He means the…" | unmatched fragment(s): daniel in his seventh chapter speaks of the ancient of days he means the oldest | mrm.org/adam-god
- JD 7:15 Brigham Young: "Will the Constitution be destroyed? No: it will be held…" | mrm_org_discourses_brigham_you: unmatched fragment(s): will the constitution be destroyed no it will be held inviolate by this people a | mrm.org/discourses-brigham-young-quotes
- JD 7:18 Heber C. Kimball: "We are the people of God; we are the Church of Jesus Christ…" | unmatched fragment(s): eternal life is a higher state than immortality alone and means to live forever | eternal life is exaltation into the type and… | mrm.org/exaltation-quotes
- JD 7:74 Orson Pratt: "“Behold, I will send you Elijah the prophet before the…" | mrm_org_baptism_for_the_dead_q: unmatched fragment(s): and again in connection with this quotation i will give you a quotation from one | mrm.org/baptism-for-the-dead-quotes
- JD 7:76 Orson Pratt: "“Behold, I will send you Elijah the prophet before the…" | mrm_org_baptism_for_the_dead_q: unmatched fragment(s): and again in connection with this quotation i will give you a quotation from one | mrm.org/baptism-for-the-dead-quotes
- JD 7:83 Orson Pratt: "He says—Having authority given me in the name of Jesus…" | unmatched fragment(s): without that divine priesthood no man could receive or would receive a remission | mrm.org/priesthood-quotes
- JD 7:176 Orson Pratt: "I saw him translating, by inspiration, the Old and New…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): he studied hebrew and egyptian but never claimed fluency in ancient languages ev | mrm.org/joseph-smith-quotes
- JD 7:289 Brigham Young: "From the day that the Priesthood was taken from the earth…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): joseph smith holds the keys of this last dispensation and is now engaged behind | mrm.org/joseph-smith-quotes
- JD 7:328 Heber C. Kimball: "“Greater love hath no man than this, that a man lay down…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): joseph smith's last great act here upon the earth was one of selflessness he cro | and sprang… | mrm.org/joseph-smith-quotes
- JD 7:332 Brigham Young: "If a person is baptized for the remission of sins, and dies…" | mrm_org_discourses_brigham_you: unmatched fragment(s): if a person is baptized for the remission of sins and dies a short time thereaft | mrm.org/discourses-brigham-young-quotes
- JD 7:373 Orson Pratt: "Wherefore, meaning the church, thou shalt give heed unto…" | unmatched fragment(s): wherefore meaning the church thou shalt give heed unto all his words and command | mrm.org/authority-quotes, mrm.org/pinning-down-mormon-doctrine
- JD 8:35 Brigham Young: "The telestial and terrestrial are also spoken of; and how…" | mrm_org_discourses_brigham_you: unmatched fragment(s): the celestial kingdom the celestial is the highest of all the telestial and terr | mrm.org/discourses-brigham-young-quotes
- JD 8:61 Brigham Young: "Some of our old traditions teach us that a man guilty of…" | mrm_org_discourses_brigham_you: unmatched fragment(s): some of our old traditions teach us that a man guilty of atrocious and murderous | mrm.org/discourses-brigham-young-quotes
- JD 8:80 Brigham Young: "It draws forth the mind, and expands the understanding of…" | mrm_org_discourses_brigham_you: unmatched fragment(s): the organized universe the creations of god the worlds that are and the world th | mrm.org/discourses-brigham-young-quotes
- JD 8:152 Brigham Young: "But behold, and lo, we saw the glory and the inhabitants of…" | mrm_org_eternal_progression_qu: unmatched fragment(s): it has been asked if it is possible for one who inherits the telestial glory to | mrm.org/eternal-progression-quotes
- JD 8:210 Heber C. Kimball: "He said, “Go ye therefore, and teach all nations, baptizing…" | unmatched fragment(s): without that divine priesthood no man could receive or would receive a remission | mrm.org/priesthood-quotes
- JD 8:244 Heber C. Kimball: "If I should preach the Gospel as Jesus did when he said,…" | unmatched fragment(s): without that divine priesthood no man could receive or would receive a remission | mrm.org/priesthood-quotes
- JD 8:245 Heber C. Kimball: "Go ye, therefore, and teach all nations, baptizing them in…" | unmatched fragment(s): without that divine priesthood no man could receive or would receive a remission | mrm.org/priesthood-quotes
- JD 8:339 Brigham Young: "Some of you may ask, “Is there a single ordinance to be…" | mrm_org_discourses_brigham_you: unmatched fragment(s): some of you may ask is there a single ordinance to be dispensed with is there on | mrm.org/discourses-brigham-young-quotes
- JD 9:76 Heber C. Kimball: "For as the body without the spirit is dead, so faith…" | unmatched fragment(s): as a young missionary i countered this view of grace by quoting james 2 14 26 wh | whereupon my contacts often opened their… | mrm.org/grace-quotes
- JD 9:88 Brigham Young: "No. And we ask, Could Joseph Smith or the First Presidency…" | unmatched fragment(s): suppose that sidney rigdon and frederick g williams had been taken away or had a | mrm.org/authority-quotes, mrm.org/priesthood-quotes
- JD 9:317 Brigham Young: "When we return to build up the waste places of Zion, then…" | unmatched fragment(s): that is he shall have exaltation and godhood as deity now is he shall become he | mrm.org/godhood-quotes
- JD 9:322 Brigham Young: "That empire was founded on the banks of the Tiber by…" | unmatched fragment(s): monogamy or restrictions by law to one wife is no part of the economy of heaven | mrm.org/marriage-quotes, mrm.org/polygamy-quotes
- JD 10:5 Brigham Young: "There never was a time when man did not exist, and there…" | mrm_org_discourses_brigham_you: unmatched fragment(s): there never was a time when man did not exist and there never will be a time whe | mrm.org/discourses-brigham-young-quotes
- JD 10:131 John Taylor: "In my Father's house are many mansions: I go to prepare a…" | unmatched fragment(s): that where i am there ye may be also | mrm.org/salvation-quotes
- JD 11:221 John Taylor: "It was a revelation given unto Joseph Smith from God, and…" | unmatched fragment(s): now in relation to the position that we occupy concerning plurality or as it is | mrm.org/polygamy-quotes
- JD 11:221 John Taylor: "What are the covenants we enter into, and why is it that…" | unmatched fragment(s): now in relation to the position that we occupy concerning plurality or as it is | mrm.org/polygamy-quotes
- JD 11:262 Brigham Young: "I expect to see the day when the Elders of Israel will…" | mrm_org_discourses_brigham_you: unmatched fragment(s): i expect to see the day when the elders of israel will protect and sustain civil | mrm.org/discourses-brigham-young-quotes
- JD 11:273 Brigham Young: "And the glory which thou gavest me I have given them; that…" | unmatched fragment(s): that they all might be one as thou father art in me and i in thee that they may | i in them thou in me that they may be made… | mrm.org/regress
- JD 11:346 John Taylor: "Jesus, when about to leave his disciples, seemed to think…" | unmatched fragment(s): i in them thou in me that they may be made perfect in one that the world may kno | mrm.org/regress
- JD 11:375 Brigham Young: "“Mormonism,” so-called, embraces every principle pertaining…" | mrm_org_discourses_brigham_you: unmatched fragment(s): mormonism so called embraces every principle pertaining to life and salvation fo | mrm.org/discourses-brigham-young-quotes
- JD 11:375 Brigham Young: "“Mormonism” includes all truth. There is no truth but what…" | mrm_org_discourses_brigham_you: unmatched fragment(s): mormonism so called embraces every principle pertaining to life and salvation fo | mrm.org/discourses-brigham-young-quotes
- JD 12:69 Brigham Young: "This character whom we serve is God, the God and Father of…" | unmatched fragment(s): you will not dispute the words of the apostle that he is actually the god and fa | does this unlock to your understandings how… | mrm.org/regress
- JD 12:100 Brigham Young: "It is written, “The Son can do nothing of himself, but what…" | unmatched fragment(s): kfd 5 1 jesus what are you going to do to lay down my life as my father did jose | responding to those who wanted to argue… | mrm.org/god-never-sinned, mrm.org/god-quotes
- JD 13:225 John Taylor: "What does the Christian world know about God? Nothing; yet…" | mrm_org_christianity_quotes.ht: unmatched fragment(s): what does the christian world know about god nothing yet these very men assume t | mrm.org/christianity-quotes
- JD 13:335 Brigham Young: "I want to say to my friends that we believe in all good. If…" | mrm_org_discourses_brigham_you: unmatched fragment(s): i want to say to my friends that we believe in all good if you can find truth in | mrm.org/discourses-brigham-young-quotes
- JD 14:71 Brigham Young: "But the fact exists that the Father, the Divine Father,…" | unmatched fragment(s): you will not dispute the words of the apostle that he is actually the god and fa | does this unlock to your understandings how… | mrm.org/regress
- JD 14:89 Brigham Young: "The law of tithing is an eternal law. The Lord Almighty…" | mrm_org_discourses_brigham_you: unmatched fragment(s): the law of tithing is an eternal law the lord almighty never had his kingdom on | mrm.org/discourses-brigham-young-quotes
- JD 14:89 Brigham Young: "This law is in the Priesthood, but we do not want any to…" | mrm_org_discourses_brigham_you: unmatched fragment(s): the law of tithing is an eternal law the lord almighty never had his kingdom on | mrm.org/discourses-brigham-young-quotes
- JD 14:135 Brigham Young: "It may not all have been translated aright, and many…" | mrm_org_discourses_brigham_you: unmatched fragment(s): the bible is true it may not all have been translated aright and may precious th | mrm.org/discourses-brigham-young-quotes
- JD 14:196 Brigham Young: "But, as I was saying, you may have professing Christians…" | mrm_org_christianity_quotes.ht: unmatched fragment(s): if you should have visits here from those professing to be christians and they i | mrm.org/christianity-quotes
- JD 14:203 Brigham Young: "Well, now, examine the character of the Savior, and examine…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): well now examine the character of the savior and examine the characters of those | mrm.org/joseph-smith-quotes
- JD 14:226 Brigham Young: "No, sir, take the Bible just as it reads; and if it be…" | mrm_org_discourses_brigham_you: unmatched fragment(s): take the bible just as it reads and if it be translated incorrectly and there is | mrm.org/discourses-brigham-young-quotes
- JD 14:227 Brigham Young: "If I understood Greek and Hebrew as some may profess to do,…" | mrm_org_discourses_brigham_you: unmatched fragment(s): take the bible just as it reads and if it be translated incorrectly and there is | mrm.org/discourses-brigham-young-quotes
- JD 14:243 Orson Pratt: "You begin to understand what is meant by that passage in…" | unmatched fragment(s): the house of the lord is a house of order and not a house of confusion and that | mrm.org/marriage-quotes
- JD 14:272 Orson Pratt: "It is written here in this book which you and I have…" | unmatched fragment(s): he has given us in another revelation the formula by which we can prepare oursel | simple isn't it but listen again all you… | mrm.org/obedience-quotes
- JD 14:302 Lorenzo Snow: "There is the nature of deity in the composition of our…" | mrm_org_quotes_lorenzo_snow.ht: unmatched fragment(s): our spirit birth gave us godlike capabilities we were born in the image of god o | mrm.org/quotes-lorenzo-snow
- JD 15:137 Brigham Young: "We cannot receive, while in the flesh, the keys to form and…" | mrm_org_discourses_brigham_you: unmatched fragment(s): we cannot receive while in the flesh the keys to form and fashion kingdoms and t | mrm.org/discourses-brigham-young-quotes, mrm.org/godhood-quotes
- JD 15:247 Orson Pratt: "They said to him, “Master, who did sin, this man or his…" | mrm_org_lds_citations_blacks.h: unmatched fragment(s): there is no truth more plainly taught in the gospel than that our condition in t | is it not… | mrm.org/lds-citations-blacks, mrm.org/why-priesthood-ban
- JD 16:55 Orson Pratt: "On the 24th page, speaking of the coming forth of these…" | unmatched fragment(s): the bible that went forth to the gentile nations in the early days of the christ | thereafter the many plain and precious… | mrm.org/bible-quotes
- JD 16:161 Brigham Young: "I am here to give this people, called Latter-day Saints,…" | unmatched fragment(s): i am here to give this people called latter day saints counsel to direct them in | mrm.org/authority-quotes
- JD 16:166 Brigham Young: "This doctrine of baptism for the dead is a great doctrine,…" | mrm_org_baptism_for_the_dead_q: unmatched fragment(s): this doctrine of baptism for the dead is a great doctrine one of the most glorio | mrm.org/baptism-for-the-dead-quotes
- JD 16:183 Orson Pratt: "“Father, I pray not for these alone”—meaning the Twelve…" | unmatched fragment(s): i in them thou in me that they may be made perfect in one that the world may kno | mrm.org/regress
- JD 16:188 Brigham Young: "Well, now, the wife is not a blood relation, consequently…" | mrm_org_discourses_brigham_you: unmatched fragment(s): for instance a man and his wife come into the church he says my father and mothe | mrm.org/discourses-brigham-young-quotes
- JD 16:339 Orson Pratt: "Yea, Joseph truly said: Thus saith the Lord unto me: A…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): the book of mormon preserves a prophecy of joseph of egypt | wherein the lord promised joseph… | mrm.org/joseph-smith-quotes
- JD 16:340 Orson Pratt: "Behold, I am sure of the fulfilling of this promise; And…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): the book of mormon preserves a prophecy of joseph of egypt | wherein the lord promised joseph… | mrm.org/joseph-smith-quotes
- JD 17:58 George A. Smith: "“Behold, I will send you Elijah the Prophet before the…" | mrm_org_baptism_for_the_dead_q: unmatched fragment(s): and again in connection with this quotation i will give you a quotation from one | mrm.org/baptism-for-the-dead-quotes
- JD 17:60 George A. Smith: "We believe on the Lord Jesus Christ; we believe in the…" | unmatched fragment(s): eternal life is a higher state than immortality alone and means to live forever | eternal life is exaltation into the type and… | mrm.org/exaltation-quotes
- JD 17:152 Orson Pratt: "I have heard that some of them, perhaps through a want of…" | unmatched fragment(s): now i want to say a few words to our young people who dwell in different part of | mrm.org/marriage-quotes
- JD 17:194 Wilford Woodruff: "Truth is what we are after, and we are not afraid of the…" | mrm_org_wilford_woodruff_quote: unmatched fragment(s): truth is what we are after truth is what we are after and we are not afraid of t | mrm.org/wilford-woodruff-quotes
- JD 17:224 Orson Pratt: "I did hope there was more intelligence among the Latter-day…" | unmatched fragment(s): a brother or a sister say i am a latter day saint but i do not believe in polyga | mrm.org/polygamy-quotes
- JD 17:245 Wilford Woodruff: "Any man who undertakes to serve God has to round up his…" | mrm_org_wilford_woodruff_quote: unmatched fragment(s): it is impossible however for the saints of god to inherit a celestial kingdom wi | mrm.org/wilford-woodruff-quotes
- JD 18:51 Orson Pratt: "Servants to whom? Those that are worthy to receive a…" | unmatched fragment(s): such never having been married for eternity in this world could rise no higher t | mrm.org/marriage-quotes
- JD 18:188 Wilford Woodruff: "Ezekiel says that in the last days the stick of Joseph in…" | unmatched fragment(s): these two records were also to be made use of in order to preach the fulness of | mrm.org/bible-quotes
- JD 18:291 Orson Pratt: "And his disciples asked him, saying, Master, who did sin,…" | mrm_org_lds_citations_blacks.h: unmatched fragment(s): there is no truth more plainly taught in the gospel than that our condition in t | is it not… | mrm.org/lds-citations-blacks, mrm.org/why-priesthood-ban
- JD 18:291 Orson Pratt: "To show yet more clearly that the principle of man's…" | unmatched fragment(s): given what we know about the true nature of both creation and procreation in our | we are reminded however that prophets have… | mrm.org/jesus-quotes
- JD 19:48 Brigham Young: "But the God that the Latter-day Saints are worshiping, and…" | unmatched fragment(s): you will not dispute the words of the apostle that he is actually the god and fa | does this unlock to your understandings how… | mrm.org/regress
- JD 19:259 Joseph F. Smith: "The object of our earthly existence is that we may have a…" | unmatched fragment(s): the object of our earthly existence is that we may have a fulness of joy and tha | mrm.org/exaltation-quotes
- JD 19:263 Joseph F. Smith: "Every blessing, privilege, glory, or exaltation is obtained…" | unmatched fragment(s): there is no salvation but in the way god has pointed out there is no hope of eve | and there is no other way by which we may… | mrm.org/obedience-quotes
- JD 19:278 Erastus Snow: "He can impart light, truth, knowledge, power, wisdom,…" | unmatched fragment(s): and that is not robbery yes jesus who found himself in the form of god though it | mrm.org/priesthood-quotes
- JD 20:28 Joseph F. Smith: "When that principle was revealed to the Prophet Joseph…" | unmatched fragment(s): but he did not falter although it was not until an angel of god with a draw swor | mrm.org/polygamy-quotes
- JD 20:188 Lorenzo Snow: "This may be true in part, but the fact still remains that…" | mrm_org_quotes_lorenzo_snow.ht: unmatched fragment(s): we may think that we cannot live up to the perfect law that the work of perfecti | mrm.org/quotes-lorenzo-snow
- JD 20:191 Lorenzo Snow: "This was the exhortation of the Savior to the former-day…" | mrm_org_quotes_lorenzo_snow.ht: unmatched fragment(s): the lord will not require the impossible the lord never has nor will he require | mrm.org/quotes-lorenzo-snow
- JD 21:10 Joseph F. Smith: "And I am, and so was the deceased when living, at the…" | unmatched fragment(s): for this testimony of brother clayton will stand forever though his body moulder | mrm.org/polygamy-quotes
- JD 22:11 John Taylor: "“The natural man receiveth not the things of the Spirit of…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): immersing oneself in persistent doubt fueled by answers from the faithless and t | mrm.org/joseph-smith-quotes
- JD 22:208 Wilford Woodruff: "I believe in that doctrine. Now, I know for myself, that…" | mrm_org_wilford_woodruff_quote: unmatched fragment(s): of course we are required to practice what we preach i believe in that doctrine | mrm.org/wilford-woodruff-quotes
- JD 22:342 Wilford Woodruff: "You may put men in prison and abuse them; you may burn men…" | unmatched fragment(s): principles which have been revealed president wilford woodruff said for the salv | mrm.org/doctrine-quotes, mrm.org/race-and-priesthood
- JD 22:346 Wilford Woodruff: "When Joseph Smith's body was laid in the grave, his spirit,…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): when joseph smith's body was laid in the grave his spirit like unto the son of g | mrm.org/joseph-smith-quotes, mrm.org/wilford-woodruff-quotes
- JD 23:125 Wilford Woodruff: "Adam fell that man might be, and men are that they might…" | unmatched fragment(s): adam fell that man might be and men are that they might have joy and the messiah | mrm.org/our-father-adam
- JD 23:127 Wilford Woodruff: "And what is repentance? The forsaking of sin. The man who…" | unmatched fragment(s): and what is repentance the forsaking of sin the man who repents if he be a swear | mrm.org/repentance-quotes
- JD 23:130 Wilford Woodruff: "All men are saved by and through the blood of Jesus Christ,…" | mrm_org_wilford_woodruff_quote: unmatched fragment(s): all men are saved by and through the blood of jesus christ through obedience to | mrm.org/wilford-woodruff-quotes
- JD 23:173 Joseph F. Smith: "Because the resurrected, righteous man has progressed…" | unmatched fragment(s): the resurrected righteous man has progressed beyond the pre existent or disembod | mrm.org/regress
- JD 23:185 Erastus Snow: "And there is a passage in the Book of Mormon which is a…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): and there is a passage in the book of mormon which is a part of the prophecy of | mrm.org/joseph-smith-quotes
- JD 23:328 Wilford Woodruff: "It is impossible, however, for the Saints of God to inherit…" | mrm_org_wilford_woodruff_quote: unmatched fragment(s): it is impossible however for the saints of god to inherit a celestial kingdom wi | mrm.org/wilford-woodruff-quotes
- JD 23:361 George Q. Cannon: "If we get our salvation we shall have to pass by him; if we…" | unmatched fragment(s): you never heard president young teach any other doctrine he always said that jos | mrm.org/authority-quotes, mrm.org/joseph-smith-quotes
- JD 24:193 Joseph F. Smith: "The moment a man says he will not submit to legally…" | unmatched fragment(s): the moment a man says he will not submit to the legally constituted authority of | mrm.org/authority-quotes, mrm.org/priesthood-quotes
- JD 24:267 John Taylor: "“There was given him dominion, and glory, and a kingdom,…" | unmatched fragment(s): given him dominion and glory and a kingdom that all people nations and languages | mrm.org/our-father-adam
- JD 25:121 George Q. Cannon: "But Joseph, inspired of God, translated the prediction of…" | unmatched fragment(s): strange as it may seem to present day enemies of the truth their very opposition | mrm.org/bible-quotes
- JD 25:162 John Taylor: "But is it not said, says one that all manner of sins and…" | unmatched fragment(s): and again verily i say unto you if a man marry a wife by my word which is my law | mrm.org/godhood-quotes
- JD 25:165 John Taylor: "For the Gods spoken of, are not going to associate with…" | unmatched fragment(s): we enter into obligations here as young men or young women or as old men or old | mrm.org/exaltation-quotes
- JD 25:165 John Taylor: "These eternal principles must be kept, and one principle…" | unmatched fragment(s): these eternal principles must be kept and one principle is that no unclean thing | mrm.org/exaltation-quotes
- JD 25:169 George Q. Cannon: "“While I was thus in the act of calling upon God, I…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): while i was thus in the act of calling upon god i discovered a light appearing i | mrm.org/joseph-smith-quotes
- JD 25:169 George Q. Cannon: "He called me by name, and said unto me that he was a…" | mrm_org_joseph_smith_quotes.ht: unmatched fragment(s): while i was thus in the act of calling upon god i discovered a light appearing i | mrm.org/joseph-smith-quotes
- JD 25:244 Joseph F. Smith: "We should come together for the purpose of being…" | unmatched fragment(s): but the savior's grace can do much more for us as members of the church of jesus | mrm.org/exaltation-quotes
- JD 25:337 Charles W. Penrose: "“And I give unto you a commandment, that ye shall forsake…" | unmatched fragment(s): no mere record alone will assure me my exaltation in the celestial kingdom that | mrm.org/exaltation-quotes
- JD 26:25 Charles W. Penrose: "“The Son can do nothing of himself, but what he seeth the…" | unmatched fragment(s): kfd 5 1 jesus what are you going to do to lay down my life as my father did jose | responding to those who wanted to argue… | mrm.org/god-never-sinned, mrm.org/god-quotes
- JD 26:108 John Taylor: "Here is the turning of the hearts of the fathers to the…" | mrm_org_baptism_for_the_dead_q: unmatched fragment(s): the scriptures make it very clear that elijah was to come to someone why not the | mrm.org/baptism-for-the-dead-quotes

## Cited but not found at the cited location (not used)

Many mrm.org quote pages cite page numbers from the compilation *Discourses of Brigham Young* or use editorial text; those wordings do not occur in our text at the cited JD page.

- cited JD 23:130: "The first quorum of apostles were all put to death, except John, and we are…" → found exactly elsewhere: **https://jod.mrm.org/13/318/** (Wilford Woodruff)
- cited JD 11:271 "Whosoever confesseth that Joseph Smith was sent of God…" → exact at https://jod.mrm.org/8/176/ (JD 8:176, Brigham Young)
- cited JD 3:360 "Be careful, O, ye mothers in Israel…" → exact at https://jod.mrm.org/12/97/ (JD 12:97, Brigham Young)
- cited JD 3:221: "THE NECESSITY OF THE SAINTS LIVING UP TO THE LIGHT WHICH HAS BEEN GIVEN THEM" (en.wikipedia.org/wiki/Mormon_Reformation)
- cited JD 13:214: "This is the land of Zion—this is the continent whereon the Lord has commenced his work…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 1:239: "The Bible —In the Bible are the words of life and salvation. JOD 13:214" (mrm.org/discourses-brigham-young-quotes)
- cited JD 14:113: "But I want to know if we agree with the teachings of the Bible, in our belief and…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 17:46: "The Bible is true. It may not all have been translated aright, and may precious things…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 9:157: "Some of you may ask, 'Is there a single ordinance to be dispensed with? Is there one of…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 11:286: "In the beginning, after this earth was prepared for man, the Lord commenced his work upon…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 16:75: "Personality and Fatherhood of God –Some would have us believe that God is present…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 4:268: "Eternal Increase —Whenever we get into the Kingdom of Heaven, where God and Christ dwell,…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 13:216: "The Apostles and Prophets, when speaking of our relationship to God, say that we are…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 7:145: "When a man begins to find fault, inquiring in regard to this, that, and the other,…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 8:162: "But 'Mormonism' has opened up light. Removing the curtain from the broad sunshine, it has…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 11:117: "The spirits of devils have been deprived of bodies, and that constitutes their curse,…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 4:56: "You may remember it and lay it to heart, and if you wish, write it in your journals that…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 13:215: "To explain how much confidence we should have in God, were I using a term to suit myself,…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 14:160: "I want to say to my friends that we believe in all good. If you can find truth in heaven,…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 8:59: "Our doctrine and practice is, and I have made it mine through life—to receive truth no…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 13:3: "The Word of Wisdom —This Word of Wisdom prohibits the use of hot drinks and tobacco. I…" (mrm.org/discourses-brigham-young-quotes)
- cited JD 27:659: "We do not wish incorrect and unsound doctrines to be handed down to posterity under the…" (mrm.org/journal-of-discourses)
- cited JD 19:362: "All men are saved by and through the blood of Jesus Christ, through obedience to the…" (mrm.org/wilford-woodruff-quotes)
- cited JD 17:194: "Of course, we are required to practice what we preach. I believe in that doctrine. Now, I…" (mrm.org/wilford-woodruff-quotes)
- cited JD 1:113: "He [Adam] is the father of the human family, and presides over the spirits of all men,…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 3:386: "He [Adam] is the father of the human family, and presides over the spirits of all men,…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 1:50: "I tell you, when you see your Father in the Heavens, you will see Adam; when you see your…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 31:267: "Before me I see a house full of Eves. What a crowd of reflections the word Eve is…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 16:530: "I believe in the principle of obedience; and if I am told that Adam is our Father and our…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 2:436: "Friday 9th April 1852. Stormy morning. Attended conference. House much crowded, did not…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 16:483: "Relative to the principles recently revealed, we have not the least difficulty. If Adam's…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 15:801: "The above sentiment appeared in Star No. 48, a little to the surprise of some of its…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 27:698: "and certain articles by Orson Pratt on the Holy Spirit were disowned by the Church. The…" (www.mormonthink.com/QUOTES/adamgod.htm)
- cited JD 5:296: "I [am] opposed to hanging, even if a man kill another, I will shoot him, or cut off his…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- cited JD 1:108: "Suppose you found your brother in bed with your wife, and put a javelin through both of…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
- cited JD 1:135: "Joseph Smith taught that there were certain sins so grievous that man may commit, that…" (www.mormonthink.com/QUOTES/bloodatonement.htm)
