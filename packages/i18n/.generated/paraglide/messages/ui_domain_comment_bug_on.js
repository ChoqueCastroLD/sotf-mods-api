/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Ui_Domain_Comment_Bug_OnInputs */

const en_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bug report · v${i?.version}`)
};

const es_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reporte de bug · v${i?.version}`)
};

const de_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fehlerbericht · v${i?.version}`)
};

const fr_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rapport de bug · v${i?.version}`)
};

const it_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnalazione di bug · v${i?.version}`)
};

const nl_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bugmelding · v${i?.version}`)
};

const pl_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zgłoszenie błędu · v${i?.version}`)
};

const pt_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relato de bug · v${i?.version}`)
};

const ru_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сообщение об ошибке · v${i?.version}`)
};

const sv_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buggrapport · v${i?.version}`)
};

const tr_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hata bildirimi · v${i?.version}`)
};

const zh_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`错误报告 · v${i?.version}`)
};

const ja_ui_domain_comment_bug_on = /** @type {(inputs: Ui_Domain_Comment_Bug_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`不具合報告 · v${i?.version}`)
};

/**
* | output |
* | --- |
* | "Bug report · v{version}" |
*
* @param {Ui_Domain_Comment_Bug_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_bug_on = /** @type {((inputs: Ui_Domain_Comment_Bug_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_Bug_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_bug_on(inputs)
	if (locale === "de") return de_ui_domain_comment_bug_on(inputs)
	if (locale === "fr") return fr_ui_domain_comment_bug_on(inputs)
	if (locale === "it") return it_ui_domain_comment_bug_on(inputs)
	if (locale === "nl") return nl_ui_domain_comment_bug_on(inputs)
	if (locale === "pl") return pl_ui_domain_comment_bug_on(inputs)
	if (locale === "pt") return pt_ui_domain_comment_bug_on(inputs)
	if (locale === "ru") return ru_ui_domain_comment_bug_on(inputs)
	if (locale === "sv") return sv_ui_domain_comment_bug_on(inputs)
	if (locale === "tr") return tr_ui_domain_comment_bug_on(inputs)
	if (locale === "zh") return zh_ui_domain_comment_bug_on(inputs)
	if (locale === "ja") return ja_ui_domain_comment_bug_on(inputs)
	return en_ui_domain_comment_bug_on(inputs)
});
