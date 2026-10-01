/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Field_Text_PlaceholderInputs */

const en_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste your log here…`)
};

const es_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega tu log aquí…`)
};

const de_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge dein Log hier ein…`)
};

const fr_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez votre log ici…`)
};

const it_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla qui il tuo log…`)
};

const nl_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak je log hier…`)
};

const pl_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej tutaj swój log…`)
};

const pt_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole aqui o seu log…`)
};

const ru_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте лог сюда…`)
};

const sv_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in din logg här…`)
};

const tr_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logunuzu buraya yapıştırın…`)
};

const zh_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此粘贴你的日志…`)
};

const ja_logs_field_text_placeholder = /** @type {(inputs: Logs_Field_Text_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにログを貼り付け…`)
};

/**
* | output |
* | --- |
* | "Paste your log here…" |
*
* @param {Logs_Field_Text_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_field_text_placeholder = /** @type {((inputs?: Logs_Field_Text_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Field_Text_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_field_text_placeholder(inputs)
	if (locale === "de") return de_logs_field_text_placeholder(inputs)
	if (locale === "fr") return fr_logs_field_text_placeholder(inputs)
	if (locale === "it") return it_logs_field_text_placeholder(inputs)
	if (locale === "nl") return nl_logs_field_text_placeholder(inputs)
	if (locale === "pl") return pl_logs_field_text_placeholder(inputs)
	if (locale === "pt") return pt_logs_field_text_placeholder(inputs)
	if (locale === "ru") return ru_logs_field_text_placeholder(inputs)
	if (locale === "sv") return sv_logs_field_text_placeholder(inputs)
	if (locale === "tr") return tr_logs_field_text_placeholder(inputs)
	if (locale === "zh") return zh_logs_field_text_placeholder(inputs)
	if (locale === "ja") return ja_logs_field_text_placeholder(inputs)
	return en_logs_field_text_placeholder(inputs)
});
