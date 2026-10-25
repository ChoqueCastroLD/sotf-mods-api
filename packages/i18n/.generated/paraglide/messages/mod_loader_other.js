/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Loader_OtherInputs */

const en_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
};

const es_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro`)
};

const de_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere`)
};

const fr_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre`)
};

const it_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anders`)
};

const pl_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inny`)
};

const pt_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro`)
};

const ru_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другой`)
};

const sv_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annan`)
};

const tr_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer`)
};

const zh_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_mod_loader_other = /** @type {(inputs: Mod_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Other" |
*
* @param {Mod_Loader_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_loader_other = /** @type {((inputs?: Mod_Loader_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Loader_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_loader_other(inputs)
	if (locale === "de") return de_mod_loader_other(inputs)
	if (locale === "fr") return fr_mod_loader_other(inputs)
	if (locale === "it") return it_mod_loader_other(inputs)
	if (locale === "nl") return nl_mod_loader_other(inputs)
	if (locale === "pl") return pl_mod_loader_other(inputs)
	if (locale === "pt") return pt_mod_loader_other(inputs)
	if (locale === "ru") return ru_mod_loader_other(inputs)
	if (locale === "sv") return sv_mod_loader_other(inputs)
	if (locale === "tr") return tr_mod_loader_other(inputs)
	if (locale === "zh") return zh_mod_loader_other(inputs)
	if (locale === "ja") return ja_mod_loader_other(inputs)
	return en_mod_loader_other(inputs)
});
