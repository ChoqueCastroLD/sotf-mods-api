/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Versions_HintInputs */

const en_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions held by the checks, the security scan or a report.`)
};

const es_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones retenidas por las comprobaciones, el análisis de seguridad o un reporte.`)
};

const de_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen, die von den Prüfungen, dem Sicherheitsscan oder einer Meldung zurückgehalten werden.`)
};

const fr_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions retenues par les contrôles, l’analyse de sécurité ou un signalement.`)
};

const it_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni trattenute dai controlli, dall’analisi di sicurezza o da una segnalazione.`)
};

const nl_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies die zijn tegengehouden door de controles, de beveiligingsscan of een melding.`)
};

const pl_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje wstrzymane przez kontrole, skan bezpieczeństwa lub zgłoszenie.`)
};

const pt_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões retidas pelas verificações, pela análise de segurança ou por uma denúncia.`)
};

const ru_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии, задержанные проверками, сканированием безопасности или жалобой.`)
};

const sv_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner som hålls kvar av kontrollerna, säkerhetsskanningen eller en anmälan.`)
};

const tr_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller, güvenlik taraması veya bir şikâyet nedeniyle bekletilen sürümler.`)
};

const zh_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`被检查、安全扫描或举报暂扣的版本。`)
};

const ja_ranger_lane_versions_hint = /** @type {(inputs: Ranger_Lane_Versions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェック、セキュリティスキャン、または報告で保留中のバージョン。`)
};

/**
* | output |
* | --- |
* | "Versions held by the checks, the security scan or a report." |
*
* @param {Ranger_Lane_Versions_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_versions_hint = /** @type {((inputs?: Ranger_Lane_Versions_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Versions_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_versions_hint(inputs)
	if (locale === "de") return de_ranger_lane_versions_hint(inputs)
	if (locale === "fr") return fr_ranger_lane_versions_hint(inputs)
	if (locale === "it") return it_ranger_lane_versions_hint(inputs)
	if (locale === "nl") return nl_ranger_lane_versions_hint(inputs)
	if (locale === "pl") return pl_ranger_lane_versions_hint(inputs)
	if (locale === "pt") return pt_ranger_lane_versions_hint(inputs)
	if (locale === "ru") return ru_ranger_lane_versions_hint(inputs)
	if (locale === "sv") return sv_ranger_lane_versions_hint(inputs)
	if (locale === "tr") return tr_ranger_lane_versions_hint(inputs)
	if (locale === "zh") return zh_ranger_lane_versions_hint(inputs)
	if (locale === "ja") return ja_ranger_lane_versions_hint(inputs)
	return en_ranger_lane_versions_hint(inputs)
});
