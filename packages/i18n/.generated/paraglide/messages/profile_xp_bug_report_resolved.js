/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Bug_Report_ResolvedInputs */

const en_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug report marked as resolved by the creator`)
};

const es_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de bug marcado como resuelto por el creador`)
};

const de_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugmeldung vom Ersteller als gelöst markiert`)
};

const fr_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalement de bug marqué comme résolu par le créateur`)
};

const it_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazione di bug segnata come risolta dal creatore`)
};

const nl_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugmelding door de maker als opgelost gemarkeerd`)
};

const pl_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie błędu oznaczone przez twórcę jako rozwiązane`)
};

const pt_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relato de bug marcado como resolvido pelo criador`)
};

const ru_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Баг-репорт отмечен автором как решённый`)
};

const sv_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buggrapport markerad som löst av skaparen`)
};

const tr_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici tarafından çözüldü olarak işaretlenen hata bildirimi`)
};

const zh_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`漏洞报告被创作者标记为已解决`)
};

const ja_profile_xp_bug_report_resolved = /** @type {(inputs: Profile_Xp_Bug_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バグ報告がクリエイターに解決済みにされる`)
};

/**
* | output |
* | --- |
* | "Bug report marked as resolved by the creator" |
*
* @param {Profile_Xp_Bug_Report_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_bug_report_resolved = /** @type {((inputs?: Profile_Xp_Bug_Report_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Bug_Report_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_bug_report_resolved(inputs)
	if (locale === "de") return de_profile_xp_bug_report_resolved(inputs)
	if (locale === "fr") return fr_profile_xp_bug_report_resolved(inputs)
	if (locale === "it") return it_profile_xp_bug_report_resolved(inputs)
	if (locale === "nl") return nl_profile_xp_bug_report_resolved(inputs)
	if (locale === "pl") return pl_profile_xp_bug_report_resolved(inputs)
	if (locale === "pt") return pt_profile_xp_bug_report_resolved(inputs)
	if (locale === "ru") return ru_profile_xp_bug_report_resolved(inputs)
	if (locale === "sv") return sv_profile_xp_bug_report_resolved(inputs)
	if (locale === "tr") return tr_profile_xp_bug_report_resolved(inputs)
	if (locale === "zh") return zh_profile_xp_bug_report_resolved(inputs)
	if (locale === "ja") return ja_profile_xp_bug_report_resolved(inputs)
	return en_profile_xp_bug_report_resolved(inputs)
});
