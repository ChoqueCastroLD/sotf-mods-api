/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Radar_Ecosystem_TitleInputs */

const en_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader and manager on ${i?.build}`)
};

const es_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cargador y gestor en ${i?.build}`)
};

const de_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader und Manager auf ${i?.build}`)
};

const fr_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader et gestionnaire sur ${i?.build}`)
};

const it_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader e gestore su ${i?.build}`)
};

const nl_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader en manager op ${i?.build}`)
};

const pl_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader i menedżer na ${i?.build}`)
};

const pt_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader e gerenciador na ${i?.build}`)
};

const ru_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузчик и менеджер на ${i?.build}`)
};

const sv_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loader och hanterare på ${i?.build}`)
};

const tr_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} sürümünde yükleyici ve yönetici`)
};

const zh_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} 上的加载器与管理器`)
};

const ja_content_radar_ecosystem_title = /** @type {(inputs: Content_Radar_Ecosystem_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} でのローダーとマネージャー`)
};

/**
* | output |
* | --- |
* | "Loader and manager on {build}" |
*
* @param {Content_Radar_Ecosystem_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_ecosystem_title = /** @type {((inputs: Content_Radar_Ecosystem_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Ecosystem_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_ecosystem_title(inputs)
	if (locale === "de") return de_content_radar_ecosystem_title(inputs)
	if (locale === "fr") return fr_content_radar_ecosystem_title(inputs)
	if (locale === "it") return it_content_radar_ecosystem_title(inputs)
	if (locale === "nl") return nl_content_radar_ecosystem_title(inputs)
	if (locale === "pl") return pl_content_radar_ecosystem_title(inputs)
	if (locale === "pt") return pt_content_radar_ecosystem_title(inputs)
	if (locale === "ru") return ru_content_radar_ecosystem_title(inputs)
	if (locale === "sv") return sv_content_radar_ecosystem_title(inputs)
	if (locale === "tr") return tr_content_radar_ecosystem_title(inputs)
	if (locale === "zh") return zh_content_radar_ecosystem_title(inputs)
	if (locale === "ja") return ja_content_radar_ecosystem_title(inputs)
	return en_content_radar_ecosystem_title(inputs)
});
