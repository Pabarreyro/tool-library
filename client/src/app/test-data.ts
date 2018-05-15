import { User } from './models/user.model';
import { Tool } from './models/tool.model';

export const USER: User = new User(
  'toolUser',
  'toolUser@email.com',
  [
    new Tool(1, 'Thor\'s Hammer', '2018-01-01','Checked Out', 'A tool for thunderous hammering.', 'Eitri & Brokkr', 10, true, true, '2018-05-17', null)
  ],
  0,
  false
);

export const TOOLS: Tool[] = [
  new Tool(1, 'Thor\'s Hammer', '2018-01-01','Checked Out', 'A tool for thunderous hammering.', 'Eitri & Brokkr', 10, true, true, '2018-05-17', null),
  new Tool(2, 'Pandora\'s Toolbox', '2018-01-01', 'Available', 'An all-purpose kit of cursed tools.', 'Unknown', 10, true, true, null, null)
];
