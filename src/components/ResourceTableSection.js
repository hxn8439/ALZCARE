import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './ResourceTableSection.css';

export default function ResourceTableSection(props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Resource</Th>
          <Th>Address</Th>
          <Th>Phone</Th>
          <Th>Website</Th>
          <Th>Type</Th>
          <Th>Language</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Carrollton Health & Rehabilitation Center</Td>
          <Td>1618 Kirby Rd, Carrollton, TX 75006</Td>
          <Td>(972) 245-1573</Td>
          <Td>https://carrolltonhealth.com</Td>
          <Td>Nursing home</Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Grace Adult Day Care Center (은혜복지건강센터)</Td>
          <Td>1870 Crown Dr #1520, Farmers Branch, TX 75234</Td>
          <Td>(972) 506-0177</Td>
          <Td>http://gracedahs.org/</Td>
          <Td>Day care center</Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Korean Home Health Care (한국 홈케어)</Td>
          <Td>1908 Royal Ln Ste 100, Dallas, TX 75229</Td>
          <Td>(972) 241-9996</Td>
          <Td>http://khhcusa.com/index.php?mid=page_hCmK31</Td>
          <Td>Home care</Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Korean Cultural Center of Dallas</Td>
          <Td>11500 N Stemmons Fwy, Dallas, TX 75229</Td>
          <Td>(972) 241-4524</Td>
          <Td>https://www.kccus.org</Td>
          <Td>Community center</Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Korean Senior Citizens Association (달라스 노인회)</Td>
          <Td>9715 Brockbank Dr, Dallas, TX 75220</Td>
          <Td>(214) 350-1633</Td>
          <Td></Td>
          <Td>Association</Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Sunny Community Home Care (서니홈케어)</Td>
          <Td>1249M Blalock Rd, Houston, TX 77055</Td>
          <Td>(832) 581-3461</Td>
          <Td>http://sunnyhomecareinc.com/index.php</Td>
          <Td>Home care</Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Woori Home Care (우리홈케어)</Td>
          <Td>2625 Old Denton Rd Ste 452, Carrollton, TX 75007</Td>
          <Td>(972) 820-8700</Td>
          <Td></Td>
          <Td>Home care</Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Korean American Association of Austin</Td>
          <Td></Td>
          <Td></Td>
          <Td>https://www.facebook.com/KAAGAUSA/</Td>
          <Td></Td>
          <Td>Korean</Td>
        </Tr>
        <Tr>
          <Td>Chinese Seniors Association of Houston</Td>
          <Td></Td>
          <Td></Td>
          <Td>https://csahouston.wordpress.com</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Asian American Health Coalition</Td>
          <Td></Td>
          <Td></Td>
          <Td>http://asianhealthhouston.org</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Austin Chinese-American Network (ACAN)</Td>
          <Td></Td>
          <Td></Td>
          <Td>https://www.austinchineseamericannetwork.org</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Chinese Society of Austin (CSA)</Td>
          <Td></Td>
          <Td></Td>
          <Td>http://csaustin.org</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Asian American Resource Center</Td>
          <Td></Td>
          <Td></Td>
          <Td>http://austintexas.gov/department/asian-american-resource-center</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>OCA - Greater Houston</Td>
          <Td>9800 Town Park Dr #142, Houston, TX 77036</Td>
          <Td>info@ocahouston.org</Td>
          <Td>http://www.ocahouston.org</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Chinese Civic Center</Td>
          <Td>5905 Sovereign Dr, Houston, TX 77036</Td>
          <Td></Td>
          <Td>https://www.chineseciviccenter.org/</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>CCC (Chinese Community Center)</Td>
          <Td>9800 Town Park Dr, Houston, TX 77036</Td>
          <Td>(713) 271-6100</Td>
          <Td>https://ccchouston.org</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Chinese Baptist Church</Td>
          <Td>900 Brogden Rd, Houston, TX 77024</Td>
          <Td>(713) 461-0963</Td>
          <Td>https://www.cbchouston.org/chindex.html</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Everspring Assisted Living</Td>
          <Td>6501 Westline Dr, Houston, TX 77036</Td>
          <Td>(713) 988-2843</Td>
          <Td>https://everspring-living.com/</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
        <Tr>
          <Td>Turtlewood Manor</Td>
          <Td>6955 Turtlewood Dr, Houston, TX 77072</Td>
          <Td>(713) 979-8242</Td>
          <Td>https://turtlewoodseniorliving.net/</Td>
          <Td></Td>
          <Td>Chinese</Td>
        </Tr>
      </Tbody>
    </Table>
  );
} // Static list of dementia care facilities to display below the map - still need to dynamically pull from Firebase