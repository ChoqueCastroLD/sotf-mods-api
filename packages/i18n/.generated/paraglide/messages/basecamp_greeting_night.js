/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Greeting_NightInputs */

const en_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Late shift, ${i?.name}`)
};

const es_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Turno de noche, ${i?.name}`)
};

const de_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nachtschicht, ${i?.name}`)
};

const fr_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Garde de nuit, ${i?.name}`)
};

const it_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Turno di notte, ${i?.name}`)
};

const nl_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nachtdienst, ${i?.name}`)
};

const pl_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nocna zmiana, ${i?.name}`)
};

const pt_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Turno da noite, ${i?.name}`)
};

const ru_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ночная смена, ${i?.name}`)
};

const sv_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nattpass, ${i?.name}`)
};

const tr_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gece nöbeti, ${i?.name}`)
};

const zh_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`夜班辛苦了，${i?.name}`)
};

const ja_basecamp_greeting_night = /** @type {(inputs: Basecamp_Greeting_NightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`夜勤おつかれさまです、${i?.name} さん`)
};

/**
* | output |
* | --- |
* | "Late shift, {name}" |
*
* @param {Basecamp_Greeting_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_greeting_night = /** @type {((inputs: Basecamp_Greeting_NightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_NightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_greeting_night(inputs)
	if (locale === "de") return de_basecamp_greeting_night(inputs)
	if (locale === "fr") return fr_basecamp_greeting_night(inputs)
	if (locale === "it") return it_basecamp_greeting_night(inputs)
	if (locale === "nl") return nl_basecamp_greeting_night(inputs)
	if (locale === "pl") return pl_basecamp_greeting_night(inputs)
	if (locale === "pt") return pt_basecamp_greeting_night(inputs)
	if (locale === "ru") return ru_basecamp_greeting_night(inputs)
	if (locale === "sv") return sv_basecamp_greeting_night(inputs)
	if (locale === "tr") return tr_basecamp_greeting_night(inputs)
	if (locale === "zh") return zh_basecamp_greeting_night(inputs)
	if (locale === "ja") return ja_basecamp_greeting_night(inputs)
	return en_basecamp_greeting_night(inputs)
});
