import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

export default function News() {
  return (
    <Box
      sx={{
        width: 1000,
        height: 250,
        margin: 10,
        marginTop: -10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // '& > :not(style)': {
        //   m: 1,
        //   width: 850,
        //   height: 260,
        // },
        // '&:hover': {
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Paper
        elevation={3}
        sx={{
        width: 1000,
        height: 250,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 900,
          height: 250,
        },
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
        <div class="news-intro" id="news-intro">
          <h2>Cardings</h2>
          <h3>NORTHMEAD CLUB CHAMPIONSHIPS 2023/2024</h3>
          <p>
            Games may be played during the week providing that tabs are in - take preference.
            Please Inform me beforehand so that I can prepare the cards. I can be contacted on on 0672564909.
            Score Cards must please be placed in the Competition Box on the wall on completion of all games.
            Score Cards will be available at the Bar.
          </p>
        </div>
      </Paper>
    
      <Paper
        sx={{
        width: 430,
        height: 400,
        margin: 10,
        marginTop: -1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 430,
          height: 400,
        },
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
        <div class="mens-open" id="mens-open">
          <h3>Men's Open Singles Championship</h3>
          <p>
            Format is:
            TWO SETS OF NINE ENDS (3 END TIEBREAKER)
          </p>
          <ul>
            <li>1.First round is sections of three.
              <ul>
                <li>Round Robin - Guaranteed of two games.</li>
                <li>1 Point for a win then shot aggregate.</li>
              </ul>
            </li>
            <li>2. Player 1 vs Player 2 (Player 3 Marks)
              <ul>
                <li>Looser Game 1 vs The Marker (Winner of Game 1 Marks)</li>
                <li>Marker vs Winner Game 1 (Looser Game 1 Marks)</li>
              </ul>
            </li>
            <li>3. Thereafter knock out (Same Format 2 Sets of 9 Ends)
            </li>
          </ul>
        </div>
      </Paper>

      <Paper
        sx={{
        width: 430,
        height: 400,
        margin: 10,
        marginTop: -1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 430,
          height: 400,
        },
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
        <div class="mens-open" id="ladies-open">
          <h3>Ladies Open Singles Championship</h3>
          <p>
            Format is:
            TWO SETS OF NINE ENDS (3 END TIEBREAKER)
          </p>
          <ul>
            <li>1.First round is sections of three.
              <ul>
                <li>Round Robin - Guaranteed of two games.</li>
                <li>1 Point for a win then shot aggregate.</li>
              </ul>
            </li>
            <li>2. Player 1 vs Player 2 (Player 3 Marks)
              <ul>
                <li>Looser Game 1 vs The Marker (Winner of Game 1 Marks)</li>
                <li>Marker vs Winner Game 1 (Looser Game 1 Marks)</li>
              </ul>
            </li>
            <li>3. Thereafter knock out (Same Format 2 Sets of 9 Ends)
            </li>
          </ul>
        </div>
      </Paper>

      <Paper
        sx={{
        width: 430,
        height: 400,
        margin: 10,
        marginTop: -1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 430,
          height: 400,
        },
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
      <div class="news-intro" id="news-intro">
        <div class="mens-open" id="senior-mens-open">
          <h3>Mens Senior Singles</h3>
          <p>
          <ul>
            <li>21 Shots</li>
            <li>KNOCK OUT</li>
          </ul>
          </p>
        </div>
        <div class="mens-open" id="senior-ladies-open">
          <h3>Ladies Senior Singles</h3>
          <p>
          <ul>
            <li>21 Shots</li>
            <li>KNOCK OUT</li>
          </ul>
          </p>
        </div>
        <div class="mens-open" id="mens-novice-open">
          <h4>Men's Novice Singles</h4>
          <p>
          <ul>
            <li>Format Depending on Number of entries</li>
            <li>Round Robin</li>
            <li>21 SHOTS</li>
          </ul>
          </p>
        </div>
        <div class="mens-open" id="ladies-novice-open">
          <h4>Ladies Novice Singles</h4>
          <p>
          <ul>
            <li>Format Depending on Number of entries</li>
            <li>Round Robin</li>
            <li>21 SHOTS</li>
          </ul>
          </p>
        </div>
        <div class="mens-open" id="handicapped-open">
          <h4>Handicap Singles</h4>
          <p>
          <ul>
            <li>21 Ends (Knockout)</li>
            <li>All Pairs: 21 Ends (Four Bowls)</li>
            <li>Trips: 21 Ends</li>
          </ul>
          </p>
        </div>
      </div>
    </Paper>
  </Box>
  );
}