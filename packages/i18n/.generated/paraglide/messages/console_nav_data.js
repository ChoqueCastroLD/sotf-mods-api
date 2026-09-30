/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_DataInputs */

const en_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your data`)
};

const es_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus datos`)
};

const de_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Daten`)
};

const fr_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos données`)
};

const it_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi dati`)
};

const nl_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gegevens`)
};

const pl_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje dane`)
};

const pt_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus dados`)
};

const ru_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши данные`)
};

const sv_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina uppgifter`)
};

const tr_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verilerin`)
};

const zh_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的数据`)
};

const ja_console_nav_data = /** @type {(inputs: Console_Nav_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのデータ`)
};

/**
* | output |
* | --- |
* | "Your data" |
*
* @param {Console_Nav_DataInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_data = /** @type {((inputs?: Console_Nav_DataInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_DataInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_data(inputs)
	if (locale === "de") return de_console_nav_data(inputs)
	if (locale === "fr") return fr_console_nav_data(inputs)
	if (locale === "it") return it_console_nav_data(inputs)
	if (locale === "nl") return nl_console_nav_data(inputs)
	if (locale === "pl") return pl_console_nav_data(inputs)
	if (locale === "pt") return pt_console_nav_data(inputs)
	if (locale === "ru") return ru_console_nav_data(inputs)
	if (locale === "sv") return sv_console_nav_data(inputs)
	if (locale === "tr") return tr_console_nav_data(inputs)
	if (locale === "zh") return zh_console_nav_data(inputs)
	if (locale === "ja") return ja_console_nav_data(inputs)
	return en_console_nav_data(inputs)
});
