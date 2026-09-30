/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_ResolvedInputs */

const en_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report resolved.`)
};

const es_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte resuelto.`)
};

const de_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldung erledigt.`)
};

const fr_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalement résolu.`)
};

const it_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazione risolta.`)
};

const nl_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melding afgehandeld.`)
};

const pl_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie rozwiązane.`)
};

const pt_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denúncia resolvida.`)
};

const ru_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалоба решена.`)
};

const sv_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälan löst.`)
};

const tr_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet çözüldü.`)
};

const zh_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报已解决。`)
};

const ja_ranger_report_resolved = /** @type {(inputs: Ranger_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告を解決しました。`)
};

/**
* | output |
* | --- |
* | "Report resolved." |
*
* @param {Ranger_Report_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_resolved = /** @type {((inputs?: Ranger_Report_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_resolved(inputs)
	if (locale === "de") return de_ranger_report_resolved(inputs)
	if (locale === "fr") return fr_ranger_report_resolved(inputs)
	if (locale === "it") return it_ranger_report_resolved(inputs)
	if (locale === "nl") return nl_ranger_report_resolved(inputs)
	if (locale === "pl") return pl_ranger_report_resolved(inputs)
	if (locale === "pt") return pt_ranger_report_resolved(inputs)
	if (locale === "ru") return ru_ranger_report_resolved(inputs)
	if (locale === "sv") return sv_ranger_report_resolved(inputs)
	if (locale === "tr") return tr_ranger_report_resolved(inputs)
	if (locale === "zh") return zh_ranger_report_resolved(inputs)
	if (locale === "ja") return ja_ranger_report_resolved(inputs)
	return en_ranger_report_resolved(inputs)
});
