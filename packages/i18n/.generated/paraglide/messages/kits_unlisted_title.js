/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Unlisted_TitleInputs */

const en_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlisted.`)
};

const es_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No listado.`)
};

const de_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gelistet.`)
};

const fr_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non répertorié.`)
};

const it_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non in elenco.`)
};

const nl_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet vermeld.`)
};

const pl_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepubliczny.`)
};

const pt_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não listado.`)
};

const ru_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не в каталоге.`)
};

const sv_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olistat.`)
};

const tr_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelenmemiş.`)
};

const zh_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未公开列出。`)
};

const ja_kits_unlisted_title = /** @type {(inputs: Kits_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`限定公開。`)
};

/**
* | output |
* | --- |
* | "Unlisted." |
*
* @param {Kits_Unlisted_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_unlisted_title = /** @type {((inputs?: Kits_Unlisted_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Unlisted_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_unlisted_title(inputs)
	if (locale === "de") return de_kits_unlisted_title(inputs)
	if (locale === "fr") return fr_kits_unlisted_title(inputs)
	if (locale === "it") return it_kits_unlisted_title(inputs)
	if (locale === "nl") return nl_kits_unlisted_title(inputs)
	if (locale === "pl") return pl_kits_unlisted_title(inputs)
	if (locale === "pt") return pt_kits_unlisted_title(inputs)
	if (locale === "ru") return ru_kits_unlisted_title(inputs)
	if (locale === "sv") return sv_kits_unlisted_title(inputs)
	if (locale === "tr") return tr_kits_unlisted_title(inputs)
	if (locale === "zh") return zh_kits_unlisted_title(inputs)
	if (locale === "ja") return ja_kits_unlisted_title(inputs)
	return en_kits_unlisted_title(inputs)
});
