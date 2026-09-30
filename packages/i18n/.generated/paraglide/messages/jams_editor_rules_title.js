/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Rules_TitleInputs */

const en_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rules and eligibility`)
};

const es_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reglas y requisitos`)
};

const de_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regeln und Teilnahme`)
};

const fr_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Règles et éligibilité`)
};

const it_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regole e requisiti`)
};

const nl_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regels en deelname`)
};

const pl_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zasady i warunki udziału`)
};

const pt_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regras e elegibilidade`)
};

const ru_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правила и условия участия`)
};

const sv_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regler och behörighet`)
};

const tr_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurallar ve uygunluk`)
};

const zh_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`规则与资格`)
};

const ja_jams_editor_rules_title = /** @type {(inputs: Jams_Editor_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ルールと参加資格`)
};

/**
* | output |
* | --- |
* | "Rules and eligibility" |
*
* @param {Jams_Editor_Rules_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_rules_title = /** @type {((inputs?: Jams_Editor_Rules_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Rules_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_rules_title(inputs)
	if (locale === "de") return de_jams_editor_rules_title(inputs)
	if (locale === "fr") return fr_jams_editor_rules_title(inputs)
	if (locale === "it") return it_jams_editor_rules_title(inputs)
	if (locale === "nl") return nl_jams_editor_rules_title(inputs)
	if (locale === "pl") return pl_jams_editor_rules_title(inputs)
	if (locale === "pt") return pt_jams_editor_rules_title(inputs)
	if (locale === "ru") return ru_jams_editor_rules_title(inputs)
	if (locale === "sv") return sv_jams_editor_rules_title(inputs)
	if (locale === "tr") return tr_jams_editor_rules_title(inputs)
	if (locale === "zh") return zh_jams_editor_rules_title(inputs)
	if (locale === "ja") return ja_jams_editor_rules_title(inputs)
	return en_jams_editor_rules_title(inputs)
});
