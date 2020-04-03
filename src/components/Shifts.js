import React from 'react';

import '../app.css';
import styled from 'styled-components';

const Container = styled.div`
  border-top: 2px solid #ff5601;

  text-align: center;
  padding: 10px;
  display: grid;
  min-height: 100vh;
`;

const Info2 = styled.div`
  border: 2px solid white;
  padding: 30px;
  color: white;
  min-padding: 10px;
  border-radius: 8px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.9);
`;
function Shifts() {
  return (
    <Container>
      {' '}
      <Info2 className='centered'>
        {' '}
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>days</th>
              <th>Shift</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>8</td>
              <td>17 - 23 luty</td>
              <td>2</td>
            </tr>
            <tr>
              <td>9</td>
              <td>24 luty - 1 marzec</td>
              <td>1</td>
            </tr>
            <tr>
              <td>10</td>
              <td>2 - 8 marzec </td>
              <td>3</td>
            </tr>
            <tr>
              <td>11</td>
              <td>9 - 15 marzec</td>
              <td>2</td>
            </tr>
            <tr>
              <td>12</td>
              <td>16 - 22 marzec</td>
              <td>1</td>
            </tr>
            <tr>
              <td>13</td>
              <td>23 - 29 marzec</td>
              <td>3</td>
            </tr>
            <tr>
              <td>14</td>
              <td>30 marzec - 5 kwiecień</td>
              <td>2</td>
            </tr>
            <tr>
              <td>15</td>
              <td>6 - 12 kwiecień</td>
              <td>1</td>
            </tr>
            <tr>
              <td>16</td>
              <td>13 - 19 kwiecień</td>
              <td>3</td>
            </tr>
            <tr>
              <td>17</td>
              <td>20 - 26 kwiecień</td>
              <td>2</td>
            </tr>
            <tr>
              <td>18</td>
              <td>27 kwiecień - 3 maj </td>
              <td>1</td>
            </tr>
            <tr>
              <td>19</td>
              <td>4 - 10 maj</td>
              <td>3</td>
            </tr>
            <tr>
              <td>20</td>
              <td>11 - 17 maj</td>
              <td>2</td>
            </tr>
            <tr>
              <td>21</td>
              <td>18 - 24 maj</td>
              <td>1</td>
            </tr>
            <tr>
              <td>22</td>
              <td>25 -31 maj </td>
              <td>3</td>
            </tr>
            <tr>
              <td>23</td>
              <td>1 - 7 czerwiec</td>
              <td>2</td>
            </tr>
            <tr>
              <td>24</td>
              <td>8 - 14 czerwiec</td>
              <td>1</td>
            </tr>
            <tr>
              <td>25</td>
              <td>15 - 21 czerwiec</td>
              <td>3</td>
            </tr>
            <tr>
              <td>26</td>
              <td>22 - 28 czerwiec</td>
              <td>2</td>
            </tr>
            <tr>
              <td>27</td>
              <td>29 czerwiec - 5 lipiec</td>
              <td>1</td>
            </tr>
            <tr>
              <td>28</td>
              <td>6 - 12 lipiec</td>
              <td>3</td>
            </tr>
            <tr>
              <td>29</td>
              <td>13 - 19 lipiec</td>
              <td>2</td>
            </tr>
            <tr>
              <td>30</td>
              <td>20 - 26 lipiec </td>
              <td>1</td>
            </tr>
            <tr>
              <td>31</td>
              <td>27 lipiec - 2 sierpień</td>
              <td>3</td>
            </tr>
            <tr>
              <td>32</td>
              <td>3 - 9 sierpień</td>
              <td>2</td>
            </tr>
            <tr>
              <td>33</td>
              <td>10 - 16 sierpień</td>
              <td>1</td>
            </tr>
            <tr>
              <td>34</td>
              <td>17 - 23 sierpień</td>
              <td>3</td>
            </tr>
            <tr>
              <td>35</td>
              <td>24 - 30 sierpień</td>
              <td>2</td>
            </tr>
            <tr>
              <td>36</td>
              <td>31 sierpień - 6 wrzesień </td>
              <td>1</td>
            </tr>
            <tr>
              <td>37</td>
              <td>7 - 13 wrzesień</td>
              <td>3</td>
            </tr>
            <tr>
              <td>38</td>
              <td>14 - 20 wrzesień</td>
              <td>2</td>
            </tr>
            <tr>
              <td>39</td>
              <td>21 - 27 wrzesień</td>
              <td>1</td>
            </tr>
            <tr>
              <td>40</td>
              <td>28 wrzesień - 4 październik</td>
              <td>3</td>
            </tr>
            <tr>
              <td>41</td>
              <td>5 - 11 październik</td>
              <td>2</td>
            </tr>
            <tr>
              <td>42</td>
              <td>12 - 18 październik</td>
              <td>1</td>
            </tr>
            <tr>
              <td>43</td>
              <td>19 - 25 październik</td>
              <td>3</td>
            </tr>
            <tr>
              <td>44</td>
              <td>26 październik - 1 listopad</td>
              <td>2</td>
            </tr>
            <tr>
              <td>45</td>
              <td>2 - 8 listopad</td>
              <td>1</td>
            </tr>
            <tr>
              <td>46</td>
              <td>9 - 15 listopad</td>
              <td>3</td>
            </tr>
            <tr>
              <td>47</td>
              <td>16 - 22 listopad</td>
              <td>2</td>
            </tr>
            <tr>
              <td>48</td>
              <td>23 - 29 listopad </td>
              <td>1</td>
            </tr>
            <tr>
              <td>49</td>
              <td>30 listopad - 6 grudzień</td>
              <td>3</td>
            </tr>
            <tr>
              <td>50</td>
              <td>7 - 13 grudzień</td>
              <td>2</td>
            </tr>
            <tr>
              <td>51</td>
              <td>14 - 20 grudzień</td>
              <td>1</td>
            </tr>
            <tr>
              <td>52</td>
              <td>21 - 27 grudzień</td>
              <td>3</td>
            </tr>
            <tr>
              <td>53</td>
              <td>28 - 3 styczeń</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </Info2>
    </Container>
  );
}

export default Shifts;
