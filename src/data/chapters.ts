export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const chapters: Chapter[] = [
  {
    id: "adi-parva",
    title: "Adi Parva",
    description: "The Book of the Beginning",
    content: `The Adi Parva introduces the main characters and sets the stage for the epic. It narrates the birth of the Pandavas and Kauravas, their early life, and education under Guru Dronacharya. This section also includes the famous story of Ekalavya and the marriage of Draupadi.

Key Events:
- Origin of the Kuru dynasty
- Birth of the Pandavas and Kauravas
- The education of the princes
- Arjuna's exceptional archery skills
- The story of Ekalavya
- Draupadi's swayamvara`
  },
  {
    id: "sabha-parva",
    title: "Sabha Parva",
    description: "The Book of the Assembly Hall",
    content: `The Sabha Parva focuses on the game of dice and its devastating consequences. It describes the construction of the magnificent palace at Indraprastha and the jealousy it sparked in Duryodhana.

Key Events:
- Construction of the Maya Sabha
- Rajasuya Yajna performed by Yudhishthira
- The game of dice
- Draupadi's humiliation
- The Pandavas' exile`
  },
  {
    id: "vana-parva",
    title: "Vana Parva",
    description: "The Book of the Forest",
    content: `The Vana Parva details the Pandavas' twelve years of exile in the forest. This period is filled with numerous adventures and spiritual encounters.

Key Events:
- Arjuna's penance and meeting with Lord Shiva
- Bhima's encounters with demons
- Stories of previous kings and sages
- Yudhishthira's wisdom tests`
  },
  {
    id: "virata-parva",
    title: "Virata Parva",
    description: "The Book of Virata",
    content: `The Virata Parva narrates the thirteenth year of exile, where the Pandavas live in disguise in King Virata's kingdom.

Key Events:
- The Pandavas' disguised identities
- Kichaka's death by Bhima
- The battle to rescue Virata's cattle
- The revelation of the Pandavas' identity`
  },
  {
    id: "udyoga-parva",
    title: "Udyoga Parva",
    description: "The Book of the Effort",
    content: `The Udyoga Parva describes the preparations for war, including peace negotiations and army formations.

Key Events:
- Krishna's peace mission
- Formation of alliances
- Gathering of armies
- War preparations`
  },
  {
    id: "bhishma-parva",
    title: "Bhishma Parva",
    description: "The Book of Bhishma",
    content: `The Bhishma Parva contains the Bhagavad Gita and the first ten days of the war under Bhishma's command.

Key Events:
- Krishna's discourse to Arjuna (Bhagavad Gita)
- The first ten days of battle
- Bhishma's fall`
  },
  {
    id: "drona-parva",
    title: "Drona Parva",
    description: "The Book of Drona",
    content: `The Drona Parva covers the next five days of the war under Drona's command.

Key Events:
- Abhimanyu's death
- The fall of Jayadratha
- Drona's death`
  },
  {
    id: "karna-parva",
    title: "Karna Parva",
    description: "The Book of Karna",
    content: `The Karna Parva details the two days of battle under Karna's command.

Key Events:
- Karna's leadership
- Various battles and duels
- Karna's death at the hands of Arjuna`
  },
  {
    id: "shalya-parva",
    title: "Shalya Parva",
    description: "The Book of Shalya",
    content: `The Shalya Parva describes the last day of the war under Shalya's command.

Key Events:
- Shalya's leadership
- The final battles
- Duryodhana's duel with Bhima`
  },
  {
    id: "sauptika-parva",
    title: "Sauptika Parva",
    description: "The Book of the Sleeping Warriors",
    content: `The Sauptika Parva narrates the night massacre of the Pandava camp.

Key Events:
- Ashwatthama's revenge
- The death of Dhrishtadyumna
- The curse on Ashwatthama`
  },
  {
    id: "stri-parva",
    title: "Stri Parva",
    description: "The Book of the Women",
    content: `The Stri Parva depicts the grief of women who lost their loved ones in the war.

Key Events:
- Gandhari's lament
- The mourning of the women
- The funeral ceremonies`
  },
  {
    id: "shanti-parva",
    title: "Shanti Parva",
    description: "The Book of Peace",
    content: `The Shanti Parva contains Bhishma's detailed instructions on dharma, governance, and philosophy.

Key Events:
- Yudhishthira's coronation
- Bhishma's teachings
- Lessons on kingship and duty`
  },
  {
    id: "anushasana-parva",
    title: "Anushasana Parva",
    description: "The Book of Instructions",
    content: `The Anushasana Parva continues Bhishma's teachings on dharma and various aspects of life.

Key Events:
- Further teachings by Bhishma
- Stories illustrating dharma
- Bhishma's death`
  },
  {
    id: "ashvamedhika-parva",
    title: "Ashvamedhika Parva",
    description: "The Book of the Horse Sacrifice",
    content: `The Ashvamedhika Parva describes the horse sacrifice performed by Yudhishthira.

Key Events:
- The Ashvamedha ceremony
- Arjuna's adventures following the horse
- Various battles and encounters`
  },
  {
    id: "ashramavasika-parva",
    title: "Ashramavasika Parva",
    description: "The Book of the Hermitage",
    content: `The Ashramavasika Parva narrates the retirement of Dhritarashtra, Gandhari, and Kunti to the forest.

Key Events:
- The departure to the forest
- Life in the hermitage
- Their death in a forest fire`
  },
  {
    id: "mausala-parva",
    title: "Mausala Parva",
    description: "The Book of the Clubs",
    content: `The Mausala Parva describes the destruction of the Yadava clan and Krishna's death.

Key Events:
- The curse on the Yadavas
- The battle with iron clubs
- Krishna's departure`
  },
  {
    id: "mahaprasthanika-parva",
    title: "Mahaprasthanika Parva",
    description: "The Book of the Great Journey",
    content: `The Mahaprasthanika Parva tells of the Pandavas' final journey.

Key Events:
- The renunciation of the kingdom
- The journey to Mount Meru
- The fall of the Pandavas`
  },
  {
    id: "svargarohana-parva",
    title: "Svargarohana Parva",
    description: "The Book of the Ascent to Heaven",
    content: `The final book describing the Pandavas' ascent to heaven.

Key Events:
- Yudhishthira's arrival in heaven
- The test of Yudhishthira's virtue
- The final reunion in heaven`
  }
];