/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_SearchInputs */

const en_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods to mark as incompatible`)
};

const es_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca mods para marcarlos como incompatibles`)
};

const de_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods suchen, die inkompatibel sind`)
};

const fr_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods incompatibles`)
};

const it_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod da segnare come incompatibili`)
};

const nl_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods om als incompatibel te markeren`)
};

const pl_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów do oznaczenia jako niezgodne`)
};

const pt_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquise mods para marcar como incompatíveis`)
};

const ru_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найдите несовместимые моды`)
};

const sv_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar att markera som inkompatibla`)
};

const tr_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz olarak işaretlenecek modları ara`)
};

const zh_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索要标记为不兼容的模组`)
};

const ja_basecamp_compat_incompatible_search = /** @type {(inputs: Basecamp_Compat_Incompatible_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性なしにするModを検索`)
};

/**
* | output |
* | --- |
* | "Search mods to mark as incompatible" |
*
* @param {Basecamp_Compat_Incompatible_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_search = /** @type {((inputs?: Basecamp_Compat_Incompatible_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_search(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_search(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_search(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_search(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_search(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_search(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_search(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_search(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_search(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_search(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_search(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_search(inputs)
	return en_basecamp_compat_incompatible_search(inputs)
});
