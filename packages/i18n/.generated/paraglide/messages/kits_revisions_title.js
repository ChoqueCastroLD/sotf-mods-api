/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Revisions_TitleInputs */

const en_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisions`)
};

const es_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisiones`)
};

const de_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisionen`)
};

const fr_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Révisions`)
};

const it_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisioni`)
};

const nl_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisies`)
};

const pl_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje`)
};

const pt_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisões`)
};

const ru_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редакции`)
};

const sv_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisioner`)
};

const tr_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revizyonlar`)
};

const zh_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修订记录`)
};

const ja_kits_revisions_title = /** @type {(inputs: Kits_Revisions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新履歴`)
};

/**
* | output |
* | --- |
* | "Revisions" |
*
* @param {Kits_Revisions_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_revisions_title = /** @type {((inputs?: Kits_Revisions_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Revisions_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_revisions_title(inputs)
	if (locale === "de") return de_kits_revisions_title(inputs)
	if (locale === "fr") return fr_kits_revisions_title(inputs)
	if (locale === "it") return it_kits_revisions_title(inputs)
	if (locale === "nl") return nl_kits_revisions_title(inputs)
	if (locale === "pl") return pl_kits_revisions_title(inputs)
	if (locale === "pt") return pt_kits_revisions_title(inputs)
	if (locale === "ru") return ru_kits_revisions_title(inputs)
	if (locale === "sv") return sv_kits_revisions_title(inputs)
	if (locale === "tr") return tr_kits_revisions_title(inputs)
	if (locale === "zh") return zh_kits_revisions_title(inputs)
	if (locale === "ja") return ja_kits_revisions_title(inputs)
	return en_kits_revisions_title(inputs)
});
