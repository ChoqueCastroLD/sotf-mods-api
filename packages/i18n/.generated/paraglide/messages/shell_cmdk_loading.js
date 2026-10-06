/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_LoadingInputs */

const en_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading search…`)
};

const es_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando la búsqueda…`)
};

const de_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche wird geladen…`)
};

const fr_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement de la recherche…`)
};

const it_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento della ricerca…`)
};

const nl_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken wordt geladen…`)
};

const pl_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ładowanie wyszukiwania…`)
};

const pt_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando a busca…`)
};

const ru_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка поиска…`)
};

const sv_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar sökning…`)
};

const tr_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama yükleniyor…`)
};

const zh_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载搜索…`)
};

const ja_shell_cmdk_loading = /** @type {(inputs: Shell_Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索を読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading search…" |
*
* @param {Shell_Cmdk_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_loading = /** @type {((inputs?: Shell_Cmdk_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_loading(inputs)
	if (locale === "de") return de_shell_cmdk_loading(inputs)
	if (locale === "fr") return fr_shell_cmdk_loading(inputs)
	if (locale === "it") return it_shell_cmdk_loading(inputs)
	if (locale === "nl") return nl_shell_cmdk_loading(inputs)
	if (locale === "pl") return pl_shell_cmdk_loading(inputs)
	if (locale === "pt") return pt_shell_cmdk_loading(inputs)
	if (locale === "ru") return ru_shell_cmdk_loading(inputs)
	if (locale === "sv") return sv_shell_cmdk_loading(inputs)
	if (locale === "tr") return tr_shell_cmdk_loading(inputs)
	if (locale === "zh") return zh_shell_cmdk_loading(inputs)
	if (locale === "ja") return ja_shell_cmdk_loading(inputs)
	return en_shell_cmdk_loading(inputs)
});
