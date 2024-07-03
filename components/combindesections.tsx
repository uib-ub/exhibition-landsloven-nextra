// Import individual modules
import arvefallet from 'config/sections/arvefallet';
import introduksjon from 'config/sections/introduksjon';
import kjoepebolken from 'config/sections/kjoepebolken';
import kristendomsbolken from 'config/sections/kristendomsbolken';
import landevernsbolken from 'config/sections/landevernsbolken';
import landsleiebolken from 'config/sections/landsleiebolken';
import mannhelgebolken from 'config/sections/mannhelgebolken';
import odelsbolken from 'config/sections/odelsbolken';
import prologen from 'config/sections/prologen';
import retterboeter from 'config/sections/retterboeter';
import tingfarebolken from 'config/sections/tingfarebolken';
import tyvebolken from 'config/sections/tyvebolken';
import epilog from 'config/sections/epilog';
import site from 'config/site';

// Combine them into an array
const sections = {
  arvefallet,
  introduksjon,
  kjoepebolken,
  kristendomsbolken,
  landevernsbolken,
  landsleiebolken,
  mannhelgebolken,
  odelsbolken,
  prologen,
  retterboeter,
  tingfarebolken,
  tyvebolken,
  epilog,
  site
};

// Export the array
export default sections;
