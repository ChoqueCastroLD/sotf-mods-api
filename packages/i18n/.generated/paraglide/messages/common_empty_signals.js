/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Empty_SignalsInputs */

const en_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All quiet in the woods.`)
};

const es_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo tranquilo en el bosque.`)
};

const de_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles ruhig im Wald.`)
};

const fr_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout est calme dans les bois.`)
};

const it_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto tranquillo nel bosco.`)
};

const nl_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles rustig in het bos.`)
};

const pl_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W lesie panuje cisza.`)
};

const pt_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo tranquilo na floresta.`)
};

const ru_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В лесу всё спокойно.`)
};

const sv_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt är lugnt i skogen.`)
};

const tr_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ormanda her şey sakin.`)
};

const zh_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`林间一片寂静。`)
};

const ja_common_empty_signals = /** @type {(inputs: Common_Empty_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`森は静まり返っています。`)
};

/**
* | output |
* | --- |
* | "All quiet in the woods." |
*
* @param {Common_Empty_SignalsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_empty_signals = /** @type {((inputs?: Common_Empty_SignalsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Empty_SignalsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_empty_signals(inputs)
	if (locale === "de") return de_common_empty_signals(inputs)
	if (locale === "fr") return fr_common_empty_signals(inputs)
	if (locale === "it") return it_common_empty_signals(inputs)
	if (locale === "nl") return nl_common_empty_signals(inputs)
	if (locale === "pl") return pl_common_empty_signals(inputs)
	if (locale === "pt") return pt_common_empty_signals(inputs)
	if (locale === "ru") return ru_common_empty_signals(inputs)
	if (locale === "sv") return sv_common_empty_signals(inputs)
	if (locale === "tr") return tr_common_empty_signals(inputs)
	if (locale === "zh") return zh_common_empty_signals(inputs)
	if (locale === "ja") return ja_common_empty_signals(inputs)
	return en_common_empty_signals(inputs)
});
