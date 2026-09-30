/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Compat_WorksInputs */

const en_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works`)
};

const es_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const de_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert`)
};

const fr_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne`)
};

const it_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona`)
};

const nl_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt`)
};

const pl_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa`)
};

const pt_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const ru_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает`)
};

const sv_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar`)
};

const tr_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıyor`)
};

const zh_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const ja_cmdk_compat_works = /** @type {(inputs: Cmdk_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作`)
};

/**
* | output |
* | --- |
* | "Works" |
*
* @param {Cmdk_Compat_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_compat_works = /** @type {((inputs?: Cmdk_Compat_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Compat_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_compat_works(inputs)
	if (locale === "de") return de_cmdk_compat_works(inputs)
	if (locale === "fr") return fr_cmdk_compat_works(inputs)
	if (locale === "it") return it_cmdk_compat_works(inputs)
	if (locale === "nl") return nl_cmdk_compat_works(inputs)
	if (locale === "pl") return pl_cmdk_compat_works(inputs)
	if (locale === "pt") return pt_cmdk_compat_works(inputs)
	if (locale === "ru") return ru_cmdk_compat_works(inputs)
	if (locale === "sv") return sv_cmdk_compat_works(inputs)
	if (locale === "tr") return tr_cmdk_compat_works(inputs)
	if (locale === "zh") return zh_cmdk_compat_works(inputs)
	if (locale === "ja") return ja_cmdk_compat_works(inputs)
	return en_cmdk_compat_works(inputs)
});
