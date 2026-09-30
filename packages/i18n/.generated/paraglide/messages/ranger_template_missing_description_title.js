/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Missing_Description_TitleInputs */

const en_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missing description`)
};

const es_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta la descripción`)
};

const de_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung fehlt`)
};

const fr_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description manquante`)
};

const it_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione mancante`)
};

const nl_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving ontbreekt`)
};

const pl_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak opisu`)
};

const pt_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta descrição`)
};

const ru_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет описания`)
};

const sv_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning saknas`)
};

const tr_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama eksik`)
};

const zh_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺少描述`)
};

const ja_ranger_template_missing_description_title = /** @type {(inputs: Ranger_Template_Missing_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明がない`)
};

/**
* | output |
* | --- |
* | "Missing description" |
*
* @param {Ranger_Template_Missing_Description_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_missing_description_title = /** @type {((inputs?: Ranger_Template_Missing_Description_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Missing_Description_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_missing_description_title(inputs)
	if (locale === "de") return de_ranger_template_missing_description_title(inputs)
	if (locale === "fr") return fr_ranger_template_missing_description_title(inputs)
	if (locale === "it") return it_ranger_template_missing_description_title(inputs)
	if (locale === "nl") return nl_ranger_template_missing_description_title(inputs)
	if (locale === "pl") return pl_ranger_template_missing_description_title(inputs)
	if (locale === "pt") return pt_ranger_template_missing_description_title(inputs)
	if (locale === "ru") return ru_ranger_template_missing_description_title(inputs)
	if (locale === "sv") return sv_ranger_template_missing_description_title(inputs)
	if (locale === "tr") return tr_ranger_template_missing_description_title(inputs)
	if (locale === "zh") return zh_ranger_template_missing_description_title(inputs)
	if (locale === "ja") return ja_ranger_template_missing_description_title(inputs)
	return en_ranger_template_missing_description_title(inputs)
});
