/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Empty_TitleInputs */

const en_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No kits laid out yet`)
};

const es_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay kits`)
};

const de_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Kits ausgelegt`)
};

const fr_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun kit pour l’instant`)
};

const it_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun kit`)
};

const nl_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen kits`)
};

const pl_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma jeszcze zestawów`)
};

const pt_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há kits`)
};

const ru_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборов пока нет`)
};

const sv_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kit ännu`)
};

const tr_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz kit yok`)
};

const zh_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有套装`)
};

const ja_kits_empty_title = /** @type {(inputs: Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだキットはありません`)
};

/**
* | output |
* | --- |
* | "No kits laid out yet" |
*
* @param {Kits_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_empty_title = /** @type {((inputs?: Kits_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_empty_title(inputs)
	if (locale === "de") return de_kits_empty_title(inputs)
	if (locale === "fr") return fr_kits_empty_title(inputs)
	if (locale === "it") return it_kits_empty_title(inputs)
	if (locale === "nl") return nl_kits_empty_title(inputs)
	if (locale === "pl") return pl_kits_empty_title(inputs)
	if (locale === "pt") return pt_kits_empty_title(inputs)
	if (locale === "ru") return ru_kits_empty_title(inputs)
	if (locale === "sv") return sv_kits_empty_title(inputs)
	if (locale === "tr") return tr_kits_empty_title(inputs)
	if (locale === "zh") return zh_kits_empty_title(inputs)
	if (locale === "ja") return ja_kits_empty_title(inputs)
	return en_kits_empty_title(inputs)
});
