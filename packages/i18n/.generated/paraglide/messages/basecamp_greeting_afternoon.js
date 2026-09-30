/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Greeting_AfternoonInputs */

const en_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Good afternoon, ${i?.name}`)
};

const es_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buenas tardes, ${i?.name}`)
};

const de_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Guten Tag, ${i?.name}`)
};

const fr_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bon après-midi, ${i?.name}`)
};

const it_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buon pomeriggio, ${i?.name}`)
};

const nl_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Goedemiddag, ${i?.name}`)
};

const pl_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dzień dobry, ${i?.name}`)
};

const pt_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Boa tarde, ${i?.name}`)
};

const ru_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добрый день, ${i?.name}`)
};

const sv_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`God eftermiddag, ${i?.name}`)
};

const tr_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İyi günler, ${i?.name}`)
};

const zh_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下午好，${i?.name}`)
};

const ja_basecamp_greeting_afternoon = /** @type {(inputs: Basecamp_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`こんにちは、${i?.name} さん`)
};

/**
* | output |
* | --- |
* | "Good afternoon, {name}" |
*
* @param {Basecamp_Greeting_AfternoonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_greeting_afternoon = /** @type {((inputs: Basecamp_Greeting_AfternoonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_AfternoonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_greeting_afternoon(inputs)
	if (locale === "de") return de_basecamp_greeting_afternoon(inputs)
	if (locale === "fr") return fr_basecamp_greeting_afternoon(inputs)
	if (locale === "it") return it_basecamp_greeting_afternoon(inputs)
	if (locale === "nl") return nl_basecamp_greeting_afternoon(inputs)
	if (locale === "pl") return pl_basecamp_greeting_afternoon(inputs)
	if (locale === "pt") return pt_basecamp_greeting_afternoon(inputs)
	if (locale === "ru") return ru_basecamp_greeting_afternoon(inputs)
	if (locale === "sv") return sv_basecamp_greeting_afternoon(inputs)
	if (locale === "tr") return tr_basecamp_greeting_afternoon(inputs)
	if (locale === "zh") return zh_basecamp_greeting_afternoon(inputs)
	if (locale === "ja") return ja_basecamp_greeting_afternoon(inputs)
	return en_basecamp_greeting_afternoon(inputs)
});
