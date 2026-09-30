/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Dialog_LabelInputs */

const en_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search and commands`)
};

const es_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Búsqueda y comandos`)
};

const de_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche und Befehle`)
};

const fr_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche et commandes`)
};

const it_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerca e comandi`)
};

const nl_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken en opdrachten`)
};

const pl_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukiwanie i polecenia`)
};

const pt_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca e comandos`)
};

const ru_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск и команды`)
};

const sv_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök och kommandon`)
};

const tr_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama ve komutlar`)
};

const zh_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索与命令`)
};

const ja_cmdk_dialog_label = /** @type {(inputs: Cmdk_Dialog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索とコマンド`)
};

/**
* | output |
* | --- |
* | "Search and commands" |
*
* @param {Cmdk_Dialog_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_dialog_label = /** @type {((inputs?: Cmdk_Dialog_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Dialog_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_dialog_label(inputs)
	if (locale === "de") return de_cmdk_dialog_label(inputs)
	if (locale === "fr") return fr_cmdk_dialog_label(inputs)
	if (locale === "it") return it_cmdk_dialog_label(inputs)
	if (locale === "nl") return nl_cmdk_dialog_label(inputs)
	if (locale === "pl") return pl_cmdk_dialog_label(inputs)
	if (locale === "pt") return pt_cmdk_dialog_label(inputs)
	if (locale === "ru") return ru_cmdk_dialog_label(inputs)
	if (locale === "sv") return sv_cmdk_dialog_label(inputs)
	if (locale === "tr") return tr_cmdk_dialog_label(inputs)
	if (locale === "zh") return zh_cmdk_dialog_label(inputs)
	if (locale === "ja") return ja_cmdk_dialog_label(inputs)
	return en_cmdk_dialog_label(inputs)
});
