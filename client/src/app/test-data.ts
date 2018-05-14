import { User } from './models/user.model';
import { Tool } from './models/tool.model';

export const USER: User = new User(
  'toolUser',
  'toolUser@email.com',
  [
    new Tool('Thor\'s Hammer', '2018-01-01', ['Checked Out', '2018-05-14'], 'A tool for thunderous hammering.', 'Eitri & Brokkr', '2018-05-17', null),
  ],
  0,
  false
);

export const TOOLS: Tool[] = [
  new Tool('Thor\'s Hammer', '2018-01-01', ['Checked Out', '2018-05-14'], 'A tool for thunderous hammering.', 'Eitri & Brokkr', '2018-05-17', null),
  new Tool('Pandora\'s Toolbox', '2018-01-01', ['Available', '2018-05-13'], 'An all-purpose kit of cursed tools.', 'Unknown', null, null)
];
