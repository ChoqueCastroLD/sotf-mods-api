/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_ServerInputs */

const en_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From the full search`)
};

const es_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De la búsqueda completa`)
};

const de_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus der vollständigen Suche`)
};

const fr_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De la recherche complète`)
};

const it_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalla ricerca completa`)
};

const nl_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit de volledige zoekopdracht`)
};

const pl_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z pełnego wyszukiwania`)
};

const pt_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da busca completa`)
};

const ru_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Из полного поиска`)
};

const sv_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Från den fullständiga sökningen`)
};

const tr_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam aramadan`)
};

const zh_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自完整搜索`)
};

const ja_cmdk_group_server = /** @type {(inputs: Cmdk_Group_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全文検索から`)
};

/**
* | output |
* | --- |
* | "From the full search" |
*
* @param {Cmdk_Group_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_server = /** @type {((inputs?: Cmdk_Group_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_server(inputs)
	if (locale === "de") return de_cmdk_group_server(inputs)
	if (locale === "fr") return fr_cmdk_group_server(inputs)
	if (locale === "it") return it_cmdk_group_server(inputs)
	if (locale === "nl") return nl_cmdk_group_server(inputs)
	if (locale === "pl") return pl_cmdk_group_server(inputs)
	if (locale === "pt") return pt_cmdk_group_server(inputs)
	if (locale === "ru") return ru_cmdk_group_server(inputs)
	if (locale === "sv") return sv_cmdk_group_server(inputs)
	if (locale === "tr") return tr_cmdk_group_server(inputs)
	if (locale === "zh") return zh_cmdk_group_server(inputs)
	if (locale === "ja") return ja_cmdk_group_server(inputs)
	return en_cmdk_group_server(inputs)
});
