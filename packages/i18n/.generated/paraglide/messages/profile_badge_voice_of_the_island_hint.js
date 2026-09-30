/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Voice_Of_The_Island_HintInputs */

const en_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receive 50 helpful votes on your reviews.`)
};

const es_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibe 50 votos útiles en tus reseñas.`)
};

const de_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erhalte 50 Hilfreich-Stimmen für deine Bewertungen.`)
};

const fr_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recevez 50 votes utiles sur vos avis.`)
};

const it_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi 50 voti utili sulle tue recensioni.`)
};

const nl_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontvang 50 nuttig-stemmen op je reviews.`)
};

const pl_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdobądź 50 głosów „pomocne” przy swoich recenzjach.`)
};

const pt_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receba 50 votos úteis nas suas avaliações.`)
};

const ru_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Получите 50 голосов «полезно» за свои отзывы.`)
};

const sv_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Få 50 hjälpsam-röster på dina recensioner.`)
};

const tr_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemelerinde 50 faydalı oy al.`)
};

const zh_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评价累计获得 50 张“有帮助”票。`)
};

const ja_profile_badge_voice_of_the_island_hint = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューで「役に立った」票を 50 件もらう。`)
};

/**
* | output |
* | --- |
* | "Receive 50 helpful votes on your reviews." |
*
* @param {Profile_Badge_Voice_Of_The_Island_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_voice_of_the_island_hint = /** @type {((inputs?: Profile_Badge_Voice_Of_The_Island_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Voice_Of_The_Island_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "de") return de_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "fr") return fr_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "it") return it_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "nl") return nl_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "pl") return pl_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "pt") return pt_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "ru") return ru_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "sv") return sv_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "tr") return tr_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "zh") return zh_profile_badge_voice_of_the_island_hint(inputs)
	if (locale === "ja") return ja_profile_badge_voice_of_the_island_hint(inputs)
	return en_profile_badge_voice_of_the_island_hint(inputs)
});
