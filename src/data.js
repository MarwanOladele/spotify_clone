const data = {
  tracks: {
    hits: [
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10314010",
          title: "Enter Sandman",
          subtitle: "Metallica",
          share: {
            subject: "Enter Sandman - Metallica",
            text: "I used Shazam to discover Enter Sandman by Metallica.",
            href: "https://www.shazam.com/track/10314010/enter-sandman",
            image:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Enter Sandman by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10314010?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10314010",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            coverarthq:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f2f2f2s:e5e5e5t:c1c1c1q:b7b7b7",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579373079",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/40/64/66/40646668-82fe-e7f4-6e09-1194fb0ced89/mzaf_321916707498501748.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/enter-sandman/579372950?i=579373079&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579373079",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Enter%20Sandman%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Enter+Sandman+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Enter+Sandman%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10314010/enter-sandman",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "66427234",
          title: "Master of Puppets",
          subtitle: "Metallica",
          share: {
            subject: "Master of Puppets - Metallica",
            text: "I used Shazam to discover Master of Puppets by Metallica.",
            href: "https://www.shazam.com/track/66427234/master-of-puppets",
            image:
              "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Master of Puppets by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/66427234?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/66427234",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/400x400cc.jpg",
            coverarthq:
              "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/400x400cc.jpg",
            joecolor: "b:4d362ep:ede0d9s:dfdfe8t:ccbeb6q:c2bdc3",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1275600554",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f9/1e/62/f91e62b2-9ea5-9be1-1a97-d07c14416790/mzaf_11027219462494696980.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/master-of-puppets/1275600311?i=1275600554&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1275600554",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Master%20of%20Puppets%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Master+of+Puppets+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Master+of+Puppets%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/66427234/master-of-puppets",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10314013",
          title: "Nothing Else Matters",
          subtitle: "Metallica",
          share: {
            subject: "Nothing Else Matters - Metallica",
            text: "I used Shazam to discover Nothing Else Matters by Metallica.",
            href: "https://www.shazam.com/track/10314013/nothing-else-matters",
            image:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Nothing Else Matters by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10314013?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10314013",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            coverarthq:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f2f2f2s:e5e5e5t:c1c1c1q:b7b7b7",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579373086",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/08/51/1e/08511e77-f8c4-7aba-4069-437211d2a505/mzaf_3922800193125139869.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/nothing-else-matters/579372950?i=579373086&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579373086",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Nothing%20Else%20Matters%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Nothing+Else+Matters+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Nothing+Else+Matters%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10314013/nothing-else-matters",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "234965",
          title: "For Whom the Bell Tolls (Remastered)",
          subtitle: "Metallica",
          share: {
            subject: "For Whom the Bell Tolls (Remastered) - Metallica",
            text: "I used Shazam to discover For Whom the Bell Tolls (Remastered) by Metallica.",
            href: "https://www.shazam.com/track/234965/for-whom-the-bell-tolls-remastered",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover For Whom the Bell Tolls (Remastered) by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/234965?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/234965",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            joecolor: "b:3f4f98p:e5e9f4s:7ebbeft:c4cae1q:71a5dd",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579149036",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/35/89/a2/3589a2fb-2922-51ef-274d-f0c6e10c4f60/mzaf_17440675038089707494.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/for-whom-the-bell-tolls/579148345?i=579149036&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579149036",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:For%20Whom%20the%20Bell%20Tolls%20%28Remastered%29%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=For+Whom+the+Bell+Tolls+%28Remastered%29+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27For+Whom+the+Bell+Tolls+%28Remastered%29%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/234965/for-whom-the-bell-tolls-remastered",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10104481",
          title: "One",
          subtitle: "Metallica",
          share: {
            subject: "One - Metallica",
            text: "I used Shazam to discover One by Metallica.",
            href: "https://www.shazam.com/track/10104481/one",
            image:
              "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c3/65/83/c3658386-7e98-e77c-ac2f-15ea33898bfa/858978005929.png/400x400cc.jpg",
            twitter: "I used @Shazam to discover One by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10104481?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10104481",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c3/65/83/c3658386-7e98-e77c-ac2f-15ea33898bfa/858978005929.png/400x400cc.jpg",
            coverarthq:
              "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c3/65/83/c3658386-7e98-e77c-ac2f-15ea33898bfa/858978005929.png/400x400cc.jpg",
            joecolor: "b:dde0d9p:0d0d0ds:181a1at:373735q:404240",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1434424172",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ef/89/bf/ef89bff3-1ae1-6914-0e4c-3464583728b7/mzaf_5951455733855353356.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/one/1434424163?i=1434424172&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1434424172",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:One%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=One+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27One%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10104481/one",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "642565767",
          title: "You Must Burn!",
          subtitle: "Metallica",
          share: {
            subject: "You Must Burn! - Metallica",
            text: "I used Shazam to discover You Must Burn! by Metallica.",
            href: "https://www.shazam.com/track/642565767/you-must-burn",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            twitter: "I used @Shazam to discover You Must Burn! by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/642565767?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/642565767",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            joecolor: "b:ffff00p:010000s:352a01t:343300q:5d5401",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1655432392",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/db/6c/5f/db6c5fc5-eef6-31ed-e365-56baf26ad920/mzaf_11558126274413882626.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/you-must-burn/1655432387?i=1655432392&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1655432392",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:You%20Must%20Burn%21%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=You+Must+Burn%21+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27You+Must+Burn%21%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/642565767/you-must-burn",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "234975",
          title: "Fade To Black (Remastered)",
          subtitle: "Metallica",
          share: {
            subject: "Fade To Black (Remastered) - Metallica",
            text: "I used Shazam to discover Fade To Black (Remastered) by Metallica.",
            href: "https://www.shazam.com/track/234975/fade-to-black-remastered",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Fade To Black (Remastered) by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/234975?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/234975",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            joecolor: "b:3f4f98p:e5e9f4s:7ebbeft:c4cae1q:71a5dd",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579149037",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f6/3c/d0/f63cd033-acff-b3d3-972d-ca39bd39223c/mzaf_14460083950434585770.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/fade-to-black/579148345?i=579149037&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579149037",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Fade%20To%20Black%20%28Remastered%29%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Fade+To+Black+%28Remastered%29+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Fade+To+Black+%28Remastered%29%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/234975/fade-to-black-remastered",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "642565768",
          title: "Inamorata",
          subtitle: "Metallica",
          share: {
            subject: "Inamorata - Metallica",
            text: "I used Shazam to discover Inamorata by Metallica.",
            href: "https://www.shazam.com/track/642565768/inamorata",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            twitter: "I used @Shazam to discover Inamorata by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/642565768?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/642565768",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            joecolor: "b:ffff00p:010000s:352a01t:343300q:5d5401",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1655432399",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/fa/3a/f0/fa3af008-6603-fc7a-4bc4-6ee33e18ba0d/mzaf_4982952593983399253.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/inamorata/1655432387?i=1655432399&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1655432399",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Inamorata%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Inamorata+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Inamorata%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/642565768/inamorata",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10314014",
          title: "The Unforgiven",
          subtitle: "Metallica",
          share: {
            subject: "The Unforgiven - Metallica",
            text: "I used Shazam to discover The Unforgiven by Metallica.",
            href: "https://www.shazam.com/track/10314014/the-unforgiven",
            image:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover The Unforgiven by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10314014?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10314014",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            coverarthq:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f2f2f2s:e5e5e5t:c1c1c1q:b7b7b7",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579373082",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c7/f8/1c/c7f81ce5-7fbb-1545-eec5-9f22d91188ce/mzaf_13404638714942257901.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/the-unforgiven/579372950?i=579373082&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579373082",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:The%20Unforgiven%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=The+Unforgiven+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27The+Unforgiven%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10314014/the-unforgiven",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10314003",
          title: "Wherever I May Roam",
          subtitle: "Metallica",
          share: {
            subject: "Wherever I May Roam - Metallica",
            text: "I used Shazam to discover Wherever I May Roam by Metallica.",
            href: "https://www.shazam.com/track/10314003/wherever-i-may-roam",
            image:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Wherever I May Roam by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10314003?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10314003",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            coverarthq:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f2f2f2s:e5e5e5t:c1c1c1q:b7b7b7",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579373083",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5f/d9/28/5fd928f9-0a66-6ba7-d1f1-790d4d21aba6/mzaf_1729969445571620042.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/wherever-i-may-roam/579372950?i=579373083&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579373083",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Wherever%20I%20May%20Roam%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Wherever+I+May+Roam+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Wherever+I+May+Roam%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10314003/wherever-i-may-roam",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10314012",
          title: "Sad But True",
          subtitle: "Metallica",
          share: {
            subject: "Sad But True - Metallica",
            text: "I used Shazam to discover Sad But True by Metallica.",
            href: "https://www.shazam.com/track/10314012/sad-but-true",
            image:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Sad But True by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10314012?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10314012",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            coverarthq:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f2f2f2s:e5e5e5t:c1c1c1q:b7b7b7",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579373080",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f2/fc/51/f2fc511a-32e8-9828-4eda-b856bcd64d92/mzaf_12135287931105020405.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/sad-but-true/579372950?i=579373080&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579373080",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Sad%20But%20True%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Sad+But+True+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Sad+But+True%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10314012/sad-but-true",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "5937508",
          title: "Whiskey In the Jar",
          subtitle: "Metallica",
          share: {
            subject: "Whiskey In the Jar - Metallica",
            text: "I used Shazam to discover Whiskey In the Jar by Metallica.",
            href: "https://www.shazam.com/track/5937508/whiskey-in-the-jar",
            image:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/ec/2f/09/ec2f0972-db2a-ef0d-52eb-7167fee36d5a/0075596229968.jpg/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Whiskey In the Jar by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/5937508?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/5937508",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/ec/2f/09/ec2f0972-db2a-ef0d-52eb-7167fee36d5a/0075596229968.jpg/400x400cc.jpg",
            coverarthq:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/ec/2f/09/ec2f0972-db2a-ef0d-52eb-7167fee36d5a/0075596229968.jpg/400x400cc.jpg",
            joecolor: "b:071823p:cee9f8s:97d2eet:a6bfcdq:7aadc6",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579370556",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/37/e6/0537e69b-89bd-8fb4-c2ec-e9a533504729/mzaf_4169362050287233941.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/whiskey-in-the-jar/579370472?i=579370556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579370556",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Whiskey%20In%20the%20Jar%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Whiskey+In+the+Jar+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Whiskey+In+the+Jar%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/5937508/whiskey-in-the-jar",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "242135",
          title: "Seek & Destroy (Remastered)",
          subtitle: "Metallica",
          share: {
            subject: "Seek & Destroy (Remastered) - Metallica",
            text: "I used Shazam to discover Seek & Destroy (Remastered) by Metallica.",
            href: "https://www.shazam.com/track/242135/seek-destroy-remastered",
            image:
              "https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/73/06/19/73061928-34a2-6462-963a-039203d507fe/dj.cloeijsr.png/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Seek & Destroy (Remastered) by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/242135?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/242135",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/73/06/19/73061928-34a2-6462-963a-039203d507fe/dj.cloeijsr.png/400x400cc.jpg",
            coverarthq:
              "https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/73/06/19/73061928-34a2-6462-963a-039203d507fe/dj.cloeijsr.png/400x400cc.jpg",
            joecolor: "b:000000p:f7f7f1s:f61d25t:c5c5c0q:c5171e",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579146168",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0a/28/e1/0a28e1ab-fcac-37ff-e3fd-9bc2d2115f91/mzaf_14527045582063491522.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/seek-destroy/579146130?i=579146168&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579146168",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Seek%20%26%20Destroy%20%28Remastered%29%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Seek++Destroy+%28Remastered%29+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Seek++Destroy+%28Remastered%29%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/242135/seek-destroy-remastered",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "391930",
          title: "Turn the Page",
          subtitle: "Metallica",
          share: {
            subject: "Turn the Page - Metallica",
            text: "I used Shazam to discover Turn the Page by Metallica.",
            href: "https://www.shazam.com/track/391930/turn-the-page",
            image:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/ec/2f/09/ec2f0972-db2a-ef0d-52eb-7167fee36d5a/0075596229968.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Turn the Page by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/391930?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/391930",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/ec/2f/09/ec2f0972-db2a-ef0d-52eb-7167fee36d5a/0075596229968.jpg/400x400cc.jpg",
            coverarthq:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/ec/2f/09/ec2f0972-db2a-ef0d-52eb-7167fee36d5a/0075596229968.jpg/400x400cc.jpg",
            joecolor: "b:071823p:cee9f8s:97d2eet:a6bfcdq:7aadc6",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579370550",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/ee/60/71ee6006-a74b-c646-da9a-260b69a3d9c4/mzaf_7134442472050942184.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/turn-the-page/579370472?i=579370550&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579370550",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Turn%20the%20Page%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Turn+the+Page+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Turn+the+Page%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/391930/turn-the-page",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "246029",
          title: "Fuel",
          subtitle: "Metallica",
          share: {
            subject: "Fuel - Metallica",
            text: "I used Shazam to discover Fuel by Metallica.",
            href: "https://www.shazam.com/track/246029/fuel",
            image:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/68/b0/0e/68b00e47-8c5f-fd9c-9d39-fbee55a4b9d4/0093624986539.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover Fuel by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/246029?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/246029",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/68/b0/0e/68b00e47-8c5f-fd9c-9d39-fbee55a4b9d4/0093624986539.jpg/400x400cc.jpg",
            coverarthq:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/68/b0/0e/68b00e47-8c5f-fd9c-9d39-fbee55a4b9d4/0093624986539.jpg/400x400cc.jpg",
            joecolor: "b:000000p:fbaa25s:f27e38t:c9881eq:c1642d",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579374218",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d8/88/19/d8881977-2708-c308-0fa9-add894a34a82/mzaf_15425720627059153392.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/fuel/579374216?i=579374218&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579374218",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Fuel%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Fuel+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Fuel%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/246029/fuel",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "642565798",
          title: "Shadows Follow",
          subtitle: "Metallica",
          share: {
            subject: "Shadows Follow - Metallica",
            text: "I used Shazam to discover Shadows Follow by Metallica.",
            href: "https://www.shazam.com/track/642565798/shadows-follow",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            twitter: "I used @Shazam to discover Shadows Follow by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/642565798?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/642565798",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            joecolor: "b:ffff00p:010000s:352a01t:343300q:5d5401",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1655432389",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/03/04/79/030479c6-b66b-cf85-23d8-e1da9c52c684/mzaf_215367701990256724.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/shadows-follow/1655432387?i=1655432389&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1655432389",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Shadows%20Follow%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Shadows+Follow+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Shadows+Follow%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/642565798/shadows-follow",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "642565769",
          title: "Too Far Gone?",
          subtitle: "Metallica",
          share: {
            subject: "Too Far Gone? - Metallica",
            text: "I used Shazam to discover Too Far Gone? by Metallica.",
            href: "https://www.shazam.com/track/642565769/too-far-gone",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            twitter: "I used @Shazam to discover Too Far Gone? by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/642565769?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/642565769",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            joecolor: "b:ffff00p:010000s:352a01t:343300q:5d5401",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1655432397",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/39/02/7a/39027a44-5ecc-3d3e-ab2b-59b091f5eb10/mzaf_10872391292732997987.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/too-far-gone/1655432387?i=1655432397&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1655432397",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Too%20Far%20Gone%3F%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Too+Far+Gone%3F+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Too+Far+Gone%3F%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/642565769/too-far-gone",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "642565782",
          title: "Sleepwalk My Life Away",
          subtitle: "Metallica",
          share: {
            subject: "Sleepwalk My Life Away - Metallica",
            text: "I used Shazam to discover Sleepwalk My Life Away by Metallica.",
            href: "https://www.shazam.com/track/642565782/sleepwalk-my-life-away",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Sleepwalk My Life Away by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/642565782?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/642565782",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            joecolor: "b:ffff00p:010000s:352a01t:343300q:5d5401",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1655432391",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6c/4f/7d/6c4f7d36-2bdf-ca01-8f32-db7436baa571/mzaf_5883532435176622807.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/sleepwalk-my-life-away/1655432387?i=1655432391&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1655432391",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Sleepwalk%20My%20Life%20Away%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Sleepwalk+My+Life+Away+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Sleepwalk+My+Life+Away%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/642565782/sleepwalk-my-life-away",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "642565762",
          title: "Chasing Light",
          subtitle: "Metallica",
          share: {
            subject: "Chasing Light - Metallica",
            text: "I used Shazam to discover Chasing Light by Metallica.",
            href: "https://www.shazam.com/track/642565762/chasing-light",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            twitter: "I used @Shazam to discover Chasing Light by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/642565762?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/642565762",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/f7/50/56/f75056b7-d390-d215-51c5-3695dc6fe468/810083961095.png/400x400cc.jpg",
            joecolor: "b:ffff00p:010000s:352a01t:343300q:5d5401",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1655432395",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fd/b0/af/fdb0af23-36a5-754d-5261-77f106adf62f/mzaf_15020263350482790763.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/chasing-light/1655432387?i=1655432395&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1655432395",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Chasing%20Light%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Chasing+Light+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Chasing+Light%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/642565762/chasing-light",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "246004",
          title: "The Unforgiven II",
          subtitle: "Metallica",
          share: {
            subject: "The Unforgiven II - Metallica",
            text: "I used Shazam to discover The Unforgiven II by Metallica.",
            href: "https://www.shazam.com/track/246004/the-unforgiven-ii",
            image:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/68/b0/0e/68b00e47-8c5f-fd9c-9d39-fbee55a4b9d4/0093624986539.jpg/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover The Unforgiven II by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/246004?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/246004",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/68/b0/0e/68b00e47-8c5f-fd9c-9d39-fbee55a4b9d4/0093624986539.jpg/400x400cc.jpg",
            coverarthq:
              "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/68/b0/0e/68b00e47-8c5f-fd9c-9d39-fbee55a4b9d4/0093624986539.jpg/400x400cc.jpg",
            joecolor: "b:000000p:fbaa25s:f27e38t:c9881eq:c1642d",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579374222",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4d/07/1e/4d071ea5-ab53-7b74-3b5e-1621fa271df1/mzaf_18197872214208142952.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/the-unforgiven-ii/579374216?i=579374222&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579374222",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:The%20Unforgiven%20II%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=The+Unforgiven+II+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27The+Unforgiven+II%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/246004/the-unforgiven-ii",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10569536",
          title: "King Nothing",
          subtitle: "Metallica",
          share: {
            subject: "King Nothing - Metallica",
            text: "I used Shazam to discover King Nothing by Metallica.",
            href: "https://www.shazam.com/track/10569536/king-nothing",
            image:
              "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4f/25/da/4f25da69-51a3-03da-5cf5-fa50eb455cb9/0093624986546.jpg/400x400cc.jpg",
            twitter: "I used @Shazam to discover King Nothing by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10569536?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10569536",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4f/25/da/4f25da69-51a3-03da-5cf5-fa50eb455cb9/0093624986546.jpg/400x400cc.jpg",
            coverarthq:
              "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4f/25/da/4f25da69-51a3-03da-5cf5-fa50eb455cb9/0093624986546.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f27a5as:e87d64t:c26148q:ba6450",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579371728",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/90/2a/e6/902ae653-0ad1-d774-6496-9f8f896c964d/mzaf_15158588905962078966.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/king-nothing/579371716?i=579371728&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579371728",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:King%20Nothing%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=King+Nothing+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27King+Nothing%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10569536/king-nothing",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "234954",
          title: "Ride the Lightning (Remastered)",
          subtitle: "Metallica",
          share: {
            subject: "Ride the Lightning (Remastered) - Metallica",
            text: "I used Shazam to discover Ride the Lightning (Remastered) by Metallica.",
            href: "https://www.shazam.com/track/234954/ride-the-lightning-remastered",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Ride the Lightning (Remastered) by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/234954?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/234954",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            coverarthq:
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/400x400cc.jpg",
            joecolor: "b:3f4f98p:e5e9f4s:7ebbeft:c4cae1q:71a5dd",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579149035",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/73/b1/2a/73b12ae2-a0f9-d4ed-0129-22ad413e8049/mzaf_8244906171710688347.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/ride-the-lightning/579148345?i=579149035&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579149035",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Ride%20the%20Lightning%20%28Remastered%29%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Ride+the+Lightning+%28Remastered%29+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Ride+the+Lightning+%28Remastered%29%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/234954/ride-the-lightning-remastered",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "10314005",
          title: "Don't Tread On Me",
          subtitle: "Metallica",
          share: {
            subject: "Don't Tread On Me - Metallica",
            text: "I used Shazam to discover Don't Tread On Me by Metallica.",
            href: "https://www.shazam.com/track/10314005/dont-tread-on-me",
            image:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Don't Tread On Me by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/10314005?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/10314005",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            coverarthq:
              "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/400x400cc.jpg",
            joecolor: "b:000000p:f2f2f2s:e5e5e5t:c1c1c1q:b7b7b7",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "579373084",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c5/06/a1/c506a1cb-7aca-382a-a3ed-e5cb24dbf2fe/mzaf_5503965080083564748.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/dont-tread-on-me/579372950?i=579373084&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "579373084",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Don%27t%20Tread%20On%20Me%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Dont+Tread+On+Me+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Don%5C%27t+Tread+On+Me%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/10314005/dont-tread-on-me",
        },
      },
      {
        track: {
          layout: "5",
          type: "MUSIC",
          key: "225218",
          title: "Welcome Home (Sanitarium)",
          subtitle: "Metallica",
          share: {
            subject: "Welcome Home (Sanitarium) - Metallica",
            text: "I used Shazam to discover Welcome Home (Sanitarium) by Metallica.",
            href: "https://www.shazam.com/track/225218/welcome-home-sanitarium",
            image:
              "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/400x400cc.jpg",
            twitter:
              "I used @Shazam to discover Welcome Home (Sanitarium) by Metallica.",
            html: "https://www.shazam.com/snippets/email-share/225218?lang=en&country=US",
            avatar:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            snapchat: "https://www.shazam.com/partner/sc/track/225218",
          },
          images: {
            background:
              "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800cc.jpg",
            coverart:
              "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/400x400cc.jpg",
            coverarthq:
              "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/400x400cc.jpg",
            joecolor: "b:4d362ep:ede0d9s:dfdfe8t:ccbeb6q:c2bdc3",
          },
          hub: {
            type: "APPLEMUSIC",
            image:
              "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            actions: [
              {
                name: "apple",
                type: "applemusicplay",
                id: "1275600556",
              },
              {
                name: "apple",
                type: "uri",
                uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/93/e7/40/93e740fa-b79b-3c51-9237-a976db099c2a/mzaf_13246535485772650829.plus.aac.ep.m4a",
              },
            ],
            options: [
              {
                caption: "OPEN",
                actions: [
                  {
                    name: "hub:applemusic:deeplink",
                    type: "intent",
                    uri: "intent://music.apple.com/us/album/welcome-home-sanitarium/1275600311?i=1275600556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
                  },
                  {
                    name: "hub:applemusic:connect",
                    type: "applemusicconnect",
                    id: "1275600556",
                    uri: "https://unsupported.shazam.com",
                  },
                  {
                    name: "hub:applemusic:androidstore",
                    type: "uri",
                    uri: "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
                  },
                ],
                beacondata: {
                  type: "open",
                  providername: "applemusic",
                },
                image:
                  "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                type: "open",
                listcaption: "Open in Apple Music",
                overflowimage:
                  "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                colouroverflowimage: false,
                providername: "applemusic",
              },
            ],
            providers: [
              {
                caption: "Open in Spotify",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:spotify:searchdeeplink",
                    type: "uri",
                    uri: "spotify:search:Welcome%20Home%20%28Sanitarium%29%20Metallica",
                  },
                ],
                type: "SPOTIFY",
              },
              {
                caption: "Open in YouTube Music",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:youtubemusic:androiddeeplink",
                    type: "uri",
                    uri: "https://music.youtube.com/search?q=Welcome+Home+%28Sanitarium%29+Metallica&feature=shazam",
                  },
                ],
                type: "YOUTUBEMUSIC",
              },
              {
                caption: "Open in Deezer",
                images: {
                  overflow:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  default:
                    "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png",
                },
                actions: [
                  {
                    name: "hub:deezer:searchdeeplink",
                    type: "uri",
                    uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Welcome+Home+%28Sanitarium%29%27%20artist%3A%27Metallica%27%7D",
                  },
                ],
                type: "DEEZER",
              },
            ],
            explicit: false,
            displayname: "APPLE MUSIC",
          },
          artists: [
            {
              id: "42",
              adamid: "3996865",
            },
          ],
          url: "https://www.shazam.com/track/225218/welcome-home-sanitarium",
        },
      },
    ],
  },
  artists: {
    hits: [
      {
        artist: {
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/7c/ec/2d/7cec2d74-d50a-445e-eea6-f6097a01cea7/00e0f5e1-2dd6-4f71-bbdf-d2cbdd7560eb_ami-identity-7650ac390e73210afeaf26aae0ec7e10-2022-11-28T21-57-07.638Z_cropped.png/800x800bb.jpg",
          name: "Metallica",
          verified: false,
          weburl: "https://music.apple.com/us/artist/metallica/3996865",
          adamid: "3996865",
        },
      },
      {
        artist: {
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/12/b2/b4/12b2b42e-4a04-020d-25d1-4e738a28ed97/pr_source.png/800x800bb.jpg",
          name: "SaD - Symphony and Metallica",
          verified: false,
          weburl:
            "https://music.apple.com/us/artist/sad-symphony-and-metallica/1545194743",
          adamid: "1545194743",
        },
      },
      {
        artist: {
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/4c/71/01/4c7101ce-244f-78c9-d45d-9b12e6dc4f81/804957c3-e302-44b1-bd1c-ba1349923947.jpg/800x800ac.jpg",
          name: "TelaMetallica",
          verified: false,
          weburl: "https://music.apple.com/us/artist/telametallica/1641907916",
          adamid: "1641907916",
        },
      },
    ],
  },
};

export default data;
