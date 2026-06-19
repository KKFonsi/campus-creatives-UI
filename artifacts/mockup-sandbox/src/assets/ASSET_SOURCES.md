# PUP: Campus Creatives Asset Sources

Accessed: June 19, 2026

This HCI prototype stores all display images locally. It does not hotlink remote images at runtime, does not use AI-generated imagery, and does not represent placeholder images as actual PUP student submissions.

Public-facing disclaimer used in the prototype: Images and artworks in this HCI prototype are local educational demo assets. Ownership remains with the respective creators, source institutions, and rights holders; inclusion does not imply endorsement or transfer of rights.

## Central Asset Map

Prototype image paths are centralized in `src/app/data/demoAssets.ts`. Legacy Replit-compatible paths such as `public/__mockup/images/thumbnail_1.jpg` remain in place so existing screens continue to render without route or component rewrites.

Fallback asset:

| Local filename | Source | Usage note |
| --- | --- | --- |
| `public/__mockup/images/fallback-campus-creatives.svg` | Locally authored maroon/gold SVG placeholder | Local fallback for missing prototype preview assets. |
| `public/images/fallback-campus-creatives.svg` | Copy of local fallback | Public non-mockup fallback copy. |

## Institutional PUP Images

| Local filename | Source page | Original image URL | Source | Usage note / license |
| --- | --- | --- | --- | --- |
| `src/assets/pup/pup-pylon-sta-mesa.jpg` | https://commons.wikimedia.org/wiki/File:PUP_Pylon,_Sta._Mesa,_Manila,_Jan_2024.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons | PUP campus landmark placeholder for campus, event, and work preview cards; use per Commons file license metadata. |
| `src/assets/pup/pup-main-building-sta-mesa.jpg` | https://commons.wikimedia.org/wiki/File:PUP_main_bldg_-_santa_mesa,_manila.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons | PUP Main Building placeholder for institutional and preview cards; use per Commons file license metadata. |
| `src/assets/pup/pup-main-building-wide.jpg` | https://commons.wikimedia.org/wiki/File:PUP_main_bldg_-_santa_mesa,_manila.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1200px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons | Wide cover/banner image for Campus Creatives profile, gallery, event, and official content screens; use per Commons file license metadata. |

## Filipino Artwork / Cultural Preview Images

| Local filename | Source page | Original image URL | Source | Usage note / license |
| --- | --- | --- | --- | --- |
| `src/assets/artworks/filipino/spoliarium-juan-luna.jpg` | https://en.wikipedia.org/wiki/Spoliarium | https://commons.wikimedia.org/wiki/Special:FilePath/Spoliarium.jpg | Wikimedia Commons / Wikipedia image file | Replaces generic work thumbnail placeholders for educational prototype previews; use per linked file metadata. |
| `src/assets/artworks/filipino/una-bulaquena-juan-luna.jpg` | https://en.wikipedia.org/wiki/La_Bulaque%C3%B1a | https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Una_Bulaque%C3%B1a.jpg/250px-Una_Bulaque%C3%B1a.jpg | Wikimedia Commons / Wikipedia image file | Replaces generic portrait/artwork placeholders for educational prototype previews; use per linked file metadata. |

Wikimedia rate-limited several additional candidate downloads during this correction pass. Rather than fabricate sources or retain old Unsplash stock placeholders, remaining runtime thumbnail slots were filled with the verified local PUP campus images above.

Candidate public pages researched but not downloaded because of Wikimedia throttling or thumbnail-size restrictions:

| Candidate artwork | Source page |
| --- | --- |
| `España y Filipinas` by Juan Luna | https://en.wikipedia.org/wiki/Espa%C3%B1a_y_Filipinas |
| `Las Damas Romanas` by Juan Luna | https://en.wikipedia.org/wiki/Las_Damas_Romanas |
| `The Blood Compact` by Juan Luna | https://en.wikipedia.org/wiki/The_Blood_Compact |

## Runtime Image Copies

| Runtime filename | Source local file | Usage |
| --- | --- | --- |
| `public/__mockup/images/thumbnail_1.jpg` | `src/assets/artworks/filipino/spoliarium-juan-luna.jpg` | Student/moderator work cards, review previews, report previews. |
| `public/__mockup/images/thumbnail_2.jpg` | `src/assets/pup/pup-pylon-sta-mesa.jpg` | Student/moderator work cards and comparison previews. |
| `public/__mockup/images/thumbnail_3.jpg` | `src/assets/artworks/filipino/una-bulaquena-juan-luna.jpg` | Student/moderator work cards and review thumbnails. |
| `public/__mockup/images/thumbnail_4.jpg` | `src/assets/pup/pup-main-building-sta-mesa.jpg` | Student/moderator work cards and report previews. |
| `public/__mockup/images/event_1.jpg` | `src/assets/pup/pup-main-building-wide.jpg` | Event, official content, report evidence, and campus cards. |
| `public/__mockup/images/event_2.jpg` | `src/assets/pup/pup-pylon-sta-mesa.jpg` | Event, official content, and campus cards. |
| `public/__mockup/images/event_3.jpg` | `src/assets/pup/pup-main-building-sta-mesa.jpg` | Event, official content, and campus cards. |

The same replacement files are copied to `public/images/thumbnail_*.jpg` and `public/images/event_*.jpg` so both public and generated mockup paths resolve to local assets.

## College Representative Images

The College Directory and college showcase flow use representative PUP campus images rather than unique official photographs for every college. These are mock-only visual placeholders, not official college media.

| Local filename | Source page | Original image URL | Source | Usage note / license |
| --- | --- | --- | --- | --- |
| `src/assets/pup/colleges/caf-pup-main-building.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP Main Building image for CAF discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cadbe-pup-campus-landmark.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons via PUP university page | Representative PUP landmark image for CADBE discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cal-pup-campus-artwork.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CAL discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cba-pup-campus-plaza.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CBA discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/coc-pup-ndc-campus.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP/NDC campus image for COC discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/ccis-pup-main-building.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines_College_of_Computer_and_Information_Sciences | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons plus PUP CCIS reference page | Representative PUP Main Building image for CCIS discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/coed-pup-campus-learning.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for COED discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/ce-pup-engineering-campus.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP Engineering/NDC campus image for CE discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/chk-pup-campus-life.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CHK discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cl-pup-law-campus.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CL discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cpspa-pup-public-service.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CPSPA discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cs-pup-science-campus.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CS discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cssd-pup-community-campus.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CSSD discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/cthtm-pup-hasmin-campus.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for CTHTM discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/itech-pup-technology-campus.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg/900px-PUP_Pylon%2C_Sta._Mesa%2C_Manila%2C_Jan_2024.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for ITECH discovery card; use per Commons file license metadata. |
| `src/assets/pup/colleges/gs-pup-graduate-school.jpg` | https://en.wikipedia.org/wiki/Polytechnic_University_of_the_Philippines | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PUP_main_bldg_-_santa_mesa%2C_manila.jpg/1000px-PUP_main_bldg_-_santa_mesa%2C_manila.jpg | Wikimedia Commons via PUP university page | Representative PUP campus image for GS discovery card; use per Commons file license metadata. |

## Removed Generic Stock Placeholder Set

The previous `src/assets/placeholders/works/*.jpg` files were Unsplash placeholder images. They have been overwritten with local PUP campus images or the documented Filipino artwork files above so Student and Moderator desktop/mobile screens no longer depend on generic stock-like work thumbnails.
