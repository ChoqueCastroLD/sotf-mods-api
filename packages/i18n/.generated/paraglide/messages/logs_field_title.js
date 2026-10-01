/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Field_TitleInputs */

const en_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title (optional)`)
};

const es_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título (opcional)`)
};

const de_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel (optional)`)
};

const fr_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre (facultatif)`)
};

const it_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titolo (facoltativo)`)
};

const nl_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel (optioneel)`)
};

const pl_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł (opcjonalnie)`)
};

const pt_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título (opcional)`)
};

const ru_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заголовок (необязательно)`)
};

const sv_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel (valfritt)`)
};

const tr_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık (isteğe bağlı)`)
};

const zh_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题（可选）`)
};

const ja_logs_field_title = /** @type {(inputs: Logs_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトル（任意）`)
};

/**
* | output |
* | --- |
* | "Title (optional)" |
*
* @param {Logs_Field_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_field_title = /** @type {((inputs?: Logs_Field_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Field_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_field_title(inputs)
	if (locale === "de") return de_logs_field_title(inputs)
	if (locale === "fr") return fr_logs_field_title(inputs)
	if (locale === "it") return it_logs_field_title(inputs)
	if (locale === "nl") return nl_logs_field_title(inputs)
	if (locale === "pl") return pl_logs_field_title(inputs)
	if (locale === "pt") return pt_logs_field_title(inputs)
	if (locale === "ru") return ru_logs_field_title(inputs)
	if (locale === "sv") return sv_logs_field_title(inputs)
	if (locale === "tr") return tr_logs_field_title(inputs)
	if (locale === "zh") return zh_logs_field_title(inputs)
	if (locale === "ja") return ja_logs_field_title(inputs)
	return en_logs_field_title(inputs)
});
