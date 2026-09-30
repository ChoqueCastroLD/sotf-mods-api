/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_EmptyInputs */

const en_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No versions yet.`)
};

const es_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay versiones.`)
};

const de_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Versionen.`)
};

const fr_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune version pour l’instant.`)
};

const it_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna versione.`)
};

const nl_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen versies.`)
};

const pl_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak wersji.`)
};

const pt_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há versões.`)
};

const ru_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версий пока нет.`)
};

const sv_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga versioner än.`)
};

const tr_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz sürüm yok.`)
};

const zh_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有版本。`)
};

const ja_basecamp_versions_empty = /** @type {(inputs: Basecamp_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだバージョンがありません。`)
};

/**
* | output |
* | --- |
* | "No versions yet." |
*
* @param {Basecamp_Versions_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_empty = /** @type {((inputs?: Basecamp_Versions_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_empty(inputs)
	if (locale === "de") return de_basecamp_versions_empty(inputs)
	if (locale === "fr") return fr_basecamp_versions_empty(inputs)
	if (locale === "it") return it_basecamp_versions_empty(inputs)
	if (locale === "nl") return nl_basecamp_versions_empty(inputs)
	if (locale === "pl") return pl_basecamp_versions_empty(inputs)
	if (locale === "pt") return pt_basecamp_versions_empty(inputs)
	if (locale === "ru") return ru_basecamp_versions_empty(inputs)
	if (locale === "sv") return sv_basecamp_versions_empty(inputs)
	if (locale === "tr") return tr_basecamp_versions_empty(inputs)
	if (locale === "zh") return zh_basecamp_versions_empty(inputs)
	if (locale === "ja") return ja_basecamp_versions_empty(inputs)
	return en_basecamp_versions_empty(inputs)
});
