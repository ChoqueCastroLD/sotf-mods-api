/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Principle_No_StreaksInputs */

const en_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No daily streaks, no loot boxes and no leaderboards that shame anyone.`)
};

const es_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin rachas diarias, sin cajas de botín y sin clasificaciones que humillen a nadie.`)
};

const de_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine täglichen Serien, keine Lootboxen und keine Ranglisten, die jemanden bloßstellen.`)
};

const fr_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de séries quotidiennes, pas de coffres à butin et pas de classements humiliants.`)
};

const it_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente serie giornaliere, niente loot box e niente classifiche che umiliano qualcuno.`)
};

const nl_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen dagelijkse reeksen, geen lootboxen en geen ranglijsten die iemand vernederen.`)
};

const pl_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żadnych codziennych serii, lootboksów ani rankingów, które kogoś upokarzają.`)
};

const pt_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sequências diárias, sem caixas de recompensa e sem rankings que humilhem alguém.`)
};

const ru_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Никаких ежедневных серий, лутбоксов и рейтингов, которые кого-то унижают.`)
};

const sv_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga dagliga sviter, inga lootlådor och inga topplistor som hänger ut någon.`)
};

const tr_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük seriler, ganimet kutuları ve kimseyi küçük düşüren sıralamalar yok.`)
};

const zh_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有每日连签，没有开箱，也没有让人难堪的排行榜。`)
};

const ja_profile_achievements_principle_no_streaks = /** @type {(inputs: Profile_Achievements_Principle_No_StreaksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`連続ログインも、ルートボックスも、誰かを貶めるランキングもありません。`)
};

/**
* | output |
* | --- |
* | "No daily streaks, no loot boxes and no leaderboards that shame anyone." |
*
* @param {Profile_Achievements_Principle_No_StreaksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_principle_no_streaks = /** @type {((inputs?: Profile_Achievements_Principle_No_StreaksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Principle_No_StreaksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_principle_no_streaks(inputs)
	if (locale === "de") return de_profile_achievements_principle_no_streaks(inputs)
	if (locale === "fr") return fr_profile_achievements_principle_no_streaks(inputs)
	if (locale === "it") return it_profile_achievements_principle_no_streaks(inputs)
	if (locale === "nl") return nl_profile_achievements_principle_no_streaks(inputs)
	if (locale === "pl") return pl_profile_achievements_principle_no_streaks(inputs)
	if (locale === "pt") return pt_profile_achievements_principle_no_streaks(inputs)
	if (locale === "ru") return ru_profile_achievements_principle_no_streaks(inputs)
	if (locale === "sv") return sv_profile_achievements_principle_no_streaks(inputs)
	if (locale === "tr") return tr_profile_achievements_principle_no_streaks(inputs)
	if (locale === "zh") return zh_profile_achievements_principle_no_streaks(inputs)
	if (locale === "ja") return ja_profile_achievements_principle_no_streaks(inputs)
	return en_profile_achievements_principle_no_streaks(inputs)
});
