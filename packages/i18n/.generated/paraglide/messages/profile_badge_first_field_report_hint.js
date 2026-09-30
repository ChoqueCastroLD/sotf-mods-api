/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_First_Field_Report_HintInputs */

const en_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send your first compatibility report.`)
};

const es_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envía tu primer reporte de compatibilidad.`)
};

const de_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sende deinen ersten Kompatibilitätsbericht.`)
};

const fr_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyez votre premier rapport de compatibilité.`)
};

const it_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia il tuo primo rapporto di compatibilità.`)
};

const nl_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuur je eerste compatibiliteitsrapport.`)
};

const pl_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij swój pierwszy raport zgodności.`)
};

const pt_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie seu primeiro relatório de compatibilidade.`)
};

const ru_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправьте свой первый отчёт о совместимости.`)
};

const sv_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka din första kompatibilitetsrapport.`)
};

const tr_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk uyumluluk raporunu gönder.`)
};

const zh_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交你的第一份兼容性报告。`)
};

const ja_profile_badge_first_field_report_hint = /** @type {(inputs: Profile_Badge_First_Field_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の互換性レポートを送る。`)
};

/**
* | output |
* | --- |
* | "Send your first compatibility report." |
*
* @param {Profile_Badge_First_Field_Report_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_first_field_report_hint = /** @type {((inputs?: Profile_Badge_First_Field_Report_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_First_Field_Report_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_first_field_report_hint(inputs)
	if (locale === "de") return de_profile_badge_first_field_report_hint(inputs)
	if (locale === "fr") return fr_profile_badge_first_field_report_hint(inputs)
	if (locale === "it") return it_profile_badge_first_field_report_hint(inputs)
	if (locale === "nl") return nl_profile_badge_first_field_report_hint(inputs)
	if (locale === "pl") return pl_profile_badge_first_field_report_hint(inputs)
	if (locale === "pt") return pt_profile_badge_first_field_report_hint(inputs)
	if (locale === "ru") return ru_profile_badge_first_field_report_hint(inputs)
	if (locale === "sv") return sv_profile_badge_first_field_report_hint(inputs)
	if (locale === "tr") return tr_profile_badge_first_field_report_hint(inputs)
	if (locale === "zh") return zh_profile_badge_first_field_report_hint(inputs)
	if (locale === "ja") return ja_profile_badge_first_field_report_hint(inputs)
	return en_profile_badge_first_field_report_hint(inputs)
});
