/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_About_EmptyInputs */

const en_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No description yet.`)
};

const es_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay descripción.`)
};

const de_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Beschreibung.`)
};

const fr_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de description.`)
};

const it_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna descrizione.`)
};

const nl_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen beschrijving.`)
};

const pl_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak opisu.`)
};

const pt_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há descrição.`)
};

const ru_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описания пока нет.`)
};

const sv_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen beskrivning än.`)
};

const tr_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz açıklama yok.`)
};

const zh_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无说明。`)
};

const ja_kits_about_empty = /** @type {(inputs: Kits_About_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明はまだありません。`)
};

/**
* | output |
* | --- |
* | "No description yet." |
*
* @param {Kits_About_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_about_empty = /** @type {((inputs?: Kits_About_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_About_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_about_empty(inputs)
	if (locale === "de") return de_kits_about_empty(inputs)
	if (locale === "fr") return fr_kits_about_empty(inputs)
	if (locale === "it") return it_kits_about_empty(inputs)
	if (locale === "nl") return nl_kits_about_empty(inputs)
	if (locale === "pl") return pl_kits_about_empty(inputs)
	if (locale === "pt") return pt_kits_about_empty(inputs)
	if (locale === "ru") return ru_kits_about_empty(inputs)
	if (locale === "sv") return sv_kits_about_empty(inputs)
	if (locale === "tr") return tr_kits_about_empty(inputs)
	if (locale === "zh") return zh_kits_about_empty(inputs)
	if (locale === "ja") return ja_kits_about_empty(inputs)
	return en_kits_about_empty(inputs)
});
