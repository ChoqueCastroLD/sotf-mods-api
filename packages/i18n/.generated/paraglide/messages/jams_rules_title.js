/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Rules_TitleInputs */

const en_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rules`)
};

const es_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reglas`)
};

const de_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regeln`)
};

const fr_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Règles`)
};

const it_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regole`)
};

const nl_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regels`)
};

const pl_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zasady`)
};

const pt_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regras`)
};

const ru_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правила`)
};

const sv_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regler`)
};

const tr_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurallar`)
};

const zh_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`规则`)
};

const ja_jams_rules_title = /** @type {(inputs: Jams_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ルール`)
};

/**
* | output |
* | --- |
* | "Rules" |
*
* @param {Jams_Rules_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_rules_title = /** @type {((inputs?: Jams_Rules_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Rules_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_rules_title(inputs)
	if (locale === "de") return de_jams_rules_title(inputs)
	if (locale === "fr") return fr_jams_rules_title(inputs)
	if (locale === "it") return it_jams_rules_title(inputs)
	if (locale === "nl") return nl_jams_rules_title(inputs)
	if (locale === "pl") return pl_jams_rules_title(inputs)
	if (locale === "pt") return pt_jams_rules_title(inputs)
	if (locale === "ru") return ru_jams_rules_title(inputs)
	if (locale === "sv") return sv_jams_rules_title(inputs)
	if (locale === "tr") return tr_jams_rules_title(inputs)
	if (locale === "zh") return zh_jams_rules_title(inputs)
	if (locale === "ja") return ja_jams_rules_title(inputs)
	return en_jams_rules_title(inputs)
});
