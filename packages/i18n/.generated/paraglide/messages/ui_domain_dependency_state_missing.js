/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependency_State_MissingInputs */

const en_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not on SOTF Mods`)
};

const es_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No está en SOTF Mods`)
};

const de_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht auf SOTF Mods`)
};

const fr_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absent de SOTF Mods`)
};

const it_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non presente su SOTF Mods`)
};

const nl_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet op SOTF Mods`)
};

const pl_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak na SOTF Mods`)
};

const pt_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não está no SOTF Mods`)
};

const ru_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет на SOTF Mods`)
};

const sv_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finns inte på SOTF Mods`)
};

const tr_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta yok`)
};

const zh_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不在 SOTF Mods 上`)
};

const ja_ui_domain_dependency_state_missing = /** @type {(inputs: Ui_Domain_Dependency_State_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods に未掲載`)
};

/**
* | output |
* | --- |
* | "Not on SOTF Mods" |
*
* @param {Ui_Domain_Dependency_State_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependency_state_missing = /** @type {((inputs?: Ui_Domain_Dependency_State_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependency_State_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependency_state_missing(inputs)
	if (locale === "de") return de_ui_domain_dependency_state_missing(inputs)
	if (locale === "fr") return fr_ui_domain_dependency_state_missing(inputs)
	if (locale === "it") return it_ui_domain_dependency_state_missing(inputs)
	if (locale === "nl") return nl_ui_domain_dependency_state_missing(inputs)
	if (locale === "pl") return pl_ui_domain_dependency_state_missing(inputs)
	if (locale === "pt") return pt_ui_domain_dependency_state_missing(inputs)
	if (locale === "ru") return ru_ui_domain_dependency_state_missing(inputs)
	if (locale === "sv") return sv_ui_domain_dependency_state_missing(inputs)
	if (locale === "tr") return tr_ui_domain_dependency_state_missing(inputs)
	if (locale === "zh") return zh_ui_domain_dependency_state_missing(inputs)
	if (locale === "ja") return ja_ui_domain_dependency_state_missing(inputs)
	return en_ui_domain_dependency_state_missing(inputs)
});
