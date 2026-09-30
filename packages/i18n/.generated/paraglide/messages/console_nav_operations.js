/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_OperationsInputs */

const en_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operations`)
};

const es_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operaciones`)
};

const de_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrieb`)
};

const fr_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exploitation`)
};

const it_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operazioni`)
};

const nl_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheer`)
};

const pl_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operacje`)
};

const pt_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operações`)
};

const ru_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эксплуатация`)
};

const sv_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drift`)
};

const tr_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operasyon`)
};

const zh_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运维`)
};

const ja_console_nav_operations = /** @type {(inputs: Console_Nav_OperationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`運用`)
};

/**
* | output |
* | --- |
* | "Operations" |
*
* @param {Console_Nav_OperationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_operations = /** @type {((inputs?: Console_Nav_OperationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_OperationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_operations(inputs)
	if (locale === "de") return de_console_nav_operations(inputs)
	if (locale === "fr") return fr_console_nav_operations(inputs)
	if (locale === "it") return it_console_nav_operations(inputs)
	if (locale === "nl") return nl_console_nav_operations(inputs)
	if (locale === "pl") return pl_console_nav_operations(inputs)
	if (locale === "pt") return pt_console_nav_operations(inputs)
	if (locale === "ru") return ru_console_nav_operations(inputs)
	if (locale === "sv") return sv_console_nav_operations(inputs)
	if (locale === "tr") return tr_console_nav_operations(inputs)
	if (locale === "zh") return zh_console_nav_operations(inputs)
	if (locale === "ja") return ja_console_nav_operations(inputs)
	return en_console_nav_operations(inputs)
});
