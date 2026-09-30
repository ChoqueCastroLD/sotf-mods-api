/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_WorksInputs */

const en_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works`)
};

const es_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const de_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert`)
};

const fr_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne`)
};

const it_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona`)
};

const nl_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt`)
};

const pl_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa`)
};

const pt_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const ru_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает`)
};

const sv_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar`)
};

const tr_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıyor`)
};

const zh_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const ja_basecamp_compat_works = /** @type {(inputs: Basecamp_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作`)
};

/**
* | output |
* | --- |
* | "Works" |
*
* @param {Basecamp_Compat_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_works = /** @type {((inputs?: Basecamp_Compat_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_works(inputs)
	if (locale === "de") return de_basecamp_compat_works(inputs)
	if (locale === "fr") return fr_basecamp_compat_works(inputs)
	if (locale === "it") return it_basecamp_compat_works(inputs)
	if (locale === "nl") return nl_basecamp_compat_works(inputs)
	if (locale === "pl") return pl_basecamp_compat_works(inputs)
	if (locale === "pt") return pt_basecamp_compat_works(inputs)
	if (locale === "ru") return ru_basecamp_compat_works(inputs)
	if (locale === "sv") return sv_basecamp_compat_works(inputs)
	if (locale === "tr") return tr_basecamp_compat_works(inputs)
	if (locale === "zh") return zh_basecamp_compat_works(inputs)
	if (locale === "ja") return ja_basecamp_compat_works(inputs)
	return en_basecamp_compat_works(inputs)
});
