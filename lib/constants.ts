/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://live.genemator.uz';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'genemator';
export const BRAND_NAME = 'Genemator\'s';
export const SITE_NAME_MULTILINE = ['Genemator\'s', 'Conf'];
export const SITE_NAME = 'Genemator\'s Conf';
export const META_DESCRIPTION =
  'This is an even website where Genemator presents something over here';
export const SITE_DESCRIPTION =
  'An interactive online experience by Genemator.';
export const DATE = 'February 15, 2021';
export const SHORT_DATE = 'Feb 15 - 9:00pm PST';
export const FULL_DATE = 'Feb 15th 9pm Pacific Time (GMT+5)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/genemators/genio';
export const SAMPLE_TICKET_NUMBER = 7977767;
export const NAVIGATION = [
  {
    name: 'Stage A',
    route: '/stage/a'
  },
  {
    name: 'Stage C',
    route: '/stage/c'
  },
  {
    name: 'Stage M',
    route: '/stage/m'
  },
  {
    name: 'Stage E',
    route: '/stage/e'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
