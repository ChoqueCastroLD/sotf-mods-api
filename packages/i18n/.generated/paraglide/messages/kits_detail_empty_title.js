/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Detail_Empty_TitleInputs */

const en_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing laid out yet`)
};

const es_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía está vacío`)
};

const de_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nichts ausgelegt`)
};

const fr_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien pour l’instant`)
};

const it_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente`)
};

const nl_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niets`)
};

const pl_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze nic tu nie ma`)
};

const pt_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda está vazio`)
};

const ru_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока пусто`)
};

const sv_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget utlagt än`)
};

const tr_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz boş`)
};

const zh_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还是空的`)
};

const ja_kits_detail_empty_title = /** @type {(inputs: Kits_Detail_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ空です`)
};

/**
* | output |
* | --- |
* | "Nothing laid out yet" |
*
* @param {Kits_Detail_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_detail_empty_title = /** @type {((inputs?: Kits_Detail_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Detail_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_detail_empty_title(inputs)
	if (locale === "de") return de_kits_detail_empty_title(inputs)
	if (locale === "fr") return fr_kits_detail_empty_title(inputs)
	if (locale === "it") return it_kits_detail_empty_title(inputs)
	if (locale === "nl") return nl_kits_detail_empty_title(inputs)
	if (locale === "pl") return pl_kits_detail_empty_title(inputs)
	if (locale === "pt") return pt_kits_detail_empty_title(inputs)
	if (locale === "ru") return ru_kits_detail_empty_title(inputs)
	if (locale === "sv") return sv_kits_detail_empty_title(inputs)
	if (locale === "tr") return tr_kits_detail_empty_title(inputs)
	if (locale === "zh") return zh_kits_detail_empty_title(inputs)
	if (locale === "ja") return ja_kits_detail_empty_title(inputs)
	return en_kits_detail_empty_title(inputs)
});
