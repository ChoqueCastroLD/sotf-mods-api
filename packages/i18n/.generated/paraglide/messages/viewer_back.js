/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_BackInputs */

const en_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the preview`)
};

const es_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a la vista previa`)
};

const de_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur Vorschau`)
};

const fr_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à l'aperçu`)
};

const it_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna all'anteprima`)
};

const nl_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het voorbeeld`)
};

const pl_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do podglądu`)
};

const pt_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar à pré-visualização`)
};

const ru_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад к превью`)
};

const sv_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till förhandsvisningen`)
};

const tr_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizlemeye dön`)
};

const zh_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回预览`)
};

const ja_viewer_back = /** @type {(inputs: Viewer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビューに戻る`)
};

/**
* | output |
* | --- |
* | "Back to the preview" |
*
* @param {Viewer_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_back = /** @type {((inputs?: Viewer_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_back(inputs)
	if (locale === "de") return de_viewer_back(inputs)
	if (locale === "fr") return fr_viewer_back(inputs)
	if (locale === "it") return it_viewer_back(inputs)
	if (locale === "nl") return nl_viewer_back(inputs)
	if (locale === "pl") return pl_viewer_back(inputs)
	if (locale === "pt") return pt_viewer_back(inputs)
	if (locale === "ru") return ru_viewer_back(inputs)
	if (locale === "sv") return sv_viewer_back(inputs)
	if (locale === "tr") return tr_viewer_back(inputs)
	if (locale === "zh") return zh_viewer_back(inputs)
	if (locale === "ja") return ja_viewer_back(inputs)
	return en_viewer_back(inputs)
});
