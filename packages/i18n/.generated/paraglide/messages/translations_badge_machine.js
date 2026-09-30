/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Badge_MachineInputs */

const en_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translated automatically`)
};

const es_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducido automáticamente`)
};

const de_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch übersetzt`)
};

const fr_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduit automatiquement`)
};

const it_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradotto automaticamente`)
};

const nl_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch vertaald`)
};

const pl_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetłumaczono automatycznie`)
};

const pt_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzido automaticamente`)
};

const ru_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переведено автоматически`)
};

const sv_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatiskt översatt`)
};

const tr_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik olarak çevrildi`)
};

const zh_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动翻译`)
};

const ja_translations_badge_machine = /** @type {(inputs: Translations_Badge_MachineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動翻訳`)
};

/**
* | output |
* | --- |
* | "Translated automatically" |
*
* @param {Translations_Badge_MachineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_badge_machine = /** @type {((inputs?: Translations_Badge_MachineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Badge_MachineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_badge_machine(inputs)
	if (locale === "de") return de_translations_badge_machine(inputs)
	if (locale === "fr") return fr_translations_badge_machine(inputs)
	if (locale === "it") return it_translations_badge_machine(inputs)
	if (locale === "nl") return nl_translations_badge_machine(inputs)
	if (locale === "pl") return pl_translations_badge_machine(inputs)
	if (locale === "pt") return pt_translations_badge_machine(inputs)
	if (locale === "ru") return ru_translations_badge_machine(inputs)
	if (locale === "sv") return sv_translations_badge_machine(inputs)
	if (locale === "tr") return tr_translations_badge_machine(inputs)
	if (locale === "zh") return zh_translations_badge_machine(inputs)
	if (locale === "ja") return ja_translations_badge_machine(inputs)
	return en_translations_badge_machine(inputs)
});
