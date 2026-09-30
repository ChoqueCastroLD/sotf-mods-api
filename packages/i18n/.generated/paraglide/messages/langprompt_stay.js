/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Langprompt_StayInputs */

const en_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stay in ${i?.language}`)
};

const es_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quedarme en ${i?.language}`)
};

const de_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bei ${i?.language} bleiben`)
};

const fr_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rester en ${i?.language}`)
};

const it_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resta in ${i?.language}`)
};

const nl_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Blijf in het ${i?.language}`)
};

const pl_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zostań przy: ${i?.language}`)
};

const pt_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ficar em ${i?.language}`)
};

const ru_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Остаться: ${i?.language}`)
};

const sv_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stanna kvar på ${i?.language}`)
};

const tr_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language} dilinde kal`)
};

const zh_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`继续使用${i?.language}`)
};

const ja_langprompt_stay = /** @type {(inputs: Langprompt_StayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language}のままにする`)
};

/**
* | output |
* | --- |
* | "Stay in {language}" |
*
* @param {Langprompt_StayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const langprompt_stay = /** @type {((inputs: Langprompt_StayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_StayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_langprompt_stay(inputs)
	if (locale === "de") return de_langprompt_stay(inputs)
	if (locale === "fr") return fr_langprompt_stay(inputs)
	if (locale === "it") return it_langprompt_stay(inputs)
	if (locale === "nl") return nl_langprompt_stay(inputs)
	if (locale === "pl") return pl_langprompt_stay(inputs)
	if (locale === "pt") return pt_langprompt_stay(inputs)
	if (locale === "ru") return ru_langprompt_stay(inputs)
	if (locale === "sv") return sv_langprompt_stay(inputs)
	if (locale === "tr") return tr_langprompt_stay(inputs)
	if (locale === "zh") return zh_langprompt_stay(inputs)
	if (locale === "ja") return ja_langprompt_stay(inputs)
	return en_langprompt_stay(inputs)
});
