/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_NoneInputs */

const en_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No incompatible mods.`)
};

const es_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin mods incompatibles.`)
};

const de_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine inkompatiblen Mods.`)
};

const fr_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod incompatible.`)
};

const it_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun mod incompatibile.`)
};

const nl_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen incompatibele mods.`)
};

const pl_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak niezgodnych modów.`)
};

const pt_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod incompatível.`)
};

const ru_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несовместимых модов нет.`)
};

const sv_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga inkompatibla moddar.`)
};

const tr_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz mod yok.`)
};

const zh_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有不兼容的模组。`)
};

const ja_basecamp_compat_incompatible_none = /** @type {(inputs: Basecamp_Compat_Incompatible_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性のないModはありません。`)
};

/**
* | output |
* | --- |
* | "No incompatible mods." |
*
* @param {Basecamp_Compat_Incompatible_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_none = /** @type {((inputs?: Basecamp_Compat_Incompatible_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_none(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_none(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_none(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_none(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_none(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_none(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_none(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_none(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_none(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_none(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_none(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_none(inputs)
	return en_basecamp_compat_incompatible_none(inputs)
});
