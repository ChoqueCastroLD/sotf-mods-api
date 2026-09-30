/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Basecamp_Badges_Earned_OnInputs */

const en_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Earned on ${i?.date}`)
};

const es_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conseguida el ${i?.date}`)
};

const de_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verdient am ${i?.date}`)
};

const fr_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obtenu le ${i?.date}`)
};

const it_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ottenuto il ${i?.date}`)
};

const nl_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verdiend op ${i?.date}`)
};

const pl_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zdobyta ${i?.date}`)
};

const pt_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conquistada em ${i?.date}`)
};

const ru_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Получен ${i?.date}`)
};

const sv_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Intjänat ${i?.date}`)
};

const tr_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde kazanıldı`)
};

const zh_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`获得于 ${i?.date}`)
};

const ja_basecamp_badges_earned_on = /** @type {(inputs: Basecamp_Badges_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に獲得`)
};

/**
* | output |
* | --- |
* | "Earned on {date}" |
*
* @param {Basecamp_Badges_Earned_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_earned_on = /** @type {((inputs: Basecamp_Badges_Earned_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Earned_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_earned_on(inputs)
	if (locale === "de") return de_basecamp_badges_earned_on(inputs)
	if (locale === "fr") return fr_basecamp_badges_earned_on(inputs)
	if (locale === "it") return it_basecamp_badges_earned_on(inputs)
	if (locale === "nl") return nl_basecamp_badges_earned_on(inputs)
	if (locale === "pl") return pl_basecamp_badges_earned_on(inputs)
	if (locale === "pt") return pt_basecamp_badges_earned_on(inputs)
	if (locale === "ru") return ru_basecamp_badges_earned_on(inputs)
	if (locale === "sv") return sv_basecamp_badges_earned_on(inputs)
	if (locale === "tr") return tr_basecamp_badges_earned_on(inputs)
	if (locale === "zh") return zh_basecamp_badges_earned_on(inputs)
	if (locale === "ja") return ja_basecamp_badges_earned_on(inputs)
	return en_basecamp_badges_earned_on(inputs)
});
