/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Pending_HintInputs */

const en_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untested or mixed results`)
};

const es_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin probar o con resultados mixtos`)
};

const de_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungetestet oder gemischte Ergebnisse`)
};

const fr_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non testés ou résultats mitigés`)
};

const it_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non testate o risultati misti`)
};

const nl_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet getest of gemengde resultaten`)
};

const pl_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzetestowane lub z mieszanymi wynikami`)
};

const pt_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não testados ou com resultados mistos`)
};

const ru_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не проверены или результаты разные`)
};

const sv_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otestade eller blandade resultat`)
};

const tr_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test edilmemiş veya karışık sonuçlar`)
};

const zh_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未测试或结果不一`)
};

const ja_content_radar_pending_hint = /** @type {(inputs: Content_Radar_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未検証または結果がまちまち`)
};

/**
* | output |
* | --- |
* | "Untested or mixed results" |
*
* @param {Content_Radar_Pending_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_pending_hint = /** @type {((inputs?: Content_Radar_Pending_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Pending_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_pending_hint(inputs)
	if (locale === "de") return de_content_radar_pending_hint(inputs)
	if (locale === "fr") return fr_content_radar_pending_hint(inputs)
	if (locale === "it") return it_content_radar_pending_hint(inputs)
	if (locale === "nl") return nl_content_radar_pending_hint(inputs)
	if (locale === "pl") return pl_content_radar_pending_hint(inputs)
	if (locale === "pt") return pt_content_radar_pending_hint(inputs)
	if (locale === "ru") return ru_content_radar_pending_hint(inputs)
	if (locale === "sv") return sv_content_radar_pending_hint(inputs)
	if (locale === "tr") return tr_content_radar_pending_hint(inputs)
	if (locale === "zh") return zh_content_radar_pending_hint(inputs)
	if (locale === "ja") return ja_content_radar_pending_hint(inputs)
	return en_content_radar_pending_hint(inputs)
});
