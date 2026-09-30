/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Notes_AllInputs */

const en_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All recent updates`)
};

const es_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las actualizaciones recientes`)
};

const de_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle aktuellen Updates`)
};

const fr_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les mises à jour récentes`)
};

const it_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti gli aggiornamenti recenti`)
};

const nl_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle recente updates`)
};

const pl_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie ostatnie aktualizacje`)
};

const pt_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as atualizações recentes`)
};

const ru_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все недавние обновления`)
};

const sv_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla senaste uppdateringar`)
};

const tr_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm son güncellemeler`)
};

const zh_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部近期更新`)
};

const ja_landing_notes_all = /** @type {(inputs: Landing_Notes_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近のアップデートをすべて見る`)
};

/**
* | output |
* | --- |
* | "All recent updates" |
*
* @param {Landing_Notes_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_notes_all = /** @type {((inputs?: Landing_Notes_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Notes_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_notes_all(inputs)
	if (locale === "de") return de_landing_notes_all(inputs)
	if (locale === "fr") return fr_landing_notes_all(inputs)
	if (locale === "it") return it_landing_notes_all(inputs)
	if (locale === "nl") return nl_landing_notes_all(inputs)
	if (locale === "pl") return pl_landing_notes_all(inputs)
	if (locale === "pt") return pt_landing_notes_all(inputs)
	if (locale === "ru") return ru_landing_notes_all(inputs)
	if (locale === "sv") return sv_landing_notes_all(inputs)
	if (locale === "tr") return tr_landing_notes_all(inputs)
	if (locale === "zh") return zh_landing_notes_all(inputs)
	if (locale === "ja") return ja_landing_notes_all(inputs)
	return en_landing_notes_all(inputs)
});
