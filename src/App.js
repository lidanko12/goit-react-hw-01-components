import user from './components/Profile/user.json'
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import statisticalData from './components/Statistics/statistical-data.json'
import friends from './components/Friends/friends.json'
import FriendsList from './components/Friends/FriendsList'
import transaction from './components/Transaction/Transactions.json'
import TransactionHistory from './components/Transaction/Transaction'




export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
       <Statistics title={'upload stats'} stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendsList friends={friends} />,
      <TransactionHistory items={transaction} />,
    </>
  );
}








