/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_FixedInputs */

const en_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marked as fixed: the reporters were told`)
};

const es_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado como arreglado: se ha avisado a quienes lo reportaron`)
};

const de_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als behoben markiert: die Meldenden wurden informiert`)
};

const fr_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marqué comme corrigé : les auteurs des rapports ont été prévenus`)
};

const it_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnato come corretto: gli autori dei rapporti sono stati avvisati`)
};

const nl_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemarkeerd als verholpen: de melders zijn op de hoogte gebracht`)
};

const pl_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznaczono jako naprawione: zgłaszający zostali powiadomieni`)
};

const pt_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado como corrigido: quem relatou foi avisado`)
};

const ru_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмечено как исправленное: авторы отчётов уведомлены`)
};

const sv_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markerat som åtgärdat: rapportörerna har meddelats`)
};

const tr_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeltildi olarak işaretlendi: bildirenlere haber verildi`)
};

const zh_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已标记为已修复：已通知报告者`)
};

const ja_basecamp_inbox_fixed = /** @type {(inputs: Basecamp_Inbox_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正済みにしました：報告者に通知しました`)
};

/**
* | output |
* | --- |
* | "Marked as fixed: the reporters were told" |
*
* @param {Basecamp_Inbox_FixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_fixed = /** @type {((inputs?: Basecamp_Inbox_FixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_FixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_fixed(inputs)
	if (locale === "de") return de_basecamp_inbox_fixed(inputs)
	if (locale === "fr") return fr_basecamp_inbox_fixed(inputs)
	if (locale === "it") return it_basecamp_inbox_fixed(inputs)
	if (locale === "nl") return nl_basecamp_inbox_fixed(inputs)
	if (locale === "pl") return pl_basecamp_inbox_fixed(inputs)
	if (locale === "pt") return pt_basecamp_inbox_fixed(inputs)
	if (locale === "ru") return ru_basecamp_inbox_fixed(inputs)
	if (locale === "sv") return sv_basecamp_inbox_fixed(inputs)
	if (locale === "tr") return tr_basecamp_inbox_fixed(inputs)
	if (locale === "zh") return zh_basecamp_inbox_fixed(inputs)
	if (locale === "ja") return ja_basecamp_inbox_fixed(inputs)
	return en_basecamp_inbox_fixed(inputs)
});
