/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_SearchInputs */

const en_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods and libraries on SOTF Mods`)
};

const es_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods y librerías en SOTF Mods`)
};

const de_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods und Bibliotheken auf SOTF Mods suchen`)
};

const fr_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods et bibliothèques sur SOTF Mods`)
};

const it_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod e librerie su SOTF Mods`)
};

const nl_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en bibliotheken zoeken op SOTF Mods`)
};

const pl_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów i bibliotek w SOTF Mods`)
};

const pt_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods e bibliotecas no SOTF Mods`)
};

const ru_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Искать моды и библиотеки на SOTF Mods`)
};

const sv_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar och bibliotek på SOTF Mods`)
};

const tr_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta mod ve kütüphane ara`)
};

const zh_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 SOTF Mods 上搜索模组和前置库`)
};

const ja_upload_dependency_search = /** @type {(inputs: Upload_Dependency_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF ModsでMODやライブラリを検索`)
};

/**
* | output |
* | --- |
* | "Search mods and libraries on SOTF Mods" |
*
* @param {Upload_Dependency_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_search = /** @type {((inputs?: Upload_Dependency_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_search(inputs)
	if (locale === "de") return de_upload_dependency_search(inputs)
	if (locale === "fr") return fr_upload_dependency_search(inputs)
	if (locale === "it") return it_upload_dependency_search(inputs)
	if (locale === "nl") return nl_upload_dependency_search(inputs)
	if (locale === "pl") return pl_upload_dependency_search(inputs)
	if (locale === "pt") return pt_upload_dependency_search(inputs)
	if (locale === "ru") return ru_upload_dependency_search(inputs)
	if (locale === "sv") return sv_upload_dependency_search(inputs)
	if (locale === "tr") return tr_upload_dependency_search(inputs)
	if (locale === "zh") return zh_upload_dependency_search(inputs)
	if (locale === "ja") return ja_upload_dependency_search(inputs)
	return en_upload_dependency_search(inputs)
});
