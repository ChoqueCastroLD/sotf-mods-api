/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Create_TitleInputs */

const en_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New kit`)
};

const es_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo kit`)
};

const de_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Kit`)
};

const fr_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau kit`)
};

const it_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo kit`)
};

const nl_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe kit`)
};

const pl_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy zestaw`)
};

const pt_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo kit`)
};

const ru_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый набор`)
};

const sv_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt kit`)
};

const tr_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni kit`)
};

const zh_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建套装`)
};

const ja_kits_create_title = /** @type {(inputs: Kits_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいキット`)
};

/**
* | output |
* | --- |
* | "New kit" |
*
* @param {Kits_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_create_title = /** @type {((inputs?: Kits_Create_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Create_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_create_title(inputs)
	if (locale === "de") return de_kits_create_title(inputs)
	if (locale === "fr") return fr_kits_create_title(inputs)
	if (locale === "it") return it_kits_create_title(inputs)
	if (locale === "nl") return nl_kits_create_title(inputs)
	if (locale === "pl") return pl_kits_create_title(inputs)
	if (locale === "pt") return pt_kits_create_title(inputs)
	if (locale === "ru") return ru_kits_create_title(inputs)
	if (locale === "sv") return sv_kits_create_title(inputs)
	if (locale === "tr") return tr_kits_create_title(inputs)
	if (locale === "zh") return zh_kits_create_title(inputs)
	if (locale === "ja") return ja_kits_create_title(inputs)
	return en_kits_create_title(inputs)
});
