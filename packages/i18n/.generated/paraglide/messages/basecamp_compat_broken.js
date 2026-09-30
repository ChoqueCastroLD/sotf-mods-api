/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_BrokenInputs */

const en_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken`)
};

const es_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roto`)
};

const de_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaputt`)
};

const fr_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassé`)
};

const it_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona`)
};

const nl_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot`)
};

const pl_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrado`)
};

const ru_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает`)
};

const sv_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig`)
};

const tr_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk`)
};

const zh_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`损坏`)
};

const ja_basecamp_compat_broken = /** @type {(inputs: Basecamp_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作しない`)
};

/**
* | output |
* | --- |
* | "Broken" |
*
* @param {Basecamp_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_broken = /** @type {((inputs?: Basecamp_Compat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_broken(inputs)
	if (locale === "de") return de_basecamp_compat_broken(inputs)
	if (locale === "fr") return fr_basecamp_compat_broken(inputs)
	if (locale === "it") return it_basecamp_compat_broken(inputs)
	if (locale === "nl") return nl_basecamp_compat_broken(inputs)
	if (locale === "pl") return pl_basecamp_compat_broken(inputs)
	if (locale === "pt") return pt_basecamp_compat_broken(inputs)
	if (locale === "ru") return ru_basecamp_compat_broken(inputs)
	if (locale === "sv") return sv_basecamp_compat_broken(inputs)
	if (locale === "tr") return tr_basecamp_compat_broken(inputs)
	if (locale === "zh") return zh_basecamp_compat_broken(inputs)
	if (locale === "ja") return ja_basecamp_compat_broken(inputs)
	return en_basecamp_compat_broken(inputs)
});
