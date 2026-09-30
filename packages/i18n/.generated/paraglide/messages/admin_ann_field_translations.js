/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_TranslationsInputs */

const en_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translations`)
};

const es_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducciones`)
};

const de_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzungen`)
};

const fr_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traductions`)
};

const it_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzioni`)
};

const nl_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertalingen`)
};

const pl_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tłumaczenia`)
};

const pt_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduções`)
};

const ru_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переводы`)
};

const sv_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättningar`)
};

const tr_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviriler`)
};

const zh_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻译`)
};

const ja_admin_ann_field_translations = /** @type {(inputs: Admin_Ann_Field_TranslationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳`)
};

/**
* | output |
* | --- |
* | "Translations" |
*
* @param {Admin_Ann_Field_TranslationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_translations = /** @type {((inputs?: Admin_Ann_Field_TranslationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_TranslationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_translations(inputs)
	if (locale === "de") return de_admin_ann_field_translations(inputs)
	if (locale === "fr") return fr_admin_ann_field_translations(inputs)
	if (locale === "it") return it_admin_ann_field_translations(inputs)
	if (locale === "nl") return nl_admin_ann_field_translations(inputs)
	if (locale === "pl") return pl_admin_ann_field_translations(inputs)
	if (locale === "pt") return pt_admin_ann_field_translations(inputs)
	if (locale === "ru") return ru_admin_ann_field_translations(inputs)
	if (locale === "sv") return sv_admin_ann_field_translations(inputs)
	if (locale === "tr") return tr_admin_ann_field_translations(inputs)
	if (locale === "zh") return zh_admin_ann_field_translations(inputs)
	if (locale === "ja") return ja_admin_ann_field_translations(inputs)
	return en_admin_ann_field_translations(inputs)
});
