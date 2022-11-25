// const tournament_skeleton{
//     isCompleted:true,
//     isFull:true,
//     createdBy
// }
const isJoined = (joinedPlayers, userId) => {
  let isJoined = false;
  joinedPlayers.forEach((p) => {
    if (p.userId === userId) {
      isJoined = true;
    }
  });
  return isJoined;
};
export const hasPlayed = (joinedPlayers, userId) => {
  let hasPlayed = false;
  joinedPlayers.forEach((p) => {
    if (p.userId === userId && p.hasPlayed) {
      hasPlayed = true;
    }
  });
  return hasPlayed;
};
export const getScore = (joinedPlayers, userId) => {
  let score = 0;
  joinedPlayers.forEach((p) => {
    if (p.userId === userId && p.hasPlayed) {
      score = p.score;
    }
  });
  return score;
};
const parseTournaments = (tournaments, userId) => {
  let default_val = undefined;
  const result = {
    fullTournaments: default_val,
    joinedTournaments: default_val,
    myTournaments: default_val,
    nonParticipatedTournaments: default_val,
    completedTournaments: default_val,
  };
  if (tournaments === undefined || userId ===undefined) {
    return result;
  }
  if (Array.isArray(tournaments) && tournaments.length === 0) {
    default_val = [];
    return  {
      fullTournaments: [],
      joinedTournaments: [],
      myTournaments: [],
      nonParticipatedTournaments: [],
      completedTournaments: [],
    };;
  }
  result.fullTournaments = tournaments.filter((t) => {
    // tournament is full(not completed) but does have current user as joined player;
    if (t?.isFull && !isJoined(t.joinedPlayers, userId) &&!t.isCompleted) {
      return true;
    }
    return false;
  });

  result.joinedTournaments = tournaments.filter((t) => {
    // not completed and have current user as joined player;
    if (isJoined(t.joinedPlayers, userId) && !t.isCompleted) {
      return true;
    }
    return false;
  });

  result.completedTournaments = tournaments.filter((t) => {
    // completed and have current user as joined player;
    if (isJoined(t.joinedPlayers, userId) && t.isCompleted) {
      return true;
    }
    return false;
  });
  
  result.myTournaments = tournaments.filter((t) => {
    // not completed and have current user as joined player;
    if (t.createdBy === userId) {
      return true;
    }
    return false;
  });
  result.nonParticipatedTournaments = tournaments.filter((t) => {
    // not completed and have current user as joined player;
    if (!isJoined(t.joinedPlayers,userId) && !t.isFull) {
      return true;
    }
    return false;
  });
  console.log({
    userId,
    tournaments,
    result
  })
  return result;
};

export default parseTournaments;
