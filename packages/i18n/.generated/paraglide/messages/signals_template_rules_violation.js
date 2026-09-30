/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_Rules_ViolationInputs */

const en_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed for breaking the site rules.`)
};

const es_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirado por incumplir las normas del sitio.`)
};

const de_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wegen Verstoßes gegen die Seitenregeln entfernt.`)
};

const fr_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimé pour infraction aux règles du site.`)
};

const it_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimosso per violazione delle regole del sito.`)
};

const nl_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd wegens overtreding van de siteregels.`)
};

const pl_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto za naruszenie zasad strony.`)
};

const pt_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removido por violar as regras do site.`)
};

const ru_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалено за нарушение правил сайта.`)
};

const sv_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagen för brott mot sajtens regler.`)
};

const tr_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site kurallarını ihlal ettiği için kaldırıldı.`)
};

const zh_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`因违反网站规则被移除。`)
};

const ja_signals_template_rules_violation = /** @type {(inputs: Signals_Template_Rules_ViolationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトの規約に違反したため削除されました。`)
};

/**
* | output |
* | --- |
* | "Removed for breaking the site rules." |
*
* @param {Signals_Template_Rules_ViolationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_rules_violation = /** @type {((inputs?: Signals_Template_Rules_ViolationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Rules_ViolationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_rules_violation(inputs)
	if (locale === "de") return de_signals_template_rules_violation(inputs)
	if (locale === "fr") return fr_signals_template_rules_violation(inputs)
	if (locale === "it") return it_signals_template_rules_violation(inputs)
	if (locale === "nl") return nl_signals_template_rules_violation(inputs)
	if (locale === "pl") return pl_signals_template_rules_violation(inputs)
	if (locale === "pt") return pt_signals_template_rules_violation(inputs)
	if (locale === "ru") return ru_signals_template_rules_violation(inputs)
	if (locale === "sv") return sv_signals_template_rules_violation(inputs)
	if (locale === "tr") return tr_signals_template_rules_violation(inputs)
	if (locale === "zh") return zh_signals_template_rules_violation(inputs)
	if (locale === "ja") return ja_signals_template_rules_violation(inputs)
	return en_signals_template_rules_violation(inputs)
});
