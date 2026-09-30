/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reports_EmptyInputs */

const en_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No field reports yet. Tried it? Report back.`)
};

const es_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reportes de campo. ¿Lo has probado? Cuéntalo.`)
};

const de_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Feldberichte. Ausprobiert? Berichte davon.`)
};

const fr_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun rapport de terrain pour l’instant. Vous l’avez essayé ? Racontez-nous.`)
};

const it_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun rapporto sul campo. L’hai provata? Faccelo sapere.`)
};

const nl_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen veldrapporten. Uitgeprobeerd? Laat het weten.`)
};

const pl_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak raportów terenowych. Testowałeś? Daj znać.`)
};

const pt_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há relatórios de campo. Testou? Conte como foi.`)
};

const ru_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевых отчётов пока нет. Уже пробовали? Расскажите.`)
};

const sv_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga fältrapporter än. Har du testat? Rapportera.`)
};

const tr_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz saha raporu yok. Denedin mi? Anlat.`)
};

const zh_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有实地报告。试过了吗？来反馈一下。`)
};

const ja_ui_domain_reports_empty = /** @type {(inputs: Ui_Domain_Reports_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポートはまだありません。試しましたか？結果を教えてください。`)
};

/**
* | output |
* | --- |
* | "No field reports yet. Tried it? Report back." |
*
* @param {Ui_Domain_Reports_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_empty = /** @type {((inputs?: Ui_Domain_Reports_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_empty(inputs)
	if (locale === "de") return de_ui_domain_reports_empty(inputs)
	if (locale === "fr") return fr_ui_domain_reports_empty(inputs)
	if (locale === "it") return it_ui_domain_reports_empty(inputs)
	if (locale === "nl") return nl_ui_domain_reports_empty(inputs)
	if (locale === "pl") return pl_ui_domain_reports_empty(inputs)
	if (locale === "pt") return pt_ui_domain_reports_empty(inputs)
	if (locale === "ru") return ru_ui_domain_reports_empty(inputs)
	if (locale === "sv") return sv_ui_domain_reports_empty(inputs)
	if (locale === "tr") return tr_ui_domain_reports_empty(inputs)
	if (locale === "zh") return zh_ui_domain_reports_empty(inputs)
	if (locale === "ja") return ja_ui_domain_reports_empty(inputs)
	return en_ui_domain_reports_empty(inputs)
});
