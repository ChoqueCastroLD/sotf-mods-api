/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Review_On_Mod_UnratedInputs */

const en_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} left a review on ${i?.mod}`)
};

const es_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha dejado una reseña en ${i?.mod}`)
};

const de_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} bewertet`)
};

const fr_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a laissé un avis sur ${i?.mod}`)
};

const it_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha lasciato una recensione su ${i?.mod}`)
};

const nl_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} liet een review achter bij ${i?.mod}`)
};

const pl_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} wystawił(a) recenzję dla ${i?.mod}`)
};

const pt_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} deixou uma avaliação em ${i?.mod}`)
};

const ru_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} оставил(а) отзыв о ${i?.mod}`)
};

const sv_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} lämnade en recension på ${i?.mod}`)
};

const tr_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} için bir inceleme bıraktı`)
};

const zh_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 给 ${i?.mod} 留下了评价`)
};

const ja_signals_review_on_mod_unrated = /** @type {(inputs: Signals_Review_On_Mod_UnratedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} が ${i?.mod} にレビューを投稿しました`)
};

/**
* | output |
* | --- |
* | "{actor} left a review on {mod}" |
*
* @param {Signals_Review_On_Mod_UnratedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_review_on_mod_unrated = /** @type {((inputs: Signals_Review_On_Mod_UnratedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Review_On_Mod_UnratedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_review_on_mod_unrated(inputs)
	if (locale === "de") return de_signals_review_on_mod_unrated(inputs)
	if (locale === "fr") return fr_signals_review_on_mod_unrated(inputs)
	if (locale === "it") return it_signals_review_on_mod_unrated(inputs)
	if (locale === "nl") return nl_signals_review_on_mod_unrated(inputs)
	if (locale === "pl") return pl_signals_review_on_mod_unrated(inputs)
	if (locale === "pt") return pt_signals_review_on_mod_unrated(inputs)
	if (locale === "ru") return ru_signals_review_on_mod_unrated(inputs)
	if (locale === "sv") return sv_signals_review_on_mod_unrated(inputs)
	if (locale === "tr") return tr_signals_review_on_mod_unrated(inputs)
	if (locale === "zh") return zh_signals_review_on_mod_unrated(inputs)
	if (locale === "ja") return ja_signals_review_on_mod_unrated(inputs)
	return en_signals_review_on_mod_unrated(inputs)
});
