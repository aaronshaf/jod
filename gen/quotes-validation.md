# Journal of Discourses: quote validation report

Quotes commonly cited by evangelical, critic, countercult and encyclopedic sources were compared with the text in this site's database (https://jod.mrm.org/data/). Only quotes whose words match our text exactly are used on the site; the site always shows **our** text verbatim, never the citing source's wording.

## Summary

- Distinct candidate passages found (clusters of citations that point to the same passage): **566**
  - exact: **402** (every quoted word found contiguously in the cited discourse)
  - near: **128** (located in the right discourse, but the source differs in wording, adds or drops words, or splices fragments; listed with differences, **not used**)
  - not found at the cited volume/page: **35** (listed, **not used**); of those, exact elsewhere: **1** (correct citation recorded below)
- Priority quotes in the 366-slot daily rotation: **76** (all exact, 60 discourses). Other slots: automatically picked passages as before.
- Source pages read: mrm.org quote pages (Brigham Young, Joseph Smith, polygamy, God, exaltation, priesthood, authority, etc.), Wikipedia (Adam–God doctrine, Blood atonement, Priesthood, Mormon polygamy, Danites, Mountain Meadows massacre, etc.), UTLM, MormonThink, IRR, FairMormon, gotquestions, CARM (partly paywalled), lifeafter.org.

## Method

- Source pages were reduced to text and compared with every discourse by token n-gram (6-gram) matching after normalizing whitespace, case, quotation marks, dashes and ellipses; bracketed editorial insertions and footnote numbers in sources were treated as breaks, not as words.
- **exact**: each quoted fragment (split at ellipses, brackets and parentheses; up to 12 words of attribution framing trimmed) occurs contiguously in the discourse, same words in the same order.
- **near**: located, but at least one fragment cannot be matched word for word.
- **not found**: no match in the cited volume/page; nearby pages and the whole corpus were checked; a correct citation is recorded when found elsewhere.
- Excerpts are sentence-bounded verbatim substrings of one paragraph of our text (at most about 420 characters; no words altered; `gen/build.js` re-verifies every priority quote against the database at build time and fails the build on any mismatch).
- Citations point at our own page for the discourse (JD volume:start–end pages); `gen/quotes-priority.json` also records the page where the passage occurs.
- Source names are the cited page's address, reconstructed from the saved file names.

## Priority quotes (exact)

Order = interleaved by topic; slots are spread evenly across the 366 days.

| # | JD (page) | Speaker | Text begins | Cited by |
|---|---|---|---|---|
| 1 | 4:259 | Orson Hyde | It will be borne in mind that once on a time, there was a… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy, mit.irr.org/polygamy +1 |
| 2 | 3:247 | Brigham Young | Let me suppose a case. Suppose you found your brother in… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, mrm.org/blood-atonement +1 |
| 3 | 3:93 | Brigham Young | The Lord created you and me for the purpose of becoming… | mrm.org/as-god-or-like-god, mrm.org/becoming-like-god, mrm.org/discourses-brigham-young-quotes +2 |
| 4 | 1:50 | Brigham Young | Now hear it, O inhabitants of the earth, Jew and Gentile,… | en.wikipedia.org/wiki/Adam–God_doctrine, en.wikipedia.org/wiki/Brigham_Young, mit.irr.org/adam-god-doctrine +4 |
| 5 | 2:210 | Orson Hyde | I discover that some of the Eastern papers represent me as… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy, mrm.org/jesus-quotes |
| 6 | 10:110 | Brigham Young | Shall I tell you the law of God in regard to the African… | archive.utlm.org/onlinebooks/changech20.htm, archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism +6 |
| 7 | 3:247 | Brigham Young | There is not a man or woman, who violates the covenants… | archive.utlm.org/onlinebooks/changech20.htm, carm.org/interesting-quotes-from-brigham-young-the-second-prophet-of-the-mormon-church, en.wikipedia.org/wiki/Blood_atonement +2 |
| 8 | 6:3 | Joseph Smith | If the veil was rent today, and the great God who holds… | mrm.org/eternal-progression-quotes, mrm.org/god-of-mormonism, mrm.org/god-quotes +2 |
| 9 | 1:50 | Brigham Young | He was not begotten by the Holy Ghost. And who is the… | en.wikipedia.org/wiki/Adam–God_doctrine, mrm.org/a-doctrine-god-revealed-to-brigham-young |
| 10 | 2:82 | Orson Hyde | Now there was actually a marriage; and if Jesus was not the… | mrm.org/jesus-quotes |
| 11 | 4:51 | Jedediah M. Grant | Brethren and sisters, we want you to repent and forsake… | archive.utlm.org/onlinebooks/changech20.htm, mrm.org/blood-atonement, utlm.org/brigham-youngs-wives- +2 |
| 12 | 3:266 | Brigham Young | Now if any of you will deny the plurality of wives, and… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy, mit.irr.org/polygamy |
| 13 | 6:4 | Joseph Smith | Here, then, is eternal life—to know the only wise and true… | mrm.org/before-god-was-god, mrm.org/god-of-mormonism, mrm.org/godhood-quotes |
| 14 | 13:264 | Brigham Young | I say now, when they are copied and approved by me they are… | carm.org/interesting-quotes-from-brigham-young-the-second-prophet-of-the-mormon-church, en.wikipedia.org/wiki/Journal_of_Discourses, mrm.org/authority-quotes +1 |
| 15 | 1:51 | Brigham Young | What a learned idea! Jesus, our elder brother, was begotten… | en.wikipedia.org/wiki/Adam–God_doctrine, mit.irr.org/adam-god-doctrine, mrm.org/a-doctrine-god-revealed-to-brigham-young +3 |
| 16 | 5:203 | Heber C. Kimball | You might as well deny “Mormonism,” and turn away from it,… | mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 17 | 7:290 | Brigham Young | That curse will remain upon them, and they never can hold… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, mit.irr.org/brigham-young-on-race-later-comments, mrm.org/lds-citations-blacks +4 |
| 18 | 4:53 | Brigham Young | And furthermore, I know that there are transgressors, who,… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Mormon_Reformation +3 |
| 19 | 6:120 | Wilford Woodruff | If there was a point where man in his progression could not… | mrm.org/eternal-progression-quotes, mrm.org/god-learning, mrm.org/god-quotes +2 |
| 20 | 9:322 | Brigham Young | Why do we believe in and practice polygamy? Because the… | mrm.org/journalgems, mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 21 | 2:6 | Brigham Young | You believe Adam was made of the dust of this earth. This I… | mit.irr.org/adam-god-doctrine, mrm.org/bible-quotes, www.mormonthink.com/QUOTES/adamgod.htm |
| 22 | 4:53 | Brigham Young | There are sins that men commit for which they cannot… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, mrm.org/blood-atonement +1 |
| 23 | 11:269 | Brigham Young | The only men who become Gods, even the Sons of God, are… | en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 24 | 7:333 | Brigham Young | How many Gods there are, I do not know. But there never was… | mrm.org/discourses-brigham-young-quotes, mrm.org/god-quotes, mrm.org/kfd +1 |
| 25 | 11:269 | Brigham Young | I heard the revelation on polygamy, and I believed it with… | mrm.org/polygamy-quotes |
| 26 | 4:220 | Brigham Young | I have known a great many men who have left this Church for… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Mountain_Meadows_massacre +2 |
| 27 | 3:319 | Brigham Young | He was the person who brought the animals and the seeds… | www.mormonthink.com/QUOTES/adamgod.htm |
| 28 | 11:272 | Brigham Young | It comes in consequence of their fathers rejecting the… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism, mit.irr.org/brigham-young-on-race-later-comments +2 |
| 29 | 18:259 | Brigham Young | When they receive their crowns, their dominions, they then… | mrm.org/becoming-like-god, mrm.org/exaltation-speculation, mrm.org/godhood-quotes +1 |
| 30 | 12:97 | Brigham Young | Be careful, O, ye mothers in Israel, and do not teach your… | mrm.org/discourses-brigham-young-quotes, mrm.org/lds-citations-blacks, mrm.org/marriage-quotes |
| 31 | 4:219 | Brigham Young | The time has been in Israel under the law of God, the… | www.mormonthink.com/QUOTES/bloodatonement.htm |
| 32 | 5:331 | Brigham Young | Some have grumbled because I believe our God to be so near… | www.mormonthink.com/QUOTES/adamgod.htm |
| 33 | 4:56 | Brigham Young | This is the reason why the doctrine of plurality of wives… | mrm.org/discourses-brigham-young-quotes, utlm.org/brigham-youngs-wives- |
| 34 | 8:160 | Brigham Young | Intelligent beings are organized to become Gods, even the… | mrm.org/discourses-brigham-young-quotes, mrm.org/godhood-quotes |
| 35 | 4:375 | Heber C. Kimball | I wish they would go this fall: it might relieve us from… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, mrm.org/blood-atonement +1 |
| 36 | 4:209 | Heber C. Kimball | In the spirit world there is an increase of males and… | en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/polygamy-quotes |
| 37 | 7:285 | Brigham Young | Here let me state to all philosophers of every class upon… | www.mormonthink.com/QUOTES/adamgod.htm |
| 38 | 2:143 | Brigham Young | When all the other children of Adam have had the privilege… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Brigham_Young, mrm.org/race-and-the-priesthood |
| 39 | 1:123 | Orson Hyde | Remember that God, our heavenly Father, was perhaps once a… | mrm.org/god-learning, mrm.org/god-quotes, mrm.org/regress |
| 40 | 13:95 | Brigham Young | I have never yet preached a sermon and sent it out to the… | en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses, mrm.org/adam-god |
| 41 | 1:345 | Jedediah M. Grant | He says, “The grand reason why the Gentiles and… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy |
| 42 | 1:108 | Brigham Young | If you want to know what to do with a thief that you may… | archive.utlm.org/onlinebooks/changech20.htm, mrm.org/blood-atonement, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 43 | 26:368 | Lorenzo Snow | As man now is, God once was—even the babe of Bethlehem,… | mrm.org/eternal-progression-quotes, mrm.org/quotes-lorenzo-snow |
| 44 | 1:346 | Jedediah M. Grant | The grand reason of the burst of public sentiment in… | en.wikipedia.org/wiki/Mormon_polygamy, en.wikipedia.org/wiki/Mormonism_and_polygamy |
| 45 | 4:217 | Brigham Young | Whether Adam is the personage that we should consider our… | en.wikipedia.org/wiki/Adam–God_doctrine |
| 46 | 1:83 | Brigham Young | I say, rather than that apostates should flourish here, I… | archive.utlm.org/onlinebooks/changech20.htm, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 47 | 17:225 | Orson Pratt | I want to prophesy that all men and women who oppose the… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, mrm.org/polygamy-quotes |
| 48 | 25:58 | Joseph F. Smith | God designed this in the beginning. We are the children of… | mrm.org/eternal-progression-quotes, mrm.org/god-quotes, mrm.org/regress |
| 49 | 10:250 | Brigham Young | Treat the slaves kindly and let them live, for Ham must be… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, en.wikipedia.org/wiki/Black_people_and_Mormonism |
| 50 | 6:275 | Brigham Young | Yes, an Adam will have to go there, and he cannot do… | en.wikipedia.org/wiki/Adam–God_doctrine |
| 51 | 1:97 | George A. Smith | The principle, the only one that beats and throbs through… | archive.utlm.org/onlinebooks/changech20.htm, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 52 | 17:225 | Orson Pratt | Sisters, you begin to say before your husbands, or husbands… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, mrm.org/polygamy-quotes |
| 53 | 14:71 | Brigham Young | How many earths are there? I observed this morning that you… | mrm.org/eternal-progression-quotes, mrm.org/exaltation, mrm.org/god-never-sinned |
| 54 | 20:29 | Joseph F. Smith | To put this matter more correctly before you, I here… | mit.irr.org/polygamy, mrm.org/polygamy-quotes |
| 55 | 2:186 | Brigham Young | I will tell you how much I love those characters. If they… | www.mormonthink.com/QUOTES/bloodatonement.htm |
| 56 | 4:1 | Heber C. Kimball | I have learned by experience that there is but one God that… | en.wikipedia.org/wiki/Adam–God_doctrine, mrm.org/adam-god, mrm.org/pinning-down-mormon-doctrine +1 |
| 57 | 20:31 | Joseph F. Smith | But if he remain faithful with only the one wife, observing… | mit.irr.org/polygamy, mrm.org/polygamy-quotes |
| 58 | 6:2 | Joseph Smith | My first object is to find out the character of the only… | mrm.org/kfd, mrm.org/regress |
| 59 | 1:73 | Orson Hyde | It would have a tendency to place a terror on those who… | archive.utlm.org/onlinebooks/changech20.htm, www.mormonthink.com/QUOTES/bloodatonement.htm |
| 60 | 14:86 | Brigham Young | They are of the house of Israel; they once had the Gospel… | mit.irr.org/brigham-young-on-race-later-comments, mrm.org/discourses-brigham-young-quotes, mrm.org/lds-citations-blacks |
| 61 | 16:167 | Brigham Young | Now, sisters, do not say, “I do not want a husband when I… | mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 62 | 5:19 | Heber C. Kimball | We must be grafted into the true vine, and continue to… | mrm.org/god-quotes, mrm.org/regress |
| 63 | 17:143 | Brigham Young | We shall go on from one step to another, reaching forth… | mrm.org/becoming-like-god, mrm.org/godhood-quotes |
| 64 | 9:312 | Brigham Young | I have taught for thirty years, and still teach, that he… | carm.org/interesting-quotes-from-brigham-young-the-second-prophet-of-the-mormon-church, en.fairmormon.org/answers/Quote-mining-Journal-of-Discourses |
| 65 | 4:55 | Brigham Young | And my wives have got to do one of two things; either round… | en.wikipedia.org/wiki/Brigham_Young, utlm.org/brigham-youngs-wives- |
| 66 | 6:38 | Heber C. Kimball | But they cannot whore it here; for, gentlemen, if there is… | archive.utlm.org/onlinebooks/changech20.htm |
| 67 | 9:286 | Brigham Young | Brother Kimball quoted a saying of Joseph the Prophet, that… | en.wikipedia.org/wiki/Heavenly_Mother_Mormonism, mrm.org/god-quotes |
| 68 | 20:276 | George Q. Cannon | If plural marriage be divine, as the Latter-day Saints say… | mrm.org/plural-marriage-early-utah, mrm.org/polygamy-quotes |
| 69 | 14:116 | Brigham Young | God never made something out of nothing; it is not in the… | en.wikipedia.org/wiki/Mormon_cosmology, mrm.org/discourses-brigham-young-quotes |
| 70 | 12:30 | Brigham Young | Is there war in our religion? No; neither war nor… | en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Danites, en.wikipedia.org/wiki/Mormon_Reformation |
| 71 | 22:304 | John Taylor | And after the flood we are told that the curse that had… | archive.utlm.org/onlinebooks/curseofcain_part2.htm, mrm.org/lds-citations-blacks, mrm.org/son-of-ham-withholding-the-lds-priesthood +1 |
| 72 | 19:269 | Erastus Snow | “What,” says one, “do you mean we should understand that… | en.wikipedia.org/wiki/Heavenly_Mother_Mormonism |
| 73 | 6:238 | Joseph Smith | This may take place before some of us leave this stage of… | en.wikipedia.org/wiki/Adam–God_doctrine, www.mormonthink.com/QUOTES/adamgod.htm |
| 74 | 5:313 | Lorenzo Snow | Through a continual course of progression, our heavenly… | mrm.org/quotes-lorenzo-snow |
| 75 | 3:226 | Brigham Young | The time is coming when justice will be laid to the line… | archive.utlm.org/onlinebooks/changech20.htm, en.wikipedia.org/wiki/Blood_atonement, en.wikipedia.org/wiki/Mormon_Reformation |
| 76 | 7:299 | Amasa M. Lyman | We may talk of men being redeemed by the efficacy of his… | www.mormonthink.com/QUOTES/bloodatonement.htm |

### Dropped from the priority set

- JD 2:184 Brigham Young "Formerly the rumor was that “they were agoing to tamper…": hyphenation artifact in our extracted text ("breth- ren")
- JD 11:286 Brigham Young "Some men seem as if they could learn so much and no more.…": hyphenation artifact ("pro- gress") and over-long
- JD 4:219 Brigham Young "Now take a person in this congregation who has knowledge…": over-long excerpt (>420 chars) after sentence bounding
- JD 7:290 Brigham Young "The great majority of those who are now before me are the…": not a quote cited for a controversy (context-only passage)
- JD 8:176 Brigham Young "I will now give my scripture—“Whosoever confesseth that…": over-long excerpt (>420 chars)
- JD 5:291 Erastus Snow "Have any of you been there? You will remember that you…": replaced: id pointed to Erastus Snow 5:291 (near), intended quote is Hyde 2:82
- JD 2:345 Orson Pratt, "more Gods than particles" passage: **near** (a source has "million worlds", our text "million of worlds"); excluded under the exact-words rule.
- JD 1:83 Brigham Young (bowie knife): the cited bracketed audience reactions are kept in our text, so only the first sentence is used as the excerpt.

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
