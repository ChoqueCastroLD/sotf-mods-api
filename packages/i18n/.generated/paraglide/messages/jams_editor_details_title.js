/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Details_TitleInputs */

const en_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const es_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles`)
};

const de_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const fr_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails`)
};

const it_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli`)
};

const nl_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const pl_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły`)
};

const pt_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes`)
};

const ru_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer`)
};

const tr_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar`)
};

const zh_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情`)
};

const ja_jams_editor_details_title = /** @type {(inputs: Jams_Editor_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細`)
};

/**
* | output |
* | --- |
* | "Details" |
*
* @param {Jams_Editor_Details_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_details_title = /** @type {((inputs?: Jams_Editor_Details_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Details_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_details_title(inputs)
	if (locale === "de") return de_jams_editor_details_title(inputs)
	if (locale === "fr") return fr_jams_editor_details_title(inputs)
	if (locale === "it") return it_jams_editor_details_title(inputs)
	if (locale === "nl") return nl_jams_editor_details_title(inputs)
	if (locale === "pl") return pl_jams_editor_details_title(inputs)
	if (locale === "pt") return pt_jams_editor_details_title(inputs)
	if (locale === "ru") return ru_jams_editor_details_title(inputs)
	if (locale === "sv") return sv_jams_editor_details_title(inputs)
	if (locale === "tr") return tr_jams_editor_details_title(inputs)
	if (locale === "zh") return zh_jams_editor_details_title(inputs)
	if (locale === "ja") return ja_jams_editor_details_title(inputs)
	return en_jams_editor_details_title(inputs)
});
