/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Source_MachineInputs */

const en_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatic`)
};

const es_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automática`)
};

const de_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch`)
};

const fr_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatique`)
};

const it_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatica`)
};

const nl_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch`)
};

const pl_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatyczne`)
};

const pt_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automática`)
};

const ru_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автоматический`)
};

const sv_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisk`)
};

const tr_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik`)
};

const zh_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动`)
};

const ja_translations_source_machine = /** @type {(inputs: Translations_Source_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動`)
};

/**
* | output |
* | --- |
* | "Automatic" |
*
* @param {Translations_Source_MachineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_source_machine = /** @type {((inputs?: Translations_Source_MachineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Source_MachineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_source_machine(inputs)
	if (locale === "de") return de_translations_source_machine(inputs)
	if (locale === "fr") return fr_translations_source_machine(inputs)
	if (locale === "it") return it_translations_source_machine(inputs)
	if (locale === "nl") return nl_translations_source_machine(inputs)
	if (locale === "pl") return pl_translations_source_machine(inputs)
	if (locale === "pt") return pt_translations_source_machine(inputs)
	if (locale === "ru") return ru_translations_source_machine(inputs)
	if (locale === "sv") return sv_translations_source_machine(inputs)
	if (locale === "tr") return tr_translations_source_machine(inputs)
	if (locale === "zh") return zh_translations_source_machine(inputs)
	if (locale === "ja") return ja_translations_source_machine(inputs)
	return en_translations_source_machine(inputs)
});
