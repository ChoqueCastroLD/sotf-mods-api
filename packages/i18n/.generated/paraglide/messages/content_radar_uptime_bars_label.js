/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ component: NonNullable<unknown> }} Content_Radar_Uptime_Bars_LabelInputs */

const en_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Daily uptime of ${i?.component}, oldest to newest`)
};

const es_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Disponibilidad diaria de ${i?.component}, de más antigua a más reciente`)
};

const de_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tägliche Verfügbarkeit von ${i?.component}, von alt nach neu`)
};

const fr_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Disponibilité quotidienne de ${i?.component}, de la plus ancienne à la plus récente`)
};

const it_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Disponibilità giornaliera di ${i?.component}, dalla più vecchia alla più recente`)
};

const nl_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dagelijkse uptime van ${i?.component}, van oud naar nieuw`)
};

const pl_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dzienna dostępność: ${i?.component}, od najstarszej do najnowszej`)
};

const pt_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Disponibilidade diária de ${i?.component}, da mais antiga à mais recente`)
};

const ru_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Доступность ${i?.component} по дням, от старых к новым`)
};

const sv_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Daglig drifttid för ${i?.component}, äldst till nyast`)
};

const tr_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.component} günlük çalışma süresi, eskiden yeniye`)
};

const zh_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.component} 每日可用性，从旧到新`)
};

const ja_content_radar_uptime_bars_label = /** @type {(inputs: Content_Radar_Uptime_Bars_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.component} の日別稼働率（古い順）`)
};

/**
* | output |
* | --- |
* | "Daily uptime of {component}, oldest to newest" |
*
* @param {Content_Radar_Uptime_Bars_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_bars_label = /** @type {((inputs: Content_Radar_Uptime_Bars_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_Bars_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_bars_label(inputs)
	if (locale === "de") return de_content_radar_uptime_bars_label(inputs)
	if (locale === "fr") return fr_content_radar_uptime_bars_label(inputs)
	if (locale === "it") return it_content_radar_uptime_bars_label(inputs)
	if (locale === "nl") return nl_content_radar_uptime_bars_label(inputs)
	if (locale === "pl") return pl_content_radar_uptime_bars_label(inputs)
	if (locale === "pt") return pt_content_radar_uptime_bars_label(inputs)
	if (locale === "ru") return ru_content_radar_uptime_bars_label(inputs)
	if (locale === "sv") return sv_content_radar_uptime_bars_label(inputs)
	if (locale === "tr") return tr_content_radar_uptime_bars_label(inputs)
	if (locale === "zh") return zh_content_radar_uptime_bars_label(inputs)
	if (locale === "ja") return ja_content_radar_uptime_bars_label(inputs)
	return en_content_radar_uptime_bars_label(inputs)
});
