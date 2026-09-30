/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Compat_BrokenInputs */

const en_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken`)
};

const es_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roto`)
};

const de_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defekt`)
};

const fr_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassé`)
};

const it_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona`)
};

const nl_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot`)
};

const pl_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrado`)
};

const ru_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает`)
};

const sv_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig`)
};

const tr_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk`)
};

const zh_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失效`)
};

const ja_cmdk_compat_broken = /** @type {(inputs: Cmdk_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作不可`)
};

/**
* | output |
* | --- |
* | "Broken" |
*
* @param {Cmdk_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_compat_broken = /** @type {((inputs?: Cmdk_Compat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Compat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_compat_broken(inputs)
	if (locale === "de") return de_cmdk_compat_broken(inputs)
	if (locale === "fr") return fr_cmdk_compat_broken(inputs)
	if (locale === "it") return it_cmdk_compat_broken(inputs)
	if (locale === "nl") return nl_cmdk_compat_broken(inputs)
	if (locale === "pl") return pl_cmdk_compat_broken(inputs)
	if (locale === "pt") return pt_cmdk_compat_broken(inputs)
	if (locale === "ru") return ru_cmdk_compat_broken(inputs)
	if (locale === "sv") return sv_cmdk_compat_broken(inputs)
	if (locale === "tr") return tr_cmdk_compat_broken(inputs)
	if (locale === "zh") return zh_cmdk_compat_broken(inputs)
	if (locale === "ja") return ja_cmdk_compat_broken(inputs)
	return en_cmdk_compat_broken(inputs)
});
