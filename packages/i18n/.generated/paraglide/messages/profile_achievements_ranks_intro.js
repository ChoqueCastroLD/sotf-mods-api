/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Ranks_IntroInputs */

const en_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every member has a Survivor rank that grows with the XP earned by helping the community. It can’t be bought and it’s never lost for inactivity.`)
};

const es_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada miembro tiene un rango de superviviente que crece con la XP que gana ayudando a la comunidad. No se compra y nunca se pierde por inactividad.`)
};

const de_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedes Mitglied hat einen Überlebenden-Rang, der mit der XP für Hilfe in der Community wächst. Er ist nicht käuflich und geht durch Inaktivität nie verloren.`)
};

const fr_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque membre a un rang de survivant qui progresse avec l’XP gagnée en aidant la communauté. Il ne s’achète pas et ne se perd jamais par inactivité.`)
};

const it_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni membro ha un grado di sopravvissuto che cresce con l’XP guadagnata aiutando la community. Non si compra e non si perde mai per inattività.`)
};

const nl_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elk lid heeft een overlevingsrang die groeit met de XP die je verdient door de community te helpen. Je kunt hem niet kopen en verliest hem nooit door inactiviteit.`)
};

const pl_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy członek ma rangę ocalałego, która rośnie wraz z XP zdobytym za pomoc społeczności. Nie da się jej kupić i nigdy nie przepada z powodu nieaktywności.`)
};

const pt_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada membro tem uma patente de sobrevivente que sobe com o XP ganho ajudando a comunidade. Não se compra e nunca se perde por inatividade.`)
};

const ru_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У каждого участника есть ранг выжившего, который растёт вместе с XP за помощь сообществу. Его нельзя купить, и он никогда не сгорает из-за неактивности.`)
};

const sv_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje medlem har en överlevarrang som växer med den XP man tjänar genom att hjälpa gemenskapen. Den kan inte köpas och försvinner aldrig vid inaktivitet.`)
};

const tr_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her üyenin, topluluğa yardım ederek kazandığı XP ile yükselen bir hayatta kalan rütbesi vardır. Satın alınamaz ve hareketsizlik yüzünden asla kaybedilmez.`)
};

const zh_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每位成员都有幸存者等级，会随着帮助社区获得的 XP 提升。等级无法购买，也不会因不活跃而丢失。`)
};

const ja_profile_achievements_ranks_intro = /** @type {(inputs: Profile_Achievements_Ranks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メンバー全員に、コミュニティを助けて得た XP で上がるサバイバーランクがあります。購入はできず、活動しなくても下がりません。`)
};

/**
* | output |
* | --- |
* | "Every member has a Survivor rank that grows with the XP earned by helping the community. It can’t be bought and it’s never lost for inactivity." |
*
* @param {Profile_Achievements_Ranks_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_ranks_intro = /** @type {((inputs?: Profile_Achievements_Ranks_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Ranks_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_ranks_intro(inputs)
	if (locale === "de") return de_profile_achievements_ranks_intro(inputs)
	if (locale === "fr") return fr_profile_achievements_ranks_intro(inputs)
	if (locale === "it") return it_profile_achievements_ranks_intro(inputs)
	if (locale === "nl") return nl_profile_achievements_ranks_intro(inputs)
	if (locale === "pl") return pl_profile_achievements_ranks_intro(inputs)
	if (locale === "pt") return pt_profile_achievements_ranks_intro(inputs)
	if (locale === "ru") return ru_profile_achievements_ranks_intro(inputs)
	if (locale === "sv") return sv_profile_achievements_ranks_intro(inputs)
	if (locale === "tr") return tr_profile_achievements_ranks_intro(inputs)
	if (locale === "zh") return zh_profile_achievements_ranks_intro(inputs)
	if (locale === "ja") return ja_profile_achievements_ranks_intro(inputs)
	return en_profile_achievements_ranks_intro(inputs)
});
