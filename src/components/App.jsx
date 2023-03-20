import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendsList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactions/Transactions";

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
export default App;
