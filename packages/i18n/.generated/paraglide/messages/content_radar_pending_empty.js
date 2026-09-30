/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Pending_EmptyInputs */

const en_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every top mod has a clear verdict on this build.`)
};

const es_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los mods principales tienen un veredicto claro en esta build.`)
};

const de_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Top-Mod hat auf diesem Build ein klares Ergebnis.`)
};

const fr_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque mod principal a un verdict clair sur ce build.`)
};

const it_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni mod principale ha un verdetto chiaro su questa build.`)
};

const nl_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke topmod heeft een duidelijk oordeel op deze build.`)
};

const pl_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy czołowy mod ma na tym buildzie jasny werdykt.`)
};

const pt_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os mods principais têm um veredito claro nesta build.`)
};

const ru_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У каждого топ-мода есть чёткий вердикт на этой сборке.`)
};

const sv_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje toppmodd har ett tydligt utslag på den här builden.`)
};

const tr_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümde her popüler modun net bir sonucu var.`)
};

const zh_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本上每个热门模组都已有明确结论。`)
};

const ja_content_radar_pending_empty = /** @type {(inputs: Content_Radar_Pending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このビルドでは上位 MOD すべてに明確な判定があります。`)
};

/**
* | output |
* | --- |
* | "Every top mod has a clear verdict on this build." |
*
* @param {Content_Radar_Pending_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_pending_empty = /** @type {((inputs?: Content_Radar_Pending_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Pending_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_pending_empty(inputs)
	if (locale === "de") return de_content_radar_pending_empty(inputs)
	if (locale === "fr") return fr_content_radar_pending_empty(inputs)
	if (locale === "it") return it_content_radar_pending_empty(inputs)
	if (locale === "nl") return nl_content_radar_pending_empty(inputs)
	if (locale === "pl") return pl_content_radar_pending_empty(inputs)
	if (locale === "pt") return pt_content_radar_pending_empty(inputs)
	if (locale === "ru") return ru_content_radar_pending_empty(inputs)
	if (locale === "sv") return sv_content_radar_pending_empty(inputs)
	if (locale === "tr") return tr_content_radar_pending_empty(inputs)
	if (locale === "zh") return zh_content_radar_pending_empty(inputs)
	if (locale === "ja") return ja_content_radar_pending_empty(inputs)
	return en_content_radar_pending_empty(inputs)
});
