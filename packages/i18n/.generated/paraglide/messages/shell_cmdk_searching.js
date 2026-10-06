/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_SearchingInputs */

const en_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Searching…`)
};

const es_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando…`)
};

const de_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche läuft…`)
};

const fr_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche en cours…`)
};

const it_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerca in corso…`)
};

const nl_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken…`)
};

const pl_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukanie…`)
};

const pt_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando…`)
};

const ru_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск…`)
};

const sv_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Söker…`)
};

const tr_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aranıyor…`)
};

const zh_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在搜索…`)
};

const ja_shell_cmdk_searching = /** @type {(inputs: Shell_Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索中…`)
};

/**
* | output |
* | --- |
* | "Searching…" |
*
* @param {Shell_Cmdk_SearchingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_searching = /** @type {((inputs?: Shell_Cmdk_SearchingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_SearchingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_searching(inputs)
	if (locale === "de") return de_shell_cmdk_searching(inputs)
	if (locale === "fr") return fr_shell_cmdk_searching(inputs)
	if (locale === "it") return it_shell_cmdk_searching(inputs)
	if (locale === "nl") return nl_shell_cmdk_searching(inputs)
	if (locale === "pl") return pl_shell_cmdk_searching(inputs)
	if (locale === "pt") return pt_shell_cmdk_searching(inputs)
	if (locale === "ru") return ru_shell_cmdk_searching(inputs)
	if (locale === "sv") return sv_shell_cmdk_searching(inputs)
	if (locale === "tr") return tr_shell_cmdk_searching(inputs)
	if (locale === "zh") return zh_shell_cmdk_searching(inputs)
	if (locale === "ja") return ja_shell_cmdk_searching(inputs)
	return en_shell_cmdk_searching(inputs)
});
