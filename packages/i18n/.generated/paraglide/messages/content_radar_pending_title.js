/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Pending_TitleInputs */

const en_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for field reports`)
};

const es_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esperando reportes de campo`)
};

const de_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warten auf Feldberichte`)
};

const fr_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente de rapports de terrain`)
};

const it_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa di rapporti sul campo`)
};

const nl_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht op veldrapporten`)
};

const pl_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czekamy na raporty terenowe`)
};

const pt_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando relatórios de campo`)
};

const ru_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждут полевых отчётов`)
};

const sv_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på fältrapporter`)
};

const tr_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu bekleyenler`)
};

const zh_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待实地报告`)
};

const ja_content_radar_pending_title = /** @type {(inputs: Content_Radar_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート待ち`)
};

/**
* | output |
* | --- |
* | "Waiting for field reports" |
*
* @param {Content_Radar_Pending_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_pending_title = /** @type {((inputs?: Content_Radar_Pending_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Pending_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_pending_title(inputs)
	if (locale === "de") return de_content_radar_pending_title(inputs)
	if (locale === "fr") return fr_content_radar_pending_title(inputs)
	if (locale === "it") return it_content_radar_pending_title(inputs)
	if (locale === "nl") return nl_content_radar_pending_title(inputs)
	if (locale === "pl") return pl_content_radar_pending_title(inputs)
	if (locale === "pt") return pt_content_radar_pending_title(inputs)
	if (locale === "ru") return ru_content_radar_pending_title(inputs)
	if (locale === "sv") return sv_content_radar_pending_title(inputs)
	if (locale === "tr") return tr_content_radar_pending_title(inputs)
	if (locale === "zh") return zh_content_radar_pending_title(inputs)
	if (locale === "ja") return ja_content_radar_pending_title(inputs)
	return en_content_radar_pending_title(inputs)
});
