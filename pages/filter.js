const dpolls = [
  {
    id: 4,
    type: "C",
    name: "Test 1",
  },
  {
    id: 6,
    type: "B",
    name: "Test 2",
  },
  {
    id: 7,
    type: "A",
    name: "Test 3",
  },
  {
    id: 8,
    type: "A",
    name: "Test 9",
  },
  {
    id: 17,
    type: "B",
    name: "Test 39",
  },
];
class PollCard extends React.Component {
  render() {
    return <div>{`${this.props.poll.name} - ${this.props.poll.type}`}</div>;
  }
}

function PollList() {
  const [polls, setPolls] = React.useState(null);
  const [filteredPolls, setfilteredPolls] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const range = 30;
  // var dateRange = moment().subtract(range, 'days').calendar();

  async function fetchMyAPI() {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1"
    );
    const json = await response.json();
    // var data = json.filter(e => Date.parse(e.endDate) >= Date.parse(dateRange))
    setPolls(dpolls);
    setfilteredPolls(dpolls.filter((e) => e.type === "A"));
    setLoading(true);
  }

  React.useEffect(() => {
    fetchMyAPI();
  }, []);

  if (!loading) {
    return "Loading...";
  }

  var A = polls.filter((e) => e.type === "A");
  var B = polls.filter((e) => e.type === "B");
  var C = polls.filter((e) => e.type === "C");

  function showA() {
    setfilteredPolls(A);
  }

  function showB() {
    setfilteredPolls(B);
  }

  function showC() {
    setfilteredPolls(C);
  }

  function removeFiter() {
    setfilteredPolls(polls);
  }

  return (
    <div className='polls'>
      <button onClick={() => showA()}>A</button>
      <button onClick={() => showB()}>B</button>
      <button onClick={() => showC()}>C</button>
      <button onClick={() => removeFiter()}>Remove Filter</button>

      {filteredPolls &&
        filteredPolls.map((poll) => (
          <div key={poll.id}>
            <PollCard poll={poll} />
            <hr style={{ opacity: ".1" }} />
          </div>
        ))}
    </div>
  );
}

import React from "react";

const Filter = () => {
  return (
    <div>
      <PollList />
    </div>
  );
};

export default Filter;
