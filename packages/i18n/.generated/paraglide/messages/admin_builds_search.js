/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_SearchInputs */

const en_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search by label or Steam build ID`)
};

const es_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por build o ID de build de Steam`)
};

const de_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Build oder Steam-Build-ID suchen`)
};

const fr_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher par build ou ID de build Steam`)
};

const it_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca per build o ID build di Steam`)
};

const nl_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek op build of Steam-build-ID`)
};

const pl_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj po buildzie lub ID buildu Steam`)
};

const pt_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por build ou ID do build na Steam`)
};

const ru_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по сборке или ID сборки Steam`)
};

const sv_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök på bygge eller Steam-bygg-ID`)
};

const tr_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüme ya da Steam sürüm kimliğine göre ara`)
};

const zh_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按版本或 Steam 版本 ID 搜索`)
};

const ja_admin_builds_search = /** @type {(inputs: Admin_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルドまたは Steam ビルド ID で検索`)
};

/**
* | output |
* | --- |
* | "Search by label or Steam build ID" |
*
* @param {Admin_Builds_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_search = /** @type {((inputs?: Admin_Builds_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_search(inputs)
	if (locale === "de") return de_admin_builds_search(inputs)
	if (locale === "fr") return fr_admin_builds_search(inputs)
	if (locale === "it") return it_admin_builds_search(inputs)
	if (locale === "nl") return nl_admin_builds_search(inputs)
	if (locale === "pl") return pl_admin_builds_search(inputs)
	if (locale === "pt") return pt_admin_builds_search(inputs)
	if (locale === "ru") return ru_admin_builds_search(inputs)
	if (locale === "sv") return sv_admin_builds_search(inputs)
	if (locale === "tr") return tr_admin_builds_search(inputs)
	if (locale === "zh") return zh_admin_builds_search(inputs)
	if (locale === "ja") return ja_admin_builds_search(inputs)
	return en_admin_builds_search(inputs)
});
