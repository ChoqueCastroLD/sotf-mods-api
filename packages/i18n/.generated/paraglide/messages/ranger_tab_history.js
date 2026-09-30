/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Tab_HistoryInputs */

const en_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Author history`)
};

const es_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial del autor`)
};

const de_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlauf des Autors`)
};

const fr_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique de l’auteur`)
};

const it_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storico dell’autore`)
};

const nl_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geschiedenis van de maker`)
};

const pl_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia autora`)
};

const pt_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico do autor`)
};

const ru_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История автора`)
};

const sv_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparens historik`)
};

const tr_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazarın geçmişi`)
};

const zh_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者记录`)
};

const ja_ranger_tab_history = /** @type {(inputs: Ranger_Tab_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者の履歴`)
};

/**
* | output |
* | --- |
* | "Author history" |
*
* @param {Ranger_Tab_HistoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_tab_history = /** @type {((inputs?: Ranger_Tab_HistoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Tab_HistoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_tab_history(inputs)
	if (locale === "de") return de_ranger_tab_history(inputs)
	if (locale === "fr") return fr_ranger_tab_history(inputs)
	if (locale === "it") return it_ranger_tab_history(inputs)
	if (locale === "nl") return nl_ranger_tab_history(inputs)
	if (locale === "pl") return pl_ranger_tab_history(inputs)
	if (locale === "pt") return pt_ranger_tab_history(inputs)
	if (locale === "ru") return ru_ranger_tab_history(inputs)
	if (locale === "sv") return sv_ranger_tab_history(inputs)
	if (locale === "tr") return tr_ranger_tab_history(inputs)
	if (locale === "zh") return zh_ranger_tab_history(inputs)
	if (locale === "ja") return ja_ranger_tab_history(inputs)
	return en_ranger_tab_history(inputs)
});
