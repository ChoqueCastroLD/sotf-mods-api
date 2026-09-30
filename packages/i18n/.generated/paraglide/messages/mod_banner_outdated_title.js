/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Outdated_TitleInputs */

const en_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possibly outdated.`)
};

const es_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posiblemente desactualizado.`)
};

const de_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Möglicherweise veraltet.`)
};

const fr_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut-être obsolète.`)
};

const it_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forse obsoleta.`)
};

const nl_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mogelijk verouderd.`)
};

const pl_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Możliwie nieaktualny.`)
};

const pt_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possivelmente desatualizado.`)
};

const ru_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Возможно, устарел.`)
};

const sv_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanske inaktuell.`)
};

const tr_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel olmayabilir.`)
};

const zh_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可能已过时。`)
};

const ja_mod_banner_outdated_title = /** @type {(inputs: Mod_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い可能性があります。`)
};

/**
* | output |
* | --- |
* | "Possibly outdated." |
*
* @param {Mod_Banner_Outdated_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_outdated_title = /** @type {((inputs?: Mod_Banner_Outdated_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Outdated_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_outdated_title(inputs)
	if (locale === "de") return de_mod_banner_outdated_title(inputs)
	if (locale === "fr") return fr_mod_banner_outdated_title(inputs)
	if (locale === "it") return it_mod_banner_outdated_title(inputs)
	if (locale === "nl") return nl_mod_banner_outdated_title(inputs)
	if (locale === "pl") return pl_mod_banner_outdated_title(inputs)
	if (locale === "pt") return pt_mod_banner_outdated_title(inputs)
	if (locale === "ru") return ru_mod_banner_outdated_title(inputs)
	if (locale === "sv") return sv_mod_banner_outdated_title(inputs)
	if (locale === "tr") return tr_mod_banner_outdated_title(inputs)
	if (locale === "zh") return zh_mod_banner_outdated_title(inputs)
	if (locale === "ja") return ja_mod_banner_outdated_title(inputs)
	return en_mod_banner_outdated_title(inputs)
});
