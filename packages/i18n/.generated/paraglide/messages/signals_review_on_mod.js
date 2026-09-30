/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, rating: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Review_On_ModInputs */

const en_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} left a ${i?.rating}-star review on ${i?.mod}`)
};

const es_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha dejado una reseña de ${i?.rating} estrellas en ${i?.mod}`)
};

const de_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} mit ${i?.rating} Sternen bewertet`)
};

const fr_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a laissé un avis ${i?.rating} étoiles sur ${i?.mod}`)
};

const it_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha lasciato una recensione da ${i?.rating} stelle su ${i?.mod}`)
};

const nl_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} gaf ${i?.mod} een review met ${i?.rating} sterren`)
};

const pl_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} wystawił(a) ${i?.mod} recenzję na ${i?.rating} gwiazdek`)
};

const pt_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} deixou uma avaliação de ${i?.rating} estrelas em ${i?.mod}`)
};

const ru_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} оставил(а) отзыв на ${i?.rating} звёзд о ${i?.mod}`)
};

const sv_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} gav ${i?.mod} en recension med ${i?.rating} stjärnor`)
};

const tr_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} için ${i?.rating} yıldızlı bir inceleme bıraktı`)
};

const zh_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 给 ${i?.mod} 打了 ${i?.rating} 星评价`)
};

const ja_signals_review_on_mod = /** @type {(inputs: Signals_Review_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} が ${i?.mod} に星 ${i?.rating} のレビューを投稿しました`)
};

/**
* | output |
* | --- |
* | "{actor} left a {rating}-star review on {mod}" |
*
* @param {Signals_Review_On_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_review_on_mod = /** @type {((inputs: Signals_Review_On_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Review_On_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_review_on_mod(inputs)
	if (locale === "de") return de_signals_review_on_mod(inputs)
	if (locale === "fr") return fr_signals_review_on_mod(inputs)
	if (locale === "it") return it_signals_review_on_mod(inputs)
	if (locale === "nl") return nl_signals_review_on_mod(inputs)
	if (locale === "pl") return pl_signals_review_on_mod(inputs)
	if (locale === "pt") return pt_signals_review_on_mod(inputs)
	if (locale === "ru") return ru_signals_review_on_mod(inputs)
	if (locale === "sv") return sv_signals_review_on_mod(inputs)
	if (locale === "tr") return tr_signals_review_on_mod(inputs)
	if (locale === "zh") return zh_signals_review_on_mod(inputs)
	if (locale === "ja") return ja_signals_review_on_mod(inputs)
	return en_signals_review_on_mod(inputs)
});
