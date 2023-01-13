export function getLanguageColor(language) {
    const languageColors = {
        "JavaScript": '#f1e05a',
        "Python": '#3572A5',
        "C": '#555555',
        "C++": '#f34b7d',
        "Java": '#b07219',
        "Ruby": '#701516',
        "PHP": '#4f5d95',
        "C#": '#178600',
        "Swift": '#ffac45',
        "Go": '#00ADD8',
        "SQL": '#f9c616',
        "Shell": '#89e051',
        "CSS": '#563d7c',
        "HTML": '#e34c26',
        "TypeScript": '#2b7489',
        "Rust": '#dea584',
        "Kotlin": '#F18E33',
        "Dart": '#00B4AB',
        "Lua": '#000080',
        "Scala": '#c22d40',
        "Perl": '#0298c3',
        "R": '#198ce7'
    }

    return languageColors[language] ?? "grey"
}