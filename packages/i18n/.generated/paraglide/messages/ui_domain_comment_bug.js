/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_BugInputs */

const en_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug report`)
};

const es_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de bug`)
};

const de_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlerbericht`)
};

const fr_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de bug`)
};

const it_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazione di bug`)
};

const nl_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugmelding`)
};

const pl_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie błędu`)
};

const pt_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório de bug`)
};

const ru_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщение об ошибке`)
};

const sv_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Felrapport`)
};

const tr_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata bildirimi`)
};

const zh_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误报告`)
};

const ja_ui_domain_comment_bug = /** @type {(inputs: Ui_Domain_Comment_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不具合報告`)
};

/**
* | output |
* | --- |
* | "Bug report" |
*
* @param {Ui_Domain_Comment_BugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_bug = /** @type {((inputs?: Ui_Domain_Comment_BugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_BugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_bug(inputs)
	if (locale === "de") return de_ui_domain_comment_bug(inputs)
	if (locale === "fr") return fr_ui_domain_comment_bug(inputs)
	if (locale === "it") return it_ui_domain_comment_bug(inputs)
	if (locale === "nl") return nl_ui_domain_comment_bug(inputs)
	if (locale === "pl") return pl_ui_domain_comment_bug(inputs)
	if (locale === "pt") return pt_ui_domain_comment_bug(inputs)
	if (locale === "ru") return ru_ui_domain_comment_bug(inputs)
	if (locale === "sv") return sv_ui_domain_comment_bug(inputs)
	if (locale === "tr") return tr_ui_domain_comment_bug(inputs)
	if (locale === "zh") return zh_ui_domain_comment_bug(inputs)
	if (locale === "ja") return ja_ui_domain_comment_bug(inputs)
	return en_ui_domain_comment_bug(inputs)
});
