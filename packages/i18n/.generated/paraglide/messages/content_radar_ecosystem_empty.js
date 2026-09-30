/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Ecosystem_EmptyInputs */

const en_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No loader status recorded for this build yet.`)
};

const es_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay estado del cargador para esta build.`)
};

const de_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für diesen Build ist noch kein Loader-Status erfasst.`)
};

const fr_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun état du loader n’est encore enregistré pour ce build.`)
};

const it_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuno stato del loader registrato per questa build.`)
};

const nl_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor deze build is nog geen loaderstatus vastgelegd.`)
};

const pl_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla tego buildu nie zapisano jeszcze stanu loadera.`)
};

const pt_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há status do loader registrado para esta build.`)
};

const ru_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для этой сборки статус загрузчика ещё не записан.`)
};

const sv_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen loaderstatus är registrerad för den här builden än.`)
};

const tr_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürüm için henüz yükleyici durumu kaydedilmedi.`)
};

const zh_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本尚未记录加载器状态。`)
};

const ja_content_radar_ecosystem_empty = /** @type {(inputs: Content_Radar_Ecosystem_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このビルドのローダーの状態はまだ記録されていません。`)
};

/**
* | output |
* | --- |
* | "No loader status recorded for this build yet." |
*
* @param {Content_Radar_Ecosystem_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_ecosystem_empty = /** @type {((inputs?: Content_Radar_Ecosystem_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Ecosystem_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_ecosystem_empty(inputs)
	if (locale === "de") return de_content_radar_ecosystem_empty(inputs)
	if (locale === "fr") return fr_content_radar_ecosystem_empty(inputs)
	if (locale === "it") return it_content_radar_ecosystem_empty(inputs)
	if (locale === "nl") return nl_content_radar_ecosystem_empty(inputs)
	if (locale === "pl") return pl_content_radar_ecosystem_empty(inputs)
	if (locale === "pt") return pt_content_radar_ecosystem_empty(inputs)
	if (locale === "ru") return ru_content_radar_ecosystem_empty(inputs)
	if (locale === "sv") return sv_content_radar_ecosystem_empty(inputs)
	if (locale === "tr") return tr_content_radar_ecosystem_empty(inputs)
	if (locale === "zh") return zh_content_radar_ecosystem_empty(inputs)
	if (locale === "ja") return ja_content_radar_ecosystem_empty(inputs)
	return en_content_radar_ecosystem_empty(inputs)
});
