/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_SaveInputs */

const en_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save translation`)
};

const es_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar traducción`)
};

const de_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzung speichern`)
};

const fr_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer la traduction`)
};

const it_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva traduzione`)
};

const nl_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaling opslaan`)
};

const pl_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz tłumaczenie`)
};

const pt_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar tradução`)
};

const ru_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить перевод`)
};

const sv_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara översättning`)
};

const tr_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviriyi kaydet`)
};

const zh_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存译文`)
};

const ja_translations_save = /** @type {(inputs: Translations_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳を保存`)
};

/**
* | output |
* | --- |
* | "Save translation" |
*
* @param {Translations_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_save = /** @type {((inputs?: Translations_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_save(inputs)
	if (locale === "de") return de_translations_save(inputs)
	if (locale === "fr") return fr_translations_save(inputs)
	if (locale === "it") return it_translations_save(inputs)
	if (locale === "nl") return nl_translations_save(inputs)
	if (locale === "pl") return pl_translations_save(inputs)
	if (locale === "pt") return pt_translations_save(inputs)
	if (locale === "ru") return ru_translations_save(inputs)
	if (locale === "sv") return sv_translations_save(inputs)
	if (locale === "tr") return tr_translations_save(inputs)
	if (locale === "zh") return zh_translations_save(inputs)
	if (locale === "ja") return ja_translations_save(inputs)
	return en_translations_save(inputs)
});
