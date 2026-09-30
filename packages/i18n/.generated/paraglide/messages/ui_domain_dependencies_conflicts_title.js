/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependencies_Conflicts_TitleInputs */

const en_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflicts with`)
};

const es_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choca con`)
};

const de_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konflikt mit`)
};

const fr_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En conflit avec`)
};

const it_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In conflitto con`)
};

const nl_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflicteert met`)
};

const pl_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konflikt z`)
};

const pt_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflita com`)
};

const ru_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конфликтует с`)
};

const sv_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krockar med`)
};

const tr_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şununla çakışır`)
};

const zh_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与之冲突`)
};

const ja_ui_domain_dependencies_conflicts_title = /** @type {(inputs: Ui_Domain_Dependencies_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`競合する MOD`)
};

/**
* | output |
* | --- |
* | "Conflicts with" |
*
* @param {Ui_Domain_Dependencies_Conflicts_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependencies_conflicts_title = /** @type {((inputs?: Ui_Domain_Dependencies_Conflicts_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependencies_Conflicts_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "de") return de_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "fr") return fr_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "it") return it_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "nl") return nl_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "pl") return pl_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "pt") return pt_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "ru") return ru_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "sv") return sv_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "tr") return tr_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "zh") return zh_ui_domain_dependencies_conflicts_title(inputs)
	if (locale === "ja") return ja_ui_domain_dependencies_conflicts_title(inputs)
	return en_ui_domain_dependencies_conflicts_title(inputs)
});
