/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Hint_AskInputs */

const en_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask`)
};

const es_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntar`)
};

const de_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fragen`)
};

const fr_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander`)
};

const it_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi`)
};

const nl_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vragen`)
};

const pl_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapytaj`)
};

const pt_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntar`)
};

const ru_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спросить`)
};

const sv_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga`)
};

const tr_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sor`)
};

const zh_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提问`)
};

const ja_cmdk_scout_hint_ask = /** @type {(inputs: Cmdk_Scout_Hint_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`聞く`)
};

/**
* | output |
* | --- |
* | "Ask" |
*
* @param {Cmdk_Scout_Hint_AskInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_hint_ask = /** @type {((inputs?: Cmdk_Scout_Hint_AskInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Hint_AskInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_hint_ask(inputs)
	if (locale === "de") return de_cmdk_scout_hint_ask(inputs)
	if (locale === "fr") return fr_cmdk_scout_hint_ask(inputs)
	if (locale === "it") return it_cmdk_scout_hint_ask(inputs)
	if (locale === "nl") return nl_cmdk_scout_hint_ask(inputs)
	if (locale === "pl") return pl_cmdk_scout_hint_ask(inputs)
	if (locale === "pt") return pt_cmdk_scout_hint_ask(inputs)
	if (locale === "ru") return ru_cmdk_scout_hint_ask(inputs)
	if (locale === "sv") return sv_cmdk_scout_hint_ask(inputs)
	if (locale === "tr") return tr_cmdk_scout_hint_ask(inputs)
	if (locale === "zh") return zh_cmdk_scout_hint_ask(inputs)
	if (locale === "ja") return ja_cmdk_scout_hint_ask(inputs)
	return en_cmdk_scout_hint_ask(inputs)
});
