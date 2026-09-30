/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Greeting_MorningInputs */

const en_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Good morning, ${i?.name}`)
};

const es_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buenos días, ${i?.name}`)
};

const de_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Guten Morgen, ${i?.name}`)
};

const fr_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bonjour, ${i?.name}`)
};

const it_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buongiorno, ${i?.name}`)
};

const nl_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Goedemorgen, ${i?.name}`)
};

const pl_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dzień dobry, ${i?.name}`)
};

const pt_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bom dia, ${i?.name}`)
};

const ru_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Доброе утро, ${i?.name}`)
};

const sv_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`God morgon, ${i?.name}`)
};

const tr_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Günaydın, ${i?.name}`)
};

const zh_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`早上好，${i?.name}`)
};

const ja_basecamp_greeting_morning = /** @type {(inputs: Basecamp_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`おはようございます、${i?.name} さん`)
};

/**
* | output |
* | --- |
* | "Good morning, {name}" |
*
* @param {Basecamp_Greeting_MorningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_greeting_morning = /** @type {((inputs: Basecamp_Greeting_MorningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_MorningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_greeting_morning(inputs)
	if (locale === "de") return de_basecamp_greeting_morning(inputs)
	if (locale === "fr") return fr_basecamp_greeting_morning(inputs)
	if (locale === "it") return it_basecamp_greeting_morning(inputs)
	if (locale === "nl") return nl_basecamp_greeting_morning(inputs)
	if (locale === "pl") return pl_basecamp_greeting_morning(inputs)
	if (locale === "pt") return pt_basecamp_greeting_morning(inputs)
	if (locale === "ru") return ru_basecamp_greeting_morning(inputs)
	if (locale === "sv") return sv_basecamp_greeting_morning(inputs)
	if (locale === "tr") return tr_basecamp_greeting_morning(inputs)
	if (locale === "zh") return zh_basecamp_greeting_morning(inputs)
	if (locale === "ja") return ja_basecamp_greeting_morning(inputs)
	return en_basecamp_greeting_morning(inputs)
});
