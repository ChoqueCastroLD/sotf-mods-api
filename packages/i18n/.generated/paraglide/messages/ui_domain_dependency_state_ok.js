/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependency_State_OkInputs */

const en_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Available`)
};

const es_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponible`)
};

const de_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verfügbar`)
};

const fr_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponible`)
};

const it_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponibile`)
};

const nl_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschikbaar`)
};

const pl_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dostępna`)
};

const pt_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponível`)
};

const ru_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доступна`)
};

const sv_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillgänglig`)
};

const tr_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanılabilir`)
};

const zh_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const ja_ui_domain_dependency_state_ok = /** @type {(inputs: Ui_Domain_Dependency_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用可能`)
};

/**
* | output |
* | --- |
* | "Available" |
*
* @param {Ui_Domain_Dependency_State_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependency_state_ok = /** @type {((inputs?: Ui_Domain_Dependency_State_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependency_State_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependency_state_ok(inputs)
	if (locale === "de") return de_ui_domain_dependency_state_ok(inputs)
	if (locale === "fr") return fr_ui_domain_dependency_state_ok(inputs)
	if (locale === "it") return it_ui_domain_dependency_state_ok(inputs)
	if (locale === "nl") return nl_ui_domain_dependency_state_ok(inputs)
	if (locale === "pl") return pl_ui_domain_dependency_state_ok(inputs)
	if (locale === "pt") return pt_ui_domain_dependency_state_ok(inputs)
	if (locale === "ru") return ru_ui_domain_dependency_state_ok(inputs)
	if (locale === "sv") return sv_ui_domain_dependency_state_ok(inputs)
	if (locale === "tr") return tr_ui_domain_dependency_state_ok(inputs)
	if (locale === "zh") return zh_ui_domain_dependency_state_ok(inputs)
	if (locale === "ja") return ja_ui_domain_dependency_state_ok(inputs)
	return en_ui_domain_dependency_state_ok(inputs)
});
