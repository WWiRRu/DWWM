async function getKata(user) {
    try {
        const response = await fetch(`https://www.codewars.com/api/v1/users/${user}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}
(async () => {
    await getKata("WWiRRu").then(data => {
        console.log("ID: ", data.id);
        console.log("Username: ", data.username);
        console.log("Honor: ", data.honor);
        console.log("Leaderboard Position: ", data.leaderboardPosition);
        console.log("CodeChallengesTotal: ", data.codeChallenges.totalCompleted);
        Object.entries(data.ranks.languages).forEach(([languageName, languageDetails]) => {
            console.log(`Language: ${languageName}`);
            console.log(`  Rank: ${languageDetails.name}`);
            console.log(`  Score: ${languageDetails.score}`);
            console.log("----------------------");
        });
        console.log("----------------------");
        console.log(data);
    })
})();