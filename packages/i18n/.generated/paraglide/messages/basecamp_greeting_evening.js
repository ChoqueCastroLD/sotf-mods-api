/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Greeting_EveningInputs */

const en_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Good evening, ${i?.name}`)
};

const es_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buenas noches, ${i?.name}`)
};

const de_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Guten Abend, ${i?.name}`)
};

const fr_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bonsoir, ${i?.name}`)
};

const it_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buonasera, ${i?.name}`)
};

const nl_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Goedenavond, ${i?.name}`)
};

const pl_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dobry wieczór, ${i?.name}`)
};

const pt_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Boa noite, ${i?.name}`)
};

const ru_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добрый вечер, ${i?.name}`)
};

const sv_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`God kväll, ${i?.name}`)
};

const tr_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İyi akşamlar, ${i?.name}`)
};

const zh_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`晚上好，${i?.name}`)
};

const ja_basecamp_greeting_evening = /** @type {(inputs: Basecamp_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`こんばんは、${i?.name} さん`)
};

/**
* | output |
* | --- |
* | "Good evening, {name}" |
*
* @param {Basecamp_Greeting_EveningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_greeting_evening = /** @type {((inputs: Basecamp_Greeting_EveningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_EveningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_greeting_evening(inputs)
	if (locale === "de") return de_basecamp_greeting_evening(inputs)
	if (locale === "fr") return fr_basecamp_greeting_evening(inputs)
	if (locale === "it") return it_basecamp_greeting_evening(inputs)
	if (locale === "nl") return nl_basecamp_greeting_evening(inputs)
	if (locale === "pl") return pl_basecamp_greeting_evening(inputs)
	if (locale === "pt") return pt_basecamp_greeting_evening(inputs)
	if (locale === "ru") return ru_basecamp_greeting_evening(inputs)
	if (locale === "sv") return sv_basecamp_greeting_evening(inputs)
	if (locale === "tr") return tr_basecamp_greeting_evening(inputs)
	if (locale === "zh") return zh_basecamp_greeting_evening(inputs)
	if (locale === "ja") return ja_basecamp_greeting_evening(inputs)
	return en_basecamp_greeting_evening(inputs)
});
